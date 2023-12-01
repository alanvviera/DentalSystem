import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getCookie } from "cookies-next";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }) {
  //const session = await getServerSession(authOptions);
  const res = new NextResponse();
  const userId = getCookie("id", { res, req });
  const userType = getCookie("userType", { res, req });
  if (userType !== "CLIENT") {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }
  const debtId = params.id;

  try {
    const client = await prisma.client.findUnique({
      where: {
        user_fk: Number(userId),
      },
      select: {
        id: true,
      },
    });
    const debt = await prisma.debt.findUnique({
      where: { client_fk: client.id, id: Number(debtId) },
      select: {
        id: true,
        ammount: true,
        paid: true,
        date: true,
        description: true,
      },
    });

    if (!debt) {
      return NextResponse.json({ error: "Debt not found" }, { status: 404 });
    }

    return NextResponse.json({ debt }, { status: 200 });
  } catch (error) {
    console.error("Error fetching debt:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }) {
  //const session = await getServerSession(authOptions);
  const debtId = params.id;

  const res = new NextResponse();
  const userId = getCookie("id", { res, req });
  const userType = getCookie("userType", { res, req });

  const { ammount, paid, description } = await req.json();
  try {
    const debt = await prisma.debt.update({
      where: {
        id: Number(debtId),
      },
      data: {
        ammount,
        paid,
        description,
      },
    });

    if (!debt) {
      return NextResponse.json(
        { error: "Debt not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ debt }, { status: 200 });
  } catch (error) {
    console.error("Error updating debt:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
