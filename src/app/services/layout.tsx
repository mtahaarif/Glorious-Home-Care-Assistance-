import type { Metadata } from "next";


export const metadata: Metadata = {
  // SEO Fix: 'absolute' prevents the root layout from appending the site name, clearing word repetition penalties
  title: {
    absolute: "In-Home Senior Care Services | Glorious Home Care",
  },
  description: "Explore our comprehensive in-home care services across San Jose and the Bay Area, including personal care, companion care, respite care, and specialized 24/7 support.",
  alternates: {
    canonical: "https://www.glorioushomecareassistance.com/services",
  },
  // ✅ SEO FIX: Explicitly set the Open Graph URL to match the canonical URL
  openGraph: {
    url: "https://www.glorioushomecareassistance.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
