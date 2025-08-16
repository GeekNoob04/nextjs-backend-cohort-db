import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();
export async function GET() {
    const user = await client.user.findFirst();
    return NextResponse.json({
        username: user?.username,
        name: "harshit",
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
    try {
        await client.user.create({
            data: {
                username: body.username,
                password: body.password,
            },
        });
        return NextResponse.json({
            message: "User created successfully",
        });
    } catch (e) {
        return NextResponse.json({
            message: "Error creating user: " + e,
        });
    }

    // hitting the DB
}
