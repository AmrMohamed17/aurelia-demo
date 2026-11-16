"use client";

import { useEffect, useRef, useState } from "react";

/** Headline that rises in word by word, each word masked by its own line box. */
export function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {text.split(" ").map((w, i) => (
          <span key={i}>
            <span className="split-word">
              <span style={{ animationDelay: `${delay + i * 85}ms` }}>{w}</span>
            </span>{" "}
          </span>
        ))}
      </span>
    </>
  );
}

/** Counts a figure such as "24,600" up from zero the first time it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const target = Number(value.replace(/,/g, ""));
  const isYear = !value.includes(",") && target > 1900 && target < 2100;
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<string>(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || isYear || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const fmt = new Intl.NumberFormat("en");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 4);
          setShown(fmt.format(Math.round(target * eased)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setShown("0");
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [isYear, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}
