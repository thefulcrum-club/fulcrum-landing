import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Audit — fulcrum.",
  description: "Three days. Eyes wide open. A short, honest audit for founders.",
};

export default function AuditPage() {
  return (
    <>
      {/* INTRO */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          yours
        </p>
        <p className="mt-4 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          the audit
        </p>
        <h1 className="mt-8 max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
          The Audit<span className="italic">.</span>
        </h1>
        <p className="mt-8 max-w-2xl font-serif text-xl italic text-foreground md:text-2xl">
          Three days. Eyes wide open. No questionnaire from another room.
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Most founders know something is wrong. They can feel the friction. They just cannot
          name it cleanly. That is exactly what the audit is for.
        </p>
      </section>

      {/* WHAT HAPPENS */}
      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-6 py-24 md:px-10 md:py-32">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          What happens.
        </h2>
        <div className="mt-8 max-w-2xl space-y-6">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            We spend two to three days inside your business, your calls, your docs, the small
            frictions nobody writes down. We find the actual bottleneck, not the one that looks
            good in a deck.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            You receive a short plain-English report: where the friction lives, why it is
            there, and what to do about it this month. You can run the fix yourself or run it
            with us.
          </p>
        </div>
      </section>

      {/* WHY IT EXISTS */}
      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-6 py-24 md:px-10 md:py-32">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          Why it exists.
        </h2>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Most consulting engagements start with a three-month proposal and end with a slide
          deck nobody reads. The audit flips that. You get an honest answer in three days and
          you decide what comes next. No pressure. No lock-in.
        </p>
      </section>

      {/* INVESTMENT */}
      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-6 py-24 md:px-10 md:py-32">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          Investment.
        </h2>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Price varies by scope and location. Let&apos;s discuss what makes sense for you.
        </p>
        <a
          href="mailto:founder@thefulcrum.club"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-serif italic text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get Custom Quote <span aria-hidden>→</span>
        </a>
      </section>
    </>
  );
}
