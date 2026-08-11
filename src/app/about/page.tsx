import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { contactInfo, homeCallouts } from "@/data/global";
import { homeHero } from "@/data/home";
import { sharedServiceContent } from "@/data/services";

import { 
  aboutHero, 
  ourStory, 
  ourInspiration, 
  visionAndMission, 
  ghcaDifference, 
  aboutReview,
  // Imported our new high-value sections
  caregiverSupport,
  communityInvolvement
} from "@/data/about";

// Reusing your Heart Icon for the features list & testimonial
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 shrink-0 text-brand-red" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Glorious Homecare Assistance LLC and our care philosophy.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. STATIC HERO BANNER WITH WELCOME BADGE & ACTION BUTTONS */}
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] text-white min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] py-12 flex items-center">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-[color:var(--brand-ink)] z-0">
          <Image 
            src={aboutHero.bannerImage}
            alt={aboutHero.title}
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
                {aboutHero.title}
              </h1>
            </Reveal>

            {/* Subtitle / Description */}
            {aboutHero.subtitle && (
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl drop-shadow-sm">
                  {aboutHero.subtitle}
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

      {/* 2. OUR STORY & CONTACT SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <Reveal className="space-y-6">
            <SectionHeading title={ourStory.title} />
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {ourStory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          
          <Reveal className="h-fit rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm sm:p-10" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Care Coordination
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              <strong className="text-brand-ink">{contactInfo.name}</strong>
              <br />
              {contactInfo.addressLine1}
              <br />
              {contactInfo.addressLine2}
            </p>
            <Link
              href={contactInfo.phoneHref}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-brand-red-dark"
            >
              Call {contactInfo.phone}
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* 3. VISION & MISSION SECTION */}
      <section className="border-y border-brand-gold/20 bg-brand-cream">
        <Container className="grid gap-8 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-cream bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
              <h3 className="text-2xl font-bold text-brand-ink">{visionAndMission.vision.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{visionAndMission.vision.body}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-brand-red p-8 text-white shadow-sm transition hover:shadow-md sm:p-10">
              <h3 className="text-2xl font-bold">{visionAndMission.mission.title}</h3>
              <p className="mt-4 leading-relaxed text-white/90">{visionAndMission.mission.body}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. EMPATHY SECTION: CAREGIVER BURNOUT (NEW) */}
      <section className="bg-surface py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <h2 className="mb-4 text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
                {caregiverSupport.title}
              </h2>
              <p className="mb-6 text-xl font-medium text-brand-red-dark">
                {caregiverSupport.subtitle}
              </p>
              <p className="mb-8 text-lg text-muted leading-relaxed">
                {caregiverSupport.description}
              </p>
              <Link href={contactInfo.phoneHref} className="inline-block rounded-full bg-[color:var(--brand-gold)] px-8 py-4 font-bold text-brand-ink transition hover:scale-105 hover:bg-white shadow-md border border-brand-gold/50">
                Get Support Today
              </Link>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caregiverSupport.services.map((service, index) => (
                  <div key={index} className="rounded-2xl bg-white p-6 shadow-sm border border-brand-cream/50 h-full hover:shadow-md transition">
                    <h4 className="mb-2 font-bold text-brand-ink">{service.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. THE GHCA DIFFERENCE & TESTIMONIAL */}
      <section className="bg-brand-cream border-y border-brand-gold/10">
        <Container className="flex flex-col gap-16 py-16 md:py-24">
          
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <SectionHeading title={ghcaDifference.title} subtitle={ghcaDifference.subtitle} />
              <ul className="mt-8 space-y-6">
                {ghcaDifference.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg font-bold text-brand-ink">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-brand-cream">
                      <HeartIcon />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl border border-brand-gold/20 bg-white p-8 sm:p-12 shadow-sm">
                <span className="absolute left-6 top-6 font-serif text-6xl leading-none text-brand-gold/30">"</span>
                <p className="relative z-10 pt-4 text-lg font-medium italic leading-relaxed text-brand-ink sm:text-xl">
                  {ourInspiration.quote}
                </p>
                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-red">
                  — {ourInspiration.author}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading title="What Families Say" />
              <div className="mt-8 text-left">
                <TestimonialCard
                  quote={aboutReview.quote}
                  author={aboutReview.author}
                  endIcon={aboutReview.hasHeartIcon ? <HeartIcon /> : undefined}
                />
              </div>
            </div>
          </Reveal>

        </Container>
      </section>

      {/* 6. COMMUNITY INVOLVEMENT (NEW) */}
      <section className="bg-surface py-20 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="mb-4 text-3xl font-extrabold text-brand-ink md:text-4xl">{communityInvolvement.title}</h2>
              <p className="text-xl text-brand-red-dark font-medium">{communityInvolvement.subtitle}</p>
              <p className="mt-4 text-muted text-lg">{communityInvolvement.description}</p>
            </Reveal>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {communityInvolvement.pillars.map((pillar, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-brand-cream/40 hover:bg-brand-cream transition-colors border border-brand-cream shadow-sm h-full">
                  <div className="h-16 w-16 rounded-full bg-[color:var(--brand-gold)] mb-6 flex items-center justify-center shadow-inner">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-brand-ink">{pillar.title}</h3>
                  <p className="text-muted leading-relaxed">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
      <section className="bg-brand-red-dark py-16 text-center text-white md:py-24 border-t-4 border-brand-gold">
        <Container className="max-w-3xl">
          <Reveal className="space-y-4">
            <h2 className="whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl">
              {sharedServiceContent.bottomCta.message}
            </h2>
            
            <div className="flex flex-col items-center gap-4 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>
              
              <Link
                href={contactInfo.phoneHref}
                className="inline-block transform rounded-full bg-[color:var(--brand-gold)] px-12 py-5 text-xl font-black text-brand-red-dark shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
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