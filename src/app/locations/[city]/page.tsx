import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, servicesCta } from "@/data/global";
import { serviceAreas } from "@/data/locations";
import { mainServices } from "@/data/services"; // Corrected Import!

// 1. Generate static paths for all cities in our locations.ts data
export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    city: area.slug,
  }));
}

// 2. Generate dynamic SEO metadata for each specific city
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const area = serviceAreas.find((a) => a.slug === resolvedParams.city);
  
  if (!area) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `Home Care Services in ${area.name}, CA | Glorious Home Care`,
    description: area.description,
  };
}

// 3. The Dynamic Page Component
export default async function CityLocationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  
  // Find the current city data based on the URL slug
  const area = serviceAreas.find((a) => a.slug === resolvedParams.city);

  // If someone types a random city URL that isn't in our array, show a 404
  if (!area) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-12 sm:py-16 md:py-20">
          <Reveal className="max-w-3xl space-y-4">
            <Link 
              href="/locations" 
              className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-white/80 transition hover:text-white"
            >
              &larr; All Service Areas
            </Link>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Home Care Services in {area.name}, CA
            </h1>
            <p className="text-lg text-white/90">
              {area.description}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* LOCALIZED INTRO SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1fr_0.8fr] md:py-24">
          <Reveal className="space-y-6">
            <SectionHeading 
              title={`Compassionate Care for ${area.name} Families`} 
              subtitle="Aging Safely at Home" 
            />
            <p className="text-base leading-relaxed text-muted">
              At Glorious Home Care Assistance, we understand how important it is for seniors and adults in <strong>{area.name}</strong> to maintain their independence in the comfort of familiar surroundings. 
            </p>
            <p className="text-base leading-relaxed text-muted">
              Whether your loved one needs a few hours of companionship a week, reliable transportation to medical appointments, or 24/7 personal care assistance, our carefully matched caregivers are here to provide peace of mind for your entire family.
            </p>
            <Link 
              href="/about" 
              className="mt-4 inline-block font-semibold text-brand-red hover:underline"
            >
              Learn more about our agency &rarr;
            </Link>
          </Reveal>

          {/* Contact Card */}
          <Reveal className="h-fit rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Local Care Coordination
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-ink">
              Need care in {area.name}?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Our care coordinators are standing by to answer your questions and schedule a free in-home assessment.
            </p>
            <Link
              href={contactInfo.phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
            >
              Call {contactInfo.phone}
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* RELEVANT SERVICES PREVIEW */}
      <section className="border-t border-brand-gold/20 bg-brand-cream">
        <Container className="py-16 md:py-24">
          <SectionHeading 
            title={`Our Services in ${area.name}`} 
          />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Mapping over mainServices */}
            {mainServices.slice(0, 3).map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white bg-white p-8 shadow-sm transition hover:shadow-md">
                  <h3 className="text-xl font-bold text-brand-ink">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {service.description}
                  </p>
                  <Link 
                    href="/services" 
                    className="mt-6 inline-block text-sm font-semibold text-brand-red hover:underline"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Reveal>
              <Link 
                href="/services"
                className="rounded-full border-2 border-brand-red px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-red transition hover:bg-brand-red hover:text-white"
              >
                See All Services
              </Link>
            </Reveal>
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
                Ready to find care in {area.name}?
              </h2>
              <p className="mt-4 text-base text-white/90">
                {servicesCta.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href={contactInfo.phoneHref}
                className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-red shadow-lg transition hover:bg-white/90"
              >
                Call {contactInfo.phone}
              </Link>
              <Link
                href="/request-care"
                className="rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Request Care
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
      
    </div>
  );
}