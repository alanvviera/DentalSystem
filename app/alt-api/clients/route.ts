import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const clients = await prisma.client.findMany({
        select: {
          id: true,
          user: {
            select: {
                id: true,
                name: true,
                last_name: true
            }
          }
          },
        }
    );
    return NextResponse.json(
      { clients },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Error de servidor" },
      { status: 500 }
    );
  }
}