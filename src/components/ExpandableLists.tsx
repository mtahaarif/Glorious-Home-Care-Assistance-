"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

interface LocationItem {
  slug: string;
  name?: string;
  city?: string;
}

interface ResourceItem {
  slug: string;
  title: string;
}

// ----------------------------------------------------
// 1. DYNAMIC EXPANDABLE LOCATIONS GRID
// ----------------------------------------------------
export function ExpandableLocations({ locations }: { locations: LocationItem[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);
  const [scrollHeight, setScrollHeight] = useState("2000px");

  // Dynamically calculate the full height of the grid for buttery smooth transitions
  useEffect(() => {
    if (contentRef.current) {
      setScrollHeight(`${contentRef.current.scrollHeight + 40}px`);
    }
  }, [isExpanded, locations]);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={`relative w-full overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          isExpanded ? "" : "max-h-[520px] sm:max-h-[380px] lg:max-h-[260px]"
        }`}
        style={{ maxHeight: isExpanded ? scrollHeight : undefined }}
      >
        <ul ref={contentRef} className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center pb-4">
          {locations.map((loc, idx) => (
            <li key={loc.slug}>
              <Reveal delay={(idx % 10) * 0.05}>
                <Link href={`/locations/${loc.slug}`} className="block h-full rounded-2xl border border-brand-cream bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold hover:shadow-md">
                  <span className="font-bold text-brand-ink block text-sm mb-1">{loc.name || loc.city}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted block">Home Care in {loc.name || loc.city}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Smart Gradient Fade Overlay when collapsed */}
        {!isExpanded && locations.length > 7 && (
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[color:var(--surface)] to-transparent pointer-events-none"></div>
        )}
      </div>

      {locations.length > 7 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 z-20 group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-brand-red bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-brand-red transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/20"
        >
          <span className="absolute inset-0 z-0 h-full w-0 bg-brand-red transition-all duration-300 ease-out group-hover:w-full"></span>
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            {isExpanded ? "Show Less Locations" : "View All Locations"}
            <svg className={`h-4 w-4 transition-transform duration-500 ease-in-out ${isExpanded ? "rotate-180" : "rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

// ----------------------------------------------------
// 2. DYNAMIC EXPANDABLE RESOURCES PILLS
// ----------------------------------------------------
export function ExpandableResources({ resources }: { resources: ResourceItem[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);
  const [scrollHeight, setScrollHeight] = useState("1000px");

  useEffect(() => {
    if (contentRef.current) {
      setScrollHeight(`${contentRef.current.scrollHeight + 40}px`);
    }
  }, [isExpanded, resources]);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={`relative w-full overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          isExpanded ? "" : "max-h-[220px] md:max-h-[110px]"
        }`}
        style={{ maxHeight: isExpanded ? scrollHeight : undefined }}
      >
        <ul ref={contentRef} className="flex flex-wrap justify-center gap-3 pb-4">
          {resources.map((res, idx) => (
            <li key={res.slug}>
              <Reveal delay={(idx % 5) * 0.05}>
                <Link href={`/resources/${res.slug}`} className="inline-block rounded-full border border-brand-cream bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-ink shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold hover:text-brand-red hover:shadow-md">
                  {res.title}
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Smart Gradient Fade Overlay when collapsed */}
        {!isExpanded && resources.length > 7 && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[color:var(--surface)] to-transparent pointer-events-none"></div>
        )}
      </div>

      {resources.length > 7 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 z-20 group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-brand-ink/20 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-ink transition-all duration-300 hover:border-brand-gold hover:shadow-md"
        >
          <span className="absolute inset-0 z-0 h-full w-0 bg-brand-gold/10 transition-all duration-300 ease-out group-hover:w-full"></span>
          <span className="relative z-10 flex items-center gap-2 group-hover:text-brand-red transition-colors duration-300">
            {isExpanded ? "Show Less Guides" : "View More Resources"}
            <svg className={`h-4 w-4 transition-transform duration-500 ${isExpanded ? "-translate-y-1 rotate-180" : "translate-y-0.5"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}