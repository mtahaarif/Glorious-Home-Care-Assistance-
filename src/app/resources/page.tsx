import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, homeCallouts, servicesCta } from "@/data/global";
import { resourcesHero, resourcesIntro, resourceCategories } from "@/data/resources";
import { sharedServiceContent } from "@/data/services";
import { homeHero } from "@/data/home";
import Image from "next/image"; // Added Import
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
      
      {/* 1. UPDATED HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] text-white min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] py-12 flex items-center">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-[color:var(--brand-ink)] z-0">
          <Image 
            src={resourcesHero.bannerImage} // Replace with page source: resourcesHero.bannerImage, heroImage, etc.
            alt={resourcesHero.title}
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
                {resourcesHero.title}
              </h1>
            </Reveal>

            {/* Subtitle / Description (If available) */}
            {resourcesHero.subtitle && (
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl drop-shadow-sm">
                  {resourcesHero.subtitle}
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

      {/* RESOURCE CATEGORIES GRID */}
      <section className="bg-brand-cream">
        <Container className="py-16 md:py-24">
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