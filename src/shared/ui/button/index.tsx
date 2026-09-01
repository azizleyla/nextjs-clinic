import { Link } from "@/core/i18n/navigation";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "outline" | "outline_primary" | "accent";

type ButtonProps = {
  label: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border border-primary hover:bg-primary-dark hover:border-primary-dark",
  secondary:
    "bg-white text-primary border border-slate-200 hover:border-primary/60 hover:bg-primary/5",
  outline:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-primary",
  outline_primary:
    "bg-transparent text-primary border border-primary/70 hover:bg-primary hover:text-white hover:border-primary",
  accent:
    "bg-accent text-navy border border-accent hover:bg-white hover:text-navy hover:border-white",
};

export default function Button({
  label,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md font-semibold tracking-wide transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={classes}>
      {label}
    </button>
  );
}
