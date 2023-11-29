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
      where: { id_user_FK: session.user.id,id: parseInt(appointmentId), },
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
      return NextResponse.json({ error: 'Debt not found' }, { status: 404 });
    }

    return NextResponse.json({ debt }, { status: 200 });
  } catch (error) {
    console.error('Error fetching debt:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status:500 });
  }
};
