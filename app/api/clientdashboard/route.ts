import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const user = await prisma.user_data.findUnique({
      where: { 
        id_user : session.user.id, //No se si agarrar el de client o el de user_data, creo que son iguales tho
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    // Obtener las 5 citas más próximas del usuario
    const appointments = await prisma.appointment.findMany({
      where: {
        id_user_FK : session.user.id,
        date: { gte: new Date() }, // Filtrar citas futuras
      },
      take: 5,
      orderBy: { date: 'asc' },
      select: {
        id: true,
        doctor_name: true,
        date: true,
        hour: true,
      },
    });

    const lastDebt = await prisma.debt.findFirst({
      where: {
        id_client_FK : session.user.id,
        //Faltan los campos de status y data
        completed: null, //Esta madre es number y deberia ser bool
        // date: { gte: new Date() },
      },
      // orderBy: { date: 'asc' },
      select: {
        id: true,
      },
    });

    const dashboardData = { ...user, appointments, lastDebt };

    return NextResponse.json({ dashboardData }, { status: 200 });
  } catch (error) {
    console.error({ errorString: 'Error al obtener datos del panel: ', error });
    return NextResponse.json({ error: 'Error Interno del Servidor' }, { status: 500 });
  }
}
