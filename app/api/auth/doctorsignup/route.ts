// pages/api/auth/signup.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

export async function POST (req: NextRequest){

    try {
        const { 
            id_user,
            fullname, 
            email, 
            password,
            phone_number,
            type_user,
            home_address,
            birthday,
            gender,
        } = await req.json();

        const existingUser = await prisma.user_data.findUnique({ where: { email } });

        // Validación de datos de entrada
        if (!fullname || !email || !password || !phone_number || !type_user || !home_address || !birthday || !gender) {
            return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
        }

        // Verificacion de usuario existente
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists. Please Log in.' }, {status: 202});
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
    
        const newUser = await prisma.user_data.create({
            data: {
                //id_user, es un dato generado de manera aleatoria
                fullname,
                email,
                password: hashedPassword,
                phone_number,
                type_user,
                home_address,
                birthday,
                gender,
            },
        });
        
        return NextResponse.json({ message: 'User successfully registered', user: newUser }, {status: 201});
    } catch (error) {
        return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 });
    }

}