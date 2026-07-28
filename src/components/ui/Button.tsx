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
      "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#F4795A] text-white shadow-md shadow-[#F4795A]/20 hover:bg-[#E5623F]",
      secondary:
        "bg-white text-[#1A1A1A] border border-[#EAE3D3] hover:border-[#6B6B65]/30 shadow-sm",
      ghost:
        "text-[#1A1A1A] bg-transparent hover:bg-black/5",
      dark:
        "bg-[#171717] text-white hover:bg-[#2A2A2A] shadow-md",
    };

    const sizes = {
      sm: "px-4 py-1.5 text-xs",
      md: "px-5 py-2 text-sm",
      lg: "px-7 py-2.5 text-base",
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