import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Next.js Image component
import Container from "@/components/Container";
import DetailCard from "@/components/DetailCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, homeCallouts, servicesCta } from "@/data/global";

import { 
  servicesHero, 
  mainServices, 
  sharedServiceContent,
  companionCareServices, 
  aideServices 
} from "@/data/services";
import { homeHero } from "@/data/home";

export const metadata: Metadata = {
  title: "Services | Glorious Home Care",
  description: "Supporting Independence at Home. Providing Peace of Mind for Families.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. UPDATED HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] text-white min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] py-12 flex items-center">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-[color:var(--brand-ink)] z-0">
          <Image 
            src={servicesHero.bannerImage} // Replace with page source: servicesHero.bannerImage, heroImage, etc.
            alt={servicesHero.title}
            fill 
            className="object-cover object-right"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 35%, black 70%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 35%, black 70%)',
            }}
            priority
          />
          
          {/* Dark Tint Overlay */}
          <div className="absolute inset-0 bg-[color:var(--brand-ink)]/40 pointer-events-none" />
        </div>

        {/* Abstract Blur Orbs */}
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl z-10 pointer-events-none" />
        <div className="absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-white/5 blur-3xl z-10 pointer-events-none" />

        <Container className="relative z-20 w-full">
          <div className="max-w-3xl space-y-4">
            
            {/* Top Welcome Title + Badge */}
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

            {/* Page Heading Title */}
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-md">
                {servicesHero.title}
              </h1>
            </Reveal>

            {/* Subtitle / Description (If available) */}
            {servicesHero.subtitle && (
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl drop-shadow-sm">
                  {servicesHero.subtitle}
                </p>
              </Reveal>
            )}

            {/* Call to Action Buttons */}
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

      {/* 2. ACCORDION WITH CUSTOM IMAGE ICONS */}
      <section className="relative overflow-hidden bg-background pb-16 pt-16 md:pb-24">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

        <Container className="max-w-[1400px] relative z-10">
          <SectionHeading title="Home Care Options" subtitle="Compassionate Care You Trust" />
          
          <Reveal className="mt-12">
            <div className="flex h-[700px] flex-col md:h-[450px] lg:h-[500px] md:flex-row gap-2 md:gap-3">
              {mainServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`
                    group relative flex flex-1 min-w-0 min-h-0 cursor-pointer items-center justify-center 
                    rounded-2xl md:rounded-3xl transition-all duration-700 ease-out overflow-hidden
                    backdrop-blur-md bg-white/60 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                    hover:flex-[4] hover:bg-brand-red/90 hover:border-brand-red/50 hover:shadow-[0_15px_50px_rgb(255,49,49,0.35)]
                  `}
                >
                  
                  {/* DEFAULT STATE */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-500 group-hover:opacity-0 p-2 md:p-3">
                    <span className="md:hidden text-sm font-bold tracking-widest text-brand-ink uppercase whitespace-nowrap">
                      {service.title}
                    </span>
                    <span 
                      className="hidden md:block text-sm lg:text-base font-bold tracking-widest text-brand-ink uppercase whitespace-nowrap transition-colors duration-500"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {service.title}
                    </span>
                  </div>

                  {/* EXPANDED STATE */}
                  <div className="absolute inset-0 flex flex-col justify-end opacity-0 transition-opacity duration-700 delay-150 group-hover:opacity-100 p-5 md:p-6 lg:p-8">
                    
                    {/* CUSTOM IMAGE ICON INJECTED HERE */}
                    <div className="mb-auto mt-1 hidden rounded-full bg-white/20 border border-white/30 p-3 backdrop-blur-md shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/30 md:inline-block w-fit">
                      <div className="relative h-6 w-6 lg:h-8 lg:w-8">
                        <Image 
                          src={service.iconImage} 
                          alt={`${service.title} Icon`}
                          fill
                          className="object-contain brightness-0 invert" 
                        />
                      </div>
                    </div>
                    
                    <div className="w-full md:min-w-[260px] lg:min-w-[320px]">
                      <h3 className="mb-2 text-lg font-bold leading-tight text-white md:mb-3 md:text-2xl lg:text-3xl whitespace-nowrap drop-shadow-sm">
                        {service.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-xs text-white/90 sm:line-clamp-3 md:line-clamp-3 lg:line-clamp-4 md:text-sm lg:text-base max-w-xl">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center text-xs font-bold uppercase tracking-wide text-brand-gold transition-colors group-hover:text-white lg:text-sm">
                        Learn more <span className="ml-2 text-base leading-none">&rarr;</span>
                      </div>
                    </div>
                  </div>
                  
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>



      {/* 6. BOTTOM CTA SECTION */}
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