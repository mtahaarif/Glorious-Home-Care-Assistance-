"use client";

import { useRef, useState, useEffect } from "react";
// import type { Metadata } from "next"; // Moved to layout.tsx
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import { 
  aboutHero, 
  ourStory, 
  ourInspiration, 
  visionAndMission, 
  ghcaDifference, 
} from "@/data/about";

// Reusing your Heart Icon for the features list & testimonial
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-red" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-red" fill="currentColor">
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-red" fill="currentColor">
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>
);

export default function AboutPage() {
  
  // ==========================================
  // Hooks for Mobile Vision & Mission Sync
  // ==========================================
  const visionSectionRef = useRef<HTMLDivElement>(null);
  const [visionProgress, setVisionProgress] = useState(0);
  
  // Tracks coordinates to convert horizontal swipe into vertical scroll
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!visionSectionRef.current) return;
      const rect = visionSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const stickyTop = 72; // Header offset
      
      const scrollDistance = rect.height - windowHeight;
      const scrolledPast = stickyTop - rect.top;
      
      // Calculate scroll progress exclusively from 0.0 to 1.0
      const progress = Math.max(0, Math.min(1, scrolledPast / scrollDistance));
      setVisionProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;

    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const deltaX = touchStartX.current - touchX;
    const deltaY = touchStartY.current - touchY;

    // Detect if the user is swiping mostly horizontally
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 3) {
      // Force window to scroll vertically instead of natively panning left/right
      // 1.5x multiplier ensures it feels like a fast, responsive swipe
      window.scrollBy({ top: deltaX * 1.5, left: 0, behavior: 'auto' });
      
      // Reset start positions to continuously capture drag motion
      touchStartX.current = touchX;
      touchStartY.current = touchY;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = 0;
    touchStartY.current = 0;
  };


  return (
    <div className="flex flex-col">

      {/* 1. UPDATED ABOUT US HERO SECTION */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={aboutHero.bannerImage}
            alt="About Glorious Home Care Assistance"
            fill 
            className="object-cover object-[70%_center]"
            sizes="100vw"
            priority
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-2xl space-y-4">
            <Reveal delay={0.05}>
              {/* SEO Fix: Hardcoded a longer, keyword-rich H1 instead of a short "About Us" */}
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                About Glorious Home Care Assistance
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {aboutHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  aria-label="Call Glorious Home Care Assistance"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/services"
                  aria-label="View our In-Home Care Services"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  {homeCallouts.optionsPrompt}
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. OUR STORY & CONTACT SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          
          {/* Left Column: Our Story */}
          <Reveal className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-brand-red"></span>
              {/* Changed from H2 to div to prevent duplicate empty/decorative headings */}
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Our Background
              </div>
              <span className="h-[2px] w-12 bg-brand-red"></span>
            </div>
            <h2 className="text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
              {ourStory.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted mt-6">
              {ourStory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/* Right Column: Contact Card */}
            <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              
              {/* Decorative Blur Background Element */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Care Coordination
                </p>
                <h3 className="text-2xl font-bold text-brand-ink mt-2">{contactInfo.name}</h3>
                <div className="mt-4 text-base leading-relaxed text-muted">
                  <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                  {contactInfo.addressLine1}
                  <br />
                  {contactInfo.addressLine2}
                  <br />
                  <br />
                </div>
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call us at ${contactInfo.phone}`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--brand-gold)] px-8 py-4 text-lg font-black tracking-wide text-brand-ink shadow-md transition-all hover:scale-[1.02] hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-red-dark" aria-hidden="true">
                     <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {contactInfo.phone}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================= */}
      {/* 3. VISION & MISSION SECTION               */}
      {/* ========================================= */}

      {/* DESKTOP VERSION (Hidden on Mobile) */}
      <div className="hidden md:block">
        <section className="border-y border-brand-cream bg-white py-16 md:py-32">
          <Container>
            
            <Reveal>
              <div className="mx-auto max-w-3xl text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="h-[2px] w-12 bg-brand-gold"></span>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Our Purpose
                  </div>
                  <span className="h-[2px] w-12 bg-brand-gold"></span>
                </div>
                <h2 className="text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                  Driven by Compassion, Guided by Excellence
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              <Reveal>
                <div className="group h-full rounded-3xl border border-brand-cream bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="h-[2px] w-12 bg-brand-gold transition-colors group-hover:bg-brand-red"></span>
                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold group-hover:text-brand-red transition-colors">Our Vision</div>
                    <span className="h-[2px] w-12 bg-brand-gold transition-colors group-hover:bg-brand-red"></span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-brand-ink mb-4 group-hover:text-brand-red transition-colors">{visionAndMission.vision.title}</h3>
                  <p className="leading-relaxed text-muted text-lg">{visionAndMission.vision.body}</p>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div className="group relative h-full rounded-3xl bg-brand-red-dark p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10 flex flex-col overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-3xl opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-[2px] w-12 bg-brand-gold"></span>
                      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">Our Mission</div>
                      <span className="h-[2px] w-12 bg-brand-gold"></span>
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4 group-hover:text-brand-cream transition-colors">{visionAndMission.mission.title}</h3>
                    <p className="leading-relaxed text-white/90 text-lg">{visionAndMission.mission.body}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </div>

      {/* MOBILE VERSION (Hidden on Desktop) */}
      {/* SEO Fix: aria-hidden hides duplicate text from screen readers, semantic tags changed to avoid duplicate headings */}
      <div className="block md:hidden" aria-hidden="true">
        <section ref={visionSectionRef} className="bg-surface relative z-10 h-[200vh]">
          
          <div className="sticky top-[72px] md:top-[88px] w-full flex flex-col pt-10 h-[calc(100vh-72px)] overflow-hidden">
            
            {/* Mobile Title */}
            <div className="w-full pb-6">
              <Reveal>
                <div className="mx-auto max-w-3xl text-center px-4">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="h-[2px] w-12 bg-brand-gold"></span>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                      Our Purpose
                    </div>
                    <span className="h-[2px] w-12 bg-brand-gold"></span>
                  </div>
                  <div className="text-2xl font-extrabold text-brand-ink leading-tight">
                    Guided by Excellence
                  </div>
                </div>
              </Reveal>
            </div>

            {/* TOUCH AREA: Parallax Stacking Cards */}
            <div 
              className="relative w-full flex-grow mt-2 touch-pan-y border-y border-brand-cream bg-brand-cream/30"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Card 1: Vision */}
              <div className="absolute left-4 top-4 bottom-12 w-[85vw] rounded-3xl border border-brand-cream bg-white p-8 shadow-xl flex flex-col z-10 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-[2px] w-8 bg-brand-gold"></span>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Our Vision</div>
                </div>
                <div className="text-2xl font-extrabold text-brand-ink mb-4">{visionAndMission.vision.title}</div>
                <div className="h-[2px] w-12 bg-brand-gold/20 mb-6"></div>
                <p className="leading-relaxed text-muted text-base">{visionAndMission.vision.body}</p>
              </div>

              {/* Card 2: Mission */}
              <div 
                className="absolute left-8 top-8 bottom-8 w-[85vw] rounded-3xl bg-brand-red-dark p-8 text-white shadow-2xl flex flex-col z-20 overflow-y-auto will-change-transform"
                style={{
                  transform: `translateX(${Math.max(0, 100 - visionProgress * 100)}vw)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="h-[2px] w-8 bg-brand-gold"></span>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Our Mission</div>
                  </div>
                  <div className="text-2xl font-extrabold mb-4 text-brand-cream">{visionAndMission.mission.title}</div>
                  <div className="h-[2px] w-12 bg-brand-cream/20 mb-6"></div>
                  <p className="leading-relaxed text-white/90 text-base">{visionAndMission.mission.body}</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* 4. THE GHCA DIFFERENCE & GOOGLE REVIEWS */}
      <section className="bg-surface">
        <Container className="flex flex-col gap-20 py-16 md:py-24">

          {/* =========================================================
              GHCA DIFFERENCE
              ========================================================= */}
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">

            {/* LEFT: WHY CHOOSE US */}
            <Reveal>
              <div className="flex flex-col items-start">

                {/* Section Label */}
                <div className="mb-4 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-brand-red"></span>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                    Why Choose Us
                  </div>
                  <span className="h-[2px] w-12 bg-brand-red"></span>
                </div>

                {/* Heading */}
                <h2 className="mb-8 text-3xl font-extrabold leading-tight text-brand-ink md:text-4xl">
                  {ghcaDifference.title}
                </h2>

                {/* Features */}
                <ul className="space-y-6">
                  {ghcaDifference.features.map((feature, index) => {
                    const FeatureIcons = [
                      HeartIcon,
                      ShieldIcon,
                      UsersIcon,
                    ];

                    const Icon = FeatureIcons[index % FeatureIcons.length];

                    return (
                      <li
                        key={index}
                        className="group flex items-center gap-4 text-lg font-bold text-brand-ink"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cream transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red/10">
                          <Icon />
                        </div>

                        <span className="transition-colors duration-300 group-hover:text-brand-red">
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

              </div>
            </Reveal>

            {/* RIGHT: OUR INSPIRATION */}
            <Reveal delay={0.1} className="h-full">
              <div className="group relative flex h-full min-h-[360px] flex-col justify-center overflow-hidden rounded-3xl border border-brand-gold/20 bg-brand-cream p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-12">

                {/* Decorative Glow */}
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-gold/20 blur-3xl transition-all duration-500 group-hover:bg-brand-red/10"></div>

                {/* Large Quote */}
                <span className="absolute left-6 top-4 font-serif text-8xl leading-none text-brand-gold/30 transition-transform duration-500 group-hover:-translate-y-2" aria-hidden="true">
                  &quot;
                </span>

                {/* Quote */}
                <p className="relative z-10 pt-8 text-xl font-medium italic leading-relaxed text-brand-ink sm:text-2xl">
                  {ourInspiration.quote}
                </p>

                {/* Author */}
                <div className="relative z-10 mt-8 flex items-center gap-4">
                  <div className="h-[2px] w-8 bg-brand-red"></div>

                  <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
                    {ourInspiration.author}
                  </p>
                </div>

              </div>
            </Reveal>

          </div>


          {/* =========================================================
              GOOGLE REVIEWS
              ========================================================= */}
          <Reveal delay={0.2}>
            <div className="mx-auto w-full max-w-5xl text-center">

              {/* Section Label */}
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-[2px] w-12 bg-brand-red"></span>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  Client Reviews
                </div>
                <span className="h-[2px] w-12 bg-brand-red"></span>
              </div>

              {/* Heading */}
              <h2 className="mb-3 text-3xl font-extrabold text-brand-ink md:text-4xl">
                What Families Say
              </h2>


              {/* Review Carousel */}
              <div className="w-full">
                <GoogleReviewsCarousel />
              </div>

            </div>
          </Reveal>

        </Container>
      </section>

      {/* 5. SEO & AREAS WE SERVE SECTION */}
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
                Finding the right support for a loved one is crucial. If you're searching for <strong>home care near me</strong>, Glorious Home Care Assistance is dedicated to providing compassionate, top-tier <strong>senior care at home</strong>. Our trained caregivers specialize in comprehensive <strong>personal care San Jose</strong> families can rely on, ensuring safety, dignity, and peace of mind. We are proud to be a leading provider of <strong>in-home care San Jose</strong> residents trust, offering tailored plans for <strong>at home senior care</strong>.
              </p>
            </div>
          </Reveal>

          <div className="mb-12">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-extrabold text-brand-ink text-center mb-8">
                Communities We Proudly Serve
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center">
              {[
                { city: "San Jose", term: "home care in San Jose", slug: "san-jose" },
                { city: "San Mateo", term: "home care in San Mateo", slug: "san-mateo" },
                { city: "Palo Alto", term: "home care in Palo Alto", slug: "palo-alto" },
                { city: "San Francisco", term: "home care in San Francisco", slug: "san-francisco" },
                { city: "Milpitas", term: "home care in Milpitas", slug: "milpitas" },
                { city: "Los Gatos", term: "home care in Los Gatos", slug: "los-gatos" },
                { city: "Santa Rosa", term: "home care in Santa Rosa", slug: "santa-rosa" },
                { city: "Santa Clara", term: "home care in Santa Clara", slug: "santa-clara" },
                { city: "Pleasanton", term: "home care in Pleasanton", slug: "pleasanton" },
                { city: "Mountain View", term: "home care in Mountain View", slug: "mountain-view" }
              ].map((loc, idx) => (
                <Reveal key={loc.city} delay={idx * 0.05}>
                  <Link href={`/locations/${loc.slug}`} className="block rounded-2xl border border-brand-cream bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold hover:shadow-md">
                    <span className="font-bold text-brand-ink block text-sm mb-1">{loc.city}</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted block">{loc.term}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-white p-8 border border-brand-cream shadow-sm text-center max-w-4xl mx-auto">
              <p className="text-muted leading-relaxed">
                Our mission is to elevate the standard of <strong>Home care in Bay area</strong> communities. Whether your family requires temporary respite care, daily assistance with activities of daily living, or specialized 24/7 care, our team is equipped to deliver. Experience the difference of premium <strong>at home senior care</strong> designed to keep your loved ones thriving in the comfort of their own home.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}