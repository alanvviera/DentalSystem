// pages/api/auth/login.ts
import { PrismaClient } from "@prisma/client";
import { cookies } from 'next/headers';
import bcrypt from "bcrypt";
import { setCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Credentials are missing" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    const res = new NextResponse();

    setCookie(
      "id",
      user.id,
      { cookies }
    );
    setCookie(
      "userType",
      user.type,
      { cookies }
    );
    setCookie(
      "name",
      `${user.name} ${user.last_name}`,
      { cookies }
    );
    setCookie(
      "email",
      user.email,
      { cookies }
    );

    return NextResponse.json(
      { message: "Logged in successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
