import axios from "axios";
async function fetchData() {
    const res = await axios.get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
    console.log("response hai", JSON.stringify(res.data));
    return res.data;
}

export default async function User() {
    const data = await fetchData();
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center">
                {data.name}
                <br />
                {data.email}
            </div>
        </div>
    );
}
