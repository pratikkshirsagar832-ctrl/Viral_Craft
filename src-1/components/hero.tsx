"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CircleCheckBig,
  Music2,
  Play,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
} from "lucide-react";
import { CLIENT_AVATARS, HERO_SLIDES } from "@/lib/site-data";
import { cn, graphic } from "@/lib/utils";

function HeroConfetti() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const fire = confetti.create(canvas, { resize: true });
    const bursts = [
      { particleCount: 60, spread: 70, origin: { x: 0.3, y: 0.2 } },
      { particleCount: 40, spread: 60, origin: { x: 0.7, y: 0.1 } },
      { particleCount: 50, spread: 75, origin: { x: 0.5, y: 0.35 } },
    ];
    const timers = bursts.map((b, i) =>
      setTimeout(() => {
        try {
          fire(b);
        } catch {}
      }, 250 + i * 450),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10 opacity-70 scale-110 pointer-events-none select-none">
      <canvas ref={ref} className="w-full h-full min-h-[350px]" />
    </div>
  );
}

export default function Hero({
  onNavigate,
  onOpenVideo,
}: {
  onNavigate: (page: string) => void;
  onOpenVideo: (url: string, title: string) => void;
}) {
  const [index, setIndex] = useState(3);
  const [muted, setMuted] = useState(true);
  const screenRef = useRef<HTMLDivElement>(null);
  const touchY = useRef<number | null>(null);

  const next = useCallback(() => setIndex((v) => (v + 1) % HERO_SLIDES.length), []);
  const prev = useCallback(
    () => setIndex((v) => (v - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
    [],
  );

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    let lastWheel = 0;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const now = Date.now();
      if (now - lastWheel < 350) return;
      if (e.deltaY > 10) {
        next();
        lastWheel = now;
      } else if (e.deltaY < -10) {
        prev();
        lastWheel = now;
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchY.current !== null) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchY.current === null) return;
      const dy = touchY.current - e.changedTouches[0].clientY;
      if (dy > 25) next();
      else if (dy < -25) prev();
      touchY.current = null;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  return (
    <section className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center bg-[#F8F7F5]">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#FF5722]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#0F172A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#EAEAEA] shadow-[0_8px_30px_rgba(255,87,34,0.10)] w-fit">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#FF5722] opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#FF5722]" />
              </span>
              <Sparkles className="w-4 h-4 text-[#FF5722]" />
              <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider font-heading">
                India&apos;s #1 AI &amp; UGC Creative ad Agency
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[#111111] leading-[1.12] tracking-tight">
              <span className="block">
                Scroll-Stopping{" "}
                <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#E64A19] to-[#0F172A]">
                  AI &amp; UGC Videos
                </span>
              </span>
              <span className="block mt-1 sm:mt-2">
                That Drive Real Sales{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#E64A19]">
                  For Your Brand
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#6E6E73] font-body font-normal leading-relaxed max-w-2xl">
              We turn ordinary products into scroll-stopping content — cinematic
              AI films, authentic UGC, CGI &amp; VFX and performance creatives
              engineered to scale your brand.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-[#111111]">
              {["48-Hour Fast Delivery", "50K+ Creator Network", "Unlimited Revisions"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-[#FF5722]" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="group btn-shine bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-semibold text-base py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer shadow-[0_8px_30px_rgba(34,197,94,0.25)]"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate("portfolio")}
                className="glass-card hover:bg-white text-[#111111] font-semibold text-base py-4 px-8 rounded-full flex items-center justify-center gap-3 border border-[#EAEAEA] hover:border-[#FF5722]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-xs"
              >
                <Play className="w-4 h-4 text-[#FF5722] fill-[#FF5722]" />
                <span>View Portfolio</span>
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[#EAEAEA]/80">
              <div className="flex -space-x-2">
                {CLIENT_AVATARS.map((a) => (
                  <div
                    key={a.id}
                    className="rounded-full p-[2px] bg-gradient-to-br from-[#FF5722] to-[#E64A19] shadow-md"
                  >
                    <img
                      src={graphic(a.id)}
                      alt={a.alt}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-[#111111] ml-1">
                    4.9 / 5.0
                  </span>
                </div>
                <span className="text-xs text-[#6E6E73]">
                  Trusted by 7,000+ Brands &amp; Creators
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            <HeroConfetti />

            <div
              ref={screenRef}
              className="relative w-full max-w-[290px] sm:max-w-[320px] aspect-[9/18] rounded-[48px] p-3 bg-[#0F172A] border-4 border-white/80 shadow-[0_25px_60px_rgba(15,23,42,0.35)] hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 flex items-center justify-center pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-slate-800 mr-2" />
                <div className="w-2 h-2 rounded-full bg-blue-900" />
              </div>

              <div className="w-full h-full rounded-[38px] overflow-hidden relative bg-black select-none cursor-grab active:cursor-grabbing">
                <div
                  className="w-full h-full flex flex-col transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${index * 100}%)` }}
                >
                  {HERO_SLIDES.map((slide, i) => (
                    <div key={i} className="w-full h-full shrink-0 relative bg-black">
                      <video
                        src={slide.videoSrc}
                        autoPlay
                        loop
                        muted={muted}
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-14 left-3 sm:left-4 glass-card-dark p-2 rounded-2xl border border-white/20 z-20 flex items-center gap-2 shadow-lg animate-bounce">
                        <div className="w-7 h-7 rounded-xl bg-[#FF5722] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                          {slide.badgeValue}
                        </div>
                        <div className="flex flex-col text-white text-[9px] sm:text-[10px]">
                          <span className="font-semibold">{slide.badgeTitle}</span>
                          <span className="text-white/60">{slide.badgeSub}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          onOpenVideo(slide.videoSrc, `${slide.badgeValue} ${slide.badgeTitle}`)
                        }
                        aria-label="Play video"
                        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#FF5722]/90 text-white flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                      >
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </button>
                      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/50 to-transparent text-white z-20 flex flex-col gap-1 text-left">
                        <div className="flex items-center gap-1.5">
                          <Music2 className="w-3 h-3 text-[#FF5722]" />
                          <span className="text-[10px] font-semibold">
                            {slide.handle}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-200 line-clamp-2 font-medium">
                          {slide.caption}
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-white/10 mt-0.5">
                          <span>{slide.statLabel}</span>
                          <span>{slide.statRating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  aria-label={muted ? "Unmute video" : "Mute video"}
                  className="absolute top-12 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-md z-30 hover:scale-110 transition-transform cursor-pointer"
                >
                  {muted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>

                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous video"
                    className="p-1.5 rounded-full bg-black/50 hover:bg-[#FF5722] text-white backdrop-blur-md transition-all cursor-pointer shadow-md"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex flex-col gap-1.5 my-1">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Go to video ${i + 1}`}
                        className={cn(
                          "w-1.5 rounded-full transition-all duration-300 cursor-pointer",
                          i === index
                            ? "h-5 bg-[#FF5722]"
                            : "h-1.5 bg-white/40 hover:bg-white/70",
                        )}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next video"
                    className="p-1.5 rounded-full bg-black/50 hover:bg-[#FF5722] text-white backdrop-blur-md transition-all cursor-pointer shadow-md"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-10 glass-card p-3 rounded-2xl border border-[#EAEAEA] shadow-xl z-30 hidden sm:flex items-center gap-3 bg-white/90">
                <div className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs">
                  š¡ 48h
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#111111]">
                    Ultra-Fast Delivery
                  </span>
                  <span className="text-[10px] text-[#6E6E73]">
                    Script to Final Cut
                  </span>
                </div>
              </div>

              <div className="absolute -top-6 -right-10 glass-card p-3 rounded-2xl border border-[#EAEAEA] shadow-xl z-30 hidden sm:flex items-center gap-3 bg-white/90">
                <div className="w-9 h-9 rounded-xl bg-[#FF5722] text-white flex items-center justify-center font-bold text-xs">
                  50K+
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#111111]">Top Creators</span>
                  <span className="text-[10px] text-[#6E6E73]">India &amp; Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
