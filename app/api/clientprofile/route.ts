import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma: PrismaClient = new PrismaClient();

//Falta auth

export async function GET(req: NextRequest) {

    const session = await getServerSession(authOptions);
    //const user = await req.json();

    //obtener datos del perfil del usuario
    const userProfile = await prisma.client.findUnique({
        where: {
            id_user_FK: session.user.id,
        },
        select : {

            id: true,
            allergies: true,
            emergency_name: true,
            emergency_number: true,
            health_insurance_number: true,
            health_problems: true,
            medical_conditions: true,
            medical_history: true,
            photo_history: true,
            radiographs: true,
            user_data:{
                select:{
                        name: true,
                        last_name: true,
                        email: true,
                        password: true,
                        curp: true,
                        phone_number: true,
                        home_address: true,
                        birthday: true,
                        gender: true,
                }
            }
             
        }
    })

    if (!userProfile) {
        return NextResponse.json({ error: 'Perfil de usuario no encontrado' }, { status: 404 });
    }
    return NextResponse.json({ userProfile }, { status: 200 });
}

export async function PUT (req: NextRequest) { 
    
    const session = await getServerSession(authOptions);

    const {
        name,
        last_name,
        email,
        password,
        curp,
        phone_number,
        home_address,
        birthday,
        gender,
    } = await req.json();

    try {
        const updatedProfile = await prisma.client.update({
            where: { id_user_FK: session.user.id },
            data: {
                user_data: {
                    update: {
                        name,
                        last_name,
                        email,
                        password,
                        curp,
                        phone_number,
                        home_address,
                        birthday,
                        gender,
                    }
                },
            }
        });
        return NextResponse.json({ updatedProfile }, { status: 200 });  
    } catch (error) {
        console.log('Error al actualizar el perfil de usuario: ', error);
        return NextResponse.json({ error: 'Error Interno del Servidor' }, { status: 500 });
    }
}