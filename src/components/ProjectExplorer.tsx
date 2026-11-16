"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { communities, projects, type Project } from "@/data/site";
import ProjectCard from "./ProjectCard";

const filters = ["community", "type", "beds", "max", "status"] as const;

function matches(p: Project, q: URLSearchParams) {
  const community = q.get("community");
  const type = q.get("type");
  const beds = Number(q.get("beds"));
  const max = Number(q.get("max"));
  const status = q.get("status");
  if (community && p.community !== community) return false;
  if (type && p.type !== type) return false;
  if (beds && (beds >= 5 ? p.beds[1] < 5 : beds < p.beds[0] || beds > p.beds[1])) return false;
  if (max && p.priceFrom > max) return false;
  if (status && p.status !== status) return false;
  return true;
}

export function ProjectGrid({ list }: { list: Project[] }) {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}

export default function ProjectExplorer() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const list = useMemo(() => projects.filter((p) => matches(p, params)), [params]);
  const active = filters.some((f) => params.get(f));

  function set(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const select = (key: (typeof filters)[number], label: string, options: [string, string][]) => (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
      <select className="field" value={params.get(key) ?? ""} onChange={(e) => set(key, e.target.value)}>
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <>
      <div className="grid gap-x-6 gap-y-4 border-b border-stone pb-8 sm:grid-cols-2 lg:grid-cols-5">
        {select("community", "Community", [["", "All communities"], ...communities.map((c) => [c.slug, c.name] as [string, string])])}
        {select("type", "Property type", [["", "Any type"], ["Apartment", "Apartment"], ["Villa", "Villa"], ["Townhouse", "Townhouse"], ["Penthouse", "Penthouse"]])}
        {select("beds", "Bedrooms", [["", "Any"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5+"]])}
        {select("max", "Budget", [["", "Any budget"], ["2000000", "Up to AED 2M"], ["5000000", "Up to AED 5M"], ["10000000", "Up to AED 10M"]])}
        {select("status", "Status", [["", "Off-plan and ready"], ["Off-plan", "Off-plan"], ["Ready", "Ready now"]])}
      </div>

      <div className="flex min-h-16 items-center justify-between gap-4 py-6" aria-live="polite">
        <p className="text-muted">
          {list.length === 1 ? "1 project" : `${list.length} projects`}
          {active ? " match your search" : ""}
        </p>
        {active && (
          <button type="button" onClick={() => router.replace(pathname, { scroll: false })} className="label link-draw min-h-11 text-bronze">
            Clear filters
          </button>
        )}
      </div>

      {list.length ? (
        <ProjectGrid list={list} />
      ) : (
        <div className="border border-stone bg-sand px-8 py-16 text-center">
          <p className="display text-3xl">No projects match all of those.</p>
          <p className="mt-3 text-muted">Try a higher budget or another community.</p>
          <button type="button" onClick={() => router.replace(pathname, { scroll: false })} className="btn btn-ink mt-8">
            Show all projects
          </button>
        </div>
      )}
    </>
  );
}
