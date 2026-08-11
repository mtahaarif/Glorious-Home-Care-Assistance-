export const homeHero = {
  welcome: "Welcome to Glorious Home Care",
  badge: "Trusted Care",
  headline: "Compassionate Care In the Comfort of Home",
  subhead: "Providing dependable non-medical home care, companion care, and daily living support across San Jose and the Bay Area.",
  bgImages: [
    "/home-banner-1.jpg", 
    "/home-banner-2.jpg", 
    "/home-banner-3.jpg", 
    "/home-banner-4.jpg"
  ]
};

export const homeAbout = {
  title: "Compassionate Home Care That Helps Your Loved Ones Thrive at Home",
  description:
    "At Glorious Home Care Assistance, we believe every individual deserves dignity, independence, and compassionate care. Our caregivers provide personalized support tailored to each client’s unique needs while offering peace of mind to families.",
};

export const homeServices = {
  title: "Home Care Options",
  subtitle: "Support at home for every area of life",
  services: [
    {
      title: "Companion Care",
      description: "Helping seniors remain socially engaged through conversation, activities, and emotional support.",
      image: "/companion-care.jpg", 
    },
    {
      title: "Personal Care Assistance",
      description: "Support with daily activities such as grooming, dressing, mobility assistance, and hygiene.",
      image: "/personal-care.jpg", 
    },
    {
      title: "Meal Preparation & Nutrition",
      description: "Delicious, nutritious meals prepared with care to support your loved one's health and well-being.",
      image: "/meal-prep.jpg", 
    },
    {
      title: "Medication Reminders",
      description: "Helping seniors manage their medications with timely reminders and proper administration.",
      image: "/medication.jpg", 
    },
      {
      title: "Light Housekeeping",
      description: "Maintaining a clean, safe, and comfortable home environment through light cleaning and organization.",
      image: "/housekeeping.jpg", 
    },
    {
      title: "Transportation Services",
      description: "Reliable transportation to medical appointments, errands, community activities, and destinations.",
      image: "/transportation.jpg", 
    },
    {
      title: "Respite Care",
      description: "Short-term relief for family caregivers, ensuring your loved one is safe, comfortable, and well-cared for.",
      image: "/respite-care.jpg", 
    },
    {
      title: "Dementia Care",
      description: "Specialized care for individuals with dementia, focusing on safety, comfort, and maintaining dignity.",
      image: "/dementia-care.jpg", 
    },
  ],
};

export const homeProcess = {
  title: "Our Care Process",
  steps: [
    {
      step: "01",
      title: "Free Consultation",
      description:
        "We start by learning about your loved one's needs, preferences, and goals to determine how we can best help.",
    },
    {
      step: "02",
      title: "Personalized Care Plan",
      description:
        "Together, we create a care plan tailored to the individual's daily routines, level of assistance needed, and desired schedule.",
    },
    {
      step: "03",
      title: "Ongoing Support",
      description:
        "Our caregivers provide reliable assistance while maintaining open communication with families and adjusting care as needs evolve.",
    },
  ],
};

export const whyChooseUsFeatures = {
  title: "Why Families Choose Glorious Home Care Assistance",
  subtitle:
    "We provide compassionate, reliable non-medical home care designed to promote independence, dignity, and peace of mind for both clients and their families.",
  features: [
    {
      title: "Compassion",
      description: "We treat every client with dignity, respect, and genuine care.",
    },
    {
      title: "Personalized Care",
      description: "Care plans are tailored to each client's unique needs and preferences.",
    },
    {
      title: "Reliability",
      description: "Families can count on consistent, dependable support.",
    },
    {
      title: "Independence",
      description: "Our goal is to help clients remain comfortable and independent at home.",
    },
  ],
};

export const whoWeServe = {
  title: "Who We Serve",
  subtitle: "Compassionate Support for Every Stage of Life",
  groups: [
    {
      title: "Seniors Aging in Place",
      description: "Helping older adults remain safe, comfortable, and independent at home.",
      image: "/aging-in-place.jpg", // Replace with your actual image path in public/
    },
    {
      title: "Individuals Recovering At Home",
      description: "Providing non-medical support during recovery from illness, injury, or hospitalization.",
      image: "/recovering-at-home.jpg", // Replace with your actual image path in public/
    },
    {
      title: "Family Caregivers Needing Support",
      description: "Offering respite care and assistance to help family caregivers maintain balance and peace of mind.",
      image: "/family-caregivers.jpg", // Replace with your actual image path in public/
    },
  ],
};

