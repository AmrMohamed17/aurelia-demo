const compact = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 2,
});

export function aed(value: number) {
  return `AED ${compact.format(value)}`;
}

export function bedsLabel([min, max]: [number, number]) {
  if (min === max) return `${min} bed`;
  return `${min}–${max} bed`;
}

export function sqft([min, max]: [number, number]) {
  const f = new Intl.NumberFormat("en");
  return `${f.format(min)}–${f.format(max)} sq ft`;
}

export function longDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
