"use client";

import { useState } from "react";
import { Check, Flame } from "lucide-react";
import { PLANS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Pricing({ onOpenBooking }: { onOpenBooking: (service?: string) => void }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF5722]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Simple Plans. Serious Creative Output.
          </h2>
          <p className="text-base text-gray-300 font-body">
            No long-term contracts. Pause or cancel anytime. Flexible plans
            designed for fast ad testing and rapid scaling.
          </p>
          <div className="flex items-center gap-3 pt-6">
            <span
              className={cn(
                "text-xs sm:text-sm font-semibold",
                !yearly ? "text-white" : "text-gray-400",
              )}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setYearly((v) => !v)}
              aria-label="Toggle yearly billing"
              className="w-16 h-9 rounded-full bg-white/10 p-1 relative border border-white/20 transition-colors cursor-pointer"
            >
              <div
                className={cn(
                  "w-7 h-7 rounded-full bg-[#FF5722] transition-transform duration-300 shadow-md",
                  yearly ? "translate-x-7" : "translate-x-0",
                )}
              />
            </button>
            <span className="text-xs sm:text-sm font-semibold flex items-center gap-1.5 text-gray-400">
              <span>Yearly</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF5722] text-white uppercase font-heading">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-3xl p-8 flex flex-col justify-between gap-8 transition-all duration-300 relative",
                plan.popular
                  ? "premium-ring glass-card-dark border-2 border-[#FF5722] hover:border-[#FF5722] shadow-[0_0_60px_rgba(255,87,34,0.3)] scale-[1.02]"
                  : "glass-card-dark border border-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.5)]",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 orange-gradient-btn orange-glow text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest font-heading flex items-center gap-1 whitespace-nowrap">
                  <Flame className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-xl text-white">
                    {plan.name}
                  </h3>
                  <span
                    className={cn(
                      "text-[10px] font-bold px-2.5 py-1 rounded-full font-heading uppercase tracking-wider",
                      plan.popular
                        ? "bg-[#FF5722] text-white"
                        : "bg-white/10 text-gray-300",
                    )}
                  >
                    {plan.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-body leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex items-end gap-1 pt-2">
                  <span className="text-4xl font-bold font-heading tracking-tight">
                    <span
                      className={
                        plan.popular
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF7043] to-[#E64A19]"
                          : "text-white"
                      }
                    >
                      ${yearly ? plan.priceYearly : plan.priceMonthly}
                    </span>
                  </span>
                  <span className="text-sm text-gray-400 pb-1">/ month</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-white/50 font-heading">
                  What&apos;s Included:
                </span>
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-gray-200">
                    <span className="w-5 h-5 rounded-full bg-[#FF5722]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#FF5722] stroke-[3]" />
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Turnaround:</span>
                  <span className="font-bold text-[#FF5722]">
                    {plan.turnaroundStrong}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking(plan.name)}
                  className={cn(
                    "text-white font-bold py-4 rounded-2xl text-sm transition-all cursor-pointer font-heading",
                    plan.popular
                      ? "orange-gradient-btn orange-glow hover:scale-[1.02]"
                      : "bg-white/10 hover:bg-white/20 border border-white/20",
                  )}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
