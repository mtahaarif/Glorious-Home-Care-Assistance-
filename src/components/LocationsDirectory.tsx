"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { serviceAreas, serviceCounties } from "@/data/locations";

const groupedRegions = [
  {
    id: "santa-clara",
    name: "Santa Clara County",
    description: "Providing premium private duty home care, hourly respite relief, and dedicated senior companionship throughout the South Bay.",
    cities: serviceAreas.filter((a) => ["san-jose", "santa-clara", "sunnyvale", "cupertino", "milpitas", "campbell", "palo-alto", "mountain-view", "los-gatos"].includes(a.slug))
  },
  {
    id: "alameda",
    name: "Alameda County",
    description: "Comprehensive elder care coverage across the East Bay, focusing on safe, independent urban living and specialized mobility support.",
    cities: serviceAreas.filter((a) => ["berkeley", "oakland", "hayward", "pleasanton"].includes(a.slug))
  },
  {
    id: "san-mateo-sf",
    name: "San Mateo & SF",
    description: "Trusted caregivers delivering daily living assistance and specialized personal care routines across the Peninsula and San Francisco proper.",
    cities: serviceAreas.filter((a) => ["daly-city", "san-mateo", "san-bruno", "san-francisco"].includes(a.slug))
  },
  {
    id: "contra-costa",
    name: "Contra Costa County",
    description: "Reliable medication reminders, overnight companion monitoring, and diligent homemaker help tailored for Contra Costa seniors.",
    cities: serviceAreas.filter((a) => ["martinez", "concord", "walnut-creek"].includes(a.slug))
  },
  {
    id: "north-bay",
    name: "North Bay Counties",
    description: "Compassionate home health aide and companion services helping individuals age in place gracefully across Marin, Sonoma, Napa, and Solano.",
    cities: serviceAreas.filter((a) => ["santa-rosa", "rohnert-park", "petaluma", "napa", "vacaville", "fairfield", "san-rafael"].includes(a.slug))
  }
];

