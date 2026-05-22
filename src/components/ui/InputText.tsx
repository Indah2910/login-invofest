interface InputTextProps {
    label: string;
    nama: string;
    register: any;
    error?: string;
}

const InputText: React.FC<InputTextProps> = ({
    label, nama, register, error
}) => {
    return (
         <div className="flex flex-col gap-1">
          <label htmlFor={nama}>{label}</label>
          <input
            type="text"
            {...register(nama)}
            placeholder={label} className="border border-gray-200 padding-2 p-2 rounded-2xl"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

    );
};

export default InputText;