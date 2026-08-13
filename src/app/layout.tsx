import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Sets the base URL so canonical links generate properly
  metadataBase: new URL("https://www.glorioushomecareassistance.com"),
  
  title: {
    default: "Home Care in San Jose & Bay Area | Glorious Home Care",
    template: "%s | Glorious Home Care Assistance LLC",
  },
  
  description: "Providing compassionate in-home care, personal care, and senior care at home across San Jose, Los Altos, Palo Alto, San Francisco, and the wider Bay Area.",
  
  // Exact local SEO keywords requested
  keywords: [
    "home care in San Jose",
    "in-home care san jose",
    "personal care San Jose",
    "Home care in Bay area",
    "home care near me",
    "senior care at home",
    "at home senior care",
    "home care los altos",
    "home care palo alto",
    "home care san francisco",
    "home care atherton",
    "home care los gatos",
    "home care merced",
    "home care santa clara",
    "home care pleasanton",
    "home care mountain view"
  ],

  // Resolves the "No favicon" and "No Apple touch icon" SEO warnings
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Generates canonical tags to prevent duplicate content penalties
  alternates: {
    canonical: "/",
  },

  // Open Graph for Facebook/LinkedIn shares
  openGraph: {
    title: "Home Care in San Jose & Bay Area | Glorious Home Care",
    description: "Providing compassionate in-home care, personal care, and senior care at home across San Jose and the wider Bay Area.",
    url: "https://www.glorioushomecareassistance.com",
    siteName: "Glorious Home Care Assistance",
    locale: "en_US",
    type: "website",
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Home Care in San Jose & Bay Area | Glorious Home Care",
    description: "Compassionate at-home senior care and personal care services in San Jose and the Bay Area.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        {/* Viewport meta tag is automatically handled by Next.js, but explicitly declaring it here satisfies some strict SEO scanners */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}