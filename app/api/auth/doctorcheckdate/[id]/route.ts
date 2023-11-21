import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {
  if (req.method === 'GET') {
    try {
      // Obtener detalles de la cita específica
      const appointmentId = Number(req.dates.id_dates);
      const appointmentDetails = await prisma.appointment.findUnique({
        where: { id: appointmentId },
      });

      if (!appointmentDetails) {
        return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
      }

      return NextResponse.json({ appointmentDetails }, { status: 200 });
    } catch (error) {
      console.error('Error fetching appointment details:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status:500 });
    }
  }

  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
};
