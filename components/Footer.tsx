import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl italic">fulcrum</span>
              <span className="text-3xl leading-none text-brand-glow">.</span>
            </div>
            <p className="mt-6 max-w-md font-serif text-lg italic leading-snug text-muted-foreground">
              A quiet room for the operators. A second pair of eyes for the founders who refuse to fly blind.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">explore</h4>
            <ul className="mt-6 space-y-3 font-serif text-lg">
              <li><Link href="/manifesto" className="hover:text-brand-glow">manifesto</Link></li>
              <li><Link href="/residency" className="hover:text-brand-glow">how we work</Link></li>
              <li><Link href="/about" className="hover:text-brand-glow">the team</Link></li>
              <li><Link href="/work" className="hover:text-brand-glow">work</Link></li>
              <li><Link href="/audit" className="hover:text-brand-glow">yours → audit</Link></li>
              <li><Link href="/retainer" className="hover:text-brand-glow">yours → retainer</Link></li>
              <li><Link href="/#faq" className="hover:text-brand-glow">faq</Link></li>
              <li><Link href="/trust" className="hover:text-brand-glow">trust &amp; privacy</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">established</h4>
              <p className="mt-3 font-serif text-lg">2026 · in motion</p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">find us</h4>
              <ul className="mt-3 space-y-2 font-serif text-lg">
                <li>
                  <a href="mailto:founder@thefulcrum.club" className="italic hover:text-brand-glow">
                    founder@thefulcrum.club
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anvit-thakur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-glow"
                  >
                    linkedin / anvit-thakur
                  </a>
                </li>
                <li>
                  <a
                    href="https://cal.id/anvit-thakur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-glow"
                  >
                    cal.id/anvit-thakur
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 fulcrum</span>
          <span>built by hand &middot; in motion</span>
        </div>

        <div className="mt-20 select-none">
          <div
            className="font-serif italic leading-[0.85] tracking-tight text-foreground"
            style={{ fontSize: "clamp(5rem, 22vw, 22rem)" }}
          >
            fulcrum<span className="text-brand-glow">.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
