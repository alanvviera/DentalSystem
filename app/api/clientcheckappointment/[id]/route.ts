import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

  const session = await getServerSession(authOptions);

  try {
    
    
    const appointment = await prisma.appointment.findUnique({
      where: { id: session.user.id },
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
      return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json({ appointment }, { status: 200 });
  } catch (error) {
    console.error('Error fetching appointment:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status:500 });
  }
};

export async function PUT (req: NextRequest) {

  const appointmentId = req.nextUrl.searchParams.get('id')

  const {
    type,
    date,
    hour,
    subject,

  } = await req.json();

  try {

    const appointment = await prisma.appointment.update({
      where: { id: parseInt(appointmentId) },
      data: {
        type,
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

  const appointmentId = req.nextUrl.searchParams.get('id');

  try {
    const appointment = await prisma.appointment.delete({
      where: { id: parseInt(appointmentId) },
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