export const clientReviews = [
  {
    quote:
      "Minilva has been with us for 3 years. We are 89 and 90 years old. And my husband has dementia. Her care and help is the very best. When she must be away – the company, Glorious Homecare Assistance, sends a capable substitute.",
    author: "Lorraine Coccaro",
    hasHeartIcon: true,
  },
  {
    quote:
      "Glorious HomeCare is a great organization that offers needed services for their clients. True professionals helping many. San Jose is lucky to have this organization providing home care services and care management. I will definitely recommend this company to everyone.",
    author: "Nevebelle Fri",
    hasHeartIcon: true,
  },
];

// --- Added from our previous Content Extraction phase ---

export const emergencyCare = {
  title: "Need Care Quickly?",
  subtitle: "We're Here When Support Is Needed Fast",
  description: "Compassionate non-medical home care for seniors when families need help right away—after a hospital discharge, sudden schedule change, or urgent care situation. Available 24/7.",
  highlights: ["Quick Response", "Flexible Support", "Peace of Mind"]
};

export const fiveFactors = {
  title: "5 Key Factors to Choose a Care Agency You Can Trust",
  subtitle: "How to Choose the Best Home Care",
  factors: [
    { num: "01", title: "Consistent Caregivers", desc: "Reliable caregivers you and your loved one can count on." },
    { num: "02", title: "Personalized Care Plans", desc: "Care plans tailored to your loved one's needs, preferences, and routine." },
    { num: "03", title: "Licensed Agency", desc: "A licensed, non-medical home care agency committed to safety, quality, and trust." },
    { num: "04", title: "Flexible Scheduling", desc: "Care when you need it—hourly, daily, overnight, or short-term." },
    { num: "05", title: "Family Communication", desc: "We keep families informed every step of the way with open, clear, and timely communication." }
  ]
};

export const careComparison = {
  title: "Understanding Your Care Options",
  subtitle: "Private Pay vs. IHSS vs. Home Health",
  description: "Private-duty home care is non-medical support you pay for privately. It provides flexible, personalized assistance to help your loved one live safely and comfortably at home.",
  options: [
    {
      type: "Private Pay (Home Care)",
      paidBy: "You or your family",
      careType: "Non-medical assistance with daily activities",
      choice: "You choose your caregiver with our help",
      schedule: "Fully flexible - hours & days you choose",
      bestFor: "Ongoing daily support, companionship, personal care, meals & more",
      isHighlighted: true 
    },
    {
      type: "IHSS (In-Home Supportive Services)",
      paidBy: "Medi-Cal program (if qualified)",
      careType: "Non-medical assistance with daily activities",
      choice: "Caregiver is a family member or friend",
      schedule: "Limited to approved hours from the state",
      bestFor: "Basic daily support for those who qualify",
      isHighlighted: false
    },
    {
      type: "Home Health (Skilled Care)",
      paidBy: "Insurance",
      careType: "Medical care by licensed nurses or therapists",
      choice: "Care team assigned by the agency",
      schedule: "Based on medical need & insurance approval",
      bestFor: "Short-term medical care, rehab, or skilled nursing",
      isHighlighted: false
    }
  ]
};

export const privateDutyCare = {
  heading: "What is Private-Duty Home Care?",
  subheading: "Understanding your care options so you can make the best decision for your loved one.",
  description: "Private-duty home care is non-medical support you pay for privately. It provides flexible, personalized assistance built around your loved one's needs and your family's preferences to help them live safely and comfortably at home.",
  idealFor: {
    title: "Private-Duty Care is Ideal For:",
    items: [
      "Seniors who don't qualify for IHSS",
      "Families who want more flexibility",
      "Loved ones recovering at home",
      "Anyone wanting personalized care & peace of mind"
    ]
  },
  includes: {
    title: "Private-Duty Home Care May Include Support With:",
    footer: "Every family's needs are unique. Care is personalized. Support is consistent.",
    services: [
      { title: "Mobility Assistance", desc: "Safe movement and transfers", icon: "mobility" },
      { title: "Personal Care", desc: "Bathing, Dressing, Grooming", icon: "personal" },
      { title: "Meal Preparation", desc: "Nutritious and dietary-specific", icon: "meal" },
      { title: "Medication Reminders", desc: "Keeping schedules on track", icon: "medication" },
      { title: "Routine & Schedule", desc: "Maintaining daily structure", icon: "routine" },
      { title: "Home Safety", desc: "& Fall Prevention", icon: "safety" },
      { title: "Errands & Transit", desc: "Appointments and shopping", icon: "transit" },
      { title: "Companionship", desc: "& Emotional Support", icon: "companionship" }
    ]
  },
  conclusion: {
    title: "We Can Help You Understand Your Options",
    description: "Choosing care can feel overwhelming. We're here to answer your questions and help you make the best choice for your loved one.",
    highlights: [
      "Care that respects their independence.",
      "Support that brings your family peace of mind."
    ],
    cta: "Let's talk about your loved one's care needs."
  }
};