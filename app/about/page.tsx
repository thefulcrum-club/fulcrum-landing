import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "A small agency. Founded by Anvit Thakur. Built for the obsessed.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — fulcrum.",
    description: "A small agency. Founded by Anvit Thakur. Built for the obsessed.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — fulcrum.",
    description: "A small agency. Founded by Anvit Thakur. Built for the obsessed.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-24 pt-16 md:px-10 md:pt-24">
        <div className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-brand-glow">about</span>
          <span className="h-px w-12 bg-border" />
          behind the work
        </div>
        <h1 className="font-serif text-6xl leading-[0.98] tracking-tight text-balance md:text-8xl">
          A small crew.
          <br />
          <span className="italic">Built by hand</span>
          <span className="text-brand-glow">.</span>
        </h1>
        <p className="mt-10 max-w-2xl font-serif text-xl leading-relaxed text-muted-foreground md:text-2xl">
          fulcrum. is intentionally tiny. One operator in the room with you, a quiet
          diagnostic system in the background, and a short bench of trusted builders we pull
          in only when the work asks for it.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-32 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/anvit-portrait.jpg"
                alt="Anvit Thakur — Founder & CEO of fulcrum."
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                    portrait
                  </div>
                  <div className="mt-2 font-serif text-3xl font-bold lowercase text-white">
                    anvit thakur<span className="text-brand-glow">.</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                    founder &amp; ceo
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              I started fulcrum. after one too many conversations with founders who&rsquo;d
              paid a small fortune for advice they couldn&rsquo;t use. The pattern was always
              the same. The deck looked sharp. The middle was missing.
            </p>
            <p>
              fulcrum. is the answer to that gap. A short, honest audit. A real operator in
              the room. And, when it&rsquo;s a fit, a quiet system that keeps watching the
              business after the engagement ends.
            </p>
            <p>We&rsquo;re small on purpose. If we&rsquo;re working with you, we&rsquo;re actually working with you.</p>
            <p>
              Before fulcrum., I spent a long time watching founders pay for advice they
              couldn&rsquo;t use. The deck looked sharp. The middle was missing. fulcrum. is
              the answer to that gap — and underneath it, we are building something quieter.
              An AI intelligence layer that keeps a continuous read on a business&rsquo;s
              operational health between our conversations. Three products in motion: a
              market simulation engine, a bottleneck identification system, and a risk
              management tool. None of them are ready. When they are, they will show up here.
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-8 gap-y-3 pt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              <dt>contact</dt>
              <dd className="text-foreground">founder@thefulcrum.club</dd>
            </dl>

            <div className="pt-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                say hello · come hang out
              </div>
              <a
                href="mailto:founder@thefulcrum.club"
                className="mt-3 inline-block font-serif text-2xl italic hover:text-brand-glow"
              >
                founder@thefulcrum.club
              </a>
              <div>
                <a
                  href="https://www.linkedin.com/in/anvit-thakur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground"
                >
                  linkedin / anvit-thakur →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH LEAD */}
      <section className="relative mx-auto w-full max-w-[1200px] border-t border-border px-6 py-32 md:px-10">
        <div className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-brand-glow">team</span>
          <span className="h-px w-12 bg-border" />
          the build
        </div>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/harshit-portrait.jpg"
                alt="Harshit Agarwal — Tech Lead of fulcrum."
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                    portrait
                  </div>
                  <div className="mt-2 font-serif text-3xl font-bold lowercase text-white">
                    harshit agarwal<span className="text-brand-glow">.</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                    tech lead
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              Harshit is the fullstack architect behind the systems that keep fulcrum.
              running underneath the conversations. A founding SDE and infrastructure
              engineer, he builds the scalable backends, AI/ML pipelines, and distributed
              systems that make a &ldquo;quiet diagnostic layer&rdquo; possible instead of
              just a slide about one.
            </p>
            <p>
              His work spans backend systems in Python, FastAPI, and Go, infrastructure as
              code with Terraform across AWS (ECS Fargate, Aurora PostgreSQL, DynamoDB), and
              applied ML research — including published work on transformer-based models for
              vulnerability prediction. He has taken production stacks fully under Terraform
              with zero downtime and built the CI/CD pipelines that keep them there.
            </p>
            <p>
              Before fulcrum., he was a Research Lead at Alohomora Labs and a founding
              engineer at endorphind and Famcare, building the same kind of infrastructure
              this diagnostic layer needs to run quietly, reliably, and without anyone having
              to think about it.
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-8 gap-y-3 pt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              <dt>contact</dt>
              <dd className="text-foreground">tech@thefulcrum.club</dd>
            </dl>

            <div className="pt-6">
              <a
                href="mailto:tech@thefulcrum.club"
                className="inline-block font-serif text-2xl italic hover:text-brand-glow"
              >
                tech@thefulcrum.club
              </a>
              <div className="mt-3">
                <a
                  href="https://aharshit123456.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground"
                >
                  aharshit123456.space →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
