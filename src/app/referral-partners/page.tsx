import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, homeCallouts } from "@/data/global";
import {ExpandableLocations} from "@/components/ExpandableLists";
import {serviceAreas} from "@/data/locations";
import {
  referralHero,
  referralIntro,
  partnerBenefits,
  professionalTypes,
  referralSteps,
} from "@/data/referrals";

export const metadata: Metadata = {
  // SEO Fix: Shortened title to stay under 60 characters (~580px) and included target keyword
  title: "Healthcare Referral Partners | San Jose Home Care",
  // SEO Fix: Optimized description with local keywords
  description: "Partner with our agency for reliable hospital discharge transitions and premium in-home care services across San Jose and the Bay Area.",
};

// Dynamic Benefit Icon Component (Automatically assigns a unique icon based on index)
const BenefitIcon = ({ index }: { index: number }) => {
  const baseClass = "h-6 w-6";
  
  // Array of 6 distinct, premium outline icons suitable for healthcare benefits
  const icons = [
    // 0: Shield Check (Trust, Safety, Compliance)
    // SEO Fix: Added explicit width and height
    <svg key="0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={baseClass} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>,
    // 1: Lightning Bolt (Speed, Urgent Placements, 24/7)
    <svg key="1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={baseClass} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>,
    // 2: Clipboard Document (Care Plans, Assessments, Reporting)
    <svg key="2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={baseClass} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
    </svg>,
    // 3: Heart (Quality of Care, Compassion, Reduced Readmissions)
    <svg key="3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={baseClass} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>,
    // 4: Users/Team (Collaboration, Family Support)
    <svg key="4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={baseClass} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>,
    // 5: Chart/Growth (Positive Outcomes, Analytics)
    <svg key="5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={baseClass} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ];

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red mb-4 sm:mb-0">
      {/* Uses modulo operator to cycle through icons if there are more than 6 benefits */}
      {icons[index % icons.length]}
    </div>
  );
};

