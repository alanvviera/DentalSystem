import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

    const session = await getServerSession(authOptions);

  try {
    const debtsCompleted = await prisma.debt.findMany({
      where: {
         id: session.user.id,
         completed: "complete", //cambiar a bool porfavor
       },
      select: {
        id: true,
        //subject: true,
        completed: true,
        //asumo que esto funciona asi, le preguntare a tito manana
        doctor: {
            select: {
                user_data: {
                    select: {
                        name: true,
                        last_name: true,
                    }
                }
            }
        }
      },
    });

    const debtsNotcompleted = await prisma.debt.findMany({
        where: {
           id: session.user.id,
           completed: "incomplete", //cambiar a bool porfavor, o igual jala asi jajaja
         },
        select: {
          id: true,
          //subject: true,
          completed: true,
          doctor: {
              select: {
                  user_data: {
                      select: {
                          name: true,
                          last_name: true,
                      }
                  }
              }
          }
        },
      });

    return NextResponse.json({ debtsCompleted, debtsNotcompleted }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Error Interno del servidor' }, { status: 500 });
  }
}
