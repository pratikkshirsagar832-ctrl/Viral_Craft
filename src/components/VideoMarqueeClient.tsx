'use client';

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { videos } from "@/lib/videos";

const SPARKLES = [
  { left: "8%", top: "16%", size: 6, delay: "0s" },
  { left: "16%", top: "72%", size: 4, delay: "0.8s" },
  { left: "28%", top: "10%", size: 5, delay: "1.4s" },
  { left: "74%", top: "8%", size: 5, delay: "0.4s" },
  { left: "86%", top: "60%", size: 6, delay: "1.1s" },
  { left: "66%", top: "84%", size: 4, delay: "1.8s" },
  { left: "40%", top: "90%", size: 5, delay: "0.6s" },
];

export default function VideoMarqueeClient() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pausedRef = useRef(false);
  const radiusRef = useRef(225);
  const [radius, setRadius] = useState(225);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const r = w < 640 ? 120 : w < 1024 ? 180 : 225;
      radiusRef.current = r;
      setRadius(r);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || videos.length === 0) return;

    let raf = 0;
    let last = performance.now();
    let a = 0;

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (pausedRef.current) {
        last = now;
        return;
      }
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      a += dt * 0.85;

      const r = radiusRef.current;
      for (let i = 0; i < videos.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const ang = a + (i * 2 * Math.PI) / videos.length;
        const x = Math.sin(ang) * r;
        const depth = Math.cos(ang);
        const scale = 0.5 + ((depth + 1) / 2) * 0.62;
        const opacity = 0.3 + ((depth + 1) / 2) * 0.7;
        el.style.transform = `translate(-50%, -50%) translateX(${x.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(Math.round((depth + 1) * 50));
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const count = videos.length;

  if (count === 0) {
    return (
      <div className="text-center py-12 text-[#6B6B65] text-sm">
        No videos found. Drop .mp4 files into /public/videos.
      </div>
    );
  }

  const cardSize = radius * 0.72;

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ height: radius * 2 + cardSize + 72 }}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => (pausedRef.current = false)}
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 w-[80%] h-[70%] max-w-[760px] rounded-full bg-[radial-gradient(circle,rgba(244,121,90,0.14)_0%,rgba(252,217,168,0.12)_45%,transparent_70%)] animate-pulse-orb pointer-events-none" />
      <div className="absolute left-[6%] top-[12%] w-36 h-36 rounded-full bg-[#C8EFC0]/50 blur-3xl animate-float-soft pointer-events-none" />
      <div className="absolute right-[4%] bottom-[10%] w-44 h-44 rounded-full bg-[#FCD9A8]/60 blur-3xl animate-float-soft-rev pointer-events-none" />

      {/* Orbit tracks */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-[#1A1A1A]/10"
        style={{ width: radius * 2, height: radius * 2, transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-[#F4795A]/20"
        style={{ width: radius * 2 + cardSize * 1.25, height: radius * 2 + cardSize * 1.25, transform: "translate(-50%, -50%)" }}
      />

      {/* Sparkles */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#F4795A]/70 animate-twinkle pointer-events-none"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
        />
      ))}

      {/* Video cards orbiting */}
      {videos.map((video, i) => {
        const initial = (i * 2 * Math.PI) / count;
        const x0 = Math.sin(initial) * radius;
        const d0 = Math.cos(initial);
        const s0 = 0.5 + ((d0 + 1) / 2) * 0.62;
        return (
          <div
            key={video.name}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{
              width: cardSize,
              height: cardSize,
              transform: `translate(-50%, -50%) translateX(${x0.toFixed(1)}px) scale(${s0.toFixed(3)})`,
              opacity: 0.3 + ((d0 + 1) / 2) * 0.7,
              zIndex: Math.round((d0 + 1) * 50),
            }}
          >
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-[#F4795A] via-[#FBE3C2] to-[#C8EFC0] shadow-[0_10px_36px_rgba(244,121,90,0.22)] group">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1A1A1A]">
                <video
                  src={video.src}
                  poster={video.poster}
                  muted
                  autoPlay
                  playsInline
                  loop
                  preload="metadata"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 rounded-full bg-[#1A1A1A]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 text-[#F4795A] fill-[#F4795A] ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-semibold text-[#1A1A1A] shadow-md border border-[#EAE3D3]">
                {video.name.replace(/-/g, " ").toUpperCase()}
              </div>
            </div>
          </div>
        );
      })}

      {/* Center badge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[25] pointer-events-none">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/85 backdrop-blur-md border border-white shadow-[0_10px_30px_rgba(26,26,26,0.18)] flex items-center justify-center animate-bounce-soft">
          <Play className="w-6 h-6 sm:w-7 sm:h-7 text-[#F4795A] fill-[#F4795A] ml-0.5" />
        </div>
      </div>
    </div>
  );
}
