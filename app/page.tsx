import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import HeroBlobs from "@/components/HeroBlobs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    question: "Why fulcrum.?",
    answer:
      "Because most founders don't need another deck. They need someone honest enough to find the real bottleneck, and patient enough to stay in the room while it gets fixed.",
  },
  {
    question: "Why not just use an AI tool?",
    answer:
      "AI is part of how we work, not what we sell. A dashboard can't sit with your team at 11pm and decide which shipping date to break. A person can. We use AI to keep the read on your org alive between those conversations.",
  },
  {
    question: "What is fulcrum., exactly?",
    answer:
      "A small strategic consulting agency. We do two things. Short, honest audits for founders. And, for the few we end up building with, a quiet system that keeps watching the operational health of the business after the audit ends.",
  },
  {
    question: "What does it cost?",
    answer:
      "The audit is deliberately small and fixed: ₹75,000 in India, $2,000 in the US, £1,600 in the UK, €1,800 in Europe. Three days. One bottleneck. No retainer attached unless you want one. The retainer rooms, when you want them, start at ₹3,00,000 / $5,000 / £4,000 / €4,500 per month depending on scope. We'd rather price one room than sell you a suite.",
  },
  {
    question: "Who is this for?",
    answer:
      "Founders and operators between roughly the first traction and the second engine. People who feel the friction but can't name it cleanly yet.",
  },
  {
    question: "Who is it not for?",
    answer:
      "Anyone looking for a 60-page slide deck and a quarterly retainer. We're not that, and we won't pretend to be.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO */}
      <section className="relative mx-auto flex min-h-[100vh] w-full max-w-[1400px] flex-col items-center justify-center px-6 pb-40 pt-10 text-center md:px-10">
        <HeroBlobs />
        <div className="relative z-10 mb-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
          an intelligence layer for builders
        </div>
        <h1 className="relative z-10 font-serif text-[clamp(3.5rem,11vw,11rem)] font-medium leading-[0.92] tracking-[-0.02em] text-balance">
          <span className="block">we are the</span>
          <span className="block italic">
            fulcrum<span className="text-brand-glow">.</span>
          </span>
        </h1>
        <p className="relative z-10 mt-10 max-w-xl font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
          A second pair of eyes for founders who are done paying six figures for a slide deck.
          Honest audits, real execution, and a quiet system that keeps watching after we leave.
        </p>
        <div className="relative z-10 mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-white shadow-[0_20px_60px_-15px_var(--brand)] transition-transform hover:-translate-y-0.5"
          >
            Book an Audit <span aria-hidden>→</span>
          </Link>
          <Link
            href="/retainer"
            className="inline-flex items-center gap-2 rounded-full border border-brand bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-brand transition-colors hover:bg-secondary"
          >
            Start a Retainer <span aria-hidden>→</span>
          </Link>
        </div>
        <a
          href="https://cal.id/anvit-thakur"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground"
        >
          or book a call →
        </a>
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            scroll
          </span>
          <span className="relative block h-10 w-px overflow-hidden bg-border/30" />
        </div>
      </section>

      {/* THE UNGLAMOROUS MIDDLE — light section */}
      <section className="relative overflow-hidden bg-white text-neutral-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(color-mix(in oklab, var(--brand) 22%, white) 1.4px, transparent 1.6px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full blur-[40px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand) 18%, white) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-10 h-[380px] w-[380px] rounded-full blur-[50px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand) 14%, white) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
            <span>phase −01 → 00</span>
            <span className="h-px w-12 bg-brand" />
            <span>the unglamorous middle</span>
          </div>
          <h2 className="mt-10 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-neutral-900 md:text-7xl">
            Most companies don&rsquo;t die from a bad idea.
            <span className="block italic text-brand">They die in the middle.</span>
          </h2>
          <p className="mt-10 max-w-2xl font-serif text-xl leading-relaxed text-neutral-700 md:text-2xl">
            Between the first wave of traction and the second machine that&rsquo;s supposed to
            scale it. That gap is where founders quietly burn cash on agencies, decks, and
            advisors who never quite stay long enough to see what broke.
          </p>
          <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-relaxed text-neutral-900 md:text-3xl">
            fulcrum. lives in that middle.
          </p>
        </div>
      </section>

      {/* WHY FULCRUM EXISTS */}
      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-32 md:px-10 md:py-44">
        <div className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-brand-glow">01</span>
          <span className="h-px w-12 bg-border" />
          why fulcrum exists
        </div>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <h2 className="font-serif text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl">
            It started with a
            <br />
            <span className="italic">simple pattern</span>
            <span className="text-brand-glow">.</span>
          </h2>
          <div className="space-y-6 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>I kept talking to founders. Different sectors, different stages, same three sentences.</p>
            <p>
              <span className="italic text-foreground">&ldquo;Consulting was too expensive and we never used the deck.&rdquo;</span>
              <br />
              <span className="italic text-foreground">&ldquo;Execution took forever and nobody owned it.&rdquo;</span>
              <br />
              <span className="italic text-foreground">&ldquo;The agency disappeared the moment we signed.&rdquo;</span>
            </p>
            <p>
              That was the whole brief. Founders didn&rsquo;t need another framework, they needed
              someone to sit in the room, find the actual bottleneck, and stay long enough to fix
              it.
            </p>
            <p className="font-serif italic text-foreground">That is why we started fulcrum..</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative mx-auto w-full max-w-[1200px] px-6 py-32 md:px-10 md:py-44">
        <div className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-brand-glow">04</span>
          <span className="h-px w-12 bg-border" />
          the honest bits
        </div>
        <h2 className="font-serif text-5xl leading-[1.02] tracking-tight text-balance md:text-7xl">
          Questions, asked
          <br />
          <span className="italic">honestly</span>
          <span className="text-brand-glow">.</span>
        </h2>
        <div className="mt-16">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative mx-auto w-full max-w-[1400px] px-6 pb-32 pt-20 text-center md:px-10">
        <div className="relative overflow-hidden border border-border bg-card/40 px-6 py-24 md:px-20 md:py-32">
          <div aria-hidden className="gradient-aura pointer-events-none absolute -inset-40" />
          <div className="relative">
            <h2 className="font-serif text-6xl font-bold leading-[0.95] tracking-tight text-brand-glow md:text-[7rem]">
              Ready to Scale?
            </h2>
            <p className="mt-6 font-serif text-2xl italic text-muted-foreground md:text-3xl">Pick your path.</p>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link
                href="/audit"
                className="inline-flex min-w-[260px] items-center justify-center bg-brand px-8 py-5 font-mono text-[13px] uppercase tracking-[0.22em] text-white transition-colors hover:opacity-90"
              >
                Start with Audit →
              </Link>
              <Link
                href="/retainer"
                className="inline-flex min-w-[260px] items-center justify-center bg-brand px-8 py-5 font-mono text-[13px] uppercase tracking-[0.22em] text-white transition-colors hover:opacity-90"
              >
                Go Direct to Retainer →
              </Link>
              <a
                href="https://cal.id/anvit-thakur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[260px] items-center justify-center bg-brand px-8 py-5 font-mono text-[13px] uppercase tracking-[0.22em] text-white transition-colors hover:opacity-90"
              >
                Book a Call →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
