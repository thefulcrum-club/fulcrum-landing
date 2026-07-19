import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Audit",
  description: "Three days. Eyes wide open. We find the real bottleneck and give you a plain-English plan.",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "The Audit — fulcrum.",
    description: "Three days inside your business. One honest read. Fixed price.",
    url: "/audit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Audit — fulcrum.",
    description: "Three days inside your business. One honest read. Fixed price.",
  },
};

export default function AuditPage() {
  return (
    <>
      <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-16 pt-24 md:px-10 md:pt-32">
        <div className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-brand-glow">yours</span>
          <span className="h-px w-12 bg-border" />
          the audit
        </div>
        <h1 className="font-serif text-6xl leading-[0.98] tracking-tight text-balance md:text-8xl">
          The Audit<span className="text-brand-glow">.</span>
        </h1>
        <p className="mt-10 max-w-2xl font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
          Three days. Eyes wide open. No questionnaire from another room.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
          <p>
            Most founders know something is wrong. They can feel the friction. They just cannot
            name it cleanly. That is exactly what the audit is for.
          </p>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1100px] px-6 py-16 md:px-10">
        <h2 className="font-serif text-3xl italic md:text-4xl">
          What happens<span className="text-brand-glow">.</span>
        </h2>
        <div className="mt-8 max-w-2xl space-y-6 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
          <p>
            We spend two to three days inside your business, your calls, your docs, the small
            frictions nobody writes down. We find the actual bottleneck, not the one that looks
            good in a deck.
          </p>
          <p>
            You receive a short plain-English report: where the friction lives, why it is
            there, and what to do about it this month. You can run the fix yourself or run it
            with us.
          </p>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1100px] px-6 py-16 md:px-10">
        <h2 className="font-serif text-3xl italic md:text-4xl">
          Why it exists<span className="text-brand-glow">.</span>
        </h2>
        <div className="mt-8 max-w-2xl space-y-6 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
          <p>
            Most consulting engagements start with a three-month proposal and end with a slide
            deck nobody reads. The audit flips that. You get an honest answer in three days and
            you decide what comes next. No pressure. No lock-in.
          </p>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1100px] px-6 py-16 md:px-10">
        <h2 className="font-serif text-4xl italic md:text-5xl">
          Investment<span className="text-brand-glow">.</span>
        </h2>
        <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-muted-foreground md:text-2xl">
          Price varies by scope and location. Let&rsquo;s discuss what makes sense for you.
        </p>
      </section>

      <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-32 pt-12 md:px-10">
        <a
          href="https://cal.id/anvit-thakur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand px-8 py-5 font-mono text-[13px] uppercase tracking-[0.22em] text-white transition-colors hover:opacity-90"
        >
          Get Custom Quote <span aria-hidden>→</span>
        </a>
      </section>
    </>
  );
}
