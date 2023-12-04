// pages/api/citas.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

// Base de datos simulada (puedes reemplazar esto con una base de datos real)
const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

export async function POST(req: NextRequest) {

  const session = await getServerSession(authOptions);
  
  try {
    
    const {
      client_name,
      local_name,
      type,
      doctor_name,
      date,
      hour,
      subject,
    } = await req.json();

    // Validar que se proporcionen todos los campos necesarios
    if (!client_name || !local_name || !type || !doctor_name || !date || !hour || !subject) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }
    
    // Crear la cita
    const newAppointment = await prisma.appointment.create({
      data: {
        //id_dates, es un dato generado de manera aleatoria
        client_name,
        local_name,
        type,
        doctor_name,
        date,
        hour,
        subject,
        user_data:{connect:{id_user: session.user.id}}
      }
    });
    
    return NextResponse.json({ message: 'Cita exitosa', cita: newAppointment }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error Interno del Servidor' }, { status: 500 });
  }
}
