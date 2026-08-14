import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// ✅ FIXED: Next.js 14+ expects viewport to be exported separately from metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

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

  // ✅ FIXED: Added 'images' array to complete the Open Graph requirements
  openGraph: {
    title: "Home Care in San Jose & Bay Area | Glorious Home Care",
    description: "Providing compassionate in-home care, personal care, and senior care at home across San Jose and the wider Bay Area.",
    url: "https://www.glorioushomecareassistance.com",
    siteName: "Glorious Home Care Assistance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services.jpg", // Make sure this image is in your public/ folder!
        width: 1200,
        height: 630,
        alt: "Glorious Home Care Assistance Preview",
      },
    ],
  },

  // ✅ FIXED: Added 'images' to complete the Twitter Card requirements
  twitter: {
    card: "summary_large_image",
    title: "Home Care in San Jose & Bay Area | Glorious Home Care",
    description: "Compassionate at-home senior care and personal care services in San Jose and the Bay Area.",
    images: ["/services.jpg"], // Ensure this matches the OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      {/* Viewport & head tags are automatically handled by Next.js */}
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