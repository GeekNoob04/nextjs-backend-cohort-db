import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/db";
// export async function GET() {
//     const user = await client.user.findFirst();
//     return NextResponse.json({
//         username: user?.username,
//         name: "harshit",
//     });
// }
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
        await prisma.user.create({
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
