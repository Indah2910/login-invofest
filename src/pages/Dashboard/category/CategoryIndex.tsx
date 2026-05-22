import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Category = {
    id: number;
    name: string;
};

export default function CategoryIndex() {

    const navigate = useNavigate();

    const [categories, setCategories] = useState<Category[]>([]);

    // ambil data localStorage
    useEffect(() => {
        const data = JSON.parse(
            localStorage.getItem("categories") || "[]"
        );

        setCategories(data);
    }, []);

    // delete
    const handleDelete = (id: number) => {

        const confirmDelete = confirm(
            "Yakin ingin menghapus?"
        );

        if (confirmDelete) {

            const updatedData = categories.filter(
                (item) => item.id !== id
            );

            setCategories(updatedData);

            localStorage.setItem(
                "categories",
                JSON.stringify(updatedData)
            );
        }
    };

    // edit
    const handleEdit = (id: number) => {
        navigate(`/dashboard/category/edit/${id}`);
    };

    return (
        <div>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Category
                </h1>

                <Link
                    to="/dashboard/category/create"
                    className="bg-[#7a1a1a] text-white px-4 py-2 rounded"
                >
                    Tambah
                </Link>

            </div>

            <table className="w-full bg-white rounded shadow">

                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3">No</th>
                        <th className="p-3">Nama</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>

                <tbody>

                    {categories.length > 0 ? (
                        categories.map((item, index) => (
                            <tr key={item.id}>

                                <td className="p-3 text-center">
                                    {index + 1}
                                </td>

                                <td className="p-3">
                                    {item.name}
                                </td>

                                <td className="p-3 flex gap-2 justify-center">

                                    <button
                                        onClick={() =>
                                            handleEdit(item.id)
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
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={3}
                                className="text-center p-5"
                            >
                                Data kosong
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>
        </div>
    );
}