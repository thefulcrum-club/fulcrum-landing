"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [yoursOpen, setYoursOpen] = useState(false);
  const yoursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (yoursRef.current && !yoursRef.current.contains(event.target as Node)) {
        setYoursOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (href: string) =>
    `transition-colors hover:text-foreground ${pathname === href ? "text-foreground" : ""}`;

  return (
    <header className="relative z-30 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
      <Link href="/" className="flex items-baseline gap-1">
        <span className="font-serif text-2xl italic tracking-tight">fulcrum</span>
        <span className="text-2xl leading-none text-brand-glow">.</span>
      </Link>
      <nav className="hidden items-center gap-10 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:flex">
        <Link href="/" className={linkClass("/")}>
          home
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          about
        </Link>
        <Link href="/work" className={linkClass("/work")}>
          work
        </Link>

        <div className="relative" ref={yoursRef}>
          <button
            type="button"
            onClick={() => setYoursOpen((open) => !open)}
            aria-expanded={yoursOpen}
            className="rounded-full border border-brand bg-white px-3 py-1 normal-case tracking-normal text-brand transition-colors hover:bg-secondary"
          >
            Yours?
          </button>
          {yoursOpen && (
            <div className="absolute left-1/2 top-full z-40 mt-3 w-40 -translate-x-1/2 rounded-xl border border-border bg-background p-2 shadow-xl">
              <Link
                href="/audit"
                onClick={() => setYoursOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] normal-case tracking-normal text-foreground transition-colors hover:bg-secondary"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                audit
              </Link>
              <Link
                href="/retainer"
                onClick={() => setYoursOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] normal-case tracking-normal text-foreground transition-colors hover:bg-secondary"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                retainer
              </Link>
            </div>
          )}
        </div>

        <Link href="/manifesto" className={linkClass("/manifesto")}>
          manifesto
        </Link>
        <Link href="/residency" className={linkClass("/residency")}>
          how we work
        </Link>
      </nav>
      <a
        href="https://www.linkedin.com/in/anvit-thakur/"
        target="_blank"
        rel="noopener noreferrer"
        className="group hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-serif text-base lowercase italic text-primary-foreground shadow-[0_10px_40px_-10px_var(--brand)] transition-transform hover:-translate-y-0.5 md:inline-flex"
      >
        contact
        <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
          →
        </span>
      </a>
    </header>
  );
}
