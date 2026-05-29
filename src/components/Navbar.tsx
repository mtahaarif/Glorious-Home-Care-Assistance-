"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactInfo, navLinks } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/glorious-home-care-logo.png"
            alt="Glorious Home Care Assistance logo"
            width={48}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-brand-ink">
              Glorious Home Care
            </span>
            <span className="text-xs text-muted">Assistance LLC</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-ink md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-brand-red ${
                pathname === link.href ? "text-brand-red" : "text-brand-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4 text-xs font-medium text-brand-ink md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href ? "text-brand-red" : "text-brand-ink"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={contactInfo.phoneHref}
            className="rounded-full bg-brand-red px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-red-dark sm:text-sm"
          >
            Call Now
          </Link>
        </div>
      </div>
    </header>
  );
}
