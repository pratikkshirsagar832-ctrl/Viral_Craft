'use client';

import { useRef } from "react";
import { videos } from "@/lib/videos";

export default function VideoMarqueeClient() {
  const trackRef = useRef<HTMLDivElement>(null);

  if (videos.length === 0) {
    return (
      <div className="text-center py-12 text-[#6B6B65] text-sm">
        No videos found. Drop .mp4 files into /public/videos.
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden py-4">
      <div ref={trackRef} className="marquee-track flex gap-3">
        {[...videos, ...videos].map((video, i) => (
          <div
            key={`${i}`}
            className="flex-shrink-0 w-[120px] sm:w-[135px] md:w-[150px] h-[210px] sm:h-[240px] md:h-[260px] rounded-2xl overflow-hidden shadow-md bg-[#EAE3D3] block relative group"
          >
            <video
              src={video.src}
              poster={video.poster}
              muted
              autoPlay
              playsInline
              loop
              preload="metadata"
              className="w-full h-full object-cover pointer-events-none"
              ref={(el) => { if (el) el.playbackRate = 1.5; }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
