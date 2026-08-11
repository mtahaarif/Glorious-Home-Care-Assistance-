import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, homeCallouts, servicesCta } from "@/data/global";
import Image from "next/image"; // Added Import
import {
  referralHero,
  referralIntro,
  partnerBenefits,
  professionalTypes,
  referralSteps,
} from "@/data/referrals";
import { sharedServiceContent } from "@/data/services";
import { homeHero } from "@/data/home";
export const metadata: Metadata = {
  title: "Healthcare Referral Partners | Glorious Home Care Assistance",
  description: "Partner with Glorious Home Care Assistance for fast, reliable hospital discharge transitions and in-home care services in San Jose & Santa Clara County.",
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 shrink-0 text-brand-gold-dark"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l4-5.625z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ReferralPartnersPage() {
  return (
    <div className="flex flex-col">
            {/* 1. HERO BANNER (Compact Glass & Scaled Typography) */}
      <section className="relative overflow-hidden bg-brand-cream min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-[color:var(--brand-ink)] z-0">
          <Image 
            src={referralHero.bannerImage} // Replace with page source: servicesHero.bannerImage, heroImage, etc.
            alt={referralHero.title}
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
        
        <Container className="relative z-20 w-full">
          {/* Liquid Frosted Glass Content Panel (Tighter Padding) */}
          <div className="max-w-xl space-y-4 rounded-3xl bg-white/40 sm:bg-white/30 backdrop-blur-2xl border border-white/50 p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <Reveal delay={0.05}>
              {/* Scaled Headline from text-6xl to text-3xl/4xl */}
              <h1 className="text-2xl font-extrabold leading-tight text-brand-ink sm:text-3xl lg:text-4xl drop-shadow-sm">
                {referralHero.title}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              {/* Scaled Subhead from text-xl to text-base */}
              <p className="text-sm leading-relaxed text-brand-ink/80 sm:text-base font-medium max-w-lg">
                {referralHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                {/* Scaled Buttons (Reduced padding and text size) */}
                <Link
                  href={contactInfo.phoneHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-white bg-white/40 backdrop-blur-md px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  {homeCallouts.optionsPrompt}
                </Link>
              </div>
            </Reveal>
            
          </div>
        </Container>
      </section>

      {/* WHY HEALTHCARE PROFESSIONALS CHOOSE US */}
      <section className="border-t border-brand-gold/20 bg-brand-cream">
        <Container className="py-16 md:py-24">
          <SectionHeading
            title="Why Professionals Partner With Us"
            subtitle="Built to align with healthcare discharge requirements and patient safety standards."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {partnerBenefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-white bg-white p-8 shadow-sm">
                  <CheckIcon />
                  <div>
                    <h3 className="text-xl font-bold text-brand-ink">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <SectionHeading title="Who We Work With"  />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {professionalTypes.map((type, index) => (
              <Reveal key={type.role} delay={index * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-brand-red/10 bg-brand-cream/50 p-6">
                  <div>
                    <h3 className="text-lg font-bold text-brand-ink">{type.role}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {type.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* THREE-STEP REFERRAL PROCESS */}
      <section className="border-t border-brand-gold/20 bg-brand-cream">
        <Container className="py-16 md:py-24">
          <SectionHeading title="Simple Referral Process"  />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {referralSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1}>
                <div className="relative flex h-full flex-col rounded-2xl border border-white bg-white p-8 shadow-sm">
                  <span className="text-4xl font-extrabold text-brand-gold-dark">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-brand-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
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