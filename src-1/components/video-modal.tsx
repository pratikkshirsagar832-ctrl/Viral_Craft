"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, Volume2, VolumeX, X } from "lucide-react";

type Props = {
  videoUrl: string | null;
  title?: string;
  onClose: () => void;
};

export default function VideoModal({ videoUrl, title, onClose }: Props) {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!videoUrl) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoUrl, onClose]);

  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
      />
      <div className="relative z-10 w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden glass-card-dark border-2 border-white/30 p-2 text-white shadow-2xl flex flex-col items-center bg-[#0F172A] cursor-default">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video player"
          className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 text-white hover:bg-[#FF5722] active:scale-90 transition-all cursor-pointer z-50 border border-white/30 shadow-xl"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>
        <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black">
          <video
            src={videoUrl}
            autoPlay
            loop
            muted={muted}
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute top-4 left-4 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md z-20 hover:scale-110 transition-transform cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col gap-2 z-20">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FF5722] text-white uppercase font-heading">
                Verified Campaign Asset
              </span>
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                <BadgeCheck className="w-3.5 h-3.5" />
                <span>Top Performer</span>
              </div>
            </div>
            <h4 className="font-heading font-bold text-base text-white">
              {title || "ViralCraft Creative Showcase"}
            </h4>
            <p className="text-xs text-gray-300 font-body">
              Rendered with 4K resolution, Hermozi-style animated captions, and
              custom sound design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}