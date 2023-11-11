import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// async function obtenerCliente(id){
//     const response = await fetch(`http://localhost:3000/newpassword/${id}`);
//     if(!response.ok) throw new Error('No se pudo adquirir el dato');
//     return response.json();
//   }

export async function POST (req: NextRequest, {params: {id}}) {

    const { password } = await req.json();
  
    // const data = await obtenerCliente(id);
    // //Aqui ya obtuve el id con el que se asocia el cliente de la url

    // const user = await prisma.user_data.findUnique({ where: { id } });

    try {
        const user = await prisma.user_data.findUnique({ where: { id } });
    
        if (!user) {
          return NextResponse.json(
            { mensaje: "El usuario no existe" },
            { status: 404 }
          );
        }
    
          const actualizarEstudiante = await prisma.user_data.update({
              where: {
                    id,
                },
              data:{
                  password,
              }
          })
    
        return NextResponse.json(actualizarEstudiante, { status: 200 });
      } catch (error) {
        if (error instanceof Error) {
          return NextResponse.json(error.message, { status: 500 });
        }
      }

}
