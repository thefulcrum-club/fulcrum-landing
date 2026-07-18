import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-16 md:px-10">
      <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-baseline gap-1">
            <span className="font-serif text-2xl italic tracking-tight">fulcrum</span>
            <span className="text-2xl leading-none">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A quiet room for the operators. A second pair of eyes for the founders who refuse to fly blind.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/manifesto" className="transition-colors hover:text-foreground">manifesto</Link></li>
            <li><Link href="/residency" className="transition-colors hover:text-foreground">how we work</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-foreground">the team</Link></li>
            <li><Link href="/work" className="transition-colors hover:text-foreground">work</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">yours</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/audit" className="transition-colors hover:text-foreground">audit</Link></li>
            <li><Link href="/retainer" className="transition-colors hover:text-foreground">retainer</Link></li>
            <li><Link href="/#faq" className="transition-colors hover:text-foreground">faq</Link></li>
            <li><Link href="/trust" className="transition-colors hover:text-foreground">trust &amp; privacy</Link></li>
          </ul>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            established 2026 · in motion
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">find us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:anvit.fulcrum@gmail.com" className="transition-colors hover:text-foreground">
                anvit.fulcrum@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/anvit-thakur"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                linkedin / anvit-thakur
              </a>
            </li>
            <li>
              <a
                href="https://cal.id/anvit-thakur"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                cal.id/anvit-thakur
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex-row">
        <span>&copy; 2026 fulcrum.</span>
        <span>built by hand &middot; in motion</span>
      </div>
    </footer>
  );
}
