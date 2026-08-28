"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, PhoneCall, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Props = {
  currentPage: string;
  onNavigate: (page: string) => void;
  dark?: boolean;
  onOpenBooking: () => void;
};

export default function Header({
  currentPage,
  onNavigate,
  dark = false,
  onOpenBooking,
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (page: string) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || menuOpen ? "py-2.5" : "py-5",
          scrolled
            ? dark
              ? "glass-card-dark border-b border-white/10 shadow-lg"
              : "glass-nav border-b border-[#EAEAEA]/80 shadow-xs"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => handleNavigate("home")}
              className="flex items-center group cursor-pointer text-left shrink-0 py-1"
              aria-label="ViralCraft Media Home"
            >
              {dark ? (
                <span className="rounded-xl bg-white p-1.5 shadow-md group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="/logo.jpeg"
                    alt="ViralCraft Media"
                    className="h-7 sm:h-8 md:h-9 w-auto object-contain"
                  />
                </span>
              ) : (
                <img
                  src="/logo.jpeg"
                  alt="ViralCraft Media"
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-sm"
                />
              )}
            </button>

            <nav
              className={cn(
                "hidden lg:flex items-center gap-0.5 xl:gap-1.5 px-2.5 py-1.5 rounded-full shadow-xs shrink-0",
                dark
                  ? "glass-card-dark border border-white/10"
                  : "glass-card border border-[#EAEAEA]",
              )}
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => handleNavigate(link.page)}
                  className={cn(
                    "relative px-2 xl:px-3 py-1 text-[11px] xl:text-xs 2xl:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap",
                    currentPage === link.page
                      ? dark
                        ? "text-[#FF5722] font-semibold bg-white/10"
                        : "text-[#FF5722] font-semibold bg-white/80 shadow-2xs"
                      : dark
                        ? "text-white/60 hover:text-white hover:bg-white/10"
                        : "text-[#6E6E73] hover:text-[#111111] hover:bg-white/50",
                  )}
                >
                  {link.label}
                  {currentPage === link.page && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF5722]" />
                  )}
                </button>
              ))}
            </nav>

            <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleNavigate("contact")}
                className={cn(
                  "px-3 py-2 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap",
                  dark ? "text-white/70 hover:text-white" : "text-[#111111] hover:text-[#FF5722]",
                )}
              >
                Contact
              </button>
              <button
                type="button"
                onClick={onOpenBooking}
                className="orange-gradient-btn orange-glow hover:orange-glow-lg text-white text-xs sm:text-sm font-semibold px-4 xl:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenBooking}
                className="orange-gradient-btn text-white text-xs font-semibold px-3 py-2 rounded-full sm:hidden flex items-center gap-1"
              >
                <span>Book</span>
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                className={cn(
                  "p-2 rounded-xl transition-colors cursor-pointer",
                  dark ? "text-white hover:bg-white/10" : "text-[#111111] hover:bg-[#EAEAEA]/50",
                )}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div
              className={cn(
                "lg:hidden absolute top-full left-0 right-0 backdrop-blur-2xl z-40 animate-fadeIn shadow-2xl",
                dark ? "bg-[#0F172A]/95" : "bg-[#F8F7F5]/95",
              )}
            >
              <div className="px-4 py-4 flex flex-col gap-1 max-h-[calc(100vh-56px)] overflow-y-auto no-scrollbar">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.page}
                    type="button"
                    onClick={() => handleNavigate(link.page)}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-left",
                      currentPage === link.page
                        ? "text-[#FF5722] bg-white/10"
                        : dark
                          ? "text-white/70 hover:text-white hover:bg-white/10"
                          : "text-[#111111] hover:bg-[#EAEAEA]/60",
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className={cn(
                        "w-4 h-4 shrink-0 transition-all",
                        currentPage === link.page
                          ? "text-[#FF5722] opacity-100"
                          : "opacity-30",
                      )}
                    />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="mt-3 w-full orange-gradient-btn orange-glow text-white text-sm font-semibold px-5 py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  Book Free Strategy Call
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}