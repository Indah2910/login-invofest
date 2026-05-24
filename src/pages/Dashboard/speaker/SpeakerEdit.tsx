import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SpeakerEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");
    const [photoMode, setPhotoMode] = useState<"upload" | "link">("upload");
    const [photoFile, setPhotoFile] = useState<string>("");
    const [photoLink, setPhotoLink] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("speakers") || "[]");
        const speaker = data.find((item: any) => item.id === Number(id));
        if (speaker) {
            setName(speaker.name);
            setSkill(speaker.skill);
            setEmail(speaker.email || "");
            setPhone(speaker.phone || "");
            setBio(speaker.bio || "");

            if (speaker.photo) {
                if (speaker.photo.startsWith("data:")) {
                    setPhotoMode("upload");
                    setPhotoFile(speaker.photo);
                } else {
                    setPhotoMode("link");
                    setPhotoLink(speaker.photo);
                }
            }
        }
    }, [id]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
            setErrors((prev) => ({ ...prev, photo: "Format file harus PNG atau JPG" }));
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setErrors((prev) => ({ ...prev, photo: "Ukuran file maksimal 2MB" }));
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setPhotoFile(reader.result as string);
            setErrors((prev) => ({ ...prev, photo: "" }));
        };
        reader.readAsDataURL(file);
    };

    const getPhotoValue = () => photoMode === "upload" ? photoFile : photoLink;

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!name.trim()) newErrors.name = "Nama speaker wajib diisi";
        if (!skill.trim()) newErrors.skill = "Keahlian wajib diisi";
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            newErrors.email = "Format email tidak valid";
        if (phone && !/^[0-9+\-\s]{8,15}$/.test(phone))
            newErrors.phone = "Format nomor HP tidak valid";
        if (photoMode === "link" && photoLink && !/^https?:\/\/.+/.test(photoLink))
            newErrors.photo = "Link foto harus diawali http:// atau https://";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

         // update speakers
        const data = JSON.parse(localStorage.getItem("speakers") || "[]");
        const updated = data.map((item: any) =>
            item.id === Number(id)
                ? { ...item, name, skill, email, phone, bio, photo: getPhotoValue() }
                : item
        );
        localStorage.setItem("speakers", JSON.stringify(updated));

        // sync ke biodata
        const biodata = JSON.parse(localStorage.getItem("biodata") || "[]");
        const updatedBiodata = biodata.map((item: any) =>
            item.speakerId === Number(id)
                ? { ...item, name, skill, email, phone, bio, photo: getPhotoValue() }
                : item
        );
        localStorage.setItem("biodata", JSON.stringify(updatedBiodata));

        alert("Speaker berhasil diupdate");
        navigate("/dashboard/speaker");
    };

    const photoPreview = getPhotoValue();

    return (
        <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-6">Edit Speaker</h1>

            <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow space-y-4">

                {/* Foto Speaker */}
                <div>
                    <label className="block mb-2 font-medium">Foto Speaker</label>

                    <div className="flex border rounded overflow-hidden mb-3 w-fit">
                        <button
                            type="button"
                            onClick={() => setPhotoMode("upload")}
                            className={`px-4 py-1.5 text-sm ${photoMode === "upload" ? "bg-[#7a1a1a] text-white" : "bg-gray-100 text-gray-600"}`}
                        >
                            Upload File
                        </button>
                        <button
                            type="button"
                            onClick={() => setPhotoMode("link")}
                            className={`px-4 py-1.5 text-sm ${photoMode === "link" ? "bg-[#7a1a1a] text-white" : "bg-gray-100 text-gray-600"}`}
                        >
                            Link URL
                        </button>
                    </div>

                    {photoMode === "upload" ? (
                        <div>
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleFileChange}
                                className="w-full border p-2.5 rounded text-sm"
                            />
                            <p className="text-xs text-gray-400 mt-1">Biarkan kosong jika tidak ingin mengganti foto</p>
                        </div>
                    ) : (
                        <input
                            type="text"
                            value={photoLink}
                            onChange={(e) => setPhotoLink(e.target.value)}
                            className={`w-full border p-3 rounded ${errors.photo ? "border-red-400" : ""}`}
                            placeholder="https://example.com/foto.jpg"
                        />
                    )}

                    {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}

                    {photoPreview && (
                        <div className="mt-3 flex items-center gap-3">
                            <img
                                src={photoPreview}
                                alt="Preview"
                                className="w-20 h-20 rounded-full object-cover border"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "";
                                    setErrors((prev) => ({ ...prev, photo: "Gagal memuat gambar dari link" }));
                                }}
                            />
                            <span className="text-sm text-gray-500">Preview foto</span>
                        </div>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Nama Speaker <span className="text-red-500">*</span></label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        className={`w-full border p-3 rounded ${errors.name ? "border-red-400" : ""}`} />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Keahlian <span className="text-red-500">*</span></label>
                    <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)}
                        className={`w-full border p-3 rounded ${errors.skill ? "border-red-400" : ""}`} />
                    {errors.skill && <p className="text-red-500 text-sm mt-1">{errors.skill}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                            className={`w-full border p-3 rounded ${errors.email ? "border-red-400" : ""}`} />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">No. HP</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
                            className={`w-full border p-3 rounded ${errors.phone ? "border-red-400" : ""}`} />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Bio / Tentang Speaker</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)}
                        className="w-full border p-3 rounded" rows={4} />
                </div>

                <div className="flex gap-3 pt-2">
                    <button type="submit" className="bg-[#7a1a1a] text-white px-5 py-2 rounded hover:bg-[#5e1414]">
                        Update
                    </button>
                    <button type="button" onClick={() => navigate("/dashboard/speaker")}
                        className="border border-gray-400 px-5 py-2 rounded hover:bg-gray-100">
                        Batal
                    </button>
                </div>

            </form>
        </div>
    );
}