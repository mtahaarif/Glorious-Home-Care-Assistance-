import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo } from "@/data/global";
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
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              {requestCareHero.title}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {requestCareHero.subtitle}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* FORM & CONTACT INFO SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:gap-16">
          
          {/* Left Column: The Form */}
          <Reveal className="space-y-8">
            <div>
              <SectionHeading title={requestCareIntro.title} />
              <p className="mt-4 text-base leading-relaxed text-muted">
                {requestCareIntro.description}
              </p>
            </div>

            <form className="space-y-6 rounded-3xl border border-brand-cream bg-white p-6 shadow-sm sm:p-8">
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-brand-ink">Full Name <span className="text-brand-red">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-brand-ink">Phone Number <span className="text-brand-red">*</span></label>
                  <input type="tel" id="phone" name="phone" required className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="(408) 555-0123" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-brand-ink">Email Address <span className="text-brand-red">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-semibold text-brand-ink">City / Location</label>
                  <select id="location" name="location" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-brand-ink focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red">
                    <option value="" disabled selected>Select a city</option>
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="careType" className="text-sm font-semibold text-brand-ink">Type of Care Needed</label>
                <select id="careType" name="careType" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-brand-ink focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red">
                  <option value="" disabled selected>Select care type</option>
                  {careTypeOptions.map((care) => (
                    <option key={care} value={care}>{care}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-brand-ink">Briefly describe your situation</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="How can we help your loved one?"></textarea>
              </div>

              <button type="button" className="w-full rounded-full bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark hover:shadow-lg sm:w-auto">
                Submit Request
              </button>
            </form>
          </Reveal>
          
          {/* Right Column: Direct Contact & Process */}
          <Reveal delay={0.1} className="space-y-6">
            
            {/* Call Us Card */}
            <div className="rounded-3xl bg-brand-cream p-8 shadow-sm sm:p-10">
              <h3 className="text-xl font-bold text-brand-ink">Or Call Us Directly</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Need immediate assistance? Our care team is available 24/7 to answer your calls.
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Phone</p>
                <a href={contactInfo.phoneHref} className="mt-1 block text-3xl font-bold text-brand-ink hover:text-brand-red transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-base font-medium text-brand-ink hover:text-brand-red transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="rounded-3xl border border-brand-gold/20 bg-white p-8 shadow-sm sm:p-10">
              <h3 className="text-xl font-bold text-brand-ink">What Happens Next?</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-4 text-sm text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 font-bold text-brand-gold-dark">1</span>
                  We review your care needs and location.
                </li>
                <li className="flex gap-4 text-sm text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 font-bold text-brand-gold-dark">2</span>
                  A care coordinator calls you to answer questions.
                </li>
                <li className="flex gap-4 text-sm text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 font-bold text-brand-gold-dark">3</span>
                  We schedule a free, in-home assessment.
                </li>
              </ul>
            </div>

          </Reveal>

        </Container>
      </section>
    </div>
  );
}