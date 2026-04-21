interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  type = "button",
}) => {
  const baseStyle =
    "px-10 py-3 rounded font-medium transition-all duration-200";
  const variantStyle =
    variant === "primary"
      ? "bg-red-900 text-white hover:bg-red-800"
      : "border border-red-900 text-red-900 hover:bg-red-100";
  return (
    <button type={type} className={`${baseStyle} ${variantStyle} ${className}`}>
      {label}
    </button>
  );
};

export default Button;
