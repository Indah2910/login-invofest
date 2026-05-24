import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CategoryEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"active" | "inactive">("active");
    const [errors, setErrors] = useState<{ name?: string; slug?: string }>({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("categories") || "[]");
        const category = data.find((item: any) => item.id === Number(id));
        if (category) {
            setName(category.name);
            setSlug(category.slug || "");
            setDescription(category.description || "");
            setStatus(category.status || "active");
        }
    }, [id]);

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

        const existing = JSON.parse(localStorage.getItem("categories") || "[]");
        const slugExists = existing.find(
            (item: any) => item.slug === slug && item.id !== Number(id)
        );
        if (slugExists) newErrors.slug = "Slug sudah digunakan";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const data = JSON.parse(localStorage.getItem("categories") || "[]");
        const updatedData = data.map((item: any) =>
            item.id === Number(id)
                ? { ...item, name, slug, description, status }
                : item
        );
        localStorage.setItem("categories", JSON.stringify(updatedData));

        alert("Data berhasil diupdate");
        navigate("/dashboard/category");
    };

    return (
        <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-6">Edit Category</h1>

            <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow space-y-4">

                <div>
                    <label className="block mb-1 font-medium">Nama Category <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => handleNameChange(e.target.value)}
                        className={`w-full border p-3 rounded ${errors.name ? "border-red-400" : ""}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Slug <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className={`w-full border p-3 rounded bg-gray-50 ${errors.slug ? "border-red-400" : ""}`}
                    />
                    {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Deskripsi</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-3 rounded"
                        rows={3}
                    />
                </div>

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

                <div className="flex gap-3 pt-2">
                    <button
                        type="submit"
                        className="bg-[#7a1a1a] text-white px-5 py-2 rounded hover:bg-[#5e1414]"
                    >
                        Update
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