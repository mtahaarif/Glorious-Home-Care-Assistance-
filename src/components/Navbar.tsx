"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactInfo, navLinks } from "@/data/global";
import { mainServices } from "@/data/services"; 

// Small helper icon for the dropdown chevron
const ChevronDownIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={16} 
    height={16} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={2.5} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Handle sticky translucent glass background on scroll
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
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled 
            ? "bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-2 sm:py-3" 
            : "bg-transparent py-5"
        }`}
      >
        {/* ✅ FIXED: Expanded max-width to 1600px and reduced side padding to push logo to the extreme left */}
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 lg:px-6 xl:px-10">
          
          {/* Logo Section - Left Aligned */}
          <Link href="/" className="flex shrink-0 items-center gap-2 xl:gap-3 group">
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md"></div>
              <Image
                src="/glorious-home-care-logo.png"
                alt="Glorious Home Care Assistance logo"
                width={50}
                height={50}
                className="relative z-10 h-10 w-auto xl:h-11" // Slightly smaller logo on standard laptops to save space
                priority
              />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-[13px] xl:text-sm font-extrabold tracking-tight text-brand-ink drop-shadow-sm whitespace-nowrap">
                Glorious Home Care
              </span>
              <span className="text-[9px] xl:text-[10px] font-bold text-brand-red uppercase tracking-widest mt-0.5 whitespace-nowrap">
                Assistance LLC
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          {/* ✅ FIXED: Dynamic scaling! Tighter gaps (gap-3) and smaller font (12px) on laptops, expands comfortably on big screens (xl:gap-6) */}
          <nav className="hidden flex-1 items-center justify-center gap-3 text-[12px] font-bold text-brand-ink lg:flex xl:gap-5 2xl:gap-7 xl:text-[13px] 2xl:text-sm px-2 xl:px-4">
            {navLinks.map((link) => {
              
              // 1. Render Dropdown for "Services"
              if (link.label === "Care Services" || link.label === "Services") { 
                const isActive = pathname.startsWith(link.href);
                return (
                  <div key={link.href} className="group relative py-2">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 xl:gap-1.5 whitespace-nowrap transition-colors hover:text-brand-red ${
                        isActive ? "text-brand-red" : "text-brand-ink"
                      }`}
                    >
                      {link.label}
                      <ChevronDownIcon className="h-3 w-3 xl:h-3.5 xl:w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    
                    {/* Glassmorphism Dropdown Panel */}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="w-[280px] rounded-3xl border border-white/60 bg-white/80 backdrop-blur-3xl p-3 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                        {mainServices.map((service) => (
                          <Link 
                            key={service.slug} 
                            href={`/services/${service.slug}`} 
                            className="block rounded-lg px-4 py-2 text-xs font-semibold text-brand-ink/90 hover:bg-white/90 hover:text-brand-red hover:shadow-sm transition-all"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // 2. Render Standard Links
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap transition-colors hover:text-brand-red py-2 ${
                    pathname === link.href ? "text-brand-red" : "text-brand-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action & Mobile Toggle - Right Aligned */}
          {/* ✅ FIXED: Locked this container with 'shrink-0' so it refuses to be crushed off-screen */}
          <div className="flex shrink-0 items-center gap-3 xl:gap-4">
            
            {/* Glassmorphic CTA Button */}
            <a
              href={contactInfo.phoneHref}
              className="hidden rounded-full border border-brand-red/30 bg-brand-red/90 backdrop-blur-md px-5 py-2 xl:px-7 xl:py-2.5 text-xs xl:text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-red/20 transition-all hover:-translate-y-0.5 hover:bg-brand-red hover:shadow-brand-red/30 sm:inline-flex whitespace-nowrap"
            >
              Call Now
            </a>
            
            {/* Hamburger Button (Glass Style) */}
            <button 
              className="rounded-full bg-white/50 backdrop-blur-md border border-white/50 p-2.5 text-brand-ink shadow-sm lg:hidden transition hover:bg-white/80" 
              aria-label="Open Menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg width={20} height={20} className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          
          {/* Darkened Backdrop */}
          <div 
            className="fixed inset-0 bg-brand-ink/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Slide-out Glass Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto border-l border-white/40 bg-white/80 backdrop-blur-2xl px-6 py-6 shadow-2xl sm:max-w-md">
            
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-b border-brand-ink/10 pb-6">
              <span className="text-lg font-black text-brand-red uppercase tracking-widest">
                Menu
              </span>
              <button 
                type="button" 
                className="rounded-full bg-white/50 backdrop-blur-md border border-white/50 p-2 text-brand-ink transition hover:bg-brand-red hover:text-white hover:border-brand-red" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg width={20} height={20} className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Nav Links */}
            <div className="mt-6 flow-root">
              <div className="space-y-1 py-2">
                {navLinks.map((link) => {
                  
                  // Mobile Services Dropdown Toggle
                  if (link.label === "Care Services" || link.label === "Services") {
                    const isActive = pathname.startsWith(link.href);
                    return (
                      <div key={link.href} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link 
                            href={link.href} 
                            onClick={() => setIsMobileMenuOpen(false)} 
                            className={`flex-grow rounded-xl px-4 py-3.5 text-lg font-bold transition hover:bg-white/60 ${
                              isActive ? "bg-white/60 text-brand-red" : "text-brand-ink"
                            }`}
                          >
                            {link.label}
                          </Link>
                          <button 
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                            className="p-4 text-brand-ink transition hover:text-brand-red"
                            aria-label="Toggle Services Dropdown"
                          >
                            <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                          </button>
                        </div>
                        
                        {/* Mobile Dropdown Items */}
                        <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[500px] opacity-100 mt-2 mb-4" : "max-h-0 opacity-0"}`}>
                          <div className="pl-6 space-y-1.5 border-l-2 border-brand-red/20 ml-6">
                            {mainServices.map((service) => (
                              <Link 
                                key={service.slug} 
                                href={`/services/${service.slug}`} 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="block rounded-xl px-4 py-2.5 text-base font-semibold text-brand-ink/80 hover:bg-white/60 hover:text-brand-red transition-colors"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Standard Mobile Links
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block rounded-xl px-4 py-3.5 text-lg font-bold transition hover:bg-white/60 ${
                        pathname === link.href ? "bg-white/60 text-brand-red" : "text-brand-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
                
              {/* Mobile Call CTA (Glass Button) */}
              <div className="mt-8 border-t border-brand-ink/10 pt-8">
                <a
                  href={contactInfo.phoneHref}
                  className="flex w-full items-center justify-center rounded-2xl border border-brand-red/30 bg-brand-red/90 backdrop-blur-md px-4 py-4 text-lg font-black tracking-wide text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-red"
                >
                  Call: {contactInfo.phone}
                </a>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}