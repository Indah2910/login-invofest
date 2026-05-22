import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpeakerCreate() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const oldData = JSON.parse(
            localStorage.getItem("speakers") || "[]"
        );

        const newData = {
            id: Date.now(),
            name,
            skill,
        };

        oldData.push(newData);

        localStorage.setItem(
            "speakers",
            JSON.stringify(oldData)
        );

        alert("Speaker berhasil ditambahkan");

        navigate("/dashboard/speaker");
    };

    return (
        <div className="max-w-xl">

            <h1 className="text-3xl font-bold mb-6">
                Tambah Speaker
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow"
            >

                <div className="mb-4">

                    <label className="block mb-2">
                        Nama Speaker
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
                        Keahlian
                    </label>

                    <input
                        type="text"
                        value={skill}
                        onChange={(e) =>
                            setSkill(e.target.value)
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