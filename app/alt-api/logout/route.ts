// pages/api/auth/login.ts
import { PrismaClient } from "@prisma/client";
import { cookies } from 'next/headers';
import bcrypt from "bcrypt";
import { deleteCookie, setCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const res = new NextResponse();
    deleteCookie("id", { cookies });
    deleteCookie("userType", { cookies });
    deleteCookie("name", { cookies });
    deleteCookie("email", { cookies });
    return NextResponse.json(
      { message: "Logged out..." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
