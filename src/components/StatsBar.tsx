'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatsBarProps {
  stats: { value: string; label: string }[];
  className?: string;
}

export default function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] rounded-2xl overflow-hidden",
        className
      )}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-[#242F40] text-center py-8 px-4"
        >
          <div className="text-2xl md:text-3xl font-bold font-display text-[#FFA586]">
            {stat.value}
          </div>
          <div className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
