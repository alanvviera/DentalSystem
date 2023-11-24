import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export async function GET(req: NextRequest) {

    const user = await req.json()
    
    //Falta authenticacion de usuario

    //obtener datos del perfil del usuario
    const userProfile = await prisma.doctor.findUnique({
        where: {
            id_user_FK: user.id_user
        },
        select : {
            user_data: true,
            license: true,
            school: true,
        }
    })

    if (!userProfile) {
        return NextResponse.json({ error: 'User profile not found' }, { status: 404 });
    }
    return NextResponse.json({ userProfile }, { status: 200 });
}

export async function PUT (req: NextRequest) { 
    
    const user = await req.json();
  
    //Falta authenticacion de usuario

    const {
        fullname,
        email,
        password,
        phone_number,
        birthday,
        home_address,
        type_user,
        gender,
        license,
        school,
    } = await req.json();

    try {
        const updatedProfile = await prisma.doctor.update({
            where: { id_user_FK: user.id_user },
            data: {
                user_data: {
                    update: {
                        fullname,
                        email,
                        password,
                        phone_number,
                        home_address,
                        type_user,
                        gender,
                        birthday,
                    }
                },
                license,
                school,
            }
        });
        return NextResponse.json({ updatedProfile }, { status: 200 });  
    } catch (error) {
        console.log('Error updating user profile: ', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}