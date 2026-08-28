"use client";

import { useState } from "react";
import { ArrowRight, Eye, Play, Sparkles, TrendingUp } from "lucide-react";
import { CASE_STUDIES, PORTFOLIO_TABS } from "@/lib/site-data";
import { cn, graphic } from "@/lib/utils";

export default function Portfolio({
  onNavigate,
  onOpenVideo,
}: {
  onNavigate: (page: string) => void;
  onOpenVideo: (url: string, title: string) => void;
}) {
  const [tab, setTab] = useState("All");
  const cases =
    tab === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.category === tab);

  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#FF5722]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-3 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF5722] text-xs font-semibold w-fit border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>High Performance Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Real Campaigns. Real Results.
            </h2>
            <p className="text-gray-300 text-base font-body">
              Campaign creative that generated millions of views and millions in
              revenue across Meta, TikTok, and YouTube.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("portfolio")}
            className="orange-gradient-btn orange-glow text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-[1.03] transition-all cursor-pointer self-start md:self-end"
          >
            <span>View Full Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {PORTFOLIO_TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer",
                tab === t
                  ? "orange-gradient-btn orange-glow text-white shadow-lg scale-105"
                  : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div
              key={c.id}
              className="premium-ring group relative rounded-3xl overflow-hidden glass-card-dark border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5722]/60 shadow-xl cursor-pointer flex flex-col justify-between aspect-[9/14]"
              onClick={() => onOpenVideo(c.videoUrl, c.title)}
            >
              <div className="absolute inset-0 w-full h-full bg-black">
                <img
                  src={graphic(c.posterId)}
                  alt={c.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
              </div>
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FF5722] border border-white/20 uppercase tracking-widest font-heading">
                  {c.category}
                </span>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400 text-xs font-bold border border-white/20">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{c.roas} ROAS</span>
                </div>
              </div>
              <div className="relative z-10 my-auto flex justify-center">
                <div className="w-14 h-14 rounded-full bg-[#FF5722] text-white flex items-center justify-center shadow-2xl transition-all duration-300 scale-90 opacity-80 group-hover:scale-100 group-hover:opacity-100">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
              </div>
              <div className="relative z-10 p-5 flex flex-col text-left gap-2 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-8">
                <span className="text-xs text-gray-400 font-medium">{c.brand}</span>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-[#FF5722] transition-colors line-clamp-1">
                  {c.title}
                </h3>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-[11px]">
                  <div className="flex items-center gap-1 text-gray-300">
                    <Eye className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>{c.views} Views</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold justify-end">
                    <span>CTR {c.ctrIncrease}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
