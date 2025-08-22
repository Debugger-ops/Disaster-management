import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Volunteer from "@/app/models/Volunteer";

interface VolunteerData {
  name: string;
  email: string;
  phone: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as VolunteerData; // 👈 no `any`

    await connectDB();
    const newVolunteer = await Volunteer.create(body);

    return NextResponse.json({ success: true, volunteer: newVolunteer });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { success: false, message: err.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
