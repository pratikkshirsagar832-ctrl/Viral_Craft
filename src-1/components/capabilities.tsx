"use client";

import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { CAPABILITIES, SPOTLIGHT } from "@/lib/site-data";
import { Icon } from "./icons";

export default function Capabilities({
  onNavigate,
  onOpenBooking,
}: {
  onNavigate: (page: string) => void;
  onOpenBooking: (service?: string) => void;
}) {
  return (
    <section className="py-24 bg-[#F8F7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3 max-w-2xl text-left">
            <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#111111] tracking-tight">
              10 Creative Engines. Zero Limits.
            </h2>
            <p className="text-base text-[#6E6E73] font-body">
              Engineered to defeat ad fatigue, lower cost per acquisition, and
              elevate your brand aesthetic across every digital touchpoint.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("services")}
            className="flex items-center gap-2 text-[#FF5722] font-semibold text-sm hover:gap-3 transition-all cursor-pointer w-fit"
          >
            <span>Explore All 10 Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="group p-6 rounded-2xl glass-card transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 border border-[#EAEAEA] hover:border-[#FF5722]/40 hover:bg-white/90"
                  onClick={() => onOpenBooking(cap.title)}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors bg-[#0F172A] text-white group-hover:bg-[#FF5722]">
                      <Icon name={cap.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FF5722]/10 text-[#FF5722] uppercase font-heading">
                      {cap.badge}
                    </span>
                  </div>
                  <div className="flex flex-col text-left gap-1">
                    <h3 className="font-heading font-bold text-lg text-[#111111]">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#6E6E73] font-body line-clamp-2 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-28 glass-card-dark p-8 rounded-3xl text-white flex flex-col gap-6 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5722]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5722] font-heading">
                  Highest ROI Spotlight
                </span>
                <span className="text-xs text-gray-400">
                  Popular for:{" "}
                  <strong className="text-white">
                    {SPOTLIGHT.popularFor.replace("Popular for: ", "")}
                  </strong>
                </span>
              </div>
              <div className="flex flex-col text-left gap-3">
                <h3 className="text-2xl font-bold font-heading text-white">
                  {SPOTLIGHT.title}
                </h3>
                <p className="text-sm text-gray-300 font-body leading-relaxed">
                  {SPOTLIGHT.description}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF5722] flex items-center justify-center text-white shrink-0 font-bold">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left text-xs">
                  <span className="font-bold text-white">
                    Proven Performance Metric
                  </span>
                  <span className="text-[#FF5722] font-semibold">
                    {SPOTLIGHT.metric}
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left gap-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60 font-heading">
                  Key Deliverables
                </span>
                {SPOTLIGHT.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking("AI UGC Videos")}
                className="orange-gradient-btn orange-glow text-white font-bold py-4 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer mt-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{SPOTLIGHT.cta}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
