import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EventEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("events") || "[]"
        );

        const event = data.find(
            (item: any) => item.id === Number(id)
        );

        if (event) {
            setTitle(event.title);
            setDate(event.date);
        }

    }, [id]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        const data = JSON.parse(
            localStorage.getItem("events") || "[]"
        );

        const updated = data.map((item: any) =>
            item.id === Number(id)
                ? { ...item, title, date }
                : item
        );

        localStorage.setItem(
            "events",
            JSON.stringify(updated)
        );

        navigate("/dashboard/event");
    };

    return (
        <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded shadow max-w-xl"
        >

            <h1 className="text-3xl font-bold mb-5">
                Edit Event
            </h1>

            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-3 rounded mb-4"
            />

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border p-3 rounded mb-4"
            />

            <button className="bg-[#7a1a1a] text-white px-4 py-2 rounded">
                Update
            </button>

        </form>
    );
}