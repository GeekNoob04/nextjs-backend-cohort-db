import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();
export async function GET(req: NextRequest) {
    return NextResponse.json({
        name: "Harshit",
        email: "harshitbudhraja0@gmail.com",
    });
}
export async function POST(req: NextRequest) {
    /*
    // header
    const headers = req.headers.get("authorization");
    // query params
    const query = req.nextUrl.searchParams.get("name");
    */
    // body
    const body = await req.json();
    console.log(body);
    await client.user.create({
        data: {
            username: body.email,
            password: body.password,
        },
    });
    // hitting the DB
    return NextResponse.json({
        message: "User created successfully",
    });
}