const extendedCounties = serviceCounties.filter(
  c => !["Santa Clara County", "Alameda County", "Contra Costa County", "San Francisco County", "San Mateo County"].includes(c)
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const DiagonalArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

export default function LocationsDirectory() {
  const [activeSection, setActiveSection] = useState<string>("santa-clara");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" } 
    );

    groupedRegions.forEach((region) => {
      const el = document.getElementById(region.id);
      if (el) observer.observe(el);
    });
    
    const extendedEl = document.getElementById("extended-regions");
    if (extendedEl) observer.observe(extendedEl);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      
      {/* LEFT: STICKY SIDEBAR */}
      <aside className="w-full lg:w-[28%] shrink-0 lg:sticky lg:top-32 z-10">
        <h2 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[color:var(--brand-ink)]/50 mb-6 pl-4">
          Service Districts
        </h2>
        
        <nav>
          <ul className="flex flex-col gap-2 relative border-l-2 border-black/5 pl-4">
            {groupedRegions.map((region) => {
              const isActive = activeSection === region.id;
              return (
                <li key={region.id}>
                  <a 
                    href={`#${region.id}`}
                    onClick={(e) => scrollToSection(e, region.id)}
                    className={`group relative flex items-center justify-between py-4 pr-4 pl-6 rounded-r-2xl transition-all duration-500 ease-out overflow-hidden ${
                      isActive 
                        ? "bg-[color:var(--brand-red-dark)] text-white shadow-lg translate-x-2" 
                        : "bg-transparent text-[color:var(--brand-ink)]/70 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[color:var(--brand-gold)]" />
                    )}
                    
                    <span className={`font-bold transition-colors duration-300 text-sm sm:text-base ${
                      isActive ? "text-white" : "group-hover:text-[color:var(--brand-red-dark)]"
                    }`}>
                      {region.name}
                    </span>
                    
                    <span className={`text-xs font-bold transition-all duration-300 ${
                      isActive ? "opacity-100 text-[color:var(--brand-gold)]" : "opacity-0 -translate-x-4"
                    }`}>
                      {region.cities.length} Areas
                    </span>
                  </a>
                </li>
              );
            })}
            
            {/* Extended Counties Tab */}
            <li className="mt-4">
              <a 
                href="#extended-regions"
                onClick={(e) => scrollToSection(e, "extended-regions")}
                className={`group relative flex items-center justify-between py-4 pr-4 pl-6 rounded-r-2xl transition-all duration-500 ease-out overflow-hidden ${
                  activeSection === "extended-regions" 
                    ? "bg-[color:var(--brand-red-dark)] text-white shadow-lg translate-x-2" 
                    : "bg-transparent text-[color:var(--brand-ink)]/70 hover:bg-white hover:shadow-sm"
                }`}
              >
                {activeSection === "extended-regions" && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[color:var(--brand-gold)]" />
                )}
                <span className={`font-bold transition-colors duration-300 text-sm sm:text-base ${
                  activeSection === "extended-regions" ? "text-white" : "group-hover:text-[color:var(--brand-red-dark)]"
                }`}>
                  Extended Coverage
                </span>
                <span className={`transition-transform duration-300 ${
                  activeSection === "extended-regions" ? "text-[color:var(--brand-gold)] translate-x-0" : "text-[color:var(--brand-ink)]/30 group-hover:text-[color:var(--brand-gold)] -translate-x-2"
                }`}>
                  &darr;
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* RIGHT: REGIONS */}
      <div className="w-full lg:w-[72%] flex flex-col gap-20 lg:gap-32">

        {groupedRegions.map((region, idx) => (
          <div
            key={region.id}
            id={region.id}
            className="scroll-mt-20"
          >

            {/* SEO FIX: UNIFIED REGION HEADER 
                Combined the separate mobile and desktop headers into a single DOM element 
                using responsive classes to eliminate duplicate text penalties. */}
            <Reveal>
              <div className="sticky top-0 z-30 -mx-4 w-[calc(100%+2rem)] bg-white/95 backdrop-blur-sm px-4 pt-20 pb-6 text-center lg:static lg:mx-0 lg:w-full lg:bg-transparent lg:p-0 lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[color:var(--brand-ink)] tracking-tight">
                  {region.name}
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-[color:var(--brand-ink)]/70 lg:mx-0 lg:mt-4 lg:max-w-2xl lg:text-lg">
                  {region.description}
                </p>
              </div>
            </Reveal>

            {/* =========================
                CITY CARDS
                ========================= */}
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">

              {region.cities.map((area, index) => (
                <li key={area.slug}>
                  <Reveal delay={index * 0.05}>

                    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 border border-black/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(199,36,57,0.15)] hover:border-[color:var(--brand-red)]/30">

                      <div className="flex items-start justify-between mb-8">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-cream)] text-[color:var(--brand-gold-dark)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors duration-500 shadow-inner">
                          <MapPinIcon />
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-[color:var(--brand-ink)]/40 group-hover:bg-[color:var(--brand-gold)] group-hover:text-white transition-all duration-500 group-hover:rotate-45">
                          <DiagonalArrowIcon />
                        </div>
                      </div>

                      <div>
                        <div className="text-2xl font-bold text-[color:var(--brand-ink)] group-hover:text-[color:var(--brand-red-dark)] transition-colors duration-300">
                          <Link 
                            href={`/locations/${area.slug}`} 
                            className="after:absolute after:inset-0 focus:outline-none"
                            aria-label={`View home care services in ${area.name}`}
                          >
                            {area.name}, CA
                          </Link>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-[color:var(--brand-ink)]/60 line-clamp-2">
                          {area.description}
                        </p>
                      </div>

                    </div>

                  </Reveal>
                </li>
              ))}

            </ul>

            {/* Divider */}
            {idx !== groupedRegions.length - 1 && (
              <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            )}

          </div>
        ))}

        {/* EXTENDED REGIONS */}
        <div id="extended-regions" className="scroll-mt-32 pt-10 border-t border-black/10">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[color:var(--brand-ink)] tracking-tight">
              Extended California Coverage
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--brand-ink)]/70 max-w-2xl">
              Glorious Home Care Assistance proudly extends our premium private duty home care and senior companionship across these additional California communities.
            </p>
          </Reveal>

          <ul className="mt-10 flex flex-wrap gap-3">
            {extendedCounties.map((county, idx) => (
              <li key={county}>
                <Reveal delay={idx * 0.03}>
                  <div className="group flex cursor-default items-center gap-2.5 rounded-full border border-[color:var(--brand-gold)]/30 bg-[color:var(--brand-cream)]/50 px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[color:var(--brand-red-dark)] hover:border-[color:var(--brand-red-dark)] hover:shadow-md">
                    <div className="h-2 w-2 rounded-full bg-[color:var(--brand-gold)] group-hover:bg-white transition-colors" />
                    <span className="text-sm font-bold text-[color:var(--brand-ink)] group-hover:text-white transition-colors">
                      {county}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}