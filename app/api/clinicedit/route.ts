import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);

  try {
    const { id_local, name, address, map, building_number, phone_number, photos, status } = await req.json();

    const existingLocal = await prisma.local.findUnique({ where: { id_local } });

    if (!existingLocal) {
      return NextResponse.json({ message: 'Local no encontrado', error: 'Local not found' }, { status: 404 });
    }

    if (existingLocal.id_doctor_FK !== session.user.id) {
      return NextResponse.json({ message: 'No tienes permisos para actualizar este local', error: 'Unauthorized' }, { status: 403 });
    }

    const updatedLocal = await prisma.local.update({
      where: { id_local },
      data: {
        name,
        address,
        map,
        building_number,
        phone_number,
        photos,
        status,
      },
    });

    return NextResponse.json({ message: 'Local actualizado exitosamente', updatedLocal }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error actualizando local', error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions);
  
    try {
      const { id_local } = await req.json();
  
      const existingLocal = await prisma.local.findUnique({ where: { id_local } });
  
      if (!existingLocal) {
        return NextResponse.json({ message: 'Local no encontrado', error: 'Local not found' }, { status: 404 });
      }
  

      if (existingLocal.id_doctor_FK !== session.user.id) {
        return NextResponse.json({ message: 'No tienes permisos para eliminar este local', error: 'Unauthorized' }, { status: 403 });
      }

      if (existingLocal.id_doctor_FK !== session.user.id) {
        return NextResponse.json({ message: 'No tienes permisos para eliminar este local', error: 'Unauthorized' }, { status: 403 });
      }
  
      await prisma.local.delete({ where: { id_local } });
  
      return NextResponse.json({ message: 'Local eliminado exitosamente' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error eliminando local', error: error.message }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  }
