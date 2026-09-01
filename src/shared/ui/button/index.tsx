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
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-cream border border-forest shadow-lg shadow-forest/20 hover:bg-primary-dark hover:border-primary-dark hover:shadow-xl hover:shadow-forest/25",
  secondary:
    "bg-paper text-forest border border-sand hover:border-forest/40 hover:bg-forest/5",
  outline:
    "bg-transparent text-cream border border-cream/60 hover:bg-cream hover:text-forest",
  outline_primary:
    "bg-transparent text-forest border border-forest/40 hover:bg-forest hover:text-cream hover:border-forest",
  accent:
    "bg-clay text-cream border border-clay shadow-lg shadow-clay/25 hover:bg-ink hover:border-ink hover:shadow-clay/10",
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
  const classes = `inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

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
