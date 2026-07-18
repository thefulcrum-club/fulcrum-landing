import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Retainer — fulcrum.",
  description: "Most engagements end when the invoice does. Ours do not.",
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
      {/* INTRO */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          yours
        </p>
        <p className="mt-4 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          the retainer
        </p>
        <h1 className="mt-8 max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
          The Retainer<span className="italic">.</span>
        </h1>
        <p className="mt-8 max-w-2xl font-serif text-xl italic text-foreground md:text-2xl">
          Most engagements end when the invoice does. Ours do not.
        </p>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-6 py-24 md:px-10 md:py-32">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          What we provide.
        </h2>
        <div className="mt-8 max-w-2xl space-y-6">
          {provisions.map((item) => (
            <p
              key={item.title}
              className="text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              <span className="font-serif italic text-foreground">{item.title}</span>
              {" — "}
              {item.description}
            </p>
          ))}
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-6 py-24 md:px-10 md:py-32">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          Why the retainer is different.
        </h2>
        <div className="mt-8 max-w-2xl space-y-6">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Here is something most consultants will not tell you. The first month, we learn
            your business. The second month, we understand it. By the third month, we know the
            story from the beginning, the decisions that were made, why they were made, and
            what they mean for where you are now.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            That context is not transferable. If you start fresh with someone new, you pay
            again in money, in time, and in the weeks it takes them to catch up to what we
            already know.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            The founders who see the sharpest results are not the ones who hired the best
            consultant. They are the ones who kept the same trusted partner in the room long
            enough for that partner to actually understand the business.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Every month you are not on retainer, you are paying for someone else to start from
            zero. We already know your story.
          </p>
        </div>
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
          Discuss Pricing <span aria-hidden>→</span>
        </a>
      </section>
    </>
  );
}
