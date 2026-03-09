import { Link } from "@/core/i18n/navigation";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "outline" | "outline_primary";

type ButtonProps = {
  label: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border border-primary hover:bg-primary/90 hover:border-primary/90",
  secondary:
    "bg-white text-primary border border-slate-200 hover:border-primary/60 hover:bg-primary/5",
  outline:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-primary",
  outline_primary:
    "bg-transparent text-primary border border-primary/70 hover:bg-primary hover:text-white hover:border-primary",
};

export default function Button({
  label,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

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
}
