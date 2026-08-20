"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.05,
        rootMargin: "-20px 0px -40px 0px", 
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // ✅ SEO FIX: Map numerical delays to Tailwind classes to completely eliminate inline 'style' attributes
  const getDelayClass = (d: number) => {
    if (d === 0.05) return "delay-[50ms]";
    if (d === 0.1) return "delay-[100ms]";
    if (d === 0.15) return "delay-[150ms]";
    if (d === 0.2) return "delay-[200ms]";
    if (d === 0.3) return "delay-[300ms]";
    if (d === 0.4) return "delay-[400ms]";
    if (d === 0.5) return "delay-[500ms]";
    return "delay-0";
  };

  return (
    <div
      ref={elementRef}
      // style={{ transitionDelay: `${delay}s` }} <-- REMOVED
      className={`transition-opacity duration-[1500ms] ease-in-out will-change-[opacity] ${
        isIntersecting ? "opacity-100" : "opacity-0"
      } ${getDelayClass(delay)} ${className}`}
    >
      {children}
    </div>
  );
}