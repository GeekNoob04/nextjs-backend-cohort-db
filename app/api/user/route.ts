import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    return NextResponse.json({
        name: "Harshit",
        email: "harshitbudhraja0@gmail.com",
    });
}
export async function POST(req: NextRequest) {
    // body
    const body = await req.json();
    // header
    const headers = req.headers.get("authorization");
    // query params
    const query = req.nextUrl.searchParams.get("name");
    // hitting the DB
    return NextResponse.json({
        message: "User created successfully",
    });
}
