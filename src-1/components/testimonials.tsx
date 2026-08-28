"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { cn, graphic } from "@/lib/utils";

export default function Testimonials() {
  const [featured, setFeatured] = useState(0);
  const t = TESTIMONIALS[featured];

  const prev = () =>
    setFeatured((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setFeatured((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-[#F8F7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3 text-left max-w-2xl">
            <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
              Client Wall of Love
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#111111] tracking-tight">
              Founders &amp; Growth Leaders Trust Us
            </h2>
            <p className="text-base text-[#6E6E73] font-body">
              Read how our AI and UGC video ads transformed ad performance for
              D2C brands and marketing agencies.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full glass-card border border-[#EAEAEA] hover:border-[#FF5722] hover:bg-white flex items-center justify-center text-[#111111] transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full glass-card border border-[#EAEAEA] hover:border-[#FF5722] hover:bg-white flex items-center justify-center text-[#111111] transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          key={t.id}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-[#EAEAEA] shadow-xl relative overflow-hidden bg-white/90 mb-12 animate-fadeIn"
        >
          <div className="absolute top-6 right-8 text-[#FF5722]/10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left gap-4 border-b lg:border-b-0 lg:border-r border-[#EAEAEA] pb-6 lg:pb-0 lg:pr-8">
              <div className="relative">
                <img
                  src={graphic(t.avatarId)}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#FF5722] text-white flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-xl text-[#111111]">
                  {t.name}
                </h3>
                <span className="text-xs text-[#6E6E73] font-medium font-body">
                  Founder &amp; CMO, <strong className="text-[#111111]">{t.company}</strong>
                </span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#0F172A] text-white text-xs font-bold font-heading flex items-center gap-2">
                <span className="text-[#FF5722]">Verified Result:</span>
                <span>{t.result}</span>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col text-left gap-6">
              <div className="flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm font-bold text-[#111111] ml-2">
                  {t.rating} / 5.0
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-body text-[#111111] leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#EAEAEA]">
                <span className="text-xs text-[#6E6E73] font-semibold">
                  Category: {t.company}
                </span>
                <span className="text-xs font-mono text-[#6E6E73] font-bold">
                  Testimonial {featured + 1} of {TESTIMONIALS.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFeatured(i)}
              className={cn(
                "glass-card p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left flex flex-col items-start gap-2",
                featured === i
                  ? "border-[#FF5722]/60 shadow-lg bg-white"
                  : "border-[#EAEAEA] hover:border-[#FF5722]/30 hover:bg-white",
              )}
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={graphic(item.avatarId)}
                  alt={item.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#111111]">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#6E6E73]">{item.company}</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#FF5722] font-heading uppercase tracking-wider">
                {item.result}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
