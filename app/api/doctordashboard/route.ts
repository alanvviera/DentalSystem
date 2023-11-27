// pages/api/auth/login.ts
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

  const userId = req.nextUrl.searchParams.get('id')
  
  const session = getSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, {status: 401})
  }
  
  try {

    const dashboardData = await prisma.user_data.findUnique({
      where: {id: parseInt(userId)},
      select: {
        name: true, //falta la imagen de perfil
        //Falta incluir los demas tablas citas y pendientes
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