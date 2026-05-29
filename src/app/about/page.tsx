import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  aboutOverview,
  contactInfo,
  independenceSupport,
} from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Glorious Homecare Assistance LLC and our care philosophy.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              About Us
            </p>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              {aboutOverview.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid gap-8 py-16 md:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="space-y-6">
            <SectionHeading title={aboutOverview.title} />
            {aboutOverview.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal className="rounded-3xl border border-brand-red/10 bg-brand-cream p-6" delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Care Coordination
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              {contactInfo.name}
              <br />
              {contactInfo.addressLine1}
              <br />
              {contactInfo.addressLine2}
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
          <Reveal className="space-y-6">
            <SectionHeading title={independenceSupport.title} />
            {independenceSupport.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
            <p className="text-sm font-semibold text-brand-red">
              {independenceSupport.cta}
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
