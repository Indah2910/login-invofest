import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCreate() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const oldData = JSON.parse(
            localStorage.getItem("events") || "[]"
        );

        oldData.push({
            id: Date.now(),
            title,
            date,
        });

        localStorage.setItem(
            "events",
            JSON.stringify(oldData)
        );

        navigate("/dashboard/event");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow max-w-xl"
        >

            <h1 className="text-3xl font-bold mb-5">
                Tambah Event
            </h1>

            <input
                type="text"
                placeholder="Nama Event"
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
                Simpan
            </button>

        </form>
    );
}