'use client';

import { Play } from "lucide-react";
import { videos } from "@/lib/videos";

const ROW = [...videos, ...videos];

function VideoCard({ src, poster, name }: { src: string; poster: string; name: string }) {
  return (
    <div className="relative flex-shrink-0 group">
      <div className="rounded-2xl p-[3px] bg-gradient-to-br from-[#F4795A] via-[#FBE3C2] to-[#C8EFC0] shadow-[0_12px_40px_rgba(244,121,90,0.22)] transition-transform duration-500 group-hover:scale-[1.04]">
        <div className="relative w-36 h-64 sm:w-44 sm:h-[19.5rem] lg:w-52 lg:h-[23rem] rounded-2xl overflow-hidden bg-[#1A1A1A]">
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
          <div className="absolute inset-0 bg-[#1A1A1A]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
              <Play className="w-4 h-4 text-[#F4795A] fill-[#F4795A] ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-semibold text-[#1A1A1A] shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {name.replace(/-/g, " ").toUpperCase()}
          </div>
        </div>
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
    <div className="relative py-10 sm:py-14">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 z-10 bg-gradient-to-r from-[#F8F1E3] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 z-10 bg-gradient-to-l from-[#F8F1E3] to-transparent" />

      {/* Single row - continuous scroll */}
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-5 sm:gap-7 w-max">
          {ROW.map((video, i) => (
            <VideoCard key={`a${i}`} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
