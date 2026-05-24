import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type EventType = {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    status: "upcoming" | "ondoing" | "done";
};

export default function EventIndex() {

    const navigate = useNavigate();
    const loc = useLocation();
    const [events, setEvents] = useState<EventType[]>([]);

    const loadData = () => {
        const data = JSON.parse(localStorage.getItem("events") || "[]");
        setEvents(data);
    };

    // pakai loc sebagai dependency agar data langsung muncul tanpa refresh
    useEffect(() => {
        loadData();
    }, [loc]);

    const handleDelete = (id: number) => {
        if (!confirm("Yakin ingin menghapus event ini?")) return;
        const updated = events.filter((item) => item.id !== id);
        setEvents(updated);
        localStorage.setItem("events", JSON.stringify(updated));
    };

    const statusBadge = (status: string) => {
        const map: Record<string, string> = {
            upcoming: "bg-blue-100 text-blue-700",
            ongoing: "bg-green-100 text-green-700",
            done: "bg-gray-100 text-gray-500",
        };
        const label: Record<string, string> = {
            upcoming: "Akan Datang",
            ongoing: "Berlangsung",
            done: "Selesai",
        };
        return (
            <span className={`px-2 py-1 rounded text-xs font-medium ${map[status] || ""}`}>
                {label[status] || status}
            </span>
        );
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-3xl font-bold">Event</h1>

                <div className="flex gap-2">
                    <button
                        onClick={loadData}
                        className="border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Refresh
                    </button>

                    <Link
                        to="/dashboard/event/create"
                        className="bg-[#7a1a1a] text-white px-4 py-2 rounded"
                    >
                        Tambah
                    </Link>
                </div>
            </div>

            <table className="w-full bg-white rounded shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3">No</th>
                        <th className="p-3">Nama Event</th>
                        <th className="p-3">Tanggal</th>
                        <th className="p-3">Lokasi</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events.length > 0 ? (
                        events.map((item, index) => (
                            <tr key={item.id} className="border-t">
                                <td className="p-3 text-center">{index + 1}</td>
                                <td className="p-3 font-medium">{item.title}</td>
                                <td className="p-3 text-sm text-gray-600">{item.date}</td>
                                <td className="p-3 text-sm text-gray-600">{item.location || "-"}</td>
                                <td className="p-3 text-center">{statusBadge(item.status)}</td>
                                <td className="p-3 flex gap-2 justify-center">
                                    <button
                                        onClick={() => navigate(`/dashboard/event/edit/${item.id}`)}
                                        className="bg-yellow-400 px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center p-5 text-gray-400">
                                Data kosong
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}