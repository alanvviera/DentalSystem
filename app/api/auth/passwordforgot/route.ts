// pages/api/auth/passwordforgot.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

//generate a random code
function generateRandomCode(length: number = 6): string {
  const bytes = randomBytes(length);
  const code = bytes.toString('hex').toUpperCase().substring(0, length);
  return code;
}

async function sendEmail(to: string, verificationCode: string) {
  try {
    // Config tranport nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // provideer
      auth: {
        user: 'tu_correo@gmail.com', // client or doctor email
        pass: 'tu_contraseña', // password (or token application)
      },
    });

    // Config email info 
    const mailOptions = {
      from: 'tu_correo@gmail.com',
      to,
      subject: 'Recuperación de contraseña',
      text: `Tu código de verificación es: ${verificationCode}`,
    };
        // Enviar el correo electrónico
        const info = await transporter.sendMail(mailOptions);

        console.log('Correo electrónico enviado:', info.response);
      } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw error; // you can handle this error with ur preference
      }
    }

export async function POST (req: NextRequest) {
  try {
    const { email } = await req.json();

    // verifiying if email is registered in data base
    const user = await prisma.user_data.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'Correo electrónico no encontrado' }, { status: 404 });
    }
    
    // Generate a verification code 
    const verificationCode = generateRandomCode();

    // Save a code verification with expiration date
    await prisma.passwordReset.create({
      data: {
        userId: user.id,
        code: verificationCode,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // Caduca en 1 hora
      },
    });

    // Enviar correo electrónico con el código de verificación
    await sendEmail(email, verificationCode);

    
    return NextResponse.json({ message: 'Correo enviado' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error de servidor' }, { status: 500 });
  }
}