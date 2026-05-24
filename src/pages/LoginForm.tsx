import { useForm } from "react-hook-form";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, "Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (data.email === "admin@gmail.com" && data.password === "password123") {
      alert("Login Berhasil");
      login(data.email);

      navigate("/dashboard");
    } else {
      alert("Login gagal, pastikan email dan password benar")
      return
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-3x1 rounded-2x1 overflow-hidden shadow-1g border corder-gray-200">
        <div className="flex flex-col justify-center bg-white w-3/5 px-10 py-12">
            <h2 className="text-2x1 font-serif font-normal text-gray-800 mb-1">
              Welcome Back!
            </h2>
            <p className="text-sm text-gray-400 mb-8">
              Masuk ke akun Anda untuk Melanjutkan
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <InputText
                label="EMAIL"
                nama="email"
                register={register}
                error={errors.email?.message}
              />

              <InputPassword
                label="PASSWORD"
                nama="password"
                register={register}
                error={errors.password?.message}
              />

              <button
                type="submit"
                className="w-full h-11 bg-[#7a1a1a] text-white rounded-lg text-sm font-medium tracking-widest hover:opacity-90 transition mt-2"
                >
                MASUK
              </button>
            </form>
        
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">atau</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

             <p className="text-center text-sm text-gray-500">
              Belum punya akun?{" "}
              <Link to="/register" className="text-[#7a1a1a] font-medium hover:underline">
                Daftar Sekarang
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}