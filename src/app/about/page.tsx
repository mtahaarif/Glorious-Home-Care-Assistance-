import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { contactInfo } from "@/data/global";
import { 
  aboutHero, 
  ourStory, 
  ourInspiration, 
  visionAndMission, 
  ghcaDifference, 
  aboutReview 
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
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              {aboutHero.title}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {aboutHero.subtitle}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* OUR STORY & CONTACT SECTION */}
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

      {/* VISION & MISSION SECTION */}
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

      {/* THE GHCA DIFFERENCE & TESTIMONIAL */}
      <section className="bg-surface">
        <Container className="flex flex-col gap-16 py-16 md:py-24">
          
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <SectionHeading title={ghcaDifference.title} subtitle={ghcaDifference.subtitle} />
              <ul className="mt-8 space-y-6">
                {ghcaDifference.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg font-bold text-brand-ink">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream">
                      <HeartIcon />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl border border-brand-gold/20 bg-brand-cream p-8 sm:p-12">
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

    </div>
  );
}