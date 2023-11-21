import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

    const debtData = await prisma.patient_debt.findUnique({where: {id_patient_FK}});

    if (!debtData) {
        return NextResponse.json({ error: 'Debt data not found' }, { status: 404 });
    }

    //Si si paso, mostrar todo lo que tiene este

    try {
        const debts = await prisma.patient_debt.findMany();
        return NextResponse.json({debts}, {status: 200})
    } catch(error) {}

}
