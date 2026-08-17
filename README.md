# Glorious Home Care Assistance - Comprehensive Project Documentation

**A premium, conversion-optimized Next.js web platform for home care services across the Bay Area**

----

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Key Features & UI Implementations](#key-features--ui-implementations)
5. [File Structure & Directory Organization](#file-structure--directory-organization)
6. [Pages & Routes](#pages--routes)
7. [Components Overview](#components-overview)
8. [Data Architecture (Local Headless CMS)](#data-architecture-local-headless-cms)
9. [API Routes & Integration](#api-routes--integration)
10. [Development Setup](#development-setup)
11. [Environment Variables](#environment-variables)
12. [Styling & Design System](#styling--design-system)
13. [Security Features](#security-features)
14. [SEO & Metadata](#seo--metadata)
15. [Dynamic Routes & Static Generation](#dynamic-routes--static-generation)
16. [Forms & Lead Generation](#forms--lead-generation)
17. [Building & Deployment](#building--deployment)
18. [Troubleshooting](#troubleshooting)
19. [Contributing Guidelines](#contributing-guidelines)

---

## 📖 Project Overview

### What is Glorious Home Care Assistance?

**Glorious Home Care Assistance** is a comprehensive, scalable Next.js web platform built for a premium home care agency serving San Jose and the wider Bay Area. The application has evolved from a simple multi-page site into a fully-featured, 34-page web platform engineered for:

- **Local SEO Authority**: Hyper-localized content for multiple Bay Area cities
- **Family Accessibility**: In-depth, search engine optimized resources for families exploring home care
- **Lead Generation**: Highly qualified lead capture through strategic conversion optimization
- **Professional Brand Presence**: Elite, modern UI standards comparable to Apple and premium creative agencies

### Project Goals

1. **Establish Local SEO Authority** - Dominate search results for "home care near me" queries across 10+ Bay Area counties
2. **Build Trust Through Education** - Provide comprehensive, compassionate guides and FAQs for families
3. **Generate High-Quality Leads** - Optimize conversion funnels through strategically placed CTAs and lead capture forms
4. **Professional Branding** - Present a premium, modern interface that reflects the quality of care offered
5. **Scalability** - Easily add new service areas, service types, and content without code changes

### Key Statistics

- **34+ Pages** generated through a combination of static routes and dynamic SSG pages
- **10+ Service Counties** served across Northern California
- **9 Service Types** detailed with dedicated landing pages
- **10+ Resource Articles** for family guidance and education
- **4-Column Dynamic Footer** with semantic HTML and social integration
- **Conversion-Optimized Forms** with email integration via Resend API

---

## 🛠 Technology Stack

### Core Framework & Library
- **Next.js** `16.2.6` - React framework with App Router for server-side rendering and static generation
- **React** `19.2.4` - UI component library with React Server Components support
- **TypeScript** `5` - Type-safe JavaScript with full IDE support

### Styling & Visual Effects
- **Tailwind CSS** `v4` - Utility-first CSS framework with custom `@theme` inline variables
- **Framer Motion** `12.40.0` - Production-grade animation library for scroll effects and transitions
- **CSS Keyframes** - Custom animations for infinite marquees and carousel effects
- **PostCSS** `4` - CSS transformation tool for Tailwind processing

### Icon Libraries & SVG
- **react-icons** `5.7.0` - Comprehensive icon library (FontAwesome, Feather, etc.)
- **Custom SVGs** - Branded icons and illustrations in `/public` directory
- **Next.js Image Component** - Optimized image loading with automatic format conversion

### Email & Form Processing
- **Resend** `6.20.0` - Email delivery service for form submissions and notifications
- **FormData API** - Native browser form handling with custom validation

### Development Tools
- **ESLint** `9` - JavaScript/TypeScript linting
- **eslint-config-next** `16.2.6` - Next.js specific linting rules
- **@tailwindcss/postcss** `4` - Tailwind CSS with PostCSS integration

### Type Definitions
- `@types/node` `^20` - Node.js type definitions
- `@types/react` `^19` - React type definitions
- `@types/react-dom` `^19` - React DOM type definitions

---

## 🏗 Project Architecture

### Three-Layer Architecture

#### 1. **Presentation Layer** (Components)
- Strictly presentational React components
- No hardcoded content - all data comes from the data layer
- Reusable across multiple pages
- Framer Motion integration for animations

#### 2. **Data Layer** (Local Headless CMS)
- TypeScript data files in `/src/data/`
- Centralized content management without database
- Type-safe configuration objects
- Easy updates without code deployment

#### 3. **API Layer** (Server Actions & Routes)
- Next.js API routes for form processing
- Server-side validation
- Third-party integrations (Resend for email)
- Error handling and logging

### Data Flow Pattern

```
Data Files (src/data/)
        ↓
Components (src/components/)
        ↓
Pages (src/app/)
        ↓
Browser Render
```

### Static vs Dynamic Content

- **Static Pages**: Home, About, Services Hub, Locations Hub, Resources Hub, FAQ, Referrals, Request Care
- **Dynamic SSG Pages**:
  - `/services/[service]` - 9 service detail pages
  - `/locations/[city]` - 6+ city-specific pages
  - `/resources/[article]` - 10+ guide articles

---

## ✨ Key Features & UI Implementations

### 1. **Cinematic Hero Carousel** 🎬
**Location**: Home page (`src/app/page.tsx`)

- **Dynamic Image Crossfade**: Background images cycle every 5 seconds using `setInterval`
- **Smooth Transitions**: CSS opacity transitions between images
- **Responsive Design**: Adapts to mobile, tablet, and desktop viewports
- **Configuration**: Image array in `src/data/home.ts`

**Implementation Details**:
```typescript
// useEffect hook manages the carousel state
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === homeHero.bgImages.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000); // 5-second interval
  
  return () => clearInterval(interval);
}, []);
```

### 2. **Liquid Frosted Glass Banners** 🌫️
**Location**: All internal page banners

- **Backdrop Blur**: `backdrop-blur-2xl` CSS property creates glass effect
- **Transparent Overlays**: Semi-transparent dark overlays for text legibility
- **Photography Integration**: Background images shine through without being obscured
- **Responsive Typography**: Text sizing adapts to screen dimensions

**CSS Classes**:
- `backdrop-blur-2xl` - Heavy blur effect
- `bg-black/40` - Dark semi-transparent overlay
- `text-white` - High contrast white text

### 3. **Infinite Typographic Marquee** 📜
**Location**: Services page (`src/app/services/page.tsx`)

- **Seamless Scrolling**: Custom CSS keyframes create infinite loop effect
- **Pause on Hover**: Interactive state that pauses marquee on mouse hover
- **Auto-Scroll**: Continuous horizontal scrolling using `requestAnimationFrame`
- **Triple Duplication**: Content tripled to ensure seamless looping

**Technical Details**:
```css
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

animation: scroll 30s linear infinite;

/* Pause on hover */
&:hover {
  animation-play-state: paused;
}
```

### 4. **Elegant Asymmetric Bento Grid** 🎨
**Location**: Service detail pages

- **Dark Maroon Theme**: `--brand-red-dark` color from theme
- **High Contrast**: White text on dark backgrounds
- **Gold Accents**: `--brand-gold` for emphasis and highlights
- **Subtle Shadows**: `drop-shadow` for depth and elevation
- **Dynamic Icons**: CSS invert filters apply to uploaded PNG icons
- **Responsive Layout**: Multi-column on desktop, single column on mobile

**Card Features**:
- Rich dark maroon (`#8B2A3E`) backgrounds
- Crisp white typography
- Gold (`#D4AF37`) accent lines and borders
- Subtle elevation shadows for depth
- Hover state with shadow enhancement

### 5. **Sticky Editorial Scroll Layouts** 📌
**Location**: Multiple sections across pages

- **Position Sticky**: Left-aligned headers remain fixed during scroll
- **Parallax Effect**: Right-side content scrolls independently
- **IntersectionObserver**: Detects when sections enter viewport
- **Smooth Scroll Behavior**: Native CSS `scroll-behavior: smooth`

**Use Cases**:
- "How Home Care Works" section with process steps
- Service comparison tables
- Feature highlight sections

### 6. **Interactive Location Directory with Scroll-Spy** 🗺️
**Location**: Locations page (`src/app/locations/page.tsx`)

**Components**:
- **Sticky Sidebar Navigation**: Tab-style navigation that stays fixed
- **Scroll Detection**: `IntersectionObserver` API tracks current section
- **Animated Tab States**: Selected tab highlights with smooth transitions
- **Location Cards**: High-contrast destination cards with city information
- **Pill Cloud UI**: Extended coverage areas displayed as interactive pills

**Features**:
- Click navigation to jump to location sections
- Auto-detection of current section during scroll
- Smooth scrolling between locations
- Mobile-responsive sidebar collapse
- Extended service areas displayed as floating pills

**Data Structure**:
```typescript
export const serviceAreas = [
  { 
    name: "San Jose", 
    slug: "san-jose", 
    description: "...",
    aboutBody: [...]  // Multiple paragraphs
  },
  // ... more areas
]
```

### 7. **Optimized Smart Footer** 👣
**Location**: All pages (shared component)

**Features**:
- **4-Column Responsive Grid**: Adapts from 4 columns (desktop) to 1-2 columns (mobile)
- **Semantic HTML**: Uses `<address>`, `<nav>`, `<section>` tags
- **Dynamic Copyright Year**: Automatically updates with `new Date().getFullYear()`
- **Social Media Integration**: Mapped `react-icons` for LinkedIn, Facebook, Instagram
- **Contact Information**: Phone, text, email, physical address
- **License Number**: Prominently displays regulatory compliance
- **Quick Links**: Navigation to main sections of the site

**Sections**:
1. **Company Info** - Legal name, address, license number
2. **Contact Methods** - Phone, text, email links
3. **Quick Navigation** - Links to main pages
4. **Social Media** - Icon links to social profiles

### 8. **Responsive Navigation with Mobile Drawer** 📱
**Location**: All pages (shared component)

**Features**:
- **Desktop Navigation**: Horizontal menu bar with dropdown for services
- **Mobile Drawer**: Hamburger menu with full-height drawer
- **Sticky Header**: Adapts transparency on scroll (`backdrop-blur-xl` when scrolled)
- **Active State Indicators**: Current page highlights in navigation
- **Service Dropdown**: Chevron icon with expandable service menu
- **Close on Route Change**: Drawer automatically closes on navigation

**Mobile Enhancements**:
- Hamburger menu icon that toggles drawer
- Full-height overlay menu with proper z-indexing
- Smooth scroll lock (prevents background scroll)
- Touch-friendly spacing for tap targets

### 9. **Framer Motion Scroll Reveal Animations** ✨
**Location**: `src/components/Reveal.tsx`

**Animation Types**:
- **Fade In**: Elements appear with opacity transition
- **Slide In**: Elements slide up/down/left/right into view
- **Scale**: Elements grow from smaller to full size
- **Stagger**: Multiple elements animate in sequence

**Performance Optimizations**:
- `once: true` - Animations play only once
- `amount: 0.3` - Trigger when 30% of element is visible
- GPU acceleration via `transform` property

---

## 📁 File Structure & Directory Organization

### Complete Project Structure

```
glorious-home-care-assistance/
│
├── public/                          # Static assets and media
│   ├── favicon.ico                  # Favicon
│   ├── apple-touch-icon.png         # iOS home screen icon
│   ├── site.webmanifest            # PWA manifest
│   ├── services.jpg                 # Service page OG image
│   ├── request-care.jpg            # Request care banner
│   ├── about.jpg                    # About page banner
│   ├── areas-we-serve.jpg          # Locations banner
│   ├── resources.jpg                # Resources banner
│   ├── personal-care.jpg           # Service detail banner
│   ├── dementia-care.jpg           # Service/FAQ banner
│   ├── personal-care.png           # Service icon
│   └── [other service icons]       # Individual service icons
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout with Navbar, Footer
│   │   ├── page.tsx                 # Home page with carousel
│   │   ├── globals.css              # Global styles, Tailwind variables
│   │   ├── robots.ts                # SEO robots.txt generation
│   │   ├── template.tsx             # Page transition template
│   │   │
│   │   ├── about/                   # About Us page
│   │   │   └── page.tsx
│   │   │
│   │   ├── home-care-faq/          # FAQ page
│   │   │   └── page.tsx
│   │   │
│   │   ├── referral-partners/      # B2B Healthcare Professionals
│   │   │   └── page.tsx
│   │   │
│   │   ├── request-care/           # Lead generation form page
│   │   │   └── page.tsx
│   │   │
│   │   ├── services/               # Services section
│   │   │   ├── page.tsx            # Services hub
│   │   │   └── [service]/          # Dynamic service detail pages
│   │   │       └── page.tsx        # Generates 9 service pages
│   │   │
│   │   ├── locations/              # Locations section
│   │   │   ├── page.tsx            # Locations hub with directory
│   │   │   └── [city]/             # Dynamic city pages
│   │   │       └── page.tsx        # Generates 6+ city pages
│   │   │
│   │   ├── resources/              # Resources & Guides section
│   │   │   ├── page.tsx            # Resources hub
│   │   │   └── [article]/          # Dynamic article pages
│   │   │       └── page.tsx        # Generates 10+ article pages
│   │   │
│   │   └── api/                    # API routes
│   │       └── request-care/       # Form submission endpoint
│   │           └── route.ts        # Handles POST requests
│   │
│   ├── components/                  # Reusable React components
│   │   ├── Container.tsx            # Max-width layout wrapper
│   │   ├── DetailCard.tsx           # Service detail card component
│   │   ├── ExpandableLists.tsx      # Expandable list component
│   │   ├── FaqAccordion.tsx         # FAQ accordion with Framer Motion
│   │   ├── Footer.tsx               # Smart 4-column footer
│   │   ├── GoogleReviewsCarousel.tsx # Testimonials carousel
│   │   ├── LocationsDirectory.tsx   # Interactive scroll-spy directory
│   │   ├── Navbar.tsx               # Responsive navigation header
│   │   ├── RequestCareForm.tsx      # Lead capture form component
│   │   ├── Reveal.tsx               # Framer Motion scroll animations
│   │   ├── SectionHeading.tsx       # Standardized section headers
│   │   ├── ServiceItemIcon.tsx      # Dynamic service icon renderer
│   │   └── [other components]       # Additional UI components
│   │
│   └── data/                        # Local Headless CMS - TypeScript data
│       ├── global.ts                # Navigation, footer, contact info
│       ├── home.ts                  # Homepage hero, carousels, content
│       ├── about.ts                 # About page story, vision, mission
│       ├── services.ts              # Service definitions, icons, details
│       ├── locations.ts             # Service areas, city data, descriptions
│       ├── resources.ts             # Articles, guides, categories
│       ├── faqs.ts                  # FAQ categories and questions
│       ├── referrals.ts             # B2B partner content
│       └── request-care.ts          # Form options and copy
│
├── .env.local                       # Environment variables (Git ignored)
├── .eslintrc.js                    # ESLint configuration
├── eslint.config.mjs               # ESLint config (MJS format)
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── package.json                    # NPM dependencies and scripts
├── package-lock.json               # Locked dependency versions
├── README.md                        # Original project README
├── README_DETAILED.md              # This comprehensive documentation
├── AGENTS.md                        # Copilot agent customizations
├── CLAUDE.md                        # Claude AI instructions
└── .gitignore                       # Git ignore rules

```

---

## 🌐 Pages & Routes

### Static Routes (Pre-rendered at Build Time)

#### 1. **Home Page** (`/`)
**File**: `src/app/page.tsx`

**Purpose**: Primary landing page for new visitors

**Key Sections**:
- **Hero Carousel**: 5-second image crossfade with frosted glass overlay
- **Brand Tagline**: "Compassionate Care. Right at home."
- **Service Highlights**: Interactive marquee showcasing service types
- **Care Types Comparison**: Table comparing different care options
- **Process Overview**: "How Home Care Works" sticky scroll section
- **Who We Serve**: Demographic and condition-based callouts
- **Service Areas**: Expandable locations list
- **Testimonials**: Google reviews carousel
- **CTA Sections**: Multiple conversion-focused call-to-action prompts

**Components Used**:
- `Navbar`, `Footer` - Shared shell
- `Reveal` - Scroll animations
- `ExpandableLocations` - Interactive location list
- `GoogleReviewsCarousel` - Testimonials display
- Custom carousel with `useState` and `useEffect`

**Data Source**: `src/data/home.ts`, `src/data/global.ts`, `src/data/locations.ts`

---

#### 2. **About Us Page** (`/about`)
**File**: `src/app/about/page.tsx`

**Purpose**: Tell the agency's story and build emotional connection

**Key Sections**:
- **Hero Banner**: Large banner image with title/subtitle
- **Our Story**: Multi-paragraph narrative about company founding
- **Inspiration Quote**: Highlighted pull quote about care philosophy
- **Vision & Mission**: Side-by-side display of vision and mission statements
- **Why Choose Us**: Key differentiators highlighted
- **Client Testimonial**: Featured review with author attribution

**Unique Features**:
- Emotional storytelling focused on company origin
- Personal narrative about founder's experience with family care
- Mission-driven messaging emphasizing dignity and independence
- Professional testimonial with optional heart icon

**Data Source**: `src/data/about.ts`

---

#### 3. **Care Services Hub** (`/services`)
**File**: `src/app/services/page.tsx`

**Purpose**: Showcase all available services with navigation

**Key Sections**:
- **Hero Banner**: Services overview image
- **Introduction**: Paragraph about supporting independence
- **Service Grid**: Interactive card grid (9 services)
- **Infinite Marquee**: Horizontally scrolling service list with pause-on-hover
- **Service Details Section**: Sticky scroll layout with process steps
- **Areas Served**: Expandable locations from service areas
- **CTA Section**: Bottom call-to-action for assessment

**Advanced Features**:
- **Auto-Scrolling Marquee**: Continuous horizontal scroll using `requestAnimationFrame`
- **Scroll Direction Controls**: Manual left/right arrow buttons
- **Parallax Scroll Progress**: Tracks vertical scroll position for section reveals
- **Sticky Left Column**: Process header remains fixed while content scrolls

**Interactive Elements**:
- Clickable service cards navigate to detail pages
- Marquee pause/resume on hover
- Smooth scrolling between sections

**Data Source**: `src/data/services.ts`, `src/data/home.ts`

---

#### 4. **Locations Hub** (`/locations`)
**File**: `src/app/locations/page.tsx`

**Purpose**: Showcase service coverage areas and local expertise

**Key Sections**:
- **Hero Banner**: Service area map image
- **Introduction**: Message about local service commitment
- **Sticky Sidebar Navigation**: Tabbed directory of service areas
- **Location Cards**: Individual city/area cards with descriptions
- **Counties Served**: Grid of all served California counties
- **Expandable Locations**: Additional area dropdown
- **CTA Section**: Bottom call-to-action

**Advanced Features**:
- **Scroll-Spy Detection**: `IntersectionObserver` tracks current section
- **Auto-Highlight Tabs**: Tab highlights change as user scrolls
- **Click Navigation**: Tabs scroll to corresponding sections
- **Mobile Responsive**: Sidebar collapses on mobile devices
- **Smooth Scroll**: Native `scroll-behavior: smooth` CSS

**Location Components**:
- `LocationsDirectory` - Main scroll-spy component
- `ExpandableLocations` - Collapsible service areas list

**Data Source**: `src/data/locations.ts`

---

#### 5. **Family Resources Hub** (`/resources`)
**File**: `src/app/resources/page.tsx`

**Purpose**: Provide educational content for families

**Key Sections**:
- **Hero Banner**: Resources overview image
- **Introduction**: Empowerment message
- **Resource Categories**: Organized by topic with descriptions
- **Article Cards**: Grid of articles within each category
- **CTA Links**: Each article links to detail page

**Categories**:
1. **Home Care Guides** (4 articles)
   - How Much Does Home Care Cost?
   - Home Care vs Home Health
   - Signs Your Parent Needs Care
   - Choosing a Home Care Agency

2. **Family Caregiver Guides** (3 articles)
   - Family Caregiver Burnout
   - Respite Care Guide
   - Helping a Parent Live Safely

3. **Hospital to Home** (3 articles)
   - After Hospital Discharge
   - Hospital to Home Checklist
   - Recovery at Home

**Data Source**: `src/data/resources.ts`

---

#### 6. **FAQ Page** (`/home-care-faq`)
**File**: `src/app/home-care-faq/page.tsx`

**Purpose**: Answer common questions to reduce friction in decision-making

**Key Features**:
- **Hero Banner**: FAQ overview image
- **Introduction**: Two-paragraph context
- **Accordion Categories**: Questions organized by topic
- **Framer Motion Animations**: Smooth expand/collapse animations
- **Interactive Open/Close**: Click to reveal/hide answers

**FAQ Categories** (4 main topics):
1. **General Home Care Questions** (4 Q&A)
2. **Caregivers & Services** (3 Q&A)
3. **Costs & Billing** (4 Q&A)
4. **Special Care Needs** (3 Q&A)

**Component**: `FaqAccordion` with Framer Motion

**Data Source**: `src/data/faqs.ts`

---

#### 7. **Request Care Form** (`/request-care`)
**File**: `src/app/request-care/page.tsx`

**Purpose**: Primary lead generation conversion point

**Key Sections**:
- **Hero Banner**: Call-to-action focused banner
- **Introduction**: Brief explanation of form purpose
- **Lead Capture Form**: Multi-field form with validation
- **CTA**: Prominent request button

**Form Fields**:
- `name` (Text, required)
- `phone` (Tel, required)
- `email` (Email, required)
- `location` (Dropdown, optional)
- `careType` (Dropdown, optional)
- `message` (Textarea, optional)

**Form Features**:
- Client-side validation with error messages
- Dropdown options from `src/data/request-care.ts`
- Submit button with loading state
- Success/error status messages
- Form reset on successful submission

**Component**: `RequestCareForm`

**Data Source**: `src/data/request-care.ts`

---

#### 8. **Referral Partners Page** (`/referral-partners`)
**File**: `src/app/referral-partners/page.tsx`

**Purpose**: B2B partnership opportunity for healthcare professionals

**Target Audience**:
- Discharge planners
- Physicians and medical professionals
- Hospital care coordinators
- Insurance companies

**Key Sections**:
- **Hero Banner**: Professional B2B focused messaging
- **Partnership Benefits**: Why hospitals should refer
- **Service Overview**: How referrals are processed
- **Contact Information**: Dedicated B2B contact details
- **CTA**: Request partnership discussion

**Data Source**: `src/data/referrals.ts`

---

### Dynamic Routes (Server-Side Generated)

#### 1. **Service Detail Pages** (`/services/[service]`)
**File**: `src/app/services/[service]/page.tsx`

**Purpose**: Deep-dive pages for individual service types

**Generated Pages** (9 total):
1. **Personal Care Assistance** - `/services/personal-care`
2. **Companion Care** - `/services/companion-care`
3. **Dementia Care** - `/services/dementia-care`
4. **Post-Hospital Recovery** - `/services/post-hospital-recovery`
5. **Respite Care** - `/services/respite-care`
6. **Memory Care** - `/services/memory-care`
7. **Medication Management** - `/services/medication-management`
8. **Mobility Assistance** - `/services/mobility-assistance`
9. **Live-in Care** - `/services/live-in-care`

**Page Structure**:
- **Hero Banner**: Service-specific background image
- **Service Title & Description**: Main messaging
- **Key Benefits**: List of primary advantages
- **Bento Box Grid**: Visual cards with features
- **Process Overview**: Step-by-step service delivery
- **Who Benefits**: Conditions and situations
- **Areas Served**: Expandable location list
- **Bottom CTA**: Free assessment call-to-action

**Data-Driven Features**:
- Icon rendering from `src/data/services.tsx`
- Unique content for each service from data array
- Dynamic SEO titles per service

**Data Source**: `src/data/services.tsx` (mainServices array)

---

#### 2. **City/Area Pages** (`/locations/[city]`)
**File**: `src/app/locations/[city]/page.tsx`

**Purpose**: Hyper-local SEO pages for specific service areas

**Generated Pages** (6+ locations):
- `/locations/santa-rosa`
- `/locations/rohnert-park`
- `/locations/petaluma`
- `/locations/napa`
- `/locations/vacaville`
- `/locations/sonoma`
- (Additional cities from `serviceAreas` array)

**Page Structure**:
- **Hero Banner**: City-specific banner image
- **City Name & Description**: Location headline
- **Local Commitment Message**: Personalized text for each area
- **Service Overview**: Services available in area
- **Local Information**: Community insights
- **Why Choose Us Here**: Local differentiators
- **Areas Served**: Expandable county/region info
- **Contact CTA**: Location-specific contact prompt

**SEO Optimization**:
- Unique title tags per city: "Home Care in [City] | Glorious"
- Meta descriptions with city keywords
- Canonical URLs prevent duplicate content
- Local keywords in page copy

**Data Source**: `src/data/locations.ts` (serviceAreas array)

---

#### 3. **Resource Article Pages** (`/resources/[article]`)
**File**: `src/app/resources/[article]/page.tsx`

**Purpose**: Educational guides for family decision-making

**Generated Pages** (10+ articles):
1. "How Much Does Home Care Cost in San Jose?"
2. "Home Care vs Home Health"
3. "7 Signs Your Parent May Need Home Care"
4. "How to Choose a Home Care Agency"
5. "Family Caregiver Burnout"
6. "Respite Care Guide"
7. "Helping a Parent Live at Home Safely"
8. "After Hospital Discharge"
9. "Hospital to Home Checklist"
10. "Recovery at Home"

**Page Structure**:
- **Article Header**: Title and publish date (if applicable)
- **Hero Banner**: Article-specific image
- **Article Content**: Rich text content with sections
- **Table of Contents**: Navigation within article
- **Key Takeaways**: Highlighted summary points
- **Related Articles**: Links to similar content
- **Bottom CTA**: "Request Care" call-to-action

**Content Organization**:
- Multiple paragraphs organized by heading
- Bullet points for key information
- Emphasis on readability and scanability
- Mobile-responsive typography

**Data Source**: `src/data/resources.ts` (resourceCategories array)

---

## 🧩 Components Overview

### Component Architecture

All components are **strictly presentational** - they receive data as props and don't contain business logic or hardcoded content. This separation enables:
- Easy content updates from `/src/data/` files
- Component reusability across pages
- Cleaner testing and maintenance
- Clear data flow

### Core Components

#### **Container.tsx**
**Purpose**: Max-width layout wrapper

**Props**:
- `children` - Content to wrap

**Styling**:
- Default max-width: `max-w-7xl` (80rem)
- Horizontal padding: Responsive `px-4 md:px-6`
- Centered with `mx-auto`

**Usage**: Wraps all major page sections for consistent width

---

#### **Navbar.tsx**
**Purpose**: Responsive header navigation

**Features**:
- **Desktop Navigation**: Horizontal menu with dropdown for services
- **Mobile Navigation**: Hamburger menu with full-height drawer
- **Sticky Positioning**: Adapts background on scroll
- **Active State**: Highlights current page
- **Mobile Lock**: Prevents background scroll when drawer open

**Props**: None (uses `usePathname` hook)

**State Management**:
- `scrolled` - Tracks if page is scrolled
- `isMobileMenuOpen` - Drawer open/closed state
- `isMobileServicesOpen` - Services dropdown state

**Data Source**: `src/data/global.ts` (navLinks, contactInfo)

**Responsive Behavior**:
- Desktop: Horizontal navbar with service dropdown
- Tablet: Hamburger icon appears
- Mobile: Full-screen drawer menu

---

#### **Footer.tsx**
**Purpose**: Shared footer with contact and navigation

**Features**:
- **4-Column Grid**: Desktop layout with 4 columns
- **Responsive**: 1-2 columns on mobile
- **Semantic HTML**: `<address>`, `<nav>` tags for accessibility
- **Dynamic Copyright**: Year updates automatically
- **Social Media Links**: Icon links to social profiles
- **License Number**: Displays regulatory information

**Sections**:
1. **Company Info** - Address, license, name
2. **Contact** - Phone, text, email
3. **Quick Navigation** - Links to main pages
4. **Social Media** - Icon links

**Data Source**: `src/data/global.ts` (contactInfo, navLinks, socialLinks)

---

#### **Reveal.tsx**
**Purpose**: Framer Motion scroll reveal animations

**Features**:
- **Fade In**: Opacity transition
- **Slide & Fade**: Combined slide and fade effect
- **Scale**: Size growth animation
- **Stagger**: Sequential animation for multiple children

**Props**:
- `children` - Content to animate
- `direction` - Slide direction: "up", "down", "left", "right"
- `variant` - Animation type (default: "fade")
- `delay` - Stagger delay in seconds

**Animation Trigger**:
- `amount: 0.3` - Triggers when 30% of element is visible
- `once: true` - Plays animation only once

**Usage**: Wrap sections for scroll-triggered animations

---

#### **FaqAccordion.tsx**
**Purpose**: Animated Q&A accordion display

**Features**:
- **Framer Motion Animations**: Smooth expand/collapse
- **Icon Rotation**: Chevron rotates on open/close
- **Click Toggle**: Click question to reveal answer
- **Multiple Accordions**: Independent state for each question

**Props**:
- `categories` - Array of {categoryTitle, questions}
- `questions` - Array of {question, answer}

**Structure**:
```typescript
categories: [
  {
    categoryTitle: string
    questions: [
      { question: string, answer: string },
      ...
    ]
  },
  ...
]
```

**Data Source**: `src/data/faqs.ts`

---

#### **SectionHeading.tsx**
**Purpose**: Standardized section header typography

**Features**:
- **Consistent Typography**: Unified heading styling
- **Optional Subtitle**: Secondary heading text
- **Responsive Sizing**: Scales for mobile/desktop
- **Theming**: Uses brand colors

**Props**:
- `title` - Main heading text
- `subtitle` - Optional secondary text
- `centered` - Alignment option (default: true)

**Styling**:
- Title: Bold, large font size
- Subtitle: Smaller, secondary color
- Spacing: Consistent margins

---

#### **RequestCareForm.tsx**
**Purpose**: Lead capture form component

**Features**:
- **Form Validation**: Client-side input validation
- **Loading State**: Shows spinner during submission
- **Status Messages**: Success/error feedback
- **Form Reset**: Clears on successful submission

**Form Fields**:
```typescript
{
  name: string        // Required
  phone: string       // Required, tel input
  email: string       // Required, email input
  location: string    // Optional, dropdown
  careType: string    // Optional, dropdown
  message: string     // Optional, textarea
}
```

**API Integration**:
- Posts to `/api/request-care`
- Receives success or error response
- Displays user-friendly status message

**Data Source**: `src/data/request-care.ts` (careTypeOptions, locationOptions)

---

#### **LocationsDirectory.tsx**
**Purpose**: Interactive scroll-spy location navigation

**Features**:
- **Sticky Sidebar**: Tab navigation stays fixed
- **Scroll Detection**: Auto-highlights current section
- **Click Navigation**: Jump to location sections
- **Smooth Scrolling**: CSS `scroll-behavior: smooth`
- **Mobile Responsive**: Sidebar collapses

**Props**:
- `serviceAreas` - Array of location data
- `className` - Optional additional styling

**IntersectionObserver Integration**:
- Detects when each location section enters viewport
- Updates active tab based on scroll position
- Provides visual feedback of current location

**Mobile Behavior**:
- Sidebar transforms to horizontal tabs
- Full-width content area
- Touch-friendly tap targets

**Data Source**: `src/data/locations.ts` (serviceAreas)

---

#### **DetailCard.tsx**
**Purpose**: Service or feature detail card display

**Features**:
- **Icon Display**: Renders service icon from data
- **Title & Description**: Organized text content
- **Hover Effects**: Subtle elevation and shadow
- **Responsive Grid**: Works in 1-4 column layouts

**Props**:
- `icon` - Icon identifier or SVG path
- `title` - Card heading
- `description` - Card body text

**Styling**:
- Dark background option for bento grid
- White text on dark backgrounds
- Gold accents for emphasis
- Border radius for modern feel

---

#### **GoogleReviewsCarousel.tsx**
**Purpose**: Display client testimonials

**Features**:
- **Review Cards**: Individual testimonial display
- **Author Attribution**: Name and possibly title
- **Rating Display**: Star rating (if applicable)
- **Carousel Navigation**: Previous/Next buttons
- **Auto-Rotate**: Optional automatic scrolling

**Props**:
- `reviews` - Array of review objects
- `autoRotate` - Enable auto-rotation (optional)

**Review Structure**:
```typescript
{
  quote: string
  author: string
  rating?: number
  image?: string
}
```

---

#### **ExpandableLists.tsx**
**Purpose**: Collapsible list display

**Features**:
- **Click to Expand**: Collapse/expand sections
- **Smooth Animation**: Framer Motion transitions
- **Icon Rotation**: Chevron rotates on toggle
- **Multiple Lists**: Independent state for each

**Components**:
- `ExpandableLocations` - For service areas

**Usage**:
```typescript
<ExpandableLocations 
  title="Extended Service Areas"
  areas={additionalAreas}
/>
```

---

#### **ServiceItemIcon.tsx**
**Purpose**: Dynamic service icon renderer

**Features**:
- **Icon Selection**: Renders correct icon per service
- **Dynamic SVG**: Loads from public directory
- **CSS Filters**: Applies invert filters if needed
- **Fallback Handling**: Shows placeholder if icon missing

**Props**:
- `icon` - Icon identifier from service data
- `className` - Styling classes

**Icon Loading**:
- SVG files in `/public/` directory
- Next.js `<Image>` component for optimization
- CSS invert filter for dark theme compatibility

---

## 📊 Data Architecture (Local Headless CMS)

### Overview

The **Local Headless CMS** pattern separates content from presentation:
- **Content Layer**: TypeScript objects in `/src/data/`
- **Presentation Layer**: React components in `/src/components/`
- **Routing Layer**: Next.js pages in `/src/app/`

This enables content updates without code changes and type-safe data management.

### Data Files Reference

#### **global.ts** - Shared Global Data
**Contains**: Navigation, footer, contact information

```typescript
// Navigation Links
export const navLinks: NavLink[] = [
  { label: "Home Page", href: "/" },
  { label: "About Us", href: "/about" },
  // ... 6 more links
]

// Contact Information
export const contactInfo: ContactInfo = {
  name: "Glorious Home Care Assistance, LLC"
  addressLine1: "2528 Qume Drive, Ste. 4"
  addressLine2: "San Jose, CA 95131"
  phoneLabel: "Phone"
  phone: "408-332-5843"
  phoneHref: "tel:+14083325843"
  textLabel: "Text"
  text: "858-321-5077"
  textHref: "sms:+18583215077"
  email: "admin@glorioushomecareca.com"
  website: "https://www.glorioushomecareassistance.com"
  licenseNumber: "014700173"
}

// CTA Copy
export const homeCallouts = {
  optionsPrompt: "Explore Your Options Today!"
  callToAction: "Call or Text Today!"
  freeConsultation: "Contact Us Today for a Free Consultation"
}

// Social Media Links
export const socialLinks = [
  { label: "LinkedIn", href: "..." }
  { label: "Facebook", href: "..." }
  { label: "Instagram", href: "..." }
]
```

**Usage**: Navbar, Footer, all pages for consistent contact info

---

#### **home.ts** - Homepage Data
**Contains**: Hero carousel, sections, messaging

```typescript
export const homeHero = {
  bgImages: string[]  // Array of image paths for carousel
  title: string
  subtitle: string
}

export const homeAbout = {
  title: string
  paragraphs: string[]
}

export const fiveFactors = {
  title: string
  factors: {
    title: string
    description: string
  }[]
}

export const careComparison = {
  title: string
  // Table data structure for comparison chart
}

export const whoWeServe = {
  // Conditions and demographics served
}

export const homeProcess = {
  // Process steps for "How It Works"
}
```

**Usage**: Home page components and sections

---

#### **about.ts** - About Us Page Data
**Contains**: Company story, vision, mission

```typescript
export const aboutHero = {
  title: "About Us"
  subtitle: "Dedicated to Compassionate Home Care"
  bannerImage: "/about.jpg"
}

export const ourStory = {
  title: "Our Story"
  paragraphs: [
    "Founding narrative...",
    "Experience details...",
    // Multiple paragraphs
  ]
}

export const ourInspiration = {
  title: "Our Inspiration"
  quote: "Personal experience quote..."
  author: "Glorious Home Care Assistance Team"
}

export const visionAndMission = {
  vision: { title: "Vision", body: string }
  mission: { title: "Mission", body: string }
}

export const ghcaDifference = {
  title: "Why Choose Us?"
  subtitle: "The GHCA Difference"
  features: string[]  // 3-5 key features
}

export const aboutReview = {
  quote: "Client testimonial..."
  author: "Client Name"
  hasHeartIcon: boolean
}
```

**Usage**: About page sections

---

#### **services.ts/tsx** - Service Data
**Contains**: Service definitions, descriptions, icons

```typescript
export const servicesHero = {
  title: "Our Services"
  subtitle: "Compassionate Care You Can Trust"
  bannerImage: "/services.jpg"
}

export const mainServices = [
  {
    title: "Personal Care Assistance"
    slug: "personal-care"
    description: string
    bannerImage: string
    iconImage: string
    pageData: {
      seoTitle: string
      heading1: { line1, line2 }
      description1: string
      bentoBox: {
        title: string
        items: [{ title, description }, ...]
      }
      benefits: string[]
      process: string[]
      // ... more fields
    }
  },
  // ... 8 more service objects
]

export const sharedServiceContent = {
  areaHeading: string
  bottomCta: {
    message: string
    action: string
    phone: string
    email: string
    tagline: string
  }
}
```

**Usage**: Services hub page and dynamic `/services/[service]` pages

**Services Included**:
1. Personal Care Assistance
2. Companion Care
3. Dementia Care
4. Post-Hospital Recovery Care
5. Respite Care
6. Memory Care
7. Medication Management
8. Mobility Assistance
9. Live-in Care

---

#### **locations.ts** - Geographic Service Data
**Contains**: Service areas, cities, county information

```typescript
export const locationsHero = {
  title: "Areas We Serve"
  subtitle: "Proudly Serving Communities Across the Bay Area"
  bannerImage: "/areas-we-serve.jpg"
}

export const locationsIntro = {
  title: "Trusted Care in Your Community"
  paragraphs: string[]
}

export const serviceCounties = [
  "Santa Clara County",
  "Alameda County",
  "Contra Costa County",
  // ... 7 more counties
]

export const serviceAreas = [
  {
    name: "San Jose"
    slug: "san-jose"
    description: string  // Short SEO description
    aboutBody: string[]  // Multiple paragraphs for detail page
  },
  // ... 6+ more areas
]
```

**Service Areas** (6+ locations):
- Santa Rosa
- Rohnert Park
- Petaluma
- Napa
- Vacaville
- Sonoma
- (Expandable for new areas)

**Counties Served** (10 total):
- Santa Clara, Alameda, Contra Costa, Merced, San Benito
- San Francisco, San Joaquin, San Mateo, Santa Cruz, Stanislaus

**Usage**: Locations hub page and dynamic `/locations/[city]` pages

---

#### **resources.ts** - Educational Content Data
**Contains**: Articles, guides, categories

```typescript
export const resourcesHero = {
  title: "Resources & Guides"
  subtitle: "Helpful Information for Families"
  bannerImage: "/resources.jpg"
}

export const resourcesIntro = {
  title: "Empowering You with Knowledge"
  paragraphs: string[]
}

export const resourceCategories = [
  {
    categoryTitle: "Home Care Guides"
    description: string
    articles: [
      { title: string, slug: string },
      // ... 3-4 articles per category
    ]
  },
  {
    categoryTitle: "Family Caregiver Guides"
    description: string
    articles: [...]
  },
  {
    categoryTitle: "Hospital to Home"
    description: string
    articles: [...]
  }
]
```

**Article Categories** (3 total):
1. **Home Care Guides** - Costs, comparison, agency selection
2. **Family Caregiver Guides** - Burnout, respite care, safety
3. **Hospital to Home** - Discharge, checklist, recovery

**Articles** (10+ total):
- How Much Does Home Care Cost?
- Home Care vs Home Health
- 7 Signs Parent Needs Care
- How to Choose an Agency
- Family Caregiver Burnout
- Respite Care Guide
- Helping Parent Live Safely
- After Hospital Discharge
- Hospital to Home Checklist
- Recovery at Home

**Usage**: Resources hub page and dynamic `/resources/[article]` pages

---

#### **faqs.ts** - Frequently Asked Questions
**Contains**: Question categories and answers

```typescript
export const faqHero = {
  title: "Frequently Asked Questions"
  subtitle: "Everything You Need to Know"
  bannerImage: "/dementia-care.jpg"
}

export const faqIntro = {
  title: "Clear Answers for Families"
  paragraphs: string[]
}

export const faqCategories = [
  {
    categoryTitle: "General Home Care Questions"
    questions: [
      {
        question: "What is non-medical home care?"
        answer: string
      },
      // ... 3-4 questions per category
    ]
  },
  // ... 3 more categories
]
```

**FAQ Categories** (4 total):
1. General Home Care Questions
2. Caregivers & Services
3. Costs & Billing
4. Special Care Needs

**Questions** (14+ total) with detailed answers

**Usage**: FAQ page with accordion component

---

#### **request-care.ts** - Form Data
**Contains**: Form options and messaging

```typescript
export const requestCareHero = {
  title: "Request a Care Consultation"
  subtitle: "Take the First Step Towards Peace of Mind"
  bannerImage: "/request-care.jpg"
}

export const requestCareIntro = {
  title: "Tell Us About Your Care Needs"
  description: string
}

export const careTypeOptions = [
  "Companion Care",
  "Personal Care Assistance",
  "Dementia Care",
  "Respite Care",
  "Post-Hospital Recovery Care",
  "24-Hour / Overnight Care",
  "Other / Not Sure Yet"
]

export const locationOptions = [
  "San Jose",
  "Santa Clara",
  "Sunnyvale",
  "Cupertino",
  "Milpitas",
  "Campbell",
  "Other / Outside Service Area"
]
```

**Usage**: Request Care form page

---

#### **faqs.ts** - Referral Partners Data
**Contains**: B2B partnership information

```typescript
export const referralPartnerHero = {
  title: "Healthcare Professional Partners"
  subtitle: "B2B Referral Program"
  bannerImage: string
}

export const partnershipBenefits = {
  title: string
  benefits: string[]
}

export const referralProcess = {
  title: string
  steps: string[]
}

export const partnerContact = {
  // B2B contact information
}
```

**Usage**: Referral Partners page

---

### Type Safety & IntelliSense

All data files use TypeScript interfaces for type safety:

```typescript
// Example: Defining types for data
export type NavLink = {
  label: string
  href: string
}

export type ContactInfo = {
  name: string
  addressLine1: string
  addressLine2: string
  phone: string
  email: string
  // ... more fields
}

export const navLinks: NavLink[] = [...]
export const contactInfo: ContactInfo = {...}
```

**Benefits**:
- IDE autocomplete and type checking
- Compile-time error detection
- Self-documenting code
- Easy refactoring

---

## 🔌 API Routes & Integration

### Resend Email Service Integration

#### Endpoint: `/api/request-care`
**File**: `src/app/api/request-care/route.ts`

**Purpose**: Process form submissions and send email notifications

**Request Method**: `POST`

**Request Body**:
```json
{
  "name": "John Doe",
  "phone": "408-123-4567",
  "email": "john@example.com",
  "location": "San Jose",
  "careType": "Companion Care",
  "message": "My mother needs daily assistance..."
}
```

**Validation Rules**:
- `name` - Required (string)
- `phone` - Required (string)
- `email` - Required (valid email format)
- `location` - Optional (string)
- `careType` - Optional (string)
- `message` - Optional (string)

**Response - Success (200)**:
```json
{
  "message": "Care request submitted successfully!"
}
```

**Response - Validation Error (400)**:
```json
{
  "error": "Name, phone, and email are required fields."
}
```

**Response - Email Error (400)**:
```json
{
  "error": "Failed to send email. Please try calling us directly."
}
```

**Response - Server Error (500)**:
```json
{
  "error": "Internal server error. Please try calling us directly."
}
```

### Email Template

When a form is submitted, an email is sent to `admin@glorioushomecareca.com` with this format:

**Subject**: `New Care Request from {Name} - {Location}`

**Email Body** (HTML formatted):
```html
<h2>New In-Home Care Request</h2>
<p>A new care request has been submitted through the website.</p>

<table>
  <tr><td>Name:</td><td>{name}</td></tr>
  <tr><td>Phone:</td><td>{phone}</td></tr>
  <tr><td>Email:</td><td>{email}</td></tr>
  <tr><td>Location:</td><td>{location}</td></tr>
  <tr><td>Care Type:</td><td>{careType}</td></tr>
</table>

<h3>Situation Description:</h3>
<p>{message}</p>
```

**Reply-To**: Set to the form submitter's email for easy response

### Resend Configuration

**Setup**:
1. Create Resend account at https://resend.com
2. Generate API key
3. Store in `.env.local` as `RESEND_API_KEY`
4. Set sender email in `.env.local` as `RESEND_FROM_EMAIL`

**Testing**:
- Use `onboarding@resend.dev` as sender during development
- Verify domain in Resend dashboard before production
- Set `RESEND_FROM_EMAIL=admin@glorioushomecareca.com` for production

**Environment Variables**:
```bash
RESEND_API_KEY=re_YOUR_API_KEY_HERE
RESEND_FROM_EMAIL=admin@glorioushomecareca.com
```

---

## 🚀 Development Setup

### Prerequisites

- **Node.js**: v18.17 or later (LTS recommended)
- **npm**: v9 or later (included with Node.js)
- **Git**: For version control
- **Code Editor**: VS Code recommended with TypeScript support

### Installation Steps

#### 1. Clone Repository
```bash
git clone https://github.com/yourusername/glorious-home-care-assistance.git
cd glorious-home-care-assistance
```

#### 2. Install Dependencies
```bash
npm install
```

This installs all packages from `package.json`:
- Next.js 16.2.6
- React 19.2.4
- Tailwind CSS v4
- Framer Motion
- Resend
- Development dependencies

#### 3. Create Environment File
```bash
cp .env.example .env.local
```

Or create `.env.local` manually with required variables (see Environment Variables section)

#### 4. Start Development Server
```bash
npm run dev
```

The server starts at `http://localhost:3000`

**Output**:
```
  ▲ Next.js 16.2.6
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Ready in 2.5s
```

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run ESLint to check code
npm run lint
```

### Directory to Open in Editor

Open the project root directory in your code editor:
```bash
code .
```

### File Editing Workflow

1. **Edit Components**: `src/components/*.tsx`
2. **Edit Pages**: `src/app/**/*.tsx`
3. **Edit Data**: `src/data/*.ts`
4. **Hot Reload**: Changes automatically reload in browser at `http://localhost:3000`

### Debugging

#### Browser DevTools
- Open http://localhost:3000
- Press `F12` or `Ctrl+Shift+I` to open DevTools
- Use Console, Network, Elements tabs to debug

#### VS Code Debugging
1. Install "Debugger for Chrome" extension
2. Add `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```
3. Press `F5` to start debugging

#### Console Logs
```typescript
console.log("Debug message:", variable)
console.error("Error message:", error)
console.table(arrayOfObjects)
```

---

## 🔐 Environment Variables

### Required Variables

Create `.env.local` file in project root with:

```bash
# Resend Email Service Configuration
RESEND_API_KEY=re_YOUR_API_KEY_HERE
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### Environment Variable Descriptions

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `RESEND_API_KEY` | API key for Resend email service | `re_DLsD6kZW_4SAj...` | Yes |
| `RESEND_FROM_EMAIL` | Email address for sending form notifications | `admin@glorioushomecareca.com` | Yes |

### Development vs Production

**Development** (`.env.local`):
```bash
RESEND_API_KEY=re_test_key_from_resend_dashboard
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**Production** (Set in hosting platform):
```bash
RESEND_API_KEY=re_production_key_from_resend_dashboard
RESEND_FROM_EMAIL=admin@glorioushomecareca.com
```

### Getting Resend API Key

1. Visit https://resend.com
2. Sign up or log in
3. Navigate to API Keys section
4. Create new API key
5. Copy and paste into `.env.local`

---

## 🎨 Styling & Design System

### Tailwind CSS v4 with Custom Theme

The project uses **Tailwind CSS v4** with custom theme variables defined in `globals.css`.

#### Theme Variables in `globals.css`

```css
@theme {
  /* Brand Colors */
  --brand-red-dark: #8B2A3E;      /* Primary brand color */
  --brand-gold: #D4AF37;           /* Accent color */
  --brand-ink: #1b1b1b;            /* Text color */
  --brand-bg: #f9f9f9;             /* Background color */
  
  /* Semantic Colors */
  --text-primary: #1b1b1b;
  --text-secondary: #666;
  --text-light: #999;
  --bg-light: #f9f9f9;
  --bg-lighter: #fafafa;
  
  /* Spacing Scale */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
}
```

### Typography System

**Font**: Manrope (Google Fonts)
- **Weight**: 400 (Regular)
- **Display**: Variable font support
- **CSS Variable**: `--font-manrope`

#### Heading Hierarchy

```html
<!-- H1: Page titles, hero headlines -->
<h1 class="text-4xl md:text-5xl font-bold">Page Title</h1>

<!-- H2: Section headings -->
<h2 class="text-3xl md:text-4xl font-bold">Section Title</h2>

<!-- H3: Subsection headings -->
<h3 class="text-2xl md:text-3xl font-bold">Subsection</h3>

<!-- P: Body text -->
<p class="text-base md:text-lg leading-relaxed">Body paragraph</p>
```

### Color Palette

**Primary Brand Color**:
- Dark Maroon: `#8B2A3E` (bg-brand-red-dark)
- Used for: CTA buttons, headers, section backgrounds

**Accent Color**:
- Gold: `#D4AF37` (bg-brand-gold)
- Used for: Highlights, borders, icon accents

**Text Colors**:
- Dark Ink: `#1b1b1b` (text-brand-ink)
- Secondary: `#666` (text-gray-600)
- Light: `#999` (text-gray-400)

**Background Colors**:
- Light: `#f9f9f9` (bg-brand-bg)
- Lighter: `#fafafa` (bg-gray-50)
- White: `#ffffff` (bg-white)

### Responsive Design Breakpoints

Tailwind default breakpoints:

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Common Utility Classes

```tailwind
/* Layout */
container, mx-auto, px-4, md:px-6, lg:px-8

/* Typography */
text-lg, font-bold, leading-relaxed

/* Colors */
bg-white, text-brand-ink, border-brand-gold

/* Spacing */
my-8, py-12, px-4, md:py-16

/* Effects */
shadow-lg, rounded-lg, backdrop-blur-xl

/* Responsive */
md:grid-cols-2, lg:grid-cols-4
```

### Animations & Transitions

**CSS Transitions**:
```css
transition-all duration-300 ease-in-out
hover:shadow-lg hover:scale-105
```

**Framer Motion Animations**:
- Used in `<Reveal />` component
- Scroll-triggered animations
- Accordion animations
- Page transitions

**Custom Keyframes** (in `globals.css`):
```css
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 🔒 Security Features

### Content Security Policy (CSP)

Configured in `next.config.ts`, CSP headers restrict resource loading:

```javascript
'Content-Security-Policy': `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
```

**Policy Details**:
- **default-src 'self'**: Only load from same origin by default
- **script-src**: Allow scripts from self and inline (for Next.js)
- **img-src**: Allow images from self, blob, data URIs, and HTTPS
- **object-src 'none'**: No plugins allowed
- **frame-ancestors 'none'**: Cannot be embedded in iframes (prevent clickjacking)
- **upgrade-insecure-requests**: Automatically upgrade HTTP to HTTPS

### Additional Security Headers

**X-Frame-Options**: `DENY`
- Prevents clickjacking attacks
- Page cannot be framed by other sites

**X-Content-Type-Options**: `nosniff`
- Prevents MIME-type sniffing
- Browsers must respect Content-Type header

### Form Validation

**Client-Side**:
```typescript
// HTML5 validation attributes
<input type="email" required />
<input type="tel" required />
<textarea required />
```

**Server-Side** (in `/api/request-care/route.ts`):
```typescript
if (!name || !phone || !email) {
  return NextResponse.json(
    { error: "Name, phone, and email are required fields." },
    { status: 400 }
  );
}
```

### Environment Variables Protection

- `.env.local` is Git-ignored (never committed)
- Only server-side code can access env variables
- Client-side code doesn't expose secrets
- Use `NEXT_PUBLIC_*` prefix only for non-sensitive variables

### Resend Email Integration

- API key stored securely in `.env.local`
- Form validation prevents injection attacks
- Email content sanitized
- Reply-to header set from user input

---

## 📱 SEO & Metadata

### Global Metadata Configuration

Set in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://www.glorioushomecareassistance.com"),
  
  title: {
    default: "Home Care in San Jose & Bay Area | Glorious Home Care",
    template: "%s | Glorious Home Care Assistance LLC",
  },
  
  description: "Providing compassionate in-home care, personal care, and senior care at home across San Jose, Los Altos, Palo Alto, San Francisco, and the wider Bay Area.",
  
  keywords: [
    "home care in San Jose",
    "in-home care san jose",
    "personal care San Jose",
    "home care in bay area",
    // ... 12 more keywords
  ],
  
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
  openGraph: {
    title: "Home Care in San Jose & Bay Area | Glorious Home Care",
    description: "...",
    url: "https://www.glorioushomecareassistance.com",
    siteName: "Glorious Home Care Assistance",
    type: "website",
    images: [{ url: "/services.jpg", width: 1200, height: 630, alt: "..." }],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
    images: ["/services.jpg"],
  },
};
```

### Page-Specific Metadata

Each page can override global metadata:

```typescript
// src/app/about/page.tsx
export const metadata: Metadata = {
  title: "About Glorious Home Care Assistance",
  description: "Learn about our founding story, vision, and mission...",
  openGraph: {
    title: "About Glorious Home Care Assistance",
    url: "https://www.glorioushomecareassistance.com/about",
  },
};
```

### Dynamic Metadata for SSG Pages

For dynamic routes like `/services/[service]`:

```typescript
// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: { service: string }
}): Promise<Metadata> {
  const service = mainServices.find(s => s.slug === params.service);
  
  return {
    title: service?.pageData.seoTitle,
    description: service?.description,
  };
}
```

### Local SEO Keywords

**Primary Keywords**:
- home care in San Jose
- in-home care san jose
- personal care San Jose
- home care in Bay Area

**Location Keywords** (for city pages):
- home care in [City Name]
- senior care in [City Name]
- [City Name] home care services

**Long-Tail Keywords**:
- 7 signs your parent needs home care
- how much does home care cost in San Jose
- home care vs home health

### Canonical URLs

Automatically generated by Next.js:
```typescript
alternates: {
  canonical: "/",
}
```

Prevents duplicate content penalties for dynamic routes.

### Open Graph & Twitter Cards

Optimized for social sharing:
- **Image Size**: 1200x630px (Facebook/Twitter recommended)
- **Image Format**: JPG for best compatibility
- **Card Type**: `summary_large_image` (Twitter)
- **Site Name**: Glorious Home Care Assistance

### Schema Markup (Optional Future Enhancement)

Could add JSON-LD schema for:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Glorious Home Care Assistance",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2528 Qume Drive, Ste. 4",
    "addressLocality": "San Jose",
    "addressRegion": "CA",
    "postalCode": "95131",
    "addressCountry": "US"
  },
  "telephone": "+14083325843",
  "url": "https://www.glorioushomecareassistance.com"
}
```

---

## 🔄 Dynamic Routes & Static Generation

### Static Site Generation (SSG)

All dynamic routes use Next.js SSG for optimal performance:

```typescript
// Generates all service pages at build time
export async function generateStaticParams() {
  return mainServices.map((service) => ({
    service: service.slug,
  }));
}
```

**Benefits**:
- ⚡ Instant page loads (pre-rendered)
- 🔍 Better SEO (search engines see full HTML)
- 💰 Lower server costs (no build-time rendering)
- 🔄 Incremental Static Regeneration (ISR) option

### Service Pages Dynamic Route

**Route**: `/services/[service]/page.tsx`

**Generated Pages** (9 total):
```
/services/personal-care
/services/companion-care
/services/dementia-care
/services/post-hospital-recovery
/services/respite-care
/services/memory-care
/services/medication-management
/services/mobility-assistance
/services/live-in-care
```

**Implementation**:
```typescript
export async function generateStaticParams() {
  return mainServices.map((service) => ({
    service: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = mainServices.find(s => s.slug === params.service);
  // Render page with service data
}
```

### Location Pages Dynamic Route

**Route**: `/locations/[city]/page.tsx`

**Generated Pages** (6+ locations):
```
/locations/santa-rosa
/locations/rohnert-park
/locations/petaluma
/locations/napa
/locations/vacaville
/locations/sonoma
```

**Implementation**:
```typescript
export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    city: area.slug,
  }));
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const location = serviceAreas.find(a => a.slug === params.city);
  // Render page with location data
}
```

### Resource Article Dynamic Route

**Route**: `/resources/[article]/page.tsx`

**Generated Pages** (10+ articles):
```
/resources/home-care-cost-san-jose
/resources/home-care-vs-home-health
/resources/signs-parent-needs-home-care
/resources/how-to-choose-home-care-agency
/resources/family-caregiver-burnout
/resources/respite-care-guide
/resources/helping-parent-live-safely
/resources/after-hospital-discharge
/resources/hospital-to-home-checklist
/resources/recovery-at-home
```

**Implementation**:
```typescript
export async function generateStaticParams() {
  const allArticles = resourceCategories.flatMap(cat => cat.articles);
  return allArticles.map((article) => ({
    article: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { article: string } }) {
  const article = findArticleBySlug(params.article);
  // Render page with article data
}
```

### Build Process

When running `npm run build`:

1. **Analyze Data Files**: Read all service, location, and article definitions
2. **Generate Static Routes**: Create HTML for all dynamic routes
3. **Bundle Assets**: Minify JS, CSS, images
4. **Output to .next**: Next.js `.next` directory contains all pre-rendered pages

**Build Time** with 34 pages: ~30-60 seconds

### Incremental Static Regeneration (ISR)

Could be added for periodic updates:

```typescript
export const revalidate = 3600; // Regenerate every hour
```

This would rebuild pages hourly without full rebuild.

---

## 📝 Forms & Lead Generation

### Request Care Form Flow

#### 1. Form Component (`src/components/RequestCareForm.tsx`)

**Features**:
- Client-side form validation
- Loading state during submission
- Success/error message display
- Form reset on success

**Form Fields**:
```html
<input type="text" name="name" placeholder="Full Name" required />
<input type="tel" name="phone" placeholder="Phone" required />
<input type="email" name="email" placeholder="Email" required />
<select name="location">
  <option>San Jose</option>
  <option>Santa Clara</option>
  <!-- More options from data -->
</select>
<select name="careType">
  <option>Companion Care</option>
  <option>Personal Care Assistance</option>
  <!-- More options from data -->
</select>
<textarea name="message" placeholder="Tell us about your situation"></textarea>
```

#### 2. Form Submission Workflow

```
User fills form
     ↓
Client-side validation (HTML5 + JS)
     ↓
Submit button sends POST to `/api/request-care`
     ↓
Server validates all fields
     ↓
Resend API sends email to admin
     ↓
Response sent back to client
     ↓
Success/error message displayed
     ↓
Form reset (on success) or error message shown
```

#### 3. API Endpoint (`src/app/api/request-care/route.ts`)

**Responsibilities**:
- Validate form data
- Send email via Resend
- Return appropriate response

**Validation Logic**:
```typescript
if (!name || !phone || !email) {
  return NextResponse.json(
    { error: "Name, phone, and email are required." },
    { status: 400 }
  );
}
```

**Error Handling**:
- Network errors → User-friendly message
- Validation errors → 400 response
- Email errors → 400 with fallback message
- Server errors → 500 response

#### 4. User Feedback

**Success Message**:
```
✓ Thank you! Our care coordinator will contact you shortly.
```

**Error Messages**:
```
✗ Something went wrong.
✗ Network error. Please call us directly at 408-332-5843.
✗ Failed to send email. Please try calling us directly.
```

### Form Options (from `src/data/request-care.ts`)

**Care Type Options**:
- Companion Care
- Personal Care Assistance
- Dementia Care
- Respite Care
- Post-Hospital Recovery Care
- 24-Hour / Overnight Care
- Other / Not Sure Yet

**Location Options**:
- San Jose
- Santa Clara
- Sunnyvale
- Cupertino
- Milpitas
- Campbell
- Other / Outside Service Area

### Form Analytics (Future Enhancement)

Could add:
- Google Analytics conversion tracking
- Form submission metrics
- Drop-off point analysis
- A/B testing for CTA placement

---

## 🏗 Building & Deployment

### Local Build

```bash
npm run build
```

**Output**:
- Generates `.next` directory with:
  - Pre-rendered HTML pages
  - Compiled JavaScript bundles
  - Optimized images
  - Asset manifest

**Build Checklist**:
- ✅ No TypeScript errors
- ✅ No ESLint warnings (except necessary)
- ✅ All dynamic routes generated
- ✅ Images optimized
- ✅ CSS bundled and minified

### Local Production Server

After building:

```bash
npm start
```

Runs optimized production build locally (useful for testing before deployment).

### Deployment Options

#### Option 1: Vercel (Recommended)
1. Connect GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

**Environment Variables in Vercel**:
- Go to Project Settings → Environment Variables
- Add `RESEND_API_KEY`
- Add `RESEND_FROM_EMAIL`

#### Option 2: Netlify
1. Connect GitHub to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Set environment variables

#### Option 3: Self-Hosted (AWS, DigitalOcean, etc.)
1. Build locally: `npm run build`
2. Deploy `.next` directory to server
3. Install Node.js on server
4. Set environment variables
5. Run: `npm start`

### Domain Configuration

1. Purchase domain
2. Point DNS to hosting provider
3. Set up SSL/HTTPS certificate
4. Update `metadataBase` in `layout.tsx` to domain URL

### Pre-Deployment Checklist

- [ ] Environment variables set in production
- [ ] All pages tested locally (`npm run build && npm start`)
- [ ] Mobile responsiveness checked
- [ ] Forms tested end-to-end
- [ ] Images optimized and loading correctly
- [ ] Meta tags verified with Open Graph debugger
- [ ] Performance checked with Lighthouse
- [ ] SEO audit completed
- [ ] 404 page working
- [ ] SSL certificate active

### Performance Optimization

**Already Implemented**:
- Image optimization (Next.js `<Image>` component)
- CSS minification (Tailwind)
- Code splitting (Next.js automatic)
- Tree-shaking (ES modules)

**Monitoring**:
- Vercel Analytics dashboard
- Google PageSpeed Insights
- Lighthouse audit
- WebVitals monitoring

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Issue: Port 3000 already in use
**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

#### Issue: Module not found error
**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: Tailwind CSS not applying
**Solution**:
1. Check that `globals.css` is imported in `layout.tsx`
2. Ensure file paths in `tailwind.config.js` are correct
3. Restart dev server

#### Issue: Images not loading
**Solution**:
1. Check image path is correct in `/public` directory
2. Verify filename spelling and case
3. Use Next.js `<Image>` component for optimization
4. Check browser console for 404 errors

#### Issue: Form not submitting
**Solution**:
1. Check console for JavaScript errors
2. Verify API endpoint is correct: `/api/request-care`
3. Check `.env.local` has `RESEND_API_KEY` and `RESEND_FROM_EMAIL`
4. Test form locally with mock API response

#### Issue: ESLint errors
**Solution**:
```bash
# Check what ESLint complains about
npm run lint

# Fix automatically if possible
npm run lint -- --fix
```

#### Issue: TypeScript compilation error
**Solution**:
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Fix import paths or type issues
```

#### Issue: Build fails
**Solution**:
1. Clear `.next` directory: `rm -rf .next`
2. Reinstall dependencies: `npm install`
3. Check for any broken imports
4. Verify all dynamic routes have data

### Debug Mode

**Enable Verbose Logging**:
```bash
# Development with verbose output
NODE_DEBUG=next npm run dev

# Build with verbose output
NODE_DEBUG=next npm run build
```

**Browser Console Debugging**:
- Press `F12` to open DevTools
- Check Console tab for errors
- Use Network tab to inspect API calls
- Use Elements tab to inspect HTML structure

### Performance Debugging

```bash
# Generate build analysis
npm run build -- --analyze

# Check page load metrics
# Use Lighthouse: F12 → Lighthouse tab
# Use Web Vitals in Google Analytics
```

---

## 👥 Contributing Guidelines

### Development Workflow

1. **Create Branch**:
   ```bash
   git checkout -b feature/description
   ```

2. **Make Changes**:
   - Edit components, pages, or data files
   - Follow existing code style
   - Add comments for complex logic

3. **Test Locally**:
   ```bash
   npm run dev
   # Test in browser at http://localhost:3000
   ```

4. **Check Linting**:
   ```bash
   npm run lint
   ```

5. **Commit Changes**:
   ```bash
   git add .
   git commit -m "feat: Add new feature"
   ```

6. **Push Branch**:
   ```bash
   git push origin feature/description
   ```

7. **Create Pull Request**: 
   - Describe changes
   - Reference any issues
   - Request review

### Code Style Guidelines

**TypeScript**:
- Use explicit type annotations
- Avoid `any` type
- Use interfaces for object shapes

**React Components**:
- Prefer functional components
- Use hooks for state management
- Keep components small and focused

**CSS/Tailwind**:
- Use Tailwind utilities over custom CSS
- Responsive: mobile-first approach
- Use CSS variables from theme

**File Naming**:
- Components: `PascalCase.tsx` (e.g., `Navbar.tsx`)
- Utilities: `camelCase.ts` (e.g., `helpers.ts`)
- Pages: lowercase (e.g., `page.tsx`)

### Commit Message Format

```
type: short description

Longer explanation if needed.
- Bullet points for changes
- Reference issue: Fixes #123
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting/styling
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Test additions

---

## 📄 License & Legal

**Project**: Glorious Home Care Assistance Website

**License**: [Check LICENSE file]

**Copyright**: © 2024-2025 Glorious Home Care Assistance, LLC

**California License Number**: 014700173

---

## 📞 Support & Contact

**For Development Questions**:
- File issues in GitHub repository
- Review code with team members

**For Business Questions**:
- Phone: 408-332-5843
- Text: 858-321-5077
- Email: admin@glorioushomecareca.com
- Website: https://www.glorioushomecareassistance.com

---

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Tools
- [ESLint Documentation](https://eslint.org)
- [Resend Documentation](https://resend.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

### Performance Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebVitals](https://web.dev/vitals/)

---

## ✅ Project Completion Checklist

- [x] Project overview documented
- [x] Technology stack explained
- [x] Architecture detailed
- [x] All UI features described
- [x] File structure mapped
- [x] 34+ pages documented
- [x] Components explained with props
- [x] Data architecture explained
- [x] API routes documented
- [x] Development setup guide
- [x] Environment variables documented
- [x] Styling system explained
- [x] Security features documented
- [x] SEO best practices documented
- [x] Dynamic routes explained
- [x] Forms workflow documented
- [x] Deployment guide provided
- [x] Troubleshooting guide included
- [x] Contributing guidelines provided

---

**Last Updated**: August 17, 2026

**Document Version**: 1.0 - Comprehensive

**Maintainer**: Development Team @ Glorious Home Care Assistance

---

### Quick Navigation

- [Back to Top](#glorious-home-care-assistance---comprehensive-project-documentation)
- [Table of Contents](#-table-of-contents)
- [Architecture](#-project-architecture)
- [Pages & Routes](#-pages--routes)
- [Components](#-components-overview)
- [Data Structure](#-data-architecture-local-headless-cms)
- [Development Setup](#-development-setup)
- [Deployment](#-building--deployment)

