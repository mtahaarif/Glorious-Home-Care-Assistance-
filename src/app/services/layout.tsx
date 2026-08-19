import type { Metadata } from "next";

export const metadata: Metadata = {
  // SEO Fix: 'absolute' forces Next.js to ignore the site-wide suffix template, keeping this perfectly under 580 pixels.
  title: {
    absolute: "In-Home Senior Care Services in San Jose & Bay Area",
  },
  
  description:
    "Providing compassionate in-home care, personal care, and senior care at home across San Jose, Los Altos, Palo Alto, San Francisco, and the wider Bay Area.",
    
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