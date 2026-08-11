import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts, servicesCta } from "@/data/global";
import { resourceCategories, resourcesHero } from "@/data/resources";
import { sharedServiceContent } from "@/data/services";
import { homeHero } from "@/data/home";
import Image from "next/image"; // Added Import
// Helper: Flatten the nested categories array to easily find specific articles
const allArticles = resourceCategories.flatMap((category) => category.articles);

// 1. Tell Next.js to statically build a page for all 10 article slugs
export function generateStaticParams() {
  return allArticles.map((article) => ({
    article: article.slug,
  }));
}

// 2. Generate dynamic SEO tags
export function generateMetadata({ params }: { params: { article: string } }): Metadata {
  const article = allArticles.find((a) => a.slug === params.article);
  
  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Glorious Home Care Guides`,
    description: `Read our comprehensive guide on ${article.title.toLowerCase()} to help your family navigate home care safely and confidently.`,
  };
}

// 3. The Dynamic Page Component
export default function ArticlePage({ params }: { params: { article: string } }) {
  const article = allArticles.find((a) => a.slug === params.article);

  if (!article) {
    notFound();
  }

  // Find which category this article belongs to so we can display it in the breadcrumbs
  const parentCategory = resourceCategories.find(c => 
    c.articles.some(a => a.slug === params.article)
  );

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO BANNER (Compact Glass & Scaled Typography) */}
      <section className="relative overflow-hidden bg-brand-cream min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-[color:var(--brand-ink)] z-0">
          <Image 
            src={resourcesHero.bannerImage} // Replace with page source: servicesHero.bannerImage, heroImage, etc.
            alt={resourcesHero.title}
            fill 
            className="object-cover object-right"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 35%, black 70%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 35%, black 70%)',
            }}
            priority
          />
          
          {/* Dark Tint Overlay */}
          <div className="absolute inset-0 bg-[color:var(--brand-ink)]/40 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          {/* Liquid Frosted Glass Content Panel (Tighter Padding) */}
          <div className="max-w-xl space-y-4 rounded-3xl bg-white/40 sm:bg-white/30 backdrop-blur-2xl border border-white/50 p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <Reveal delay={0.05}>
              {/* Scaled Headline from text-6xl to text-3xl/4xl */}
              <h1 className="text-2xl font-extrabold leading-tight text-brand-ink sm:text-3xl lg:text-4xl drop-shadow-sm">
                {resourcesHero.title}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              {/* Scaled Subhead from text-xl to text-base */}
              <p className="text-sm leading-relaxed text-brand-ink/80 sm:text-base font-medium max-w-lg">
                {resourcesHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                {/* Scaled Buttons (Reduced padding and text size) */}
                <Link
                  href={contactInfo.phoneHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-white bg-white/40 backdrop-blur-md px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  {homeCallouts.optionsPrompt}
                </Link>
              </div>
            </Reveal>
            
          </div>
        </Container>
      </section>


      {/* ARTICLE CONTENT & SIDEBAR */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_350px] lg:gap-16 lg:py-24">
          
          {/* Left Column: Article Body */}
          <Reveal>
            <article className="prose prose-lg prose-brand max-w-none text-muted">
              {/* NOTE: This is a placeholder for your actual blog content!
                Later, you can add a `content` array to your data file and map through the paragraphs here. 
              */}
              <p className="lead text-xl font-medium text-brand-ink">
                Navigating the world of home care can be complex, but having the right information ensures you make the best choices for your loved one.
              </p>
              <p>
                This comprehensive guide is currently being updated by our care experts at Glorious Home Care Assistance. When complete, it will provide detailed, step-by-step information tailored to families in the San Jose and Santa Clara County area.
              </p>
              <h2>Why This Matters</h2>
              <p>
                When a family member begins to need extra help around the house, early planning is essential. Understanding your options—from hourly companion care to 24/7 support—can prevent caregiver burnout and drastically reduce hospital readmissions.
              </p>
              <blockquote>
                "Having a clear plan in place gave our family peace of mind and allowed my mother to stay safely in the home she loves."
              </blockquote>
              <p>
                If you have immediate questions regarding this topic, please don't hesitate to reach out to our care coordinators directly. We are available 24/7 to provide free guidance and assessments.
              </p>
            </article>
          </Reveal>

          {/* Right Column: Sticky Sidebar CTA */}
          <aside className="relative">
            <Reveal className="sticky top-32 space-y-8">
              
              <div className="rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Need Help Now?
                </p>
                <h3 className="mt-2 text-2xl font-bold text-brand-ink">
                  Speak with a Care Expert
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Our San Jose care team is available 24/7 to answer your questions and arrange a free assessment.
                </p>
                <Link
                  href={contactInfo.phoneHref}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
                >
                  Call {contactInfo.phone}
                </Link>
                <Link
                  href="/request-care"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full border-2 border-brand-ink bg-transparent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-ink transition hover:bg-brand-ink hover:text-white"
                >
                  Request Care Online
                </Link>
              </div>

              {/* Related Articles Preview */}
              <div className="rounded-3xl border border-brand-cream bg-white p-8 shadow-sm">
                <h3 className="font-bold text-brand-ink">More in this Category</h3>
                <ul className="mt-4 space-y-4 border-t border-brand-cream pt-4">
                  {parentCategory?.articles
                    .filter(a => a.slug !== params.article)
                    .slice(0, 3)
                    .map((relatedArticle) => (
                      <li key={relatedArticle.slug}>
                        <Link 
                          href={`/resources/${relatedArticle.slug}`}
                          className="text-sm font-medium text-muted transition hover:text-brand-red hover:underline"
                        >
                          {relatedArticle.title}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>

            </Reveal>
          </aside>

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