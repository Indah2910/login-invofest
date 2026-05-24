import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type BiodataType = {
    id: number;
    speakerId: number;
    name: string;
    skill: string;
    email: string;
    phone: string;
    bio: string;
    photo: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    website: string;
};

export default function BiodataIndex() {
    const navigate = useNavigate();
    const loc = useLocation();
    const [biodata, setBiodata] = useState<BiodataType[]>([]);

    const loadData = () => {
        const data = JSON.parse(localStorage.getItem("biodata") || "[]");
        setBiodata(data);
    };

    useEffect(() => {
        loadData();
    }, [loc]);

    const handleDelete = (id: number, speakerId: number) => {
        if (!confirm("Yakin ingin menghapus biodata ini?")) return;

        // hapus biodata
        const updated = biodata.filter((item) => item.id !== id);
        setBiodata(updated);
        localStorage.setItem("biodata", JSON.stringify(updated));

        // hapus speaker terkait juga
        const speakers = JSON.parse(localStorage.getItem("speakers") || "[]");
        const updatedSpeakers = speakers.filter((item: any) => item.id !== speakerId);
        localStorage.setItem("speakers", JSON.stringify(updatedSpeakers));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Biodata</h1>
                <button
                    onClick={loadData}
                    className="border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {biodata.length > 0 ? (
                    biodata.map((item) => (
                        <div key={item.id} className="bg-white rounded shadow p-5 flex gap-4">

                            {/* Foto */}
                            {item.photo ? (
                                <img
                                    src={item.photo}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full object-cover border flex-shrink-0"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                />
                            ) : (
                                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-2xl flex-shrink-0">
                                    👤
                                </div>
                            )}

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                <p className="text-sm text-[#7a1a1a] font-medium mb-1">{item.skill}</p>
                                {item.bio && <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.bio}</p>}

                                <div className="text-xs text-gray-400 space-y-0.5">
                                    {item.email && <p>✉️ {item.email}</p>}
                                    {item.phone && <p>📱 {item.phone}</p>}
                                    {item.instagram && <p>📸 {item.instagram}</p>}
                                    {item.linkedin && <p>💼 {item.linkedin}</p>}
                                    {item.website && <p>🌐 {item.website}</p>}
                                </div>

                                <div className="flex gap-2 mt-3">
                                    <button
                                        onClick={() => navigate(`/dashboard/biodata/edit/${item.id}`)}
                                        className="bg-yellow-400 px-3 py-1 rounded text-sm"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id, item.speakerId)}
                                        className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <div className="col-span-2 text-center p-10 text-gray-400 bg-white rounded shadow">
                        Belum ada biodata. Tambahkan speaker terlebih dahulu.
                    </div>
                )}
            </div>
        </div>
    );
}