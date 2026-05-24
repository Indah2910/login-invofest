import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpeakerCreate() {

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const newSpeaker = { id: Date.now(), name, skill, email, phone, bio, photo: getPhotoValue() };

        // simpan ke speakers
        const oldSpeakers = JSON.parse(localStorage.getItem("speakers") || "[]");
        oldSpeakers.push(newSpeaker);
        localStorage.setItem("speakers", JSON.stringify(oldSpeakers));

        // simpan ke biodata (referensi speakerId)
        const oldBiodata = JSON.parse(localStorage.getItem("biodata") || "[]");
        oldBiodata.push({
            id: Date.now() + 1,
            speakerId: newSpeaker.id,
            name,
            skill,
            email,
            phone,
            bio,
            photo: getPhotoValue(),
            instagram: "",
            linkedin: "",
            twitter: "",
            website: "",
        });
        localStorage.setItem("biodata", JSON.stringify(oldBiodata));

        alert("Speaker berhasil ditambahkan");
        navigate("/dashboard/speaker");
    };

    const photoPreview = getPhotoValue();

    return (
        <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-6">Tambah Speaker</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">

                {/* Foto Speaker */}
                <div>
                    <label className="block mb-2 font-medium">Foto Speaker</label>

                    {/* Tab Upload / Link */}
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
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleFileChange}
                            className="w-full border p-2.5 rounded text-sm"
                        />
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

                    {/* Preview */}
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

                {/* Nama */}
                <div>
                    <label className="block mb-1 font-medium">Nama Speaker <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full border p-3 rounded ${errors.name ? "border-red-400" : ""}`}
                        placeholder="Masukkan Nama Pembicara"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Keahlian */}
                <div>
                    <label className="block mb-1 font-medium">Keahlian <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        className={`w-full border p-3 rounded ${errors.skill ? "border-red-400" : ""}`}
                        placeholder="Contoh: Public Speaking, Web Development"
                    />
                    {errors.skill && <p className="text-red-500 text-sm mt-1">{errors.skill}</p>}
                </div>

                {/* Email & No HP */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full border p-3 rounded ${errors.email ? "border-red-400" : ""}`}
                            placeholder="email@gmail.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">No. HP</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`w-full border p-3 rounded ${errors.phone ? "border-red-400" : ""}`}
                            placeholder="08xxxxxxxxxx"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                </div>

                {/* Bio */}
                <div>
                    <label className="block mb-1 font-medium">Bio / Tentang Speaker</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full border p-3 rounded"
                        rows={4}
                        placeholder="Deskripsi singkat tentang pembicara (opsional)"
                    />
                </div>

                <div className="flex gap-3 pt-2">
                    <button type="submit" className="bg-[#7a1a1a] text-white px-5 py-2 rounded hover:bg-[#5e1414]">
                        Simpan
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