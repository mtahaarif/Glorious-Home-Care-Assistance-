import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, servicesCta } from "@/data/global";
import { locationsHero, locationsIntro, serviceAreas } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas We Serve | San Jose & Santa Clara County",
  description: "Glorious Home Care Assistance provides compassionate in-home care across San Jose, Santa Clara, Sunnyvale, Cupertino, Milpitas, and Campbell.",
};

// Custom Map Pin Icon for the location cards
const MapPinIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="h-6 w-6 text-brand-red"
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

export default function LocationsPage() {
  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              {locationsHero.title}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {locationsHero.subtitle}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <Reveal className="space-y-6">
            <SectionHeading title={locationsIntro.title} />
            {locationsIntro.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
          
          <Reveal className="h-fit rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Service Area Inquiries
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Not sure if we cover your exact location? Give us a call, and our care coordinators will be happy to assist you.
            </p>
            <Link
              href={contactInfo.phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
            >
              Call {contactInfo.phone}
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* LOCATIONS GRID */}
      <section className="bg-brand-cream border-t border-brand-gold/20">
        <Container className="py-16 md:py-24">
          <SectionHeading title="Cities We Serve"/>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 0.05}>
                <Link 
                  href={`/locations/${area.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white p-8 shadow-sm transition hover:border-brand-red/20 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <MapPinIcon />
                    <h3 className="text-xl font-bold text-brand-ink group-hover:text-brand-red transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                  <span className="mt-6 inline-block text-sm font-semibold text-brand-red group-hover:underline">
                    View Care in {area.name} &rarr;
                  </span>
                </Link>
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
                Reach out to schedule a free in-home assessment in your community today.
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