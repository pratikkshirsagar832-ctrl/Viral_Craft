"use client";

import { useEffect, useState, type FormEvent } from "react";
import confetti from "canvas-confetti";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Box,
  Building2,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  Mail,
  Sparkles,
  User,
  WandSparkles,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  BOOKING_SERVICES,
  BOOKING_TIME_SLOTS,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { track } from "@/lib/track";

type FormState = {
  fullName: string;
  email: string;
  companyName: string;
  preferredDate: string;
  preferredTime: string;
  serviceInterest: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  companyName: "",
  preferredDate: "",
  preferredTime: "",
  serviceInterest: "",
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
};

const serviceIcons: Record<string, LucideIcon> = {
  "AI UGC Videos": Sparkles,
  "Real Human UGC": User,
  "AI Models & Photorealism": Sparkles,
  "3D Product Motion Ads": Box,
  "Viral Video Editing": WandSparkles,
  "Full Performance Suite": Zap,
};

export default function BookingModal({ isOpen, onClose, initialService }: Props) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    ...emptyForm,
    serviceInterest: initialService ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const errs: typeof errors = {};
    if (!form.fullName.trim()) errs.fullName = "Please enter your full name";
    if (!form.email.trim()) errs.email = "Please enter your work email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Please enter a valid email address";
    if (!form.companyName.trim())
      errs.companyName = "Please enter your brand or company name";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: typeof errors = {};
    if (!form.preferredDate) errs.preferredDate = "Please select a preferred date";
    if (!form.preferredTime) errs.preferredTime = "Please select a time slot";
    if (!form.serviceInterest)
      errs.serviceInterest = "Please select a primary service interest";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleStep1Submit = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep1()) setStep(2);
  };

  const handleStep2Submit = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setDone(true);
      try {
        track("lead", {
          kind: "booking_call",
          name: form.fullName,
          email: form.email,
          brand: form.companyName,
          service: form.serviceInterest,
          message: `Preferred date: ${form.preferredDate}, Time: ${form.preferredTime}`,
          page: "booking",
        });
        confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
      } catch {}
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full px-4 py-3.5 rounded-xl bg-[#092248] text-base sm:text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5722] transition-all select-text font-medium",
      hasError
        ? "border-2 border-red-500 bg-red-500/10"
        : "border-2 border-white/20 focus:border-[#FF5722]",
    );

  const setField = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-black/85 backdrop-blur-2xl cursor-pointer"
      />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card-dark border-2 border-white/30 p-6 sm:p-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.9)] bg-[#0F172A] cursor-default select-text">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5722]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking modal"
          title="Close Modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-white/15 hover:bg-[#FF5722] text-white active:scale-90 transition-all cursor-pointer z-50 flex items-center justify-center border border-white/40 shadow-2xl hover:rotate-90 group"
        >
          <X className="w-6 h-6 stroke-[2.5] group-hover:scale-110 transition-transform" />
        </button>

        {done ? (
          <div className="py-10 flex flex-col items-center text-center gap-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF5722] to-[#FF8A00] text-white flex items-center justify-center shadow-[0_0_40px_rgba(255,87,34,0.6)]">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#FF5722] uppercase tracking-widest font-heading">
                Appointment Reserved
              </span>
              <h3 className="text-3xl font-bold font-heading text-white tracking-tight">
                Strategy Call Confirmed!
              </h3>
              <p className="text-sm text-gray-200 font-body max-w-md leading-relaxed">
                We&apos;ve reserved your 20-minute video strategy call for{" "}
                <strong className="text-white bg-white/10 px-2 py-0.5 rounded border border-white/20">
                  {form.preferredDate || "Upcoming Date"} at {form.preferredTime}
                </strong>
                . Confirmation details emailed to{" "}
                <strong className="text-[#FF5722]">{form.email}</strong>.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-xs text-gray-200 flex items-center gap-3 max-w-md text-left">
              <CalendarCheck className="w-6 h-6 text-[#FF5722] shrink-0" />
              <span>
                Our Creative Director will review your brand{" "}
                <strong className="text-white">{form.companyName}</strong> and
                prepare 3 custom ad hook concepts before our meeting!
              </span>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="orange-gradient-btn orange-glow text-white font-bold py-3.5 px-8 rounded-full text-sm cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-xl font-heading"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3.5 pr-12">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FF5722] to-[#FF8A00] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Sparkles className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider font-heading flex items-center gap-1.5">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Free 1-on-1 Consultation</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                  Book Strategy Call
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 flex-1">
                <div
                  className={cn(
                    "h-2 flex-1 rounded-full transition-all duration-300",
                    step >= 1
                      ? "bg-gradient-to-r from-[#FF5722] to-[#FF8A00] shadow-[0_0_10px_rgba(255,87,34,0.5)]"
                      : "bg-white/10",
                  )}
                />
                <div
                  className={cn(
                    "h-2 flex-1 rounded-full transition-all duration-300",
                    step >= 2
                      ? "bg-gradient-to-r from-[#FF5722] to-[#FF8A00] shadow-[0_0_10px_rgba(255,87,34,0.5)]"
                      : "bg-white/10",
                  )}
                />
              </div>
              <span className="text-xs font-mono font-bold text-gray-300">
                Step {step} of 2
              </span>
            </div>

            <form
              onSubmit={step === 1 ? handleStep1Submit : handleStep2Submit}
              className="flex flex-col gap-5"
            >
              {step === 1 ? (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-100 font-heading flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#FF5722]" />
                          <span>
                            Your Full Name <span className="text-red-400 ml-0.5">*</span>
                          </span>
                        </span>
                        {form.fullName.trim() && !errors.fullName && (
                          <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 stroke-[3]" /> Valid
                          </span>
                        )}
                      </label>
                      <input
                        type="text"
                        required
                        autoFocus
                        value={form.fullName}
                        onChange={(e) => setField("fullName", e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className={inputClass(!!errors.fullName)}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-red-400 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-100 font-heading flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#FF5722]" />
                          <span>
                            Work Email <span className="text-red-400 ml-0.5">*</span>
                          </span>
                        </span>
                        {form.email.trim() && !errors.email && (
                          <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 stroke-[3]" /> Ready
                          </span>
                        )}
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        placeholder="e.g. rahul@brand.com"
                        className={inputClass(!!errors.email)}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-100 font-heading flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#FF5722]" />
                          <span>
                            Brand / Company Name{" "}
                            <span className="text-red-400 ml-0.5">*</span>
                          </span>
                        </span>
                        {form.companyName.trim() && !errors.companyName && (
                          <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 stroke-[3]" /> Valid
                          </span>
                        )}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.companyName}
                        onChange={(e) => setField("companyName", e.target.value)}
                        placeholder="e.g. SkinGlow Botanicals"
                        className={inputClass(!!errors.companyName)}
                      />
                      {errors.companyName && (
                        <span className="text-[11px] text-red-400 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.companyName}
                        </span>
                      )}
                    </div>
                    <div className="flex items-end pb-1">
                      <p className="text-xs text-gray-400 leading-relaxed">
                        No credit card required. 100% free 20-minute strategy
                        consultation with our Creative Director.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="orange-gradient-btn orange-glow text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-xl font-heading"
                    >
                      <span>Next: Select Date &amp; Time</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-200 font-heading flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-[#FF5722]" />
                          <span>
                            Preferred Date <span className="text-red-400 ml-0.5">*</span>
                          </span>
                        </span>
                        {form.preferredDate && !errors.preferredDate && (
                          <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 stroke-[3]" /> Set
                          </span>
                        )}
                      </label>
                      <input
                        type="date"
                        required
                        value={form.preferredDate}
                        onChange={(e) => setField("preferredDate", e.target.value)}
                        className={cn(
                          "px-4 py-3 rounded-xl bg-[#092248] text-sm text-white focus:outline-none font-medium",
                          errors.preferredDate
                            ? "border-2 border-red-500 bg-red-500/10"
                            : "border-2 border-white/20 focus:border-[#FF5722]",
                        )}
                      />
                      {errors.preferredDate && (
                        <span className="text-[11px] text-red-400 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-200 font-heading flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
                          <span>
                            Time Slot (IST) <span className="text-red-400 ml-0.5">*</span>
                          </span>
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {BOOKING_TIME_SLOTS.map((slot) => {
                          const active = form.preferredTime === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setField("preferredTime", slot)}
                              className={cn(
                                "py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between",
                                active
                                  ? "bg-gradient-to-r from-[#FF7043] to-[#D8450E] text-white border-2 border-white/60 shadow-[0_4px_15px_rgba(255,87,34,0.5)] translate-y-[-1px]"
                                  : "bg-[#092248] text-gray-200 border border-white/15 hover:border-white/30 hover:text-white",
                              )}
                            >
                              <span>{slot}</span>
                              {active && (
                                <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      {errors.preferredTime && (
                        <span className="text-[11px] text-red-400 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.preferredTime}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-200 font-heading flex items-center justify-between">
                      <span>
                        Primary Service Interest{" "}
                        <span className="text-red-400 ml-0.5">*</span>
                      </span>
                      <span className="text-[10px] text-[#FF5722] font-mono font-bold">
                        Select One Option
                      </span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {BOOKING_SERVICES.map((svc) => {
                        const active = form.serviceInterest === svc.id;
                        const SvcIcon = serviceIcons[svc.id] ?? Sparkles;
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => setField("serviceInterest", svc.id)}
                            className={cn(
                              "p-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer flex flex-col justify-between gap-2",
                              active
                                ? "bg-gradient-to-r from-[#FF7043] to-[#D8450E] text-white border-2 border-white/60 shadow-[0_4px_15px_rgba(255,87,34,0.5)] translate-y-[-1px]"
                                : "bg-[#092248] text-gray-200 border border-white/15 hover:border-white/30 hover:text-white",
                            )}
                          >
                            <div className="flex items-center justify-between w-full">
                              <SvcIcon
                                className={cn("w-4 h-4", active ? "text-white" : "text-[#FF5722]")}
                              />
                              {active && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className="line-clamp-1">{svc.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.serviceInterest && (
                      <span className="text-[11px] text-red-400 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.serviceInterest}
                      </span>
                    )}
                  </div>

                  {(errors.preferredDate || errors.preferredTime || errors.serviceInterest) && (
                    <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/50 text-red-100 text-xs flex items-center gap-2 animate-fadeIn">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>
                        Please complete all required fields (*) in this step.
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="orange-gradient-btn orange-glow text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-xl font-heading"
                    >
                      <span>Confirm Consultation Call</span>
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}