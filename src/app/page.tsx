import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CommunityShowcase from "@/components/CommunityShowcase";
import EnquiryForm from "@/components/EnquiryForm";
import Marquee from "@/components/Marquee";
import { CountUp, SplitWords } from "@/components/Motion";
import PlanTimeline from "@/components/PlanTimeline";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import { communityBySlug, journal, projects, stats } from "@/data/site";
import { aed, longDate } from "@/lib/format";

export default function Home() {
  const launches = projects.filter((p) => p.launch);
  const branded = projects.filter((p) => p.branded);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
        <div className="hero-media absolute inset-0 -z-10">
          <Image
            src="photo-1512453979798-5ea266f8880c"
            alt="Downtown Dubai and the Burj Khalifa at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        </div>
        <div className="wrap pb-10 pt-36 md:pb-14">
          <h1 className="display max-w-[15ch] text-[clamp(2.9rem,8vw,7.25rem)]">
            <SplitWords text="Homes on Dubai’s water, dunes and skyline" delay={200} />
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="enter prose-body max-w-xl text-ivory/85" style={{ ["--d" as string]: 1 }}>
              Apartments, villas and penthouses in five master communities. Prices start at AED 1.2M,
              with payment plans that spread up to 80% over the build.
            </p>
            <div className="enter flex flex-wrap gap-3" style={{ ["--d" as string]: 2 }}>
              <Link href="/projects" className="btn btn-gold">
                Browse projects <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/contact" className="btn btn-line-light">
                Book a viewing
              </Link>
            </div>
          </div>
          <div className="enter mt-12" style={{ ["--d" as string]: 3 }}>
            <SearchBar />
          </div>
        </div>
      </section>

      <Marquee />

      {/* New launches */}
      <section className="section bg-ivory" aria-labelledby="launches-h">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 id="launches-h" className="display max-w-2xl text-[clamp(2.4rem,5vw,4.25rem)]">
              New launches this season
            </h2>
            <Link href="/projects?status=Off-plan" className="label link-draw self-start text-bronze md:self-auto">
              All off-plan projects
            </Link>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {launches.map((p) => (
              <ProjectCard key={p.slug} project={p} tall />
            ))}
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="section bg-sand" aria-labelledby="communities-h">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <h2 id="communities-h" className="display text-[clamp(2.4rem,5vw,4.25rem)]">
              Five places to live
            </h2>
            <p className="prose-body max-w-xl text-muted lg:pt-4">
              Each community is planned as a whole: schools, shops, parks and transport are built
              alongside the homes, not years after them.
            </p>
          </div>
          <div className="mt-14">
            <CommunityShowcase />
          </div>
        </div>
      </section>

      {/* Branded residences */}
      <section id="branded" className="section bg-ink text-ivory" aria-labelledby="branded-h">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="frame aspect-[4/5] lg:aspect-auto">
            <Image
              src="photo-1597659840241-37e2b9c2f55f"
              alt="Detail of a Downtown tower facade lit at night"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center lg:py-10">
            <h2 id="branded-h" className="display text-[clamp(2.4rem,5vw,4.25rem)]">
              Residences designed with Maison Verre and Casa Lumen
            </h2>
            <p className="prose-body mt-6 max-w-lg text-mist">
              Two design houses shape every room in these buildings, from the glass and lighting to
              the furniture. Homes are handed over finished and ready to live in or let.
            </p>
            <ul className="mt-12 border-t border-ink-3">
              {branded.map((p) => {
                const c = communityBySlug(p.community);
                return (
                  <li key={p.slug} className="border-b border-ink-3">
                    <Link href={`/projects/${p.slug}`} className="group flex items-center justify-between gap-6 py-6">
                      <span>
                        <span className="text-sm text-gold">with {p.branded}</span>
                        <span className="display mt-1 block text-3xl">
                          <span className="link-draw">{p.name}</span>
                        </span>
                        <span className="mt-1 block text-mist">
                          {c?.district} · from {aed(p.priceFrom)}
                        </span>
                      </span>
                      <ArrowRight
                        size={22}
                        strokeWidth={1.25}
                        aria-hidden
                        className="shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section id="invest" className="section bg-ivory" aria-labelledby="invest-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 id="invest-h" className="display text-[clamp(2.4rem,5vw,4.25rem)]">
              What buying in Dubai involves
            </h2>
            <p className="prose-body mt-6 max-w-xl text-muted">
              Foreign buyers can own property outright in Dubai&rsquo;s freehold areas, and all five
              of our communities are in them. These are the numbers most buyers ask about first.
            </p>
            <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {[
                ["0%", "Personal income tax", "No tax on salaries or on rental income from your home."],
                ["10 years", "Golden Visa", "Renewable residency for owners of property worth AED 2M or more."],
                ["100%", "Freehold ownership", "Title in your own name, with no local partner needed."],
                ["4%", "Transfer fee", "Paid once to the Dubai Land Department when title is registered."],
              ].map(([n, t, d]) => (
                <div key={t} className="border-t border-stone pt-5">
                  <dt>
                    <span className="display block text-5xl text-bronze">{n}</span>
                    <span className="mt-3 block font-medium">{t}</span>
                  </dt>
                  <dd className="mt-1 text-muted">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="frame aspect-[4/5] self-stretch lg:aspect-auto">
            <Image
              src="photo-1528702748617-c64d49f918af"
              alt="Camels walking on a Dubai beach with towers behind"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Payment plan */}
      <section className="section bg-sand" aria-labelledby="plan-h">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
            <h2 id="plan-h" className="display text-[clamp(2.4rem,5vw,4.25rem)]">
              How a 60/40 payment plan works
            </h2>
            <div className="lg:pt-4">
              <p className="prose-body max-w-xl text-muted">
                On an off-plan home you pay in stages as the building rises, and settle the rest when
                you collect the keys. Some launches use 70/30, 80/20 or 1% a month; each project page
                shows its own plan.
              </p>
              <Link href="/projects?status=Off-plan" className="btn btn-line-dark mt-8">
                See off-plan homes <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
          <div className="mt-16">
            <PlanTimeline plan="60/40" />
          </div>
        </div>
      </section>

      {/* Track record */}
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

      {/* Journal */}
      <section id="journal" className="section bg-ivory" aria-labelledby="journal-h">
        <div className="wrap">
          <h2 id="journal-h" className="display text-[clamp(2.4rem,5vw,4.25rem)]">
            From the journal
          </h2>
          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {journal.map((j) => (
              <Link key={j.title} href={j.href} className="group lift block">
                <div className="frame aspect-[3/2]">
                  <Image src={j.image} alt={j.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <time dateTime={j.date} className="mt-5 block text-sm text-muted">
                  {longDate(j.date)}
                </time>
                <h3 className="display mt-2 text-2xl">
                  <span className="link-draw">{j.title}</span>
                </h3>
                <p className="mt-3 text-muted">{j.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Register interest */}
      <section id="register" className="section bg-ink text-ivory" aria-labelledby="register-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <h2 id="register-h" className="display text-[clamp(2.4rem,5vw,4.25rem)]">
              Talk to a sales advisor
            </h2>
            <p className="prose-body mt-6 max-w-md text-mist">
              Tell us what you are looking for and we will send floor plans, prices and the payment
              plan for the homes that fit. Viewings run daily at the Dubai Harbour sales gallery.
            </p>
            <dl className="mt-10 space-y-5">
              <div>
                <dt className="text-sm text-mist">Email</dt>
                <dd>
                  <a href="mailto:sales@hom.example" className="link-draw text-lg">
                    sales@hom.example
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-mist">Sales gallery</dt>
                <dd className="text-lg">Dubai Harbour, open 9:00 to 19:00, Monday to Saturday</dd>
              </div>
            </dl>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
