import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

//Base de datos igualmente simulada
const citas: any[] = [];

export async function POST(req:NextRequest) {
    try {

        if (req.method === 'POST') {
            const {
              patient_name,
              clinic_name,
              type,
              doctor_name,
              date_of_date,
              appointment_time,
              subject,
            } = await req.json();
      
            // Validar que se proporcionen todos los campos necesarios
            if (!patient_name || !clinic_name || !type || !doctor_name || !date_of_date || !appointment_time || !subject) {
              return NextResponse.json({ error: 'You must fill all the data' }, { status: 400 });
            }
            
            // Crear la cita
            const nuevaCita = {
              patient_name,
              clinic_name,
              type,
              doctor_name,
              date_of_date,
              appointment_time,
              subject,
            };
      
            // Almacenar la cita en la base de datos simulada
            citas.push(nuevaCita);
      
            return NextResponse.json({ message: 'Appointment registered succesfully', cita: nuevaCita }, { status: 201 });
          }

          return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error de servidor' }, { status: 500 });
      }

}