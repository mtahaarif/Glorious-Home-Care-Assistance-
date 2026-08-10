// src/data/services.ts

export const servicesHero = {
  title: "Our Services",
  subtitle: "Compassionate Care You Can Trust",
  bannerImage: "/services.jpg", // Add your main page banner image here
};

export const servicesIntro = {
  title: "Supporting Independence at Home",
  paragraphs: [
    "Our caregivers provide dependable support and companionship when family members cannot be present, giving families peace of mind knowing their loved one is safe, supported, and cared for at home.",
    "Whether for short visits or 24-hour care, our trained aides assist with daily activities, light housekeeping, emotional support, and companionship to help seniors and adults remain comfortable and independent in their own homes.",
    "Our professional caregivers are available 24 hours a day, 7 days a week, and can provide care at home, in the hospital, or in other care facilities whenever support is needed."
  ]
};

export const sharedServiceContent = {
  areaHeading: "Serving Seniors Across\nSan Jose & the Bay Area",
  bottomCta: {
    message: "Let us bring comfort,\nconnection, and care\ninto your loved one's day.",
    action: "Call Today for a \nFree In-Home Assessment",
    phone: "408-332-5843",
    email: "admin@glorioushomecareca.com",
    tagline: "Compassionate Care in the Comfort of Home"
  }
};

