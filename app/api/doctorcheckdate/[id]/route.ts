import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth"
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

  const session = await getServerSession(authOptions);
  const appointmentId = req.nextUrl.searchParams.get('id')

  try {
    
    // Obtener detalles de la cita específica
    const appointment = await prisma.appointment.findUnique({
      where: { 
        id: parseInt(appointmentId),
        id_user_FK: session.user.id 
      },
      select: {
        client_name: true,
        local_name: true,
        type: true,
        doctor_name: true,
        date: true,
        hour: true,
        subject: true,
      },
    });

    if (!appointment) {
      return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    }

    return NextResponse.json({ appointment }, { status: 200 });
  } catch (error) {
    console.error('Error al buscar citas:', error);
    return NextResponse.json({ error: 'Error Interno del Servidor' }, { status:500 });
  }
};

export async function PUT (req: NextRequest) {

  const session = await getServerSession(authOptions);
  const appointmentId = req.nextUrl.searchParams.get('id')

  const {
    client_name,
    local_name,
    type,
    doctor_name,
    date,
    hour,
    subject,
  } = await req.json();

  try {

    const appointment = await prisma.appointment.update({
      where: { 
        id: parseInt(appointmentId),
        id_user_FK: session.user.id 
      },
      data: {
        client_name,
        local_name,
        type,
        doctor_name,
        date,
        hour,
        subject,
      }
    });

    if (!appointment) {
      return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json({ appointment }, { status: 200 });
  } catch (error) {
    console.error('Error updating appointment:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status:500 });
  }
};

export async function DELETE (req: NextRequest) {

  const session = await getServerSession(authOptions);
  const appointmentId = req.nextUrl.searchParams.get('id');

  try {
    const appointment = await prisma.appointment.delete({
      where: { 
        id: parseInt(appointmentId),
        id_user_FK: session.user.id 
      },
    });

    if (!appointment) {
      return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Appointment deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}