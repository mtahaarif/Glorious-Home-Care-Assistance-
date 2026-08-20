import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "In-Home Senior Care Services | Glorious Home Care",
  },
  description:
    "Discover compassionate in-home senior care in San Jose and the Bay Area, including personal, companion, respite, and 24/7 care.",
  alternates: {
    canonical: "https://www.glorioushomecareassistance.com/services",
  },
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