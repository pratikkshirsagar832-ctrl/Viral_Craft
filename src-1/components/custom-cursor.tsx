"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [pulse, setPulse] = useState(0);
  const touchMode = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    touchMode.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
      setDot((prev) => ({
        x: prev.x + (e.clientX - prev.x) * 0.3,
        y: prev.y + (e.clientY - prev.y) * 0.3,
      }));
    };
    const onDown = () => setActive(true);
    const onUp = () => setActive(false);
    const onLeave = () => setVisible(false);
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      setVisible(true);
      setPos({ x: t.clientX, y: t.clientY });
      setDot({ x: t.clientX, y: t.clientY });
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      setVisible(true);
      setPos({ x: t.clientX, y: t.clientY });
      setDot((prev) => ({
        x: prev.x + (t.clientX - prev.x) * 0.3,
        y: prev.y + (t.clientY - prev.y) * 0.3,
      }));
    };
    const onTouchEnd = () => {
      setActive(true);
      window.setTimeout(() => {
        setActive(false);
        setVisible(false);
      }, 220);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setPulse((p) => p + 1);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none fixed z-[100] w-8 h-8 rounded-full border-2 border-[#FF5722]/70 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: pos.x - 16,
          top: pos.y - 16,
          transform: `scale(${active ? 0.75 : 1}) rotate(${active ? 45 : 0}deg)`,
        }}
      >
        <span
          className="absolute inset-0 rounded-full border border-[#FF5722]/30 animate-spin-slow"
          style={{ animationDuration: "3s" }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[100] w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#FF8A00] transition-opacity duration-200"
        style={{
          left: dot.x - 5,
          top: dot.y - 5,
          opacity: visible ? 1 : 0,
          transform: `scale(${active ? 2 : 1})`,
        }}
      />
      {pulse > 0 && (
        <div
          key={pulse}
          aria-hidden
          className="pointer-events-none fixed z-[99] w-12 h-12 rounded-full border-2 border-[#FF5722]/50 animate-cursor-ping"
          style={{ left: pos.x - 24, top: pos.y - 24 }}
        />
      )}
    </>
  );
}