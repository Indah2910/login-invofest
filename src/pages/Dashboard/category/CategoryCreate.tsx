import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCreate() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const oldData = JSON.parse(
            localStorage.getItem("categories") || "[]"
        );

        const newData = {
            id: Date.now(),
            name,
        };

        oldData.push(newData);

        localStorage.setItem(
            "categories",
            JSON.stringify(oldData)
        );

        alert("Berhasil ditambahkan");

        navigate("/dashboard/category");
    };

    return (
        <div className="max-w-xl">

            <h1 className="text-3xl font-bold mb-6">
                Tambah Category
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow"
            >

                <div className="mb-4">

                    <label className="block mb-2">
                        Nama Category
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className="w-full border p-3 rounded"
                    />

                </div>

                <button
                    type="submit"
                    className="bg-[#7a1a1a] text-white px-4 py-2 rounded"
                >
                    Simpan
                </button>

            </form>

        </div>
    );
}