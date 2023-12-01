import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const doctors = await prisma.doctor.findMany({
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
      { doctors },
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