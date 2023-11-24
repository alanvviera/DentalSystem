// pages/api/auth/login.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST (req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Faltan credenciales' }, { status: 400 });
    }

    const user = await prisma.user_data.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    if (user.type_user === 'patient') {
      return NextResponse.redirect('/patient-dashboard');
    } else if (user.type_user === 'empleado') {
      return NextResponse.redirect('/employee-dashboard');
    } else {
      return NextResponse.json({ error: 'Tipo de usuario no valido' }, { status: 401 })
    }
    
    // El inicio de sesión fue exitoso
    //return NextResponse.json({ message: 'Inicio de sesión exitoso' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error de servidor' }, { status: 500 });
  }
}
