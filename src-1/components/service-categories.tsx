"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Icon } from "./icons";

export default function ServiceCategories({
  onExplore,
  selected,
  onSelect,
}: {
  onExplore: (serviceId: string) => void;
  selected?: string;
  onSelect?: (serviceId: string) => void;
}) {
  return (
    <section className="py-24 bg-[#F8F7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#111111] tracking-tight">
            Creative built for the{" "}
            <span className="bg-gradient-to-r from-[#FF5722] to-[#E64A19] bg-clip-text text-transparent">
              attention economy
            </span>
          </h2>
          <p className="text-base text-[#6E6E73] font-body">
            Eight specialized creative engines. One full production system — so
            you never need multiple vendors again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((s) => {
            const isSelected = selected === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() =>
                  onSelect ? onSelect(s.id) : onExplore(s.id)
                }
                className={cn(
                  "group relative p-8 rounded-3xl glass-card border border-[#EAEAEA] text-left transition-all duration-300 hover:border-[#FF5722]/50 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer overflow-hidden",
                  isSelected && "border-[#FF5722]/60 shadow-xl ring-2 ring-[#FF5722]/30",
                )}
              >
                <div
                  className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${s.gradient} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />
                <div className="relative flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center group-hover:bg-[#FF5722] transition-colors">
                    <Icon name={s.icon} className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-bold font-heading text-[#111111]/10 group-hover:text-[#FF5722]/20 transition-colors">
                    {s.number}
                  </span>
                </div>
                <div className="relative mt-6 flex flex-col gap-2 text-left">
                  <h3 className="font-heading font-bold text-xl text-[#111111]">
                    {s.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF5722] italic">
                    {s.tagline}
                  </p>
                  <p className="text-sm text-[#6E6E73] font-body leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div className="relative mt-5 pt-4 border-t border-[#EAEAEA] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111111]">
                    {s.capabilities.length}+ Capabilities
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5722] group-hover:gap-2.5 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onExplore("ai-video")}
            className="inline-flex items-center gap-2 orange-gradient-btn orange-glow text-white font-bold py-4 px-8 rounded-full text-sm hover:scale-[1.03] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            See Everything We Create
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
