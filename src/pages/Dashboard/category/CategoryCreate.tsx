import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCreate() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"active" | "inactive">("active");
    const [errors, setErrors] = useState<{ name?: string; slug?: string }>({});

    // Auto-generate slug dari nama
    const handleNameChange = (value: string) => {
        setName(value);
        const generatedSlug = value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");
        setSlug(generatedSlug);
    };

    const validate = () => {
        const newErrors: { name?: string; slug?: string } = {};
        if (!name.trim()) newErrors.name = "Nama category wajib diisi";
        if (!slug.trim()) newErrors.slug = "Slug wajib diisi";

        // cek slug duplikat
        const existing = JSON.parse(localStorage.getItem("categories") || "[]");
        const slugExists = existing.find((item: any) => item.slug === slug);
        if (slugExists) newErrors.slug = "Slug sudah digunakan";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const oldData = JSON.parse(localStorage.getItem("categories") || "[]");
        const newData = { id: Date.now(), name, slug, description, status };
        oldData.push(newData);
        localStorage.setItem("categories", JSON.stringify(oldData));

        alert("Berhasil ditambahkan");
        navigate("/dashboard/category");
    };

    return (
        <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-6">Tambah Category</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">

                {/* Nama */}
                <div>
                    <label className="block mb-1 font-medium">Nama Category <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => handleNameChange(e.target.value)}
                        className={`w-full border p-3 rounded ${errors.name ? "border-red-400" : ""}`}
                        placeholder="Nama Category Event"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Slug */}
                <div>
                    <label className="block mb-1 font-medium">Slug <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className={`w-full border p-3 rounded bg-gray-50 ${errors.slug ? "border-red-400" : ""}`}
                        placeholder="Nama"
                    />
                    {errors.slug
                        ? <p className="text-red-500 text-sm mt-1">{errors.slug}</p>
                        : <p className="text-gray-400 text-xs mt-1">Auto-generate dari nama, bisa diedit manual</p>
                    }
                </div>

                {/* Deskripsi */}
                <div>
                    <label className="block mb-1 font-medium">Deskripsi</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-3 rounded"
                        rows={3}
                        placeholder="Deskripsi singkat category (opsional)"
                    />
                </div>

                {/* Status */}
                <div>
                    <label className="block mb-1 font-medium">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
                        className="w-full border p-3 rounded"
                    >
                        <option value="active">Aktif</option>
                        <option value="inactive">Nonaktif</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <button
                        type="submit"
                        className="bg-[#7a1a1a] text-white px-5 py-2 rounded hover:bg-[#5e1414]"
                    >
                        Simpan
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/dashboard/category")}
                        className="border border-gray-400 px-5 py-2 rounded hover:bg-gray-100"
                    >
                        Batal
                    </button>
                </div>

            </form>
        </div>
    );
}