import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

  const session = await getServerSession(authOptions);

  try {
    const appointmentsCompleted = await prisma.appointment.findMany({
       where: {
         id_user_FK : session.user.id,
         status: 'completed', //Preguntar si estos si van a ser los estados
       },
      select: {
        id: true,
        doctor_name: true,
        date: true,
        hour: true,
        status: true,
      },
    });

    const appointmentsPending = await prisma.appointment.findMany({
      where: {
         id_user_FK : session.user.id,
         status: 'pending',
       },
      select: {
        id: true,
        doctor_name: true,
        date: true,
        hour: true,
        status: true,
      },
    });

    const appointmentsOngoing = await prisma.appointment.findMany({
      where: {
         id_user_FK : session.user.id,
         status: 'Ongoing',
       },
      select: {
        id: true,
        doctor_name: true,
        date: true,
        hour: true,
         status: true,
      },
    });

    return NextResponse.json({ appointmentsCompleted, appointmentsPending, appointmentsOngoing }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Error de servidor' }, { status: 500 });
  }
}
