import type { Metadata } from "next";

export const metadata: Metadata = {
  // SEO Fix: Unique title that avoids the word repetition penalty
  title: "In-Home Senior Care Services in San Jose & Bay Area",
  
  // SEO Fix: Keeps your perfect 100% score description
  description:
    "Providing compassionate in-home care, personal care, and senior care at home across San Jose, Los Altos, Palo Alto, San Francisco, and the wider Bay Area.",
    
  // SEO Fix: Tells Google THIS is the master version of the Services page (fixes the Canonical Error)
  alternates: {
    canonical: "https://www.glorioushomecareassistance.com/services",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}