import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/site";
import ProjectCard from "./ProjectCard";

/**
 * Pinned horizontal scroll: the section holds still while its cards slide sideways
 * as you scroll down (desktop, browsers with scroll timelines). Elsewhere it is a swipeable row.
 */
export default function ProjectRail() {
  const list = [...projects].sort((a, b) => Number(!!b.launch) - Number(!!a.launch));
  return (
    <section className="hs bg-ivory" aria-labelledby="launches-h">
      <div className="hs-sticky py-20 lg:py-0">
        <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="launches-h" className="display text-[clamp(2.6rem,5.4vw,4.75rem)]">
              Launches and ready homes
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              {projects.length} projects across five communities, from AED 1.2M.
            </p>
          </div>
          <Link href="/projects" className="btn btn-line-dark self-start md:self-auto">
            Search all projects <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <ul className="hs-track mt-12">
          {list.map((p) => (
            <li key={p.slug} className="hs-card">
              <ProjectCard project={p} sizes="(min-width: 1024px) 25vw, 82vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
