import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function GET (req: NextRequest) {
    
    //obtener datos del perfil del usuario
    const userId = req.user_data.id_user; //usuario autenticado
    const userProfile = await prisma.user_data.findUnique({where: {userId}});

    if (!userProfile) {
        return NextResponse.json({ error: 'User profile not found' }, { status: 404 });
    }
    return NextResponse.json({ userProfile }, { status: 200 });
}

export async function PUT (req: NextRequest) {
    const userId = req.user_data.id_user; //usuario autenticado
    
    try {
        const updatedProfile = await prisma.user_data.update({
            where: { userId},
            data: {}
        });
        return NextResponse.json({ updatedProfile }, { status: 200 });  
    } catch (error) {
        console.log('Error updating user profile: ', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}