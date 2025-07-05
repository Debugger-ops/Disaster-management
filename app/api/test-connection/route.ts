import { connectDB } from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: 'MongoDB connected successfully' });
  } catch (error: any) {
    console.error('MongoDB connection error:', error.message);
    return NextResponse.json({ message: 'MongoDB connection failed', error: error.message }, { status: 500 });
  }
}
