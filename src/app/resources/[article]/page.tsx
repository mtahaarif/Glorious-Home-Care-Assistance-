import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, servicesCta } from "@/data/global";
import { resourceCategories } from "@/data/resources";

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
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-red via-brand-red-dark to-brand-gold text-white">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 right-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-20 sm:py-24 md:py-32">
          <Reveal className="max-w-4xl space-y-6">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/80">
              <Link href="/resources" className="transition hover:text-white">
                Resources
              </Link>
              <span>/</span>
              <span className="text-white/60">{parentCategory?.categoryTitle}</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
          </Reveal>
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