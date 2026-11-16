"use client";

type LoaderArgs = { src: string; width: number; quality?: number };

// `src` is an Unsplash photo key such as "photo-1512453979798-5ea266f8880c".
export default function unsplashLoader({ src, width, quality }: LoaderArgs) {
  if (src.startsWith("/") || src.startsWith("http")) return src;
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality ?? 72}&auto=format&fit=crop`;
}
