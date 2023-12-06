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

        const doctorList = await prisma.client.findMany({
            /* where: {
                id_user_FK: session.user.id
            }, */
            select: {
                user_data: {
                    select: {
                        id_user: true,
                        name: true,
                        last_name: true
                    }
                }
            }
        });

        if (!doctorList) {
            return NextResponse.json({ error: 'No se encontro la lista de clientes' }, { status: 404});
        }

        return NextResponse.json({doctorList}, { status: 200 });

    } catch (error) {
        console.error({ errorString: 'Error al obtener la lista: ', error});
        return NextResponse.json({ error: 'Error Interno del Servidor' }, { status: 500 });
    }
}