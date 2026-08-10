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
  whyChooseUsFeatures, 
  whoWeServe, 
  clientReviews 
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
      
      {/* 1. DYNAMIC HOMEPAGE HERO BANNER (FIXED HEIGHT) */}
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] text-white h-[330px] sm:h-[370px] lg:h-[410px] flex items-center">
        
        {/* Background Image Carousel Container */}
        <div className="absolute inset-0 bg-[color:var(--brand-ink)] z-0">
          {homeHero.bgImages && homeHero.bgImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Glorious Home Care Banner ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover object-right transition-opacity duration-[2000ms] ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 35%, black 70%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 35%, black 70%)',
              }}
            />
          ))}

          {/* Dark Tint Overlay */}
          <div className="absolute inset-0 bg-[color:var(--brand-ink)]/40 pointer-events-none" />
        </div>

        {/* Abstract Blur Orbs */}
        <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl z-10 pointer-events-none" />
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-white/5 blur-3xl z-10 pointer-events-none" />
        
        <Container className="relative z-20 w-full py-0">
          <div className="max-w-3xl space-y-4">
            <Reveal>
              <div className="flex items-center gap-3">
                <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                  {homeHero.welcome}
                </p>
                <span className="rounded-full bg-white/20 border border-white/30 px-3 py-1 text-xs font-bold backdrop-blur-sm shadow-sm">
                  {homeHero.badge}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-md">
                {homeHero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl drop-shadow-sm">
                {homeHero.subhead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={contactInfo.phoneHref}
                  className="rounded-full bg-[color:var(--brand-gold)] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[color:var(--brand-red-dark)] shadow-xl transition-all hover:scale-105 hover:bg-white"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-[color:var(--brand-ink)]"
                >
                  {homeCallouts.optionsPrompt}
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal className="space-y-6">
            <SectionHeading title={homeAbout.title} subtitle="About Us" />
            <p className="text-base leading-7 text-muted">
              {homeAbout.description}
            </p>
            <Link href="/about" className="inline-block font-semibold text-brand-red hover:underline">
              Know more about us &rarr;
            </Link>
          </Reveal>
          <Reveal className="rounded-3xl bg-brand-cream p-8 shadow-sm sm:p-10" delay={0.1}>
            <SectionHeading title="Free In-Home Assessment" />
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              {homeCallouts.freeConsultation}
            </p>
            <p className="mt-6 text-2xl font-bold text-brand-red">
              {contactInfo.phone}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* SERVICES BRIEF SECTION */}
      <section className="bg-brand-cream">
        <Container className="py-16 md:py-24">
          <SectionHeading title={homeServices.title} subtitle={homeServices.subtitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
                  <h3 className="text-lg font-bold text-brand-ink">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <Link href="/services" className="mt-6 text-sm font-semibold text-brand-red hover:underline">
                    Learn more &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CARE PROCESS SECTION */}
      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <SectionHeading title={homeProcess.title} subtitle="How Home Care Works" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {homeProcess.steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1}>
                <div className="space-y-4">
                  <span className="inline-block rounded-full bg-brand-gold/20 px-4 py-1 text-xl font-black text-brand-gold-dark">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-brand-ink">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHO WE SERVE SECTION */}
      <section className="bg-brand-cream border-y border-brand-gold/20">
        <Container className="py-16 md:py-24">
          <SectionHeading title={whoWeServe.title} subtitle={whoWeServe.subtitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm border border-brand-cream h-full">
                  <h3 className="text-lg font-bold text-brand-ink">{group.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{group.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <SectionHeading title={whyChooseUsFeatures.title} subtitle="Why Us" />
            <p className="mt-6 text-lg text-muted">{whyChooseUsFeatures.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUsFeatures.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.05}>
                <div className="rounded-2xl bg-brand-cream px-6 py-8 h-full border border-brand-gold/10">
                  <h4 className="font-bold text-brand-red">{feature.title}</h4>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-brand-cream">
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

      {/* BOTTOM CTA SECTION */}
      <section className="bg-brand-red-dark py-10 text-center text-white md:py-10">
        <Container className="max-w-3xl">
          <Reveal className="space-y-4">
            <h2 className="whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl">
              {sharedServiceContent.bottomCta.message}
            </h2>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>
              
              <Link
                href={contactInfo.phoneHref}
                className="inline-block transform rounded-full bg-brand-gold px-12 py-5 text-xl font-black text-brand-red-dark shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                {sharedServiceContent.bottomCta.phone}
              </Link>
              
              <a 
                href={`mailto:${sharedServiceContent.bottomCta.email}`} 
                className="mt-4 font-medium text-white/80 transition hover:text-white"
              >
                {sharedServiceContent.bottomCta.email}
              </a>
            </div>

            <div className="mx-auto mt-12 max-w-lg border-t border-white/10 pt-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
                {sharedServiceContent.bottomCta.tagline}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}