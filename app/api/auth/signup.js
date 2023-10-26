// pages/api/auth/signup.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(202).json({ message: 'User already exists. Please Log in.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
      await prisma.user.create({
        data: {
          user_id: 'your-generated-uuid', // Genera un UUID único aquí
          name,
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json({ message: 'Successfully registered.' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
    }
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
};

