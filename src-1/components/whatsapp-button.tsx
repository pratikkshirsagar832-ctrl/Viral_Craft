"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";
import { track } from "@/lib/track";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((v) => !v);
    if (!open) track("activity", { kind: "whatsapp_click" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="animate-fadeIn glass-card rounded-2xl p-4 shadow-2xl max-w-[260px]">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm text-[#111111] leading-snug">
              Chat with us on <strong className="font-semibold">WhatsApp</strong>{" "}
              <span className="inline-block animate-bounce-short">👋</span>
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat"
              className="text-[#6E6E73] hover:text-[#111111] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Start Chat
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Chat on WhatsApp"
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}