'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Users, Eye, TrendingUp, Check, ChevronDown, Phone, Clock, Shield, BadgeCheck, MessageSquare, Headphones, Sparkles, ShoppingBag, Smartphone, Box, Video, Lightbulb, Palette, Share2, Zap, Award, DollarSign, ChartColumn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import VideoMarquee from "@/components/VideoMarquee";
import { PHONE, WHATSAPP_URL, portfolioCategories, PLANS, TESTIMONIALS, FAQ_ITEMS, CASE_STUDIES, WORKFLOW_STEPS, ADVANTAGES, CAPABILITIES, SERVICE_CATEGORIES, INDUSTRIES, PRODUCT_PIPELINE, whyChooseUs } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock, BadgeCheck, Shield, Sparkles, MessageSquare, Headphones, Award,
  DollarSign, ChartColumn, RotateCcw: Clock, FileText: MessageSquare,
  WandSparkles: Sparkles, Cpu: Zap, Search: Eye, Rocket: ArrowRight,
  Instagram: Share2, ShoppingBag, Smartphone, Box, Video, Lightbulb, Palette, Share2, Zap,
};

function PortfolioCard({ item, index }: { item: typeof portfolioCategories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden bg-[#EAE3D3] aspect-[4/3] cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
    >
      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-xs font-semibold text-white/80">{item.desc}</span>
        <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
      </div>
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#F4795A]/50 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white rounded-3xl border border-[#EAE3D3] p-7 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FBE3C2]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F4795A] to-[#FF8A65] flex items-center justify-center text-white font-bold text-lg">
            {t.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <span className="text-base font-bold text-[#1A1A1A]">{t.name}</span>
            <div className="text-sm text-[#6B6B65]">{t.company}</div>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#F4795A] text-[#F4795A]" />
          ))}
        </div>
        <p className="text-sm text-[#6B6B65] leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
        <div className="px-3 py-2 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold inline-flex items-center gap-2">
          <span className="text-[#F4795A]">Result:</span>
          <span>{t.result}</span>
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICE_CATEGORIES[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[service.icon] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group bg-white rounded-3xl border border-[#EAE3D3] overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-[#F4795A]/30 transition-all duration-500"
    >
      <div className="p-6 md:p-7">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-[#F4795A] flex items-center justify-center shrink-0 group-hover:from-[#F4795A] group-hover:to-[#E5623F] group-hover:text-white transition-all duration-500 shadow-lg">
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A] uppercase tracking-wider">Service {service.number}</span>
            </div>
            <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#F4795A] transition-colors">{service.title}</h3>
            <p className="text-sm font-semibold text-[#F4795A] italic">{service.tagline}</p>
          </div>
        </div>
        <p className="text-sm text-[#6B6B65] leading-relaxed mb-4">{service.description}</p>

        {/* Sub-services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {service.capabilities.map((cap, ci) => (
            <motion.div
              key={cap.name}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.03 }}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F3EA]/60 hover:bg-[#F4795A]/5 border border-transparent hover:border-[#F4795A]/10 transition-all duration-300"
            >
              <span className="w-5 h-5 rounded-full bg-[#F4795A]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#F4795A] stroke-[3]" />
              </span>
              <div>
                <span className="text-xs font-bold text-[#1A1A1A] block">{cap.name}</span>
                <span className="text-[11px] text-[#6B6B65] leading-relaxed">{cap.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#F4795A] via-[#FF8A65] to-[#FBE3C2] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

function FAQItem({ faq, index }: { faq: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="border border-[#EAE3D3] rounded-2xl overflow-hidden hover:border-[#F4795A]/30 transition-colors duration-300"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-[#F7F3EA] transition-colors duration-300">
        <span className="flex items-center gap-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F4795A]/10 text-[#F4795A] uppercase">{faq.category}</span>
          <span className="text-base md:text-lg font-semibold text-[#1A1A1A] pr-4">{faq.question}</span>
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-[#6B6B65] flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-base text-[#6B6B65] leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HomePage() {
  const [yearly, setYearly] = useState(false);
  const [faqCategory, setFaqCategory] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredFaqs = faqCategory === "All" ? FAQ_ITEMS : FAQ_ITEMS.filter(f => f.category === faqCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4795A]/10 rounded-full blur-3xl animate-float-soft" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C8EFC0]/20 rounded-full blur-3xl animate-float-down" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FBE3C2]/30 rounded-full blur-3xl" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/80 backdrop-blur-sm text-[#1A1A1A] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white/50">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F4795A]">
                <Users className="w-3 h-3 text-white" />
              </span>
              India&apos;s #1 AI &amp; UGC Creative Ad Agency
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-[#1A1A1A] max-w-5xl mx-auto">
            Scroll-Stopping{" "}
            <span className="text-gradient">AI &amp; UGC Videos</span>{" "}
            That Drive Real Sales For Your Brand
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 text-lg sm:text-xl text-[#6B6B65] leading-relaxed max-w-2xl mx-auto">
            We turn ordinary products into scroll-stopping content — cinematic AI films, authentic UGC, CGI &amp; VFX and performance creatives engineered to scale your brand.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-[#1A1A1A] font-medium">
            {["48-Hour Fast Delivery", "50K+ Creator Network", "Unlimited Revisions"].map((item) => (
              <div key={item} className="flex items-center gap-2"><Check className="w-4 h-4 text-[#F4795A]" /><span>{item}</span></div>
            ))}
          </motion.div>
          <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:bg-[#20BD5A] hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] hover:scale-[1.02] transition-all duration-300 btn-glow">
              <MessageSquare className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Book Free Strategy Call
            </Link>
            <Link href="#portfolio" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold text-[#1A1A1A] bg-white border border-[#EAE3D3] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:bg-[#F7F3EA] hover:border-[#F4795A]/30 hover:scale-[1.02] transition-all duration-300">
              <span className="w-4 h-4 rounded-full bg-[#F4795A] flex items-center justify-center"><span className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" /></span>
              View Portfolio
            </Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 flex items-center justify-center gap-4 text-sm text-[#6B6B65]">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F4795A] text-[#F4795A]" />)}
              <span className="ml-1 font-medium">4.9/5.0</span>
            </div>
            <span>Trusted by 7,000+ Brands &amp; Creators</span>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }} className="mt-12">
          <VideoMarquee />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "50K", suffix: "+", label: "Creators", sub: "Vetted creator network across India & APAC" },
              { value: "25M", suffix: "+", label: "Views", sub: "Organic & paid viral reach generated" },
              { value: "7K", suffix: "+", label: "Brands", sub: "Scalable ad creatives produced" },
              { value: "4.9", suffix: "/5.0", label: "Rating", sub: "Average client satisfaction score" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} whileHover={{ y: -5, scale: 1.02 }} className="group bg-white/5 rounded-3xl border border-white/10 p-6 md:p-8 text-center hover:border-[#F4795A]/50 transition-all duration-400">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#F4795A] transition-colors">
                  {stat.value}<span className="text-[#F4795A] text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-white/60">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-24 bg-[#F0E8D8]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Portfolio" title="Real Campaigns. Real Results." subtitle="Campaign creative that generated millions of views and millions in revenue across Meta, TikTok, and YouTube." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {CASE_STUDIES.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} whileHover={{ y: -8, scale: 1.02 }} className="group relative rounded-3xl overflow-hidden bg-[#EAE3D3] aspect-[9/14] cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#F4795A] uppercase">{item.category}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400">{item.roas} ROAS</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs text-gray-400">{item.brand}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#F4795A] transition-colors">{item.title}</h3>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px] mt-2">
                    <div className="flex items-center gap-1 text-gray-300"><Eye className="w-3.5 h-3.5 text-[#F4795A]" />{item.views} Views</div>
                    <div className="flex items-center gap-1 text-emerald-400 font-semibold justify-end">CTR {item.ctrIncrease}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4795A]/30 to-transparent" />

      {/* Services & Capabilities Section */}
      <section className="py-20 md:py-28 bg-[#F7F3EA]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Our Services" title="8 Creative Engines. One Full Production System." subtitle="Every service is built to drive ROAS — from a single product photo to a full-scale creative testing machine." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICE_CATEGORIES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4795A]/20 to-transparent" />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4795A]/20 to-transparent" />

      {/* Industries Section */}
      <section className="py-20 md:py-24 bg-[#F0E8D8]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Industries" title="We Serve Your Industry" subtitle="Specialized creative solutions for every industry vertical." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={ind.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} whileHover={{ y: -8, scale: 1.02 }} className="group relative rounded-3xl overflow-hidden bg-white border border-[#EAE3D3] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#F4795A]/30 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  {/* Stats badge on image */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#F4795A] text-white shadow-lg">{ind.stats}</span>
                  </div>
                  {/* Key formats overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-1.5">
                      {ind.keyFormats.map((f) => (
                        <span key={f} className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{ind.name}</h3>
                  </div>
                  <p className="text-xs text-[#F4795A] font-semibold italic mb-2">{ind.subtitle}</p>
                  <p className="text-xs text-[#6B6B65] leading-relaxed">{ind.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4795A]/20 to-transparent" />

      {/* How It Works Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Workflow" title="From Brief To Viral In 4 Steps" subtitle="A battle-tested process that takes your brand from a creative brief to a full high-converting ad testing library." />
          <div className="grid md:grid-cols-4 gap-5">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }} whileHover={{ y: -8, scale: 1.02 }} className="group bg-white rounded-3xl border border-[#EAE3D3] p-7 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-500 relative overflow-hidden">
                <span className="absolute top-5 right-5 text-4xl font-bold text-[#EAE3D3] group-hover:text-[#F4795A]/15 transition-colors">{step.number}</span>
                <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] text-[#F4795A] font-bold text-lg flex items-center justify-center group-hover:bg-[#F4795A] group-hover:text-white transition-colors shadow-md mb-5">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B6B65] leading-relaxed mb-3">{step.description}</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#F4795A] animate-pulse" />
                  <span className="text-[#6B6B65] font-medium">{step.deliverable}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Pricing Section */}
      <section className="py-20 md:py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Pricing" title="Simple Plans. Serious Creative Output." subtitle="No long-term contracts. Pause or cancel anytime. Flexible plans designed for fast ad testing and rapid scaling." />
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm font-semibold ${!yearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button type="button" onClick={() => setYearly(v => !v)} className="w-16 h-9 rounded-full bg-white/10 p-1 relative border border-white/20 transition-colors cursor-pointer">
              <div className={`w-7 h-7 rounded-full bg-[#F4795A] transition-transform duration-300 shadow-md ${yearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className="text-sm font-semibold text-gray-400 flex items-center gap-2">
              Yearly <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F4795A] text-white uppercase">Save 20%</span>
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {PLANS.map((plan) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }} className={`relative rounded-3xl p-8 flex flex-col transition-all duration-500 ${plan.popular ? 'bg-white text-[#1A1A1A] shadow-[0_20px_60px_rgba(244,121,90,0.2)] scale-[1.02] border-2 border-[#F4795A]' : 'bg-white/5 text-white border border-white/10 hover:border-white/30 hover:-translate-y-1'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#F4795A] to-[#FF8A65] text-white text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1"><Sparkles className="w-3 h-3" />Most Popular</span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl">{plan.name}</h3>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${plan.popular ? 'bg-[#F4795A] text-white' : 'bg-white/10 text-gray-300'}`}>{plan.tag}</span>
                </div>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">{plan.description}</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold tracking-tight">${yearly ? plan.priceYearly : plan.priceMonthly}</span>
                  <span className="text-sm text-gray-400 pb-1">/ month</span>
                </div>
                <div className="flex flex-col gap-3 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">What&apos;s Included:</span>
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#F4795A]/15 flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-[#F4795A] stroke-[3]" /></span>
                      <span className={plan.popular ? 'text-gray-700' : 'text-gray-300'}>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t border-white/10 mb-4">
                  <span className="text-gray-400">Turnaround:</span>
                  <span className="font-bold text-[#F4795A]">{plan.turnaround}</span>
                </div>
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`text-white font-bold py-4 rounded-2xl text-sm text-center block transition-all ${plan.popular ? 'bg-gradient-to-r from-[#F4795A] to-[#E5623F] shadow-[0_8px_24px_rgba(244,121,90,0.3)] hover:scale-[1.02]' : 'bg-white/10 hover:bg-white/20 border border-white/20'}`}>
                  {plan.ctaText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4795A]/20 to-transparent" />

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Why Us" title="Why Brands Win With ViralCraft" subtitle="The unfair advantages that make us different from every other video production agency in India." />
          <div className="grid md:grid-cols-3 gap-5">
            {ADVANTAGES.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} whileHover={{ y: -6, scale: 1.02 }} className="group bg-white rounded-3xl border border-[#EAE3D3] p-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#F4795A]/30 transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-[#F4795A] flex items-center justify-center group-hover:bg-[#F4795A] group-hover:text-white transition-colors mb-4">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B6B65] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4795A]/20 to-transparent" />

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-[#F0E8D8]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Testimonials" title="Founders &amp; Growth Leaders Trust Us" subtitle="Read how our AI and UGC video ads transformed ad performance for D2C brands and marketing agencies." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4795A]/20 to-transparent" />

      {/* FAQs Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading label="FAQs" title="Every Question, Answered Straight" subtitle="Everything you need to know about working with ViralCraft Media." />
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 justify-start sm:justify-center">
            {["All", "General", "Process", "Pricing", "AI & UGC", "Delivery"].map((cat) => (
              <button key={cat} type="button" onClick={() => setFaqCategory(cat)} className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${faqCategory === cat ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#6B6B65] border border-[#EAE3D3]'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {filteredFaqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4795A]/30 to-transparent" />

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative bg-gradient-to-r from-[#F4795A] via-[#E5623F] to-[#1A1A1A] rounded-[2rem] p-10 md:p-16 text-center overflow-hidden shadow-2xl">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                Let&apos;s Build Your Next Viral Winner
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Ready to Turn Views Into Revenue?
              </h2>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                Book a complimentary 20-minute strategy session. We&apos;ll analyze your current ad creative performance and share a custom 30-day testing plan.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group bg-white text-[#1A1A1A] hover:bg-gray-100 font-bold text-base py-4 px-8 rounded-full flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-2xl">
                  <Phone className="w-4 h-4 text-[#F4795A]" />
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4 text-[#F4795A]" />
                </Link>
                <Link href="#portfolio" className="bg-white/10 text-white hover:bg-white/20 font-semibold text-base py-4 px-8 rounded-full flex items-center justify-center gap-2 border border-white/30 transition-all">
                  <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center"><span className="w-0 h-0 border-l-[5px] border-l-[#F4795A] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5" /></span>
                  Watch Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
