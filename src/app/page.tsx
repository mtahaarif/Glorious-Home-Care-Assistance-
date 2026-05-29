import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import {
  brandTagline,
  clientReview,
  contactInfo,
  homeCallouts,
  homeHero,
  missionStatement,
  whyChooseUs,
} from "@/data/content";

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className="h-4 w-4 text-brand-red"
    fill="currentColor"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24 md:py-32">
          <div className="max-w-3xl space-y-6">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                {homeHero.welcome}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                {homeHero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base text-white/90 sm:text-lg">
                {homeHero.subhead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={contactInfo.phoneHref}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-red transition hover:bg-white/90"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                  {homeCallouts.optionsPrompt}
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_1fr]">
          <Reveal className="space-y-6">
            <SectionHeading title={missionStatement.title} />
            <p className="text-sm leading-7 text-muted sm:text-base">
              {missionStatement.body}
            </p>
          </Reveal>
          <Reveal className="space-y-6" delay={0.1}>
            <SectionHeading title={homeHero.welcome} />
            <p className="text-sm leading-7 text-muted sm:text-base">
              {homeCallouts.optionsPrompt}
            </p>
            <p className="text-sm font-semibold text-brand-red">
              {homeCallouts.freeConsultation}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-cream">
        <Container className="py-16">
          <SectionHeading title={homeHero.subhead} subtitle={brandTagline} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-2xl bg-white px-5 py-6 text-sm font-medium text-brand-ink shadow-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16">
          <div className="flex flex-col gap-8">
            <SectionHeading title={clientReview.title} subtitle={brandTagline} />
            <Reveal>
              <TestimonialCard
                quote={clientReview.quote}
                author={clientReview.author}
                endIcon={clientReview.hasHeartIcon ? <HeartIcon /> : undefined}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-brand-red to-brand-gold text-white">
        <Container className="py-16">
          <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                {homeCallouts.optionsPrompt}
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {homeCallouts.callToAction}
              </h2>
              <p className="mt-3 text-sm text-white/90">
                {homeCallouts.freeConsultation}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={contactInfo.phoneHref}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-red transition hover:bg-white/90"
              >
                {homeCallouts.callToAction}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                {homeCallouts.optionsPrompt}
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
