"use client";

import React, { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // A tiny delay ensures the browser has painted the initial opacity-0 state
    // before we trigger the fade-in to opacity-100.
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-[1000ms] ease-in-out will-change-[opacity] ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}