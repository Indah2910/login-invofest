interface InputTextProps {
  label: string;
  nama: string;
  register: any;
  error?: string;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  nama,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label htmlFor={nama} className="text-sm font-medium">
        {label}
      </label>

      <input
        type="text"
        {...register(nama)}
        placeholder={label}
        className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-red-400 outline-none"
      />

      {error && (
        <p className="text-red-500 text-xs">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputText;