import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {
    
    try {
        const appointments = await prisma.dates.findMany({
            select: {
                id: true,
                date_of_date: true,
                appointment_time: true,
                patient: true
            },
        });

        return NextResponse.json({ appointments }, { status: 200 });
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
    }
};