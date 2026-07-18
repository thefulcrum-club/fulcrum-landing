"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
  { href: "/manifesto", label: "manifesto" },
  { href: "/residency", label: "how we work" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-30 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
      <Link href="/" className="flex items-baseline gap-1">
        <span className="font-serif text-2xl italic tracking-tight">fulcrum</span>
        <span className="text-2xl leading-none">.</span>
      </Link>
      <nav className="hidden items-center gap-10 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:flex">
        <Link
          href="/"
          className={`transition-colors hover:text-foreground ${pathname === "/" ? "text-foreground" : ""}`}
        >
          home
        </Link>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors hover:text-foreground ${pathname === link.href ? "text-foreground" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <a href="mailto:anvit.fulcrum@gmail.com" className="transition-colors hover:text-foreground">
          contact
        </a>
      </nav>
      <Link
        href="/audit"
        className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-serif text-base lowercase italic text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
      >
        yours?
        <span aria-hidden>→</span>
      </Link>
    </header>
  );
}
