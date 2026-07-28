export interface Video {
  src: string;
  poster: string;
  name: string;
}

export const videos: Video[] = [
  { src: "/videos/video-1.mp4", poster: "/videos/video-1.jpg", name: "video-1" },
  { src: "/videos/video-2.mp4", poster: "/videos/video-2.jpg", name: "video-2" },
  { src: "/videos/video-3.mp4", poster: "/videos/video-3.jpg", name: "video-3" },
  { src: "/videos/video-4.mp4", poster: "/videos/video-4.jpg", name: "video-4" },
  { src: "/videos/video-5.mp4", poster: "/videos/video-5.jpg", name: "video-5" },
  { src: "/videos/video-6.mp4", poster: "/videos/video-6.jpg", name: "video-6" },
  { src: "/videos/video-7.mp4", poster: "/videos/video-7.jpg", name: "video-7" },
];
