import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type SpeakerType = {
    id: number;
    name: string;
    skill: string;
};

export default function SpeakerIndex() {

    const navigate = useNavigate();

    const [speakers, setSpeakers] = useState<SpeakerType[]>([]);

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("speakers") || "[]"
        );

        setSpeakers(data);

    }, []);

    const handleDelete = (id: number) => {

        const confirmDelete = confirm(
            "Yakin ingin menghapus?"
        );

        if (confirmDelete) {

            const updated = speakers.filter(
                (item) => item.id !== id
            );

            setSpeakers(updated);

            localStorage.setItem(
                "speakers",
                JSON.stringify(updated)
            );
        }
    };

    return (
        <div>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Speaker
                </h1>

                <Link
                    to="/dashboard/speaker/create"
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
                        <th className="p-3">Keahlian</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>

                <tbody>

                    {speakers.length > 0 ? (
                        speakers.map((item, index) => (
                            <tr key={item.id}>

                                <td className="p-3 text-center">
                                    {index + 1}
                                </td>

                                <td className="p-3">
                                    {item.name}
                                </td>

                                <td className="p-3">
                                    {item.skill}
                                </td>

                                <td className="p-3 flex gap-2 justify-center">

                                    <button
                                        onClick={() =>
                                            navigate(`/dashboard/speaker/edit/${item.id}`)
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
                                colSpan={4}
                                className="text-center p-5"
                            >
                                Data speaker kosong
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
}