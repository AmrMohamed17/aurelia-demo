export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden className="text-gold">
        <rect x="0.5" y="0.5" width="29" height="29" fill="none" stroke="currentColor" />
        <path d="M8 23 15 6.5 22 23M10.6 17h8.8" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      <span className="leading-none">
        <span className="font-display block text-[1.35rem] tracking-[0.22em]">AURELIA</span>
        <span className="mt-1 block text-[0.6rem] tracking-[0.42em] text-mist">PROPERTIES</span>
      </span>
    </span>
  );
}
