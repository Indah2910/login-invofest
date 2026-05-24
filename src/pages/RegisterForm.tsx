import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";
import Button from "../components/ui/Button";
import { z } from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";

type FormData = {
  nama: string;
  email: string;
  password: string;
  password_confirm: string;
  kategori: string;
  bio: string;
};

const schema = z
  .object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().email("Format email salah"),
    password: z.string().min(8, "Minimal 8 karakter"),
    password_confirm: z.string(),
    kategori: z.string().min(1, "Pilih kategori event"),
    bio: z.string().min(10, "Bio minimal 10 karakter"),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Password tidak sama",
    path: ["password_confirm"],
  });

const kategoriOptions = [
  { label: "IT Seminar", value: "seminar" },
  { label: "IT Workshop", value: "workshop" },
  { label: "IT Talkshow", value: "talkshow" },
  { label: "IT Competition", value: "competition" },
];

export default function RegisterForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [_loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

   const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSuccess(false);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      console.log("DATA:", data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* ── KIRI: Logo (tidak diubah) ── */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gray-100">
        {/* logo kamu tetap di sini, tidak disentuh */}
      </div>

      {/* ── KANAN: Form Register ── */}
      <div className="flex w-full md:w-1/2 min-h-screen items-center justify-center bg-white px-8 lg:px-16 py-10">
        <div className="w-full max-w-sm">

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Buat Akun</h2>
            <p className="text-sm text-gray-400">Isi data di bawah untuk mendaftar</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <InputText
              label="Nama Lengkap"
              nama="nama"
              register={register}
              error={errors.nama?.message}
            />

            <InputText
              label="Email"
              nama="email"
              type="email"
              register={register}
              error={errors.email?.message}
            />

            <InputPassword
              label="Password"
              nama="password"
              register={register}
              error={errors.password?.message}
            />

            <InputPassword
              label="Confirm Password"
              nama="password_confirm"
              register={register}
              error={errors.password_confirm?.message}
            />

            {/* Dropdown Kategori */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Event Category
              </label>
              <div className="relative">
                <select
                  {...register("kategori")}
                  onClick={() => setIsOpen(!isOpen)}
                  onBlur={() => setIsOpen(false)}
                  className={`w-full px-4 py-3 bg-white rounded-xl border outline-none appearance-none transition-all focus:ring-2 focus:ring-[#7a1a1a]/20 focus:border-[#7a1a1a] cursor-pointer text-sm ${
                    errors.kategori ? "border-red-400 bg-red-50" : "border-gray-300 text-gray-700"
                  }`}
                >
                  <option value="">Pilih kategori event...</option>
                  {kategoriOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              {errors.kategori && <p className="text-red-500 text-xs">{errors.kategori.message}</p>}
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Bio</label>
              <textarea
                {...register("bio")}
                rows={3}
                className={`px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-[#7a1a1a]/20 focus:border-[#7a1a1a] resize-none text-sm ${
                  errors.bio ? "border-red-400 bg-red-50" : "border-gray-300 text-gray-700"
                }`}
                placeholder="Ceritakan tentang diri Anda..."
              />
              {errors.bio && <p className="text-red-500 text-xs">{errors.bio.message}</p>}
            </div>

            {/* Tombol Daftar */}
            <button
              type="submit"
              disabled={_loading}
              className="w-full h-12 bg-[#7a1a1a] text-white rounded-xl text-sm font-semibold tracking-widest hover:bg-[#5e1414] active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {_loading ? "Memproses..." : "DAFTAR"}
            </button>

            {/* Success */}
            {success && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm text-center font-medium">
                ✓ Registrasi berhasil!
              </div>
            )}

          </form>

          {/* Link Login */}
          <p className="mt-6 text-sm text-center text-gray-500">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-[#7a1a1a] font-semibold hover:underline">
              Login disini
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}