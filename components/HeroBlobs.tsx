export default function HeroBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[12%] top-[18%] h-[520px] w-[520px] rounded-full bg-brand/20 blur-[120px]" />
      <div className="absolute right-[8%] top-[40%] h-[420px] w-[420px] rounded-full bg-brand-glow/10 blur-[120px]" />
      <div className="absolute left-1/2 top-[120%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-noise mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px gradient-line" />
    </div>
  );
}
