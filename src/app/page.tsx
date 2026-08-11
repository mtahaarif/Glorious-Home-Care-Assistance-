"use client"; // Required for the useEffect image slider

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { brandTagline, contactInfo, homeCallouts } from "@/data/global";
import { 
  homeHero, 
  homeAbout, 
  homeServices, 
  homeProcess, 
  whoWeServe, 
  clientReviews,
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
  // Image Slider State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="flex flex-col">
      
{/* 1. DYNAMIC HOMEPAGE HERO BANNER (Compact Glass & Scaled Typography) */}
      <section className="relative overflow-hidden bg-brand-cream min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
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
        </div>
        
        <Container className="relative z-20 w-full">
          {/* Liquid Frosted Glass Content Panel (Tighter Padding) */}
          <div className="max-w-xl space-y-4 rounded-3xl bg-white/40 sm:bg-white/30 backdrop-blur-2xl border border-white/50 p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-[2px] w-6 bg-brand-red hidden sm:block"></span>
                {/* Scaled from text-sm to text-xs */}
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-dark">
                  {homeHero.welcome}
                </p>
                {/* Scaled badge from text-xs to text-[10px] */}
                <span className="rounded-full bg-white/60 border border-white/80 px-2.5 py-1 text-[10px] font-bold text-brand-ink backdrop-blur-md">
                  {homeHero.badge}
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={0.05}>
              {/* Scaled Headline from text-6xl to text-3xl/4xl */}
              <h1 className="text-2xl font-extrabold leading-tight text-brand-ink sm:text-3xl lg:text-4xl drop-shadow-sm">
                {homeHero.headline}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              {/* Scaled Subhead from text-xl to text-base */}
              <p className="text-sm leading-relaxed text-brand-ink/80 sm:text-base font-medium max-w-lg">
                {homeHero.subhead}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                {/* Scaled Buttons (Reduced padding and text size) */}
                <Link
                  href={contactInfo.phoneHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-white bg-white/40 backdrop-blur-md px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
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

          {/* Comparison Table */}
          <div className="mb-24">
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

          {/* What It Includes */}
          <div>
            <Reveal>
              <h3 className="mb-10 text-center text-2xl font-extrabold text-brand-ink md:text-3xl">
                {privateDutyCare.includes.title}
              </h3>
            </Reveal>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {privateDutyCare.includes.services.map((service, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-brand-cream hover:border-brand-gold/50 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="h-12 w-12 rounded-full bg-brand-cream flex items-center justify-center mb-4 text-brand-red">
                      {service.icon === 'mobility' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                      {service.icon === 'personal' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                      {service.icon === 'meal' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>}
                      {service.icon === 'medication' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                      {service.icon === 'routine' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                      {service.icon === 'safety' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                      {service.icon === 'transit' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
                      {service.icon === 'companionship' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                    </div>
                    <h5 className="font-bold text-brand-ink">{service.title}</h5>
                    <p className="text-xs text-muted mt-2">{service.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand-red mt-10">
                {privateDutyCare.includes.footer}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

{/* 4. WHO WE SERVE SECTION (Static Grid) */}
      <section className="bg-surface py-20 md:py-32">
        <Container>
          <Reveal>
            {/* Centered Heading Layout */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-brand-red"></span>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  {whoWeServe.title}
                </h2>
                <span className="h-[2px] w-12 bg-brand-red"></span>
              </div>
              <h3 className="text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                {whoWeServe.subtitle}
              </h3>
            </div>
          </Reveal>

          {/* Static Grid Layout */}
          <div className="grid gap-6 md:grid-cols-3">
            {whoWeServe.groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-3xl bg-white border border-brand-cream/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group/card cursor-pointer overflow-hidden">
                  
                  {/* Image Section */}
                  <div className="relative h-[220px] w-full overflow-hidden bg-brand-cream">
                    {group.image && (
                      <Image 
                        src={group.image}
                        alt={group.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-brand-ink/10 group-hover/card:bg-transparent transition-colors duration-300"></div>
                  </div>
                  
                  {/* Text Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover/card:text-brand-red transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6 flex-grow">
                      {group.description}
                    </p>
                    <Link href="/services" className="flex items-center gap-2 text-brand-red-dark font-bold text-sm uppercase tracking-wider mt-auto group-hover/card:text-brand-red transition-colors">
                      Learn More
                      <svg className="w-5 h-5 transform transition-transform group-hover/card:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. HOME CARE OPTIONS (Infinite Ticker) */}
      <section className="bg-white border-y border-brand-gold/10 py-20 md:py-32 overflow-hidden">
        
        {/* Keyframes for the Infinite Ticker */}
        <style>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
          }
          .ticker-wrapper:hover .animate-infinite-scroll {
            animation-play-state: paused;
          }
        `}</style>

        <Container>
          <Reveal>
            {/* Centered Heading Layout */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-brand-red"></span>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  {homeServices.title}
                </h2>
                <span className="h-[2px] w-12 bg-brand-red"></span>
              </div>
              <h3 className="text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                {homeServices.subtitle}
              </h3>
            </div>
          </Reveal>
        </Container>

        {/* Infinite Scroll Ticker Container */}
        <div className="relative mt-8 flex overflow-hidden ticker-wrapper">
          <div className="flex w-max animate-infinite-scroll gap-6 px-3">
            {/* Duplicate array to create a seamless loop */}
            {[...homeServices.services, ...homeServices.services].map((service, index) => (
              <div 
                key={index} 
                className="w-[320px] sm:w-[380px] shrink-0 flex flex-col rounded-3xl bg-white border border-brand-cream/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group/card cursor-pointer overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-[220px] w-full overflow-hidden bg-brand-cream shrink-0">
                  {service.image && (
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-brand-ink/10 group-hover/card:bg-transparent transition-colors duration-300"></div>
                </div>
                
                {/* Text Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover/card:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link href="/services" className="flex items-center gap-2 text-brand-red-dark font-bold text-sm uppercase tracking-wider mt-auto group-hover/card:text-brand-red transition-colors">
                    Learn More
                    <svg className="w-5 h-5 transform transition-transform group-hover/card:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>

{/* 6. OUR CARE PROCESS (Structured Card Layout) */}
      <section className="bg-surface py-20 md:py-32">
        <Container>
          <Reveal>
            {/* Centered Heading Layout matching previous sections */}
            <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-brand-red"></span>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  How Home Care Works
                </h2>
                <span className="h-[2px] w-12 bg-brand-red"></span>
              </div>
              <h3 className="text-4xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                {homeProcess.title}
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {homeProcess.steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-white border border-brand-cream shadow-sm transition-all duration-300 hover:border-brand-gold/40 hover:shadow-xl hover:-translate-y-2 group cursor-default p-8 md:p-10">
                  
                  {/* Big Gold Number */}
                  <span className="text-5xl md:text-6xl font-black text-brand-gold block tracking-tighter select-none mb-4">
                    {step.step}
                  </span>
                  
                  {/* Heading Title */}
                  <h3 className="text-2xl font-bold text-brand-ink mb-6 transition-colors duration-300 group-hover:text-brand-red">
                    {step.title}
                  </h3>
                  
                  {/* Horizontal Divider Line */}
                  <div className="h-[2px] w-full bg-brand-cream mb-6 transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                  
                  {/* Description below the line */}
                  <p className="text-lg text-muted leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
{/* 7. HOW TO CHOOSE THE BEST HOME CARE (Sticky Scroll Minimalist) */}
      <section className="bg-white py-20 md:py-32 border-y border-brand-gold/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* LEFT COLUMN: Sticky Header & Description */}
{/* LEFT COLUMN: Sticky Header & Description */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-start">
              <Reveal className="flex flex-col items-start">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-[2px] w-8 bg-brand-red"></span>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                    {fiveFactors.subtitle}
                  </h2>
                </div>
                
                {/* Main Title */}
                <h3 className="text-4xl font-extrabold text-brand-ink md:text-5xl leading-tight mb-6">
                  {fiveFactors.title}
                </h3>
                
                {/* Upgraded CTA Button */}
                <div className="hidden lg:block w-full">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

              </Reveal>
            </div>

            {/* RIGHT COLUMN: Minimalist Vertically Scrolling List */}
            <div className="lg:col-span-7 flex flex-col gap-16 md:gap-24 lg:pt-0 pt-10">
              {fiveFactors.factors.map((factor, index) => (
                <Reveal key={factor.num} delay={index * 0.1}>
                  <div className="flex flex-col group">
                    
                    {/* Minimalist Big Number */}
                    <span className="text-6xl md:text-7xl font-black text-brand-gold/60 block tracking-tighter select-none">
                      {factor.num}
                    </span>
                    
                    {/* Huge Heading Title */}
                    <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-ink">
                      {factor.title}
                    </h3>
                    
                    {/* Red Accent Line */}
                    <div className="my-6 h-[3px] w-16 bg-brand-red transition-all duration-500 group-hover:w-24"></div>
                    
                    {/* Description */}
                    <p className="max-w-xl text-lg md:text-xl text-muted leading-relaxed">
                      {factor.desc}
                    </p>
                    
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col gap-10">
            <SectionHeading title="What Families Say" subtitle={brandTagline} />
            <div className="grid gap-6 md:grid-cols-2">
              {clientReviews.map((review, index) => (
                <Reveal key={review.author} delay={index * 0.1}>
                  <TestimonialCard
                    quote={review.quote}
                    author={review.author}
                    endIcon={review.hasHeartIcon ? <HeartIcon /> : undefined}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>



      {/* 9. BOTTOM CTA SECTION */}
      <section className="bg-brand-red-dark py-16 text-center text-white md:py-24 border-t-4 border-brand-gold">
        <Container className="max-w-3xl">
          <Reveal className="flex flex-col items-center">
            
            {/* Gold Speech Bubble Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-8 w-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
               </svg>
            </div>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Let's Talk About<br />Your Loved One's Care Needs
            </h2>
            
            <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
              A free in-home consultation can help families understand care options, daily support needs, and the best plan for a loved one's comfort and safety at home.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                Call Us Today
              </p>
              
              <Link
                href={contactInfo.phoneHref}
                className="inline-block transform rounded-full bg-brand-gold px-12 py-5 text-xl font-black tracking-wide text-brand-ink shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-3xl"
              >
                {contactInfo.phone}
              </Link>
            </div>

            {/* Footer Taglines */}
            <div className="mx-auto mt-16 w-full max-w-2xl border-t border-white/20 pt-10">
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-white/90">
                Serving Seniors Across San Jose & the Bay Area
              </p>
              <div className="flex flex-col items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-gold sm:flex-row sm:gap-4 md:text-base">
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