import { useNavigate, Outlet, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();

        navigate("/login");
    };

    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <div className="w-64 bg-red-900 min-h-screen p-4 flex flex-col justify-between">

                {/* Atas */}
                <div>

                    {/* Logo */}
                    <div className="border-b border-gray-300 text-center p-2 mb-6">
                        <h2 className="text-white text-2xl font-bold">
                            Invofest Dashboard
                        </h2>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col gap-3">

                        <Link
                            to="/dashboard"
                            className="text-white p-3 rounded hover:bg-black"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/dashboard/category"
                            className="text-white p-3 rounded hover:bg-black"
                        >
                            Category
                        </Link>

                        <Link
                            to="/dashboard/event"
                            className="text-white p-3 rounded hover:bg-black"
                        >
                            Event
                        </Link>

                        <Link
                            to="/dashboard/speaker"
                            className="text-white p-3 rounded hover:bg-black"
                        >
                            Pembicara
                        </Link>

                        <Link
                            to="/dashboard/biodata"
                            className="text-white p-3 rounded hover:bg-black"
                        >
                            Biodata
                        </Link>

                    </div>
                </div>

                {/* Logout */}
                <div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 p-3 rounded text-white w-full hover:bg-red-600"
                        type="button"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </div>
        </div>
    );
}