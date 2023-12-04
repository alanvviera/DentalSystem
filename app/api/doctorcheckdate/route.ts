import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

    const session = await getServerSession(authOptions);
    
    try {
        const appointments = await prisma.appointment.findMany({
            where: {
                id_user_FK: session.user.id
            },
            select: {
                id_appointment: true,
                date: true,
                hour: true,
                user_data: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return NextResponse.json({ appointments }, { status: 200 });
    } catch (error) {
        console.error('Error al buscar citas:', error);
        return NextResponse.json({ error: 'Error Interno del Servidor' }, {status: 500});
    }
};