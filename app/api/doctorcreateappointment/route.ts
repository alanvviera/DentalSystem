// pages/api/citas.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Base de datos simulada (puedes reemplazar esto con una base de datos real)
const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

export async function POST(req: NextRequest) {

  try {
    
    const {
      name,
      clinic_name,
      type,
      doctor_name,
      date,
      hour,
      subject,
    } = await req.json();

    // Validar que se proporcionen todos los campos necesarios
    if (!name || !clinic_name || !type || !doctor_name || !date || !hour || !subject) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }
    
    // Crear la cita
    const newAppointment = await prisma.appointments.create({
      data: {
        //id_dates, es un dato generado de manera aleatoria
        //name, 
        //clinic_name,
        type,
        doctor_name,
        date,
        hour,
        subject,
      }
    });

    return NextResponse.json({ message: 'Successfully appointment', cita: newAppointment }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
