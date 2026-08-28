"use client";

import { useState, type FormEvent } from "react";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import {
  BUDGET_OPTIONS,
  EMAIL_INQUIRY_MAILTO,
  EMAIL_INQUIRY_URL,
  REQUIREMENT_OPTIONS,
  WHATSAPP_URL,
} from "@/lib/site-data";
import { cn, graphic } from "@/lib/utils";
import { track } from "@/lib/track";

const inputClass =
  "px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF5722] w-full transition-colors";

const selectBtnClass =
  "group relative w-full p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 bg-gradient-to-b from-[#0F2A56] via-[#0B1E3F] to-[#061228] text-gray-100 border-2 border-white/20 border-t-white/35 border-b-black/80 shadow-[0_5px_0_#030C1C,0_6px_15px_rgba(0,0,0,0.4)]";

function isMobile() {
  return typeof window !== "undefined" && /iPhone|iPad|Android/i.test(navigator.userAgent);
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    requirement: "AI UGC Videos",
    budget: "$499 Starter Sprint",
    notes: "",
  });
  const [openSelect, setOpenSelect] = useState<"requirement" | "budget" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const setField = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      track("lead", {
        kind: "contact_form",
        name: form.name,
        email: form.email,
        phone: form.phone,
        brand: form.brand,
        service: form.requirement,
        budget: form.budget,
        message: form.notes,
        page: "contact",
      });
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch {}
  };

  const openEmail = () => {
    const url = isMobile() ? EMAIL_INQUIRY_MAILTO : EMAIL_INQUIRY_URL;
    window.open(url, "_blank");
  };

  const selectedReq = REQUIREMENT_OPTIONS.find((r) => r.id === form.requirement);
  const selectedBudget = BUDGET_OPTIONS.find((b) => b.id === form.budget);

  return (
    <section id="contact-form" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Your Viral Campaign Starts With One Message
          </h2>
          <p className="text-base text-gray-300 font-body">
            Fill out the requirement brief below or reach out directly to our
            leadership team. We respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-6">
              <h3 className="font-heading font-bold text-2xl text-white">Direct Channels</h3>
              <p className="text-sm text-gray-300 font-body leading-relaxed">
                Prefer immediate messaging? Connect with our Creative Director on
                WhatsApp or book an instant strategy call.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-white font-semibold text-sm flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    <span>WhatsApp Us (+91 91703 26268)</span>
                  </div>
                  <Sparkles className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919170326268"
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FF5722]" />
                    <span>Direct Call (+91 91703 26268)</span>
                  </div>
                  <span className="text-xs text-gray-400">24/7 Available</span>
                </a>
                <button
                  type="button"
                  onClick={openEmail}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm flex items-center justify-between transition-colors cursor-pointer text-left group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="break-all group-hover:text-blue-300 transition-colors">
                      Email Us (viralcraftai32@gmail.com)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-gray-400 hidden sm:inline">
                      Response &lt; 2h
                    </span>
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </div>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-card-dark border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF5722] uppercase font-heading">
                <MapPin className="w-4 h-4" />
                <span>Headquarters — Mumbai, India</span>
              </div>
              <div className="w-full h-44 rounded-2xl overflow-hidden bg-slate-900 relative flex items-center justify-center border border-white/10 group">
                <img
                  src={graphic("hq")}
                  alt="Mumbai BKC Office"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <p className="font-bold">BKC Cyber Hub, Bandra East</p>
                  <p className="text-gray-300 text-[11px]">Mumbai, Maharashtra 400051</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card-dark border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-16 flex flex-col items-center text-center gap-6 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF5722] to-[#FF8A00] text-white flex items-center justify-center shadow-[0_0_40px_rgba(255,87,34,0.6)]">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-[#FF5722] uppercase tracking-widest font-heading">
                      Brief Received
                    </span>
                    <h3 className="text-3xl font-bold font-heading text-white tracking-tight">
                      Requirement Received!
                    </h3>
                    <p className="text-sm text-gray-200 font-body max-w-md leading-relaxed">
                      Our creative team will review your requirement and reach out
                      to you within 2 hours with a custom 30-day testing plan.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="orange-gradient-btn orange-glow text-white font-bold py-3.5 px-8 rounded-full text-sm cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-xl font-heading"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">
                    Project Requirement Brief
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-300 font-heading">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={form.name}
                        onChange={(e) => setField("name", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-300 font-heading">
                        Business Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@brand.com"
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-300 font-heading">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-300 font-heading">
                        Brand / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. SkinGlow Botanicals"
                        value={form.brand}
                        onChange={(e) => setField("brand", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 relative">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-gray-200 font-heading flex items-center gap-1.5">
                          Primary Requirement
                        </label>
                        <span className="text-[10px] text-[#FF5722] font-mono font-medium bg-[#FF5722]/10 px-2 py-0.5 rounded-full border border-[#FF5722]/30">
                          3D Dropdown
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenSelect(openSelect === "requirement" ? null : "requirement")
                        }
                        className={cn(selectBtnClass, openSelect === "requirement" && "border-[#FF5722]/60")}
                      >
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none" />
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="truncate">{selectedReq?.label}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={cn(
                              "text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 font-heading uppercase",
                              selectedReq?.color,
                            )}
                          >
                            {selectedReq?.badge}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-gray-400 transition-transform",
                              openSelect === "requirement" && "rotate-180",
                            )}
                          />
                        </div>
                      </button>
                      {openSelect === "requirement" && (
                        <div className="absolute top-full left-0 right-0 z-30 mt-2 rounded-2xl bg-[#0A1D3F] border border-white/15 shadow-2xl overflow-hidden animate-fadeIn">
                          {REQUIREMENT_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setField("requirement", opt.id);
                                setOpenSelect(null);
                              }}
                              className={cn(
                                "w-full px-4 py-3 text-left transition-colors cursor-pointer flex items-center justify-between gap-3",
                                form.requirement === opt.id
                                  ? "bg-[#FF5722]/15"
                                  : "hover:bg-white/5",
                              )}
                            >
                              <div className="flex flex-col min-w-0">
                                <span className="text-sm font-semibold text-white">
                                  {opt.label}
                                </span>
                                <span className="text-[11px] text-gray-400 truncate">
                                  {opt.desc}
                                </span>
                              </div>
                              <span
                                className={cn(
                                  "text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 font-heading uppercase shrink-0",
                                  opt.color,
                                )}
                              >
                                {opt.badge}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5 relative">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-gray-200 font-heading flex items-center gap-1.5">
                          Estimated Monthly Budget
                        </label>
                        <span className="text-[10px] text-[#FF5722] font-mono font-medium bg-[#FF5722]/10 px-2 py-0.5 rounded-full border border-[#FF5722]/30">
                          Scalable Plans
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenSelect(openSelect === "budget" ? null : "budget")
                        }
                        className={cn(selectBtnClass, openSelect === "budget" && "border-[#FF5722]/60")}
                      >
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none" />
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="truncate">{selectedBudget?.label}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF5722] text-white font-heading uppercase">
                            {selectedBudget?.badge}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-gray-400 transition-transform",
                              openSelect === "budget" && "rotate-180",
                            )}
                          />
                        </div>
                      </button>
                      {openSelect === "budget" && (
                        <div className="absolute top-full left-0 right-0 z-30 mt-2 rounded-2xl bg-[#0A1D3F] border border-white/15 shadow-2xl overflow-hidden animate-fadeIn">
                          {BUDGET_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setField("budget", opt.id);
                                setOpenSelect(null);
                              }}
                              className={cn(
                                "w-full px-4 py-3 text-left transition-colors cursor-pointer flex items-center justify-between gap-3",
                                form.budget === opt.id
                                  ? "bg-[#FF5722]/15"
                                  : "hover:bg-white/5",
                              )}
                            >
                              <div className="flex flex-col min-w-0">
                                <span className="text-sm font-semibold text-white">
                                  {opt.label}
                                </span>
                                <span className="text-[11px] text-gray-400 truncate">
                                  {opt.desc}
                                </span>
                              </div>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-heading uppercase shrink-0">
                                {opt.badge}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-300 font-heading">
                      Campaign Goals &amp; Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your brand, target audience, current ad performance, and campaign goals..."
                      value={form.notes}
                      onChange={(e) => setField("notes", e.target.value)}
                      className={cn(inputClass, "resize-none")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="orange-gradient-btn orange-glow text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer shadow-xl mt-2 font-heading"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Brief</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
