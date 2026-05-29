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

export const homeHero = {
  welcome: "Welcome to Glorious Homecare Assistance",
  headline: "Compassionate Care in the comfort of your home",
  subhead: "Why Families Choose GLORIOUS HOMECARE ASSISTANCE LLC?",
};

export const missionStatement = {
  title: "Our Mission Statement",
  body:
    "The Agency's mission is to provide paraprofessional services to clients in their place of residence, thereby assisting them to realize his or her highest level of independence and quality of life. We are committed to providing quality care and service by staff members who recognize the value of the aged and disabled.",
};

export const homeCallouts = {
  optionsPrompt: "Explore Your Options Today!",
  callToAction: "Call or Text Today!",
  freeConsultation: "Contact Us Today for a Free Consultation",
};

export const whyChooseUs: string[] = [
  "Personalized Care Plans",
  "Carefully Screened Caregivers",
  "24/7 Availability",
  "Fast Care Placement",
  "Quality Assurance Visits",
  "Affordable Companion Care",
  "Flexible Payment Options",
  "Free Consultation",
];

export const clientReview = {
  title: "Client Reviews",
  quote:
    "They took great care of my grandmother, and I wish I could give them 10 stars. They pay attention to detail and their caregivers are very kind and polite. The care coordinator always kept me updated about all the happenings. I would use them again",
  author: "Shinga",
  hasHeartIcon: true,
};

export const independenceSupport = {
  title: "Remain Independence with Compassionate Support",
  paragraphs: [
    "Remaining at home allows seniors to maintain their independence, dignity, and comfort in familiar surroundings. With the support of a professional caregiver, daily tasks become easier while safety, companionship, and quality of life are preserved.",
    "Families gain peace of mind knowing their loved one is receiving attentive, compassionate care in the place they feel most secure - at home.",
  ],
  cta:
    "Call today for a FREE consultation and learn how we can help your loved one stay safe and independent at home.",
};

export const brandTagline = "Compassionate Care. Right at home.";

export const aboutOverview = {
  title: "We Are Glorious Homecare Assistance",
  paragraphs: [
    "Glorious Homecare Assistance LLC provides aide and companion care services to seniors, the elderly, mentally challenged, and physically challenged adults. Through coordinated care and support for clients and their families,",
    "Our caregivers enable individuals to remain in the safety and comfort of their own home environments for as long as possible.",
    "We also serve clients transitioning back home from an assisted living setting or from a hospital, nursing home or rehabilitation facility.",
  ],
};

export const servicesIntro = {
  title: "Compassionate Care You Can Trust",
  paragraphs: [
    "Our caregivers provide dependable support and companionship when family members cannot be present, giving families peace of mind knowing their loved one is safe, supported, and cared for at home.",
    "Whether for short visits or 24-hour care, our trained aides assist with daily activities, light housekeeping, emotional support, and companionship to help seniors and adults remain comfortable and independent in their own homes.",
    "Our professional caregivers are available 24 hours a day, 7 days a week, and can provide care at home, in the hospital, or in other care facilities whenever support is needed.",
  ],
};

export const serviceHighlights = [
  {
    title: "Personal Care Assistance",
    description: "Bathing, grooming, dressing, toileting, and mobility support",
  },
  {
    title: "Companion Care",
    description: "Friendly conversation, activities, emotional support, and supervision",
  },
  {
    title: "Homemaker Services",
    description: "Light housekeeping, laundry, meal preparation, and errands",
  },
  {
    title: "Medication Reminders",
    description: "Helping clients stay on schedule",
  },
  {
    title: "Transportation Assistance",
    description: "Doctor appointments, grocery shopping, and pharmacy visits",
  },
  {
    title: "Specialized Care",
    description: "Support for Alzheimer's, dementia, chronic illness, and disabilities",
  },
  {
    title: "Respite Care",
    description: "Temporary relief for family caregivers",
  },
  {
    title: "Post-Hospital Recovery Care",
    description: "Assistance during recovery after hospitalization or surgery",
  },
  {
    title: "24-Hour Care",
    description: "Around-the-clock care including nights, weekends, and holidays",
  },
];

export const companionCareServices = {
  title: "Companion Care Services",
  intro:
    "Your caregiver will not provide hands-on care for the client, but will provide companionship, offer encouragement, and perform light housekeeping tasks, including, but not limited to:",
  items: [
    "Taking the client to appointments",
    "Running errands such as grocery shopping",
    "Activities such as taking walks, playing games, and reading",
    "Meal preparation",
    "Washing dishes",
    "laundry and ironing",
    "Light housekeeping",
    "Changing bedding",
    "Watering plants",
    "Taking care of pets",
  ],
};

export const aideServices = {
  title: "Aide Services",
  intro:
    "Our aide attendants can serve the same functions as a companion, but also may provide hands-on care of the client. Duties may include:",
  items: [
    "Bathing, hair washing, and shaving",
    "Dressing assistance",
    "Medication reminders",
    "Assistance with toileting",
    "Other personal care needs",
  ],
};

export const servicesCta = {
  title: "Free Consultation",
  body: "Contact Us Today for a Free Consultation",
};
