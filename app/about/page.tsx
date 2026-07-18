import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — fulcrum.",
  description:
    "A small crew. One operator in the room with you, a quiet diagnostic system in the background, and a short bench of trusted builders we pull in only when the work asks for it.",
};

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          about
        </p>
        <h1 className="mt-8 max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
          behind the work
          <br />
          A small crew.
          <br />
          <span className="italic">Built by hand.</span>
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          fulcrum. is intentionally tiny. One operator in the room with you, a quiet
          diagnostic system in the background, and a short bench of trusted builders we pull
          in only when the work asks for it.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
              portrait
            </p>
            <div className="mt-6 aspect-square w-full max-w-xs rounded-2xl border border-border bg-secondary" />
          </div>
          <div>
            <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
              anvit thakur.
            </h2>
            <p className="mt-2 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
              founder &amp; ceo
            </p>

            <div className="mt-8 space-y-6">
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                I started fulcrum. after one too many conversations with founders who&apos;d
                paid a small fortune for advice they couldn&apos;t use. The pattern was
                always the same. The deck looked sharp. The middle was missing.
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                fulcrum. is the answer to that gap. A short, honest audit. A real operator in
                the room. And, when it&apos;s a fit, a quiet system that keeps watching the
                business after the engagement ends.
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                We&apos;re small on purpose. If we&apos;re working with you, we&apos;re
                actually working with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI PRODUCT */}
      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-6 py-24 md:px-10 md:py-32">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          what&apos;s next
        </p>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Before fulcrum., I spent a long time watching founders pay for advice they
          couldn&apos;t use. The deck looked sharp. The middle was missing. fulcrum. is the
          answer to that gap — and underneath it, we are building something quieter. An AI
          intelligence layer that keeps a continuous read on a business&apos;s operational
          health between our conversations. Three products in motion: a market simulation
          engine, a bottleneck identification system, and a risk management tool. None of
          them are ready. When they are, they will show up here.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-6 py-24 md:px-10 md:py-32">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          contact
        </p>
        <a
          href="mailto:founder@thefulcrum.club"
          className="mt-8 block font-serif text-3xl italic text-foreground transition-colors hover:text-primary sm:text-4xl md:text-5xl"
        >
          founder@thefulcrum.club
        </a>
        <p className="mt-4 text-sm text-muted-foreground">say hello · come hang out</p>
        <a
          href="https://linkedin.com/in/anvit-thakur"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
        >
          linkedin / anvit-thakur <span aria-hidden>→</span>
        </a>
      </section>
    </>
  );
}
