import { communities } from "@/data/site";

/** Slow band of community names between the hero and the listings. Pauses on hover. */
export default function Marquee() {
  const items = communities.flatMap((c) => [c.name, c.district]);
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={i} className="flex items-center">
          <span className={`display whitespace-nowrap px-8 text-[clamp(1.75rem,3.2vw,2.75rem)] ${i % 2 ? "text-mist" : "text-ivory"}`}>
            {t}
          </span>
          <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden border-y border-ink-3 bg-ink py-7" aria-label="Our communities">
      <div className="marquee-track flex w-max">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
