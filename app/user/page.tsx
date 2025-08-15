import axios from "axios";
async function fetchData() {
    const res = await axios.get("http://localhost:3000/api/user");
    console.log("response hai", JSON.stringify(res.data));
    return res.data;
}

export default async function User() {
    const data = await fetchData();
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center">{data.name}</div>
        </div>
    );
}
