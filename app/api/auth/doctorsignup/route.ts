// pages/api/auth/signup.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

export async function POST (req: NextRequest){

    try {
        const { 
            name, 
            last_name,
            email, 
            password,
            phone_number,
            home_address,
            birthday,
            gender,
        } = await req.json();

        const existingUser = await prisma.user_data.findUnique({ where: { email } });

        // Validación de datos de entrada
        if (!name || !last_name|| !email || !password || !phone_number || !home_address || !birthday || !gender) {
            return NextResponse.json({ message: 'Todos los campos son obligatorios.' }, { status: 400 });
        }

        // Verificacion de usuario existente
        if (existingUser) {
            return NextResponse.json({ message: 'El usuario ya existe. Por favor Iniciar sesión.' }, {status: 202});
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
    
        const newUser = await prisma.user_data.create({
            data: {
                //id_user, es un dato generado de manera aleatoria
                name,
                last_name,
                email,
                password: hashedPassword,
                phone_number,
                home_address,
                birthday,
                gender,
                type_user: 'DOCTOR'
            },
        });
        
        return NextResponse.json({ message: 'Usuario registrado exitosamente', user: newUser }, {status: 201});
    } catch (error) {
        return NextResponse.json({ message: 'Error al crear usuario', error: error.message }, { status: 500 });
    }

}