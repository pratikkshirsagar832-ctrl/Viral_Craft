import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function graphic(name: string) {
  return `/graphics/${name}.jpg`;
}

export function vid(n: number) {
  return `/videos/video-${n}.mp4`;
}