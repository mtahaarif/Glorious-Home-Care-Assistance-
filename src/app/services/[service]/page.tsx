import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, servicesCta } from "@/data/global";
import { mainServices } from "@/data/services";

// 1. Tell Next.js which routes to build statically based on our slugs
export function generateStaticParams() {
  return mainServices.map((service) => ({
    service: service.slug,
  }));
}

// 2. Generate dynamic SEO tags for each service page
export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const currentService = mainServices.find((s) => s.slug === params.service);
  
  if (!currentService) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${currentService.title} in San Jose, CA | Glorious Home Care`,
    description: currentService.description.substring(0, 160) + "...", // Truncates description for optimal SEO length
  };
}

// 3. The Dynamic Page Component
export default function ServiceDetailPage({ params }: { params: { service: string } }) {
  const currentService = mainServices.find((s) => s.slug === params.service);

  // Trigger a 404 error if a user enters an invalid URL
  if (!currentService) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24 md:py-32">
          <Reveal className="max-w-3xl space-y-4">
            <Link 
              href="/services" 
              className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-white/80 transition hover:text-white"
            >
              &larr; All Services
            </Link>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {currentService.title}
            </h1>
            <p className="text-lg text-white/90">
              Compassionate, reliable support in the comfort of home.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* SERVICE DETAILS & CONTACT CARD */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 md:grid-cols-[1fr_0.8fr] md:py-24">
          <Reveal className="space-y-6">
            <SectionHeading 
              title={`About Our ${currentService.title}`} 
              subtitle="Personalized Care" 
            />
            <div className="rounded-2xl border-l-4 border-brand-red bg-brand-cream/40 p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-brand-ink">
                {currentService.description}
              </p>
            </div>
            <p className="text-base leading-relaxed text-muted">
              At Glorious Home Care Assistance, we understand that every individual's needs are completely unique. During our free in-home assessment, we will work closely with you and your family to develop a customized care plan that perfectly aligns with your schedule, preferences, and health requirements.
            </p>
          </Reveal>

          {/* Dedicated Contact Card */}
          <Reveal className="h-fit rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Free Assessment
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-ink">
              Request {currentService.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Call our care coordinators today to discuss how we can support your family.
            </p>
            <Link
              href={contactInfo.phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
            >
              Call {contactInfo.phone}
            </Link>
            <div className="mt-4 text-center">
              <span className="text-xs font-semibold text-muted">OR</span>
            </div>
            <Link
              href="/request-care"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border-2 border-brand-ink px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-ink transition hover:bg-brand-ink hover:text-white"
            >
              Submit Online Request
            </Link>
          </Reveal>
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
                Let us provide the support and peace of mind you deserve.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
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