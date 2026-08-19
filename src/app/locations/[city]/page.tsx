import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo } from "@/data/global";
import { locationsHero, serviceAreas } from "@/data/locations";
import { sharedServiceContent } from "@/data/services"; 
import { homeServices } from "@/data/home"; 
import Image from "next/image"; 
import { ExpandableLocations, ExpandableResources } from "@/components/ExpandableLists";

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
    // SEO Fix: 'absolute' prevents the root layout from appending the site name, clearing word repetition & length penalties
    title: {
      absolute: `In-Home Care Services in ${area.name}, CA`,
    },
    // SEO Fix: Shortened to stay safely under the 1000px limit
    description: `Trusted in-home care services in ${area.name}, CA. We provide compassionate personal care and senior assistance to help your loved ones safely age at home.`,
    // SEO Fix: Points directly to this exact city page to clear the "Canonical link points to a different page" error
    alternates: {
      canonical: `https://www.glorioushomecareassistance.com/locations/${area.slug}`,
    },
  };
}

const resourceArticles = [
  { title: "Signs A Parent Needs Care", slug: "signs-parent-needs-home-care" },
  { title: "Home Care Costs in San Jose", slug: "home-care-cost-san-jose" },
  { title: "Choosing a Care Agency", slug: "how-to-choose-home-care-agency" },
  { title: "Home Care vs. Home Health", slug: "home-care-vs-home-health" },
  { title: "Respite Care Guide", slug: "respite-care-guide" },
  { title: "After Hospital Discharge", slug: "after-hospital-discharge" },
  { title: "Recovery at Home", slug: "recovery-at-home" },
  { title: "Hospital to Home Checklist", slug: "hospital-to-home-checklist" },
  { title: "Helping a Parent Live Safely", slug: "helping-parent-live-safely" },
  { title: "Family Caregiver Burnout", slug: "family-caregiver-burnout" }
];

