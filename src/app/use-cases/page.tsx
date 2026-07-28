'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Rocket, ShoppingCart, Users, Megaphone, ChevronDown, Play } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const useCases = [
  {
    icon: Rocket,
    title: "Product Launches",
    subtitle: "Generate hype and demand for new products",
    description: "Launch your next product with a bang. Our creators produce authentic unboxing, demo, and testimonial videos that build trust and drive pre-orders. We've helped brands generate over 10M+ views on launch day campaigns.",
    results: "3-5x ROI within first week",
  },
  {
    icon: ShoppingCart,
    title: "Social Ads",
    subtitle: "High-converting video ads for paid social",
    description: "Stop the scroll with hook-optimized video ads engineered for conversion. Our UGC-style ads consistently outperform polished production content, delivering lower CPAs and higher ROAS across Meta, TikTok, and YouTube.",
    results: "40% lower CPA vs. traditional ads",
  },
  {
    icon: Users,
    title: "UGC Campaigns",
    subtitle: "Authentic content that builds brand trust",
    description: "User-generated content feels real because it is. We produce authentic testimonials, reviews, and lifestyle content featuring your product in action. Perfect for social proof, landing pages, and email marketing.",
    results: "65% higher engagement rates",
  },
  {
    icon: Megaphone,
    title: "Brand Awareness",
    subtitle: "Reach new audiences at scale",
    description: "Expand your reach with viral-ready content designed for maximum shareability. Our creators understand the algorithms and produce content optimized for organic reach, helping you connect with new audiences without paid spend.",
    results: "2M+ average organic reach per campaign",
  },
];

export default function UseCasesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FBE3C2] text-[#1A1A1A] mb-5"
          >
            Use Cases
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A]"
          >
            Video content for{" "}
            <span className="text-[#F4795A]">every goal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6B6B65] max-w-xl mx-auto"
          >
            From product launches to brand awareness, our creator network delivers results across every use case.
          </motion.p>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-[#EAE3D3] overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FBE3C2] flex items-center justify-center flex-shrink-0">
                  <uc.icon className="w-5 h-5 text-[#F4795A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[#1A1A1A]">{uc.title}</h3>
                  <p className="text-xs text-[#6B6B65] mt-0.5">{uc.subtitle}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[10px] font-semibold text-[#F4795A] bg-[#FBE3C2] px-2 py-1 rounded-full hidden sm:inline">{uc.results}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6B6B65] transition-transform duration-200 ${
                      expandedIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 border-t border-[#EAE3D3]">
                      <div className="pt-4 grid md:grid-cols-5 gap-6">
                        <div className="md:col-span-3">
                          <p className="text-sm text-[#6B6B65] leading-relaxed">{uc.description}</p>
                          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#F4795A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F4795A]" />
                            {uc.results}
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="aspect-[9/16] rounded-xl bg-[#EAE3D3] flex items-center justify-center group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                              <Play className="w-4 h-4 text-[#1A1A1A] ml-0.5" />
                            </div>
                            <span className="absolute bottom-3 left-3 text-[10px] text-white font-medium z-10">Example Video</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-[#EAE3D3] p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">Not Sure Where to Start?</h2>
            <p className="text-[#6B6B65] max-w-md mx-auto mb-7 text-sm">
              Tell us about your goals and we'll recommend the perfect strategy for your brand.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-medium text-white bg-[#F4795A] shadow-md shadow-[#F4795A]/20 hover:bg-[#E5623F] hover:scale-[1.03] transition-all duration-200"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}