// Primary array containing Data, Banner Images, and Custom Icon Images
export const mainServices = [
  {
    title: "Companion Care",
    slug: "companion-care",
    description: "Provides meaningful social interaction and emotional support for individuals who may feel isolated or lonely. Our caregivers engage clients through conversation, activities, hobbies, and companionship.",
    bannerImage: "/companion-care.jpg",
    iconImage: "/images/icons/companion-care.png",
    pageData: {
      seoTitle: "Companion Care Services | Glorious Home Care Assistance",
      heading1: { line1: "No Senior", line2: "Should Feel Alone" },
      description1: "Companion care that brings comfort, connection, and meaningful support right at home.",
      bentoBox: {
        title: "Companion Care Services",
        items: [
          "Friendly conversation and social engagement",
          "Emotional support and companionship",
          "Meal companionship",
          "Daily routine assistance",
          "Light activities and hobbies",
          "Help reduce loneliness and isolation",
          "Meaningful interaction and peace of mind"
        ]
      },
      heading2: {
        line1: "Compassionate companion care",
        line2: "that helps seniors stay socially connected, emotionally supported, and comfortable in the place they call home."
      },
      featureBar: ["Compassionate Caregivers", "Personalized Care Plans", "Family Peace of Mind", "Available 24/7"]
    }
  },
  {
    title: "Personal Care Assistance",
    slug: "personal-care",
    description: "We help clients maintain their dignity, comfort, and independence with daily living activities. Support may include assistance with bathing, grooming, dressing, mobility, and personal hygiene.",
    bannerImage: "/personal-care.jpg",
    iconImage: "/images/icons/personal-care.png",
    pageData: {
      seoTitle: "Personal Care Assistance | Glorious Home Care Assistance",
      heading1: { line1: "Assistance with", line2: "Daily Living Activities" },
      description1: "Personal care that helps seniors stay safe, comfortable, and independent at home.",
      bentoBox: {
        title: "Personal Care Services",
        items: [
          "Bathing & shower assistance",
          "Dressing & grooming",
          "Respectful personal care",
          "Toileting & hygiene support",
          "Mobility & transfer support",
          "Meal reminders & feeding assistance"
        ]
      },
      heading2: {
        line1: "Respectful personal care",
        line2: "that supports dignity, comfort, and independence at home."
      },
      featureBar: ["Compassionate Caregivers", "Personalized Care Plans", "Family Peace of Mind", "Available 24/7"]
    }
  },
    {
    title: "Meal Preparation",
    slug: "meal-preparation",
    description: "We assist with meal planning and preparation to help clients enjoy nutritious, balanced meals that align with their preferences and dietary needs.",
    bannerImage: "/meal-prep.jpg",
    iconImage: "/images/icons/meal-prep.png",
    pageData: {
      seoTitle: "Meal Preparation Services | Glorious Home Care Assistance",
      heading1: { line1: "Meal Preparation", line2: "with Care & Compassion" },
      description1: "Fresh, nourishing meals that help seniors stay safe, comfortable, and independent at home.",
      bentoBox: {
        title: "Meal Preparation Services",
        items: [
          "Meal planning",
          "Fresh meal preparation",
          "Grocery assistance",
          "Hydration reminders",
          "Light kitchen clean-up"
        ]
      },
      heading2: {
        line1: "More than a meal",
        line2: "comfort, nutrition & daily support"
      },
      featureBar: ["Compassionate Caregivers", "Personalized Care Plans", "Family Peace of Mind", "Available 24/7"]
    }
  },
    {
    title: "Medication Reminders",
    slug: "medication-reminders",
    description: "Our caregivers provide friendly medication reminders to help clients stay on schedule with prescribed medications. We help support consistency and adherence to established care plans.",
    bannerImage: "/medication.jpg",
    iconImage: "/medication.png",
    pageData: {
      seoTitle: "Medication Reminders | Glorious Home Care Assistance",
      heading1: { line1: "Medication Reminders", line2: "with Care & Compassion" },
      description1: "Gentle reminder support to help seniors stay on track with daily routines at home.",
      bentoBox: {
        title: "Medication Reminder Support",
        items: [
          "Timely medication reminders",
          "Routine support",
          "Hydration reminders",
          "Mealtime reminders",
          "Family updates when needed"
        ],
        disclaimer: "Reminder support only - caregivers do not administer or manage medications."
      },
      heading2: {
        line1: "Helping seniors",
        line2: "stay safe, on track, and independent at home."
      },
      featureBar: ["Compassionate Caregivers", "Personalized Care Plans", "Family Peace of Mind", "Available 24/7"]
    }
  },
  {
    title: "Light Housekeeping",
    slug: "light-housekeeping",
    description: "A clean and organized home contributes to safety, comfort, and overall well-being. Our Light Housekeeping services include assistance with routine household tasks.",
    bannerImage: "/housekeeping.jpg",
    iconImage: "/images/icons/housekeeping.png",
    pageData: {
      seoTitle: "Light Housekeeping Services | Glorious Home Care Assistance",
      heading1: { line1: "A Clean & Comfortable", line2: "Home Environment" },
      description1: "Light housekeeping support that helps seniors stay safe, organized, and relaxed at home.",
      bentoBox: {
        title: "Light Housekeeping Services",
        items: [
          "Laundry and folding",
          "Washing dishes & kitchen cleanup",
          "Tidying living spaces",
          "Taking out the trash",
          "Changing bed linens",
          "Watering plants"
        ]
      },
      heading2: {
        line1: "A safe, organized home",
        line2: "contributes to overall well-being, comfort, and peace of mind."
      },
      featureBar: ["Compassionate Caregivers", "Safe Daily Routines", "Family Peace of Mind", "Available 24/7"]
    }
  },
  {
    title: "Transportation Services",
    slug: "transportation",
    description: "We provide safe and reliable transportation to medical appointments, errands, social engagements, and community activities. Our goal is to help clients remain active and engaged.",
    bannerImage: "/transportation.jpg",
    iconImage: "/images/icons/transportation.png",
    pageData: {
      seoTitle: "Transportation Assistance | Glorious Home Care Assistance",
      heading1: { line1: "Transportation", line2: "Assistance" },
      description1: "Helping seniors get to appointments, errands, and daily activities safely with trusted caregiver support.",
      bentoBox: {
        title: "Transportation Assistance",
        items: [
          "Doctor's appointments",
          "Errands & personal outings",
          "Pharmacy visits",
          "Family visits & social activities",
          "Grocery shopping",
          "Door-to-door caregiver support"
        ]
      },
      heading2: {
        line1: "More than a ride",
        line2: "Glorious Home Care Assistance helps seniors stay active, connected, and independent with safe transportation assistance and compassionate caregiver support."
      },
      featureBar: ["Caregiver Support", "Safe Daily Routines", "Family Peace of Mind", "Available 24/7"]
    }
  },
  {
    title: "Respite Care",
    slug: "respite-care",
    description: "Respite Care offers temporary relief for family caregivers who need time to rest, attend to personal responsibilities, or simply recharge. Families can have peace of mind.",
    bannerImage: "/respite-care.jpg",
    iconImage: "/images/icons/respite-care.png",
    pageData: {
      seoTitle: "Respite Care Services | Glorious Home Care Assistance",
      heading1: { line1: "Care for Your Loved One,", line2: "Relief for You." },
      description1: "Respite care that gives family caregivers time to rest while their loved one receives compassionate support at home.",
      bentoBox: {
        title: "Respite Care Support",
        items: [
          "Short-term caregiver relief",
          "Companion care & supervision",
          "Personal care assistance",
          "Meal support & reminders",
          "Flexible hourly care"
        ],
        disclaimer: "You don't have to do it all alone."
      },
      heading2: {
        line1: "What is Respite Care?",
        line2: "Respite care provides temporary in-home support so family caregivers can rest, recharge, and manage daily responsibilities."
      },
      featureBar: ["Flexible Care Options", "Compassionate Caregivers", "Family Peace of Mind", "Available 24/7"]
    }
  },


];

export const serviceHighlights = mainServices;

export const companionCareServices = {
  title: "Companion Care Services",
  intro: "Your caregiver will not provide hands-on care for the client, but will provide companionship, offer encouragement, and perform light housekeeping tasks, including, but not limited to:",
  items: [
    "Taking the client to appointments",
    "Running errands such as grocery shopping",
    "Activities such as taking walks, playing games, and reading",
    "Meal preparation",
    "Washing dishes",
    "Laundry and ironing",
    "Light housekeeping",
    "Changing bedding",
    "Watering plants",
    "Taking care of pets",
    "Dementia care and specialized cognitive support",
  ],
};

export const aideServices = {
  title: "Aide Services",
  intro: "Our aide attendants can serve the same functions as a companion, but also may provide hands-on care of the client. Duties may include:",
  items: [
    "Bathing, hair washing, and shaving",
    "Dressing assistance",
    "Medication reminders",
    "Assistance with toileting",
    "Other personal care needs",
    "Mobility assistance and fall prevention",
    "Overnight care and active monitoring",
  ],
};