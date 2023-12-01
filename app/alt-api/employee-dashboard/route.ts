import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { getCookie } from 'cookies-next';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

  //const session = await getServerSession(authOptions);
  const res = new NextResponse();
  const id = getCookie("id", { res, req });
  const userType = getCookie("userType", { res, req });
  try {
    if(userType === "CLIENT") {
        return NextResponse.json({ error: 'Access denied' }, { status: 403});
    }
    const appointmentsData = await prisma.appointment.findMany({
        where: {
          in_charge_fk : Number(id),
          date: { gte: new Date() }, // Filtrar citas futuras
        },
        take: 5,
        orderBy: { date: 'asc' },
        select: {
          id: true,
          client: {
            select: {
                user: {
                    select: {
                        name: true
                    }
                }
            }
          },
          subject: true,
          date: true,
          hour: true,
        },
      });
    if (!appointmentsData) {
      return NextResponse.json({ error: 'Appointments data not found' }, { status: 404});
    }

    if(userType === "EMPLOYEE"){
        const { id:employeeId } = await prisma.employee.findUnique({
            where: {
              user_fk : Number(id),
            },
            select: {
              id: true,
            },
          });
        const clinicData = await prisma.employeeClinic.findMany({
            where: {
              employee_fk : employeeId,
            },
            take: 5,
            select: {
              clinic: {
                select: {
                    id: true,
                    name: true
                }
              },
            },
          });
          return NextResponse.json({ appointments: appointmentsData, clinics: clinicData}, { status: 200});
    }

    if(userType === "DOCTOR"){
        const { id:doctorId } = await prisma.doctor.findUnique({
            where: {
              user_fk : Number(id),
            },
            select: {
              id: true,
            },
          });
        const clinicData = await prisma.doctorClinic.findMany({
            where: {
              doctor_fk : doctorId
            },
            take: 5,
            select: {
              clinic: {
                select: {
                    id: true,
                    name: true
                }
              },
            },
          });
        return NextResponse.json({ appointments: appointmentsData, clinics: clinicData}, { status: 200});
    }


    return NextResponse.json({ error: 'Failed to get dashboard data'}, { status: 500 });

  } catch (error) {
    console.error({ errorString: 'Error fetching dashboard data: ', error});
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}