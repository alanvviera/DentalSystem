import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getCookie } from "cookies-next";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  //const session = await getServerSession(authOptions);
  const res = new NextResponse();
  const userId = getCookie("id", { res, req });
  const userType = getCookie("userType", { res, req });
  try {
    if (userType === "CLIENT") {
      const client = await prisma.client.findUnique({
        where: {
          user_fk: Number(userId),
        },
        select: {
          id: true,
        },
      });
      const appointments = await prisma.appointment.findMany({
        where: {
          client_fk: client.id,
        },
        select: {
          id: true,
          date: true,
          hour: true,
          client: {
            select: {
              user: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });
      return NextResponse.json({ appointments }, { status: 200 });
    }
    const appointments = await prisma.appointment.findMany({
      where: {
        in_charge_fk: Number(userId),
      },
      select: {
        id: true,
        date: true,
        hour: true,
        client: {
          select: {
            user: { select: { name: true, last_name: true } },
            id: true
          },
        },
      },
    });
    return NextResponse.json({ appointments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  //const session = await getServerSession(authOptions);
  try {
    const {
      client: client_fk,
      in_charge: in_charge_fk,
      type,
      date,
      hour,
      subject,
      status,
    } = await req.json();

    // Field validation
    if (
      !client_fk ||
      !in_charge_fk ||
      !type ||
      !status ||
      !date ||
      !hour ||
      !subject
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create appointment
    const newAppointment = await prisma.appointment.create({
      data: {
        type,
        date,
        hour,
        subject,
        status,
        in_charge: { connect: { id: in_charge_fk } },
        client: { connect: { id: client_fk } },
      },
    });

    return NextResponse.json(
      {
        message: "Appointment created successfully",
        appointment: newAppointment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
