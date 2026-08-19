"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useCallback, useState } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import {ExpandableLocations} from "@/components/ExpandableLists";
import { serviceAreas } from "@/data/locations";

import { 
  servicesHero, 
  servicesIntro,
  mainServices, 
  sharedServiceContent
} from "@/data/services";
import { homeProcess, whoWeServe } from "@/data/home";

export default function ServicesPage() {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  // Refs and State for the "How Home Care Works" Parallax Scroll
  const processSectionRef = useRef<HTMLElement>(null);
  const [processProgress, setProcessProgress] = useState(0);
  
  // SEO Fix: mounted state prevents mobile markup and carousel clones from causing duplicate text/heading penalties during SSR
  const [mounted, setMounted] = useState(false);

  const SCROLL_SPEED = 0.6; // px per frame
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Helper functions for the horizontal carousel
  const nudgeScroll = (amount: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    el.scrollBy({ left: amount, behavior: "smooth" });

    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 600);
  };

  const scrollLeft = () => nudgeScroll(-400);
  const scrollRight = () => nudgeScroll(400);

  // Main Animation Loop for Auto-Carousel and Parallax Scroll progress
  const animate = useCallback(() => {
    // 1. Horizontal Carousel Auto-Scroll
    const el = scrollContainerRef.current;
    if (el && !isPausedRef.current && mounted) {
      el.scrollLeft += SCROLL_SPEED;
      const oneSetWidth = el.scrollWidth / 3;
      if (el.scrollLeft >= oneSetWidth * 2) {
        el.scrollLeft -= oneSetWidth;
      }
    }

    // 2. Vertical Parallax Scroll Logic for "How Home Care Works"
    if (processSectionRef.current) {
      const rect = processSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = rect.height - windowHeight;
      if (scrollableDistance > 0) {
        let p = -rect.top / scrollableDistance;
        p = Math.max(0, Math.min(1, p)); // Clamp between 0 and 1
        setProcessProgress(p);
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [mounted]);

  // Handle Hydration cleanly
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync scroll position once clones are rendered
  useEffect(() => {
    if (mounted) {
      const el = scrollContainerRef.current;
      if (el) {
        // Automatically jump to the middle (original set) so clones safely pad the left and right without flickering
        el.scrollLeft = el.scrollWidth / 3;
      }
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }
  }, [mounted, animate]);

  const pauseScroll = () => { isPausedRef.current = true; };
  const resumeScroll = () => { isPausedRef.current = false; };

  // Helper to render individual Service Cards cleanly for SEO
  const renderServiceCard = (service: typeof mainServices[0], index: number, isOriginal: boolean) => (
    <Link 
      href={`/services/${service.slug}`} 
      aria-label={!isOriginal ? undefined : `View details for ${service.title}`}
      tabIndex={!isOriginal ? -1 : 0}
      className="w-[320px] sm:w-[380px] flex flex-col rounded-3xl bg-white border border-brand-cream/50 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group/card overflow-hidden"
    >
      <div className="relative h-[220px] w-full overflow-hidden bg-brand-cream shrink-0">
        {service.bannerImage && (
          <Image 
            src={service.bannerImage} 
            alt={`${service.title} In-Home Care Services`} 
            width={380} 
            height={220} 
            sizes="(max-width: 768px) 320px, 380px" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
          />
        )}
        <div className="absolute inset-0 bg-brand-ink/10 group-hover/card:bg-transparent transition-colors duration-300"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        
        {/* Semantic HTML toggle for duplicates: Only original gets an h3 tag to prevent heading hierarchy bloat */}
        {isOriginal ? (
          <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover/card:text-brand-red transition-colors">{service.title}</h3>
        ) : (
          <div className="text-xl font-bold text-brand-ink mb-3 group-hover/card:text-brand-red transition-colors">{service.title}</div>
        )}
        
        <p className="text-muted leading-relaxed mb-6 flex-grow">{service.description}</p>
        
        {/* Unique anchor text context strictly reserved for crawlers to prevent identical link texts */}
        <div className="flex items-center gap-2 text-brand-red-dark font-bold text-sm uppercase tracking-wider mt-auto group-hover/card:text-brand-red transition-colors">
          <span>View Details {isOriginal && <span className="sr-only"> {service.title}</span>}</span>
          <svg className="w-5 h-5 transform transition-transform group-hover/card:translate-x-1" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </Link>
  );

  return (
    // Crucial: Use overflow-x-clip instead of overflow-hidden so mobile sticky positioning works
    <div className="flex flex-col overflow-x-clip">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={servicesHero.bannerImage}
            alt="In-Home Senior Care Services in San Jose & The Bay Area"
            width={1584}
            height={672}
            priority
            className="absolute inset-0 w-full h-full object-cover object-[80%_center]"
            sizes="100vw"
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-2xl space-y-4">
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                In-Home Senior Care Services in San Jose & The Bay Area
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {servicesHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  aria-label="Call to discuss in-home care services"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/request-care"
                  aria-label="Request Care Today"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Request Care Today!
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. EDITORIAL INTRO SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:py-24">
          <Reveal className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-brand-red"></span>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Our Approach
              </div>
              <span className="h-[2px] w-8 bg-brand-red"></span>
            </div>
            
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
              {servicesIntro.title}
            </h2>
            
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-muted">
              {servicesIntro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="mb-6 text-3xl font-extrabold text-brand-ink">
                  Free In-Home Assessment
                </h3>
                <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                <p className="mb-10 text-lg leading-relaxed text-muted flex-grow">
                  {homeCallouts.freeConsultation}
                </p>
                <Link href={contactInfo.phoneHref} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--brand-gold)] px-8 py-4 text-lg font-black tracking-wide text-brand-ink shadow-md transition-all hover:scale-[1.02] hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="h-6 w-6 text-brand-red-dark" aria-hidden="true">
                     <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {contactInfo.phone}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. HOME CARE OPTIONS (Interactive Horizontal Carousel) */}
      <section id="home-care-options" className="bg-white border-y border-white py-20 md:py-32 relative">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-brand-red"></span>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  Home Care Options
                </div>
                <span className="h-[2px] w-12 bg-brand-red"></span>
              </div>
              <h2 className="text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                Explore Our Services
              </h2>
            </div>
          </Reveal>
        </Container>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8 xl:px-16 mt-20">
          <button onClick={scrollLeft} aria-label="Scroll left" className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur transition-all hover:scale-110 hover:bg-brand-red hover:text-white text-brand-ink">
            <svg className="w-7 h-7" width={28} height={28} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={scrollRight} aria-label="Scroll right" className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur transition-all hover:scale-110 hover:bg-brand-red hover:text-white text-brand-ink">
            <svg className="w-7 h-7" width={28} height={28} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <ul 
          ref={scrollContainerRef}
          onMouseEnter={pauseScroll}
          onMouseLeave={resumeScroll}
          onTouchStart={pauseScroll}
          onTouchEnd={resumeScroll}
          className="flex overflow-x-auto gap-6 px-4 md:px-12 xl:px-24 scrollbar-hide pb-12 pt-4"
        >
          {/* LEFT CLONES (Client-side only) - Prevents duplicate text and heading penalties on SSR HTML */}
          {mounted && mainServices.map((service, index) => (
            <li key={`clone-left-${service.slug}-${index}`} className="shrink-0 flex" aria-hidden="true">
              {renderServiceCard(service, index, false)}
            </li>
          ))}

          {/* ORIGINAL CARDS (Server-side & Client-side) */}
          {mainServices.map((service, index) => (
            <li key={`orig-${service.slug}-${index}`} className="shrink-0 flex">
              {renderServiceCard(service, index, true)}
            </li>
          ))}

          {/* RIGHT CLONES (Client-side only) - Prevents duplicate text and heading penalties on SSR HTML */}
          {mounted && mainServices.map((service, index) => (
            <li key={`clone-right-${service.slug}-${index}`} className="shrink-0 flex" aria-hidden="true">
              {renderServiceCard(service, index, false)}
            </li>
          ))}
        </ul>
      </section>

      {/* ========================================= */}
      {/* 4. WHO WE SERVE SECTION                   */}
      {/* ========================================= */}

      {/* DESKTOP VERSION (Hidden on Mobile) */}
      <div className="hidden md:block">
        <section className="bg-surface py-20 md:py-32">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="h-[2px] w-12 bg-brand-red"></span>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                    {whoWeServe.title}
                  </div>
                  <span className="h-[2px] w-12 bg-brand-red"></span>
                </div>
                <h2 className="text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                  {whoWeServe.subtitle}
                </h2>
              </div>
            </Reveal>

            <ul className="grid gap-6 md:grid-cols-3">
              {whoWeServe.groups.map((group, index) => (
                <li key={group.title}>
                  <Reveal delay={index * 0.1}>
                    <div className="flex h-full flex-col rounded-3xl bg-white border border-brand-cream/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group/card overflow-hidden">
                      
                      <div className="relative h-[220px] w-full overflow-hidden bg-brand-cream">
                        {group.image && (
                          <Image 
                            src={group.image}
                            alt={`${group.title} Care Services for Seniors`}
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-brand-ink/10 group-hover/card:bg-transparent transition-colors duration-300"></div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-brand-ink mb-3 transition-colors group-hover/card:text-brand-red">
                          {group.title}
                        </h3>
                        <p className="text-muted leading-relaxed mb-6 flex-grow">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </div>

      {/* MOBILE VERSION (Hidden on Desktop) */}
      {/* SEO Fix: Conditional rendering completely removes the duplicate text & links from SSR HTML for crawler bots */}
      <div className="block md:hidden" aria-hidden="true">
        {mounted ? (
          <section className="bg-surface relative">
            
            {/* Full-width Sticky Header */}
            <div className="sticky top-[72px] md:top-[88px] z-30 w-full bg-surface/90 backdrop-blur-md py-8 transition-all border-b border-brand-ink/5 shadow-sm">
              <Reveal>
                <div className="mx-auto max-w-3xl text-center px-4">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="h-[2px] w-12 bg-brand-red"></span>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                      {whoWeServe.title}
                    </div>
                    <span className="h-[2px] w-12 bg-brand-red"></span>
                  </div>
                  <div className="text-2xl font-extrabold text-brand-ink leading-tight">
                    {whoWeServe.subtitle}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="relative w-full pb-16">
              <Container>
                <ul className="relative mx-auto max-w-4xl pt-8 flex flex-col gap-[15vh]">
                  {whoWeServe.groups.map((group, index) => (
                    <li 
                      key={group.title} 
                      className="sticky w-full rounded-3xl bg-white border border-brand-cream shadow-2xl overflow-hidden transition-transform duration-500 will-change-transform"
                      style={{
                        top: `calc(180px + ${index * 24}px)`,
                      }}
                    >
                      <div className="grid md:grid-cols-[1fr_1.2fr]">
                        <div className="relative h-[220px] w-full overflow-hidden bg-brand-cream border-b border-brand-cream/50">
                          {group.image && (
                            <Image 
                              src={group.image} 
                              alt={`${group.title} In-Home Care Mobile View`} 
                              width={800} 
                              height={600} 
                              sizes="100vw" 
                              className="absolute inset-0 w-full h-full object-cover" 
                            />
                          )}
                        </div>
                        <div className="p-8 flex flex-col justify-center bg-white">
                          <div className="text-2xl font-extrabold text-brand-red-dark mb-4">
                            {group.title}
                          </div>
                          <div className="h-[2px] w-12 bg-brand-red/20 mb-6"></div>
                          <p className="text-muted leading-relaxed mb-8 text-base">
                            {group.description}
                          </p>
                          <Link href="#home-care-options" aria-label={`Learn more about ${group.title}`} className="group inline-flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider transition-colors hover:text-brand-red-dark">
                            {/* Unique anchor text context */}
                            <span>Learn More <span className="sr-only"> {group.title}</span></span>
                            <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Container>
            </div>
          </section>
        ) : (
          <div className="h-[200vh]"></div>
        )}
      </div>

      {/* ========================================= */}
      {/* 5. OUR CARE PROCESS                       */}
      {/* ========================================= */}

      {/* DESKTOP VERSION (Hidden on Mobile) */}
      <div className="hidden md:block">
        <section className="bg-white border-t border-brand-gold/20 py-20 md:py-32">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="h-[2px] w-12 bg-brand-red"></span>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                    How Home Care Works
                  </div>
                  <span className="h-[2px] w-12 bg-brand-red"></span>
                </div>
                <h2 className="text-4xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                  {homeProcess.title}
                </h2>
              </div>
            </Reveal>

            <ul className="grid gap-6 md:grid-cols-3 lg:gap-8">
              {homeProcess.steps.map((step, index) => (
                <li key={step.step} className="h-full">
                  <Reveal delay={index * 0.1} className="h-full">
                    <div className="relative flex h-full flex-col rounded-3xl border border-white bg-white p-10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
                      
                      {/* Huge Minimalist Number */}
                      <span className="absolute right-6 top-2 select-none text-7xl font-black text-brand-gold/30">
                        {step.step}
                      </span>
                      
                      <h3 className="relative z-10 mt-8 text-2xl font-bold text-brand-ink transition-colors duration-300 group-hover:text-brand-red">
                        {step.title}
                      </h3>
                      
                      <div className="my-6 h-[3px] w-16 bg-brand-red transition-all duration-500 group-hover:w-24"></div>
                      
                      <p className="relative z-10 text-base leading-relaxed text-muted">
                        {step.description}
                      </p>
                      
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </div>

      {/* MOBILE VERSION (Hidden on Desktop) */}
      {/* SEO Fix: Conditional rendering prevents massive duplicate text counts on load */}
      <div className="block md:hidden" aria-hidden="true">
        {mounted ? (
          <section ref={processSectionRef} className="bg-white border-t border-brand-gold/20 relative h-[300vh]">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-20 md:pt-24">
              
              <div className="z-40 w-full bg-white backdrop-blur-xl py-8 text-center px-4">
                <Reveal>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="h-[2px] w-12 bg-brand-red"></span>
                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                      Our Care Process
                    </div>
                    <span className="h-[2px] w-12 bg-brand-red"></span>
                  </div>
                  <div className="text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                    {homeProcess.title}
                  </div>
                </Reveal>
              </div>

              <ul className="relative w-full max-w-lg mt-8 md:mt-16 flex-grow">
                {homeProcess.steps.map((step, index) => {
                  let tx = 0;
                  let ty = 0;

                  // Smooth Parallax Logic
                  if (index === 0) {
                    const p = Math.min(1, processProgress / 0.33);
                    tx = -(p * 150); 
                  } else if (index === 1) {
                    if (processProgress < 0.33) {
                      const p = processProgress / 0.33;
                      ty = 150 - (p * 150); 
                    } else {
                      const p = Math.min(1, (processProgress - 0.33) / 0.33);
                      ty = 0;
                      tx = p * 150; 
                    }
                  } else if (index === 2) {
                    if (processProgress < 0.33) {
                      ty = 150;
                    } else if (processProgress < 0.66) {
                      const p = (processProgress - 0.33) / 0.33;
                      ty = 150 - (p * 150);
                    } else {
                      ty = 0;
                    }
                  }

                  return (
                    <li 
                      key={step.step}
                      className="absolute inset-x-4 md:inset-x-0 top-0 flex flex-col rounded-3xl border border-white bg-white p-8 md:p-12 shadow-2xl transition-transform ease-out duration-100"
                      style={{
                        transform: `translate(${tx}vw, ${ty}vh)`,
                        willChange: 'transform'
                      }}
                    >
                      <span className="absolute right-6 top-2 select-none text-7xl font-black text-brand-gold/30">
                        {step.step}
                      </span>
                      
                      <div className="relative z-10 mt-8 text-2xl md:text-3xl font-bold text-brand-ink">
                        {step.title}
                      </div>
                      
                      <div className="my-6 h-[3px] w-16 bg-brand-red"></div>
                      
                      <p className="relative z-10 text-base md:text-lg leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ) : (
          <div className="h-[300vh]"></div>
        )}
      </div>

      {/* 6. SEO & AREAS WE SERVE SECTION */}
      <section className="bg-surface py-20 border-t border-brand-gold/10">
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <span className="block text-sm font-bold uppercase tracking-widest text-brand-red mb-3">
                Local Care You Can Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mb-6">
                Premier Home Care in the Bay Area
              </h2>
              <p className="max-w-4xl mx-auto text-lg text-muted leading-relaxed">
                Finding the right support for a loved one is crucial. If you're searching for <strong>home care near me</strong>, Glorious Home Care Assistance is dedicated to providing compassionate, top-tier <strong>senior care at home</strong>. Our trained caregivers specialize in comprehensive <strong>personal care San Jose</strong> families can rely on, ensuring safety, dignity, and peace of mind. We are proud to be a leading provider of <strong>in-home care San Jose</strong> residents trust, offering tailored plans for <strong>elderly care services</strong>.
              </p>
            </div>
          </Reveal>

          {/* DYNAMIC EXPANDABLE LOCATIONS GRID */}
          <div className="mb-16 border-t border-brand-cream pt-12">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-extrabold text-brand-ink text-center mb-8">
                Communities We Proudly Serve
              </h3>
            </Reveal>
            
            <ExpandableLocations locations={serviceAreas} />
          </div>

          <Reveal delay={0.3}>
            <div className="rounded-3xl bg-white p-8 border border-brand-cream shadow-sm text-center max-w-4xl mx-auto">
              <p className="text-muted leading-relaxed">
                Our mission is to elevate the standard of <strong>Home care in Bay area</strong> communities. Whether your family requires temporary respite care, daily assistance with activities of daily living, or specialized 24/7 care, our team is equipped to deliver. Experience the difference of premium <strong>professional caregiver services</strong> designed to keep your loved ones thriving in the comfort of their own home.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================= */}
      {/* 7. BOTTOM CTA SECTION                       */}
      {/* ========================================= */}
      <section className="bg-brand-red-dark py-12 md:py-16 text-center text-white border-t-4 border-brand-gold relative z-30">
        <Container className="max-w-3xl">
          <Reveal className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} strokeWidth={2.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
               </svg>
            </div>
            
            <div className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl whitespace-pre-line">
              {sharedServiceContent.bottomCta.message}
            </div>
            <div className="flex flex-col items-center gap-3 mt-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>
              <Link href={contactInfo.phoneHref} aria-label={`Call us at ${contactInfo.phone}`} className="inline-block transform rounded-full bg-brand-gold px-10 py-4 text-lg font-black tracking-wide text-brand-ink shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl">
                {sharedServiceContent.bottomCta.phone}
              </Link>
            </div>
            <div className="mx-auto mt-12 w-full max-w-2xl border-t border-white/20 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/90">
                {sharedServiceContent.bottomCta.tagline}
              </p>
              <ul className="flex flex-col items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold sm:flex-row sm:gap-4 md:text-sm">
                <li>Compassionate Care.</li>
                <li className="hidden opacity-50 sm:inline" aria-hidden="true">•</li>
                <li>Trusted Support.</li>
                <li className="hidden opacity-50 sm:inline" aria-hidden="true">•</li>
                <li>Peace of Mind.</li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
      
    </div>
  );
}