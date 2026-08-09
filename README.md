Glorious Home Care Assistance - Project Documentation
Overview
Glorious Home Care Assistance is a comprehensive, conversion-optimized Next.js web platform for a home care agency serving San Jose and Santa Clara County.

Over the course of its development, the site transitioned from a simple 3-page brochure into a fully scalable 34-page web platform (Phase 1 & Phase 2). It is designed to build local SEO authority, provide in-depth resources to families, and generate highly qualified leads.

The codebase relies on a modular "Headless CMS" approach, where UI components remain strictly presentational and all text, services, localized data, and configurations are pulled from centralized TypeScript files.

Technology Stack
Framework: Next.js 16.2.6 (App Router)

Library: React 19.2.4

Language: TypeScript 5

Styling: Tailwind CSS 4

Animations: Framer Motion 12.40.0

Linting: ESLint 9 with eslint-config-next

Repository Layout
Plaintext
public/
  glorious-home-care-logo.png
src/
  app/
    favicon.ico
    globals.css
    layout.tsx
    page.tsx                              # Home
    about/page.tsx                        # About Us
    home-care-faq/page.tsx                # FAQ
    referral-partners/page.tsx            # Healthcare Professionals
    request-care/page.tsx                 # Lead Generation Form
    
    # Hub Pages
    services/page.tsx                     # Services Hub
    locations/page.tsx                    # Areas We Serve Hub
    resources/page.tsx                    # Resources & Guides Hub
    
    # Dynamic Routes (Phase 2)
    services/[service]/page.tsx           # Generates 9 distinct service pages
    locations/[city]/page.tsx             # Generates 6 localized city pages
    resources/[article]/page.tsx          # Generates 10 guide/article pages
    
  components/
    Container.tsx
    DetailCard.tsx
    FaqAccordion.tsx                      # Interactive Framer Motion accordion
    Footer.tsx
    Navbar.tsx                            # Fully responsive with mobile drawer
    Reveal.tsx
    SectionHeading.tsx
    ServiceCard.tsx
    TestimonialCard.tsx
  data/
    global.ts                             # Nav, Footer, Contact Info
    home.ts                               # Homepage specific copy
    about.ts                              # Brand story, Vision, Mission
    services.ts                           # Core service descriptions & slugs
    locations.ts                          # Service areas (San Jose, etc.) & slugs
    resources.ts                          # Articles and guide categories & slugs
    faqs.ts                               # Q&A data
    referrals.ts                          # B2B healthcare partner copy
    request-care.ts                       # Form dropdown options & intro
Application Structure
1. Shared App Shell (src/app/layout.tsx)
The root layout provides the common frame for every page. It loads the Manrope font, applies global metadata, and wraps the content between the globally shared Navbar and Footer.

2. Phase 1: The Core Routes & Hubs
The application features 8 highly targeted static routes:

Home (/): A rich landing page combining service previews, the care process, "Why Choose Us" features, and client testimonials.

About (/about): Features the agency's deeply personal founding story, Vision, Mission, and "The GHCA Difference."

Services Hub (/services): A comprehensive grid outlining Companion Care, Personal Care Assistance, Respite Care, and more, alongside granular task lists.

Locations Hub (/locations): Outlines the primary service areas (San Jose, Santa Clara, Sunnyvale, Cupertino, Milpitas, Campbell) to build local SEO relevance.

Resources Hub (/resources): A content library categorized into Home Care Guides, Family Caregiver Guides, and Hospital-to-Home transition articles.

FAQ (/home-care-faq): An interactive, categorized list of 15 industry-standard questions regarding care, costs, insurance, and caregivers.

Referral Partners (/referral-partners): A B2B page aimed at hospital discharge planners, social workers, and physicians to facilitate rapid patient transitions.

Request Care (/request-care): The primary conversion page featuring a comprehensive lead-generation form and direct contact information.

3. Phase 2: Dynamic Routing & SSG
To scale the site to 34 pages without duplicating code, Next.js Dynamic Routes ([slug]) were implemented.

By utilizing Next.js's generateStaticParams, the application maps through the arrays in the data/ folder at build time to statically generate:

9 Service Detail Pages (e.g., /services/dementia-care)

6 Localized City Pages (e.g., /locations/san-jose)

10 Resource Articles (e.g., /resources/family-caregiver-burnout using a flatMap helper to traverse nested categories)

Additionally, generateMetadata is used on these dynamic routes to automatically inject highly targeted, page-specific SEO titles and descriptions.

Component Documentation
Layout & UI Wrappers
Navbar.tsx: A highly interactive, client-side header. Features scroll-detection for a sticky blurred background. It includes a fully responsive mobile state with a slide-out drawer, scroll-locking (overflow="hidden"), and an auto-closing backdrop triggered by state.

Footer.tsx: A global footer displaying licensing info, contact details, and route links.

Container.tsx: Standardizes maximum width and horizontal padding (max-w-7xl).

Reveal.tsx: A reusable Framer Motion wrapper that fades and slides elements into the viewport on scroll.

SectionHeading.tsx: Standardized typography for section titles and subtitles.

Interactive & Display Components
FaqAccordion.tsx: A client-side component using framer-motion's <AnimatePresence> to smoothly expand/collapse FAQ answers and rotate a toggle icon.

DetailCard.tsx / ServiceCard.tsx: Presentation components for rendering grouped service data.

TestimonialCard.tsx: Renders client quotes with an optional SVG heart icon.

Content Architecture (The "Headless CMS")
To ensure the site is highly scalable and easy to maintain, all visible text, arrays, and configuration options were extracted from a single monolithic file and split into modular TypeScript files inside src/data/.

global.ts: The single source of truth for the agency's contact info (Phone: 408-332-5843) and the 8 main navigation links.

Topic-Specific Data: Files like home.ts, services.ts, and locations.ts export structured JSON objects and arrays containing slug properties. If a service needs to be added or a typo fixed, the developer only needs to update the corresponding .ts data file—the UI components and dynamic routes will automatically map and render the updates.

Styling System
The styling layer uses Tailwind CSS 4 with custom theme tokens defined in src/app/globals.css.

Brand Palette: Exposed via @theme inline, the site utilizes a warm, professional palette consisting of --brand-red (#ff3131), --brand-red-dark, --brand-gold (#ebb35e), --brand-cream (#fff2e8), and dark ink tones for text.

Visual Direction: The design language relies on soft cream backgrounds alternating with stark white surfaces, pill-shaped call-to-action buttons, rounded cards, custom SVG icons, and red-to-gold gradient hero banners.

Getting Started
To run this project locally:

Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser.

Next Steps (Phase 3 Recommendations)
With the Phase 1 static hubs and Phase 2 dynamic routes complete, future development can focus on:

Form Backend Integration: Connect the /request-care HTML form to an API route (e.g., Resend, SendGrid, or a simple Nodemailer setup) to capture leads.

Analytics: Implement Google Analytics or Vercel Web Analytics to track user flow from the localized city pages to the Request Care page.

CMS Integration (Optional): If the client wishes to write their own blog posts in the future without touching the codebase, the data/ folder can easily be swapped out for API calls to a headless CMS like Sanity or Contentful.