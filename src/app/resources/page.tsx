import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import { resourcesHero, resourcesIntro, resourceCategories } from "@/data/resources";

export const metadata: Metadata = {
  title: "Home Care Resources & Guides | Glorious Home Care",
  description: "Explore our comprehensive guides on home care costs, preventing caregiver burnout, and safe hospital-to-home transitions in San Jose.",
};

// Custom Document Icon for the article links
const DocumentIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className="h-5 w-5 shrink-0 text-brand-gold-dark"
    strokeWidth={2}
    strokeLinecap="round" 
    strokeLinejoin="round"
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
      
      {/* 1. HERO BANNER (Kept exactly as requested) */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={resourcesHero.bannerImage}
            alt={resourcesHero.title}
            fill 
            className="object-cover object-[70%_center]"
            priority
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                {resourcesHero.title}
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

      {/* 2. INTRODUCTORY SECTION (Adapted from Home Page UI) */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:py-24">
          
          {/* Left Column: Resources Intro */}
          <Reveal className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-brand-red"></span>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Family Resources
              </h2>
              <span className="h-[2px] w-8 bg-brand-red"></span>
            </div>
            
            <h3 className="mb-6 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
              {resourcesIntro.title || "Empowering Families with Knowledge"}
            </h3>
            
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-muted">
              {/* Maps through your intro paragraphs if they exist, otherwise provides an elegant fallback */}
              {resourcesIntro.paragraphs ? (
                resourcesIntro.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    Navigating home care can be overwhelming. We’ve compiled our best advice, guides, and tools to help you make informed decisions for your loved one's care, comfort, and safety.
                  </p>
                  <p>
                    Browse our resource categories below to find answers to common questions about care coordination, funding options, and managing daily activities at home.
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

      {/* 3. RESOURCE CATEGORIES GRID */}
      <section className="bg-white border-y border-white">
        <Container className="py-16 md:py-24">
          
          {/* Added Section Headings for the Grid */}
          <div className="mb-12 text-center flex flex-col items-center">
            <Reveal>
              <h3 className="mb-4 text-3xl font-extrabold text-brand-ink md:text-4xl">Explore Our Guides</h3>
              <p className="mx-auto max-w-2xl text-lg text-muted">Select a category below to find detailed articles and expert advice.</p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {resourceCategories.map((category, index) => (
              <Reveal key={category.categoryTitle} delay={index * 0.1}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition-shadow hover:shadow-md">
                  
                  {/* Category Header */}
                  <div className="bg-brand-red/5 border-b border-brand-red/10 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-brand-ink">
                      {category.categoryTitle}
                    </h2>
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

      {/* 4. BOTTOM CTA SECTION (Compact Version Matching Home Page) */}
      <section className="bg-brand-red-dark py-12 md:py-16 text-center text-white border-t-4 border-brand-gold">
        <Container className="max-w-3xl">
          <Reveal className="flex flex-col items-center">
            
            {/* Scaled-down Gold Speech Bubble Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
               </svg>
            </div>

            {/* Scaled-down Heading */}
            <h2 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let's Talk About<br />Your Loved One's Care Needs
            </h2>
            
            {/* Scaled-down Description */}
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              A free in-home consultation can help families understand care options, daily support needs, and the best plan for a loved one's comfort and safety at home.
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Call Us Today
              </p>
              
              {/* Scaled-down Button */}
              <Link
                href={contactInfo.phoneHref}
                className="inline-block transform rounded-full bg-brand-gold px-10 py-4 text-lg font-black tracking-wide text-brand-ink shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                {contactInfo.phone}
              </Link>
            </div>

            {/* Tighter Footer Taglines */}
            <div className="mx-auto mt-12 w-full max-w-2xl border-t border-white/20 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/90">
                Serving Seniors Across San Jose & the Bay Area
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