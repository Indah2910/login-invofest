import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCreate() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"upcoming" | "ongoing" | "done">("upcoming");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!title.trim()) newErrors.title = "Nama event wajib diisi";
        if (!date) newErrors.date = "Tanggal mulai wajib diisi";
        if (endDate && endDate < date) newErrors.endDate = "Tanggal selesai tidak boleh sebelum tanggal mulai";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const oldData = JSON.parse(localStorage.getItem("events") || "[]");
        oldData.push({ id: Date.now(), title, date, endDate, location, description, status });
        localStorage.setItem("events", JSON.stringify(oldData));

        alert("Event berhasil ditambahkan");
        navigate("/dashboard/event");
    };

    return (
        <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-6">Tambah Event</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">

                {/* Nama Event */}
                <div>
                    <label className="block mb-1 font-medium">Nama Event <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full border p-3 rounded ${errors.title ? "border-red-400" : ""}`}
                        placeholder="Masukkan Nama Event"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                {/* Tanggal Mulai & Selesai */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Tanggal Mulai <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className={`w-full border p-3 rounded ${errors.date ? "border-red-400" : ""}`}
                        />
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Tanggal Selesai</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className={`w-full border p-3 rounded ${errors.endDate ? "border-red-400" : ""}`}
                        />
                        {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
                    </div>
                </div>

                {/* Lokasi */}
                <div>
                    <label className="block mb-1 font-medium">Lokasi</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border p-3 rounded"
                        placeholder="Contoh: Gedung Serbaguna, Jakarta"
                    />
                </div>

                {/* Deskripsi */}
                <div>
                    <label className="block mb-1 font-medium">Deskripsi</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-3 rounded"
                        rows={3}
                        placeholder="Deskripsi singkat event (opsional)"
                    />
                </div>

                {/* Status */}
                <div>
                    <label className="block mb-1 font-medium">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as any)}
                        className="w-full border p-3 rounded"
                    >
                        <option value="upcoming">Akan Datang</option>
                        <option value="ongoing">Berlangsung</option>
                        <option value="done">Selesai</option>
                    </select>
                </div>

                <div className="flex gap-3 pt-2">
                    <button type="submit" className="bg-[#7a1a1a] text-white px-5 py-2 rounded hover:bg-[#5e1414]">
                        Simpan
                    </button>
                    <button type="button" onClick={() => navigate("/dashboard/event")} className="border border-gray-400 px-5 py-2 rounded hover:bg-gray-100">
                        Batal
                    </button>
                </div>

            </form>
        </div>
    );
}