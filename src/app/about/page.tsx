import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/components/Motion";
import PageHero from "@/components/PageHero";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Hom has built homes in Dubai since 2008, with 24,600 handed over across five communities.",
};

const milestones = [
  ["2008", "Founded in Dubai with a single tower on the creek."],
  ["2013", "First 1,000 homes handed over."],
  ["2017", "The Dunes Estate launches in Dubailand."],
  ["2021", "Palm Crescent villas sell out in its first weekend."],
  ["2024", "First branded tower, with Casa Lumen."],
  ["2026", "Harbour Bay phase two opens for registration."],
];

const principles = [
  ["Finish what we start", "Every Hom building since 2008 has been completed, and 70% were handed over early or on the contract date."],
  ["Build the neighbourhood first", "Schools, parks and shops open with the first homes, so early residents are not living on a building site."],
  ["Publish the plan", "Each project page shows its payment stages and fees in full, before you speak to anyone."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="photo-1518684079-3c830dcef090"
        alt="Aerial view of the Burj Al Arab and the Dubai coast"
        title="A Dubai developer since 2008"
        intro="We plan, build and manage whole communities, from the masterplan to the residents' association."
      />

      <section className="section bg-ivory" aria-labelledby="story-h">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="story-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
              Built in Dubai, for people who live here
            </h2>
            <p className="prose-body mt-6 max-w-xl text-muted">
              Hom started with one tower on Dubai Creek. Eighteen years on, we have handed over
              24,600 homes and have 9,200 more under construction across five communities.
            </p>
            <p className="prose-body mt-5 max-w-xl text-muted">
              About two thirds of our buyers live in their homes rather than rent them out, and that
              shapes what we build: larger kitchens, more storage, shaded streets and schools within
              walking distance.
            </p>
          </div>
          <div className="frame aspect-[4/3]">
            <Image
              src="photo-1600585154340-be6161a56a0c"
              alt="A family home lit from inside at dusk"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-20 text-ivory md:py-24" aria-labelledby="record-h">
        <div className="wrap">
          <h2 id="record-h" className="sr-only">
            Our track record
          </h2>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-3 border-l border-gold/40 pl-6">
                <dt className="text-mist">{s.label}</dt>
                <dd className="display text-[clamp(2.6rem,5vw,4rem)] leading-none text-gold">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-sand" aria-labelledby="principles-h">
        <div className="wrap">
          <h2 id="principles-h" className="display max-w-3xl text-[clamp(2.2rem,4.5vw,3.75rem)]">
            Three rules we build by
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {principles.map(([t, d]) => (
              <div key={t} className="border-t border-stone pt-6">
                <h3 className="display text-3xl">{t}</h3>
                <p className="mt-4 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory" aria-labelledby="history-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 id="history-h" className="display text-[clamp(2.2rem,4.5vw,3.75rem)]">
              Eighteen years in Dubai
            </h2>
            <Link href="/projects" className="btn btn-ink mt-10">
              See current projects <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <ol className="border-t border-stone">
            {milestones.map(([y, t]) => (
              <li key={y} className="grid grid-cols-[5.5rem_1fr] gap-6 border-b border-stone py-6 md:grid-cols-[8rem_1fr]">
                <span className="display text-3xl text-bronze">{y}</span>
                <span className="pt-1.5 text-lg">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