export default function ReferralPartnersPage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* SEO Fix: Removed fill, added dimensions & priority */}
          <Image 
            src={referralHero.bannerImage}
            alt="Healthcare Referral Partners in San Jose"
            width={1925}
            height={817}
            priority
            className="absolute inset-0 w-full h-full object-cover object-right"
            sizes="100vw"
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              {/* SEO Fix: Longer H1 ensuring it hits the character limit while targeting keywords */}
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                Healthcare Referral Partners in San Jose & The Bay Area
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {referralHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  aria-label="Call to refer a patient"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/request-care"
                  aria-label="Request Care Online"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Request Care Today!
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. INTRODUCTORY SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:py-24">
          
          {/* Left Column: Intro text */}
          <Reveal className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-brand-red"></span>
              {/* SEO Fix: Changed h2 to div to prevent heading duplication */}
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Collaborative Care
              </div>
              <span className="h-[2px] w-8 bg-brand-red"></span>
            </div>
            
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
              {referralIntro?.title || "Seamless Transitions to Senior Care at Home"}
            </h2>
            
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-muted">
              {referralIntro?.paragraphs ? (
                referralIntro.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    We understand that as a healthcare professional, your top priority is the continued safety and well-being of your patients after discharge.
                  </p>
                  <p>
                    Glorious Home Care Assistance partners closely with hospitals, rehab centers, and specialized clinics across San Jose to ensure care plans are executed flawlessly, reducing readmission rates and providing families with immediate peace of mind.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          {/* Right Column: Make a Referral Card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10 lg:p-12">
              
              {/* Decorative Blur Background Element */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* SEO Fix: Changed h4 to a div to prevent generic/duplicate headings */}
                <div className="mb-6 text-3xl font-extrabold text-brand-ink">
                  Urgent Placements
                </div>
                
                {/* Horizontal Divider Line */}
                <div className="mb-6 h-[2px] w-full bg-brand-cream transition-colors duration-300 group-hover:bg-brand-red/20"></div>
                
                <p className="mb-10 text-lg leading-relaxed text-muted flex-grow">
                  Need fast placement or a seamless discharge plan? Our care coordinators are available 24/7 to assist your team.
                </p>
                
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call us at ${contactInfo.phone}`}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--brand-gold)] px-8 py-4 text-lg font-black tracking-wide text-brand-ink shadow-md transition-all hover:scale-[1.02] hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-red-dark" aria-hidden="true">
                     <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {contactInfo.phone}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. WHY HEALTHCARE PROFESSIONALS CHOOSE US */}
      <section className="border-y border-white bg-white">
        <Container className="py-16 md:py-24">
          
          <div className="mb-16 text-center">
            <Reveal>
              <h2 className="mb-4 text-3xl font-extrabold text-brand-ink md:text-4xl">
                Why Professionals Partner With Us
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted">
                Built to align with healthcare discharge requirements and patient safety standards in the Bay Area.
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {partnerBenefits.map((benefit, index) => (
              <li key={benefit.title}>
                <Reveal delay={index * 0.08} className="h-full">
                  <div className="group flex h-full flex-col sm:flex-row gap-4 sm:gap-6 rounded-3xl border border-white bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-md">
                    
                    {/* Passes the index to output a different dynamic icon for each card */}
                    <BenefitIcon index={index} />
                    
                    <div>
                      <h3 className="text-xl font-bold text-brand-ink transition-colors group-hover:text-brand-red-dark">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. WHO WE WORK WITH */}
      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <SectionHeading title="Who We Work With" subtitle="We coordinate care seamlessly across the continuum." />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {professionalTypes.map((type, index) => (
              <li key={type.role}>
                <Reveal delay={index * 0.05} className="h-full">
                  <div className="group flex h-full flex-col justify-between rounded-3xl border border-brand-red/10 bg-brand-cream/30 p-8 transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1">
                    <div>
                      <h3 className="text-lg font-bold text-brand-ink group-hover:text-brand-red">
                        {type.role}
                      </h3>
                      <div className="mt-4 h-[2px] w-12 bg-brand-gold/50 transition-all group-hover:w-full group-hover:bg-brand-red"></div>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. THREE-STEP REFERRAL PROCESS */}
      <section className="border-t border-brand-gold/20 bg-white">
        <Container className="py-20 md:py-32">
          
          <div className="mb-16 text-center">
            <Reveal>
              <h2 className="mb-4 text-3xl font-extrabold text-brand-ink md:text-4xl">
                Simple Referral Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted">
                Getting care for your patient is fast, easy, and completely transparent.
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
            {referralSteps.map((step, index) => (
              <li key={step.step}>
                <Reveal delay={index * 0.1} className="h-full">
                  <div className="relative flex h-full flex-col rounded-3xl border border-white bg-white p-10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
                    
                    {/* Huge Minimalist Number */}
                    <span className="absolute right-6 top-2 select-none text-7xl font-black text-brand-gold/30">
                      {step.step}
                    </span>
                    
                    <h3 className="relative z-10 mt-8 text-2xl font-bold text-brand-ink">
                      {step.title}
                    </h3>
                    
                    <div className="my-6 h-[3px] w-16 bg-brand-red transition-all duration-500 group-hover:w-24"></div>
                    
                    <p className="relative z-10 text-base leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. SEO & AREAS WE SERVE SECTION */}
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

      {/* 7. BOTTOM CTA SECTION (Compact Version) */}
      <section className="bg-brand-red-dark py-12 md:py-16 text-center text-white border-t-4 border-brand-gold">
        <Container className="max-w-3xl">
          <Reveal className="flex flex-col items-center">
            
            {/* Scaled-down Gold Speech Bubble Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
               </svg>
            </div>

            {/* SEO Fix: Changed h2 to div to avoid duplicate identical headings across pages */}
            <div className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let's Coordinate Care Together
            </div>
            
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Contact our San Jose office today. Our care coordinators are standing by to assist with immediate placements and discharge planning.
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Call Us 24/7
              </p>
              
              <Link
                href={contactInfo.phoneHref}
                aria-label={`Call us at ${contactInfo.phone}`}
                className="inline-block transform rounded-full bg-brand-gold px-10 py-4 text-lg font-black tracking-wide text-brand-ink shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                {contactInfo.phone}
              </Link>
            </div>

            <div className="mx-auto mt-12 w-full max-w-2xl border-t border-white/20 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/90">
                Serving Seniors Across San Jose & the Bay Area
              </p>
              <ul className="flex flex-col items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold sm:flex-row sm:gap-4 md:text-sm">
                <li>Fast Placements.</li>
                <li className="hidden opacity-50 sm:inline" aria-hidden="true">•</li>
                <li>Trusted Support.</li>
                <li className="hidden opacity-50 sm:inline" aria-hidden="true">•</li>
                <li>Reduced Readmissions.</li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
      
    </div>
  );
}