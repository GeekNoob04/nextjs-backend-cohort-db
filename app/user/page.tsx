import { prisma } from "@/db";

async function fetchData() {
    const user = await prisma.user.findFirst();
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
