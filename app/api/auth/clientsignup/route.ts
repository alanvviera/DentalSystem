// pages/api/auth/signup.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

export async function POST (req: NextRequest){
    try {
        const { name, last_name, email, password } = await req.json();
        const existingUser = await prisma.user_data.findUnique({ where: { email } });

        // Validación de datos de entrada
        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
        }

        // Verificacion de usuario existente
        if (existingUser) {
            return NextResponse.json({ error: 'El usuario ya existe. Por favor Iniciar sesión.' }, {status: 202});
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
    
        const newUser = await prisma.client.create({
            data: {
                user_data: {
                    create: {
                        name,
                        last_name,
                        email,
                        password: hashedPassword,
                        type_user: 'CLIENT' 
                    },
                },
                
            },
        });
        
        return NextResponse.json({ message: 'Usuario registrado exitosamente', user: newUser }, {status: 201});
    } catch (error) {
        return NextResponse.json({ error: 'Error al crear usuario', message: error.message }, { status: 500 });
    }

}