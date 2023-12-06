import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req: NextRequest){

    const session = await getServerSession(authOptions);
    const appointmentId = req.nextUrl.searchParams.get('id')

    try {

        const dashboardData = await prisma.local.findUnique({
          where: {
            id : parseInt(appointmentId),
          },
          select:{
            id: true,
            id_local: true,
            address: true,
            building_number: true,
            phone_number: true,
            status: true,
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