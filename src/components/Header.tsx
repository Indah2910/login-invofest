import {
  Home,
  HelpCircle,
  Aperture,
  AppWindow,
  CircleUser,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const menuItems = [
    {
      label: "Beranda",
      href: "/",
      icon: <Home size={18} />,
    },
    {
      label: "Competition",
      href: "/competition",
      icon: <Aperture size={18} />,
    },
    {
      label: "Seminar",
      href: "/seminar",
      icon: <AppWindow size={18} />,
    },
    {
      label: "Talkshow",
      href: "/talkshow",
      icon: <HelpCircle size={18} />,
    },
    {
      label: "",
      href: "/login",
      icon: <CircleUser size={18} />,
    },
  ];

  const activeStyle = "text-red-900";
  const defaultStyle = "text-slate-600 hover:text-red-900";

  return (
    <header className="bg-white shadow-sm px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        {/* LOGO */}
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
          />
        </div>

        {/* NAVIGATION */}
        <div className="nav flex gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                  isActive ? activeStyle : defaultStyle
                }`
              }
            >
              {item.icon && (
                <span className="w-5 h-5 flex items-center justify-center">
                  {item.icon}
                </span>
              )}

              {item.label && <span>{item.label}</span>}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;