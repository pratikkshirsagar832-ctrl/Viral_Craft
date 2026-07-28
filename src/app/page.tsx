'use client';

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star, Users, Eye, TrendingUp, Zap, Check, ChevronDown, Phone, Clock, Shield, BadgeCheck, MessageSquare, Headphones, Sparkles, Camera, Cpu, UserCheck, Palmtree, Shirt, UtensilsCrossed, Monitor, Home } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import VideoMarquee from "@/components/VideoMarquee";

const PHONE = "+919170326268";

const portfolioCategories = [
  { title: "AI UGC Videos", icon: Sparkles, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80", desc: "AI-generated viral content" },
  { title: "Customised AI Models", icon: Cpu, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80", desc: "Tailored AI avatars & models" },
  { title: "Real Human UGC", icon: UserCheck, image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=600&q=80", desc: "Authentic creator content" },
  { title: "Beauty Products", icon: Palmtree, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", desc: "Skincare & beauty campaigns" },
  { title: "Fashion", icon: Shirt, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80", desc: "Style & apparel content" },
  { title: "Food & Beverage", icon: UtensilsCrossed, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", desc: "Mouth-watering food visuals" },
  { title: "Electronics", icon: Monitor, image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80", desc: "Tech unboxing & reviews" },
  { title: "Home & Living", icon: Home, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", desc: "Interior & lifestyle content" },
];

const pricingCategories = [
  {
    category: "AI Customised Models",
    plans: [
      { name: "Starter", price: 199, period: "month", features: ["2 AI model videos/month", "Script writing", "Basic editing", "Stock music"] },
      { name: "Pro", price: 499, period: "month", features: ["5 AI model videos/month", "Custom script", "Advanced editing", "Trending music", "Caption generation"] },
      { name: "Enterprise", price: 999, period: "month", popular: true, features: ["Unlimited AI videos", "Dedicated AI model", "Priority support", "Multi-platform export", "Performance analytics"] },
    ],
    sixMonth: { name: "Pro Saver", price: 449, period: "month", billed: "6-month", features: ["Everything in Pro", "2 months free", "Priority support", "Extra revision"] },
    yearly: { name: "Yearly Elite", price: 349, period: "month", billed: "yearly", features: ["Everything in Enterprise", "4 months free", "Dedicated account manager", "White-label option"] },
  },
  {
    category: "Real Human Models",
    plans: [
      { name: "Starter", price: 299, period: "month", features: ["2 human model videos/month", "Creator matching", "Script writing", "Basic editing"] },
      { name: "Pro", price: 699, period: "month", features: ["5 human model videos/month", "Top creator matching", "Custom script", "Advanced editing", "Hook optimization"] },
      { name: "Enterprise", price: 1299, period: "month", popular: true, features: ["Unlimited videos", "Dedicated creator team", "A/B testing", "Multi-platform", "Performance dashboard"] },
    ],
    sixMonth: { name: "Pro Saver", price: 599, period: "month", billed: "6-month", features: ["Everything in Pro", "2 months free", "Priority support", "Extra revision"] },
    yearly: { name: "Yearly Elite", price: 499, period: "month", billed: "yearly", features: ["Everything in Enterprise", "4 months free", "Dedicated account manager", "White-label option"] },
  },
  {
    category: "Beauty Products",
    plans: [
      { name: "Starter", price: 149, period: "month", features: ["1 beauty video/month", "Product showcase", "Basic editing", "Stock music"] },
      { name: "Pro", price: 399, period: "month", features: ["3 beauty videos/month", "Tutorial format", "Advanced editing", "Trending audio", "Caption generation"] },
      { name: "Enterprise", price: 799, period: "month", popular: true, features: ["Unlimited beauty content", "Dedicated beauty creator", "Multi-product shoots", "Platform optimization", "Analytics"] },
    ],
    sixMonth: { name: "Pro Saver", price: 349, period: "month", billed: "6-month", features: ["Everything in Pro", "2 months free", "Priority support", "Extra revision"] },
    yearly: { name: "Yearly Elite", price: 279, period: "month", billed: "yearly", features: ["Everything in Enterprise", "4 months free", "Dedicated account manager", "White-label option"] },
  },
];

const whyChooseUs = [
  { icon: Clock, title: "48-Hour Delivery", desc: "Fastest turnaround in the industry. Get your content within 48 hours." },
  { icon: BadgeCheck, title: "Professional Service", desc: "End-to-end professional handling from script to final delivery." },
  { icon: Shield, title: "Affordable Pricing", desc: "Competitive rates without compromising on quality or creativity." },
  { icon: Sparkles, title: "High-Quality UGC", desc: "Cinematic-grade content that looks authentic and drives conversions." },
  { icon: MessageSquare, title: "Custom Script Writing", desc: "Hook-optimized scripts tailored to your brand voice and goals." },
  { icon: Headphones, title: "Dedicated Support", desc: "Direct line to your campaign manager. We're always available." },
];

const testimonials = [
  { name: "Priya Sharma", company: "Glow Beauty", role: "CMO", logo: "GB", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", quote: "Viral Craft completely revolutionized our acquisition model. The UGC creatives slashed our CPA by 40% while maintaining exceptional conversion quality.", rating: 5 },
  { name: "Rahul Mehta", company: "TechGear", role: "Founder", logo: "TG", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", quote: "They delivered a batch of Reels that hit over 5M organic views combined and sold out our inventory in 48 hours. The creator matching was spot-on.", rating: 5 },
  { name: "Ananya Reddy", company: "FitLife", role: "Growth Head", logo: "FL", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", quote: "Incredibly fast turnaround and top-tier creator matching. Viral Craft is our secret weapon for scaling — every campaign outperforms projections.", rating: 5 },
  { name: "Vikram Singh", company: "Nykaa Fashion", role: "Brand Manager", logo: "NF", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80", quote: "The quality of creators they matched us with was exceptional. Our engagement rates jumped 3x in the first month itself.", rating: 5 },
];

const faqs = [
  { q: "What is the turnaround time for a video?", a: "We deliver most projects within 48 hours. Rush delivery is also available for urgent requirements." },
  { q: "How do you match creators to my brand?", a: "We analyze your brand voice, target audience, and campaign goals to match you with the perfect creator from our network of 5,000+ influencers." },
  { q: "Can I get revisions if I don't like the output?", a: "Absolutely! We offer unlimited revisions until you're 100% satisfied with the content." },
  { q: "Do you provide scripts or do I have to write my own?", a: "We write custom, hook-optimized scripts for every video. You can also provide your own brief if you prefer." },
  { q: "What platforms do you optimize content for?", a: "We optimize for TikTok, Instagram Reels, YouTube Shorts, Facebook, and LinkedIn — all in the right aspect ratios." },
  { q: "Is there a minimum commitment required?", a: "No minimum commitment. You can start with a single video and scale up based on results." },
];

function PortfolioCard({ item, index }: { item: typeof portfolioCategories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden bg-[#EAE3D3] aspect-[4/3] cursor-pointer"
    >
      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-1">
          <item.icon className="w-4 h-4 text-[#F4795A]" />
          <span className="text-xs font-semibold text-white/80">{item.desc}</span>
        </div>
        <h3 className="text-sm font-bold text-white">{item.title}</h3>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl border border-[#EAE3D3] p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-4">
        <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#FBE3C2]" loading="lazy" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#1A1A1A]">{t.name}</span>
            <span className="text-[10px] font-semibold bg-[#FBE3C2] text-[#1A1A1A] px-2 py-0.5 rounded-full">{t.logo}</span>
          </div>
          <div className="text-xs text-[#6B6B65]">{t.company} — {t.role}</div>
        </div>
      </div>
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[#F4795A] text-[#F4795A]" />
        ))}
      </div>
      <p className="text-sm text-[#6B6B65] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
    </motion.div>
  );
}

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-[#EAE3D3] rounded-xl overflow-hidden"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-white hover:bg-[#F7F3EA] transition-colors">
        <span className="text-sm md:text-base font-semibold text-[#1A1A1A] pr-4">{faq.q}</span>
        <ChevronDown className={`w-4 h-4 text-[#6B6B65] flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-4 md:px-5 pb-4 md:pb-5">
          <p className="text-sm text-[#6B6B65] leading-relaxed">{faq.a}</p>
        </div>
      )}
    </motion.div>
  );
}

const googleReview = {
  total: 487,
  rating: 4.8,
  latest: [
    { name: "Sneha K.", text: "Amazing service! Got our beauty brand video in under 48 hours. The quality was outstanding and the creator perfectly understood our vision.", rating: 5 },
    { name: "Amit P.", text: "Viral Craft helped us scale our Amazon business with authentic UGC. Our conversion rate improved by 35% in just 2 weeks.", rating: 5 },
    { name: "Neha G.", text: "Professional team with incredible attention to detail. They matched us with the perfect influencer who truly resonated with our audience.", rating: 5 },
    { name: "Rohit V.", text: "Best decision we made for our brand. The AI models they created looked incredibly realistic and our engagement skyrocketed.", rating: 5 },
  ],
};

export default function HomePage() {
  const [pricingTab, setPricingTab] = useState(0);
  const [pricingCycle, setPricingCycle] = useState<"monthly" | "6month" | "yearly">("monthly");

  return (
    <>
      <section className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FBE3C2] text-[#1A1A1A] mb-6">
              <Users className="w-3 h-3 mr-1.5" />
              Join over 100,000 happy creators
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-[#1A1A1A] max-w-4xl mx-auto">
            Engage Audiences with{" "}
            <span className="text-[#F4795A]">Stunning Videos</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-[#6B6B65] leading-relaxed max-w-xl mx-auto">
            Boost Your Brand with High-Impact Short Videos from our expert content creators.
            Our team is ready to propel your business forward.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8">
          <VideoMarquee />
        </motion.div>

        <div className="text-center mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-medium text-white bg-[#F4795A] shadow-md shadow-[#F4795A]/20 hover:bg-[#E5623F] hover:scale-[1.03] transition-all duration-200">
            <Phone className="w-4 h-4" />
            Schedule a Meeting
          </Link>
          <Link href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-medium text-[#1A1A1A] bg-white border border-[#EAE3D3] shadow-sm hover:bg-[#F7F3EA] hover:scale-[1.03] transition-all duration-200">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { end: 100, suffix: "K+", label: "Happy Creators", icon: Users },
              { end: 50, suffix: "M+", label: "Views Generated", icon: Eye },
              { end: 4.9, suffix: "", label: "Average Rating", icon: Star, decimals: 1 },
              { end: 15, suffix: "K+", label: "Brands Served", icon: TrendingUp },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#FBE3C2] flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-4 h-4 text-[#F4795A]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                  {stat.decimals ? <AnimatedCounter end={stat.end * 10} duration={2000} /> : <AnimatedCounter end={stat.end} duration={2000} />}
                  {stat.suffix}
                </div>
                <div className="text-xs text-[#6B6B65] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F0E8D8]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Our Portfolio" title="Our Work by Category" subtitle="Real projects delivered across industries. Each category represents actual client work." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {portfolioCategories.map((item, i) => (
              <PortfolioCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading label="How It Works" title="Three Steps to Viral Content" subtitle="From brief to delivery in days, not weeks." />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: "01", title: "Tell Us Your Vision", description: "Share your brand guidelines, goals, and preferences. We'll craft a creative brief that aligns with your vision.", color: "#FBE3C2" },
              { step: "02", title: "We Create & Optimize", description: "Our top creators produce high-impact videos with hook-optimized editing engineered for maximum engagement.", color: "#FCD9A8" },
              { step: "03", title: "Launch & Scale", description: "Receive your winning creatives and deploy them across platforms. We help you scale what works best.", color: "#C8EFC0" },
            ].map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl border border-[#EAE3D3] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-[#1A1A1A] mb-5" style={{ backgroundColor: step.color }}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="text-sm text-[#6B6B65] leading-relaxed">{step.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 text-[#EAE3D3] z-10">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F0E8D8]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Pricing" title="Transparent Plans" subtitle="Choose the perfect plan for your business. All plans include unlimited revisions." />
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {pricingCategories.map((cat, i) => (
              <button key={cat.category} onClick={() => { setPricingTab(i); setPricingCycle("monthly"); }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${pricingTab === i ? 'bg-[#F4795A] text-white shadow-md' : 'bg-white text-[#6B6B65] border border-[#EAE3D3] hover:border-[#F4795A]'}`}>
                {cat.category}
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-2 mb-10">
            {(["monthly", "6month", "yearly"] as const).map((cycle) => (
              <button key={cycle} onClick={() => setPricingCycle(cycle)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${pricingCycle === cycle ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#6B6B65] border border-[#EAE3D3]'}`}>
                {cycle === "monthly" ? "Monthly" : cycle === "6month" ? "6-Month" : "Yearly"}
                {cycle === "yearly" && <span className="ml-1 text-[10px] text-[#C8EFC0]">Save 30%</span>}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingCycle === "monthly" && pricingCategories[pricingTab].plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className={`relative rounded-2xl p-6 md:p-8 ${plan.popular ? 'bg-[#1A1A1A] text-white shadow-xl scale-[1.02] border-2 border-[#F4795A]' : 'bg-white border border-[#EAE3D3]'}`}>
                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4795A] text-white text-[10px] font-bold px-4 py-1 rounded-full">Most Popular</span>}
                <h3 className={`text-lg font-bold ${plan.popular ? 'text-white' : 'text-[#1A1A1A]'}`}>{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl md:text-4xl font-bold">${plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.popular ? 'text-white/60' : 'text-[#6B6B65]'}`}>/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-[#C8EFC0]' : 'text-[#F4795A]'}`} />
                      <span className={plan.popular ? 'text-white/80' : 'text-[#6B6B65]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`tel:${PHONE}`} className={`block text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 ${plan.popular ? 'bg-[#F4795A] text-white hover:bg-[#E5623F]' : 'bg-[#F7F3EA] text-[#1A1A1A] hover:bg-[#EAE3D3]'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
            {pricingCycle === "6month" && (
              <div className="md:col-span-3 max-w-md mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="relative rounded-2xl bg-white border-2 border-[#F4795A] p-6 md:p-8 shadow-xl">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4795A] text-white text-[10px] font-bold px-4 py-1 rounded-full">Best Value</span>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{pricingCategories[pricingTab].sixMonth.name}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl md:text-4xl font-bold">${pricingCategories[pricingTab].sixMonth.price}</span>
                    <span className="text-sm text-[#6B6B65] ml-1">/{pricingCategories[pricingTab].sixMonth.period}</span>
                    <span className="block text-xs text-[#6B6B65] mt-1">Billed {pricingCategories[pricingTab].sixMonth.billed}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pricingCategories[pricingTab].sixMonth.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F4795A]" />
                        <span className="text-[#6B6B65]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`tel:${PHONE}`} className="block text-center py-3 rounded-xl text-sm font-bold bg-[#F4795A] text-white hover:bg-[#E5623F] transition-all duration-200">
                    Get Started
                  </Link>
                </motion.div>
              </div>
            )}
            {pricingCycle === "yearly" && (
              <div className="md:col-span-3 max-w-md mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="relative rounded-2xl bg-[#1A1A1A] text-white border-2 border-[#F4795A] p-6 md:p-8 shadow-xl scale-[1.02]">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8EFC0] text-[#1A1A1A] text-[10px] font-bold px-4 py-1 rounded-full">Save 30%</span>
                  <h3 className="text-lg font-bold">{pricingCategories[pricingTab].yearly.name}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl md:text-4xl font-bold">${pricingCategories[pricingTab].yearly.price}</span>
                    <span className="text-sm text-white/60 ml-1">/{pricingCategories[pricingTab].yearly.period}</span>
                    <span className="block text-xs text-white/60 mt-1">Billed {pricingCategories[pricingTab].yearly.billed}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pricingCategories[pricingTab].yearly.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C8EFC0]" />
                        <span className="text-white/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`tel:${PHONE}`} className="block text-center py-3 rounded-xl text-sm font-bold bg-[#F4795A] text-white hover:bg-[#E5623F] transition-all duration-200">
                    Get Started
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Why Us" title="Why Choose Viral Craft Media" subtitle="We're not just another content agency. Here's what sets us apart." />
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl border border-[#EAE3D3] p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#FBE3C2] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#F4795A]" />
                </div>
                <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-xs text-[#6B6B65] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F0E8D8]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Testimonials" title="What Our Clients Say" subtitle="Trusted by leading brands across industries to deliver viral results." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading label="FAQs" title="Frequently Asked Questions" subtitle="Quick answers to the most common questions." />
          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F0E8D8]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading label="Google Reviews" title="What People Are Saying" subtitle={`${googleReview.total}+ verified reviews • ${googleReview.rating}/5 average rating`} />
          <div className="flex items-center justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#F4795A] text-[#F4795A]" />
            ))}
            <span className="ml-2 text-sm font-semibold text-[#1A1A1A]">{googleReview.rating} ({googleReview.total} reviews)</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {googleReview.latest.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }} className="bg-white rounded-xl border border-[#EAE3D3] p-4 md:p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#1A1A1A]">{r.name}</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-[#F4795A] text-[#F4795A]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#6B6B65] leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl border border-[#EAE3D3] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FBE3C2]/30 via-transparent to-[#C8EFC0]/30 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-[#F4795A] flex items-center justify-center mx-auto mb-5">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
                Ready to Go Viral?
              </h2>
              <p className="text-[#6B6B65] max-w-md mx-auto mb-7 text-sm md:text-base">
                Schedule a free consultation call with our team. We'll discuss your brand goals and create a custom content strategy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white bg-[#F4795A] shadow-md shadow-[#F4795A]/20 hover:bg-[#E5623F] hover:scale-[1.03] transition-all duration-200">
                  <Phone className="w-4 h-4" />
                  Schedule a Meeting
                </Link>
                <Link href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-[#1A1A1A] bg-white border border-[#EAE3D3] shadow-sm hover:bg-[#F7F3EA] hover:scale-[1.03] transition-all duration-200">
                  <ArrowRight className="w-4 h-4" />
                  Book a Free Consultation
                </Link>
              </div>
              <p className="mt-4 text-xs text-[#6B6B65]">
                Call us directly at <a href={`tel:${PHONE}`} className="text-[#F4795A] font-semibold underline">{PHONE}</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
