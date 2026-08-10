import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import LocationsDirectory from "@/components/LocationsDirectory";
import { contactInfo, homeCallouts, servicesCta } from "@/data/global";
import { locationsHero, locationsIntro } from "@/data/locations";
import { sharedServiceContent } from "@/data/services"
import Image from "next/image"; // Added Import
import { aboutHero } from "@/data/about";
import { homeHero } from "@/data/home";
export const metadata: Metadata = {
  title: "Areas We Serve | Bay Area & Northern California",
  description: "Glorious Home Care Assistance provides compassionate in-home care across Santa Clara, Alameda, San Francisco, San Mateo, and surrounding California counties.",
};

export default function LocationsPage() {
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
                {locationsHero.title}
              </h1>
            </Reveal>

            {/* Subtitle / Description (If available) */}
            {locationsHero.subtitle && (
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl drop-shadow-sm">
                  {locationsHero.subtitle}
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


      {/* INTRO SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <Reveal className="space-y-6">
            <SectionHeading title={locationsIntro.title} />
            {locationsIntro.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
          
          <Reveal className="h-fit rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Service Area Inquiries
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Not sure if we cover your exact location? Give us a call, and our care coordinators will be happy to assist you.
            </p>
            <Link
              href={contactInfo.phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
            >
              Call {contactInfo.phone}
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* COMBINED DIRECTORY SECTION (Interactive Client Component) */}
      <section className="bg-[#fafafb] border-t border-brand-gold/20 relative">
        <Container className="py-16 md:py-24">
          <LocationsDirectory />
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