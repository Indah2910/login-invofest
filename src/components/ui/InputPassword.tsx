import { useState } from "react";

interface InputPasswordProps {
  label: string;
  nama: string;
  register: any;
  error?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  nama,
  register,
  error,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(nama)}
          placeholder={label}
          className={`p-2 rounded-xl w-full pr-12 outline-none transition-all
            ${
              error
                ? "border border-red-500 bg-red-50 focus:ring-2 focus:ring-red-400"
                : "border border-gray-300 focus:ring-2 focus:ring-red-200"
            }
          `}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-2 text-xs text-gray-500"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}{" "}
    </div>
  );
};

export default InputPassword;