export default function MapEmbed({ lat, lon, title }: { lat: number; lon: number; title: string }) {
  const d = 0.022;
  const bbox = [lon - d, lat - d * 0.6, lon + d, lat + d * 0.6].map((n) => n.toFixed(4)).join(",");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
  return (
    <div className="frame aspect-[16/10] md:aspect-[21/9]">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        className="absolute inset-0 h-full w-full grayscale-[0.6] sepia-[0.15]"
      />
    </div>
  );
}
