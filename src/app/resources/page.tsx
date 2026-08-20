import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import {ExpandableLocations} from "@/components/ExpandableLists";
import { serviceAreas } from "@/data/locations";
import { resourcesHero, resourcesIntro, resourceCategories } from "@/data/resources";
import { sharedServiceContent } from "@/data/services";

export const metadata: Metadata = {
  title: {
    absolute: "Family Home Care Resources | Glorious Home Care",
  },
  description: "Helpful guides and resources for family caregivers navigating senior care, Alzheimer's support, and aging in place in California.",
};

// Custom Document Icon for the article links
const DocumentIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={20}  // <-- Added explicit width
    height={20} // <-- Added explicit height
    fill="none" 
    stroke="currentColor" 
    className="h-5 w-5 shrink-0 text-brand-gold-dark"
    strokeWidth={2}
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={resourcesHero.bannerImage}
            alt="Family Resources for At Home Senior Care"
            width={1584}  // <-- Replaced 'fill' with explicit dimensions
            height={672}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
            sizes="100vw"
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-2xl space-y-4">
            <Reveal delay={0.05}>
              {/* SEO Fix: Ensure H1 is sufficiently long (>20 chars) and keyword-rich */}
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                Resources & Guides for Senior Care at Home
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {resourcesHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  aria-label="Call for home care assistance"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/request-care"
                  aria-label="Request an in-home care assessment"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Request Care Today!
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. INTRODUCTORY SECTION (Adapted from Home Page UI) */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:py-24">
          
          {/* Left Column: Resources Intro */}
          <Reveal className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-brand-red"></span>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Family Resources
              </div>
              <span className="h-[2px] w-8 bg-brand-red"></span>
            </div>
            
            {/* SEO Fix: Replaced implicit fallback with explicit H2 targeting search queries */}
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
              {resourcesIntro.title || "Empowering Families in the Bay Area"}
            </h2>
            
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-muted">
              {/* Maps through your intro paragraphs if they exist, otherwise provides an elegant fallback */}
              {resourcesIntro.paragraphs ? (
                resourcesIntro.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    Navigating <strong>home care near me</strong> can be overwhelming. We’ve compiled our best advice, guides, and tools to help you make informed decisions for your loved one's care, comfort, and safety in San Jose and the surrounding Bay Area.
                  </p>
                  <p>
                    Browse our resource categories below to find answers to common questions about care coordination, funding options, and managing daily activities during <strong>at home senior care</strong>.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          {/* Right Column: Free In-Home Assessment Card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              
              {/* Decorative Blur Background Element */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* SEO Fix: Avoid duplicate/generic headings */}
                <h3 className="mb-6 text-3xl font-extrabold text-brand-ink">
                  Free In-Home Assessment
                </h3>
                
                {/* Horizontal Divider Line */}
                <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                
                <p className="mb-10 text-lg leading-relaxed text-muted flex-grow">
                  {homeCallouts.freeConsultation}
                </p>
                
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call us at ${contactInfo.phone}`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--brand-gold)] px-8 py-4 text-lg font-black tracking-wide text-brand-ink shadow-md transition-all hover:scale-[1.02] hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="h-6 w-6 text-brand-red-dark" aria-hidden="true">
                     <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {contactInfo.phone}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. RESOURCE CATEGORIES GRID */}
      <section className="bg-white border-y border-white">
        <Container className="py-16 md:py-24">
          
          {/* Added Section Headings for the Grid */}
          <div className="mb-12 text-center flex flex-col items-center">
            <Reveal>
              <h2 className="mb-4 text-3xl font-extrabold text-brand-ink md:text-4xl">Explore Our Guides</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted">Select a category below to find detailed articles and expert advice.</p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {resourceCategories.map((category, index) => (
              <Reveal key={category.categoryTitle} delay={index * 0.1}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-cream/80 bg-white shadow-sm transition-shadow hover:shadow-md">
                  
                  {/* Category Header */}
                  <div className="bg-brand-red/5 border-b border-brand-red/10 p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-brand-ink">
                      {category.categoryTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Article Links */}
                  <div className="flex-1 p-6 sm:p-8">
                    <ul className="space-y-5">
                      {category.articles.map((article) => (
                        <li key={article.slug}>
                          <Link 
                            href={`/resources/${article.slug}`}
                            aria-label={`Read article: ${article.title}`}
                            className="group flex items-start gap-3 transition-colors"
                          >
                            <div className="mt-0.5">
                              <DocumentIcon />
                            </div>
                            <span className="text-base font-medium text-brand-ink transition group-hover:text-brand-red group-hover:underline">
                              {article.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. SEO & AREAS WE SERVE SECTION */}
      <section className="bg-surface py-20 border-t border-brand-gold/10">
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <span className="block text-sm font-bold uppercase tracking-widest text-brand-red mb-3">
                Local Care You Can Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mb-6">
                Premier Home Care in the Bay Area
              </h2>
              <p className="max-w-4xl mx-auto text-lg text-muted leading-relaxed">
                Finding the right support for a loved one is crucial. If you're searching for <strong>home care near me</strong>, Glorious Home Care Assistance is dedicated to providing compassionate, top-tier <strong>senior care at home</strong>. Our trained caregivers specialize in comprehensive <strong>personal care San Jose</strong> families can rely on, ensuring safety, dignity, and peace of mind. We are proud to be a leading provider of <strong>in-home care San Jose</strong> residents trust, offering tailored plans for <strong>at home senior care</strong>.
              </p>
            </div>
          </Reveal>

          {/* DYNAMIC EXPANDABLE LOCATIONS GRID */}
          <div className="mb-16 border-t border-brand-cream pt-12">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-extrabold text-brand-ink text-center mb-8">
                Communities We Proudly Serve
              </h3>
            </Reveal>
            
            {/* Passes ALL service areas (30+ items) into the DOM for maximum SEO internal backlinks */}
            <ExpandableLocations locations={serviceAreas} />
          </div>

          <Reveal delay={0.3}>
            <div className="rounded-3xl bg-white p-8 border border-brand-cream shadow-sm text-center max-w-4xl mx-auto">
              <p className="text-muted leading-relaxed">
                Our mission is to elevate the standard of <strong>Home care in Bay area</strong> communities. Whether your family requires temporary respite care, daily assistance with activities of daily living, or specialized 24/7 care, our team is equipped to deliver. Experience the difference of premium <strong>at home senior care</strong> designed to keep your loved ones thriving in the comfort of their own home.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 5. BOTTOM CTA SECTION (Compact Version Matching Home Page) */}
      <section className="bg-brand-red-dark py-12 md:py-16 text-center text-white border-t-4 border-brand-gold relative z-30">
        <Container className="max-w-3xl">
          <Reveal className="flex flex-col items-center">
            
            {/* Scaled-down Gold Speech Bubble Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} strokeWidth={2.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
               </svg>
            </div>

            {/* SEO Fix: Switched from h2 to div to prevent identical heading structures across pages */}
            <div className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl whitespace-pre-line">
              {sharedServiceContent.bottomCta.message}
            </div>
            
            <div className="flex flex-col items-center gap-3 mt-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>
              
              <Link
                href={contactInfo.phoneHref}
                aria-label={`Call us at ${contactInfo.phone}`}
                className="inline-block transform rounded-full bg-brand-gold px-10 py-4 text-lg font-black tracking-wide text-brand-ink shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                {sharedServiceContent.bottomCta.phone}
              </Link>
            </div>

            <div className="mx-auto mt-12 w-full max-w-2xl border-t border-white/20 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/90">
                {sharedServiceContent.bottomCta.tagline}
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