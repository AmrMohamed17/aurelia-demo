"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { communities, projectsIn } from "@/data/site";
import Logo from "./Logo";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/communities", label: "Communities", mega: true },
  { href: "/#branded", label: "Branded residences" },
  { href: "/#invest", label: "Invest" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors duration-300 ${
        solid ? "bg-ink" : "bg-transparent"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 to-transparent transition-opacity duration-300 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label="Aurelia Properties, home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) =>
              item.mega ? (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="label link-draw inline-flex h-[var(--header-h)] items-center"
                  >
                    {item.label}
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 translate-y-2 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-[var(--ease-out-soft)] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="border border-ink-3 bg-ink p-3 shadow-lg shadow-black/20">
                      <ul>
                        {communities.map((c) => (
                          <li key={c.slug}>
                            <Link
                              href={`/communities/${c.slug}`}
                              className="flex items-baseline justify-between gap-6 px-4 py-3 transition-colors hover:bg-ink-2"
                            >
                              <span>
                                <span className="display block text-xl">{c.name}</span>
                                <span className="text-sm text-mist">{c.district}</span>
                              </span>
                              <span className="text-sm whitespace-nowrap text-gold">
                                {projectsIn(c.slug).length} projects
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/communities"
                        className="label mt-2 flex items-center justify-between border-t border-ink-3 px-4 pb-2 pt-4 text-gold"
                      >
                        All communities <ArrowRight size={16} aria-hidden />
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="label link-draw">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-gold hidden sm:inline-flex">
            Register interest
          </Link>
          <button
            type="button"
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto bg-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap flex min-h-full flex-col justify-between pb-10 pt-6">
          <ul className="divide-y divide-ink-3 border-y border-ink-3">
            {nav.map((item, i) => (
              <li key={item.href} className="enter" style={{ ["--d" as string]: i }}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display flex items-center justify-between py-5 text-3xl"
                >
                  {item.label}
                  <ArrowRight size={20} className="text-gold" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-gold mt-10 w-full">
            Register interest
          </Link>
        </nav>
      </div>
    </header>
  );
}
