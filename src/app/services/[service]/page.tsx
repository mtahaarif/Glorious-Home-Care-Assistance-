import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

import { contactInfo, homeCallouts } from "@/data/global";
import { mainServices, sharedServiceContent } from "@/data/services";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

type ServiceItem = {
  title: string;
  icon: string;
};

type IconProps = {
  className?: string;
};

/* -------------------------------------------------------------------------- */
/* HEART ICON                                                                 */
/* -------------------------------------------------------------------------- */

const HeartIcon = ({ className = "h-10 w-10" }: IconProps) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/* BENTO ITEM ICONS                                                           */
/* */
/* Every icon below corresponds to the UNIQUE icon identifier used in         */
/* src/data/services.ts.                                                      */
/* -------------------------------------------------------------------------- */

const ServiceItemIcon = ({
  icon,
  className = "h-6 w-6",
}: {
  icon: string;
  className?: string;
}) => {
  const commonProps = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    /* ---------------------------------------------------------------------- */
    /* PERSONAL CARE                                                          */
    /* ---------------------------------------------------------------------- */

    case "bath-shower":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12v4a4 4 0 004 4h6a4 4 0 004-4v-4" />
          <path d="M6 9V5a3 3 0 016 0v4" />
          <path d="M9 5h3" />
          <path d="M7 20v1M17 20v1" />
        </svg>
      );

    case "dressing-grooming":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="6" r="3" />
          <path d="M6 21a6 6 0 0112 0" />
          <path d="M8 14h8" />
          <path d="M16 3l3 3" />
          <path d="M19 3l-3 3" />
        </svg>
      );

    case "personal-dignity":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="6" r="3" />
          <path d="M6 21a6 6 0 0112 0" />
          <path d="M9 13h6" />
          <path d="M8 17h8" />
        </svg>
      );

    case "toileting-hygiene":
      return (
        <svg {...commonProps}>
          <path d="M6 5h8a3 3 0 013 3v2H7v5a4 4 0 004 4h4a3 3 0 003-3" />
          <path d="M7 10h10" />
          <path d="M5 19h12" />
          <path d="M9 5V3h5v2" />
        </svg>
      );

    case "personal-transfer":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="5" r="2" />
          <path d="M8 8v5l4 3" />
          <path d="M8 10l5 2 3-3" />
          <path d="M12 16l-3 5" />
          <path d="M12 16l5 5" />
        </svg>
      );

    case "feeding-assistance":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12a7 7 0 0014 0" />
          <path d="M12 12V5" />
          <path d="M10 5h4" />
          <path d="M7 20h10" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* COMPANION CARE                                                         */
    /* ---------------------------------------------------------------------- */

    case "friendly-conversation":
      return (
        <svg {...commonProps}>
          <path d="M4 6a4 4 0 014-4h8a4 4 0 014 4v5a4 4 0 01-4 4H9l-5 4v-4a4 4 0 01-0-2V6z" />
          <path d="M8 8h.01M12 8h.01M16 8h.01" />
        </svg>
      );

    case "emotional-support":
      return (
        <svg {...commonProps}>
          <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 019.5 6c1.1 0 2.1.4 2.5 1.2C12.4 6.4 13.4 6 14.5 6A4.5 4.5 0 0119 10.5C19 16.5 12 21 12 21z" />
          <path d="M9 11h6" />
          <path d="M12 8v6" />
        </svg>
      );

    case "meal-companionship":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="7" r="2.5" />
          <circle cx="16" cy="7" r="2.5" />
          <path d="M4 18a4 4 0 018 0" />
          <path d="M12 18a4 4 0 018 0" />
          <path d="M8 12h8" />
        </svg>
      );

    case "companion-routine":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
          <path d="M5 4l-2-1M19 4l2-1" />
        </svg>
      );

    case "activities-hobbies":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="8" r="4" />
          <path d="M12 12l7 7" />
          <path d="M15 8h5M17.5 5.5v5" />
        </svg>
      );

    case "loneliness-support":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M3 19a5 5 0 0110 0" />
          <path d="M11 19a5 5 0 0110 0" />
        </svg>
      );

    case "meaningful-interaction":
      return (
        <svg {...commonProps}>
          <path d="M4 5h16v11H8l-4 4V5z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* DEMENTIA CARE                                                          */
    /* ---------------------------------------------------------------------- */

    case "cognitive-stimulation":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M8 12h2l1.5-4 2 8 1.5-4H16" />
        </svg>
      );

    case "wandering-prevention":
      return (
        <svg {...commonProps}>
          <path d="M5 20V5h14v15" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
          <circle cx="17" cy="17" r="3" />
          <path d="M17 15.5v1.8l1 1" />
        </svg>
      );

    case "familiar-routines":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
          <path d="M7 3l-2 2M17 3l2 2" />
        </svg>
      );

    case "anxiety-calming":
      return (
        <svg {...commonProps}>
          <path d="M5 12c2-5 5-7 7-7s5 2 7 7c-2 5-5 7-7 7s-5-2-7-7z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      );

    case "dementia-medication":
      return (
        <svg {...commonProps}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h3" />
          <path d="M16 17l1.5 1.5L20 16" />
        </svg>
      );

    case "dementia-hygiene":
      return (
        <svg {...commonProps}>
          <path d="M8 3h8" />
          <path d="M9 3v5a3 3 0 00-2 3v7a3 3 0 003 3h4a3 3 0 003-3v-7a3 3 0 00-2-3V3" />
          <path d="M9 13h6" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* RESPITE CARE                                                           */
    /* ---------------------------------------------------------------------- */

    case "caregiver-relief":
      return (
        <svg {...commonProps}>
          <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 019.5 6c1.1 0 2.1.4 2.5 1.2C12.4 6.4 13.4 6 14.5 6A4.5 4.5 0 0119 10.5C19 16.5 12 21 12 21z" />
          <path d="M12 10v4M10 12h4" />
        </svg>
      );

    case "respite-companionship":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="7" r="3" />
          <circle cx="16" cy="7" r="3" />
          <path d="M3 20a5 5 0 0110 0" />
          <path d="M11 20a5 5 0 0110 0" />
        </svg>
      );

    case "respite-personal-care":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="6" r="3" />
          <path d="M6 21a6 6 0 0112 0" />
          <path d="M8 14h8" />
        </svg>
      );

    case "respite-meal-support":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12a7 7 0 0014 0" />
          <path d="M12 4v8" />
          <path d="M9 4h6" />
        </svg>
      );

    case "flexible-hourly-care":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
          <path d="M5 4l-2-1M19 4l2-1" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* POST-HOSPITAL CARE                                                     */
    /* ---------------------------------------------------------------------- */

    case "discharge-plan":
      return (
        <svg {...commonProps}>
          <path d="M5 3h14v18H5z" />
          <path d="M8 7h8M8 11h8M8 15h5" />
          <path d="M15 17l1.5 1.5L20 15" />
        </svg>
      );

    case "hospital-mobility":
      return (
        <svg {...commonProps}>
          <path d="M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
          <path d="M3 21h18" />
          <path d="M9 9h6M12 6v6" />
          <path d="M8 16h2M14 16h2" />
        </svg>
      );

    case "recovery-medication":
      return (
        <svg {...commonProps}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h3" />
          <path d="M16 17l1.5 1.5L20 16" />
        </svg>
      );

    case "recovery-hygiene":
      return (
        <svg {...commonProps}>
          <path d="M7 4h10" />
          <path d="M8 4v5a4 4 0 008 0V4" />
          <path d="M6 20h12" />
          <path d="M9 20v-4h6v4" />
        </svg>
      );

    case "recovery-nutrition":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12a7 7 0 0014 0" />
          <path d="M9 4v3M12 4v3M15 4v3" />
        </svg>
      );

    case "followup-transport":
      return (
        <svg {...commonProps}>
          <path d="M5 16l1.5-7h11L19 16" />
          <path d="M4 16h16v4H4z" />
          <circle cx="7.5" cy="18" r="1" />
          <circle cx="16.5" cy="18" r="1" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* 24-HOUR CARE                                                           */
    /* ---------------------------------------------------------------------- */

    case "continuous-monitoring":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M7 12h2l1.5-3 2 6 1.5-3H17" />
        </svg>
      );

    case "overnight-care":
      return (
        <svg {...commonProps}>
          <path d="M18 4a7 7 0 11-8 13 7 7 0 008-13z" />
          <path d="M8 18h10" />
          <path d="M6 21h14" />
        </svg>
      );

    case "24hr-fall-prevention":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 8v5l4 3" />
          <path d="M12 10l-4 3" />
          <path d="M16 16l-2 5" />
          <path d="M16 16l4 4" />
        </svg>
      );

    case "24hr-hygiene":
      return (
        <svg {...commonProps}>
          <path d="M8 3h8" />
          <path d="M9 3v5a3 3 0 00-2 3v7a3 3 0 003 3h4a3 3 0 003-3v-7a3 3 0 00-2-3V3" />
          <path d="M9 13h6" />
        </svg>
      );

    case "emergency-readiness":
      return (
        <svg {...commonProps}>
          <path d="M12 3l9 17H3L12 3z" />
          <path d="M12 9v5" />
          <circle cx="12" cy="17" r=".5" fill="currentColor" />
        </svg>
      );

    case "uninterrupted-peace":
      return (
        <svg {...commonProps}>
          <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 019.5 6c1.1 0 2.1.4 2.5 1.2C12.4 6.4 13.4 6 14.5 6A4.5 4.5 0 0119 10.5C19 16.5 12 21 12 21z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* MEDICATION REMINDERS                                                   */
    /* ---------------------------------------------------------------------- */

    case "timely-medication":
      return (
        <svg {...commonProps}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 7h6M9 11h6" />
          <circle cx="11" cy="16" r="1.5" />
          <path d="M14 16h2" />
        </svg>
      );

    case "medication-routine":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
        </svg>
      );

    case "hydration-reminder":
      return (
        <svg {...commonProps}>
          <path d="M12 3s5 5.5 5 10a5 5 0 01-10 0c0-4.5 5-10 5-10z" />
          <path d="M9 14a3 3 0 003 3" />
        </svg>
      );

    case "mealtime-reminder":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12a7 7 0 0014 0" />
          <path d="M8 5v4M12 5v4M16 5v4" />
        </svg>
      );

    case "family-updates":
      return (
        <svg {...commonProps}>
          <path d="M4 5h16v12H8l-4 4V5z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* MEAL PREPARATION                                                       */
    /* ---------------------------------------------------------------------- */

    case "meal-planning":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 2v4M16 2v4M4 9h16" />
          <path d="M8 13h3M13 13h3M8 16h3" />
        </svg>
      );

    case "fresh-meal-prep":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12a7 7 0 0014 0" />
          <path d="M9 4v4M12 4v4M15 4v4" />
          <path d="M8 20h8" />
        </svg>
      );

    case "meal-grocery":
      return (
        <svg {...commonProps}>
          <path d="M5 7h14l-1 13H6L5 7z" />
          <path d="M9 7a3 3 0 016 0" />
          <path d="M9 11v5M15 11v5" />
        </svg>
      );

    case "meal-hydration":
      return (
        <svg {...commonProps}>
          <path d="M9 3h6" />
          <path d="M10 3v4l-2 3v8a3 3 0 003 3h2a3 3 0 003-3v-8l-2-3V3" />
          <path d="M8 13h8" />
        </svg>
      );

    case "kitchen-cleanup":
      return (
        <svg {...commonProps}>
          <path d="M5 20h14" />
          <path d="M8 20l1-12h6l1 12" />
          <path d="M10 8V5h4v3" />
          <path d="M12 5V2" />
          <path d="M7 12h10" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* LIGHT HOUSEKEEPING                                                     */
    /* ---------------------------------------------------------------------- */

    case "laundry-folding":
      return (
        <svg {...commonProps}>
          <path d="M4 6h16v14H4z" />
          <path d="M8 6V3h8v3" />
          <path d="M8 12l4 3 4-3" />
        </svg>
      );

    case "dishwashing":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12a7 7 0 0014 0" />
          <path d="M8 6c0-2 2-2 2-4M12 6c0-2 2-2 2-4" />
        </svg>
      );

    case "tidying":
      return (
        <svg {...commonProps}>
          <path d="M4 20h16" />
          <path d="M6 20V8h12v12" />
          <path d="M9 8V5h6v3" />
          <path d="M9 12h6M9 16h6" />
        </svg>
      );

    case "trash-removal":
      return (
        <svg {...commonProps}>
          <path d="M6 7h12l-1 14H7L6 7z" />
          <path d="M4 7h16" />
          <path d="M9 7V4h6v3" />
          <path d="M10 11v6M14 11v6" />
        </svg>
      );

    case "bed-linens":
      return (
        <svg {...commonProps}>
          <path d="M4 18v-7a3 3 0 013-3h10a3 3 0 013 3v7" />
          <path d="M4 15h16" />
          <path d="M7 11h4" />
          <path d="M4 18h16" />
        </svg>
      );

    case "plant-care":
      return (
        <svg {...commonProps}>
          <path d="M8 12h8v7a2 2 0 01-2 2h-4a2 2 0 01-2-2v-7z" />
          <path d="M12 12V5" />
          <path d="M12 7c-4 0-5-3-5-3s4-1 5 3z" />
          <path d="M12 9c4 0 5-3 5-3s-4-1-5 3z" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* MOBILITY                                                               */
    /* ---------------------------------------------------------------------- */

    case "bed-chair-transfer":
      return (
        <svg {...commonProps}>
          <path d="M4 18h16" />
          <path d="M6 18v-6h7a4 4 0 014 4v2" />
          <circle cx="8" cy="7" r="2" />
          <path d="M8 9v4l4 2" />
        </svg>
      );

    case "walking-support":
      return (
        <svg {...commonProps}>
          <circle cx="10" cy="5" r="2" />
          <path d="M10 8v5l-3 4" />
          <path d="M10 10l4 2 3-4" />
          <path d="M10 13l4 6" />
        </svg>
      );

    case "walker-wheelchair":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="17" r="3" />
          <circle cx="17" cy="18" r="2" />
          <path d="M8 14V7h6l3 7" />
          <path d="M8 7l-2-3M14 7h4" />
        </svg>
      );

    case "fall-hazard":
      return (
        <svg {...commonProps}>
          <path d="M12 3l9 17H3L12 3z" />
          <path d="M9 14l3-3 3 3" />
          <path d="M12 11v4" />
        </svg>
      );

    case "posture-positioning":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 8v5l-3 3" />
          <path d="M12 10l4 2" />
          <path d="M9 16l-2 4M9 16l5 4" />
        </svg>
      );

    case "exercise-encouragement":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 8v5" />
          <path d="M12 10l-5 3M12 10l5 3" />
          <path d="M12 13l-3 6M12 13l3 6" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* TRANSPORTATION                                                         */
    /* ---------------------------------------------------------------------- */

    case "doctor-appointment":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 2v4M16 2v4M4 9h16" />
          <path d="M12 12v5M9.5 14.5h5" />
        </svg>
      );

    case "personal-outings":
      return (
        <svg {...commonProps}>
          <path d="M4 6h16v14H4z" />
          <path d="M8 6V3h8v3" />
          <path d="M8 13h8M12 9v8" />
        </svg>
      );

    case "pharmacy-visit":
      return (
        <svg {...commonProps}>
          <path d="M5 4h14v16H5z" />
          <path d="M8 8h8M12 6v4" />
          <path d="M8 14h8" />
        </svg>
      );

    case "family-social":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="7" r="3" />
          <circle cx="16" cy="7" r="3" />
          <path d="M3 20a5 5 0 0110 0" />
          <path d="M11 20a5 5 0 0110 0" />
        </svg>
      );

    case "grocery-shopping":
      return (
        <svg {...commonProps}>
          <path d="M5 7h14l-1 13H6L5 7z" />
          <path d="M9 7a3 3 0 016 0" />
          <circle cx="9" cy="17" r="1" />
          <circle cx="15" cy="17" r="1" />
        </svg>
      );

    case "door-to-door":
      return (
        <svg {...commonProps}>
          <path d="M4 21h16" />
          <path d="M6 21V5h9v16" />
          <path d="M15 9h3v12" />
          <path d="M11 13h.01" />
          <path d="M15 13h3" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* SHORT-TERM CARE                                                        */
    /* ---------------------------------------------------------------------- */

    case "post-surgery":
      return (
        <svg {...commonProps}>
          <path d="M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
          <path d="M3 21h18" />
          <path d="M9 9h6M12 6v6" />
        </svg>
      );

    case "temporary-respite":
      return (
        <svg {...commonProps}>
          <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 019.5 6c1.1 0 2.1.4 2.5 1.2C12.4 6.4 13.4 6 14.5 6A4.5 4.5 0 0119 10.5C19 16.5 12 21 12 21z" />
          <path d="M12 10v4M10 12h4" />
        </svg>
      );

    case "transitional-care":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M14 6l6 6-6 6" />
          <path d="M10 6l-6 6 6 6" />
        </svg>
      );

    case "short-term-daily-care":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
          <path d="M7 4l-2-1M17 4l2-1" />
        </svg>
      );

    case "short-term-housekeeping":
      return (
        <svg {...commonProps}>
          <path d="M5 20h14" />
          <path d="M8 20l1-12h6l1 12" />
          <path d="M10 8V5h4v3" />
          <path d="M12 5V2" />
        </svg>
      );

    case "flexible-scheduling":
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
          <path d="M9 14h6M12 12v5" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* LONG-TERM CARE                                                         */
    /* ---------------------------------------------------------------------- */

    case "chronic-condition":
      return (
        <svg {...commonProps}>
          <path d="M4 12h3l2-5 3 10 2-5h6" />
        </svg>
      );

    case "caregiver-matching":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="7" r="3" />
          <circle cx="16" cy="7" r="3" />
          <path d="M3 20a5 5 0 0110 0" />
          <path d="M11 20a5 5 0 0110 0" />
          <path d="M10 12h4" />
        </svg>
      );

    case "longterm-hygiene":
      return (
        <svg {...commonProps}>
          <path d="M8 3h8" />
          <path d="M9 3v5a3 3 0 00-2 3v7a3 3 0 003 3h4a3 3 0 003-3v-7a3 3 0 00-2-3V3" />
          <path d="M9 13h6" />
        </svg>
      );

    case "longterm-meals":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12a7 7 0 0014 0" />
          <path d="M9 4v4M12 4v4M15 4v4" />
        </svg>
      );

    case "health-monitoring":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M6 12h3l1.5-3 2 6 1.5-3H18" />
        </svg>
      );

    case "longterm-companionship":
      return (
        <svg {...commonProps}>
          <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 019.5 6c1.1 0 2.1.4 2.5 1.2C12.4 6.4 13.4 6 14.5 6A4.5 4.5 0 0119 10.5C19 16.5 12 21 12 21z" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* CUSTOMIZED CARE PLANS                                                  */
    /* ---------------------------------------------------------------------- */

    case "initial-assessment":
      return (
        <svg {...commonProps}>
          <path d="M5 3h14v18H5z" />
          <path d="M8 7h8M8 11h8M8 15h5" />
          <circle cx="17" cy="17" r="3" />
          <path d="M19 19l2 2" />
        </svg>
      );

    case "custom-scheduling":
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
          <circle cx="12" cy="15" r="2" />
          <path d="M12 13v2l1 1" />
        </svg>
      );

    case "personality-matching":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="7" r="3" />
          <circle cx="16" cy="7" r="3" />
          <path d="M3 20a5 5 0 0110 0" />
          <path d="M11 20a5 5 0 0110 0" />
          <path d="M10 12l2 2 2-2" />
        </svg>
      );

    case "dietary-planning":
      return (
        <svg {...commonProps}>
          <path d="M4 12h16" />
          <path d="M5 12a7 7 0 0014 0" />
          <path d="M8 5v4M12 5v4M16 5v4" />
          <path d="M8 20h8" />
        </svg>
      );

    case "condition-routines":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
          <path d="M7 4l-2-1M17 4l2-1" />
        </svg>
      );

    case "adjustable-care":
      return (
        <svg {...commonProps}>
          <path d="M4 5h16M4 12h16M4 19h16" />
          <circle cx="9" cy="5" r="2" fill="currentColor" stroke="none" />
          <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
          <circle cx="11" cy="19" r="2" fill="currentColor" stroke="none" />
        </svg>
      );

    /* ---------------------------------------------------------------------- */
    /* FALLBACK                                                              */
    /* ---------------------------------------------------------------------- */

    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
};

