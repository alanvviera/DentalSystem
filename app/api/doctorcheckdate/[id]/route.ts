import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

  const appointmentId = req.nextUrl.searchParams.get('id')

  try {
    
    // Obtener detalles de la cita específica
    const appointment = await prisma.dates.findUnique({
      where: { id: parseInt(appointmentId) },
      select: {
        patient_name: true,
        clinic_name: true,
        type: true,
        doctor_name: true,
        date_of_date: true,
        appointment_time: true,
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
    patient_name,
    clinic_name,
    type,
    doctor_name,
    date_of_date,
    appointment_time,
    subject,
  } = await req.json();

  try {

    const appointment = await prisma.dates.update({
      where: { id: parseInt(appointmentId) },
      data: {
        patient_name,
        clinic_name,
        type,
        doctor_name,
        date_of_date,
        appointment_time,
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
    const appointment = await prisma.dates.delete({
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