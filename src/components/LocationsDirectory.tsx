"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { serviceAreas, serviceCounties } from "@/data/locations";

// Grouping the flat serviceAreas array into logical counties
const groupedRegions = [
  {
    id: "santa-clara",
    name: "Santa Clara County",
    description: "Providing premium private duty home care, hourly respite relief, and senior companionship across Santa Clara County communities.",
    cities: serviceAreas.filter((a) => ["san-jose", "santa-clara", "sunnyvale", "cupertino", "milpitas", "campbell", "palo-alto", "mountain-view", "los-gatos"].includes(a.slug))
  },
  {
    id: "alameda",
    name: "Alameda County",
    description: "Comprehensive home care coverage across Alameda County, focusing on safe, independent urban living and specialized support.",
    cities: serviceAreas.filter((a) => ["berkeley", "oakland", "hayward", "pleasanton"].includes(a.slug))
  },
  {
    id: "san-mateo-sf",
    name: "San Mateo & SF",
    description: "Trusted caregivers providing daily living assistance and specialized personal care across the Peninsula and San Francisco.",
    cities: serviceAreas.filter((a) => ["daly-city", "san-mateo", "san-bruno", "san-francisco"].includes(a.slug))
  },
  {
    id: "contra-costa",
    name: "Contra Costa County",
    description: "Reliable medication reminders, overnight companion monitoring, and dedicated homemaker help for East Bay seniors.",
    cities: serviceAreas.filter((a) => ["martinez", "concord", "walnut-creek"].includes(a.slug))
  },
  {
    id: "north-bay",
    name: "North Bay Counties",
    description: "Compassionate aide and companion care helping individuals age in place across Marin, Sonoma, Napa, and Solano counties.",
    cities: serviceAreas.filter((a) => ["santa-rosa", "rohnert-park", "petaluma", "napa", "vacaville", "fairfield", "san-rafael"].includes(a.slug))
  }
];

// Extracting the extended counties
const extendedCounties = serviceCounties.filter(
  c => !["Santa Clara County", "Alameda County", "Contra Costa County", "San Francisco County", "San Mateo County"].includes(c)
);

// Icons
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand-ink group-hover:text-brand-red transition-colors" aria-hidden="true">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-5 w-5 text-brand-gold shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export default function LocationsDirectory() {
  const [activeSection, setActiveSection] = useState<string>("santa-clara");

  // Intersection Observer to smoothly transition sidebar state on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" } // Triggers the transition smoothly as content enters the upper third of the screen
    );

    groupedRegions.forEach((region) => {
      const el = document.getElementById(region.id);
      if (el) observer.observe(el);
    });
    
    const extendedEl = document.getElementById("extended-regions");
    if (extendedEl) observer.observe(extendedEl);

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler for sidebar links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      
      {/* LEFT: STICKY SIDEBAR */}
      <aside className="w-full lg:w-[30%] shrink-0 lg:sticky lg:top-28 space-y-2 z-10">
        <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-muted mb-6 ml-2">
          Filter by Service District
        </h3>
        <div className="flex flex-col gap-3">
          {groupedRegions.map((region) => {
            const isActive = activeSection === region.id;
            return (
              <a 
                key={region.id} 
                href={`#${region.id}`}
                onClick={(e) => scrollToSection(e, region.id)}
                className={`group flex items-center justify-between p-4 rounded-xl border shadow-sm transition-all duration-500 ease-out ${
                  isActive 
                    ? "bg-brand-ink text-white border-brand-ink scale-[1.02] shadow-md" 
                    : "bg-white border-gray-100 text-brand-ink hover:bg-brand-ink/5"
                }`}
              >
                <span className={`font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-brand-ink group-hover:text-brand-red"}`}>
                  {region.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full transition-colors duration-300 ${isActive ? "bg-white/20 text-white" : "bg-brand-cream text-brand-ink group-hover:bg-brand-red/10 group-hover:text-brand-red"}`}>
                    {region.cities.length} Areas
                  </span>
                  <span className={`transition-transform duration-300 ${isActive ? "text-brand-gold translate-x-1" : "text-gray-300 group-hover:text-brand-gold group-hover:translate-x-1"}`}>
                    &rarr;
                  </span>
                </div>
              </a>
            );
          })}
          
          {/* Extended Counties Tab */}
          <a 
            href="#extended-regions"
            onClick={(e) => scrollToSection(e, "extended-regions")}
            className={`group flex items-center justify-between p-4 rounded-xl border shadow-sm transition-all duration-500 ease-out ${
              activeSection === "extended-regions" 
                ? "bg-brand-ink text-white border-brand-ink scale-[1.02] shadow-md" 
                : "bg-white border-gray-100 text-brand-ink hover:bg-brand-ink/5"
            }`}
          >
            <span className={`font-bold transition-colors duration-300 ${activeSection === "extended-regions" ? "text-white" : "text-brand-ink group-hover:text-brand-red"}`}>
              Extended Regions
            </span>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full transition-colors duration-300 ${activeSection === "extended-regions" ? "bg-white/20 text-white" : "bg-brand-cream text-brand-ink group-hover:bg-brand-red/10 group-hover:text-brand-red"}`}>
                {extendedCounties.length} Counties
              </span>
              <span className={`transition-transform duration-300 ${activeSection === "extended-regions" ? "text-brand-gold translate-x-1" : "text-gray-300 group-hover:text-brand-gold group-hover:translate-x-1"}`}>
                &rarr;
              </span>
            </div>
          </a>
        </div>
      </aside>

      {/* RIGHT: SCROLLABLE CITIES */}
      <div className="w-full lg:w-[70%] flex flex-col gap-16 lg:gap-24">
        {groupedRegions.map((region, idx) => (
          <div key={region.id} id={region.id} className="scroll-mt-32">
            <Reveal>
              <h2 className="text-3xl font-bold text-brand-ink">{region.name} Home Care Support</h2>
              <p className="mt-3 text-base leading-relaxed text-muted max-w-2xl">{region.description}</p>
            </Reveal>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {region.cities.map((area, index) => (
                <Reveal key={area.slug} delay={index * 0.05}>
                  <Link 
                    href={`/locations/${area.slug}`}
                    className="group flex h-full flex-col rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-brand-red/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f4f7f9] group-hover:bg-brand-red/10 transition-colors">
                          <MapPinIcon />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-brand-ink group-hover:text-brand-red transition-colors">
                            {area.name}, CA
                          </h3>
                          <p className="text-[0.65rem] font-bold text-muted/70 mt-0.5 uppercase tracking-wider">
                            Coverage ZIP: Local Neighborhoods
                          </p>
                        </div>
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted line-clamp-3">
                      {area.description}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
            {idx !== groupedRegions.length - 1 && (
              <hr className="mt-16 border-gray-200" />
            )}
          </div>
        ))}

        {/* Extended Regions Section */}
        <hr className="border-gray-200" />
        <div id="extended-regions" className="scroll-mt-32">
          <Reveal>
            <h2 className="text-3xl font-bold text-brand-ink">Extended California Coverage</h2>
            <p className="mt-3 text-base leading-relaxed text-muted max-w-2xl">
              Glorious Home Care Assistance proudly extends our premium private duty home care and senior companionship across these additional California communities.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extendedCounties.map((county, idx) => (
              <Reveal key={county} delay={idx * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-red/20 transition-colors">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream">
                      <CheckIcon />
                  </div>
                  <span className="text-sm font-bold text-brand-ink">{county}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}