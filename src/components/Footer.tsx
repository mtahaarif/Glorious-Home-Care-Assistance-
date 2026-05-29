import Link from "next/link";
import { brandTagline, contactInfo, navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-lg font-semibold">{contactInfo.name}</p>
          <p className="text-sm text-white/80">
            {contactInfo.addressLine1}
            <br />
            {contactInfo.addressLine2}
          </p>
          <p className="text-sm text-white/80">{brandTagline}</p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Contact
          </p>
          <div className="space-y-2 text-sm text-white/80">
            <p>
              {contactInfo.phoneLabel}: {contactInfo.phone}
            </p>
            <p>
              {contactInfo.textLabel}: {contactInfo.text}
            </p>
            <p>Email: {contactInfo.email}</p>
            <p>Website: {contactInfo.website}</p>
            <p>License Number: {contactInfo.licenseNumber}</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Explore
          </p>
          <div className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
