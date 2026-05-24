import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BiodataEdit() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [speakerId, setSpeakerId] = useState<number>(0);
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    const [website, setWebsite] = useState("");
    const [photoMode, setPhotoMode] = useState<"upload" | "link">("upload");
    const [photoFile, setPhotoFile] = useState("");
    const [photoLink, setPhotoLink] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("biodata") || "[]");
        const item = data.find((b: any) => b.id === Number(id));
        if (item) {
            setSpeakerId(item.speakerId);
            setName(item.name);
            setSkill(item.skill);
            setEmail(item.email || "");
            setPhone(item.phone || "");
            setBio(item.bio || "");
            setInstagram(item.instagram || "");
            setLinkedin(item.linkedin || "");
            setTwitter(item.twitter || "");
            setWebsite(item.website || "");
            if (item.photo) {
                if (item.photo.startsWith("data:")) {
                    setPhotoMode("upload");
                    setPhotoFile(item.photo);
                } else {
                    setPhotoMode("link");
                    setPhotoLink(item.photo);
                }
            }
        }
    }, [id]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!["image/png", "image/jpeg"].includes(file.type)) {
            setErrors((p) => ({ ...p, photo: "Format harus PNG atau JPG" }));
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            setErrors((p) => ({ ...p, photo: "Maksimal 2MB" }));
            return;
        }
        const reader = new FileReader();
        reader.onload = () => { setPhotoFile(reader.result as string); };
        reader.readAsDataURL(file);
    };

    const getPhotoValue = () => photoMode === "upload" ? photoFile : photoLink;

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!name.trim()) newErrors.name = "Nama wajib diisi";
        if (!skill.trim()) newErrors.skill = "Keahlian wajib diisi";
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Format email tidak valid";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const photo = getPhotoValue();

        // update biodata
        const biodata = JSON.parse(localStorage.getItem("biodata") || "[]");
        const updatedBiodata = biodata.map((item: any) =>
            item.id === Number(id)
                ? { ...item, name, skill, email, phone, bio, instagram, linkedin, twitter, website, photo }
                : item
        );
        localStorage.setItem("biodata", JSON.stringify(updatedBiodata));

        // sync ke speakers
        const speakers = JSON.parse(localStorage.getItem("speakers") || "[]");
        const updatedSpeakers = speakers.map((item: any) =>
            item.id === speakerId
                ? { ...item, name, skill, email, phone, bio, photo }
                : item
        );
        localStorage.setItem("speakers", JSON.stringify(updatedSpeakers));

        alert("Biodata berhasil diupdate");
        navigate("/dashboard/biodata");
    };

    const photoPreview = getPhotoValue();

    return (
        <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-6">Edit Biodata</h1>

            <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow space-y-4">

                {/* Foto */}
                <div>
                    <label className="block mb-2 font-medium">Foto</label>
                    <div className="flex border rounded overflow-hidden mb-3 w-fit">
                        <button type="button" onClick={() => setPhotoMode("upload")}
                            className={`px-4 py-1.5 text-sm ${photoMode === "upload" ? "bg-[#7a1a1a] text-white" : "bg-gray-100 text-gray-600"}`}>
                            Upload File
                        </button>
                        <button type="button" onClick={() => setPhotoMode("link")}
                            className={`px-4 py-1.5 text-sm ${photoMode === "link" ? "bg-[#7a1a1a] text-white" : "bg-gray-100 text-gray-600"}`}>
                            Link URL
                        </button>
                    </div>
                    {photoMode === "upload" ? (
                        <input type="file" accept="image/png,image/jpeg" onChange={handleFileChange}
                            className="w-full border p-2.5 rounded text-sm" />
                    ) : (
                        <input type="text" value={photoLink} onChange={(e) => setPhotoLink(e.target.value)}
                            className="w-full border p-3 rounded" placeholder="https://..." />
                    )}
                    {photoPreview && (
                        <div className="mt-3 flex items-center gap-3">
                            <img src={photoPreview} alt="Preview"
                                className="w-20 h-20 rounded-full object-cover border" />
                            <span className="text-sm text-gray-500">Preview foto</span>
                        </div>
                    )}
                </div>

                {/* Nama & Keahlian */}
                <div>
                    <label className="block mb-1 font-medium">Nama <span className="text-red-500">*</span></label>
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

                {/* Email & HP */}
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
                            className="w-full border p-3 rounded" />
                    </div>
                </div>

                {/* Bio */}
                <div>
                    <label className="block mb-1 font-medium">Bio</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)}
                        className="w-full border p-3 rounded" rows={3} />
                </div>

                {/* Sosmed */}
                <div className="border-t pt-4">
                    <p className="font-medium mb-3">Media Sosial & Link</p>
                    <div className="space-y-3">
                        <div>
                            <label className="block mb-1 text-sm">Instagram</label>
                            <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)}
                                className="w-full border p-3 rounded" placeholder="@username" />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">LinkedIn</label>
                            <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)}
                                className="w-full border p-3 rounded" placeholder="linkedin.com/in/username" />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">Twitter / X</label>
                            <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)}
                                className="w-full border p-3 rounded" placeholder="@username" />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">Website</label>
                            <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)}
                                className="w-full border p-3 rounded" placeholder="https://website.com" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 pt-2">
                    <button type="submit" className="bg-[#7a1a1a] text-white px-5 py-2 rounded hover:bg-[#5e1414]">
                        Update
                    </button>
                    <button type="button" onClick={() => navigate("/dashboard/biodata")}
                        className="border border-gray-400 px-5 py-2 rounded hover:bg-gray-100">
                        Batal
                    </button>
                </div>

            </form>
        </div>
    );
}