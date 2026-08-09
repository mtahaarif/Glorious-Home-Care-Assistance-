import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, servicesCta } from "@/data/global";
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
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              {resourcesHero.title}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {resourcesHero.subtitle}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-surface border-b border-brand-gold/10">
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal className="space-y-6">
              <SectionHeading title={resourcesIntro.title} />
              {resourcesIntro.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
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
      <section className="bg-gradient-to-r from-brand-red to-brand-gold text-white">
        <Container className="py-16 md:py-20">
          <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                {servicesCta.title}
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {servicesCta.body}
              </h2>
              <p className="mt-4 text-base text-white/90">
                Have specific questions about your situation? Give our care team a call today for a free consultation.
              </p>
            </div>
            <div className="flex shrink-0 gap-4">
              <Link
                href={contactInfo.phoneHref}
                className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-red shadow-lg transition hover:bg-white/90"
              >
                Call {contactInfo.phone}
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
      
    </div>
  );
}