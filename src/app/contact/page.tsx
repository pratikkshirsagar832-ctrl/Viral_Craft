'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Globe, MapPin, Send, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@viralcraft.in", href: "mailto:info@viralcraft.in" },
  { icon: Phone, label: "Phone", value: "+91 91516 96922", href: "tel:+919151696922" },
  { icon: Globe, label: "Instagram", value: "@viralcraftstudios", href: "https://www.instagram.com/viralcraftstudios" },
  { icon: MapPin, label: "Location", value: "India (Remote-First)", href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 500);
  };

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
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A]"
          >
            Let's make your brand{" "}
            <span className="text-[#F4795A]">go viral</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6B6B65] max-w-xl mx-auto"
          >
            Ready to launch your campaign? Get in touch and our team will reach out within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-[#EAE3D3] p-6 md:p-8"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#F4795A] flex items-center justify-center mx-auto mb-5">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Message Sent!</h3>
                    <p className="text-sm text-[#6B6B65] max-w-sm mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", message: "" }); }}
                      className="mt-6 text-sm text-[#F4795A] hover:text-[#E5623F] transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                        Your Name <span className="text-[#F4795A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#EAE3D3] text-sm text-[#1A1A1A] placeholder:text-[#6B6B65]/50 focus:outline-none focus:border-[#F4795A] focus:ring-1 focus:ring-[#F4795A]/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                          Your Email <span className="text-[#F4795A]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#EAE3D3] text-sm text-[#1A1A1A] placeholder:text-[#6B6B65]/50 focus:outline-none focus:border-[#F4795A] focus:ring-1 focus:ring-[#F4795A]/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#EAE3D3] text-sm text-[#1A1A1A] placeholder:text-[#6B6B65]/50 focus:outline-none focus:border-[#F4795A] focus:ring-1 focus:ring-[#F4795A]/20 transition-all"
                          placeholder="Your Brand"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                        Your Message <span className="text-[#F4795A]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#EAE3D3] text-sm text-[#1A1A1A] placeholder:text-[#6B6B65]/50 focus:outline-none focus:border-[#F4795A] focus:ring-1 focus:ring-[#F4795A]/20 transition-all resize-none"
                        placeholder="Tell us about your campaign goals..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#F4795A] shadow-md shadow-[#F4795A]/20 hover:bg-[#E5623F] hover:scale-[1.03] transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === "Instagram" ? "_blank" : undefined}
                    rel={info.label === "Instagram" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 bg-white rounded-xl border border-[#EAE3D3] p-4 hover:border-[#F4795A]/30 hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FBE3C2] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-4 h-4 text-[#F4795A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#6B6B65]">{info.label}</div>
                      <div className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#F4795A] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 bg-white rounded-2xl border border-[#EAE3D3] p-5"
              >
                <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">Follow Us</h3>
                <p className="text-xs text-[#6B6B65] mb-4">
                  Stay updated with our latest campaigns and viral content.
                </p>
                <a
                  href="https://www.instagram.com/viralcraftstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-all duration-200 hover:scale-[1.03]"
                >
                  <Globe className="w-4 h-4" />
                  @viralcraftstudios
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}