import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SpeakerEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("speakers") || "[]"
        );

        const speaker = data.find(
            (item: any) => item.id === Number(id)
        );

        if (speaker) {
            setName(speaker.name);
            setSkill(speaker.skill);
        }

    }, [id]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        const data = JSON.parse(
            localStorage.getItem("speakers") || "[]"
        );

        const updated = data.map((item: any) =>
            item.id === Number(id)
                ? {
                    ...item,
                    name,
                    skill,
                }
                : item
        );

        localStorage.setItem(
            "speakers",
            JSON.stringify(updated)
        );

        alert("Speaker berhasil diupdate");

        navigate("/dashboard/speaker");
    };

    return (
        <div className="max-w-xl">

            <h1 className="text-3xl font-bold mb-6">
                Edit Speaker
            </h1>

            <form
                onSubmit={handleUpdate}
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
                    Update
                </button>

            </form>

        </div>
    );
}