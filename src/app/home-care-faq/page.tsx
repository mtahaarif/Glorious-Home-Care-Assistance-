import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { contactInfo, servicesCta } from "@/data/global";
import { faqHero, faqIntro, faqCategories } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Glorious Home Care Assistance",
  description: "Get answers to common questions about home care services, caregiver screening, costs, and insurance coverage in San Jose and Santa Clara County.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <Reveal className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              {faqHero.title}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {faqHero.subtitle}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal className="space-y-6">
              <SectionHeading title={faqIntro.title} />
              {faqIntro.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="bg-brand-cream border-t border-brand-gold/10">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqCategories.map((category, index) => (
              <Reveal key={category.categoryTitle} delay={index * 0.1}>
                <div className="rounded-3xl border border-white bg-white p-6 shadow-sm sm:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-brand-red">
                    {category.categoryTitle}
                  </h2>
                  <div className="flex flex-col">
                    {category.questions.map((faq) => (
                      <FaqAccordion 
                        key={faq.question} 
                        question={faq.question} 
                        answer={faq.answer} 
                      />
                    ))}
                  </div>
                </div>
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
                Didn't find the answer you were looking for? Reach out to our care coordinators today.
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