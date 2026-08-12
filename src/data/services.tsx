// src/data/services.ts

export const servicesHero = {
  title: "Our Services",
  subtitle: "Compassionate Care You Can Trust",
  bannerImage: "/services.jpg",
};

export const servicesIntro = {
  title: "Supporting Independence at Home",
  paragraphs: [
    "Our caregivers provide dependable support and companionship when family members cannot be present, giving families peace of mind knowing their loved one is safe, supported, and cared for at home.",
    "Whether for short visits or 24-hour care, our trained aides assist with daily activities, light housekeeping, emotional support, and companionship to help seniors and adults remain comfortable and independent in their own homes.",
    "Our professional caregivers are available 24 hours a day, 7 days a week, and can provide care at home, in the hospital, or in other care facilities whenever support is needed.",
  ],
};

export const sharedServiceContent = {
  areaHeading: "Serving Seniors Across\nSan Jose & the Bay Area",

  bottomCta: {
    message: "Let us bring comfort,\nconnection, and care\ninto your loved one's day.",
    action: "Call Today for a \nFree In-Home Assessment",
    phone: "408-332-5843",
    email: "admin@glorioushomecareca.com",
    tagline: "Compassionate Care in the Comfort of Home",
  },
};

/* -------------------------------------------------------------------------- */
/* Service Item Helper                                                        */
/* -------------------------------------------------------------------------- */
/*
 * Every service item contains:
 *
 * title -> text displayed on the page
 * icon  -> unique identifier used by the service page to render an SVG icon
 *
 * IMPORTANT:
 * The icon identifiers are intentionally unique for every item across all
 * 14 services.
 */

const serviceItem = (title: string, icon: string) => ({
  title,
  icon,
});

/* -------------------------------------------------------------------------- */
/* Main Services                                                              */
/* -------------------------------------------------------------------------- */

