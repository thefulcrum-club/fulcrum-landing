import Link from "next/link";

export default function CtaButtons() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <Link
        href="/audit"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Book an Audit <span aria-hidden>→</span>
      </Link>
      <Link
        href="/retainer"
        className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-8 py-4 font-mono text-sm uppercase tracking-[0.15em] text-background transition-transform hover:-translate-y-0.5"
      >
        Start a Retainer <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
