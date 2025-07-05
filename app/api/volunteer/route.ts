import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/mongodb';
import Volunteer from '@/app/models/Volunteer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const newVolunteer = await Volunteer.create(body);

    return NextResponse.json({ success: true, volunteer: newVolunteer });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
