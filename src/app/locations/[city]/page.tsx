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
      
{/* STATIC HERO BANNER WITH WELCOME BADGE & ACTION BUTTONS */}
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] text-white min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] py-12 flex items-center">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-[color:var(--brand-ink)] z-0">
          <Image 
            src={locationsHero.bannerImage} // Replace with page source: servicesHero.bannerImage, heroImage, etc.
            alt={locationsHero.title}
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
                Home Care Services in {area.name}, CA
              </h1>
            </Reveal>

            {/* Subtitle / Description (If available) */}
            {area.description && (
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl drop-shadow-sm">
                  {area.description}
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
          <Reveal className="h-fit rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Local Care Coordination
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-ink">
              Need care in {area.name}?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Our care coordinators are standing by to answer your questions and schedule a free in-home assessment.
            </p>
            <Link
              href={contactInfo.phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
            >
              Call {contactInfo.phone}
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* RELEVANT SERVICES PREVIEW */}
      <section className="border-t border-brand-gold/20 bg-brand-cream">
        <Container className="py-16 md:py-24">
          <SectionHeading 
            title={`Our Services in ${area.name}`} 
          />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Mapping over mainServices */}
            {mainServices.slice(0, 3).map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white bg-white p-8 shadow-sm transition hover:shadow-md">
                  <h3 className="text-xl font-bold text-brand-ink">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {service.description}
                  </p>
                  <Link 
                    href="/services" 
                    className="mt-6 inline-block text-sm font-semibold text-brand-red hover:underline"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
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