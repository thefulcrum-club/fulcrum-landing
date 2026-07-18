import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — fulcrum.",
  description: "The work is still being written. We're early on purpose.",
};

export default function WorkPage() {
  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          work
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <p className="mt-8 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
        in motion
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
        The work is <span className="italic">still being written</span>.
      </h1>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        We&rsquo;re early on purpose. The first rooms are quiet. The names will arrive when the
        work has earned them, not before.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="border border-border rounded-2xl p-8 bg-secondary/30"
          >
            <p className="font-serif text-lg italic text-foreground">
              case study &middot; coming soon
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              anonymised &middot; founder-approved
            </p>
          </div>
        ))}
      </div>

      <p className="mt-16 text-sm leading-relaxed text-muted-foreground">
        if you&rsquo;d like to be one of the first &middot;{" "}
        <a
          href="mailto:founder@thefulcrum.club"
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-muted-foreground"
        >
          founder@thefulcrum.club
        </a>
      </p>
    </section>
  );
}
