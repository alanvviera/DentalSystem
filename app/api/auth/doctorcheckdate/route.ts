import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {
    if (req.method === 'GET') {
        try {
            //const { id, patient_name, date_of_date, appointment_time } = await req.json();
            // Obtener todas las citas para el usuario autenticado
            const userId = req.user_data.id_user; // Id del usuario autenticado
            const appointments = await prisma.appointment.findMany({
                where: { userId },
                select: { id: true, patient_name: true, date_of_date: true, appointment_time: true },
            });

            return NextResponse.json({ appointments }, { status: 200 });
        } catch (error) {
            console.error('Error fetching appointments:', error);
            return NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
        }
    }
    return NextResponse.json({ error: 'Method Not Allowed' }, {status: 405});
};