/* -------------------------------------------------------------------------- */
/* STATIC PARAMS                                                              */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return mainServices.map((service) => ({
    service: service.slug,
  }));
}

/* -------------------------------------------------------------------------- */
/* METADATA                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  const currentService = mainServices.find(
    (service) => service.slug === resolvedParams.service,
  );

  if (!currentService) {
    return {
      title: "Service Not Found | Glorious Home Care",
      description: "The requested service could not be found.",
    };
  }

  // Optimize title to remain under ~60 characters (580 pixels) for better SEO score
  const dynamicTitle = currentService.pageData?.seoTitle || `${currentService.title} in San Jose & Bay Area | Glorious Home Care`;
  const optimizedTitle = dynamicTitle.length > 60 ? dynamicTitle.substring(0, 57) + "..." : dynamicTitle;

  return {
    title: optimizedTitle,
    description: `Looking for ${currentService.title.toLowerCase()}? Glorious Home Care provides compassionate at home senior care in San Jose and the Bay Area. ` + currentService.description.slice(0, 80).trimEnd() + "...",
  };
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const resolvedParams = await params;

  const currentService = mainServices.find(
    (service) => service.slug === resolvedParams.service,
  );

  if (!currentService?.pageData) {
    notFound();
  }

  const { title, description, pageData, bannerImage } = currentService;

  const marqueeItems = [
    ...pageData.featureBar,
    ...pageData.featureBar,
    ...pageData.featureBar,
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO                                                            */}
      {/* ------------------------------------------------------------------ */}
      
      <section className="relative overflow-hidden bg-background min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={bannerImage}
            alt={`${title} Services in San Jose & The Bay Area`}
            fill 
            className="object-cover object-right"
            sizes="100vw"
            priority
          />
          
          {/* Smooth Left-to-Right White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 pointer-events-none" />
        </div>
        
        <Container className="relative z-20 w-full">
          <div className="max-w-xl space-y-4">
            <Reveal delay={0.05}>
              {/* SEO Fix: Longer, keyword-rich H1 that includes location (over 20 chars) */}
              <h1 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl drop-shadow-sm">
                Trusted {title} in San Jose & The Bay Area
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-brand-ink/80 sm:text-lg font-medium max-w-lg">
                {description}
              </p>
            </Reveal>
            
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href={contactInfo.phoneHref}
                  aria-label={`Call us to discuss ${title}`}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
                >
                  {homeCallouts.callToAction}
                </Link>
                <Link
                  href="/request-care"
                  aria-label={`Request ${title} Services`}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-brand-ink/20 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-bold tracking-wide text-brand-ink transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Request Care Today
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. INTRODUCTION                                                    */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-background pb-10 pt-16 md:pb-14 md:pt-24">
        <Container className="max-w-4xl text-center">
          <Reveal className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-brand-red-dark">
                {pageData.heading1.line1}
              </span>

              <span className="block text-brand-red">
                {pageData.heading1.line2}
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-brand-red sm:text-xl">
              {pageData.description1}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. SERVICE FEATURES / BENTO                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-background pb-16 md:pb-24">
        <Container className="max-w-6xl">
          <Reveal>
            <div className="grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
              {pageData.bentoBox.items.map(
                (item: ServiceItem, index: number, array: ServiceItem[]) => {
                  const totalItems = array.length;

                  const rowIndex = Math.floor(index / 3);
                  const rowType = rowIndex % 3;

                  const itemsInThisRow = Math.min(
                    3,
                    totalItems - rowIndex * 3,
                  );

                  const positionInRow = index % 3;

                  let isBig = false;
                  let colSpanClass = "col-span-1";

                  if (itemsInThisRow === 3) {
                    if (
                      (rowType === 0 && positionInRow === 0) ||
                      (rowType === 1 && positionInRow === 1) ||
                      (rowType === 2 && positionInRow === 2)
                    ) {
                      isBig = true;
                    }

                    colSpanClass = isBig
                      ? "col-span-2"
                      : "col-span-1";
                  } else if (itemsInThisRow === 2) {
                    isBig =
                      rowType === 0
                        ? positionInRow === 0
                        : positionInRow === 1;

                    colSpanClass = isBig
                      ? "col-span-2 md:col-span-3"
                      : "col-span-2 md:col-span-1";
                  } else {
                    isBig = true;
                    colSpanClass = "col-span-2 md:col-span-4";
                  }

                  return (
                    <div
                      key={`${item.icon}-${index}`}
                      className={`
                        group relative flex cursor-default flex-col justify-between
                        overflow-hidden rounded-2xl transition-all duration-500
                        ease-out backdrop-blur-xl md:rounded-3xl
                        md:backdrop-blur-2xl
                        hover:-translate-y-1 hover:scale-[1.015]
                        md:hover:-translate-y-2
                        ${colSpanClass}
                        ${
                          isBig
                            ? `
                              min-h-[170px] bg-brand-red/90 p-5
                              shadow-[0_8px_32px_rgb(255,49,49,0.25)]
                              ring-1 ring-inset ring-white/10
                              hover:bg-brand-red
                              hover:shadow-[0_16px_48px_rgb(255,49,49,0.4)]
                              sm:p-6 md:min-h-[210px] md:p-8
                            `
                            : `
                              min-h-[145px] bg-brand-gold/70 p-4
                              shadow-[0_8px_32px_rgb(235,179,94,0.15)]
                              ring-1 ring-inset ring-white/40
                              hover:bg-brand-gold/50
                              hover:shadow-[0_16px_48px_rgb(235,179,94,0.25)]
                              sm:p-5 md:min-h-[210px] md:p-8
                            `
                        }
                      `}
                    >
                      {/* Glass glare */}
                      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent mix-blend-overlay" />

                      {/* Decorative glow */}
                      <div
                        className={`
                          pointer-events-none absolute -right-10 -top-10
                          h-32 w-32 rounded-full blur-3xl transition-opacity
                          duration-500 group-hover:opacity-100
                          ${
                            isBig
                              ? "bg-white/20 opacity-50"
                              : "bg-white/40 opacity-40"
                          }
                        `}
                      />

                      {/* Icon */}
                      <div className="relative z-10 mb-5 flex items-center justify-between md:mb-8">
                        {isBig ? (
                          <div className="rounded-full border border-white/20 bg-white/10 p-2.5 shadow-inner backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 md:p-3.5">
                            <ServiceItemIcon
                              icon={item.icon}
                              className="h-6 w-6 text-white sm:h-8 sm:w-8"
                            />
                          </div>
                        ) : (
                          <div className="rounded-full border border-white/60 bg-white/50 p-2.5 shadow-[0_4px_15px_rgb(255,49,49,0.1)] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/70 md:p-3.5">
                            <ServiceItemIcon
                              icon={item.icon}
                              className="h-5 w-5 text-brand-red sm:h-6 sm:w-6"
                            />
                          </div>
                        )}
                      </div>

                      {/* Item title */}
                      <h3
                        className={`
                          relative z-10 max-w-3xl font-bold leading-snug
                          drop-shadow-sm transition-colors duration-300
                          ${
                            isBig
                              ? "text-lg text-white group-hover:text-white/80 sm:text-xl md:text-2xl"
                              : "text-sm text-brand-red-dark group-hover:text-brand-red sm:text-base md:text-xl"
                          }
                        `}
                      >
                        {item.title}
                      </h3>
                    </div>
                  );
                },
              )}
            </div>

            {pageData.bentoBox.disclaimer && (
              <p className="mx-auto mt-8 max-w-2xl text-center text-xs font-medium italic leading-relaxed text-muted md:mt-12 md:text-sm">
                * {pageData.bentoBox.disclaimer}
              </p>
            )}
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. VALUE / MARQUEE                                                 */}
      {/* ------------------------------------------------------------------ */}

      <section className="overflow-hidden border-y border-brand-gold/20 bg-white py-16 md:py-24">
        <Container className="max-w-4xl text-center">
          <Reveal className="space-y-5">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-brand-red sm:text-4xl lg:text-5xl">
              {pageData.heading2.line1}
            </h2>

            <p className="mx-auto max-w-3xl text-xl font-semibold leading-relaxed text-brand-red-dark sm:text-2xl">
              {pageData.heading2.line2}
            </p>
          </Reveal>
        </Container>

        {/* Marquee heading */}
        <Container>
          <Reveal className="mb-12 mt-16 text-center md:mb-20 md:mt-20">
            {/* SEO Fix: Used a div instead of an h3 to avoid duplicated/diluted heading structure */}
            <div className="text-xl font-bold uppercase tracking-[0.15em] text-brand-ink/50 sm:text-2xl md:text-3xl">
              {sharedServiceContent.areaHeading.replace(/\n/g, " ")}
            </div>
          </Reveal>
        </Container>

        {/* Marquee */}
        <div className="group relative flex w-full overflow-hidden py-4">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent sm:w-40 md:w-56" />

          {/* Track 1 */}
          <div className="flex shrink-0 animate-service-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused] sm:gap-12 sm:pr-12">
            {marqueeItems.map((feature, index) => (
              <div
                key={`track-one-${feature}-${index}`}
                className="flex shrink-0 cursor-default items-center gap-8 transition-transform duration-500 hover:scale-105 sm:gap-10"
              >
                <HeartIcon className="h-7 w-7 shrink-0 text-brand-red sm:h-9 sm:w-9 md:h-10 md:w-10" />

                <span className="whitespace-nowrap text-3xl font-black uppercase tracking-tight text-brand-ink transition-colors duration-500 hover:text-brand-red-dark sm:text-4xl md:text-6xl lg:text-7xl">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Track 2 */}
          <div
            className="flex shrink-0 animate-service-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused] sm:gap-12 sm:pr-12"
            aria-hidden="true"
          >
            {marqueeItems.map((feature, index) => (
              <div
                key={`track-two-${feature}-${index}`}
                className="flex shrink-0 cursor-default items-center gap-8 transition-transform duration-500 hover:scale-105 sm:gap-10"
              >
                <HeartIcon className="h-7 w-7 shrink-0 text-brand-red sm:h-9 sm:w-9 md:h-10 md:w-10" />

                <span className="whitespace-nowrap text-3xl font-black uppercase tracking-tight text-brand-ink transition-colors duration-500 hover:text-brand-red-dark sm:text-4xl md:text-6xl lg:text-7xl">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent sm:w-40 md:w-56" />
        </div>

        {/* Marquee animation */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes service-marquee {
                from {
                  transform: translateX(0);
                }

                to {
                  transform: translateX(-100%);
                }
              }

              .animate-service-marquee {
                animation: service-marquee 55s linear infinite;
              }

              @media (prefers-reduced-motion: reduce) {
                .animate-service-marquee {
                  animation-play-state: paused;
                }
              }
            `,
          }}
        />
      </section>

      {/* 5. SEO & AREAS WE SERVE SECTION */}
      <section className="bg-surface py-20 border-t border-brand-gold/10">
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <span className="block text-sm font-bold uppercase tracking-widest text-brand-red mb-3">
                Local Care You Can Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mb-6">
                Premier Home Care in the Bay Area
              </h2>
              <p className="max-w-4xl mx-auto text-lg text-muted leading-relaxed">
                Finding the right support for a loved one is crucial. If you're searching for <strong>home care near me</strong>, Glorious Home Care Assistance is dedicated to providing compassionate, top-tier <strong>senior care at home</strong>. Our trained caregivers specialize in comprehensive <strong>personal care San Jose</strong> families can rely on, ensuring safety, dignity, and peace of mind. We are proud to be a leading provider of <strong>in-home care San Jose</strong> residents trust, offering tailored plans for <strong>at home senior care</strong>.
              </p>
            </div>
          </Reveal>

          <div className="mb-12">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-extrabold text-brand-ink text-center mb-8">
                Communities We Proudly Serve
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center">
              {[
                { city: "San Jose", term: "home care in San Jose", slug: "san-jose" },
                { city: "San Mateo", term: "home care in San Mateo", slug: "san-mateo" },
                { city: "Palo Alto", term: "home care in Palo Alto", slug: "palo-alto" },
                { city: "San Francisco", term: "home care in San Francisco", slug: "san-francisco" },
                { city: "Milpitas", term: "home care in Milpitas", slug: "milpitas" },
                { city: "Los Gatos", term: "home care in Los Gatos", slug: "los-gatos" },
                { city: "Santa Rosa", term: "home care in Santa Rosa", slug: "santa-rosa" },
                { city: "Santa Clara", term: "home care in Santa Clara", slug: "santa-clara" },
                { city: "Pleasanton", term: "home care in Pleasanton", slug: "pleasanton" },
                { city: "Mountain View", term: "home care in Mountain View", slug: "mountain-view" }
              ].map((loc, idx) => (
                <Reveal key={loc.city} delay={idx * 0.05}>
                  <Link href={`/locations/${loc.slug}`} className="block rounded-2xl border border-brand-cream bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold hover:shadow-md">
                    <span className="font-bold text-brand-ink block text-sm mb-1">{loc.city}</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted block">{loc.term}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-white p-8 border border-brand-cream shadow-sm text-center max-w-4xl mx-auto">
              <p className="text-muted leading-relaxed">
                Our mission is to elevate the standard of <strong>Home care in Bay area</strong> communities. Whether your family requires temporary respite care, daily assistance with activities of daily living, or specialized 24/7 care, our team is equipped to deliver. Experience the difference of premium <strong>at home senior care</strong> designed to keep your loved ones thriving in the comfort of their own home.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. BOTTOM CTA                                                      */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-brand-red-dark py-14 text-center text-white md:py-20">
        <Container className="max-w-3xl">
          <Reveal className="space-y-6">
            {/* SEO Fix: Changed h2 to div here since we added a semantic h2 in the section above */}
            <div className="whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {sharedServiceContent.bottomCta.message}
            </div>

            <div className="flex flex-col items-center gap-4 pt-2">
              <p className="whitespace-pre-line text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                {sharedServiceContent.bottomCta.action}
              </p>

              <Link
                href={contactInfo.phoneHref}
                aria-label={`Contact us for ${title}`}
                className="inline-block rounded-full bg-brand-gold px-10 py-4 text-xl font-black text-brand-red-dark shadow-xl transition-all hover:scale-105 hover:bg-white sm:px-12 sm:py-5 sm:text-2xl"
              >
                {sharedServiceContent.bottomCta.phone}
              </Link>

              <a
                href={`mailto:${sharedServiceContent.bottomCta.email.replace(
                  /^\[|\]\(mailto:.*\)$/g,
                  "",
                )}`}
                className="mt-2 font-medium text-white/80 transition hover:text-white"
              >
                {sharedServiceContent.bottomCta.email.replace(
                  /^\[|\]\(mailto:.*\)$/g,
                  "",
                )}
              </a>
            </div>

            <div className="mx-auto mt-12 max-w-lg border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-sm">
                {sharedServiceContent.bottomCta.tagline}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}