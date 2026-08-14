import Link from "next/link";
import Container from "@/components/Container";
import { contactInfo, navLinks, socialLinks } from "@/data/global";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[color:var(--brand-red-dark)] text-white">
      {/* Top Section: Smart 4-Column Grid */}
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Intro */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--brand-gold)]">
                Glorious Home Care
              </p>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                Compassionate Care<br />In Your Home
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Providing dependable non-medical home care, companion care, and daily living support across San Jose and the Bay Area.
            </p>
          </div>

          {/* Column 2: Reach Us & Location (Semantic <address>) */}
          <address className="not-italic space-y-6">
            <div>
              <h4 className="text-base font-semibold text-white">Call or Message Us</h4>
              <div className="mt-2 space-y-1.5 text-sm text-white/80">
                <p>
                  Phone: <a href={contactInfo.phoneHref} className="font-medium hover:text-[color:var(--brand-gold)] transition">{contactInfo.phone}</a>
                </p>
                <p>
                  Email: <a href={`mailto:${contactInfo.email}`} className="font-medium hover:text-[color:var(--brand-gold)] transition">{contactInfo.email}</a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Our Location</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {contactInfo.addressLine1}<br />
                {contactInfo.addressLine2}
              </p>
            </div>
          </address>

          {/* Column 3: Quick Links Navigation */}
          <nav aria-label="Footer Navigation">
            <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/80">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[color:var(--brand-gold)] transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Column 4: Social Connect */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Connect With Us</h4>
            <p className="text-sm text-white/80 mb-4">
              Follow our community updates and care tips online.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((item) => {
                const iconMap: Record<string, React.ReactNode> = {
                  LinkedIn: <FaLinkedinIn size={15} />,
                  Facebook: <FaFacebookF size={15} />,
                  Instagram: <FaInstagram size={15} />,
                };

                const icon = iconMap[item.label];

                return (
                  // Swapped <Link> for a standard <a> tag for external routing
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-[color:var(--brand-red-dark)] hover:scale-110"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/15 bg-[color:var(--brand-ink)] py-6">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-white/70">
            
            {/* Copyright & Legal Text */}
            <div className="space-y-1">
              <p>© {currentYear} Glorious Home Care Assistance. All rights reserved.</p>
            </div>

            {/* Tagline / SEO footer note */}
            <div className="font-medium text-white/60 uppercase tracking-widest text-[10px]">
              Compassionate Care in the Comfort of Home
            </div>

          </div>
        </Container>
      </div>
    </footer>
  );
}