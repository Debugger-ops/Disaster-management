import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/mongodb';
import EmergencyReport from '@/app/models/EmergencyReport';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();

    const newReport = await EmergencyReport.create(body);
    return NextResponse.json({ success: true, report: newReport });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
