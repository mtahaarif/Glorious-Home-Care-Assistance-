"use client"; // Required for the useEffect image slider

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import { 
  homeHero, 
  homeAbout, 
  fiveFactors,
  careComparison,
  privateDutyCare
} from "@/data/home";
import { sharedServiceContent } from "@/data/services";

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className="h-4 w-4 text-brand-red"
    fill="currentColor"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default function Home() {
  
  // ==========================================
  // Image Slider State
  // ==========================================
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);

  // Automatically cycle through images every 5 seconds
  useEffect(() => {
    if (!homeHero.bgImages || homeHero.bgImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === homeHero.bgImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds per image

    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // Hooks for Mobile Comparison Table Sync
  // ==========================================
  const comparisonSectionRef = useRef<HTMLDivElement>(null);
  const [comparisonProgress, setComparisonProgress] = useState(0);
  
  // Tracks coordinates to convert horizontal swipe into vertical scroll
  const compTouchStartX = useRef(0);
  const compTouchStartY = useRef(0);

  useEffect(() => {
    const handleCompScroll = () => {
      if (!comparisonSectionRef.current) return;
      const rect = comparisonSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const stickyTop = 72; // Header offset
      
      const scrollDistance = rect.height - windowHeight;
      const scrolledPast = stickyTop - rect.top;
      
      // Calculate scroll progress exclusively from 0.0 to 1.0
      const progress = Math.max(0, Math.min(1, scrolledPast / scrollDistance));
      setComparisonProgress(progress);
    };

    window.addEventListener("scroll", handleCompScroll, { passive: true });
    handleCompScroll(); // Trigger on mount
    
    return () => window.removeEventListener("scroll", handleCompScroll);
  }, []);

  const handleCompTouchStart = (e: React.TouchEvent) => {
    compTouchStartX.current = e.touches[0].clientX;
    compTouchStartY.current = e.touches[0].clientY;
  };

  const handleCompTouchMove = (e: React.TouchEvent) => {
    if (!compTouchStartX.current || !compTouchStartY.current) return;

    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const deltaX = compTouchStartX.current - touchX;
    const deltaY = compTouchStartY.current - touchY;

    // Detect if the user is swiping mostly horizontally
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 3) {
      // Force window to scroll vertically instead of natively panning left/right
      // 1.5x multiplier ensures it feels like a fast, responsive swipe
      window.scrollBy({ top: deltaX * 1.5, left: 0, behavior: 'auto' });
      
      // Reset start positions to continuously capture drag motion
      compTouchStartX.current = touchX;
      compTouchStartY.current = touchY;
    }
  };

  const handleCompTouchEnd = () => {
    compTouchStartX.current = 0;
    compTouchStartY.current = 0;
  };

  return (
    <div className="flex flex-col">
      
      {/* 1. DYNAMIC HOMEPAGE HERO BANNER (Left White Fade-In, Borderless) */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Carousel Container */}
        <div className="absolute inset-0 z-0">
          {homeHero.bgImages && homeHero.bgImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Glorious Home Care Banner ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover object-center md:object-right transition-opacity duration-[2000ms] ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Smooth Left-to-Right White Fade Overlay matching About & Services */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-[2px] w-6 bg-brand-red hidden sm:block"></span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-dark">
                  {homeHero.welcome}
                </p>
                <span className="rounded-full bg-brand-cream border border-brand-gold/40 px-2.5 py-1 text-[10px] font-bold text-brand-ink">
                  {homeHero.badge}
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                {homeHero.headline}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {homeHero.subhead}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  {homeCallouts.optionsPrompt}
                </Link>
              </div>
            </Reveal>
            
          </div>
        </Container>
      </section>

      {/* 2. INTRODUCTORY SECTION (Optimized Editorial Layout) */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:py-32">
          
          {/* Left Column: About Us */}
          <Reveal className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-brand-red"></span>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Glorious Home Care Assistance
              </h2>
              <span className="h-[2px] w-8 bg-brand-red"></span>
            </div>
            
            <h3 className="mb-6 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
              {homeAbout.title}
            </h3>
            
            <p className="mb-8 text-lg leading-relaxed text-muted">
              {homeAbout.description}
            </p>
            
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-red-dark transition-colors hover:text-brand-red"
            >
              Know more about us
              <svg className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>

          {/* Right Column: Free In-Home Assessment Card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              
              {/* Decorative Blur Background Element */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                <h4 className="mb-6 text-3xl font-extrabold text-brand-ink">
                  Free In-Home Assessment
                </h4>
                
                {/* Horizontal Divider Line */}
                <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                
                <p className="mb-10 text-lg leading-relaxed text-muted flex-grow">
                  {homeCallouts.freeConsultation}
                </p>
                
                <Link
                  href={contactInfo.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--brand-gold)] px-8 py-4 text-lg font-black tracking-wide text-brand-ink shadow-md transition-all hover:scale-[1.02] hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-red-dark">
                     <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {contactInfo.phone}
                </Link>
              </div>
            </div>
          </Reveal>

        </Container>
      </section>

      {/* 3. WHAT IS PRIVATE-DUTY HOME CARE? */}
      <section className="bg-white py-20 md:py-24 border-y border-brand-gold/10">
        <Container>
          
          {/* Intro & "Ideal For" */}
          <div className="grid gap-12 lg:grid-cols-2 mb-20 items-center">
            <Reveal>
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-3">
                {privateDutyCare.subheading}
              </h2>
              <h3 className="mb-6 text-4xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                {privateDutyCare.heading}
              </h3>
              <p className="text-lg leading-relaxed text-muted">
                {privateDutyCare.description}
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-white p-8 md:p-10 border border-brand-cream shadow-sm">
                <h4 className="text-xl font-bold text-brand-ink mb-6">
                  {privateDutyCare.idealFor.title}
                </h4>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {privateDutyCare.idealFor.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-ink font-medium">
                      <svg className="h-6 w-6 shrink-0 text-brand-red mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ========================================== */}
          {/* COMPARISON TABLE (Desktop Version)           */}
          {/* ========================================== */}
          <div className="hidden md:block mb-24">
            <div className="mb-10 text-center">
              <Reveal>
                <h3 className="mb-4 text-3xl font-extrabold text-brand-ink">{careComparison.title}</h3>
                <p className="mx-auto max-w-2xl text-lg text-muted">{careComparison.subtitle}</p>
              </Reveal>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {careComparison.options.map((option, index) => (
                <Reveal key={option.type} delay={index * 0.1}>
                  <div className={`flex h-full flex-col rounded-3xl p-8 transition-transform hover:-translate-y-2 ${option.isHighlighted ? 'bg-brand-red text-white shadow-2xl md:scale-105 z-10 relative' : 'bg-white text-brand-ink border border-brand-cream shadow-sm'}`}>
                    {option.isHighlighted && (
                      <span className="mb-6 inline-block self-start rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-ink shadow-sm">
                        Glorious Home Care
                      </span>
                    )}
                    <h4 className={`mb-6 text-2xl font-bold ${option.isHighlighted ? 'text-white' : 'text-brand-red-dark'}`}>
                      {option.type}
                    </h4>
                    
                    <div className="space-y-4 flex-grow">
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Paid By</p>
                        <p className="font-medium mt-1">{option.paidBy}</p>
                      </div>
                      <hr className={option.isHighlighted ? 'border-white/20' : 'border-brand-cream'} />
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Type of Care</p>
                        <p className="font-medium mt-1">{option.careType}</p>
                      </div>
                      <hr className={option.isHighlighted ? 'border-white/20' : 'border-brand-cream'} />
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Caregiver Choice</p>
                        <p className="font-medium mt-1">{option.choice}</p>
                      </div>
                      <hr className={option.isHighlighted ? 'border-white/20' : 'border-brand-cream'} />
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Schedule Flexibility</p>
                        <p className="font-medium mt-1">{option.schedule}</p>
                      </div>
                      <hr className={option.isHighlighted ? 'border-white/20' : 'border-brand-cream'} />
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Best For</p>
                        <p className="font-medium mt-1">{option.bestFor}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ========================================== */}
          {/* COMPARISON TABLE (Mobile Parallax Version)   */}
          {/* ========================================== */}
          <div className="block md:hidden mb-20 -mx-4 sm:mx-0">
            {/* The h-[300vh] provides the scroll track distance for 3 cards */}
            <div ref={comparisonSectionRef} className="relative w-full h-[300vh]">
              <div className="sticky top-[72px] h-[calc(100vh-72px)] w-full flex flex-col pt-8 overflow-hidden bg-white/50 backdrop-blur-sm">
                
                <div className="w-full pb-4 px-4 text-center">
                  <Reveal>
                    <h3 className="mb-2 text-2xl font-extrabold text-brand-ink">{careComparison.title}</h3>
                    <p className="text-sm text-muted">{careComparison.subtitle}</p>
                  </Reveal>
                </div>

                {/* TOUCH AREA: Parallax Stacking Cards */}
                {/* `touch-pan-y` prevents mobile browsers from triggering standard back/forward gestures here */}
                <div 
                  className="relative w-full flex-grow touch-pan-y"
                  onTouchStart={handleCompTouchStart}
                  onTouchMove={handleCompTouchMove}
                  onTouchEnd={handleCompTouchEnd}
                >
                  {careComparison.options.map((option, index) => {
                    const zIndex = (index + 1) * 10;
                    const offset = 1 + index; // 1rem, 2rem, 3rem
                    
                    // Math: Divides the scroll progress into equal segments based on the number of cards
                    const translateX = index === 0 
                      ? 0 
                      : Math.max(0, (index * 100) - (comparisonProgress * (careComparison.options.length - 1) * 100));

                    return (
                      <div 
                        key={option.type}
                        className={`absolute bottom-6 w-[88vw] sm:w-[85vw] rounded-3xl p-6 flex flex-col overflow-y-auto will-change-transform shadow-2xl ${
                          option.isHighlighted 
                            ? 'bg-brand-red text-white border border-brand-red-dark' 
                            : 'bg-white text-brand-ink border border-brand-cream'
                        }`}
                        style={{
                          left: `${offset}rem`,
                          top: `${offset}rem`,
                          zIndex,
                          transform: `translateX(${translateX}vw)`,
                          transition: 'transform 0.1s ease-out'
                        }}
                      >
                        {option.isHighlighted && (
                          <span className="mb-4 inline-block self-start rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-ink shadow-sm">
                            Glorious Home Care
                          </span>
                        )}
                        <h4 className={`mb-5 text-xl font-bold ${option.isHighlighted ? 'text-white' : 'text-brand-red-dark'}`}>
                          {option.type}
                        </h4>
                        
                        <div className="space-y-3 flex-grow text-sm pb-2">
                          <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Paid By</p>
                            <p className="font-medium mt-0.5">{option.paidBy}</p>
                          </div>
                          <hr className={option.isHighlighted ? 'border-white/20' : 'border-brand-cream'} />
                          <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Type of Care</p>
                            <p className="font-medium mt-0.5">{option.careType}</p>
                          </div>
                          <hr className={option.isHighlighted ? 'border-white/20' : 'border-brand-cream'} />
                          <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Caregiver Choice</p>
                            <p className="font-medium mt-0.5">{option.choice}</p>
                          </div>
                          <hr className={option.isHighlighted ? 'border-white/20' : 'border-brand-cream'} />
                          <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Schedule Flexibility</p>
                            <p className="font-medium mt-0.5">{option.schedule}</p>
                          </div>
                          <hr className={option.isHighlighted ? 'border-white/20' : 'border-brand-cream'} />
                          <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${option.isHighlighted ? 'text-white/70' : 'text-muted/70'}`}>Best For</p>
                            <p className="font-medium mt-0.5">{option.bestFor}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>

{/* What It Includes */}
<div>
  <Reveal>
    <h3 className="mb-10 text-center text-2xl font-extrabold text-brand-ink md:text-3xl">
      {privateDutyCare.includes.title}
    </h3>
  </Reveal>

  {/* Service Cards */}
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
    {privateDutyCare.includes.services.map((service, index) => {
      const isVisible = showAllServices || index < 8;

      if (!isVisible) return null;

      return (
        <Reveal
          key={service.title}
          delay={index * 0.05}
        >
          <a
            href={service.href}
            className="group block h-full"
          >
            <div className="flex h-full flex-col items-center rounded-2xl border border-brand-cream bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-md">

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-red transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">

                {/* Personal Care */}
                {service.icon === "personal" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM5 21a7 7 0 0114 0"
                    />
                  </svg>
                )}

                {/* Companion Care */}
                {service.icon === "companionship" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}

                {/* Alzheimer's & Dementia Care */}
                {service.icon === "dementia" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.5 3a3.5 3.5 0 00-3.464 4H6a3 3 0 000 6h.036A3.5 3.5 0 0012 15.5a3.5 3.5 0 005.964-2.5H18a3 3 0 000-6h-.036A3.5 3.5 0 0014.5 3a3.48 3.48 0 00-2.5 1.05A3.48 3.48 0 009.5 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 9h.01M15 9h.01M9.5 12.5a3.5 3.5 0 005 0"
                    />
                  </svg>
                )}

                {/* Respite Care */}
                {service.icon === "respite" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v18M5 7h14M5 17h14"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7l2 4-2 6M17 7l-2 4 2 6"
                    />
                  </svg>
                )}

                {/* Post-Hospital Care */}
                {service.icon === "posthospital" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5h14v14H5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v8M8 12h8"
                    />
                  </svg>
                )}

                {/* 24-Hour Care */}
                {service.icon === "24hour" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 7v5l3 2"
                    />
                  </svg>
                )}

                {/* Medication Reminders */}
                {service.icon === "medication" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 8h6M9 12h6M9 16h3"
                    />
                  </svg>
                )}

                {/* Meal Preparation */}
                {service.icon === "meal" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 3v7a3 3 0 003 3h1V3M6 3v7M8 3v7M4 10h4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v18M12 3c4 2 5 5 5 9v9"
                    />
                  </svg>
                )}

                {/* Light Housekeeping */}
                {service.icon === "housekeeping" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 19h16M6 19l3-12h6l3 12M9 7l3-4 3 4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6"
                    />
                  </svg>
                )}

                {/* Mobility Assistance */}
                {service.icon === "mobility" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="9"
                      cy="5"
                      r="2"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 8v5l-3 5M9 11l4 3 4-1M6 18h8"
                    />
                  </svg>
                )}

                {/* Transportation & Errands */}
                {service.icon === "transit" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 17h14l-1-8H6l-1 8z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17v2M17 17v2M7 9l1-3h8l1 3"
                    />
                    <circle cx="8" cy="14" r="1" />
                    <circle cx="16" cy="14" r="1" />
                  </svg>
                )}

                {/* Short-Term Care */}
                {service.icon === "shortterm" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 7v5l3 2"
                    />
                  </svg>
                )}

                {/* Long-Term Care */}
                {service.icon === "longterm" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21s-7-4.35-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.65-9 9-9 9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v5M9.5 11.5h5"
                    />
                  </svg>
                )}

                {/* Customized Care Plans */}
                {service.icon === "customized" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 8h8M8 12h8M8 16h5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 16l1.5 1.5L19 15"
                    />
                  </svg>
                )}

              </div>

              {/* Service Name */}
              <h5 className="font-bold text-brand-ink transition-colors duration-300 group-hover:text-brand-red">
                {service.title}
              </h5>

              {/* Description */}
              <p className="mt-2 text-xs text-muted">
                {service.desc}
              </p>

            </div>
          </a>
        </Reveal>
      );
    })}
  </div>

  {/* Show More / Show Less */}
  <div className="mt-10 flex justify-center">
    <button
      type="button"
      onClick={() => setShowAllServices((current) => !current)}
      className="group inline-flex items-center gap-3 rounded-full border border-brand-red px-7 py-3 text-sm font-bold uppercase tracking-wider text-brand-red transition-all duration-300 hover:bg-brand-red hover:text-white"
    >
      <span>
        {showAllServices ? "Show Less" : "Show More"}
      </span>

      <svg
        className={`h-4 w-4 transition-transform duration-300 ${
          showAllServices ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  </div>

  {/* Footer */}
  <Reveal>
    <p className="mt-10 text-center text-sm font-semibold uppercase tracking-widest text-brand-red">
      {privateDutyCare.includes.footer}
    </p>
  </Reveal>
</div>
        </Container>
      </section>

          {/* 7. HOW TO CHOOSE THE BEST HOME CARE */}
          <section className="bg-white border-y border-brand-gold/10">

            <Container>

              {/* =========================
                  MOBILE VERSION
                  ========================= */}
              <div className="lg:hidden">

                {/* MOBILE STICKY HEADER */}
                <div className="sticky top-0 z-40 -mx-4 px-4 py-6 pt-[70px] bg-white">

                  {/* Subtitle */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="h-[2px] w-8 shrink-0 bg-brand-red"></span>

                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red text-center">
                      {fiveFactors.subtitle}
                    </h2>

                    <span className="h-[2px] w-8 shrink-0 bg-brand-red"></span>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-3xl md:text-4xl font-extrabold text-brand-ink leading-tight">
                    {fiveFactors.title}
                  </h3>

                </div>


                {/* MOBILE SCROLLING OPTIONS */}
                <div className="flex flex-col gap-16 py-12">

                  {fiveFactors.factors.map((factor, index) => (
                    <Reveal key={factor.num} delay={index * 0.1}>

                      <div className="flex flex-col group">

                        {/* Number */}
                        <span className="text-6xl font-black text-brand-gold/60 block tracking-tighter select-none">
                          {factor.num}
                        </span>

                        {/* Title */}
                        <h3 className="mt-2 text-3xl font-extrabold text-brand-ink">
                          {factor.title}
                        </h3>

                        {/* Accent */}
                        <div className="my-6 h-[3px] w-16 bg-brand-red transition-all duration-500 group-hover:w-24"></div>

                        {/* Description */}
                        <p className="max-w-xl text-lg text-muted leading-relaxed">
                          {factor.desc}
                        </p>

                      </div>

                    </Reveal>
                  ))}

                </div>

              </div>


              {/* =========================
                  DESKTOP VERSION
                  ========================= */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-20 items-start py-32">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">

                  <Reveal className="flex flex-col items-start">

                    {/* Eyebrow */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-[2px] w-8 bg-brand-red"></span>

                      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                        {fiveFactors.subtitle}
                      </h2>
                      <span className="h-[2px] w-8 bg-brand-red"></span>

                    </div>

                    {/* Title */}
                    <h3 className="text-5xl font-extrabold text-brand-ink leading-tight mb-6">
                      {fiveFactors.title}
                    </h3>

                    {/* CTA */}
                    <div className="w-full">
                      <Link
                        href={contactInfo.phoneHref}
                        className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-red px-8 py-4 font-bold text-white transition-all hover:bg-brand-red-dark shadow-[0_8px_30px_rgb(255,49,49,0.2)] hover:shadow-[0_8px_30px_rgb(199,36,57,0.3)] hover:-translate-y-1"
                      >
                        <span>Call For Guidance</span>

                        <svg
                          className="h-5 w-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>

                  </Reveal>

                </div>


                {/* RIGHT COLUMN */}
                <div className="lg:col-span-7 flex flex-col gap-24">

                  {fiveFactors.factors.map((factor, index) => (
                    <Reveal key={factor.num} delay={index * 0.1}>

                      <div className="flex flex-col group">

                        {/* Number */}
                        <span className="text-7xl font-black text-brand-gold/60 block tracking-tighter select-none">
                          {factor.num}
                        </span>

                        {/* Title */}
                        <h3 className="mt-2 text-4xl font-extrabold text-brand-ink">
                          {factor.title}
                        </h3>

                        {/* Accent */}
                        <div className="my-6 h-[3px] w-16 bg-brand-red transition-all duration-500 group-hover:w-24"></div>

                        {/* Description */}
                        <p className="max-w-xl text-xl text-muted leading-relaxed">
                          {factor.desc}
                        </p>

                      </div>

                    </Reveal>
                  ))}

                </div>

              </div>

            </Container>

          </section>

      {/* 9. BOTTOM CTA SECTION (Compact Version) */}
      <section className="bg-brand-red-dark py-12 md:py-16 text-center text-white border-t-4 border-brand-gold">
        <Container className="max-w-3xl">
          <Reveal className="flex flex-col items-center">
            
            {/* Scaled-down Gold Speech Bubble Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
               </svg>
            </div>

            {/* Scaled-down Heading */}
            <h2 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let's Talk About<br />Your Loved One's Care Needs
            </h2>
            
            {/* Scaled-down Description */}
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              A free in-home consultation can help families understand care options, daily support needs, and the best plan for a loved one's comfort and safety at home.
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Call Us Today
              </p>
              
              {/* Scaled-down Button */}
              <Link
                href={contactInfo.phoneHref}
                className="inline-block transform rounded-full bg-brand-gold px-10 py-4 text-lg font-black tracking-wide text-brand-ink shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                {contactInfo.phone}
              </Link>
            </div>

            {/* Tighter Footer Taglines */}
            <div className="mx-auto mt-12 w-full max-w-2xl border-t border-white/20 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/90">
                Serving Seniors Across San Jose & the Bay Area
              </p>
              <div className="flex flex-col items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold sm:flex-row sm:gap-4 md:text-sm">
                <span>Compassionate Care.</span>
                <span className="hidden opacity-50 sm:inline">•</span>
                <span>Trusted Support.</span>
                <span className="hidden opacity-50 sm:inline">•</span>
                <span>Peace of Mind.</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

    </div>
  );
}