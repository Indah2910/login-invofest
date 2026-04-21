interface Props {
  label: string;
  name: string;
  register: any;
  options: { label: string; value: string }[];
}

export const Select: React.FC<Props> = ({
  label,
  name,
  register,
  options
}) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register(name)} className="border p-2 w-full">
        <option value="">Pilih</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;