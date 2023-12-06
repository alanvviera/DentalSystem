import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  try {
    const {
      name,
      address,
      map,
      building_number,
      phone_number,
      photos,
      status,
    } = await req.json();

    const newLocal = await prisma.local.create({
      data: {
        name,
        address,
        map,
        building_number,
        phone_number,
        photos,
        status,
        id_doctor_FK: session.user.id,
      },
    });

    return NextResponse.json({ message: 'Local creado exitosamente', newLocal }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creando local', error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
