import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BiodataCreate() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const oldData = JSON.parse(
            localStorage.getItem("biodatas") || "[]"
        );

        const newData = {
            id: Date.now(),
            name,
            address,
        };

        oldData.push(newData);

        localStorage.setItem(
            "biodatas",
            JSON.stringify(oldData)
        );

        alert("Biodata berhasil ditambahkan");

        navigate("/dashboard/biodata");
    };

    return (
        <div className="max-w-xl">

            <h1 className="text-3xl font-bold mb-6">
                Tambah Biodata
            </h1>

            <form
                onSubmit={handleSubmit}
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
                    Simpan
                </button>

            </form>

        </div>
    );
}