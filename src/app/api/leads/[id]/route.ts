import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type DbLeadStatus = "NEW" | "CONTACTED" | "SCHEDULED" | "CONVERTED" | "LOST";

const allowedStatuses = new Set<DbLeadStatus>([
  "NEW",
  "CONTACTED",
  "SCHEDULED",
  "CONVERTED",
  "LOST",
]);

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const status = String(body?.status || "").toUpperCase() as DbLeadStatus;

    if (!allowedStatuses.has(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({
      success: true,
      lead: {
        id: lead.id,
        status: lead.status,
        updatedAt: lead.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    console.error("Lead status update failed:", error);
    return NextResponse.json(
      { error: "Failed to update lead status" },
      { status: 500 }
    );
  }
}
