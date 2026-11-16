"use client";

import { useId, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { projects } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "phone" | "consent", string>>;

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export default function EnquiryForm({
  project,
  tone = "dark",
}: {
  project?: string;
  tone?: "light" | "dark";
}) {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const sub = tone === "dark" ? "text-mist" : "text-muted";
  const err = tone === "dark" ? "text-[#f0a58f]" : "text-[#a23b1f]";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "Enter your full name.";
    if (!emailOk(email)) next.email = "Enter an email address like name@domain.com.";
    if (phone && phone.replace(/\D/g, "").length < 7) next.phone = "Enter a phone number with country code, or leave it empty.";
    if (!data.get("consent")) next.consent = "Tick the box so we can reply to you.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setSending(true);
    // Demo: no backend. Swap this delay for a POST to your CRM.
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSentTo(name.split(" ")[0]);
  }

  if (sentTo) {
    return (
      <div role="status" className="flex min-h-[24rem] flex-col justify-center">
        <span className="flex h-14 w-14 items-center justify-center border border-gold text-gold">
          <Check size={26} strokeWidth={1.5} aria-hidden />
        </span>
        <p className="display mt-8 text-4xl">Thank you, {sentTo}.</p>
        <p className={`mt-4 max-w-md ${sub}`}>
          A sales advisor will email you within one working day with floor plans and current availability.
        </p>
        <button type="button" onClick={() => setSentTo(null)} className="label link-draw mt-10 self-start text-gold">
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = (name: keyof Errors) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-err` : undefined,
  });

  const errorFor = (name: keyof Errors) =>
    errors[name] ? (
      <p id={`${id}-${name}-err`} className={`mt-2 text-sm ${err}`}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <label className="block sm:col-span-2">
        <span className={`text-sm ${sub}`}>Full name</span>
        <input name="name" autoComplete="name" className="field" {...field("name")} />
        {errorFor("name")}
      </label>
      <label className="block">
        <span className={`text-sm ${sub}`}>Email</span>
        <input name="email" type="email" autoComplete="email" className="field" {...field("email")} />
        {errorFor("email")}
      </label>
      <label className="block">
        <span className={`text-sm ${sub}`}>Phone (optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className="field" {...field("phone")} />
        {errorFor("phone")}
      </label>
      <label className="block">
        <span className={`text-sm ${sub}`}>Interested in</span>
        <select name="project" className="field" defaultValue={project ?? ""}>
          <option value="">Not sure yet</option>
          {projects.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className={`text-sm ${sub}`}>Budget</span>
        <select name="budget" className="field" defaultValue="">
          <option value="">Prefer not to say</option>
          <option>Under AED 2M</option>
          <option>AED 2M – 5M</option>
          <option>AED 5M – 15M</option>
          <option>Above AED 15M</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={`text-sm ${sub}`}>Message (optional)</span>
        <textarea name="message" rows={3} className="field resize-none" />
      </label>
      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            name="consent"
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 accent-[#c9a86a]"
            {...field("consent")}
          />
          <span className={`text-sm ${sub}`}>
            I agree to be contacted about Hom homes by email, phone or WhatsApp.
          </span>
        </label>
        {errorFor("consent")}
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className={`btn w-full sm:w-auto ${tone === "dark" ? "btn-gold" : "btn-ink"} disabled:opacity-60`}
        >
          {sending ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
