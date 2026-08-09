export type NavLink = {
  label: string;
  href: string;
};

export type ContactInfo = {
  name: string;
  addressLine1: string;
  addressLine2: string;
  phoneLabel: string;
  phone: string;
  phoneHref: string;
  textLabel: string;
  text: string;
  textHref: string;
  email: string;
  website: string;
  licenseNumber: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Areas We Serve", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/home-care-faq" },
  { label: "Referral Partners", href: "/referral-partners" },
  { label: "Request Care", href: "/request-care" },
];

export const contactInfo: ContactInfo = {
  name: "Glorious Home Care Assistance, LLC",
  addressLine1: "2528 Qume Drive, Ste. 4",
  addressLine2: "San Jose, CA 95131",
  phoneLabel: "Phone",
  phone: "408-332-5843",
  phoneHref: "tel:+14083325843",
  textLabel: "Text",
  text: "858-321-5077",
  textHref: "sms:+18583215077",
  email: "admin@glorioushomecareca.com",
  website: "glorioushomecareassistance.com",
  licenseNumber: "014700173",
};

export const brandTagline = "Compassionate Care. Right at home.";

export const homeCallouts = {
  optionsPrompt: "Explore Your Options Today!",
  callToAction: "Call or Text Today!",
  freeConsultation: "Contact Us Today for a Free Consultation",
};

export const servicesCta = {
  title: "Free Consultation",
  body: "Contact Us Today for a Free Consultation",
};