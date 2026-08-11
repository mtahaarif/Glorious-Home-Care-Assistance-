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
import { homeHero, homeProcess, homeServices, whoWeServe } from "@/data/home";

export const metadata: Metadata = {
  title: "Services | Glorious Home Care",
  description: "Supporting Independence at Home. Providing Peace of Mind for Families.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. UPDATED HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden bg-brand-cream min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
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
        
        <Container className="relative z-20 w-full">
          {/* Liquid Frosted Glass Content Panel (Tighter Padding) */}
          <div className="max-w-xl space-y-4 rounded-3xl bg-white/40 sm:bg-white/30 backdrop-blur-2xl border border-white/50 p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <Reveal delay={0.05}>
              {/* Scaled Headline from text-6xl to text-3xl/4xl */}
              <h1 className="text-2xl font-extrabold leading-tight text-brand-ink sm:text-3xl lg:text-4xl drop-shadow-sm">
                {servicesHero.title}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              {/* Scaled Subhead from text-xl to text-base */}
              <p className="text-sm leading-relaxed text-brand-ink/80 sm:text-base font-medium max-w-lg">
                {servicesHero.subtitle}
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
                  href="/request-care"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-white bg-white/40 backdrop-blur-md px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Request Care Today!
                </Link>
              </div>
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
            {[...mainServices, ...mainServices].map((service, index) => (
              <div 
                key={index} 
                className="w-[320px] sm:w-[380px] shrink-0 flex flex-col rounded-3xl bg-white border border-brand-cream/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group/card cursor-pointer overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-[220px] w-full overflow-hidden bg-brand-cream shrink-0">
                  {/* Changed service.image to service.bannerImage */}
                  {service.bannerImage && (
                    <Image 
                      src={service.bannerImage}
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
                  
                  {/* Correctly pulling the slug from the mapped mainServices item */}
                  <Link href={`/services/${service.slug}`}
                   className="flex items-center gap-2 text-brand-red-dark font-bold text-sm uppercase tracking-wider mt-auto group-hover/card:text-brand-red transition-colors">
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