export default async function CityLocationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const area = serviceAreas.find((a) => a.slug === resolvedParams.city);

  if (!area) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        <div className="absolute inset-0 z-0">
          <Image 
            src={locationsHero.bannerImage}
            alt={`${area.name} Home Care Services`}
            width={1584}
            height={672}
            priority
            className="absolute inset-0 w-full h-full object-cover object-right"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                In-Home Care Services in {area.name}, CA
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {/* SEO Fix: Embedded exact H1 words into paragraph text to clear H1 match warnings */}
                As a premier provider of In-Home Care Services in {area.name}, CA, {area.description.toLowerCase()}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call us about care in ${area.name}`}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  Call for {area.name} Care
                </Link>
                <Link
                  href="/request-care"
                  aria-label={`Request care in ${area.name}`}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Check {area.name} Availability
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. LOCALIZED INTRO SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1fr_0.8fr] md:py-24">
          <Reveal className="space-y-6">
            
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="h-[2px] w-8 bg-brand-red"></span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  Aging Safely at Home
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink">
                Compassionate In-Home Care Services for {area.name} Families
              </h2>
            </div>
            
            {area.aboutBody?.map((paragraph, index) => {
              const parts = paragraph.split(new RegExp(`(${area.name})`, 'gi'));
              return (
                <p key={index} className="text-base leading-relaxed text-muted">
                  {parts.map((part, i) => 
                    part.toLowerCase() === area.name.toLowerCase() ? (
                      <span key={i} className="font-semibold text-brand-ink">{part}</span>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}

            <Link 
              href="/about" 
              className="mt-4 inline-block font-semibold text-brand-red hover:underline"
            >
              Learn more about our {area.name} caregivers &rarr;
            </Link>
          </Reveal>

          {/* Contact Card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  Local Care Coordination
                </div>
                <div className="mb-6 mt-2 text-3xl font-extrabold text-brand-ink">
                 Need care in {area.name}?
                </div>
                
                <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                
                <p className="mb-10 text-lg leading-relaxed text-muted flex-grow">
                  Our care coordinators are standing by to answer your questions and schedule a free in-home assessment.
                </p>
                
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call our service coordinators at ${contactInfo.phone}`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--brand-gold)] px-8 py-4 text-lg font-black tracking-wide text-brand-ink shadow-md transition-all hover:scale-[1.02] hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="h-6 w-6 text-brand-red-dark" aria-hidden="true">
                     <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Call {area.name} Support
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. RELEVANT SERVICES PREVIEW */}
      <section className="border-t border-brand-gold/20 bg-white">
        <Container className="py-16 md:py-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-brand-ink md:text-4xl">
              Our Services in {area.name}
            </h2>
          </div>
        
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
        
          <div className="relative mt-8 flex overflow-hidden ticker-wrapper">
            <div className="flex w-max animate-infinite-scroll gap-6 px-3">
              
              <ul className="flex gap-6 pr-6">
                {homeServices.services.map((service, index) => (
                  <li key={`original-${index}`} className="shrink-0 flex">
                    <div className="w-[320px] sm:w-[380px] flex flex-col rounded-3xl bg-white border border-brand-cream/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group/card overflow-hidden relative">
                      <div className="relative h-[220px] w-full overflow-hidden bg-brand-cream shrink-0">
                        {service.image && (
                          <Image 
                            src={service.image}
                            alt={`${service.title} in ${area.name}`}
                            width={380}
                            height={220}
                            sizes="(max-width: 768px) 320px, 380px"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-brand-ink/10 group-hover/card:bg-transparent transition-colors duration-300"></div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover/card:text-brand-red transition-colors">
                          <Link 
                            href="/services"
                            aria-label={`View ${service.title} services`}
                            className="after:absolute after:inset-0 focus:outline-none"
                          >
                            {service.title} in {area.name}
                          </Link>
                        </h3>
                        <p className="text-muted leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>
                        {/* SEO Fix: Replaced generic 'Service Details' with dynamically unique anchor texts to clear link duplicate warnings */}
                        <div className="flex items-center gap-2 text-brand-red-dark font-bold text-sm uppercase tracking-wider mt-auto group-hover/card:text-brand-red transition-colors">
                          View {service.title}
                          <svg className="w-5 h-5 transform transition-transform group-hover/card:translate-x-1" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="flex gap-6 pr-6" aria-hidden="true">
                {homeServices.services.map((service, index) => (
                  <li key={`clone-${index}`} className="shrink-0 flex">
                    <div className="w-[320px] sm:w-[380px] flex flex-col rounded-3xl bg-white border border-brand-cream/50 shadow-sm overflow-hidden">
                      <div className="relative h-[220px] w-full overflow-hidden bg-brand-cream shrink-0">
                        {service.image && (
                          <Image 
                            src={service.image}
                            alt={`${service.title} care options in ${area.name}`}
                            width={380}
                            height={220}
                            sizes="(max-width: 768px) 320px, 380px"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-brand-ink/10"></div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="text-xl font-bold text-brand-ink mb-3">
                          {service.title} in {area.name}
                        </div>
                        <p className="text-muted leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>
                        {/* SEO Fix: Applied dynamic title here as well */}
                        <div className="flex items-center gap-2 text-brand-red-dark font-bold text-sm uppercase tracking-wider mt-auto">
                          View {service.title}
                          <svg className="w-5 h-5 transform" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>       

          <div className="mt-12 flex justify-center">
            <Reveal>
              <Link 
                href="/services"
                className="rounded-full border-2 border-brand-red px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-red transition hover:bg-brand-red hover:text-white"
              >
                View All {area.name} Services
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. SEO & AREAS WE SERVE SECTION */}
      <section className="bg-surface py-20 border-t border-brand-gold/10">
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <span className="block text-sm font-bold uppercase tracking-widest text-brand-red mb-3">
                Local Care You Can Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mb-6">
                Premier Home Care in {area.name} & The Bay Area
              </h2>
              {/* SEO Fix: Cleaned up bold tag structures to guarantee zero duplication alerts */}
              <p className="max-w-4xl mx-auto text-lg text-muted leading-relaxed">
                Finding the right support for a loved one is crucial. If you're searching for <strong>dependable home care near me</strong> in {area.name}, Glorious Home Care Assistance is dedicated to providing compassionate, top-tier <strong>dedicated senior care services</strong>. Our trained caregivers specialize in comprehensive <strong>daily personal assistance</strong> families can rely on, ensuring safety, dignity, and peace of mind. We are proud to be a leading provider of <strong>in-home living support</strong> residents trust, offering tailored plans for independent aging.
              </p>
            </div>
          </Reveal>

          <div className="mb-16 border-t border-brand-cream pt-12">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-extrabold text-brand-ink text-center mb-8">
                Communities We Proudly Serve
              </h3>
            </Reveal>
            <ExpandableLocations locations={serviceAreas} />
          </div>

          <div className="mb-16 border-t border-brand-cream pt-12">
            <Reveal delay={0.2}>
              <h3 className="text-2xl font-extrabold text-brand-ink text-center mb-8">
                Helpful Home Care Resources
              </h3>
            </Reveal>
            <ExpandableResources resources={resourceArticles} />
          </div>

          <Reveal delay={0.3}>
            <div className="rounded-3xl bg-white p-8 border border-brand-cream shadow-sm text-center max-w-4xl mx-auto">
              <p className="text-muted leading-relaxed">
                Our mission is to elevate the standard of <strong>premium home care in Bay area</strong> communities. Whether your family requires temporary respite care, daily assistance with activities of daily living, or specialized 24/7 care, our team is equipped to deliver. Experience the difference of premium <strong>at-home elder care routines</strong> designed to keep your loved ones thriving in the comfort of their own home.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 5. BOTTOM CTA SECTION */}
      <section className="bg-brand-red-dark py-10 text-center text-white md:py-10">
        <Container className="max-w-3xl">
          <Reveal className="space-y-4">
            <div className="whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl">
              {sharedServiceContent.bottomCta.message}
            </div>
            
            <div className="flex flex-col items-center gap-4 mt-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>
              
              <Link
                href={contactInfo.phoneHref}
                aria-label={`Call us at ${contactInfo.phone}`}
                className="inline-block transform rounded-full bg-brand-gold px-12 py-5 text-xl font-black text-brand-red-dark shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                <span>Start {area.name} Care: {sharedServiceContent.bottomCta.phone}</span>
              </Link>
              
              <a 
                href={`mailto:${sharedServiceContent.bottomCta.email}`} 
                aria-label={`Email us at ${sharedServiceContent.bottomCta.email}`}
                className="mt-4 font-medium text-white/80 transition hover:text-white"
              >
                Email {area.name} Coordinators: {sharedServiceContent.bottomCta.email}
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