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
    const doctor = await prisma.doctor.findUnique({
      where: {
        id_user_FK: session.user.id,
      },
      select: {
        id_doctor: true,
      },})
      if (!doctor) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
    // Get lastest 5 appointments
    const appointments = await prisma.appointment.findMany({
      where: {
        id_doctor_FK: doctor.id_doctor,
        date: { gt: new Date() }, // Filter recent appointments
      },
      take: 5,
      orderBy: { date: "asc" },
      select: {
        id_appointment: true,
        client_name: true,
        date: true,
        hour: true,
      },
    });
    
    // Get today appointments
    const today = await prisma.appointment.findMany({
      where: {
        id_doctor_FK: doctor.id_doctor,
        date: new Date(), // Filter recent appointments
      },
      take: 5,
      orderBy: { date: "asc" },
      select: {
        id_appointment: true,
        client_name: true,
        date: true,
        hour: true,
      },
    });

    // Get today appointments
    const clinics = await prisma.local.findMany({
      where: {
        id_doctor_FK: doctor.id_doctor,
      },
      take: 5,
      select: {
        id_local: true,
        name: true
      },
    });

    if (!appointments || !clinics) {
      return NextResponse.json({ error: 'Datos del panel no encontrados' }, { status: 404});
    }

    return NextResponse.json({appointments, today, clinics}, { status: 200 });

  } catch (error) {
    console.error({ errorString: 'Error al obtener datos del panel: ', error});
    return NextResponse.json({ error: 'Error Interno del Servidor' }, { status: 500 });
  }
}