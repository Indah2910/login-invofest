import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* HEADER */}
      <header>
        <Header />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto py-6 w-full">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer>
        <p className="text-center text-gray-500 text-sm py-4">
          &copy; 2026 Invofest. All rights reserved.
        </p>
      </footer>

    </div>
  );
}