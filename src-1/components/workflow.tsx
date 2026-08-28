import { ArrowDown } from "lucide-react";
import { WORKFLOW_STEPS, WORKFLOW_TRACKER } from "@/lib/site-data";
import { Icon } from "./icons";

export default function Workflow({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="py-24 bg-[#F8F7F5] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3 max-w-2xl text-left">
            <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
              Our Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#111111] tracking-tight">
              From Brief To Viral In 6 Steps
            </h2>
            <p className="text-base text-[#6E6E73] font-body">
              A battle-tested process that takes your brand from a creative brief
              to a full high-converting ad testing library — on schedule, every
              time.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="orange-gradient-btn orange-glow text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-[1.03] transition-all cursor-pointer self-start md:self-end"
          >
            Start Your Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOW_STEPS.map((step, i) => (
            <div
              key={step.number}
              className="group relative glass-card p-8 rounded-3xl border border-[#EAEAEA] transition-all duration-300 hover:border-[#FF5722]/40 hover:shadow-xl hover:-translate-y-1"
            >
              <span className="absolute top-6 right-6 text-4xl font-bold font-heading text-[#EAEAEA] group-hover:text-[#FF5722]/15 transition-colors">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#FF5722] font-bold text-lg font-heading flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition-colors shadow-md">
                <Icon name={step.icon} className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-heading font-bold text-lg text-[#111111]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[#6E6E73] font-body leading-relaxed">
                {step.description}
              </p>
              <div className="mt-4 pt-4 border-t border-[#EAEAEA] flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
                <span className="text-[#6E6E73] font-medium">{step.deliverable}</span>
              </div>
              {i < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#EAEAEA] shadow-md flex items-center justify-center z-10">
                  <ArrowDown className="w-3.5 h-3.5 text-[#FF5722] -rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center items-center gap-2 text-xs font-semibold text-[#6E6E73]">
          {WORKFLOW_TRACKER.map((label, i) => (
            <span key={label} className="flex items-center gap-2">
              {i > 0 && (
                <ArrowDown className="w-4 h-4 text-[#FF5722] -rotate-90" />
              )}
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] whitespace-nowrap">
                {label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
