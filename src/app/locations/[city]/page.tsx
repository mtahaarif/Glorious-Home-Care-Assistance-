import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, homeCallouts, servicesCta } from "@/data/global";
import { locationsHero, serviceAreas } from "@/data/locations";
import { mainServices } from "@/data/services"; // Corrected Import!
import {sharedServiceContent} from "@/data/services"; // Import shared content for services
import { homeHero } from "@/data/home";
import {homeServices} from "@/data/home"; // Import home services for the ticker
import Image from "next/image"; // Added Import
// 1. Generate static paths for all cities in our locations.ts data
export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    city: area.slug,
  }));
}

// 2. Generate dynamic SEO metadata for each specific city
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const area = serviceAreas.find((a) => a.slug === resolvedParams.city);
  
  if (!area) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `Home Care Services in ${area.name}, CA | Glorious Home Care`,
    description: area.description,
  };
}

// 3. The Dynamic Page Component
export default async function CityLocationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  
  // Find the current city data based on the URL slug
  const area = serviceAreas.find((a) => a.slug === resolvedParams.city);

  // If someone types a random city URL that isn't in our array, show a 404
  if (!area) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* 1. HERO BANNER (Compact Glass & Scaled Typography) */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={locationsHero.bannerImage}
            alt={locationsHero.title}
            fill 
            className="object-cover object-right"
            priority
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                Home Care Services in {area.name}, CA
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {area.description}
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
                  href="/request-care"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Request Care Today!
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* LOCALIZED INTRO SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1fr_0.8fr] md:py-24">
          <Reveal className="space-y-6">
            <SectionHeading 
              title={`Compassionate Care for ${area.name} Families`} 
              subtitle="Aging Safely at Home" 
            />
            <p className="text-base leading-relaxed text-muted">
              At Glorious Home Care Assistance, we understand how important it is for seniors and adults in <strong>{area.name}</strong> to maintain their independence in the comfort of familiar surroundings. 
            </p>
            <p className="text-base leading-relaxed text-muted">
              Whether your loved one needs a few hours of companionship a week, reliable transportation to medical appointments, or 24/7 personal care assistance, our carefully matched caregivers are here to provide peace of mind for your entire family.
            </p>
            <Link 
              href="/about" 
              className="mt-4 inline-block font-semibold text-brand-red hover:underline"
            >
              Learn more about our agency &rarr;
            </Link>
          </Reveal>

          {/* Contact Card */}
            <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              
              {/* Decorative Blur Background Element */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Local Care Coordination
              </h2>
                <h4 className="mb-6 text-3xl font-extrabold text-brand-ink">
                 Need care in {area.name}?
                </h4>
                
                {/* Horizontal Divider Line */}
                <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                
                <p className="mb-10 text-lg leading-relaxed text-muted flex-grow">
                  Our care coordinators are standing by to answer your questions and schedule a free in-home assessment
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

      {/* RELEVANT SERVICES PREVIEW */}
      <section className="border-t border-brand-gold/20 bg-white">
        <Container className="py-16 md:py-24">
          <SectionHeading 
            title={`Our Services in ${area.name}`} 
          />
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

          
          <div className="mt-12 flex justify-center">
            <Reveal>
              <Link 
                href="/services"
                className="rounded-full border-2 border-brand-red px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-red transition hover:bg-brand-red hover:text-white"
              >
                See All Services
              </Link>
            </Reveal>
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