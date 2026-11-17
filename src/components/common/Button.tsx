import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
};

const styles = {
  primary:
    "bg-charcoal text-ivory hover:bg-deep",
  secondary:
    "border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal/50",
  ghost: "text-charcoal hover:text-taupe",
};

export function Button({
  children,
  href,
  to,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
