import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BiodataEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("biodatas") || "[]"
        );

        const biodata = data.find(
            (item: any) => item.id === Number(id)
        );

        if (biodata) {
            setName(biodata.name);
            setAddress(biodata.address);
        }

    }, [id]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        const data = JSON.parse(
            localStorage.getItem("biodatas") || "[]"
        );

        const updated = data.map((item: any) =>
            item.id === Number(id)
                ? {
                    ...item,
                    name,
                    address,
                }
                : item
        );

        localStorage.setItem(
            "biodatas",
            JSON.stringify(updated)
        );

        alert("Biodata berhasil diupdate");

        navigate("/dashboard/biodata");
    };

    return (
        <div className="max-w-xl">

            <h1 className="text-3xl font-bold mb-6">
                Edit Biodata
            </h1>

            <form
                onSubmit={handleUpdate}
                className="bg-white p-6 rounded shadow"
            >

                <div className="mb-4">

                    <label className="block mb-2">
                        Nama
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

                <div className="mb-4">

                    <label className="block mb-2">
                        Alamat
                    </label>

                    <textarea
                        value={address}
                        onChange={(e) =>
                            setAddress(e.target.value)
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