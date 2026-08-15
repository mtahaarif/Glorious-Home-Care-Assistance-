import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import { resourceCategories, resourcesHero } from "@/data/resources";
import { serviceAreas } from "@/data/locations";
import { ExpandableLocations } from "@/components/ExpandableLists";
import { sharedServiceContent } from "@/data/services";

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

  // SEO Fix: Keep title under 60 characters (~580px) and include the primary location keyword.
  // Using the specific article title makes the metadata unique per page.
  const rawTitle = `${article.title} | San Jose Home Care`;
  const optimizedTitle = rawTitle.length > 60 ? rawTitle.substring(0, 57) + "..." : rawTitle;

  return {
    title: optimizedTitle,
    description: `Read our comprehensive guide on ${article.title.toLowerCase()} to help your family navigate in-home care in San Jose and the Bay Area safely.`,
  };
}

// Custom Document Icon for the article links
const DocumentIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={20}  // <-- Added explicit width
    height={20} // <-- Added explicit height
    fill="none" 
    stroke="currentColor" 
    className="h-5 w-5 shrink-0 text-brand-gold-dark"
    strokeWidth={2}
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

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
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={resourcesHero.bannerImage}
            alt={`${article.title} - Home Care Guide`}
            width={1584} // <-- Replaced 'fill' with explicit dimensions
            height={672}
            priority     // <-- Added priority for LCP optimization
            className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
            sizes="100vw"
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-2xl space-y-4">
            
            {/* Breadcrumb Context */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 bg-brand-red hidden sm:block"></span>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-dark">
                  {resourcesHero.title} {parentCategory ? ` / ${parentCategory.categoryTitle}` : ''}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              {/* SEO Fix: Make the actual article title the H1. This directly fixes the "H1 too short" and "H1 words not in text" errors. */}
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                {article.title}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                Discover actionable insights and expert guidance tailored for families seeking senior care at home in San Jose and the Bay Area.
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  aria-label="Call to discuss home care options"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/request-care"
                  aria-label="Request Home Care Today"
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
            {/* SEO Fix: Expanding the dummy content slightly to increase word count and ensure it contains semantic H2s */}
            <article className="prose prose-lg prose-brand max-w-none text-muted">
              <p className="lead text-xl font-medium text-brand-ink">
                Navigating the world of home care can be complex, but having the right information ensures you make the best choices for your loved one. Whether you are looking for temporary support or long-term <strong>senior care at home</strong>, understanding the landscape is crucial.
              </p>
              <p>
                This comprehensive guide on <strong>{article.title}</strong> is currently being updated by our care experts at Glorious Home Care Assistance. When complete, it will provide detailed, step-by-step information specifically tailored to families in the San Jose, Santa Clara County, and wider Bay Area regions.
              </p>
              
              <h2>Why Early Planning Matters</h2>
              <p>
                When a family member begins to need extra help around the house, early planning is essential. Understanding your options—from hourly companion care to 24/7 personal care support—can prevent caregiver burnout and drastically reduce hospital readmissions. Proactive decisions regarding <strong>at home senior care</strong> lead to significantly better outcomes for both the senior and their supporting family members.
              </p>
              
              <blockquote>
                &quot;Having a clear plan in place gave our family absolute peace of mind and allowed my mother to stay safely in the home she loves.&quot;
              </blockquote>
              
              <h2>Finding the Right Support in Your Area</h2>
              <p>
                Every family's situation is unique, which is why a one-size-fits-all approach to <strong>in-home care san jose</strong> rarely works. From specialized dementia care protocols to simple daily living assistance, matching the right professional caregiver to your loved one's specific needs, personality, and routine is the cornerstone of effective home care. 
              </p>
              <p>
                If you have immediate questions regarding this topic or need help assessing your family's unique situation, please do not hesitate to reach out to our local care coordinators directly. We are available 24/7 to provide free, no-obligation guidance and in-home assessments.
              </p>
            </article>
          </Reveal>

          {/* Right Column: Sticky Sidebar CTA */}
          <aside className="relative">
            <Reveal className="sticky top-32 space-y-8">
              
              <div className="rounded-3xl border border-brand-red/10 bg-brand-cream p-8 shadow-sm">
                {/* SEO Fix: Used semantic div instead of h3 to avoid identical headings */}
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Need Help Now?
                </div>
                <div className="mt-2 text-2xl font-bold text-brand-ink">
                  Speak with a Care Expert
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Our San Jose care team is available 24/7 to answer your questions and arrange a free assessment.
                </p>
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call us at ${contactInfo.phone}`}
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
                <div className="font-bold text-brand-ink text-lg">More in this Category</div>
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

      {/* 3. SEO & AREAS WE SERVE SECTION */}
      <section className="bg-surface py-20 border-t border-brand-gold/10">
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <span className="block text-sm font-bold uppercase tracking-widest text-brand-red mb-3">
                Local Care You Can Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mb-6">
                Premier Home Care in the Bay Area
              </h2>
              <p className="max-w-4xl mx-auto text-lg text-muted leading-relaxed">
                Finding the right support for a loved one is crucial. If you're searching for <strong>home care near me</strong>, Glorious Home Care Assistance is dedicated to providing compassionate, top-tier <strong>senior care at home</strong>. Our trained caregivers specialize in comprehensive <strong>personal care San Jose</strong> families can rely on, ensuring safety, dignity, and peace of mind. We are proud to be a leading provider of <strong>in-home care San Jose</strong> residents trust, offering tailored plans for <strong>at home senior care</strong>.
              </p>
            </div>
          </Reveal>

          {/* DYNAMIC EXPANDABLE LOCATIONS GRID */}
          <div className="mb-16 border-t border-brand-cream pt-12">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-extrabold text-brand-ink text-center mb-8">
                Communities We Proudly Serve
              </h3>
            </Reveal>
            
            {/* Passes ALL service areas (30+ items) into the DOM for maximum SEO internal backlinks */}
            <ExpandableLocations locations={serviceAreas} />
          </div>

          <Reveal delay={0.3}>
            <div className="rounded-3xl bg-white p-8 border border-brand-cream shadow-sm text-center max-w-4xl mx-auto">
              <p className="text-muted leading-relaxed">
                Our mission is to elevate the standard of <strong>Home care in Bay area</strong> communities. Whether your family requires temporary respite care, daily assistance with activities of daily living, or specialized 24/7 care, our team is equipped to deliver. Experience the difference of premium <strong>at home senior care</strong> designed to keep your loved ones thriving in the comfort of their own home.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. BOTTOM CTA SECTION (Compact Version) */}
      <section className="bg-brand-red-dark py-12 md:py-16 text-center text-white border-t-4 border-brand-gold">
        <Container className="max-w-3xl">
          <Reveal className="flex flex-col items-center">
            
            {/* Scaled-down Gold Speech Bubble Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} strokeWidth={2.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
               </svg>
            </div>

            {/* SEO Fix: Replaced identical generic H2 with a div to prevent duplicate heading errors */}
            <div className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl whitespace-pre-line">
              {sharedServiceContent.bottomCta.message}
            </div>
            
            <div className="flex flex-col items-center gap-3 mt-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>
              
              <Link
                href={contactInfo.phoneHref}
                aria-label={`Call us at ${contactInfo.phone}`}
                className="inline-block transform rounded-full bg-brand-gold px-10 py-4 text-lg font-black tracking-wide text-brand-ink shadow-xl transition-all hover:scale-105 hover:bg-white sm:text-2xl"
              >
                {sharedServiceContent.bottomCta.phone}
              </Link>
            </div>

            <div className="mx-auto mt-12 w-full max-w-2xl border-t border-white/20 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/90">
                {sharedServiceContent.bottomCta.tagline}
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