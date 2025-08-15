import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();
export async function POST(req: NextRequest) {
    // extract the body
    const body = await req.json();
    console.log(body);
    // store the body in the DB
    await client.user.create({
        data: {
            username: body.username,
            password: body.password,
        },
    });
    return NextResponse.json({
        msg: "User created successfully",
    });
}
