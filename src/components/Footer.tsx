import Link from "next/link";
import { Zap, Mail, Link2, AtSign } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EAE3D3] bg-[#F7F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex mb-4">
              <img src="/logo.jpeg" alt="Viral Craft" className="h-8 sm:h-10 w-auto" />
            </Link>
            <p className="text-sm text-[#6B6B65] leading-relaxed max-w-xs">
              Boost your brand with high-impact short videos from our expert content creators.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://instagram.com/viralcraftstudios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#EAE3D3] flex items-center justify-center hover:bg-[#F4795A] hover:text-white transition-colors">
                <AtSign className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/viralcraft" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#EAE3D3] flex items-center justify-center hover:bg-[#F4795A] hover:text-white transition-colors">
                <Link2 className="w-4 h-4" />
              </a>
              <a href="mailto:info@viralcraft.in" className="w-8 h-8 rounded-full bg-[#EAE3D3] flex items-center justify-center hover:bg-[#F4795A] hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B65] uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {["Brands", "Creators", "Use Cases"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-[#1A1A1A] hover:text-[#F4795A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B65] uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#1A1A1A] hover:text-[#F4795A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B65] uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Help Center", "Community", "Guides", "API"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#1A1A1A] hover:text-[#F4795A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B65] uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#1A1A1A] hover:text-[#F4795A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 pt-8 border-t border-[#EAE3D3]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-[#1A1A1A]">Stay in the loop</h4>
              <p className="text-xs text-[#6B6B65] mt-1">Get the latest from Viral Craft</p>
            </div>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2.5 text-sm rounded-l-full border border-[#EAE3D3] border-r-0 bg-white text-[#1A1A1A] placeholder:text-[#6B6B65]/50 focus:outline-none focus:border-[#F4795A] transition-colors"
              />
              <button className="px-5 py-2.5 text-sm font-medium text-white bg-[#171717] rounded-r-full hover:bg-[#2A2A2A] transition-all duration-200 hover:scale-[1.03]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#EAE3D3] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#6B6B65]">
            &copy; {currentYear} Viral Craft. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6B65]/60">
            Crafted with care for creators
          </p>
        </div>
      </div>
    </footer>
  );
}