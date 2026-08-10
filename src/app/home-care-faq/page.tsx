import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { contactInfo, servicesCta } from "@/data/global";
import { faqHero, faqIntro, faqCategories } from "@/data/faqs";
import { sharedServiceContent } from "@/data/services";
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
      <section className="bg-brand-red-dark py-10 text-center text-white md:py-10">
        <Container className="max-w-3xl">
          <Reveal className="space-y-4">
            <h2 className="whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl">
              {sharedServiceContent.bottomCta.message}
            </h2>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>
              
              <Link
                href={contactInfo.phoneHref}
                className="inline-block transform rounded-full bg-brand-gold px-12 py-5 text-xl font-black text-brand-red-dark shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                {sharedServiceContent.bottomCta.phone}
              </Link>
              
              <a 
                href={`mailto:${sharedServiceContent.bottomCta.email}`} 
                className="mt-4 font-medium text-white/80 transition hover:text-white"
              >
                {sharedServiceContent.bottomCta.email}
              </a>
            </div>

            <div className="mx-auto mt-12 max-w-lg border-t border-white/10 pt-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
                {sharedServiceContent.bottomCta.tagline}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
      
    </div>
  );
}