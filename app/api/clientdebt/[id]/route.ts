import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../../auth/[...nextauth]/route';


const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

    const session = await getServerSession(authOptions);
    const appointmentId = req.nextUrl.searchParams.get('id')

  try {
    
    // Obtener detalles de la cita específica
    const debt = await prisma.debt.findUnique({
      where: { id_client_FK : session.user.id,id: parseInt(appointmentId), },
      select: {
        id: true,
        amount_debt: true,
        _count: true,
        client: true,
        completed: true,
        doctor: true,
        payment: true,
        
      }
    });

    if (!debt) {
      return NextResponse.json({ error: 'Adeudo no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ debt }, { status: 200 });
  } catch (error) {
    console.error('Error al recuperar la deuda:', error);
    return NextResponse.json({ error: 'Error Interno del Servidor' }, { status:500 });
  }
};
