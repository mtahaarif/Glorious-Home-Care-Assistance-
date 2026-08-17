import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import { ExpandableLocations } from "@/components/ExpandableLists";
import { serviceAreas } from "@/data/locations";
import { 
  requestCareHero, 
  requestCareIntro, 
  careTypeOptions, 
  locationOptions 
} from "@/data/request-care";

import RequestCareForm from "@/components/RequestCareForm";
export const metadata: Metadata = {
  // SEO Fix: Shortened the title and packed it with target keywords (under 60 chars)
  title: "Request In-Home Care in San Jose | Glorious Home Care",
  // SEO Fix: Expanded description with local keywords
  description: "Schedule a free consultation for in-home care, personal care, and senior care at home in San Jose and the Bay Area with Glorious Home Care Assistance.",
};

export default function RequestCarePage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* SEO Fix: Removed fill, added explicit dimensions & priority */}
          <Image 
            src={requestCareHero.bannerImage}
            alt="Request In-Home Care Services"
            width={1926}
            height={816}
            priority
            className="absolute inset-0 w-full h-full object-cover object-center"
            sizes="100vw"
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              {/* SEO Fix: Hardcoded H1 to be keyword-rich and resolve "H1 too short" / "Words not in text" errors */}
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                Request In-Home Care in San Jose & The Bay Area
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {requestCareHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call us at ${contactInfo.phone}`}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <a
                  href="#care-form"
                  aria-label="Skip to care request form"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Fill Out The Form
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. FORM & CONTACT INFO SECTION (Editorial Grid Layout) */}
      <section className="bg-surface" id="care-form">
        <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-24 lg:gap-20 items-start">
          
          {/* Left Column: Intro & The Form */}
          <Reveal className="flex flex-col items-start">
            
            {/* Unified Eyebrow Heading */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-brand-red"></span>
              {/* SEO Fix: Changed h2 to div to fix heading hierarchy */}
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Take the First Step
              </div>
            </div>
            
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
              {requestCareIntro?.title || "Request a Free Care Consultation"}
            </h2>
            
            <p className="mb-10 text-lg leading-relaxed text-muted">
              {requestCareIntro?.description || "Fill out the form below to request in-home care in San Jose and the Bay Area. A care coordinator will reach out shortly to guide you through your options."}
            </p>

            {/* Upgraded Premium Form */}
            <RequestCareForm />
          </Reveal>
          
          {/* Right Column: Direct Contact Sidebar */}
          <Reveal delay={0.1} className="space-y-8 lg:sticky lg:top-32">
            
            {/* Call Us Card with Glowing Hover */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-cream/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cream/60 blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-ink">Or Call Us Directly</h3>
                <div className="my-6 h-[2px] w-12 bg-brand-red/20"></div>
                <p className="mb-8 text-base leading-relaxed text-muted">
                  Need immediate assistance or have urgent placement needs? Our care team is available 24/7.
                </p>
                
                <ul className="space-y-6">
                  <li className="group">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Phone</p>
                    <a href={contactInfo.phoneHref} className="mt-1 block text-2xl font-black tracking-tight text-brand-ink transition-colors group-hover:text-brand-red lg:text-3xl">
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className="group">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-lg font-medium text-brand-ink transition-colors group-hover:text-brand-red">
                      {contactInfo.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. SEO & AREAS WE SERVE SECTION */}
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

{/* 4. GOOGLE MAPS EMBED SECTION */}
      <section className="bg-background py-16 md:py-24 border-t border-brand-gold/20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h2 className="text-3xl font-extrabold text-brand-ink md:text-4xl">
                Interactive Service Map
              </h2>
              <p className="mt-4 text-lg text-muted">
                Providing compassionate care across San Jose, Santa Clara County, and the surrounding Bay Area.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="w-full overflow-hidden rounded-3xl border-4 border-white shadow-lg bg-white h-[400px] md:h-[500px] relative">
              <iframe
                // ✅ FIX: Using the official embed URL centered on the exact office address
                src="https://maps.google.com/maps?q=2528%20Qume%20Drive,%20Ste.%204,%20San%20Jose,%20CA%2095131&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Glorious Home Care Office Location Map"
              />
            </div>
          </Reveal>
        </Container>
      </section>

    </div>
  );
}