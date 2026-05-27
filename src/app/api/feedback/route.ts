export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

interface FeedbackInput {
  name: string;
  email: string;
  phone: string;
  suggestions: string;
}

// ── Google Sheets ─────────────────────────────────────────────────────────────
async function appendFeedbackToSheet(data: FeedbackInput) {
  const endpoint =
    process.env.GOOGLE_SHEETS_FEEDBACK_URL ||
    process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!endpoint) return { skipped: true, reason: "No Google Sheets URL set" };

  const payload = {
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.replace(/[\s\-()]/g, "").replace(/^\+91/, ""),
    suggestions: data.suggestions.trim(),
    source: "Physio Shine – Client Feedback",
    pageName: "client-feedback",
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const text = await res.text();

  if (
    text.includes("<title>Access denied</title>") ||
    text.includes("You need access") ||
    text.includes("Open the document directly")
  ) {
    throw new Error(
      "Google Apps Script access denied. Redeploy with access set to Anyone."
    );
  }

  if (!res.ok) {
    throw new Error(text || `Google Sheets responded with ${res.status}`);
  }

  try {
    return text ? JSON.parse(text) : { success: true };
  } catch {
    return { success: true };
  }
}

// ── TeleCRM ───────────────────────────────────────────────────────────────────
function buildTelecrmPayload(data: FeedbackInput) {
  const pageName = "client-feedback";
  const formName = "client-feedback-form";

  return {
    fields: {
      Id: "",
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.replace(/\D/g, ""),
      select_the_procedure: "Client Feedback",
      message: data.suggestions.trim(),
      "Lead Status": "new",
      "Lead Request Type": "feedback",
      PageName: pageName,
      FormName: formName,
      formname: formName,
      "Form Name": formName,
    },
    actions: [
      { type: "SYSTEM_NOTE", text: `Source: Physio Shine – Client Feedback Page` },
      { type: "SYSTEM_NOTE", text: `Suggestions: ${data.suggestions.trim()}` },
      { type: "SYSTEM_NOTE", text: "Consent Given: Yes" },
    ],
  };
}

async function syncFeedbackToTelecrm(data: FeedbackInput) {
  const endpoint = process.env.TELECRM_API_URL;
  const apiKey = process.env.TELECRM_API_KEY;

  if (!endpoint || !apiKey) {
    return {
      synced: false as const,
      error: "TeleCRM environment variables are not configured.",
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      body: JSON.stringify(buildTelecrmPayload(data)),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.status === 204) return { synced: true as const, telecrmId: undefined };

    const raw = await res.text();

    if (!res.ok) {
      throw new Error(raw || `TeleCRM request failed with ${res.status}`);
    }

    const parsed = raw ? JSON.parse(raw) : {};
    return {
      synced: true as const,
      telecrmId: parsed?.id ? String(parsed.id) : undefined,
    };
  } catch (error) {
    clearTimeout(timeout);
    return {
      synced: false as const,
      error: error instanceof Error ? error.message : "TeleCRM sync failed",
    };
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name = "", email = "", phone = "", suggestions = "" } = body;

  if (!name.trim())
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });

  if (!email.trim())
    return NextResponse.json({ error: "Please enter your email address." }, { status: 400 });

  if (!phone.trim())
    return NextResponse.json({ error: "Please enter your phone number." }, { status: 400 });

  if (!suggestions.trim())
    return NextResponse.json({ error: "Please share your suggestions." }, { status: 400 });

  const feedbackData: FeedbackInput = { name, email, phone, suggestions };

  // ── 1. Save to Prisma DB ───────────────────────────────────────────────────
  let lead: { id: string } | null = null;
  try {
    const prisma = await getPrisma();
    lead = await prisma.lead.create({
      data: {
        name: name.trim(),
        phone: phone.replace(/[\s\-()]/g, "").replace(/^\+91/, ""),
        email: email.trim(),
        treatment: "Client Feedback",
        source: `client-feedback: ${suggestions.trim().substring(0, 200)}`,
        status: "NEW",
      },
    });
  } catch (dbError) {
    console.error("[DB] Failed to save feedback:", dbError);
    // Non-fatal — continue with Sheets + TeleCRM
  }

  // ── 2. Google Sheets + TeleCRM (parallel) ─────────────────────────────────
  const [sheetResult, crmResult] = await Promise.allSettled([
    appendFeedbackToSheet(feedbackData),
    syncFeedbackToTelecrm(feedbackData),
  ]);

  // Update DB row with TeleCRM sync status
  if (lead) {
    try {
      const prisma = await getPrisma();
      const crmOk = crmResult.status === "fulfilled" && crmResult.value.synced;
      const crmErr =
        crmResult.status === "rejected"
          ? (crmResult.reason as Error)?.message
          : !crmOk
          ? (crmResult.value as { error?: string }).error
          : null;

      await prisma.lead.update({
        where: { id: lead.id },
        data: crmOk
          ? {
              telecrmSynced: true,
              telecrmId:
                crmResult.status === "fulfilled"
                  ? (crmResult.value as { telecrmId?: string }).telecrmId ?? null
                  : null,
              telecrmError: null,
              syncedAt: new Date(),
            }
          : {
              telecrmSynced: false,
              telecrmError: crmErr ?? "Unknown error",
              syncedAt: new Date(),
            },
      });
    } catch (updateErr) {
      console.error("[DB] Failed to update TeleCRM sync status:", updateErr);
    }
  }

  if (sheetResult.status === "rejected") {
    console.error("[Google Sheets - Feedback] Error:", sheetResult.reason?.message);
  }
  if (crmResult.status === "rejected") {
    console.error("[TeleCRM - Feedback] Error:", crmResult.reason?.message);
  }

  return NextResponse.json(
    {
      success: true,
      db: lead ? "saved" : "failed",
      sheet: sheetResult.status === "fulfilled" ? "ok" : "failed",
      crm: crmResult.status === "fulfilled" && crmResult.value.synced ? "ok" : "failed",
      timestamp: new Date().toISOString(),
    },
    { status: 201 }
  );
}
