"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { communities, projectsIn } from "@/data/site";

// Hovering or focusing a community name swaps the photograph beside the list.
export default function CommunityShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <ol className="border-t border-stone">
        {communities.map((c, i) => {
          const on = i === active;
          return (
            <li key={c.slug} className="border-b border-stone">
              <Link
                href={`/communities/${c.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex items-center justify-between gap-6 py-6 lg:py-7"
              >
                <span>
                  <span
                    className={`display block text-[clamp(2rem,3.6vw,3.25rem)] transition-colors duration-300 ${
                      on ? "text-ink" : "text-ink/45"
                    }`}
                  >
                    {c.name}
                  </span>
                  <span className="mt-1 block text-muted">
                    {c.district} · {projectsIn(c.slug).length} projects
                  </span>
                </span>
                <ArrowRight
                  size={24}
                  strokeWidth={1.25}
                  aria-hidden
                  className={`shrink-0 text-bronze transition-[opacity,transform] duration-300 ${
                    on ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                  }`}
                />
              </Link>
              {/* Phones get the picture inline, since there is no hover. */}
              <Link href={`/communities/${c.slug}`} className="frame mb-6 block aspect-[16/10] lg:hidden" tabIndex={-1} aria-hidden>
                <Image src={c.image} alt="" fill sizes="100vw" className="object-cover" />
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="relative hidden lg:block">
        <div className="frame aspect-[4/5] max-h-[44rem] w-full">
          {communities.map((c, i) => (
            <Image
              key={c.slug}
              src={c.image}
              alt={c.alt}
              fill
              sizes="50vw"
              className={`swap object-cover ${i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-8 pt-24 text-ivory">
            <p className="max-w-sm text-lg">{communities[active].tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
