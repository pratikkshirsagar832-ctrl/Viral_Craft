'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      className={cn(
        "bg-white rounded-3xl border border-[#EAE3D3] p-7 transition-all duration-500 relative overflow-hidden",
        hover && "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
