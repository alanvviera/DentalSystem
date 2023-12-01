import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      last_name,
      phone,
      birthday,
      email,
      password,
      sex,
      address,
      curp,
    } = await req.json();
    // Field validation
    if (
      !name ||
      !last_name ||
      !email ||
      !password ||
      !phone ||
      !address ||
      !sex
    ) {
      return NextResponse.json(
        { message: "Fields are required." },
        { status: 400 }
      );
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    // if user already exists
    if (existingUser) {
      return NextResponse.json(
        {
          message:
            "There is an account with the same email. Please Log in with your existing account.",
        },
        { status: 202 }
      );
    }
    //Password encryption
    const hashedPassword = bcrypt.hashSync(password, 10);
    //Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        type: "CLIENT",
        curp,
        last_name,
        email,
        password: hashedPassword,
        phone,
        address,
        birthday,
        sex
      },
    });
    //Create client
    const newClient = await prisma.client.create({
      data: {
        user_fk: newUser.id,
      },
    });

    return NextResponse.json(
      {
        message: "Client account created successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
