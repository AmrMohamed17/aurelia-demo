import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import { communities, communityBySlug, projectsIn } from "@/data/site";
import { aed } from "@/lib/format";

export function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/communities/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const c = communityBySlug(slug);
  if (!c) return {};
  return { title: `${c.name}, ${c.district}`, description: c.tagline };
}

export default async function CommunityPage(props: PageProps<"/communities/[slug]">) {
  const { slug } = await props.params;
  const c = communityBySlug(slug);
  if (!c) notFound();
  const list = projectsIn(c.slug);
  const from = Math.min(...list.map((p) => p.priceFrom));

  return (
    <>
      <PageHero tall image={c.image} alt={c.alt} eyebrow={c.district} title={c.name} intro={c.tagline}>
        <div className="flex flex-wrap gap-3">
          <a href="#homes" className="btn btn-gold">
            See {list.length} projects <ArrowRight size={16} aria-hidden />
          </a>
          <Link href="/contact" className="btn btn-line-light">
            Book a viewing
          </Link>
        </div>
      </PageHero>

      <section className="section bg-ivory" aria-labelledby="about-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2 id="about-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
              Life in {c.name}
            </h2>
            <p className="prose-body mt-6 max-w-2xl text-muted">{c.intro}</p>
            <p className="mt-8 text-lg">Homes from {aed(from)}</p>
          </div>
          <ul className="border-t border-stone">
            {c.highlights.map((h) => (
              <li key={h} className="border-b border-stone py-5 text-lg">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="homes" className="section bg-sand" aria-labelledby="homes-h">
        <div className="wrap">
          <h2 id="homes-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
            Homes in {c.name}
          </h2>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory" aria-labelledby="map-h">
        <div className="wrap">
          <h2 id="map-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
            On the map
          </h2>
          <div className="mt-12">
            <MapEmbed lat={c.map.lat} lon={c.map.lon} title={`Map of ${c.name}, ${c.district}`} />
          </div>
        </div>
      </section>
    </>
  );
}
