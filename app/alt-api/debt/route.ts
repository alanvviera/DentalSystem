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
    return NextResponse.json({ error: 'Access denied' }, { status: 403});
  }
  try {
    const client = await prisma.client.findUnique({
        where: {
          user_fk: Number(userId),
        },
        select: {
          id: true,
          },
        }
    );
    const debtsCompleted = await prisma.debt.findMany({
      where: {
        client_fk: client.id,
        paid: true,
      },
      select: {
        id: true,
        description: true,
        ammount: true,
      },
    });
    const debtsNotCompleted = await prisma.debt.findMany({
        where: {
          client_fk: client.id,
          paid: false,
        },
        select: {
          id: true,
          description: true,
          ammount: true,
        },
      });

    return NextResponse.json(
      { debtsCompleted, debtsNotCompleted },
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

export async function POST(req: NextRequest) {

  //const session = await getServerSession(authOptions);
  try {
    const {
      client_fk,
      ammount,
      date,
      paid,
      description,
    } = await req.json();


    
    // Create debt
    const newDebt = await prisma.debt.create({
      data: {
        ammount,
        date,
        paid,
        description,
        client:{connect:{id: client_fk}}
      }
    });
    
    return NextResponse.json({ message: 'Debt added successfully.', debt: newDebt }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
