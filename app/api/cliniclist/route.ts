// pages/api/auth/login.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, {status: 401})
    }
  
    try {

        const doctorList = await prisma.local.findMany({
            /* where: {
                id_user_FK: session.user.id
            }, */
            select: {
                id_local: true,
                name: true,
            }
        });

        if (!doctorList) {
            return NextResponse.json({ error: 'No se encontro la lista de clinicas' }, { status: 404});
        }

        return NextResponse.json({doctorList}, { status: 200 });

    } catch (error) {
        console.error({ errorString: 'Error al obtener la lista: ', error});
        return NextResponse.json({ error: 'Error Interno del Servidor' }, { status: 500 });
    }
}