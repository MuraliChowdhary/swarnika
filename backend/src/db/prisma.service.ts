import { PrismaClient } from "@prisma/client";

// Ensures there is only one instance of PrismaClient in the application
const prisma = new PrismaClient();

export default prisma;