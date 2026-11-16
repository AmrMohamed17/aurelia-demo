export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-end gap-2.5 leading-none ${className}`}>
      <span className="font-display text-[2rem] tracking-[-0.01em]">
        Hom<span className="text-gold">.</span>
      </span>
      <span className="mb-[0.4rem] border-l border-gold/50 pl-2.5 text-[0.6rem] tracking-[0.32em] text-ivory/80">
        DUBAI
      </span>
    </span>
  );
}
