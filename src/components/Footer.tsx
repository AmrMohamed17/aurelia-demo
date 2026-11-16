import Link from "next/link";
import { communities } from "@/data/site";
import Logo from "./Logo";

const columns = [
  {
    title: "Communities",
    links: communities.map((c) => ({ href: `/communities/${c.slug}`, label: c.name })),
  },
  {
    title: "Homes",
    links: [
      { href: "/projects?status=Off-plan", label: "Off-plan" },
      { href: "/projects?status=Ready", label: "Ready to move in" },
      { href: "/projects?type=Villa", label: "Villas" },
      { href: "/projects?type=Apartment", label: "Apartments" },
      { href: "/#branded", label: "Branded residences" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Aurelia" },
      { href: "/#invest", label: "Buying in Dubai" },
      { href: "/#journal", label: "Journal" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="wrap pt-20 pb-28 md:pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-mist">
              Homes in Dubai Harbour, Dubailand, Dubai Creek, Palm Jumeirah and Downtown Dubai.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-mist">Sales gallery</dt>
                <dd>Dubai Harbour, Dubai</dd>
              </div>
              <div>
                <dt className="text-mist">Head office</dt>
                <dd>Downtown Dubai, Dubai</dd>
              </div>
              <div>
                <dt className="text-mist">Email</dt>
                <dd>
                  <a className="link-draw" href="mailto:sales@aurelia.example">
                    sales@aurelia.example
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="label text-gold">{col.title}</h2>
                <ul className="mt-5 space-y-1">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="inline-flex min-h-11 items-center text-ivory/85 hover:text-ivory">
                        <span className="link-draw">{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-ink-3 pt-8 text-sm text-mist md:flex-row md:justify-between">
          <p>© 2026 Aurelia Properties. A fictional developer built as a design demo; enquiries are not sent.</p>
          <p>Photography: stand-in images from Unsplash.</p>
        </div>
      </div>
    </footer>
  );
}
