import Image from "next/image";
import type { ReactNode } from "react";
import { SplitWords } from "./Motion";

type Props = {
  image: string;
  alt: string;
  eyebrow?: ReactNode;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  tall?: boolean;
};

export default function PageHero({ image, alt, eyebrow, title, intro, children, tall }: Props) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-ink text-ivory ${
        tall ? "min-h-[100svh]" : "min-h-[72svh]"
      }`}
    >
      <div className="hero-media absolute inset-0 -z-10">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
      </div>
      <div className={`wrap pt-40 md:pb-20 ${tall ? "pb-28" : "pb-14"}`}>
        {eyebrow && (
          <p className="enter text-gold-soft" style={{ ["--d" as string]: 0 }}>
            {eyebrow}
          </p>
        )}
        <h1 className="display mt-3 max-w-5xl text-[clamp(2.6rem,7vw,6rem)]">
          <SplitWords text={title} delay={120} />
        </h1>
        {intro && (
          <p className="enter prose-body mt-6 max-w-2xl text-ivory/85" style={{ ["--d" as string]: 2 }}>
            {intro}
          </p>
        )}
        {children && (
          <div className="enter mt-10" style={{ ["--d" as string]: 3 }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
