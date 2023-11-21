import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

//Base de datos igualmente simulada
const citas: any[] = [];

export async function PUT(req: NextRequest) {
    try {
      if (req.method === 'PUT') {
        const {
          id,
          patient_name,
          clinic_name,
          type,
          doctor_name,
          date_of_date,
          appointment_time,
          subject,
        } = await req.json();
  
        // Validar que se proporcionen todos los campos necesarios
        if (!id || !patient_name || !clinic_name || !type || !doctor_name || !date_of_date || !appointment_time || !subject) {
          return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
        }
  
        // Buscar la cita por ID
        const existingDate = citas.find(cita => cita.id === id);
  
        // Verificacion de existencia
        if (!existingDate) {
          return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
        }
  
        // Actualizacion
        existingDate.patient_name = patient_name;
        existingDate.clinic_name = clinic_name;
        existingDate.type = type;
        existingDate.doctor_name = doctor_name;
        existingDate.date_of_date = date_of_date;
        existingDate.appointment_time = appointment_time;
        existingDate.subject = subject;
  
        return NextResponse.json({ message: 'Cita actualizada con éxito', cita: existingDate }, { status: 200 });
      }
  
      return NextResponse.json({ error: 'Método no permitido' }, { status: 405 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error de servidor' }, { status: 500 });
    }
}

    //Este es el de Prisma, no el simulado

    // export async function PUT(req: NextRequest) {
    // try {
    //     if (req.method === 'PUT') {
    //     const { id, patient_name, clinic_name, type, doctor_name, date_of_date, appointment_time, subject } = await req.json();

    //     if (!id) {
    //         return NextResponse.json({ error: 'ID de cita es obligatorio' }, { status: 400 });
    //     }

    //     const citaExistente = await prisma.cita.update({
    //         where: { id: id },
    //         data: {
    //         patient_name,
    //         clinic_name,
    //         type,
    //         doctor_name,
    //         date_of_date,
    //         appointment_time,
    //         subject,
    //         },
    //     });

    //     return NextResponse.json({ message: 'Cita actualizada con éxito', cita: citaExistente }, { status: 200 });
    //     }

    //     return NextResponse.json({ error: 'Método no permitido' }, { status: 405 });
    // } catch (error) {
    //     console.error(error);
    //     return NextResponse.json({ error: 'Error de servidor' }, { status: 500 });
    // }
    // }

export async function DELETE(req: NextRequest) {
    try {
      if (req.method === 'DELETE') {
        const { id } = await req.json();
  
        // Validar que se proporciona el ID
        if (!id) {
          return NextResponse.json({ error: 'ID de cita es obligatorio' }, { status: 400 });
        }
  
        // Buscar la cita por ID simulado
        const index = citas.findIndex(cita => cita.id === id);
  
        // Verificar si la cita existe
        if (index === -1) {
          return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
        }
  
        // Esto es en la simulada
        const citaEliminada = citas.splice(index, 1)[0];

        //Solo se requiere lo siguiente para el Prisma
        // const citaEliminada = await prisma.cita.delete({
        //     where: { id: id },
        //   });
  
        return NextResponse.json({ message: 'Cita eliminada con éxito', cita: citaEliminada }, { status: 200 });
      }
  
      return NextResponse.json({ error: 'Método no permitido' }, { status: 405 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error de servidor' }, { status: 500 });
    }
  }