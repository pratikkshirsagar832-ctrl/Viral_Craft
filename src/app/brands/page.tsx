'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Target, Users, Eye, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import VideoMarquee from "@/components/VideoMarquee";
import { useState } from "react";
import { videos } from "@/lib/videos";

const categories = ["All", "Beauty", "Food", "Fitness", "Travel"];

export default function BrandsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const portfolioItems = videos;
  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(() => activeCategory);

  return (
    <>
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FBE3C2] text-[#1A1A1A] mb-5"
          >
            For Brands
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A]"
          >
            Grow your brand with{" "}
            <span className="text-[#F4795A]">creator-made video</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6B6B65] max-w-xl mx-auto"
          >
            Tap into a network of top-tier content creators who produce scroll-stopping videos that convert.
          </motion.p>
        </div>
      </section>

      <VideoMarquee />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Why Viral Craft"
            title="Benefits Built for Brands"
            subtitle="Everything you need to scale your video content strategy."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Targeted Creator Matching", desc: "We match your brand with creators who speak to your exact audience demographic." },
              { icon: BarChart3, title: "Data-Driven Performance", desc: "Every campaign comes with detailed analytics so you know exactly what works." },
              { icon: Eye, title: "Scroll-Stopping Content", desc: "Hook-optimized videos engineered for maximum retention and conversion." },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[#EAE3D3] p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FBE3C2] flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-[#F4795A]" />
                </div>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#6B6B65] leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F0E8D8]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Case Studies"
            title="Real Results from Real Brands"
            subtitle="See how our creator campaigns delivered measurable impact."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { brand: "Glow Beauty", metric: "CPA Reduction", value: 40, suffix: "%", icon: TrendingUp },
              { brand: "TechGear", metric: "Organic Views", value: 5, suffix: "M+", icon: Eye },
              { brand: "FitLife", metric: "Conversion Lift", value: 320, suffix: "%", icon: Users },
            ].map((cs, i) => (
              <motion.div
                key={cs.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[#EAE3D3] p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[#FBE3C2] flex items-center justify-center mx-auto mb-3">
                  <cs.icon className="w-4 h-4 text-[#F4795A]" />
                </div>
                <div className="text-lg font-bold text-[#6B6B65] mb-1">{cs.brand}</div>
                <div className="text-xs text-[#6B6B65] mb-3">{cs.metric}</div>
                <div className="text-3xl font-bold text-[#F4795A]">
                  <AnimatedCounter end={cs.value} duration={2500} />{cs.suffix}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Portfolio"
            title="Browse by Category"
            subtitle="Explore our work across different industries and content styles."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-white text-[#6B6B65] border border-[#EAE3D3] hover:border-[#1A1A1A]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((video, i) => (
              <div
                key={`${video.name}-${i}`}
                onClick={() => window.open(video.src, '_blank')}
                className="relative rounded-2xl overflow-hidden bg-[#EAE3D3] aspect-[9/16] shadow-md group cursor-pointer"
              >
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-[#1A1A1A] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
                  <h3 className="text-xs font-semibold text-white truncate">
                    Creator Video
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-[#EAE3D3] p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">Ready to Grow?</h2>
            <p className="text-[#6B6B65] max-w-md mx-auto mb-7 text-sm">
              Join leading brands that trust Viral Craft for their creator video strategy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-medium text-white bg-[#F4795A] shadow-md shadow-[#F4795A]/20 hover:bg-[#E5623F] hover:scale-[1.03] transition-all duration-200"
            >
              Start Your Campaign
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
