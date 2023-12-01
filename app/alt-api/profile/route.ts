import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getCookie } from "cookies-next";

const prisma: PrismaClient = new PrismaClient();

export async function GET(req: NextRequest) {
  //const session = await getServerSession(authOptions);

  const res = new NextResponse();
  const id = getCookie("id", { res, req });
  const email = getCookie("email", { res, req });
  const userType = getCookie("userType", { res, req });

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      address: true,
      birthday: true,
      curp: true,
      email: true,
      name: true,
      last_name: true,
      phone: true,
      sex: true,
    },
  });
  if (!user) {
    return NextResponse.json(
      { error: "User profile not found" },
      { status: 404 }
    );
  }
  if (userType === "DOCTOR") {
    const doctorData = await prisma.doctor.findUnique({
      where: {
        user_fk: Number(id),
      },
      select: {
        schedule_start: true,
        schedule_end: true,
        license: true,
        study_degree: true,
      },
    });
    return NextResponse.json(
      { data: { ...user, ...doctorData } },
      { status: 200 }
    );
  }
  if (userType === "EMPLOYEE") {
    const employeeData = await prisma.employee.findUnique({
      where: {
        user_fk: Number(id),
      },
      select: {
        schedule_start: true,
        schedule_end: true,
        role: true,
        study_degree: true,
      },
    });
    return NextResponse.json(
      { data: { ...user, ...employeeData } },
      { status: 200 }
    );
  }
  if (userType === "CLIENT") {
    const clientData = await prisma.client.findUnique({
      where: {
        user_fk: Number(id),
      },
      select: {
        allergies: true,
        emergency_number: true,
        health_problems: true,
      },
    });
    return NextResponse.json(
      { data: { ...user, ...clientData } },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { error: "Your account hasn't been created properly" },
    { status: 500 }
  );
}

export async function PUT(req: NextRequest) {
  //const session = await getServerSession(authOptions);
  const res = new NextResponse();
  const userId = getCookie("id", { res, req });
  const userType = getCookie("userType", { res, req });

  try {
    if (userType === "DOCTOR") {
      const {
        name,
        last_name,
        email,
        password,
        curp,
        phone,
        address,
        birthday,
        sex,
        license,
        study_degree,
      } = await req.json();
      const updatedProfile = await prisma.doctor.update({
        where: {
          user_fk: Number(userId),
        },
        data: {
          user: {
            update: {
              name,
              last_name,
              email,
              password,
              curp,
              phone,
              address,
              birthday,
              sex,
            },
          },
          license,
          study_degree,
        },
      });
      return NextResponse.json({ updatedProfile }, { status: 200 });
    }
    if (userType === "EMPLOYEE") {
      const {
        name,
        last_name,
        email,
        password,
        curp,
        phone,
        address,
        birthday,
        sex,
        role,
        study_degree,
      } = await req.json();
      const updatedProfile = await prisma.employee.update({
        where: {
          user_fk: Number(userId),
        },
        data: {
          user: {
            update: {
              name,
              last_name,
              email,
              password,
              curp,
              phone,
              address,
              birthday,
              sex,
            },
          },
          role,
          study_degree,
        },
      });
      return NextResponse.json({ updatedProfile }, { status: 200 });
    }
    if (userType === "CLIENT") {
      const {
        name,
        last_name,
        email,
        password,
        curp,
        phone,
        address,
        birthday,
        sex,
        allergies,
        emergency_number,
        health_problems,
      } = await req.json();
      const updatedProfile = await prisma.client.update({
        where: {
          user_fk: Number(userId),
        },
        data: {
          user: {
            update: {
              name,
              last_name,
              email,
              password,
              curp,
              phone,
              address,
              birthday,
              sex,
            },
          },
          allergies,
          emergency_number,
          health_problems,
        },
      });
      return NextResponse.json({ updatedProfile }, { status: 200 });
    }
    return NextResponse.json(
      { error: "Your account hasn't been created properly" },
      { status: 500 }
    );
  } catch (error) {
    console.log("Error updating user profile: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
