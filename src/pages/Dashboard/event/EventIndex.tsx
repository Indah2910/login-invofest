import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type EventType = {
    id: number;
    title: string;
    date: string;
};

export default function EventIndex() {

    const navigate = useNavigate();

    const [events, setEvents] = useState<EventType[]>([]);

    useEffect(() => {
        const data = JSON.parse(
            localStorage.getItem("events") || "[]"
        );

        setEvents(data);
    }, []);

    const handleDelete = (id: number) => {

        const updated = events.filter(
            (item) => item.id !== id
        );

        setEvents(updated);

        localStorage.setItem(
            "events",
            JSON.stringify(updated)
        );
    };

    return (
        <div>

            <div className="flex justify-between mb-5">

                <h1 className="text-3xl font-bold">
                    Event
                </h1>

                <Link
                    to="/dashboard/event/create"
                    className="bg-[#7a1a1a] text-white px-4 py-2 rounded"
                >
                    Tambah
                </Link>

            </div>

            <table className="w-full bg-white rounded shadow">

                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3">No</th>
                        <th className="p-3">Nama Event</th>
                        <th className="p-3">Tanggal</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>

                <tbody>

                    {events.map((item, index) => (
                        <tr key={item.id}>

                            <td className="p-3 text-center">
                                {index + 1}
                            </td>

                            <td className="p-3">
                                {item.title}
                            </td>

                            <td className="p-3">
                                {item.date}
                            </td>

                            <td className="p-3 flex gap-2 justify-center">

                                <button
                                    onClick={() =>
                                        navigate(`/dashboard/event/edit/${item.id}`)
                                    }
                                    className="bg-yellow-400 px-3 py-1 rounded"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() =>
                                        handleDelete(item.id)
                                    }
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}