import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { AuthOptions } from 'next-auth';

const prisma: PrismaClient = new PrismaClient();

//Falta auth


export async function PUT (req: NextRequest) { 
    
    const user = await req.json();

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
            where: { id_user_FK: user.id_user },
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
        console.log('Error updating user profile: ', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}