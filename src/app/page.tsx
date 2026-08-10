import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { brandTagline, contactInfo, homeCallouts } from "@/data/global";
import { 
  homeHero, 
  homeAbout, 
  homeServices, 
  homeProcess, 
  whyChooseUsFeatures, 
  whoWeServe, 
  clientReviews 
} from "@/data/home";

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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        
        {/* Adjusted padding here to reduce vertical height */}
        <Container className="relative py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <Reveal>
              <div className="flex items-center gap-3">
                <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                  {homeHero.welcome}
                </p>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {homeHero.badge}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {homeHero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                {homeHero.subhead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={contactInfo.phoneHref}
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-red transition hover:bg-white/90 hover:shadow-lg"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-white/70 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                  {homeCallouts.optionsPrompt}
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="bg-surface">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal className="space-y-6">
            <SectionHeading title={homeAbout.title} subtitle="About Us" />
            <p className="text-base leading-7 text-muted">
              {homeAbout.description}
            </p>
            <Link href="/about" className="inline-block font-semibold text-brand-red hover:underline">
              Know more about us &rarr;
            </Link>
          </Reveal>
          <Reveal className="rounded-3xl bg-brand-cream p-8 shadow-sm sm:p-10" delay={0.1}>
            <SectionHeading title="Free In-Home Assessment" />
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              {homeCallouts.freeConsultation}
            </p>
            <p className="mt-6 text-2xl font-bold text-brand-red">
              {contactInfo.phone}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* SERVICES BRIEF SECTION */}
      <section className="bg-brand-cream">
        <Container className="py-16 md:py-24">
          <SectionHeading title={homeServices.title} subtitle={homeServices.subtitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
                  <h3 className="text-lg font-bold text-brand-ink">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <Link href="/services" className="mt-6 text-sm font-semibold text-brand-red hover:underline">
                    Learn more &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CARE PROCESS SECTION */}
      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <SectionHeading title={homeProcess.title} subtitle="How Home Care Works" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {homeProcess.steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1}>
                <div className="space-y-4">
                  <span className="inline-block rounded-full bg-brand-gold/20 px-4 py-1 text-xl font-black text-brand-gold-dark">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-brand-ink">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHO WE SERVE SECTION */}
      <section className="bg-brand-cream border-y border-brand-gold/20">
        <Container className="py-16 md:py-24">
          <SectionHeading title={whoWeServe.title} subtitle={whoWeServe.subtitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm border border-brand-cream h-full">
                  <h3 className="text-lg font-bold text-brand-ink">{group.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{group.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <SectionHeading title={whyChooseUsFeatures.title} subtitle="Why Us" />
            <p className="mt-6 text-lg text-muted">{whyChooseUsFeatures.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUsFeatures.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.05}>
                <div className="rounded-2xl bg-brand-cream px-6 py-8 h-full border border-brand-gold/10">
                  <h4 className="font-bold text-brand-red">{feature.title}</h4>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-brand-cream">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col gap-10">
            <SectionHeading title="What Families Say" subtitle={brandTagline} />
            <div className="grid gap-6 md:grid-cols-2">
              {clientReviews.map((review, index) => (
                <Reveal key={review.author} delay={index * 0.1}>
                  <TestimonialCard
                    quote={review.quote}
                    author={review.author}
                    endIcon={review.hasHeartIcon ? <HeartIcon /> : undefined}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="bg-gradient-to-r from-brand-red to-brand-gold text-white">
        <Container className="py-16 md:py-20">
          <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                {homeCallouts.optionsPrompt}
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {homeCallouts.callToAction}
              </h2>
              <p className="mt-4 text-base text-white/90">
                Compassionate home care services designed to help individuals remain safe, comfortable, and independent while providing peace of mind to their families.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href={contactInfo.phoneHref}
                className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-red transition hover:bg-white/90 shadow-lg"
              >
                {homeCallouts.callToAction}
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}