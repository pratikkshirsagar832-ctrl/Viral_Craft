"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<string | null>("faq-1");

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchesCat = category === "All" || item.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <section className="py-24 bg-[#F8F7F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold text-[#FF5722] uppercase tracking-widest font-heading">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#111111] tracking-tight">
            Every Question, Answered Straight
          </h2>
          <p className="text-base text-[#6E6E73] font-body">
            Everything you need to know about working with ViralCraft Media — delivery, pricing, process and more.
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="w-5 h-5 text-[#6E6E73] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-card border border-[#EAEAEA] text-sm text-[#111111] placeholder:text-[#6E6E73] focus:outline-none focus:border-[#FF5722] transition-all bg-white"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar justify-start sm:justify-center">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer",
                category === cat
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "bg-white text-[#6E6E73] hover:text-[#111111] border border-[#EAEAEA]",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filtered.length === 0 && (
            <div className="glass-card rounded-2xl border border-[#EAEAEA] p-8 text-center bg-white">
              <p className="text-sm text-[#6E6E73]">
                No questions found matching your search.
              </p>
            </div>
          )}
          {filtered.map((item) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className={cn(
                  "glass-card rounded-2xl border border-[#EAEAEA] overflow-hidden transition-all bg-white",
                  isOpen && "border-[#FF5722]/40 shadow-lg",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer group"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "text-[10px] font-bold px-2.5 py-1 rounded-full font-heading uppercase tracking-wider transition-colors",
                        isOpen
                          ? "bg-[#FF5722] text-white"
                          : "bg-[#FF5722]/10 text-[#FF5722]",
                      )}
                    >
                      {item.category}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#111111] group-hover:text-[#FF5722] transition-colors">
                      {item.question}
                    </span>
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#F8F7F5] border border-[#EAEAEA] flex items-center justify-center text-[#6E6E73] group-hover:text-[#FF5722] transition-colors">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 animate-fadeIn">
                    <p className="text-sm text-[#6E6E73] font-body leading-relaxed pl-0 sm:pl-[110px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
