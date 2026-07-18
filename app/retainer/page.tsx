import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Retainer — fulcrum.",
  description: "Weekly presence. Execution accountability. A long, trusted partner who already knows your story.",
  openGraph: {
    title: "The Retainer — fulcrum.",
    description: "Most engagements end when the invoice does. Ours do not.",
  },
};

const provisions = [
  {
    title: "Weekly presence",
    description: "we show up every week, not just at the kickoff.",
  },
  {
    title: "Execution accountability",
    description: "we track what was decided and make sure it actually moves.",
  },
  {
    title: "Strategic positioning support",
    description:
      "your messaging, your outreach, and your conversion kept sharp month after month.",
  },
  {
    title: "An always-on read of your business",
    description: "we catch the next bottleneck before it costs you.",
  },
];

export default function RetainerPage() {
  return (
    <>
      <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-16 pt-24 md:px-10 md:pt-32">
        <div className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-brand-glow">yours</span>
          <span className="h-px w-12 bg-border" />
          the retainer
        </div>
        <h1 className="font-serif text-6xl leading-[0.98] tracking-tight text-balance md:text-8xl">
          The Retainer<span className="text-brand-glow">.</span>
        </h1>
        <p className="mt-10 max-w-2xl font-serif text-2xl italic leading-relaxed text-muted-foreground md:text-3xl">
          Most engagements end when the invoice does. Ours do not.
        </p>
      </section>

      <section className="relative mx-auto w-full max-w-[1100px] px-6 py-16 md:px-10">
        <h2 className="font-serif text-3xl italic md:text-4xl">
          What we provide<span className="text-brand-glow">.</span>
        </h2>
        <ul className="mt-8 max-w-2xl space-y-6 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
          {provisions.map((item) => (
            <li key={item.title}>
              <span className="italic text-foreground">{item.title}</span> — {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mx-auto w-full max-w-[1100px] px-6 py-16 md:px-10">
        <h2 className="font-serif text-3xl italic md:text-4xl">
          Why the retainer is different<span className="text-brand-glow">.</span>
        </h2>
        <div className="mt-8 max-w-2xl space-y-6 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
          <p>
            Here is something most consultants will not tell you. The first month, we learn
            your business. The second month, we understand it. By the third month, we know the
            story from the beginning, the decisions that were made, why they were made, and
            what they mean for where you are now.
          </p>
          <p>
            That context is not transferable. If you start fresh with someone new, you pay
            again in money, in time, and in the weeks it takes them to catch up to what we
            already know.
          </p>
          <p>
            The founders who see the sharpest results are not the ones who hired the best
            consultant. They are the ones who kept the same trusted partner in the room long
            enough for that partner to actually understand the business.
          </p>
          <p className="font-serif text-xl italic text-foreground md:text-2xl">
            Every month you are not on retainer, you are paying for someone else to start from
            zero. We already know your story.
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
          Discuss Pricing <span aria-hidden>→</span>
        </a>
      </section>
    </>
  );
}
