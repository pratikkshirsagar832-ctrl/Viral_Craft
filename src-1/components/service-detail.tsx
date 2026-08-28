"use client";

import { ArrowRight, ArrowDown, Check, Flame, Sparkles } from "lucide-react";
import { SHORT_FORM_SYSTEM, type ServiceCategory } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Icon } from "./icons";

export default function ServiceDetail({
  service,
  onOpenBooking,
}: {
  service: ServiceCategory;
  onOpenBooking: (service?: string) => void;
}) {
  return (
    <section id="service-detail" className="py-20 bg-[#F8F7F5] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl glass-card-dark p-8 sm:p-10 text-white overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5722]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="w-14 h-14 rounded-2xl bg-[#FF5722] flex items-center justify-center">
                    <Icon name={service.icon} className="w-7 h-7" />
                  </span>
                  <span className="text-5xl font-bold font-heading text-white/10">
                    {service.number}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold font-heading tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-[#FF5722] font-semibold italic text-base">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-gray-300 font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.title)}
                  className="orange-gradient-btn orange-glow text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Start This Service
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-bold font-heading text-[#111111] mb-6 flex items-center gap-2">
                What We Create
                <span className="text-sm font-bold text-[#FF5722] bg-[#FF5722]/10 px-3 py-1 rounded-full uppercase tracking-wider font-heading">
                  {service.capabilities.length} capabilities
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap) => (
                  <div
                    key={cap.name}
                    className="group p-5 rounded-2xl glass-card border border-[#EAEAEA] hover:border-[#FF5722]/40 transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#FF5722]/10 text-[#FF5722] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                      <div className="flex flex-col gap-1 text-left">
                        <span className="font-heading font-bold text-sm text-[#111111]">
                          {cap.name}
                        </span>
                        <span className="text-xs text-[#6E6E73] font-body leading-relaxed">
                          {cap.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {service.id === "short-form" && (
              <div className="rounded-3xl bg-[#0F172A] text-white p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-56 h-56 bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <span className="text-xs font-bold text-[#FF5722] uppercase tracking-widest font-heading flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    Our Short-Form System
                  </span>
                  <h3 className="mt-2 text-xl font-bold font-heading">
                    One Framework. Five Winning Moves.
                  </h3>
                  <p className="mt-1 text-sm text-gray-300 font-body">
                    Every video we ship is engineered to stop the scroll, hold attention and drive action. No random content, just a repeatable system built for results.
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-3">
                    {SHORT_FORM_SYSTEM.map((step, i) => (
                      <div key={step.name} className="relative flex flex-col gap-2">
                        <div
                          className={cn(
                            "rounded-xl p-3 text-center border transition-all",
                            i === 0
                              ? "bg-[#FF5722]/15 border-[#FF5722]/40"
                              : "bg-white/5 border-white/10",
                          )}
                        >
                          <span className="block text-[10px] font-bold text-white/40 font-heading">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="block text-xs font-bold font-heading uppercase tracking-wider mt-1">
                            {step.name}
                          </span>
                          <span className="block text-[10px] text-gray-400 leading-snug mt-1">
                            {step.desc}
                          </span>
                        </div>
                        {i < SHORT_FORM_SYSTEM.length - 1 && (
                          <ArrowDown className="w-4 h-4 mx-auto text-[#FF5722] rotate-90 hidden sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
