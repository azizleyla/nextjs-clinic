import { Link } from "@/src/i18n/navigation";

const Button = ({
  label,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-primary text-white border-2 border-white hover:bg-black",
    secondary:
      "bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary",
    outline_primary:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  };

  const classes = `rounded-md font-medium transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button" className={classes}>
      {label}
    </button>
  );
};

export default Button;
