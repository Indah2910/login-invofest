import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

type SpeakerType = {
    id: number;
    name: string;
    skill: string;
    email: string;
    phone: string;
    bio: string;
    photo: string;
};

export default function SpeakerIndex() {
    const navigate = useNavigate();
    const loc = useLocation();
    const [speakers, setSpeakers] = useState<SpeakerType[]>([]);

    const loadData = () => {
        const data = JSON.parse(localStorage.getItem("speakers") || "[]");
        setSpeakers(data);
    };

    useEffect(() => {
        loadData();
    }, [loc]);

    const handleDelete = (id: number) => {
        if (!confirm("Yakin ingin menghapus speaker ini?")) return;
        const updated = speakers.filter((item) => item.id !== id);
        setSpeakers(updated);
        localStorage.setItem("speakers", JSON.stringify(updated));

         // hapus biodata terkait
        const biodata = JSON.parse(localStorage.getItem("biodata") || "[]");
        const updatedBiodata = biodata.filter((item: any) => item.speakerId !== id);
        localStorage.setItem("biodata", JSON.stringify(updatedBiodata));

    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Speaker</h1>

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

                    <Link to="/dashboard/speaker/create" className="bg-[#7a1a1a] text-white px-4 py-2 rounded">
                        Tambah
                    </Link>
                </div>
            </div>

            <table className="w-full bg-white rounded shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3">No</th>
                        <th className="p-3">Foto</th>
                        <th className="p-3">Nama</th>
                        <th className="p-3">Keahlian</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">No. HP</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {speakers.length > 0 ? (
                        speakers.map((item, index) => (
                            <tr key={item.id} className="border-t">
                                <td className="p-3 text-center">{index + 1}</td>
                                <td className="p-3 text-center">
                                    {item.photo ? (
                                        <img
                                            src={item.photo}
                                            alt={item.name}
                                            className="w-10 h-10 rounded-full object-cover mx-auto border"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = "none";
                                            }}
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-gray-400 text-xs">
                                            N/A
                                        </div>
                                    )}
                                </td>
                                <td className="p-3 font-medium">{item.name}</td>
                                <td className="p-3 text-sm text-gray-600">{item.skill}</td>
                                <td className="p-3 text-sm text-gray-600">{item.email || "-"}</td>
                                <td className="p-3 text-sm text-gray-600">{item.phone || "-"}</td>
                                <td className="p-3 flex gap-2 justify-center">
                                    <button
                                        onClick={() => navigate(`/dashboard/speaker/edit/${item.id}`)}
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
                            <td colSpan={7} className="text-center p-5 text-gray-400">
                                Data speaker kosong
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}