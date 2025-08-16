import { PrismaClient } from "@/app/generated/prisma";
const client = new PrismaClient();

async function fetchData() {
    const user = await client.user.findFirst();
    return {
        username: user?.username,
        name: "harshit",
    };
}

export default async function User() {
    const data = await fetchData();
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center">
                {data.username}
                <br />
                {data.name}
            </div>
        </div>
    );
}
