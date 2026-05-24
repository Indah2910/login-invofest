import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Category = {
    id: number;
    name: string;
    slug: string;
    description: string;
    status: "active" | "inactive";
};

export default function CategoryIndex() {

    const navigate = useNavigate();

    const [categories, setCategories] = useState<Category[]>([]);

    const loadData = () => {
        const data = JSON.parse(localStorage.getItem("categories") || "[]");
        setCategories(data);
    };

    const location = useLocation();
    // ambil data localStorage
    useEffect(() => {
        loadData();
    }, [location]);

    // delete
    const handleDelete = (id: number) => {

        if(confirm("Yakin ingin menghapus?")) {
            const updateData = categories.filter((item) => item.id !== id);
            setCategories(updateData);
            localStorage.setItem("categories", JSON.stringify(updateData));
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

                <div className="flex gap-2">
                    <button onClick={loadData} className="border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-grey-100 flex items-center gap-1">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                       </svg>
                       Refresh
                    </button>
                    <Link
                        to="/dashboard/category/create"
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
                        <th className="p-3">Nama</th>
                        <th className="p-3">Slug</th>
                        <th className="p-3">Deskripsi</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {categories.length > 0 ? (
                        categories.map((item, index) => (
                            <tr key={item.id} className="border-t">
                                <td className="p-3 text-center">{index + 1}</td>
                                <td className="p-3">{item.name}</td>
                                <td className="p-3 text-gray-500 text-sm">{item.slug}</td>
                                <td className="p-3 text-gray-500 text-sm">{item.description || "-"}</td>
                                <td className="p-3 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${item.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                                        {item.status === "active" ? "Aktif" : "Nonaktif"}
                                    </span>
                                </td>
                                <td className="p-3 flex gap-2 justify-center">
                                    <button
                                        onClick={() => handleEdit(item.id)}
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
                            <td colSpan={6} className="text-center p-5">
                                Data kosong
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}