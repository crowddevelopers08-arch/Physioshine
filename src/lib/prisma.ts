import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: any;
  prismaConnectionString: string | undefined;
  prismaPromise: Promise<any> | undefined;
};

async function createPrismaClient() {
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

  const prismaModule = await import("@prisma/client");
  const PrismaClient =
    "PrismaClient" in prismaModule
      ? prismaModule.PrismaClient
      : prismaModule.default.PrismaClient;

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

  if (
    globalForPrisma.prismaPromise &&
    globalForPrisma.prismaConnectionString === connectionString
  ) {
    return globalForPrisma.prismaPromise;
  }

  globalForPrisma.prismaConnectionString = connectionString;
  globalForPrisma.prismaPromise = createPrismaClient().then((client) => {
    globalForPrisma.prisma = client;
    return client;
  });

  const prisma = await globalForPrisma.prismaPromise;

  if (process.env.NODE_ENV === "production") {
    globalForPrisma.prismaPromise = undefined;
  }

  return prisma;
}
