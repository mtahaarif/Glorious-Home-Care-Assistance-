import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import { contactInfo, homeCallouts } from "@/data/global";

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
  title: "About Us | Glorious Home Care",
  description: "Learn about Glorious Homecare Assistance LLC and our care philosophy.",
};

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 shrink-0 text-brand-red" fill="currentColor">
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 shrink-0 text-brand-red" fill="currentColor">
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden bg-brand-cream min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
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
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4 rounded-3xl bg-white/40 sm:bg-white/30 backdrop-blur-2xl border border-white/50 p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <Reveal delay={0.05}>
              <h1 className="text-2xl font-extrabold leading-tight text-brand-ink sm:text-3xl lg:text-4xl drop-shadow-sm">
                {aboutHero.title}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-brand-ink/80 sm:text-base font-medium max-w-lg">
                {aboutHero.subtitle}
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

      {/* 2. OUR STORY & CONTACT SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          
          {/* Left Column: Our Story */}
          <Reveal className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-brand-red"></span>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Our Background
              </h2>
              <span className="h-[2px] w-12 bg-brand-red"></span>

            </div>
            <h3 className="text-3xl font-extrabold text-brand-ink md:text-5xl leading-tight">
              {ourStory.title}
            </h3>
            <div className="space-y-4 text-lg leading-relaxed text-muted mt-6">
              {ourStory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/* Right Column: Contact Card */}
            <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              
              {/* Decorative Blur Background Element */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Care Coordination
            </p>
              <h4 className="text-2xl font-bold text-brand-ink">{contactInfo.name}</h4>
            <p className="mt-4 text-base leading-relaxed text-muted">
              <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
              {contactInfo.addressLine1}
              <br />
              {contactInfo.addressLine2}
              <br />
              <br />
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

      {/* 3. VISION & MISSION SECTION (Bento Box Style) */}
      <section className="border-y border-brand-cream bg-brand-cream/30">
        <Container className="grid gap-8 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <div className="group h-full rounded-3xl border border-brand-cream bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[2px] w-12 bg-brand-gold transition-colors group-hover:bg-brand-red"></span>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold group-hover:text-brand-red transition-colors">Our Vision</h2>
                <span className="h-[2px] w-12 bg-brand-gold transition-colors group-hover:bg-brand-red"></span>
              </div>
              <h3 className="text-3xl font-extrabold text-brand-ink mb-4 group-hover:text-brand-red transition-colors">{visionAndMission.vision.title}</h3>
              <p className="leading-relaxed text-muted text-lg">{visionAndMission.vision.body}</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="group relative h-full rounded-3xl bg-brand-red-dark p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-3xl opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-[2px] w-12 bg-brand-gold"></span>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">Our Mission</h2>
                  <span className="h-[2px] w-12 bg-brand-gold"></span>
                </div>
                <h3 className="text-3xl font-extrabold mb-4 group-hover:text-brand-cream transition-colors">{visionAndMission.mission.title}</h3>
                <p className="leading-relaxed text-white/90 text-lg">{visionAndMission.mission.body}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. THE GHCA DIFFERENCE & TESTIMONIAL */}
      <section className="bg-surface">
        <Container className="flex flex-col gap-16 py-16 md:py-24">
          
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-brand-red"></span>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  Why Choose Us
                </h2>
                <span className="h-[2px] w-12 bg-brand-red"></span>
              </div>
              <h3 className="text-3xl font-extrabold text-brand-ink md:text-4xl leading-tight mb-8">
                {ghcaDifference.title}
              </h3>
              
              <ul className="space-y-6">
                {ghcaDifference.features.map((feature, index) => {
                  // Dynamically pick a different icon for each list item
                  const FeatureIcons = [HeartIcon, ShieldIcon, UsersIcon];
                  const Icon = FeatureIcons[index % FeatureIcons.length];
                  
                  return (
                    <li key={index} className="flex items-center gap-4 text-lg font-bold text-brand-ink group">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cream transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-red/10">
                        <Icon />
                      </div>
                      <span className="transition-colors duration-300 group-hover:text-brand-red">{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
            
            {/* Hover Quote Card */}
            <Reveal delay={0.1} className="h-full">
              <div className="group relative h-full rounded-3xl border border-brand-gold/20 bg-brand-cream p-8 sm:p-12 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden flex flex-col justify-center">
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-gold/20 blur-3xl transition-all duration-500 group-hover:bg-brand-red/10"></div>
                <span className="absolute left-6 top-6 font-serif text-8xl leading-none text-brand-gold/30 transition-transform duration-300 group-hover:-translate-y-2">"</span>
                
                <p className="relative z-10 pt-8 text-xl font-medium italic leading-relaxed text-brand-ink sm:text-2xl">
                  {ourInspiration.quote}
                </p>
                
                <div className="relative z-10 mt-8 flex items-center gap-4">
                  <div className="h-[2px] w-8 bg-brand-red"></div>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
                    {ourInspiration.author}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mx-auto max-w-3xl text-center mt-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-brand-red"></span>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                  Client Reviews
                </h2>
                <span className="h-[2px] w-12 bg-brand-red"></span>
              </div>
              <h3 className="text-3xl font-extrabold text-brand-ink mb-10">
                What Families Say
              </h3>
              <div className="text-left">
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