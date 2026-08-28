'use client';

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", as = "button", href, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#F4795A] text-white shadow-[0_8px_24px_rgba(244,121,90,0.35)] hover:bg-[#E5623F] hover:shadow-[0_12px_32px_rgba(244,121,90,0.45)]",
      secondary:
        "bg-white text-[#1A1A1A] border border-[#EAE3D3] hover:border-[#F4795A]/30 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
      ghost:
        "text-[#1A1A1A] bg-transparent hover:bg-black/5",
      dark:
        "bg-[#1A1A1A] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:bg-[#2A2A2A] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (as === "a" && href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
