// pages/api/auth/login.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, {status: 401})
  }
  
  try {

    const dashboardData = await prisma.appointment.findMany({
      where: {
        id_user_FK: session.user.id
      },
      select: {
        date: true,
        hour: true,
        user_data: {
          select: {
            name: true
          }
        }
      }
    });

    if (!dashboardData) {
      return NextResponse.json({ error: 'Dashboard data not found' }, { status: 404});
    }

    return NextResponse.json({dashboardData}, { status: 200 });

  } catch (error) {
    console.error({ errorString: 'Error fetching dashboard data: ', error});
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}