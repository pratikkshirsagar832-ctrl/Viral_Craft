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
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-white rounded-2xl border border-[#EAE3D3] p-6 transition-all duration-200",
        hover && "hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}