'use client';

import { Play } from "lucide-react";
import { videos } from "@/lib/videos";

const ROW = [...videos, ...videos];

interface VideoCardProps {
  src: string;
  poster: string;
  name: string;
  big?: boolean;
}

function VideoCard({ src, poster, name, big }: VideoCardProps) {
  return (
    <div className="relative flex-shrink-0 group">
      <div
        className={`rounded-full p-[3px] bg-gradient-to-br from-[#F4795A] via-[#FBE3C2] to-[#C8EFC0] shadow-[0_10px_35px_rgba(244,121,90,0.25)] transition-transform duration-500 group-hover:scale-105 ${
          big ? "w-28 h-28 sm:w-36 sm:h-36" : "w-24 h-24 sm:w-32 sm:h-32"
        }`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1A1A1A]">
          <video
            src={src}
            poster={poster}
            muted
            autoPlay
            playsInline
            loop
            preload="metadata"
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 rounded-full bg-[#1A1A1A]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
              <Play className="w-4 h-4 text-[#F4795A] fill-[#F4795A] ml-0.5" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 backdrop-blur px-3 py-0.5 text-[10px] font-semibold text-[#1A1A1A] shadow-md border border-[#EAE3D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name.replace(/-/g, " ").toUpperCase()}
      </div>
    </div>
  );
}

export default function VideoMarqueeClient() {
  if (videos.length === 0) {
    return (
      <div className="text-center py-12 text-[#6B6B65] text-sm">
        No videos found. Drop .mp4 files into /public/videos.
      </div>
    );
  }

  return (
    <div className="relative py-8 sm:py-10">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#F8F1E3] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#F8F1E3] to-transparent" />

      {/* Row 1 - scroll left */}
      <div className="overflow-hidden pb-7">
        <div className="marquee-track flex gap-5 sm:gap-6 w-max">
          {ROW.map((video, i) => (
            <VideoCard key={`a${i}`} {...video} big />
          ))}
        </div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="overflow-hidden">
        <div className="marquee-track-reverse flex gap-5 sm:gap-6 w-max">
          {[...ROW].reverse().map((video, i) => (
            <VideoCard key={`b${i}`} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
