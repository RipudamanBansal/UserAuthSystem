// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Validate input, check if user exists, etc.

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user to database (pseudo-code)
  // await db.users.insert({ email, password: hashedPassword });

  return NextResponse.json({ message: 'User registered' });
}
