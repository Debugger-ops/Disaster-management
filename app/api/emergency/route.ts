import { NextRequest, NextResponse } from "next/server";

interface Emergency {
  name: string;
  location: string;
  phone: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Emergency; // 👈 type assertion

    return NextResponse.json({ message: "Success", data: body });
  } catch (err) {
    console.error(err); // 👈 use the error so ESLint doesn’t complain
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
