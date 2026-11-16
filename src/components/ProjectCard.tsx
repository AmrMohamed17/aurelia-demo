import Image from "next/image";
import Link from "next/link";
import { communityBySlug, type Project } from "@/data/site";
import { aed, bedsLabel } from "@/lib/format";

type Props = {
  project: Project;
  sizes?: string;
  tall?: boolean;
  tone?: "light" | "dark";
};

export default function ProjectCard({
  project,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  tall = false,
  tone = "light",
}: Props) {
  const community = communityBySlug(project.community);
  const sub = tone === "dark" ? "text-mist" : "text-muted";
  return (
    <Link href={`/projects/${project.slug}`} className="group lift block">
      <div className={`frame ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
        <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1.5 text-xs tracking-[0.08em] text-ivory">
          {project.plan === "Post-handover" ? "Post-handover plan" : `${project.plan} plan`}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className={`text-sm ${sub}`}>
            {community?.name} · {community?.district}
          </p>
          <h3 className="display mt-1.5 text-[1.75rem]">
            <span className="link-draw">{project.name}</span>
          </h3>
        </div>
        <p className="shrink-0 pt-6 text-right">
          <span className={`block text-xs ${sub}`}>From</span>
          <span className="font-medium">{aed(project.priceFrom)}</span>
        </p>
      </div>
      <p className={`mt-3 border-t pt-3 text-sm ${tone === "dark" ? "border-ink-3 text-mist" : "border-stone text-muted"}`}>
        {bedsLabel(project.beds)} {project.type.toLowerCase()}s · {project.status === "Ready" ? "Ready now" : `Handover ${project.handover}`}
      </p>
    </Link>
  );
}
