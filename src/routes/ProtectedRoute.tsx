import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

interface AuthState {
    isAuthenticated: boolean
}

export default function ProtectedRoute() {
    const isAuthenticated = useAuthStore((state: AuthState) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }

    return <Outlet />

}