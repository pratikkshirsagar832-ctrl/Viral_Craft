import Link from "next/link";
import { Mail, Link2, AtSign, ArrowRight, Phone, MapPin, Send } from "lucide-react";

const PHONE = "+919170326268";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F4795A]/30 to-transparent" />
      
      <div className="bg-[#1A1A1A] relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#F4795A]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C8EFC0]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          {/* Top section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-2">
              <Link href="/" className="inline-flex mb-5">
                <img src="/logo.jpeg" alt="Viral Craft" className="h-10 sm:h-12 w-auto" />
              </Link>
              <p className="text-base text-white/60 leading-relaxed max-w-sm mb-6">
                Boost your brand with high-impact short videos from our expert content creators. Join 100,000+ creators worldwide.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3 mb-6">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-[#F4795A] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  {PHONE}
                </a>
                <a href="mailto:info@viralcraft.in" className="flex items-center gap-3 text-sm text-white/60 hover:text-[#F4795A] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  info@viralcraft.in
                </a>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  India
                </div>
              </div>
              
              {/* Social links */}
              <div className="flex items-center gap-3">
                <a href="https://instagram.com/viralcraftstudios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#F4795A] hover:text-white transition-all duration-300 hover:scale-110">
                  <AtSign className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/viralcraft" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#F4795A] hover:text-white transition-all duration-300 hover:scale-110">
                  <Link2 className="w-5 h-5" />
                </a>
                <a href="mailto:info@viralcraft.in" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#F4795A] hover:text-white transition-all duration-300 hover:scale-110">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Product</h3>
              <ul className="space-y-3">
                {["Brands", "Creators", "Use Cases"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-white/50 hover:text-[#F4795A] transition-colors duration-300 flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Company</h3>
              <ul className="space-y-3">
                {["About", "Blog", "Careers", "Press"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white/50 hover:text-[#F4795A] transition-colors duration-300 flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Resources</h3>
              <ul className="space-y-3">
                {["Help Center", "Community", "Guides", "API"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white/50 hover:text-[#F4795A] transition-colors duration-300 flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Stay in the loop</h4>
                <p className="text-sm text-white/50">Get the latest from Viral Craft. No spam, ever.</p>
              </div>
              <div className="flex w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 lg:w-72 px-5 py-3.5 text-sm rounded-l-2xl border border-white/10 border-r-0 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4795A] transition-colors"
                />
                <button className="px-6 py-3.5 text-sm font-semibold text-white bg-[#F4795A] rounded-r-2xl hover:bg-[#E5623F] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(244,121,90,0.3)]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              &copy; {currentYear} Viral Craft. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Cookies</Link>
            </div>
            <p className="text-sm text-white/30">
              Crafted with care for creators
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
