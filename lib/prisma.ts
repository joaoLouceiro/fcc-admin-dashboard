/**
 * In this file, pass the Prisma client to your entire app as a global variable.
 */
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
