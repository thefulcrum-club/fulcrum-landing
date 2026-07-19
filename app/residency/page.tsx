import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "How We Work";
const DESCRIPTION = "Four rooms. One conversation. How we work with founders.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/residency" },
  openGraph: {
    title: `${TITLE} — fulcrum.`,
    description: DESCRIPTION,
    url: "/residency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} — fulcrum.`,
    description: DESCRIPTION,
  },
};

const rooms = [
  {
    counter: "01 / 04",
    heading: "the audit.",
    body: "A two to three day read on your business. Honest, plain-spoken, fixed-price. We sit with your team, go through the real frictions nobody writes down, and give you a short plain-English report. What is stuck. Why it is stuck. What to do this month.",
    price: "Price: ₹75,000 · $2,000 · £1,600 · €1,800",
  },
  {
    counter: "02 / 04",
    heading: "the build.",
    body: "Once we've found the bottleneck, we stay to ship the fix. No handoffs. No slide deck that sits on a drive. We work beside your team until the thing is actually moving.",
    price: "Scoped per bottleneck. Contact us.",
  },
  {
    counter: "03 / 04",
    heading: "the diagnostic.",
    body: "A quiet system that keeps a soft read on the operational health of your business between our conversations. Not a dashboard you have to log into. More like a second pair of eyes that doesn't blink.",
    price:
      "Retainer: starting at ₹3,00,000 / $5,000 / £4,000 / €4,500 per month depending on scope",
  },
  {
    counter: "04 / 04",
    heading: "the room.",
    body: "A small circle of founders in the same unglamorous middle. We convene quarterly. No panel decks, no performative networking. Just operators talking honestly about what is breaking and what is working.",
    price: "Limited seats. By application.",
  },
];

export default function ResidencyPage() {
  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          how
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <p className="mt-8 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
        where we work
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
        Four rooms. <span className="italic">One conversation</span>.
      </h1>

      <div className="mt-16 flex flex-col">
        {rooms.map((room) => (
          <div key={room.counter} className="border-t border-border py-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                {room.counter}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h2 className="mt-6 font-serif text-2xl italic leading-tight text-foreground sm:text-3xl md:text-4xl">
              {room.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {room.body}
            </p>
            <p className="mt-6 text-xs text-muted-foreground">{room.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <Link
          href="/audit"
          className="font-serif text-xl italic text-foreground transition-colors hover:text-muted-foreground"
        >
          Not sure which room you need? Start with the audit. &rarr;
        </Link>
      </div>
    </section>
  );
}
