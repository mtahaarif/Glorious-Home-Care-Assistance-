import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Added Import
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts, servicesCta } from "@/data/global";
import { resourceCategories, resourcesHero } from "@/data/resources";
import { sharedServiceContent } from "@/data/services";
import { homeHero } from "@/data/home";

// Helper: Flatten the nested categories array to easily find specific articles
const allArticles = resourceCategories.flatMap((category) => category.articles);

// 1. Tell Next.js to statically build a page for all 10 article slugs
export function generateStaticParams() {
  return allArticles.map((article) => ({
    article: article.slug,
  }));
}

// 2. Generate dynamic SEO tags (Next.js 15 requires async params)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ article: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const article = allArticles.find((a) => a.slug === resolvedParams.article);
  
  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Glorious Home Care Guides`,
    description: `Read our comprehensive guide on ${article.title.toLowerCase()} to help your family navigate home care safely and confidently.`,
  };
}

// 3. The Dynamic Page Component (Next.js 15 requires async params)
export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ article: string }> 
}) {
  const resolvedParams = await params;
  const article = allArticles.find((a) => a.slug === resolvedParams.article);

  if (!article) {
    notFound();
  }

  // Find which category this article belongs to so we can display it in the breadcrumbs
  const parentCategory = resourceCategories.find(c => 
    c.articles.some(a => a.slug === resolvedParams.article)
  );

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO BANNER (Compact Glass & Scaled Typography) */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={resourcesHero.bannerImage}
            alt={resourcesHero.title}
            fill 
            className="object-cover object-[70%_center]"
            priority
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                {resourcesHero.title}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {resourcesHero.subtitle}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/request-care"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Request Care Today!
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. ARTICLE CONTENT & SIDEBAR */}
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
                    .filter(a => a.slug !== resolvedParams.article)
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

      {/* 3. BOTTOM CTA SECTION (Compact Version) */}
      <section className="bg-brand-red-dark py-12 md:py-16 text-center text-white border-t-4 border-brand-gold">
        <Container className="max-w-3xl">
          <Reveal className="flex flex-col items-center">
            
            {/* Scaled-down Gold Speech Bubble Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
               </svg>
            </div>

            {/* Scaled-down Heading */}
            <h2 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let's Talk About<br />Your Loved One's Care Needs
            </h2>
            
            {/* Scaled-down Description */}
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              A free in-home consultation can help families understand care options, daily support needs, and the best plan for a loved one's comfort and safety at home.
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Call Us Today
              </p>
              
              {/* Scaled-down Button */}
              <Link
                href={contactInfo.phoneHref}
                className="inline-block transform rounded-full bg-brand-gold px-10 py-4 text-lg font-black tracking-wide text-brand-ink shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                {contactInfo.phone}
              </Link>
            </div>

            {/* Tighter Footer Taglines */}
            <div className="mx-auto mt-12 w-full max-w-2xl border-t border-white/20 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/90">
                Serving Seniors Across San Jose & the Bay Area
              </p>
              <div className="flex flex-col items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold sm:flex-row sm:gap-4 md:text-sm">
                <span>Compassionate Care.</span>
                <span className="hidden opacity-50 sm:inline">•</span>
                <span>Trusted Support.</span>
                <span className="hidden opacity-50 sm:inline">•</span>
                <span>Peace of Mind.</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
      
    </div>
  );
}