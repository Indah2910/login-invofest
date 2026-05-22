import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CategoryEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("categories") || "[]"
        );

        const category = data.find(
            (item: any) => item.id === Number(id)
        );

        if (category) {
            setName(category.name);
        }

    }, [id]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        const data = JSON.parse(
            localStorage.getItem("categories") || "[]"
        );

        const updatedData = data.map((item: any) =>
            item.id === Number(id)
                ? { ...item, name }
                : item
        );

        localStorage.setItem(
            "categories",
            JSON.stringify(updatedData)
        );

        alert("Data berhasil diupdate");

        navigate("/dashboard/category");
    };

    return (
        <div className="max-w-xl">

            <h1 className="text-3xl font-bold mb-6">
                Edit Category
            </h1>

            <form
                onSubmit={handleUpdate}
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
                    Update
                </button>

            </form>

        </div>
    );
}