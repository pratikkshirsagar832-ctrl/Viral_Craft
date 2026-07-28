'use client';

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-[#FFA586] bg-[#FFA586]/10 border border-[#FFA586]/20 rounded-full mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm md:text-base text-zinc-500 leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
