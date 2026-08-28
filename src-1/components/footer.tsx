"use client";

import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { FOOTER_SERVICES, NAV_LINKS, SOCIAL_LINKS } from "@/lib/site-data";
import { Icon } from "./icons";

export default function Footer({
  onNavigate,
  onOpenBooking,
}: {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}) {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-12 relative z-[2] overflow-hidden border-t border-white/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-4 flex flex-col gap-5 text-left">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="flex items-center group cursor-pointer w-fit"
            >
              <span className="rounded-xl bg-white p-1.5 shadow-md group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/logo.jpeg"
                  alt="ViralCraft Media"
                  className="h-9 w-auto object-contain"
                />
              </span>
            </button>
            <p className="text-sm text-white/60 font-body leading-relaxed max-w-sm">
              ViralCraft Media is a premier AI creative agency engineered to
              scale D2C brands and enterprise businesses with high-converting
              performance video ads.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span>BKC Cyber Hub, Bandra East, Mumbai, Maharashtra 400051</span>
              </div>
              <a
                href="mailto:viralcraftai32@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#FF5722] transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span>viralcraftai32@gmail.com</span>
              </a>
              <a
                href="tel:+919170326268"
                className="flex items-center gap-2.5 hover:text-[#FF5722] transition-colors w-fit"
              >
                <Phone className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span>+91 91703 26268</span>
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#FF5722] hover:border-[#FF5722] hover:scale-110 transition-all duration-200"
                >
                  <Icon name={s.icon} className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => onNavigate(link.page)}
                  className="text-sm text-white/60 hover:text-[#FF5722] transition-colors text-left cursor-pointer w-fit"
                >
                  {link.page === "about" ? "About Us" : link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              {FOOTER_SERVICES.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => onNavigate("services")}
                  className="text-sm text-white/60 hover:text-[#FF5722] transition-colors text-left cursor-pointer w-fit"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="glass-card-dark rounded-3xl border border-white/10 p-6 flex flex-col gap-4 text-left h-full">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF5722]" />
                <span className="text-xs font-bold text-[#FF5722] uppercase tracking-widest font-heading">
                  Ready To Scale?
                </span>
              </div>
              <p className="text-sm text-white/70 font-body leading-relaxed">
                Book a free 20-minute strategy session and get a custom 30-day
                creative testing plan for your brand.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="orange-gradient-btn orange-glow text-white font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-all cursor-pointer mt-auto"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-body">
            Â© {new Date().getFullYear()} ViralCraft Media. All rights reserved.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a
              href="/admin"
              className="text-xs text-white/40 hover:text-[#FF5722] transition-colors"
            >
              Admin Panel
            </a>
            <button
              type="button"
              onClick={() => onNavigate("about")}
              className="text-xs text-white/40 hover:text-[#FF5722] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onNavigate("about")}
              className="text-xs text-white/40 hover:text-[#FF5722] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
