import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, servicesCta } from "@/data/global";
import {
  referralHero,
  referralIntro,
  partnerBenefits,
  professionalTypes,
  referralSteps,
} from "@/data/referrals";

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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              {referralHero.title}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {referralHero.subtitle}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* INTRO & DIRECT CONTACT CARD */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <Reveal className="space-y-6">
            <SectionHeading title={referralIntro.title} />
            {referralIntro.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal
            className="h-fit rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm"
            delay={0.1}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Direct Professional Intake
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-ink">
              Need to Discharge a Patient?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Speak directly with our clinical intake team for urgent assessments and placement needs.
            </p>

            <div className="mt-6 space-y-3 border-t border-brand-gold/20 pt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-brand-ink">Direct Line:</span>
                <a href={contactInfo.phoneHref} className="font-bold text-brand-red hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-brand-ink">Response Time:</span>
                <span className="text-muted">Under 2 hours</span>
              </div>
            </div>

            <Link
              href="/request-care"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
            >
              Submit Online Referral
            </Link>
          </Reveal>
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
      <section className="bg-gradient-to-r from-brand-red to-brand-gold text-white">
        <Container className="py-16 md:py-20">
          <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                {servicesCta.title}
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Ready to Refer a Patient?
              </h2>
              <p className="mt-4 text-base text-white/90">
                Call our team directly or fill out our quick intake form to start coordinating care today.
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