import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

  const session = await getServerSession(authOptions);
  const appointmentId = req.nextUrl.searchParams.get('id')

  try {
    
    
    const appointment = await prisma.appointment.findUnique({
      where: { id_user_FK: session.user.id,
        id: parseInt(appointmentId), },
      select: {
        doctor: true,
        id: true,
        local: true,
        type: true,
        doctor_name: true,
        date: true,
        hour: true,
        subject: true,
      }
    });

    if (!appointment) {
      return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    }

    return NextResponse.json({ appointment }, { status: 200 });
  } catch (error) {
    console.error('Error al buscar la cita:', error);
    return NextResponse.json({ error: 'Error Interno del Servidor' }, { status:500 });
  }
};

export async function PUT (req: NextRequest) {

  const session = await getServerSession(authOptions);
  const appointmentId = req.nextUrl.searchParams.get('id')

  const {
    type,
    date,
    hour,
    subject,

  } = await req.json();

  try {

    const appointment = await prisma.appointment.update({
      where: { id_user_FK: session.user.id,
        id: parseInt(appointmentId), },
      data: {
        type,
        date,
        hour,
        subject,
      }
    });

    if (!appointment) {
      return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    }

    return NextResponse.json({ appointment }, { status: 200 });
  } catch (error) {
    console.error('Error actualizando cita:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status:500 });
  }
};

export async function DELETE (req: NextRequest) {

  const session = await getServerSession(authOptions);
  const appointmentId = req.nextUrl.searchParams.get('id')

  try {
    const appointment = await prisma.appointment.delete({
      where: { id_user_FK: session.user.id,id: parseInt(appointmentId), },
    });

    if (!appointment) {
      return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Cita borrada exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error eliminando la cita:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}