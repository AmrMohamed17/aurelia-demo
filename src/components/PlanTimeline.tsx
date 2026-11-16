import { planSteps, type Plan } from "@/data/site";

export default function PlanTimeline({ plan, tone = "light" }: { plan: Plan; tone?: "light" | "dark" }) {
  const steps = planSteps(plan);
  const line = tone === "dark" ? "border-ink-3" : "border-stone";
  const sub = tone === "dark" ? "text-mist" : "text-muted";
  return (
    <ol className="grid gap-px md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className={`relative border-t pt-8 md:pr-10 ${line}`}>
          <span
            aria-hidden
            className="absolute -top-[5px] left-0 h-[9px] w-[9px] rotate-45 bg-gold"
          />
          <p className={`text-sm ${sub}`}>Step {i + 1}</p>
          <p className="display mt-2 text-[clamp(3rem,6vw,4.5rem)] leading-none text-gold">
            {s.share}
          </p>
          <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
          <p className={`mt-2 max-w-xs ${sub}`}>{s.detail}</p>
        </li>
      ))}
    </ol>
  );
}
