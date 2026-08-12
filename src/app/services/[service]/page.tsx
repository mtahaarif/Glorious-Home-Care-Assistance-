import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { contactInfo, homeCallouts } from "@/data/global";
import { mainServices, servicesHero, sharedServiceContent } from "@/data/services";
const HeartIcon = () => (
  <svg className="mb-4 h-10 w-10 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export function generateStaticParams() {
  return mainServices.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const currentService = mainServices.find((s) => s.slug === resolvedParams.service);
  if (!currentService) return { title: "Service Not Found" };

  return {
    title: currentService.pageData?.seoTitle || `${currentService.title} in San Jose, CA | Glorious Home Care`,
    description: currentService.description.substring(0, 160) + "...", 
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = await params;
  const currentService = mainServices.find((s) => s.slug === resolvedParams.service);

  if (!currentService || !currentService.pageData) {
    notFound();
  }

  // Destructured iconImage instead of Icon
  const { title,description, pageData, iconImage, bannerImage } = currentService; 

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO BANNER (Compact Glass & Scaled Typography) */}
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={bannerImage}
            alt={title}
            fill 
            className="object-cover object-center"
            priority
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                {title}
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {description}
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
      {/* 2. HEADING 1 & DESCRIPTION 1 */}
      <section className="bg-background pt-16 md:pt-24 pb-12">
        <Container className="max-w-4xl text-center">
          <Reveal className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="block text-brand-red-dark">{pageData.heading1.line1}</span>
              <span className="block text-brand-red">{pageData.heading1.line2}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-brand-red sm:text-xl">
              {pageData.description1}
            </p>
          </Reveal>
        </Container>
      </section>

{/* 3. ASYMMETRIC LIQUID GLASS GRID (APPLE-STYLE) */}
      <section className="bg-background pb-16 md:pb-24">
        <Container className="max-w-6xl">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 grid-flow-dense">
              {pageData.bentoBox.items.map((item, index, array) => {
                const totalItems = array.length;
                const rowIndex = Math.floor(index / 3);
                const rowType = rowIndex % 3;
                const itemsInThisRow = Math.min(3, totalItems - rowIndex * 3);
                const positionInRow = index % 3;

                let colSpanClass = "col-span-1";
                let isBig = false;

                if (itemsInThisRow === 3) {
                  if (rowType === 0 && positionInRow === 0) isBig = true;
                  else if (rowType === 1 && positionInRow === 1) isBig = true;
                  else if (rowType === 2 && positionInRow === 2) isBig = true;
                  colSpanClass = isBig ? "col-span-2" : "col-span-1";
                } else if (itemsInThisRow === 2) {
                  isBig = rowType === 0 ? positionInRow === 0 : positionInRow === 1;
                  colSpanClass = isBig ? "col-span-2 md:col-span-3" : "col-span-2 md:col-span-1";
                } else if (itemsInThisRow === 1) {
                  isBig = true;
                  colSpanClass = "col-span-2 md:col-span-4"; 
                }

                return (
                  <div 
                    key={index} 
                    className={`
                      group relative flex flex-col justify-between rounded-2xl md:rounded-3xl transition-all duration-500 ease-out cursor-default overflow-hidden
                      backdrop-blur-xl md:backdrop-blur-2xl
                      hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-[1.02]
                      ${colSpanClass}
                      ${isBig 
                        // BIG GRID: Red Glass, Subtly glowing red shadow, delicate white edge
                        ? 'min-h-[160px] md:min-h-[200px] p-5 sm:p-6 md:p-8 bg-brand-red/90 border border-white/20 shadow-[0_8px_32px_rgb(255,49,49,0.25)] hover:bg-brand-red/90 hover:shadow-[0_16px_48px_rgb(255,49,49,0.4)] ring-1 ring-inset ring-white/10' 
                        
                        // SMALL GRID: Gold Glass, Gold/Amber shadow, prominent white edge
                        : 'min-h-[140px] md:min-h-[200px] p-4 sm:p-5 md:p-8 bg-brand-gold/70 border border-white/40 shadow-[0_8px_32px_rgb(235,179,94,0.15)] hover:bg-brand-gold/40 hover:shadow-[0_16px_48px_rgb(235,179,94,0.25)] ring-1 ring-inset ring-white/40'
                      }
                    `}
                  >
                    {/* APPLE-STYLE GLASS GLARE: The subtle diagonal light reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/5 to-transparent pointer-events-none mix-blend-overlay z-0" />

                    <div className="relative z-10 mb-4 md:mb-8 flex items-center justify-between">
                      {isBig ? (
                        <div className="rounded-full bg-white/10 border border-white/20 p-2 md:p-3 backdrop-blur-md shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/20">
                          {/* BIG GRID: Custom Image Icon */}
                          <div className="relative h-6 w-6 sm:h-8 sm:w-8">
                            <Image 
                              src={iconImage} 
                              alt={`${currentService.title} Icon`}
                              fill
                              className="object-contain brightness-0 invert opacity-90" 
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-full bg-white/50 border border-white/60 p-2 md:p-3 shadow-[0_4px_15px_rgb(255,49,49,0.1)] backdrop-blur-md transition-all duration-500 group-hover:bg-white/70 group-hover:scale-110">
                          <div className="scale-75 md:scale-100">
                             {/* SMALL GRID: Custom Image Icon */}
                             <div className="relative h-5 w-5 sm:h-6 sm:w-6">
                              <Image 
                                src={iconImage} 
                                alt={`${currentService.title} Icon`}
                                fill
                                className="object-contain" 
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <span 
                      className={`relative z-10 font-bold leading-snug transition-colors duration-300 drop-shadow-sm
                        ${isBig 
                          ? 'text-lg sm:text-xl md:text-2xl text-white group-hover:text-white/70' 
                          : 'text-sm sm:text-base md:text-2xl text-brand-red-dark group-hover:text-brand-red'
                        }
                      `}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
            
            {pageData.bentoBox.disclaimer && (
              <p className="mt-8 md:mt-12 text-center text-xs md:text-sm font-medium italic text-muted">
                * {pageData.bentoBox.disclaimer}
              </p>
            )}
          </Reveal>
        </Container>
      </section>


{/* 4. FEATURE BAR (Modern Typographic Ribbon) */}
      <section className="border-y border-[color:var(--brand-gold)]/20 bg-white py-16 md:py-24 overflow-hidden">
                <Container className="max-w-4xl text-center">
          <Reveal className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-brand-red sm:text-4xl">
              {pageData.heading2.line1}
            </h2>
            <p className="mx-auto max-w-3xl text-xl font-semibold leading-relaxed text-brand-red-dark sm:text-2xl">
              {pageData.heading2.line2}
            </p>
            <br />
            <br />
          </Reveal>
        </Container>
        {/* CSS for perfect seamless scrolling */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% - 3rem)); } /* 3rem matches gap-12 perfectly */
          }
          .animate-marquee {
            animation: scroll-marquee 60s linear infinite;
          }
        `}} />

        <Container>
          <Reveal className="mb-12 md:mb-20 text-center">
            <h3 className="whitespace-pre-line text-2xl font-bold uppercase tracking-[0.15em] text-[color:var(--brand-ink)]/60 sm:text-3xl">
              {sharedServiceContent.areaHeading.replace('\n', ' ')}
            </h3>
          </Reveal>
        </Container>

        {/* Marquee Wrapper */}
        <div className="group relative flex gap-12 overflow-hidden py-4 w-full">
          
          {/* Left Fading Edge */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 sm:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none" />

          {/* Track 1 */}
          <div className="flex shrink-0 items-center justify-around gap-12 flex-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {/* Array is tripled so it seamlessly covers even 4K ultra-wide monitors */}
            {[...pageData.featureBar, ...pageData.featureBar, ...pageData.featureBar].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-12 cursor-default transition-transform duration-500 hover:scale-105"
              >
                <HeartIcon />
                <span className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-[color:var(--brand-ink)] transition-colors duration-500 hover:text-[color:var(--brand-red-dark)]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Track 2 (Identical Duplicate for the Infinite Loop) */}
          <div 
            className="flex shrink-0 items-center justify-around gap-12 flex-nowrap animate-marquee group-hover:[animation-play-state:paused]" 
            aria-hidden="true"
          >
            {[...pageData.featureBar, ...pageData.featureBar, ...pageData.featureBar].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-12 cursor-default transition-transform duration-500 hover:scale-105"
              >
                <HeartIcon />
                <span className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-[color:var(--brand-ink)] transition-colors duration-500 hover:text-[color:var(--brand-red-dark)]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Right Fading Edge */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 sm:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION */}
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