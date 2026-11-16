import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { communities, projectsIn } from "@/data/site";
import { aed } from "@/lib/format";

export const metadata: Metadata = {
  title: "Communities",
  description: "Five Hom master communities: Dubai Harbour, Dubailand, Dubai Creek, Palm Jumeirah and Downtown Dubai.",
};

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        image="photo-1489516408517-0c0a15662682"
        alt="Aerial view of Palm Jumeirah over turquoise water"
        title="From the marina to the desert edge"
        intro="Each community has its own schools, shops, parks and transport, planned and built alongside the homes."
      />
      <section className="bg-ivory" aria-label="Communities">
        <div className="wrap divide-y divide-stone">
          {communities.map((c, i) => {
            const list = projectsIn(c.slug);
            const from = Math.min(...list.map((p) => p.priceFrom));
            return (
              <article key={c.slug} className="grid gap-10 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-28">
                <Link
                  href={`/communities/${c.slug}`}
                  className={`group frame block aspect-[4/3] ${i % 2 ? "md:order-2" : ""}`}
                  tabIndex={-1}
                  aria-hidden
                >
                  <Image src={c.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </Link>
                <div>
                  <p className="text-muted">{c.district}</p>
                  <h2 className="display mt-2 text-[clamp(2.4rem,5vw,4rem)]">{c.name}</h2>
                  <p className="prose-body mt-5 max-w-lg text-muted">{c.intro}</p>
                  <p className="mt-6">
                    {list.length} projects · homes from {aed(from)}
                  </p>
                  <Link href={`/communities/${c.slug}`} className="btn btn-line-dark mt-8">
                    Explore {c.name} <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
