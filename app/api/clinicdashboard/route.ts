import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req: NextRequest){

    const session = await getServerSession(authOptions);

    try {

        const dashboardData = await prisma.doctor.findMany({
          where: {
            //Cambiar employee por doctor cuando ya este la conexion
            id_user_FK : session.user.id
          },
          select:{
            local:{
              select:{
                id: true,
                name: true,
                address: true,
                building_number: true,
                phone_number:true
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