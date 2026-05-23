import { Link } from "react-router-dom";

export default function Textarea() {
  return (
    <footer className="bg-pink-100 border-t border-pink-200 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/*  Logo */}
        <div>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="Logo"
            className="w-40"
          />
        </div>

        {/*  Menu Navigasi */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-gray-900 mb-2">MENU NAVIGASI</h3>
          <Link to="/" className="text-gray-600 hover:text-red-900">
            Beranda
          </Link>
          <Link to="/seminar" className="text-gray-600 hover:text-red-900">
            Seminar
          </Link>
          <Link to="/competition" className="text-gray-600 hover:text-red-900">
            Competition
          </Link>
          <Link to="/workshop" className="text-gray-600 hover:text-red-900">
            Workshop
          </Link>
          <Link to="/talkshow" className="text-gray-600 hover:text-red-900">
            Talkshow
          </Link>
        </div>

        {/*  Ikuti Kami */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-gray-900 mb-2">IKUTI KAMI</h3>
          <a href="#" className="text-gray-600 hover:text-red-900">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-red-900">
            Youtube
          </a>
        </div>

        {/* Alamat  */}
        <div>
          <h3 className="font-bold text-gray-900 mb-2">ALAMAT</h3>
          <div className="rounded-lg overflow-hidden h-32 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5975306566496!2d109.1245059750059!3d-6.936081493068777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb86b36358c67%3A0x1d4715978434d715!2sPoliteknik%20Harapan%20Bersama!5e0!3m2!1sen!2sid!4v1715418000000"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-pink-200 text-gray-500 text-sm flex justify-between">
        <p>&copy; 2026 INVOFEST. All Rights Reserved.</p>
        <div className="flex gap-4"></div>
      </div>
    </footer>
  );
}