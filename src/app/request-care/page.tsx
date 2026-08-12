import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import { 
  requestCareHero, 
  requestCareIntro, 
  careTypeOptions, 
  locationOptions 
} from "@/data/request-care";

export const metadata: Metadata = {
  title: "Request Care | Glorious Home Care Assistance",
  description: "Schedule a free in-home care consultation with Glorious Home Care Assistance in San Jose and Santa Clara County.",
};

export default function RequestCarePage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={requestCareHero.bannerImage}
            alt={requestCareHero.title}
            fill 
            className="object-cover object-center"
            priority
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                {requestCareHero.title}
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
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <a
                  href="#care-form"
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
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                Take the First Step
              </h2>
            </div>
            
            <h3 className="mb-6 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
              {requestCareIntro?.title || "Request a Free Consultation"}
            </h3>
            
            <p className="mb-10 text-lg leading-relaxed text-muted">
              {requestCareIntro?.description || "Fill out the form below so we can better understand your family's needs. A care coordinator will reach out shortly to guide you through your options."}
            </p>

            {/* Upgraded Premium Form */}
            <form className="w-full space-y-6 rounded-3xl border border-white bg-white p-8 shadow-xl shadow-brand-ink/5 sm:p-10 transition-all hover:shadow-2xl hover:shadow-brand-ink/10">
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-ink">Full Name <span className="text-brand-red">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-brand-ink">Phone Number <span className="text-brand-red">*</span></label>
                  <input type="tel" id="phone" name="phone" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10" placeholder="(408) 555-0123" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-ink">Email Address <span className="text-brand-red">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-bold text-brand-ink">City / Location</label>
                  <select id="location" name="location" defaultValue="" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-brand-ink transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10">
                    <option value="" disabled>Select a city</option>
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="careType" className="text-sm font-bold text-brand-ink">Type of Care Needed</label>
                <select id="careType" name="careType" defaultValue="" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-brand-ink transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10">
                  <option value="" disabled>Select care type</option>
                  {careTypeOptions.map((care) => (
                    <option key={care} value={care}>{care}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-brand-ink">Briefly describe your situation</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm transition-all focus:border-brand-red focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10 resize-none" placeholder="How can we help your loved one?"></textarea>
              </div>

              <button type="button" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_30px_rgb(255,49,49,0.2)] transition-all hover:-translate-y-1 hover:bg-brand-red-dark hover:shadow-[0_8px_30px_rgb(199,36,57,0.3)] sm:w-auto">
                <span>Submit Request</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
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
                
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Phone</p>
                    <a href={contactInfo.phoneHref} className="mt-1 block text-2xl font-black tracking-tight text-brand-ink transition-colors group-hover:text-brand-red lg:text-3xl">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="group">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-lg font-medium text-brand-ink transition-colors group-hover:text-brand-red">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. GOOGLE MAPS EMBED SECTION */}
      <section className="bg-background py-16 md:py-24 border-t border-brand-gold/20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h2 className="text-3xl font-extrabold text-brand-ink md:text-4xl">
                Our Service Area
              </h2>
              <p className="mt-4 text-lg text-muted">
                Providing compassionate care across San Jose, Santa Clara County, and the surrounding Bay Area.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="w-full overflow-hidden rounded-3xl border-4 border-white shadow-lg bg-white h-[400px] md:h-[500px] relative">
              {/* HOW TO UPDATE THIS MAP:
                1. Go to Google Maps and search for your business (Glorious Home Care Assistance)
                2. Click the "Share" button, then click "Embed a map"
                3. Copy the URL inside the `src="..."` attribute of the iframe they provide
                4. Paste it right here below to replace this placeholder San Jose map. 
              */}
              <iframe
                src="https://maps.google.com/maps?q=2528%20Qume%20Drive,%20Ste.%204,%20San%20Jose,%20CA%2095131&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </Reveal>
        </Container>
      </section>

    </div>
  );
}