import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getCookie } from "cookies-next";
//import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, {params}) {
  //const session = await getServerSession(authOptions);
  const appointmentId = params.id;

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
      const appointment = await prisma.appointment.findUnique({
        where: {
          id: parseInt(appointmentId),
          client_fk: client.id,
        },
        select: {
          id: true,
          status: true,
          in_charge: { select: { name: true } },
          client: { select: { user: { select: { name: true } } } },
          type: true,
          date: true,
          hour: true,
          subject: true,
        },
      });

      if (!appointment) {
        return NextResponse.json(
          { error: "Appointment not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ appointment }, { status: 200 });
    }

    const appointment = await prisma.appointment.findUnique({
      where: {
        id: parseInt(appointmentId),
        in_charge_fk: Number(userId),
      },
      select: {
        id: true,
        status: true,
        in_charge: { select: { id: true, name: true } },
        client: { select: { id: true, user: { select: { name: true } } } },
        type: true,
        date: true,
        hour: true,
        subject: true,
      },
    });

    if (!appointment) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ appointment }, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointment:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, {params}) {
  //const session = await getServerSession(authOptions);
  const appointmentId = params.id;

  const res = new NextResponse();
  const userId = getCookie("id", { res, req });
  const userType = getCookie("userType", { res, req });

  const { client_fk, in_charge_fk, type, status, date, hour, subject } =
    await req.json();
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
      const appointment = await prisma.appointment.update({
        where: {
          id: parseInt(appointmentId),
          client_fk: client.id,
        },
        data: {
          status,
          date,
          hour,
          subject,
        },
      });

      if (!appointment) {
        return NextResponse.json(
          { error: "Appointment not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ appointment }, { status: 200 });
    }

    const appointment = await prisma.appointment.update({
      where: {
        id: parseInt(appointmentId),
        in_charge_fk: Number(userId),
      },
      data: {
        status,
        date,
        hour,
        subject,
      },
    });

    if (!appointment) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ appointment }, { status: 200 });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, {params}) {
  //const session = await getServerSession(authOptions);
  const appointmentId = params.id

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
        const appointment = await prisma.appointment.delete({
            where: {
              id: parseInt(appointmentId),
              client_fk: client.id,
            },
          });
      
          if (!appointment) {
            return NextResponse.json(
              { error: "Appointment not found" },
              { status: 404 }
            );
          }
      
          return NextResponse.json(
            { message: "Appointment deleted successfully" },
            { status: 200 }
          );
    }
    const appointment = await prisma.appointment.delete({
      where: {
        id: parseInt(appointmentId),
        in_charge_fk: Number(userId),
      },
    });

    if (!appointment) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Appointment deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
