'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks, PHONE, WHATSAPP_URL } from "@/lib/data";
import { Menu, X, Phone, ArrowRight, MessageSquare } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "flex items-center justify-between h-16 sm:h-18 rounded-2xl px-4 sm:px-6 transition-all duration-500",
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/20"
              : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center relative z-10">
            <img src="/logo.jpeg" alt="Viral Craft" className="h-8 sm:h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                  pathname === link.href
                    ? "text-[#F4795A] bg-[#F4795A]/10"
                    : "text-[#6B6B65] hover:text-[#1A1A1A] hover:bg-black/5"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F4795A]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#F4795A] hover:bg-[#E5623F] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(244,121,90,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative z-10 p-2 rounded-xl text-[#1A1A1A] hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 md:hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }} className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/20 overflow-hidden">
              <div className="p-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                    <Link href={link.href} className={cn("flex items-center justify-between px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300", pathname === link.href ? "text-[#F4795A] bg-[#F4795A]/10" : "text-[#1A1A1A] hover:bg-[#F7F3EA]")}>
                      {link.label}
                      <ArrowRight className={cn("w-4 h-4 transition-all duration-300", pathname === link.href ? "opacity-100 text-[#F4795A]" : "opacity-0 -translate-x-2")} />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 pt-2 border-t border-[#EAE3D3] space-y-2">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-2xl text-base font-semibold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all duration-300">
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                  <Link href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-2xl text-base font-semibold text-white bg-[#F4795A] hover:bg-[#E5623F] transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    Schedule a Call
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
