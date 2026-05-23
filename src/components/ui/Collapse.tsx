import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface CollapseProps {
  title: string;
  description: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col mb-4">
      {/* Header Tombol */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white p-5 flex items-center gap-4 text-left transition-all duration-300 border-l-8 border-red-900 border-r border-t border-b border-gray-200 rounded-xl shadow-sm hover:shadow-md"
      >
        <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <span className="text-lg font-bold text-gray-800 flex-grow">{title}</span>
      </button>

      {/* Konten (Gue ganti logic-nya pake conditional rendering biar gak konflik sama styling) */}
      {isOpen && (
        <div className="w-full p-5 bg-white border-l-8 border-red-900 border-r border-b border-gray-200 rounded-b-xl shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;