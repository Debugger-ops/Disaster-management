import { connectDB } from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: 'MongoDB connected successfully' });
  } catch (err) {
    if (err instanceof Error) {
      console.error('MongoDB connection error:', err.message);
      return NextResponse.json(
        { message: 'MongoDB connection failed', error: err.message },
        { status: 500 }
      );
    }

    // fallback if error is not an instance of Error
    console.error('Unknown MongoDB connection error:', err);
    return NextResponse.json(
      { message: 'MongoDB connection failed', error: String(err) },
      { status: 500 }
    );
  }
}
