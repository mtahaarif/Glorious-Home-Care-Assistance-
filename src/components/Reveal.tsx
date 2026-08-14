"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // 1. Added delay to the TypeScript interface
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
        threshold: 0.05, // Slightly higher threshold so it fades in naturally as you scroll
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

  return (
    <div
      ref={elementRef}
      // 2. Applied the delay adjuster dynamically via inline styles
      style={{ transitionDelay: `${delay}s` }} 
      className={`transition-opacity duration-[1500ms] ease-in-out will-change-[opacity] ${
        isIntersecting ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}