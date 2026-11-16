import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import PlanTimeline from "@/components/PlanTimeline";
import ProjectCard from "@/components/ProjectCard";
import { communityBySlug, projectBySlug, projects, projectsIn } from "@/data/site";
import { aed, bedsLabel, sqft } from "@/lib/format";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = projectBySlug(slug);
  if (!p) return {};
  return { title: p.name, description: `${p.summary} From ${aed(p.priceFrom)}.` };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  const c = communityBySlug(p.community)!;
  const nearby = [...projectsIn(c.slug), ...projects].filter(
    (x, i, arr) => x.slug !== p.slug && arr.findIndex((y) => y.slug === x.slug) === i,
  ).slice(0, 3);

  const facts: [string, string][] = [
    ["From", aed(p.priceFrom)],
    ["Homes", `${bedsLabel(p.beds)} ${p.type.toLowerCase()}s`],
    ["Size", sqft(p.size)],
    ["Handover", p.handover],
    ["Payment plan", p.plan],
  ];

  return (
    <>
      <PageHero
        tall
        image={p.images[0].src}
        alt={p.images[0].alt}
        eyebrow={
          <Link href={`/communities/${c.slug}`} className="link-draw">
            {c.name}, {c.district}
          </Link>
        }
        title={p.name}
        intro={p.summary}
      >
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ivory/25 pt-6 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt className="text-sm text-mist">{k}</dt>
              <dd className="mt-1 text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Overview */}
      <section className="section bg-ivory" aria-labelledby="overview-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2 id="overview-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
              {p.branded ? `Interiors by ${p.branded}` : `About ${p.name}`}
            </h2>
            {p.description.map((d) => (
              <p key={d} className="prose-body mt-6 max-w-2xl text-muted">
                {d}
              </p>
            ))}
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#enquire" className="btn btn-ink">
                Request floor plans <ArrowRight size={16} aria-hidden />
              </a>
              <Link href={`/communities/${c.slug}`} className="btn btn-line-dark">
                Explore {c.name}
              </Link>
            </div>
          </div>
          <div>
            <h3 className="label text-bronze">In every home</h3>
            <ul className="mt-5 border-t border-stone">
              {p.amenities.map((a) => (
                <li key={a} className="border-b border-stone py-4 text-lg">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">
              Status: {p.status === "Ready" ? "complete and ready to move in" : "off-plan, under construction"}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory pb-24" aria-label={`${p.name} photographs`}>
        <div className="wrap grid gap-4 md:grid-cols-[1.4fr_1fr] md:gap-6">
          {p.images.slice(1).map((img, i) => (
            <div key={img.src} className={`frame ${i === 0 ? "aspect-[4/3]" : "aspect-[4/3] md:aspect-auto"}`}>
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Plan */}
      <section className="section bg-sand" aria-labelledby="plan-h">
        <div className="wrap">
          <h2 id="plan-h" className="display max-w-3xl text-[clamp(2.2rem,4.5vw,3.75rem)]">
            {p.plan === "Post-handover" ? "Pay part of the price after you move in" : `The ${p.plan} payment plan`}
          </h2>
          <p className="prose-body mt-6 max-w-2xl text-muted">
            On a home at the starting price of {aed(p.priceFrom)}, these are the stages. The 4% Dubai
            Land Department fee is paid on top, at registration.
          </p>
          <div className="mt-14">
            <PlanTimeline plan={p.plan} />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section bg-ivory" aria-labelledby="loc-h">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
            <h2 id="loc-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
              Where it is
            </h2>
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:pt-4">
              {c.highlights.map((h) => (
                <li key={h} className="border-t border-stone py-4 text-muted">
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12">
            <MapEmbed lat={c.map.lat} lon={c.map.lon} title={`Map of ${c.name}, ${c.district}`} />
          </div>
        </div>
      </section>

      {/* Enquire */}
      <section id="enquire" className="section bg-ink text-ivory" aria-labelledby="enq-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <h2 id="enq-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
              Ask about {p.name}
            </h2>
            <p className="prose-body mt-6 max-w-md text-mist">
              We will email floor plans, the current price list and which homes are still available.
            </p>
          </div>
          <EnquiryForm project={p.slug} />
        </div>
      </section>

      {/* More */}
      <section className="section bg-ivory" aria-labelledby="more-h">
        <div className="wrap">
          <h2 id="more-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
            More homes to consider
          </h2>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((x) => (
              <ProjectCard key={x.slug} project={x} />
            ))}
          </div>
        </div>
      </section>

      {/* Phone action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-ink-3 bg-ink px-4 py-3 text-ivory md:hidden">
        <p className="text-sm leading-tight">
          <span className="block text-mist">From</span>
          {aed(p.priceFrom)}
        </p>
        <a href="#enquire" className="btn btn-gold">
          Enquire
        </a>
      </div>
    </>
  );
}
