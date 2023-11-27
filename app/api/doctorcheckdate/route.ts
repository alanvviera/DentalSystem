import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {
    
    try {
        const appointments = await prisma.appointments.findMany({
            select: {
                id: true,
                date: true,
                hour: true,
                //name: true
            },
        });

        return NextResponse.json({ appointments }, { status: 200 });
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
    }
};