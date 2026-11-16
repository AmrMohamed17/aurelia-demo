import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ProjectExplorer, { ProjectGrid } from "@/components/ProjectExplorer";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Off-plan and ready apartments, villas, townhouses and penthouses across Dubai, from AED 1.2M.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        image="photo-1600596542815-ffad4c1539a9"
        alt="Contemporary villa beside a pool at dusk"
        eyebrow={`${projects.length} projects in five communities`}
        title="Find your home in Dubai"
        intro="Filter by community, home type, bedrooms and budget. Every listing shows its starting price, handover date and payment plan."
      />
      <section className="bg-ivory pb-28 pt-12 md:pt-16" aria-label="Project listings">
        <div className="wrap">
          <Suspense fallback={<ProjectGrid list={projects} />}>
            <ProjectExplorer />
          </Suspense>
        </div>
      </section>
    </>
  );
}
