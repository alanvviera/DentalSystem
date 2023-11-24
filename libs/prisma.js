import { PrismaClient } from "@prisma/client";

export const prisma = global.prisma || new PrismaClient()

if(process.env.NODE !== "production"){
    global.prisma = prisma
}