import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest } from "next/server";
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
    return Response.json({
        msg: "User created successfully",
    });
}
