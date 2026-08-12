"use client";

type ServiceItemIconProps = {
  name: string;
  className?: string;
};

export default function ServiceItemIcon({
  name,
  className = "h-6 w-6",
}: ServiceItemIconProps) {
  const common = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    // ─────────────────────────────
    // PERSONAL CARE
    // ─────────────────────────────

    case "shower":
      return (
        <svg {...common}>
          <path d="M4 10h16" />
          <path d="M6 10v7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-7" />
          <path d="M8 7a4 4 0 0 1 8 0v3" />
          <path d="M12 4v3" />
          <path d="M9 13v.01M12 15v.01M15 13v.01" />
        </svg>
      );

    case "grooming":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
          <path d="M10.5 10.5L20 20" />
          <path d="M14 14l3-3" />
          <path d="M5 19c1.5-3 5.5-4 8-1" />
        </svg>
      );

    case "care":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      );

    case "hygiene":
      return (
        <svg {...common}>
          <path d="M8 4h8" />
          <path d="M9 4v4h6V4" />
          <path d="M7 8h10v10H7z" />
          <path d="M10 12h4M10 15h4" />
        </svg>
      );

    case "transfer":
      return (
        <svg {...common}>
          <circle cx="8" cy="5" r="2" />
          <path d="M8 7v6l-3 5" />
          <path d="M8 10l4 3 4-2" />
          <path d="M16 8v6" />
          <path d="M14 12l2 2 2-2" />
        </svg>
      );

    case "feeding":
      return (
        <svg {...common}>
          <path d="M5 8h14v8H5z" />
          <path d="M8 8V5M12 8V4M16 8V5" />
          <path d="M8 16v3M16 16v3" />
        </svg>
      );

    // ─────────────────────────────
    // COMPANION CARE
    // ─────────────────────────────

    case "conversation":
      return (
        <svg {...common}>
          <path d="M5 6h14v9H9l-4 4V6Z" />
          <path d="M9 10h6M9 13h4" />
        </svg>
      );

    case "emotional-support":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
        </svg>
      );

    case "meal-companion":
      return (
        <svg {...common}>
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="3" />
          <path d="M11 12h2" />
          <path d="M8 9V6M16 9V6" />
        </svg>
      );

    case "daily-routine":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
          <path d="M8 3l-2 2M16 3l2 2" />
        </svg>
      );

    case "hobby":
      return (
        <svg {...common}>
          <path d="M5 19c2-5 4-8 7-8s5 3 7 8" />
          <circle cx="12" cy="7" r="3" />
        </svg>
      );

    case "social":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
          <path d="M15 15c3 0 5 1.5 6 4" />
        </svg>
      );

    case "peace":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4-7-10V5l7-2 7 2v6c0 6-7 10-7 10Z" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    // ─────────────────────────────
    // ALZHEIMER'S & DEMENTIA
    // ─────────────────────────────

    case "brain":
      return (
        <svg {...common}>
          <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 3 3v2a3 3 0 0 0 3 3h2V5a3 3 0 0 0-3-1Z" />
          <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-3 3v2a3 3 0 0 1-3 3h-2V5a3 3 0 0 1 3-1Z" />
          <path d="M9 8h3M12 12h3M8 15h4" />
        </svg>
      );

    case "wandering":
      return (
        <svg {...common}>
          <path d="M5 19c4-8 5-12 14-14" />
          <path d="m15 5 4-1-1 4" />
          <circle cx="6" cy="18" r="2" />
        </svg>
      );

    case "routine":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v5l3 2" />
        </svg>
      );

    case "calm":
      return (
        <svg {...common}>
          <path d="M5 15c2-2 4-2 7 0s5 2 7 0" />
          <path d="M5 19c2-2 4-2 7 0s5 2 7 0" />
          <path d="M12 5v5" />
          <path d="m9 7 3-3 3 3" />
        </svg>
      );

    case "medication":
    case "pill":
      return (
        <svg {...common}>
          <path d="M7 17 17 7a4 4 0 0 1 6 6L13 23a4 4 0 0 1-6-6Z" />
          <path d="m10 14 4 4" />
        </svg>
      );

    case "personal-hygiene":
      return (
        <svg {...common}>
          <path d="M6 18h12" />
          <path d="M8 18v-5a4 4 0 0 1 8 0v5" />
          <circle cx="12" cy="7" r="3" />
        </svg>
      );

    // ─────────────────────────────
    // GENERAL / REMAINING ICONS
    // ─────────────────────────────

    case "relief":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 6-7 10-7 10Z" />
          <path d="M8 12h8" />
        </svg>
      );

    case "supervision":
    case "monitoring":
    case "health-monitoring":
      return (
        <svg {...common}>
          <path d="M4 12h3l2-5 3 10 2-5h6" />
        </svg>
      );

    case "personal-care":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M6 20c0-4 2.5-7 6-7s6 3 6 7" />
        </svg>
      );

    case "meal-support":
    case "meal-time":
      return (
        <svg {...common}>
          <path d="M5 11h14v7H5z" />
          <path d="M8 11V7M12 11V5M16 11V7" />
        </svg>
      );

    case "flexible":
    case "adapt":
      return (
        <svg {...common}>
          <path d="M5 7h14M5 12h10M5 17h14" />
          <circle cx="15" cy="7" r="2" />
          <circle cx="11" cy="12" r="2" />
          <circle cx="8" cy="17" r="2" />
        </svg>
      );

    case "discharge":
      return (
        <svg {...common}>
          <path d="M7 3h10v18H7z" />
          <path d="M10 12h8" />
          <path d="m15 9 3 3-3 3" />
        </svg>
      );

    case "mobility":
    case "walking":
      return (
        <svg {...common}>
          <circle cx="13" cy="5" r="2" />
          <path d="m12 7-2 5 4 3 2 5" />
          <path d="m10 12-4 3" />
        </svg>
      );

    case "hydration":
    case "water":
      return (
        <svg {...common}>
          <path d="M12 3s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10Z" />
        </svg>
      );

    case "follow-up":
    case "doctor":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M6 21c0-4 2.5-7 6-7s6 3 6 7" />
          <path d="M18 5h4M20 3v4" />
        </svg>
      );

    case "overnight":
      return (
        <svg {...common}>
          <path d="M17 4a7 7 0 1 0 3 13A8 8 0 1 1 17 4Z" />
          <path d="M6 5v3M4.5 6.5h3" />
        </svg>
      );

    case "fall-prevention":
    case "fall-hazard":
      return (
        <svg {...common}>
          <path d="M12 3 3 20h18L12 3Z" />
          <path d="M12 9v5M12 17v.01" />
        </svg>
      );

    case "round-the-clock":
    case "schedule":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v5l3 2" />
        </svg>
      );

    case "emergency":
      return (
        <svg {...common}>
          <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );

    case "family-peace":
    case "family-update":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2" />
          <path d="M3 20c0-4 2.5-6 6-6s6 2 6 6" />
          <path d="M15 16c3 0 5 1.5 6 4" />
        </svg>
      );

    case "meal-plan":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );

    case "cooking":
      return (
        <svg {...common}>
          <path d="M5 12h14v7H5z" />
          <path d="M8 12V8M12 12V6M16 12V8" />
        </svg>
      );

    case "groceries":
    case "shopping":
      return (
        <svg {...common}>
          <path d="M5 7h14l-1 12H6L5 7Z" />
          <path d="M9 7a3 3 0 0 1 6 0" />
          <path d="M9 12h6" />
        </svg>
      );

    case "kitchen":
    case "dishes":
      return (
        <svg {...common}>
          <circle cx="12" cy="13" r="6" />
          <path d="M5 7h14M8 4v3M12 4v3M16 4v3" />
        </svg>
      );

    case "laundry":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <circle cx="12" cy="13" r="4" />
          <path d="M8 7h.01M11 7h.01" />
        </svg>
      );

    case "tidying":
      return (
        <svg {...common}>
          <path d="M5 19h14" />
          <path d="M8 19V8h8v11" />
          <path d="M6 8h12M10 5h4" />
        </svg>
      );

    case "trash":
      return (
        <svg {...common}>
          <path d="M5 7h14M10 4h4M7 7l1 13h8l1-13" />
          <path d="M10 11v5M14 11v5" />
        </svg>
      );

    case "bed":
      return (
        <svg {...common}>
          <path d="M4 18v-7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7" />
          <path d="M4 14h16M7 18v2M17 18v2" />
        </svg>
      );

    case "plants":
      return (
        <svg {...common}>
          <path d="M9 20h6" />
          <path d="M12 20V9" />
          <path d="M12 12c-4 0-6-2-6-5 4 0 6 2 6 5Z" />
          <path d="M12 9c0-3 2-5 6-5 0 3-2 5-6 5Z" />
        </svg>
      );

    case "bed-transfer":
      return (
        <svg {...common}>
          <path d="M4 15h16M4 15V9h5v6M9 11h7a4 4 0 0 1 4 4" />
          <path d="M6 15v4M18 15v4" />
        </svg>
      );

    case "walker":
      return (
        <svg {...common}>
          <path d="M6 5v13M18 5v13M6 8h12M6 18h12" />
          <circle cx="6" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
      );

    case "positioning":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v6M12 10l-4 3M12 10l4 3M12 13l-3 6M12 13l3 6" />
        </svg>
      );

    case "exercise":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v5l4 3M12 10l-4 3M9 20l3-8M15 20l-3-5" />
        </svg>
      );

    case "errands":
      return (
        <svg {...common}>
          <path d="M5 8h14l-1 11H6L5 8Z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
        </svg>
      );

    case "pharmacy":
      return (
        <svg {...common}>
          <path d="M7 17 17 7a4 4 0 0 1 6 6L13 23a4 4 0 0 1-6-6Z" />
          <path d="M11 10h4M13 8v4" />
        </svg>
      );

    case "family-visit":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M3 20c0-3 2-5 5-5s5 2 5 5" />
          <path d="M11 20c0-3 2-5 5-5s5 2 5 5" />
        </svg>
      );

    case "door-to-door":
      return (
        <svg {...common}>
          <path d="M5 20V5l14-2v17" />
          <path d="M9 20v-8h6v8M12 15h.01" />
          <path d="M3 20h18" />
        </svg>
      );

    case "recovery":
      return (
        <svg {...common}>
          <path d="M5 12a7 7 0 1 0 2-5" />
          <path d="M5 5v5h5" />
        </svg>
      );

    case "transition":
      return (
        <svg {...common}>
          <path d="M4 8h14" />
          <path d="m14 4 4 4-4 4" />
          <path d="M20 16H6" />
          <path d="m10 12-4 4 4 4" />
        </svg>
      );

    case "short-term-meal":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v5l3 2" />
          <path d="M8 4v3M16 4v3" />
        </svg>
      );

    case "housekeeping":
      return (
        <svg {...common}>
          <path d="M6 20h12" />
          <path d="M9 20V8h6v12" />
          <path d="M7 8h10" />
          <path d="M10 5h4" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
          <path d="M8 14h.01M12 14h.01M16 14h.01" />
        </svg>
      );

    case "chronic-care":
      return (
        <svg {...common}>
          <path d="M4 12h4l2-5 3 10 2-5h5" />
        </svg>
      );

    case "caregiver-match":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M3 19c0-3 2-5 5-5s5 2 5 5" />
          <path d="M11 19c0-3 2-5 5-5s5 2 5 5" />
        </svg>
      );

    case "ongoing-meals":
      return (
        <svg {...common}>
          <path d="M5 11h14v8H5z" />
          <path d="M8 11V7M12 11V5M16 11V7" />
        </svg>
      );

    case "companionship":
      return (
        <svg {...common}>
          <path d="M4 6h16v10H8l-4 4V6Z" />
          <path d="M8 10h8M8 13h5" />
        </svg>
      );

    case "assessment":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h3" />
          <path d="m14 16 2 2 3-4" />
        </svg>
      );

    case "diet":
      return (
        <svg {...common}>
          <path d="M12 20c-5-2-7-6-5-11 5 0 8 3 8 8" />
          <path d="M12 20c0-6 3-10 7-12" />
        </svg>
      );

    case "condition":
      return (
        <svg {...common}>
          <path d="M4 12h4l2-5 3 10 2-5h5" />
          <circle cx="19" cy="7" r="3" />
          <path d="M19 5v4M17 7h4" />
        </svg>
      );

    case "schedule":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
          <path d="M8 14h8" />
        </svg>
      );

    case "family":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M6 21c0-4 2.5-7 6-7s6 3 6 7" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
  }
}