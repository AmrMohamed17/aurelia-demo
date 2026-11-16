import Form from "next/form";
import { Search } from "lucide-react";
import { communities } from "@/data/site";

export const budgets = [
  { value: "2000000", label: "Up to AED 2M" },
  { value: "5000000", label: "Up to AED 5M" },
  { value: "10000000", label: "Up to AED 10M" },
  { value: "50000000", label: "Any budget" },
];

export default function SearchBar() {
  return (
    <Form
      action="/projects"
      className="grid gap-x-6 gap-y-2 border border-ivory/20 bg-ink/70 p-5 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto] lg:items-end lg:p-6"
      aria-label="Find a home"
    >
      <label className="block">
        <span className="text-sm text-mist">Community</span>
        <select name="community" className="field" defaultValue="">
          <option value="">All communities</option>
          {communities.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-sm text-mist">Property type</span>
        <select name="type" className="field" defaultValue="">
          <option value="">Any type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Townhouse</option>
          <option>Penthouse</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm text-mist">Bedrooms</span>
        <select name="beds" className="field" defaultValue="">
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n === 5 ? "5+" : n}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-sm text-mist">Budget</span>
        <select name="max" className="field" defaultValue="">
          <option value="">Any budget</option>
          {budgets.slice(0, 3).map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="btn btn-gold mt-4 w-full sm:col-span-2 lg:col-span-1 lg:mt-0 lg:w-auto">
        <Search size={16} aria-hidden /> Find homes
      </button>
    </Form>
  );
}
