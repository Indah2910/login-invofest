interface Props {
  label: string;
  name: string;
  register: any;
  error?: string;
}

export const Textarea: React.FC<Props> = ({
  label,
  name,
  register,
  error
}) => {
  return (
    <div>
      <label>{label}</label>
      <textarea {...register(name)} className="border p-2 w-full" />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};