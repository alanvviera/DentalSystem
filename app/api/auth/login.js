import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = await prisma.user_data.findFirst({
      where: {
        email: email,
        password: password,
      },
    });

    if (user) {
      return new NextResponse.ok({
        name: user.name,
        email: email,
      });
    } else {
      return new NextResponse.forbidden("Email o password invalido.");
    }
  } else {
    return new NextResponse.error("Metodo no permitido", 405);
  }
};
