import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Privacy — fulcrum.",
  description: "A short note on how fulcrum handles your data.",
};

const sections = [
  {
    heading: "what we collect",
    body: "When you request an audit, we collect the name, company, and bottleneck description you submit through the form. We do not run analytics trackers, advertising pixels, or third-party session recorders on this site.",
  },
  {
    heading: "how we use it",
    body: "Submissions are used only to schedule and prepare for a conversation with you. We do not sell, rent, or share your information with third parties. We do not use it to train models.",
  },
  {
    heading: "where it lives",
    body: "Submissions are stored in a managed Postgres database with row-level security and access scoped to the fulcrum. service account. Data in transit is encrypted with TLS. Reads of submitted requests are restricted to authorized service credentials only.",
  },
];

export default function TrustPage() {
  return (
    <>
      {/* INTRO */}
      <section className="mx-auto w-full max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          trust
        </p>
        <p className="mt-4 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
          privacy &amp; security
        </p>
        <h1 className="mt-8 font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
          A short note on <span className="italic">trust</span>.
        </h1>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground md:text-base">
          this page is maintained by fulcrum to answer common questions about how we handle
          your data.
        </p>
      </section>

      {sections.map((section) => (
        <section
          key={section.heading}
          className="mx-auto w-full max-w-3xl border-t border-border px-6 py-16 md:px-10"
        >
          <h2 className="font-serif text-2xl italic text-foreground md:text-3xl">
            {section.heading}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {section.body}
          </p>
        </section>
      ))}

      <section className="mx-auto w-full max-w-3xl border-t border-border px-6 py-16 md:px-10">
        <h2 className="font-serif text-2xl italic text-foreground md:text-3xl">
          retention &amp; deletion
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          We keep audit requests only as long as needed for active conversations and
          follow-up. If you would like your submission deleted, email{" "}
          <a
            href="mailto:founder@thefulcrum.club"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            founder@thefulcrum.club
          </a>{" "}
          and we will remove it.
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl border-t border-border px-6 py-16 md:px-10">
        <h2 className="font-serif text-2xl italic text-foreground md:text-3xl">cookies</h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          This site does not set marketing or analytics cookies. Any storage is limited to what
          the browser needs for the page to function.
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl border-t border-border px-6 py-16 md:px-10">
        <h2 className="font-serif text-2xl italic text-foreground md:text-3xl">contact</h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          Questions, deletion requests, or security reports go to{" "}
          <a
            href="mailto:founder@thefulcrum.club"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            founder@thefulcrum.club
          </a>
          . We will reply in plain English.
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl border-t border-border px-6 py-16 md:px-10">
        <p className="text-xs leading-relaxed text-muted-foreground">
          not a certification. this page describes our current practices and may evolve as
          fulcrum does.
        </p>
      </section>
    </>
  );
}