export const mainServices = [
  /* ------------------------------------------------------------------------ */
  /* 1. Personal Care Assistance                                             */
  /* ------------------------------------------------------------------------ */
  {
    title: "Personal Care Assistance",
    slug: "personal-care",

    description:
      "We help clients maintain their dignity, comfort, and independence with daily living activities. Support may include assistance with bathing, grooming, dressing, mobility, and personal hygiene.",

    bannerImage: "/personal-care.jpg",
    iconImage: "/personal-care.png",

    pageData: {
      seoTitle:
        "Personal Care Assistance | Glorious Home Care Assistance",

      heading1: {
        line1: "Assistance with",
        line2: "Daily Living Activities",
      },

      description1:
        "Personal care that helps seniors stay safe, comfortable, and independent at home.",

      bentoBox: {
        title: "Personal Care Services",

        items: [
          serviceItem(
            "Bathing & shower assistance",
            "bath-shower"
          ),

          serviceItem(
            "Dressing & grooming",
            "dressing-grooming"
          ),

          serviceItem(
            "Respectful personal care",
            "personal-dignity"
          ),

          serviceItem(
            "Toileting & hygiene support",
            "toileting-hygiene"
          ),

          serviceItem(
            "Mobility & transfer support",
            "personal-transfer"
          ),

          serviceItem(
            "Meal reminders & feeding assistance",
            "feeding-assistance"
          ),
        ],
      },

      heading2: {
        line1: "Respectful personal care",
        line2:
          "that supports dignity, comfort, and independence at home.",
      },

      featureBar: [
        "Compassionate Caregivers",
        "Personalized Care Plans",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 2. Companion Care                                                        */
  /* ------------------------------------------------------------------------ */
  {
    title: "Companion Care",
    slug: "companion-care",

    description:
      "Provides meaningful social interaction and emotional support for individuals who may feel isolated or lonely. Our caregivers engage clients through conversation, activities, hobbies, and companionship.",

    bannerImage: "/companion-care.jpg",
    iconImage: "/companion-care.png",

    pageData: {
      seoTitle:
        "Companion Care Services | Glorious Home Care Assistance",

      heading1: {
        line1: "No Senior",
        line2: "Should Feel Alone",
      },

      description1:
        "Companion care that brings comfort, connection, and meaningful support right at home.",

      bentoBox: {
        title: "Companion Care Services",

        items: [
          serviceItem(
            "Friendly conversation and social engagement",
            "friendly-conversation"
          ),

          serviceItem(
            "Emotional support and companionship",
            "emotional-support"
          ),

          serviceItem(
            "Meal companionship",
            "meal-companionship"
          ),

          serviceItem(
            "Daily routine assistance",
            "companion-routine"
          ),

          serviceItem(
            "Light activities and hobbies",
            "activities-hobbies"
          ),

          serviceItem(
            "Help reduce loneliness and isolation",
            "loneliness-support"
          ),

          serviceItem(
            "Meaningful interaction and peace of mind",
            "meaningful-interaction"
          ),
        ],
      },

      heading2: {
        line1: "Compassionate companion care",
        line2:
          "that helps seniors stay socially connected, emotionally supported, and comfortable in the place they call home.",
      },

      featureBar: [
        "Compassionate Caregivers",
        "Personalized Care Plans",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 3. Alzheimer's & Dementia Care                                           */
  /* ------------------------------------------------------------------------ */
  {
    title: "Alzheimer’s & Dementia Care",
    slug: "alzheimers-dementia-care",

    description:
      "Specialized, compassionate care focusing on safety, memory stimulation, and maintaining a comforting routine for seniors navigating cognitive decline.",

    bannerImage: "/dementia-care.jpg",
    iconImage: "/dementia-care.png",

    pageData: {
      seoTitle:
        "Alzheimer's & Dementia Care | Glorious Home Care Assistance",

      heading1: {
        line1: "Specialized Memory",
        line2: "Care Support",
      },

      description1:
        "Compassionate, patient care designed to keep seniors with dementia safe, calm, and engaged at home.",

      bentoBox: {
        title: "Dementia Care Support",

        items: [
          serviceItem(
            "Cognitive stimulation activities",
            "cognitive-stimulation"
          ),

          serviceItem(
            "Wandering prevention & monitoring",
            "wandering-prevention"
          ),

          serviceItem(
            "Establishing familiar routines",
            "familiar-routines"
          ),

          serviceItem(
            "De-escalation of confusion or anxiety",
            "anxiety-calming"
          ),

          serviceItem(
            "Medication reminders",
            "dementia-medication"
          ),

          serviceItem(
            "Personal hygiene assistance",
            "dementia-hygiene"
          ),
        ],

        disclaimer:
          "Specialized care delivered with endless patience and respect.",
      },

      heading2: {
        line1: "Expert memory care",
        line2:
          "designed to provide families with peace of mind while preserving dignity and comfort.",
      },

      featureBar: [
        "Trained Memory Aides",
        "Safe Home Environment",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 4. Respite Care                                                          */
  /* ------------------------------------------------------------------------ */
  {
    title: "Respite Care",
    slug: "respite-care",

    description:
      "Respite Care offers temporary relief for family caregivers who need time to rest, attend to personal responsibilities, or simply recharge. Families can have peace of mind.",

    bannerImage: "/respite-care.jpg",
    iconImage: "/respite-care.png",

    pageData: {
      seoTitle:
        "Respite Care Services | Glorious Home Care Assistance",

      heading1: {
        line1: "Care for Your Loved One,",
        line2: "Relief for You.",
      },

      description1:
        "Respite care that gives family caregivers time to rest while their loved one receives compassionate support at home.",

      bentoBox: {
        title: "Respite Care Support",

        items: [
          serviceItem(
            "Short-term caregiver relief",
            "caregiver-relief"
          ),

          serviceItem(
            "Companion care & supervision",
            "respite-companionship"
          ),

          serviceItem(
            "Personal care assistance",
            "respite-personal-care"
          ),

          serviceItem(
            "Meal support & reminders",
            "respite-meal-support"
          ),

          serviceItem(
            "Flexible hourly care",
            "flexible-hourly-care"
          ),
        ],

        disclaimer:
          "You don't have to do it all alone.",
      },

      heading2: {
        line1: "What is Respite Care?",
        line2:
          "Respite care provides temporary in-home support so family caregivers can rest, recharge, and manage daily responsibilities.",
      },

      featureBar: [
        "Flexible Care Options",
        "Compassionate Caregivers",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 5. Post-Hospital Care                                                    */
  /* ------------------------------------------------------------------------ */
  {
    title: "Post-Hospital Care",
    slug: "post-hospital-care",

    description:
      "Transitional support after a hospital stay or surgery to ensure a safe recovery, prevent falls, and dramatically reduce the risk of readmission.",

    bannerImage: "/post-hospital-care.jpg",
    iconImage: "/post-hospital-care.png",

    pageData: {
      seoTitle:
        "Post-Hospital Recovery Care | Glorious Home Care Assistance",

      heading1: {
        line1: "Safe Recovery",
        line2: "After a Hospital Stay",
      },

      description1:
        "Transitional home care designed to promote healing and prevent hospital readmissions.",

      bentoBox: {
        title: "Post-Hospital Services",

        items: [
          serviceItem(
            "Discharge plan adherence",
            "discharge-plan"
          ),

          serviceItem(
            "Mobility and transfer assistance",
            "hospital-mobility"
          ),

          serviceItem(
            "Medication reminders",
            "recovery-medication"
          ),

          serviceItem(
            "Personal hygiene and bathing",
            "recovery-hygiene"
          ),

          serviceItem(
            "Meal preparation & hydration",
            "recovery-nutrition"
          ),

          serviceItem(
            "Transportation to follow-up visits",
            "followup-transport"
          ),
        ],
      },

      heading2: {
        line1: "A safe transition home",
        line2:
          "ensuring rest, recovery, and strict adherence to doctor instructions.",
      },

      featureBar: [
        "Reduced Readmissions",
        "Expert Care Coordination",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 6. 24-Hour Care                                                          */
  /* ------------------------------------------------------------------------ */
  {
    title: "24-Hour Care",
    slug: "24-hour-care",

    description:
      "Around-the-clock monitoring and assistance for seniors who require continuous support, supervision, and peace of mind for their safety.",

    bannerImage: "/24-hour-care.jpg",
    iconImage: "/24-hour-care.png",

    pageData: {
      seoTitle:
        "24-Hour Home Care Services | Glorious Home Care Assistance",

      heading1: {
        line1: "Round-the-Clock",
        line2: "Care & Supervision",
      },

      description1:
        "Continuous, 24/7 in-home support for seniors who need constant monitoring and assistance.",

      bentoBox: {
        title: "24-Hour Care Support",

        items: [
          serviceItem(
            "Continuous safety monitoring",
            "continuous-monitoring"
          ),

          serviceItem(
            "Overnight awake care",
            "overnight-care"
          ),

          serviceItem(
            "Fall and wandering prevention",
            "24hr-fall-prevention"
          ),

          serviceItem(
            "Round-the-clock personal hygiene",
            "24hr-hygiene"
          ),

          serviceItem(
            "Immediate emergency response readiness",
            "emergency-readiness"
          ),

          serviceItem(
            "Uninterrupted family peace of mind",
            "uninterrupted-peace"
          ),
        ],
      },

      heading2: {
        line1: "Always there, always awake",
        line2:
          "providing the highest level of comprehensive support directly in the home.",
      },

      featureBar: [
        "Continuous Coverage",
        "Shift-Based Caregivers",
        "Ultimate Safety",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 7. Medication Reminders                                                  */
  /* ------------------------------------------------------------------------ */
  {
    title: "Medication Reminders",
    slug: "medication-reminders",

    description:
      "Our caregivers provide friendly medication reminders to help clients stay on schedule with prescribed medications. We help support consistency and adherence to established care plans.",

    bannerImage: "/medication.jpg",
    iconImage: "/medication.png",

    pageData: {
      seoTitle:
        "Medication Reminders | Glorious Home Care Assistance",

      heading1: {
        line1: "Medication Reminders",
        line2: "with Care & Compassion",
      },

      description1:
        "Gentle reminder support to help seniors stay on track with daily routines at home.",

      bentoBox: {
        title: "Medication Reminder Support",

        items: [
          serviceItem(
            "Timely medication reminders",
            "timely-medication"
          ),

          serviceItem(
            "Routine support",
            "medication-routine"
          ),

          serviceItem(
            "Hydration reminders",
            "hydration-reminder"
          ),

          serviceItem(
            "Mealtime reminders",
            "mealtime-reminder"
          ),

          serviceItem(
            "Family updates when needed",
            "family-updates"
          ),
        ],

        disclaimer:
          "Reminder support only - caregivers do not administer or manage medications.",
      },

      heading2: {
        line1: "Helping seniors",
        line2:
          "stay safe, on track, and independent at home.",
      },

      featureBar: [
        "Compassionate Caregivers",
        "Personalized Care Plans",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 8. Meal Preparation                                                      */
  /* ------------------------------------------------------------------------ */
  {
    title: "Meal Preparation",
    slug: "meal-preparation",

    description:
      "We assist with meal planning and preparation to help clients enjoy nutritious, balanced meals that align with their preferences and dietary needs.",

    bannerImage: "/meal-prep.jpg",
    iconImage: "/meal-prep.png",

    pageData: {
      seoTitle:
        "Meal Preparation Services | Glorious Home Care Assistance",

      heading1: {
        line1: "Meal Preparation",
        line2: "with Care & Compassion",
      },

      description1:
        "Fresh, nourishing meals that help seniors stay safe, comfortable, and independent at home.",

      bentoBox: {
        title: "Meal Preparation Services",

        items: [
          serviceItem(
            "Meal planning",
            "meal-planning"
          ),

          serviceItem(
            "Fresh meal preparation",
            "fresh-meal-prep"
          ),

          serviceItem(
            "Grocery assistance",
            "meal-grocery"
          ),

          serviceItem(
            "Hydration reminders",
            "meal-hydration"
          ),

          serviceItem(
            "Light kitchen clean-up",
            "kitchen-cleanup"
          ),
        ],
      },

      heading2: {
        line1: "More than a meal",
        line2:
          "comfort, nutrition & daily support",
      },

      featureBar: [
        "Compassionate Caregivers",
        "Personalized Care Plans",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 9. Light Housekeeping                                                    */
  /* ------------------------------------------------------------------------ */
  {
    title: "Light Housekeeping",
    slug: "light-housekeeping",

    description:
      "A clean and organized home contributes to safety, comfort, and overall well-being. Our Light Housekeeping services include assistance with routine household tasks.",

    bannerImage: "/housekeeping.jpg",
    iconImage: "/housekeeping.png",

    pageData: {
      seoTitle:
        "Light Housekeeping Services | Glorious Home Care Assistance",

      heading1: {
        line1: "A Clean & Comfortable",
        line2: "Home Environment",
      },

      description1:
        "Light housekeeping support that helps seniors stay safe, organized, and relaxed at home.",

      bentoBox: {
        title: "Light Housekeeping Services",

        items: [
          serviceItem(
            "Laundry and folding",
            "laundry-folding"
          ),

          serviceItem(
            "Washing dishes & kitchen cleanup",
            "dishwashing"
          ),

          serviceItem(
            "Tidying living spaces",
            "tidying"
          ),

          serviceItem(
            "Taking out the trash",
            "trash-removal"
          ),

          serviceItem(
            "Changing bed linens",
            "bed-linens"
          ),

          serviceItem(
            "Watering plants",
            "plant-care"
          ),
        ],
      },

      heading2: {
        line1: "A safe, organized home",
        line2:
          "contributes to overall well-being, comfort, and peace of mind.",
      },

      featureBar: [
        "Compassionate Caregivers",
        "Safe Daily Routines",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 10. Mobility Assistance                                                  */
  /* ------------------------------------------------------------------------ */
  {
    title: "Mobility Assistance",
    slug: "mobility-assistance",

    description:
      "Providing steady physical support for walking, safe transfers, and comprehensive fall prevention inside and outside the home.",

    bannerImage: "/mobility-assistance.jpg",
    iconImage: "/mobility-assistance.png",

    pageData: {
      seoTitle:
        "Mobility Assistance & Fall Prevention | Glorious Home Care Assistance",

      heading1: {
        line1: "Safe Movement",
        line2: "& Fall Prevention",
      },

      description1:
        "Dedicated physical support to help seniors navigate their homes with confidence and safety.",

      bentoBox: {
        title: "Mobility Support Services",

        items: [
          serviceItem(
            "Safe bed-to-chair transfers",
            "bed-chair-transfer"
          ),

          serviceItem(
            "Walking and physical support",
            "walking-support"
          ),

          serviceItem(
            "Wheelchair and walker assistance",
            "walker-wheelchair"
          ),

          serviceItem(
            "Fall hazard identification",
            "fall-hazard"
          ),

          serviceItem(
            "Posture positioning",
            "posture-positioning"
          ),

          serviceItem(
            "Light exercise encouragement",
            "exercise-encouragement"
          ),
        ],
      },

      heading2: {
        line1: "Preventing falls",
        line2:
          "by providing a steady hand, watchful eye, and absolute peace of mind.",
      },

      featureBar: [
        "Physical Support",
        "Fall Prevention",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 11. Transportation & Errands                                             */
  /* ------------------------------------------------------------------------ */
  {
    title: "Transportation & Errands",
    slug: "transportation",

    description:
      "We provide safe and reliable transportation to medical appointments, errands, social engagements, and community activities. Our goal is to help clients remain active and engaged.",

    bannerImage: "/transportation.jpg",
    iconImage: "/transportation.png",

    pageData: {
      seoTitle:
        "Transportation Assistance | Glorious Home Care Assistance",

      heading1: {
        line1: "Transportation",
        line2: "Assistance",
      },

      description1:
        "Helping seniors get to appointments, errands, and daily activities safely with trusted caregiver support.",

      bentoBox: {
        title: "Transportation Assistance",

        items: [
          serviceItem(
            "Doctor's appointments",
            "doctor-appointment"
          ),

          serviceItem(
            "Errands & personal outings",
            "personal-outings"
          ),

          serviceItem(
            "Pharmacy visits",
            "pharmacy-visit"
          ),

          serviceItem(
            "Family visits & social activities",
            "family-social"
          ),

          serviceItem(
            "Grocery shopping",
            "grocery-shopping"
          ),

          serviceItem(
            "Door-to-door caregiver support",
            "door-to-door"
          ),
        ],
      },

      heading2: {
        line1: "More than a ride",
        line2:
          "Glorious Home Care Assistance helps seniors stay active, connected, and independent with safe transportation assistance and compassionate caregiver support.",
      },

      featureBar: [
        "Caregiver Support",
        "Safe Daily Routines",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 12. Short-Term Care                                                      */
  /* ------------------------------------------------------------------------ */
  {
    title: "Short-Term Care",
    slug: "short-term-care",

    description:
      "Flexible, temporary assistance ideal for recovering from an injury, managing a brief illness, or providing care while family members are out of town.",

    bannerImage: "/short-term-care.jpg",
    iconImage: "/short-term-care.png",

    pageData: {
      seoTitle:
        "Short-Term Home Care | Glorious Home Care Assistance",

      heading1: {
        line1: "Temporary Care When",
        line2: "You Need It Most",
      },

      description1:
        "Flexible, short-term home care solutions designed to bridge the gap during recovery or family absence.",

      bentoBox: {
        title: "Short-Term Services",

        items: [
          serviceItem(
            "Post-surgery support",
            "post-surgery"
          ),

          serviceItem(
            "Temporary respite for families",
            "temporary-respite"
          ),

          serviceItem(
            "Transitional assistance",
            "transitional-care"
          ),

          serviceItem(
            "Short-term meal prep & hygiene",
            "short-term-daily-care"
          ),

          serviceItem(
            "Errands and light housekeeping",
            "short-term-housekeeping"
          ),

          serviceItem(
            "Flexible, non-contract scheduling",
            "flexible-scheduling"
          ),
        ],
      },

      heading2: {
        line1: "No long-term commitments",
        line2:
          "just reliable, professional care exactly when your family needs it.",
      },

      featureBar: [
        "Flexible Scheduling",
        "No Long-Term Contracts",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 13. Long-Term Care                                                       */
  /* ------------------------------------------------------------------------ */
  {
    title: "Long-Term Care",
    slug: "long-term-care",

    description:
      "Consistent, ongoing support that allows seniors with chronic conditions, physical limitations, or mobility decline to age gracefully at home.",

    bannerImage: "/long-term-care.jpg",
    iconImage: "/long-term-care.png",

    pageData: {
      seoTitle:
        "Long-Term Home Care | Glorious Home Care Assistance",

      heading1: {
        line1: "Consistent Support",
        line2: "for the Long Journey",
      },

      description1:
        "Ongoing, dedicated home care for seniors navigating chronic conditions and the challenges of aging.",

      bentoBox: {
        title: "Long-Term Care Solutions",

        items: [
          serviceItem(
            "Chronic condition support",
            "chronic-condition"
          ),

          serviceItem(
            "Consistent caregiver matching",
            "caregiver-matching"
          ),

          serviceItem(
            "Daily hygiene and bathing",
            "longterm-hygiene"
          ),

          serviceItem(
            "Ongoing meal preparation",
            "longterm-meals"
          ),

          serviceItem(
            "Continuous health monitoring",
            "health-monitoring"
          ),

          serviceItem(
            "Deep companionship and routine",
            "longterm-companionship"
          ),
        ],
      },

      heading2: {
        line1: "An alternative to assisted living",
        line2:
          "allowing seniors to stay safely in the comfort and familiarity of their own homes for the long term.",
      },

      featureBar: [
        "Consistent Caregivers",
        "Chronic Care Support",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 14. Customized Care Plans                                                */
  /* ------------------------------------------------------------------------ */
  {
    title: "Customized Care Plans",
    slug: "customized-care-plans",

    description:
      "Highly personalized care solutions tailored exactly to your loved one's specific health needs, daily schedule, and unique lifestyle.",

    bannerImage: "/customized-care.jpg",
    iconImage: "/customized-care.png",

    pageData: {
      seoTitle:
        "Customized Care Plans | Glorious Home Care Assistance",

      heading1: {
        line1: "Care Designed",
        line2: "Specifically for You",
      },

      description1:
        "Every senior is unique. We build flexible, hyper-personalized care plans that adapt to your family's exact lifestyle.",

      bentoBox: {
        title: "Custom Care Options",

        items: [
          serviceItem(
            "Detailed initial assessments",
            "initial-assessment"
          ),

          serviceItem(
            "Bespoke scheduling (hourly to 24/7)",
            "custom-scheduling"
          ),

          serviceItem(
            "Caregiver personality matching",
            "personality-matching"
          ),

          serviceItem(
            "Dietary-specific meal planning",
            "dietary-planning"
          ),

          serviceItem(
            "Condition-specific routines",
            "condition-routines"
          ),

          serviceItem(
            "Adjustable care levels over time",
            "adjustable-care"
          ),
        ],
      },

      heading2: {
        line1: "Because one size does not fit all",
        line2:
          "our expert coordinators work closely with you to ensure every specific need and preference is met.",
      },

      featureBar: [
        "Tailored Solutions",
        "Free Assessments",
        "Family Peace of Mind",
        "Available 24/7",
      ],
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Service Highlights                                                         */
/* -------------------------------------------------------------------------- */

export const serviceHighlights = mainServices;

/* -------------------------------------------------------------------------- */
/* Companion Care Services                                                    */
/* -------------------------------------------------------------------------- */

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
    "Laundry and ironing",
    "Light housekeeping",
    "Changing bedding",
    "Watering plants",
    "Taking care of pets",
    "Dementia care and specialized cognitive support",
  ],
};

/* -------------------------------------------------------------------------- */
/* Aide Services                                                              */
/* -------------------------------------------------------------------------- */

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
    "Mobility assistance and fall prevention",
    "Overnight care and active monitoring",
  ],
};