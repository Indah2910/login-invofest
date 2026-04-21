import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* LOGIN */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-red-100 text-red-700 p-3 rounded-full mb-2">
              🔒
            </div>
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-gray-500 text-sm">Masuk ke akun Anda</p>
          </div>

          <LoginForm />
        </div>

        {/* REGISTER */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-red-100 text-red-700 p-3 rounded-full mb-2">
              👤
            </div>
            <h2 className="text-2xl font-bold">Register</h2>
            <p className="text-gray-500 text-sm">Buat akun baru</p>
          </div>

          <RegisterForm />
        </div>

      </div>
    </div>
  );
}

export default App;