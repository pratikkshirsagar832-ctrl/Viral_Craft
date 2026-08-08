'use client';

import { Play } from "lucide-react";
import { videos } from "@/lib/videos";

const ROW = [...videos, ...videos];

function VideoCard({ src, poster, name }: { src: string; poster: string; name: string }) {
  return (
    <div className="relative flex-shrink-0 group">
      <div className="rounded-full p-[4px] bg-gradient-to-br from-[#F4795A] via-[#FBE3C2] to-[#C8EFC0] shadow-[0_12px_45px_rgba(244,121,90,0.28)] transition-transform duration-500 group-hover:scale-105">
        <div className="relative w-36 h-36 sm:w-52 sm:h-52 rounded-full overflow-hidden bg-[#1A1A1A] card-spin">
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
            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
              <Play className="w-4 h-4 text-[#F4795A] fill-[#F4795A] ml-0.5" />
            </div>
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

      {/* Single row - scroll left */}
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-6 sm:gap-8 w-max">
          {ROW.map((video, i) => (
            <VideoCard key={`a${i}`} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
