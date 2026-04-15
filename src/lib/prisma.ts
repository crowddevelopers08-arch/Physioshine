import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: any;
  prismaConnectionString: string | undefined;
};

function createPrismaClient() {
  const connectionString =
    process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL_UNPOOLED or DATABASE_URL must be configured."
    );
  }

  const pool = new Pool({
    connectionString,
    ssl:
      connectionString.includes("sslmode=require") ||
      connectionString.includes("neon.tech")
        ? { rejectUnauthorized: false }
        : undefined,
  });

  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}

export async function getPrisma() {
  const connectionString =
    process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;

  if (
    globalForPrisma.prisma &&
    globalForPrisma.prismaConnectionString === connectionString
  ) {
    return globalForPrisma.prisma;
  }

  globalForPrisma.prismaConnectionString = connectionString;
  const client = createPrismaClient();
  globalForPrisma.prisma = client;

  return client;
}
