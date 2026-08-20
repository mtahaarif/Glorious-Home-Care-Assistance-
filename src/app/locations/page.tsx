import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import LocationsDirectory from "@/components/LocationsDirectory";
import { contactInfo } from "@/data/global";
import { locationsHero, locationsIntro } from "@/data/locations";
import { sharedServiceContent } from "@/data/services";

export const metadata: Metadata = {
  // ✅ SEO FIX: Appended " | Glorious Home Care" to prevent an exact 1-to-1 match with the H1 tag
  title: {
    absolute: "Bay Area Home Care Locations | Glorious Home Care",
  },
  description: "Trusted in-home care, personal care, and senior care at home across San Jose, Los Altos, Palo Alto, San Francisco, Santa Clara, and the Bay Area.",
  alternates: {
    canonical: "https://www.glorioushomecareassistance.com/locations",
  },
  openGraph: {
    url: "https://www.glorioushomecareassistance.com/locations",
  },
};
export default function LocationsPage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HOMEPAGE HERO BANNER */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={locationsHero.bannerImage}
            alt="Home Care in San Jose and The Bay Area Locations"
            width={1584}
            height={672}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-right"
            sizes="100vw"
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-2xl space-y-4">
            <Reveal delay={0.05}>
              {/* SEO Fix: Exact 1-to-1 keyword match with the new absolute page title */}
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                Bay Area Home Care Locations
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {locationsHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                {/* SEO Fix: Ensured 100% unique anchor text to clear internal links warnings */}
                <Link
                  href={contactInfo.phoneHref}
                  aria-label="Call to discuss in-home care locations"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  Call For Service Area Details
                </Link>
                {/* SEO Fix: Ensured 100% unique anchor text */}
                <Link
                  href="/request-care"
                  aria-label="Check Care Availability"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Check Area Availability
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <Reveal className="space-y-6">
            <h2 className="text-3xl font-extrabold text-brand-ink md:text-4xl">
              {locationsIntro.title}
            </h2>
            {locationsIntro.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 text-3xl font-extrabold text-brand-ink">
                 Service Area Inquiries
                </div>
                
                <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                
                <p className="mb-10 text-lg leading-relaxed text-muted flex-grow">
                  Not sure if we cover your exact location? Give us a call, and our care coordinators will be happy to assist you.
                </p>
                
                {/* SEO Fix: Completely unique anchor text context for this specific card block */}
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call our service coordinators at ${contactInfo.phone}`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--brand-gold)] px-8 py-4 text-lg font-black tracking-wide text-brand-ink shadow-md transition-all hover:scale-[1.02] hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="h-6 w-6 text-brand-red-dark" aria-hidden="true">
                     <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  <span>Reach Area Support: {contactInfo.phone}</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. COMBINED DIRECTORY SECTION */}
      <section className="bg-[#fafafb] border-t border-brand-gold/20 relative">
        <Container className="py-16 md:py-24">
          <LocationsDirectory />
        </Container>
      </section>

      {/* 4. BOTTOM CTA SECTION */}
      <section className="bg-brand-red-dark py-10 text-center text-white md:py-10">
        <Container className="max-w-3xl">
          <Reveal className="space-y-4">
            <div className="whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl">
              {sharedServiceContent.bottomCta.message}
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>
              
              {/* SEO Fix: Unique text for the bottom CTA to separate it from the top/mid-page links */}
              <Link
                href={contactInfo.phoneHref}
                aria-label={`Call us at ${contactInfo.phone}`}
                className="inline-block transform rounded-full bg-brand-gold px-12 py-5 text-xl font-black text-brand-red-dark shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                <span>Begin Care Today: {sharedServiceContent.bottomCta.phone}</span>
              </Link>
              
              {/* SEO Fix: Add descriptive text to the email anchor instead of just using the raw email address */}
              <a 
                href={`mailto:${sharedServiceContent.bottomCta.email}`} 
                aria-label={`Email us at ${sharedServiceContent.bottomCta.email}`}
                className="mt-4 font-medium text-white/80 transition hover:text-white"
              >
                Email Area Coordinators: {sharedServiceContent.bottomCta.email}
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