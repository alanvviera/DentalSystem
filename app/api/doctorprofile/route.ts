import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma: PrismaClient = new PrismaClient();

export async function GET(req: NextRequest) {

    const session = await getServerSession(authOptions);
    //const user = await req.json();

    //obtener datos del perfil del usuario
    const userProfile = await prisma.doctor.findUnique({
        where: {
            id_user_FK: session.user.id
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
    
    const session = await getServerSession(authOptions);
    //const user = await req.json();

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
        license,
        school,
    } = await req.json();

    try {
        const updatedProfile = await prisma.doctor.update({
            where: { 
                id_user_FK: session.user.id 
            },
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