"use client";

import { ArrowDown, ArrowRight, Package } from "lucide-react";
import { PRODUCT_PIPELINE } from "@/lib/site-data";

export default function ProductPipeline({
  onExplore,
}: {
  onExplore?: (serviceId: string) => void;
}) {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FF5722]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
            One Product. Multiple Creative Possibilities.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight">
            From One Product To{" "}
            <span className="bg-gradient-to-r from-[#FF5722] to-[#FF8A00] bg-clip-text text-transparent">
              A Full Creative System
            </span>
          </h2>
          <p className="text-base text-gray-300 font-body">
            Give us one product photo. Get a complete advertising ecosystem —
            no multiple vendors, no production chaos.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#FF5722]/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {PRODUCT_PIPELINE.map((step, i) => (
              <div key={step.name} className="relative flex flex-col items-center gap-3">
                <div className="w-full h-full min-h-[120px] rounded-2xl glass-card-dark border border-white/10 p-4 flex flex-col justify-center items-center gap-2 text-center hover:border-[#FF5722]/50 hover:-translate-y-1 transition-all duration-300">
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#E64A19] flex items-center justify-center text-xs font-bold font-heading shadow-lg">
                    {i === 0 ? <Package className="w-4 h-4" /> : i}
                  </span>
                  <span className="text-xs font-bold font-heading uppercase tracking-wider">
                    {step.name}
                  </span>
                  <span className="text-[10px] text-gray-400 leading-snug">
                    {step.desc}
                  </span>
                </div>
                {i < PRODUCT_PIPELINE.length - 1 && (
                  <span className="absolute -bottom-7 lg:bottom-1/2 lg:translate-y-1/2 lg:-right-4 z-10 w-6 h-6 rounded-full bg-[#FF5722] text-white flex items-center justify-center shadow-lg animate-bounce-short">
                    <ArrowRight className="w-3.5 h-3.5 lg:hidden" />
                    <ArrowDown className="w-3.5 h-3.5 rotate-90 lg:block hidden" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => onExplore?.("ai-video")}
            className="inline-flex items-center gap-2 orange-gradient-btn orange-glow-lg text-white font-bold py-4 px-8 rounded-full text-sm hover:scale-[1.03] transition-all cursor-pointer"
          >
            Start With One Product Photo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
