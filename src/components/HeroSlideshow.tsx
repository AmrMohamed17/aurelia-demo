"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { communities } from "@/data/site";

const DURATION = 6500;

/** Full-bleed hero that cycles through the five community photographs. */
export function HeroSlides({ index }: { index: number }) {
  return (
    <div className="hero-media absolute inset-0 -z-10">
      {communities.map((c, i) => (
        <div key={c.slug} className={`hero-slide ${i === index ? "is-active" : ""}`} aria-hidden={i !== index}>
          <Image
            src={c.image}
            alt={c.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            loading={i === 0 ? undefined : "eager"}
            fetchPriority={i === 0 ? "high" : "low"}
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
    </div>
  );
}

export function useSlideshow(count: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % count), DURATION);
    return () => window.clearTimeout(t);
  }, [index, paused, count]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return { index, setIndex, paused, setPaused };
}

export default function HeroSlideshow({ children }: { children: React.ReactNode }) {
  const { index, setIndex, setPaused } = useSlideshow(communities.length);
  const active = communities[index];

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
      <HeroSlides index={index} />

      {/* Community picker: desktop column on the right */}
      <nav
        aria-label="Featured communities"
        className="enter absolute right-[clamp(1rem,4vw,3rem)] top-1/2 z-10 hidden w-60 -translate-y-1/2 xl:block"
        style={{ ["--d" as string]: 4 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <ul>
          {communities.map((c, i) => {
            const on = i === index;
            return (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={on || undefined}
                  className="group block w-full py-3 text-left"
                >
                  <span className={`block transition-colors duration-500 ${on ? "text-ivory" : "text-ivory/45 group-hover:text-ivory/80"}`}>
                    {c.name}
                  </span>
                  <span className="mt-2 block h-px w-full bg-ivory/20">
                    <span
                      key={on ? `on-${index}` : "off"}
                      className={`block h-full origin-left bg-gold ${on ? "slide-progress" : "scale-x-0"}`}
                      style={{ animationDuration: `${DURATION}ms` }}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <Link
          href={`/communities/${active.slug}`}
          className="label mt-6 inline-flex min-h-11 items-center gap-2 text-gold"
        >
          <span className="link-draw">Explore {active.name}</span> <ArrowRight size={14} aria-hidden />
        </Link>
      </nav>

      <div className="wrap relative z-10 pb-10 pt-36 md:pb-14">
        {/* Phones and tablets: slim progress bars */}
        <div className="enter mb-8 flex gap-2 xl:hidden" style={{ ["--d" as string]: 0 }}>
          {communities.map((c, i) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${c.name}`}
              className="flex h-11 flex-1 items-center"
            >
              <span className="block h-px w-full bg-ivory/25">
                <span
                  key={i === index ? `on-${index}` : "off"}
                  className={`block h-full origin-left bg-gold ${i === index ? "slide-progress" : i < index ? "" : "scale-x-0"}`}
                  style={{ animationDuration: `${DURATION}ms` }}
                />
              </span>
            </button>
          ))}
        </div>
        <p className="enter mb-4 text-gold-soft xl:hidden" style={{ ["--d" as string]: 0 }} aria-live="polite">
          {active.name} · {active.district}
        </p>
        {children}
      </div>
    </section>
  );
}
