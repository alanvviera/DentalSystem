import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

  const session = await getServerSession(authOptions);

  try {

    const clientLocals = await prisma.appointment.findMany({
      where:{
        id_user_FK: session.user.id
      },
      select: {
        local: {
          select:{
            id_local: true,
            name: true,
          }
        }
      }
    })
    return NextResponse.json({ clientLocals }, { status: 201 });
  } catch (error) {

    console.error(error);
    return NextResponse.json({ error: 'Error Interno del Servidor' }, { status: 500 });
    
  }

}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  try {
    if (req.method === 'POST') {
      const { type, date, hour, subject, id_doctor_FK, id_local_FK } = await req.json();

      if (!type || !date || !hour || !subject /*|| !id_doctor_FK*/ || !id_local_FK) {
        return NextResponse.json({ error: 'Debes llenar todos los datos.' }, { status: 400 });
      }

      //Preguntar la estructura para saber que datos esperar y crear la cita

      const newAppointment = await prisma.appointment.create({
        data: {
          type,
          date,
          hour,
          subject,
          id_doctor_FK,
          id_user_FK : session.user.id,
          id_local_FK,
        },
      });

      return NextResponse.json({ message: 'Cita registrada exitosamente', newAppointment }, { status: 201 });
    }

    return NextResponse.json({ error: 'Método no permitido' }, { status: 405 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error Interno del Servidor' }, { status: 500 });
  }
}
