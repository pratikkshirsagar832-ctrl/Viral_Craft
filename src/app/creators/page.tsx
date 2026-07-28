'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, DollarSign, Camera, TrendingUp, Users, Star, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Apply to Join",
    description: "Fill out a quick application telling us about your content style, niche, and audience.",
    color: "#FBE3C2",
  },
  {
    step: "02",
    title: "Get Matched",
    description: "Our team reviews your profile and matches you with brands that fit your style.",
    color: "#FCD9A8",
  },
  {
    step: "03",
    title: "Create & Earn",
    description: "Produce high-impact videos for top brands and get paid for your creativity.",
    color: "#C8EFC0",
  },
];

const perks = [
  { icon: DollarSign, title: "Competitive Pay", desc: "Earn top rates for your content with timely payments." },
  { icon: Camera, title: "Creative Freedom", desc: "Brands trust your style. You keep creative control." },
  { icon: TrendingUp, title: "Grow Your Following", desc: "Get featured on brand channels and reach new audiences." },
  { icon: Users, title: "Community Access", desc: "Join a private network of top creators sharing insights." },
  { icon: Star, title: "Featured Opportunities", desc: "Top performers get premium brand partnerships." },
  { icon: Check, title: "No Exclusivity", desc: "Work with as many brands as you want, on your terms." },
];

const spotlightCreators = [
  { name: "Aisha R.", niche: "Beauty & Skincare", followers: "450K", rating: 4.9, jobs: 84 },
  { name: "Marcus L.", niche: "Fitness & Wellness", followers: "620K", rating: 4.8, jobs: 112 },
  { name: "Priya K.", niche: "Food & Lifestyle", followers: "380K", rating: 4.9, jobs: 67 },
  { name: "Jordan T.", niche: "Tech & Gadgets", followers: "520K", rating: 4.7, jobs: 93 },
];

export default function CreatorsPage() {
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
            For Creators
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A]"
          >
            Turn your content into{" "}
            <span className="text-[#F4795A]">income</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6B6B65] max-w-xl mx-auto"
          >
            Join the creator network that connects you with top brands. Get paid to do what you love.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="How It Works"
            title="Three Steps to Start Earning"
            subtitle="Getting started is simple. Apply, get matched, and start creating."
          />
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-0.5 bg-[#EAE3D3] z-0" />
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-2xl border border-[#EAE3D3] p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-[#1A1A1A] mx-auto mb-5"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#6B6B65] leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 md:py-20 bg-[#F0E8D8]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Perks"
            title="Why Join Viral Craft?"
            subtitle="We make it worth your while with competitive pay and creative freedom."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-[#EAE3D3] p-5 flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FBE3C2] flex items-center justify-center flex-shrink-0">
                  <perk.icon className="w-4 h-4 text-[#F4795A]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1A1A1A]">{perk.title}</h3>
                  <p className="text-xs text-[#6B6B65] mt-1 leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Spotlight */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Spotlight"
            title="Meet Our Top Creators"
            subtitle="These creators are killing it. You could be next."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {spotlightCreators.map((creator, i) => (
              <motion.div
                key={creator.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[#EAE3D3] p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center text-lg font-bold text-white mx-auto mb-3">
                  {creator.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-sm font-bold text-[#1A1A1A]">{creator.name}</h3>
                <p className="text-xs text-[#6B6B65] mt-0.5">{creator.niche}</p>
                <div className="flex items-center justify-center gap-0.5 mt-3">
                  <Star className="w-3 h-3 fill-[#F4795A] text-[#F4795A]" />
                  <span className="text-xs font-semibold text-[#1A1A1A]">{creator.rating}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-[#EAE3D3] grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm font-bold text-[#1A1A1A]">{creator.followers}</div>
                    <div className="text-[10px] text-[#6B6B65]">Followers</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1A1A1A]">{creator.jobs}</div>
                    <div className="text-[10px] text-[#6B6B65]">Jobs Done</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">Ready to Start Creating?</h2>
            <p className="text-[#6B6B65] max-w-md mx-auto mb-7 text-sm">
              Join 100,000+ creators already earning on Viral Craft. Apply today and start your journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-medium text-white bg-[#F4795A] shadow-md shadow-[#F4795A]/20 hover:bg-[#E5623F] hover:scale-[1.03] transition-all duration-200"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}