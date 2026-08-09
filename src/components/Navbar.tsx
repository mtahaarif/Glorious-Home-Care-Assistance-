"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactInfo, navLinks } from "@/data/global";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle sticky navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          
          {/* Logo Section */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
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

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-4 text-sm font-medium text-brand-ink lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition hover:text-brand-red ${
                  pathname === link.href ? "text-brand-red" : "text-brand-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call to Action & Mobile Toggle */}
          <div className="flex shrink-0 items-center gap-4">
            <Link
              href={contactInfo.phoneHref}
              className="hidden rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-red-dark sm:inline-flex"
            >
              Call Now
            </Link>
            
            {/* Hamburger Button */}
            <button 
              className="p-2 text-brand-ink lg:hidden" 
              aria-label="Open Menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          
          {/* Darkened Backdrop (click to close) */}
          <div 
            className="fixed inset-0 bg-brand-ink/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Slide-out Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 shadow-xl sm:max-w-md">
            
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-brand-red uppercase tracking-wide">
                Menu
              </span>
              <button 
                type="button" 
                className="rounded-md p-2 text-muted transition hover:bg-brand-cream hover:text-brand-ink" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Nav Links */}
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-brand-cream">
                <div className="space-y-2 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 transition hover:bg-brand-cream ${
                        pathname === link.href ? "bg-brand-cream/50 text-brand-red" : "text-brand-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                {/* Mobile Call CTA */}
                <div className="py-6">
                  <a
                    href={contactInfo.phoneHref}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-brand-red transition hover:bg-brand-cream"
                  >
                    Call: {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}