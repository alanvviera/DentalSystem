import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getCookie } from "cookies-next";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  //const session = await getServerSession(authOptions);
  const res = new NextResponse();
  const userId = getCookie("id", { res, req });
  const userType = getCookie("userType", { res, req });
  if (userType !== "CLIENT") {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }
  try {
    const client = await prisma.client.findUnique({
      where: {
        user_fk: Number(userId),
      },
      select: {
        id: true,
        user: {
          select: {
            name: true,
            last_name: true,
            email: true,
          },
        },
      },
    });

    if (!client) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get lastest 5 appointments
    const appointments = await prisma.appointment.findMany({
      where: {
        client_fk: client.id,
        date: { gte: new Date() }, // Filter recent appointments
      },
      take: 5,
      orderBy: { date: "asc" },
      select: {
        id: true,
        in_charge: {
          select: {
            name: true,
          },
        },
        date: true,
        hour: true,
      },
    });

    const lastDebt = await prisma.debt.findFirst({
      where: {
        client_fk: client.id,
        paid: false
        // date: { gte: new Date() },
      },
      orderBy: { date: 'asc' },
      select: {
        id: true,
        date: true,
        ammount: true
      },
    });

    const dashboardData = { client, appointments, lastDebt };

    return NextResponse.json({ dashboardData }, { status: 200 });
  } catch (error) {
    console.error({ errorString: "Error fetching dashboard data: ", error });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
