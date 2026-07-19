import type { Metadata } from "next";

const TITLE = "Manifesto";
const DESCRIPTION =
  "A letter from the founder on the quiet middle — why fulcrum. exists, and why we're building it small on purpose.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: `${TITLE} — fulcrum.`,
    description: DESCRIPTION,
    url: "/manifesto",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} — fulcrum.`,
    description: DESCRIPTION,
  },
};

export default function ManifestoPage() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-2xl md:max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          manifesto
        </p>
        <p className="mt-4 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          a letter from the founder
        </p>

        <h1 className="mt-8 font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
          On the <span className="italic">quiet middle</span>.
        </h1>

        <div className="mt-12 space-y-7 font-serif text-lg leading-loose text-muted-foreground md:text-xl">
          <p>
            I have spent the last few years sitting in too many founder conversations.
            Different cities, different rounds, different industries. The story underneath
            was almost identical.
          </p>
          <p>
            A young company found something that worked. Customers showed up. Revenue
            arrived in unfamiliar shapes. The team grew. And then, somewhere in the
            unglamorous middle, the machine that was supposed to scale the first machine
            never quite got built.
          </p>
          <p>
            Founders did the responsible thing. They hired a consultant. They paid an
            agency. They onboarded an advisor. The deck was beautiful. The follow-through
            was someone else&apos;s job. The bottleneck stayed.
          </p>
          <p>
            I kept watching this happen and feeling slightly sick about it. Not because
            consulting is evil, it isn&apos;t. But because the shape of the help being sold
            didn&apos;t match the shape of the problem. Founders were sold strategy. They
            needed company.
          </p>
          <p>That is why we started fulcrum..</p>
          <p>
            fulcrum. is not a traditional consulting firm. It is a small, focused strategic
            consulting agency for the obsessed. We do a short, honest audit. We sit in the
            room. We find the real bottleneck, not the comfortable one. And, when the fit is
            right, we stay and ship the fix with you, instead of handing it off in a
            60-page document.
          </p>
          <p>
            Underneath all of that, we&apos;re building a quiet diagnostic layer. A system
            that keeps a soft read on the operational health of the business between our
            conversations. Not a dashboard you have to log into. More like a second pair of
            eyes that doesn&apos;t blink.
          </p>
          <p>
            We are small on purpose. We will stay small on purpose. If we are in your room,
            we are actually in your room.
          </p>
          <p>If any of this feels like it was written for you, it probably was.</p>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="font-serif text-2xl italic text-foreground">anvit thakur.</p>
          <a
            href="mailto:founder@thefulcrum.club"
            className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            founder@thefulcrum.club
          </a>
        </div>
      </div>
    </section>
  );
}
