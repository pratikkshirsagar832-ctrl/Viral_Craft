"use client";

import { ArrowRight, PhoneCall, Play, Sparkles } from "lucide-react";

export default function CTA({
  onOpenBooking,
  onNavigate,
}: {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}) {
  return (
    <section className="py-20 bg-[#F8F7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] bg-gradient-to-r from-[#FF5722] via-[#E64A19] to-[#0F172A] p-10 sm:p-16 text-white overflow-hidden shadow-2xl">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider font-heading border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Your Next Viral Winner</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white tracking-tight leading-tight">
              Ready to Turn Views Into Revenue?
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-body leading-relaxed max-w-2xl">
              Book a complimentary 20-minute strategy session. We&apos;ll analyze
              your current ad creative performance and share a custom 30-day
              testing plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-white text-[#111111] hover:bg-gray-100 font-bold text-base py-4 px-8 rounded-full flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer shadow-2xl font-heading"
              >
                <PhoneCall className="w-4 h-4 text-[#FF5722]" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#FF5722]" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate("portfolio")}
                className="w-full sm:w-auto glass-card-dark text-white hover:bg-white/20 font-semibold text-base py-4 px-8 rounded-full flex items-center justify-center gap-2 border border-white/30 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 text-white fill-white" />
                <span>Watch Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
