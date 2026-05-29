import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import DetailCard from "@/components/DetailCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  aideServices,
  companionCareServices,
  contactInfo,
  serviceHighlights,
  servicesCta,
  servicesIntro,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Compassionate care you can trust from Glorious Homecare Assistance LLC.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              Services
            </p>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              {servicesIntro.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-6">
            <SectionHeading title={servicesIntro.title} />
            {servicesIntro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal className="rounded-3xl border border-brand-red/10 bg-brand-cream p-6" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Care Availability
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              {contactInfo.phoneLabel}: {contactInfo.phone}
              <br />
              {contactInfo.textLabel}: {contactInfo.text}
            </p>
            <Link
              href={contactInfo.phoneHref}
              className="mt-6 inline-flex rounded-full bg-brand-red px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
            >
              Call {contactInfo.phone}
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-cream">
        <Container className="py-16">
          <SectionHeading title="Our Services" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid gap-8 py-16 md:grid-cols-2">
          <Reveal>
            <DetailCard
              title={companionCareServices.title}
              intro={companionCareServices.intro}
              items={companionCareServices.items}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <DetailCard
              title={aideServices.title}
              intro={aideServices.intro}
              items={aideServices.items}
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-brand-red to-brand-gold text-white">
        <Container className="py-16">
          <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                {servicesCta.title}
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {servicesCta.body}
              </h2>
            </div>
            <Link
              href={contactInfo.phoneHref}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-red transition hover:bg-white/90"
            >
              Call {contactInfo.phone}
            </Link>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
