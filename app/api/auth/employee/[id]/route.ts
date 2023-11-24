import { NextResponse } from "next/server";
import { prisma } from "../../../../../libs/prisma";

export async function GET(request, {params: {id}}) {
    try {
        const empleado = await prisma.employee.findFirst({
            where: {
                patientNumber: Number(id)
            }
        })

        if(!empleado){
            return NextResponse.json(
                {mensaje: 'El empleado no existe'},
                {status: 404}
            )
        }

        return NextResponse.json(empleado)
    } catch (error) {
        if(error instanceof Error)
            return NextResponse.json(error.message,{status: 500})
    }
}