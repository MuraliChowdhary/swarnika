"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// Ensures there is only one instance of PrismaClient in the application
const prisma = new client_1.PrismaClient();
exports.default = prisma;
