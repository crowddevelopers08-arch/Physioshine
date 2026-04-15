import { NextResponse } from "next/server";
import { LeadStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type CreateLeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  treatment?: string;
  preferredDate?: string;
  source?: string;
};

const frontendStatusMap: Record<LeadStatus, string> = {
  NEW: "new",
  CONTACTED: "contacted",
  SCHEDULED: "scheduled",
  CONVERTED: "converted",
  LOST: "lost",
};

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function buildTelecrmPayload(lead: {
  name: string;
  phone: string;
  email?: string | null;
  treatment: string;
  preferredDate?: string | null;
  source?: string | null;
}) {
  return {
    fields: {
      Id: "",
      name: lead.name,
      email: lead.email || "",
      phone: normalizePhone(lead.phone),
      preferreddate: lead.preferredDate || "",
      preferredtime: "",
      select_the_procedure: lead.treatment,
      message: "",
      "Lead Status": "new",
      "Lead Request Type": "appointment",
      PageName: lead.source || "website",
      FormName: "physioshine_booking_form",
    },
    actions: [
      {
        type: "SYSTEM_NOTE",
        text: `Treatment: ${lead.treatment}`,
      },
      {
        type: "SYSTEM_NOTE",
        text: `Preferred Date: ${lead.preferredDate || "Not provided"}`,
      },
      {
        type: "SYSTEM_NOTE",
        text: `Source: ${lead.source || "website"}`,
      },
    ],
  };
}

async function syncLeadToTelecrm(lead: {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  treatment: string;
  preferredDate?: string | null;
  source?: string | null;
}) {
  const endpoint = process.env.TELECRM_API_URL;
  const apiKey = process.env.TELECRM_API_KEY;

  if (!endpoint || !apiKey) {
    return {
      synced: false,
      error: "TeleCRM environment variables are not configured.",
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      body: JSON.stringify(buildTelecrmPayload(lead)),
      signal: controller.signal,
    });

    if (response.status === 204) {
      return { synced: true as const, telecrmId: undefined };
    }

    const raw = await response.text();

    if (!response.ok) {
      throw new Error(raw || `TeleCRM request failed with ${response.status}`);
    }

    const parsed = raw ? JSON.parse(raw) : {};
    return {
      synced: true as const,
      telecrmId: parsed?.id ? String(parsed.id) : undefined,
    };
  } catch (error) {
    return {
      synced: false as const,
      error: error instanceof Error ? error.message : "TeleCRM sync failed",
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status")?.trim() || "";
    const treatment = searchParams.get("treatment")?.trim() || "";

    const where = {
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" as const } },
              { phone: { contains: search } },
              { email: { contains: search, mode: "insensitive" as const } },
              { treatment: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {}),
      ...(status
        ? {
            status: status.toUpperCase() as LeadStatus,
          }
        : {}),
      ...(treatment
        ? {
            treatment: { contains: treatment, mode: "insensitive" as const },
          }
        : {}),
    };

    const leads = await prisma.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      leads: leads.map((lead) => ({
        id: lead.id,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        treatment: lead.treatment,
        preferredDate: lead.preferredDate,
        source: lead.source,
        status: frontendStatusMap[lead.status],
        telecrmSynced: lead.telecrmSynced,
        telecrmId: lead.telecrmId,
        telecrmError: lead.telecrmError,
        createdAt: lead.createdAt.toISOString(),
        updatedAt: lead.updatedAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateLeadPayload;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim() || null;
    const treatment = body.treatment?.trim();
    const preferredDate = body.preferredDate?.trim() || null;
    const source = body.source?.trim() || "homepage-booking-form";

    if (!name || !phone || !treatment) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, treatment" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        email,
        treatment,
        preferredDate,
        source,
      },
    });

    const telecrmResult = await syncLeadToTelecrm(lead);

    const updatedLead = await prisma.lead.update({
      where: { id: lead.id },
      data: telecrmResult.synced
        ? {
            telecrmSynced: true,
            telecrmId: telecrmResult.telecrmId,
            telecrmError: null,
            syncedAt: new Date(),
          }
        : {
            telecrmSynced: false,
            telecrmError: telecrmResult.error,
            syncedAt: new Date(),
          },
    });

    return NextResponse.json(
      {
        success: true,
        lead: {
          id: updatedLead.id,
          telecrmSynced: updatedLead.telecrmSynced,
          telecrmError: updatedLead.telecrmError,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json(
      { error: "Failed to submit booking request" },
      { status: 500 }
    );
  }
}

export const runtime = "nodejs";
