interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  nama: string;
  register: any;
  options: Option[];
  error?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  nama,
  register,
  options,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <select
        {...register(nama)}
        className={`p-2 rounded-xl outline-none transition-all
          ${
            error
              ? "border border-red-500 bg-red-50 focus:ring-2 focus:ring-red-400"
              : "border border-gray-300 focus:ring-2 focus:ring-blue-400"
          }
        `}
      >
        <option value="">-- Pilih --</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default SelectInput;