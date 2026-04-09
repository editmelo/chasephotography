# Chase Portraits Photography Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modernized 5-page photography portfolio website for Chase Portraits Photography using Next.js App Router, Tailwind CSS, deployed on Vercel.

**Architecture:** Next.js App Router with static pages. Custom Tailwind theme for the warm/elegant palette. Google Fonts loaded via next/font. Lightbox built as a client component. Contact form uses a Server Action with Resend for email delivery. All images downloaded locally and served via next/image.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Resend (email), Vercel (deploy)

---

## File Structure

```
CPP Website/
├── public/
│   └── images/
│       ├── logo.png
│       ├── hero-1.jpg
│       ├── hero-2.jpg
│       ├── hero-3.jpg
│       ├── hero-4.jpg
│       ├── portrait-1.jpg
│       ├── wedding-1.jpg
│       ├── event-1.jpg
│       ├── gallery/
│       │   ├── portrait-*.jpg
│       │   ├── wedding-*.jpg
│       │   └── event-*.jpg
│       └── about-chase.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx          — Root layout: fonts, nav, footer
│   │   ├── page.tsx            — Homepage
│   │   ├── globals.css         — Tailwind imports + custom styles
│   │   ├── services/
│   │   │   └── page.tsx        — Services & pricing page
│   │   ├── portfolio/
│   │   │   └── page.tsx        — Portfolio gallery page
│   │   ├── about/
│   │   │   └── page.tsx        — About Chase page
│   │   └── contact/
│   │       └── page.tsx        — Contact form + FAQ page
│   ├── components/
│   │   ├── navigation.tsx      — Sticky nav with mobile hamburger
│   │   ├── footer.tsx          — Site footer
│   │   ├── hero-slideshow.tsx  — Auto-rotating hero with accent bar
│   │   ├── page-banner.tsx     — Dark gradient banner for inner pages
│   │   ├── section-heading.tsx — Reusable label + script heading
│   │   ├── service-card.tsx    — Homepage service preview card
│   │   ├── pricing-card.tsx    — Services page pricing card
│   │   ├── testimonial-card.tsx— Review card with stars
│   │   ├── cta-banner.tsx      — Dark CTA section
│   │   ├── portfolio-grid.tsx  — Filterable image grid
│   │   ├── lightbox.tsx        — Fullscreen image viewer
│   │   ├── contact-form.tsx    — Inquiry form with validation
│   │   └── faq-accordion.tsx   — Expandable FAQ items
│   └── lib/
│       ├── data.ts             — All site content data
│       └── actions.ts          — Server action for contact form
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`, `src/app/globals.css`, `src/app/layout.tsx`
- Copy: `CPP Logo.png` → `public/images/logo.png`

- [ ] **Step 1: Initialize Next.js project**

Run from the `CPP Website` directory:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

If prompted about overwriting, accept. This creates the full project scaffold.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install resend
```

- [ ] **Step 3: Copy the logo file**

```bash
mkdir -p public/images
cp "../CPP Logo.png" public/images/logo.png
```

- [ ] **Step 4: Configure Tailwind with custom theme**

Replace `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf6f1",
        tan: "#f5ede4",
        "brown-dark": "#3d2b1f",
        "brown-mid": "#5a3a28",
        "brown-text": "#7a6555",
        "brown-muted": "#8a7262",
        "tan-muted": "#c4a882",
        orange: "#c77b3f",
        "orange-light": "#d4956b",
        "cream-light": "#f5ede4",
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 5: Set up globals.css**

Replace `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-cream text-brown-dark;
  }
}

@layer components {
  .section-label {
    @apply text-xs uppercase tracking-[3px] text-orange font-medium;
  }

  .btn-primary {
    @apply bg-orange text-white px-6 py-3 text-xs uppercase tracking-[2px] font-medium rounded-sm
      hover:bg-orange-light transition-colors duration-300;
  }

  .btn-outline {
    @apply border border-orange text-orange px-6 py-3 text-xs uppercase tracking-[2px] font-medium rounded-sm
      hover:bg-orange hover:text-white transition-colors duration-300;
  }
}
```

- [ ] **Step 6: Set up root layout with Google Fonts**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Alex_Brush, Lexend_Deca, Petit_Formal_Script } from "next/font/google";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const petitFormal = Petit_Formal_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-petit-formal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chase Portraits Photography | Nashville, TN",
  description:
    "Professional portrait, wedding, and event photography in Nashville, TN. Clean, crisp, vibrant imagery with genuine expressions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alexBrush.variable} ${lexendDeca.variable} ${petitFormal.variable}`}
    >
      <body className="font-[family-name:var(--font-lexend)] antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Set up next.config.ts for remote images**

Replace `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lirp.cdn-website.com",
      },
      {
        protocol: "https",
        hostname: "irp.cdn-website.com",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 8: Create placeholder homepage to verify setup**

Replace `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-alex-brush)] text-5xl text-orange">
          Chase Portraits
        </h1>
        <p className="text-brown-text mt-2 uppercase tracking-[3px] text-sm">
          Photography
        </p>
      </div>
    </main>
  );
}
```

- [ ] **Step 9: Verify the dev server starts**

```bash
npm run dev
```

Expected: Server starts on localhost:3000. Page shows "Chase Portraits" in script font with orange color, "PHOTOGRAPHY" underneath in brown.

- [ ] **Step 10: Commit scaffolding**

```bash
git init
echo "node_modules\n.next\n.env.local\n.superpowers" > .gitignore
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind theme and fonts"
```

---

### Task 2: Download Images from Current Site

**Files:**
- Create: `public/images/hero-1.jpg` through `hero-4.jpg`, `public/images/portrait-1.jpg`, `public/images/wedding-1.jpg`, `public/images/event-1.jpg`, plus gallery images

- [ ] **Step 1: Download hero and service images**

```bash
cd public/images

# Hero / service images from current site
curl -L -o hero-1.jpg "https://lirp.cdn-website.com/fe9bd626/dms3rep/multi/opt/IMG_2816-1920w.jpg"
curl -L -o hero-2.jpg "https://lirp.cdn-website.com/fe9bd626/dms3rep/multi/opt/IMG_9364-Edit-1920w.jpg"
curl -L -o hero-3.jpg "https://lirp.cdn-website.com/fe9bd626/dms3rep/multi/opt/IMG_9494-1920w.jpg"
curl -L -o hero-4.jpg "https://lirp.cdn-website.com/fe9bd626/dms3rep/multi/opt/IMG_3766-1920w.jpg"

# Additional images
curl -L -o portrait-1.jpg "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_9328.jpg"
curl -L -o wedding-1.jpg "https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_8218.jpg"

cd ../..
```

- [ ] **Step 2: Create gallery directory and use images for portfolio**

```bash
mkdir -p public/images/gallery
cp public/images/hero-1.jpg public/images/gallery/portrait-1.jpg
cp public/images/hero-2.jpg public/images/gallery/wedding-1.jpg
cp public/images/hero-3.jpg public/images/gallery/event-1.jpg
cp public/images/hero-4.jpg public/images/gallery/portrait-2.jpg
cp public/images/portrait-1.jpg public/images/gallery/portrait-3.jpg
cp public/images/wedding-1.jpg public/images/gallery/wedding-2.jpg
```

Note: These are the images available from the current site. Additional gallery images can be added later by the client.

- [ ] **Step 3: Commit images**

```bash
git add public/images/
git commit -m "feat: download portfolio images from current site"
```

---

### Task 3: Site Data + Shared Components (Navigation, Footer, Section Heading, Page Banner, CTA Banner)

**Files:**
- Create: `src/lib/data.ts`, `src/components/navigation.tsx`, `src/components/footer.tsx`, `src/components/section-heading.tsx`, `src/components/page-banner.tsx`, `src/components/cta-banner.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create site data file**

Create `src/lib/data.ts`:

```ts
export const siteConfig = {
  name: "Chase Portraits Photography",
  shortName: "Chase Portraits",
  phone: "615-933-1169",
  email: "chaseportraits@gmail.com",
  location: "LaVergne, TN 37086",
  social: {
    facebook: "https://facebook.com/chaseportraits",
    instagram: "https://instagram.com/chase_portraits",
  },
  hours: [
    { days: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { days: "Saturday", time: "9:00 AM - 8:00 PM" },
    { days: "Sunday", time: "12:00 PM - 6:00 PM" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    name: "Lastasha Mcbee",
    quote:
      "Chase is a fantastic photographer. I highly recommend Chase Portraits.",
    rating: 5,
  },
  {
    name: "Elizabeth Ham",
    quote: "Personable and fun to work with",
    rating: 5,
  },
  {
    name: "Krystle",
    quote:
      "Provided wonderful experience! Professional yet relaxed. Amazing shots.",
    rating: 5,
  },
];

export const portraitPackages = [
  {
    name: "Basic",
    price: 300,
    duration: "1 hour",
    images: 8,
    outfits: "1 outfit",
    popular: false,
    features: [
      "1 hour photo session",
      "8 fully retouched images",
      "Online gallery with downloads",
      "Print release",
      "Mobile photo app",
    ],
  },
  {
    name: "Deluxe",
    price: 375,
    duration: "1.5 hours",
    images: 16,
    outfits: "2 outfits",
    popular: true,
    features: [
      "1.5 hour photo session",
      "16 fully retouched images",
      "Online gallery with downloads",
      "Print release",
      "Mobile photo app",
    ],
  },
  {
    name: "Premium",
    price: 550,
    duration: "2 hours",
    images: 25,
    outfits: "Unlimited outfits",
    popular: false,
    features: [
      "2 hour photo session",
      "25 fully retouched images",
      "Online gallery with downloads",
      "Print release",
      "Mobile photo app",
    ],
  },
];

export const weddingPackages = [
  {
    name: "Intimate Ceremony",
    price: 750,
    duration: "2-3 hours",
    description: "Ceremony and couple portraits",
    features: ["2-3 hours coverage", "Ceremony + couple portraits", "Digital gallery"],
  },
  {
    name: "Modern Wedding",
    price: 2000,
    duration: "5 hours",
    description: "Ceremony through portraits",
    features: [
      "5 hours coverage",
      "Ceremony + portraits",
      "Reception details",
      "Digital gallery",
    ],
  },
  {
    name: "Elegant Wedding",
    price: 2500,
    duration: "8 hours",
    description: "Full ceremony and reception",
    features: [
      "8 hours coverage",
      "Ceremony + portraits",
      "Reception details + coverage",
      "Digital gallery",
    ],
  },
  {
    name: "Luxury Wedding",
    price: 3500,
    duration: "10 hours",
    description: "Complete coverage with album",
    features: [
      "10 hours coverage",
      "Ceremony + portraits",
      "Reception details + full coverage",
      "Complimentary 10x10 album",
      "Digital gallery",
    ],
  },
];

export const eventInfo = {
  rate: "$200/hour",
  minimumHours: 2,
  types: [
    "Birthdays",
    "Anniversaries",
    "Church services",
    "Graduations",
    "Ceremonies",
    "Parties",
    "Shows",
  ],
  addOns: [
    { name: "Rush delivery", price: "$75-$100" },
    { name: "Extended hours", price: "$150/hour" },
  ],
};

export const faqItems = [
  {
    question: "What are your business hours?",
    answer:
      "We are available Monday through Friday from 9:00 AM to 6:00 PM, Saturdays from 9:00 AM to 8:00 PM, and Sundays from 12:00 PM to 6:00 PM.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Browse our services, contact us to discuss your preferences, select a location and date, and choose a package. A 50% non-refundable deposit is required to secure your booking.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, and debit/credit cards via invoice.",
  },
  {
    question: "How many photos will I receive?",
    answer:
      "The number of edited images depends on your package, ranging from 8 to 25+ retouched images for portrait sessions, and 40-60 edited images per hour for events.",
  },
  {
    question: "Do you provide raw files?",
    answer:
      "No, we only deliver professionally edited images. Raw files are not included in any package.",
  },
  {
    question: "What is your cancellation/refund policy?",
    answer:
      "The 50% deposit is non-refundable. Rescheduling is available with at least 48 hours notice.",
  },
];

export type PortfolioCategory = "all" | "portraits" | "weddings" | "events";

export const portfolioImages = [
  { src: "/images/gallery/portrait-1.jpg", alt: "Portrait session in Nashville", category: "portraits" as const },
  { src: "/images/gallery/portrait-2.jpg", alt: "Outdoor portrait photography", category: "portraits" as const },
  { src: "/images/gallery/portrait-3.jpg", alt: "Studio portrait session", category: "portraits" as const },
  { src: "/images/gallery/wedding-1.jpg", alt: "Wedding ceremony photography", category: "weddings" as const },
  { src: "/images/gallery/wedding-2.jpg", alt: "Wedding couple portraits", category: "weddings" as const },
  { src: "/images/gallery/event-1.jpg", alt: "Event photography coverage", category: "events" as const },
];
```

- [ ] **Step 2: Create section heading component**

Create `src/components/section-heading.tsx`:

```tsx
interface SectionHeadingProps {
  label: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="section-label">{label}</p>
      <h2
        className={`font-[family-name:var(--font-alex-brush)] text-4xl mt-2 ${
          light ? "text-cream-light" : "text-brown-dark"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
```

- [ ] **Step 3: Create page banner component**

Create `src/components/page-banner.tsx`:

```tsx
interface PageBannerProps {
  title: string;
  subtitle: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div className="bg-gradient-to-br from-brown-dark to-brown-mid py-20 text-center">
      <h1 className="font-[family-name:var(--font-alex-brush)] text-5xl text-cream-light">
        {title}
      </h1>
      <p className="section-label mt-3 text-orange-light">{subtitle}</p>
    </div>
  );
}
```

- [ ] **Step 4: Create CTA banner component**

Create `src/components/cta-banner.tsx`:

```tsx
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-brown-dark py-20 text-center">
      <h2 className="font-[family-name:var(--font-alex-brush)] text-4xl text-cream-light">
        Let&apos;s Create Your Memories Together
      </h2>
      <p className="text-tan-muted mt-3 text-sm tracking-wide">
        Book your session today and let&apos;s capture something beautiful
      </p>
      <Link href="/contact" className="btn-primary inline-block mt-8">
        Get in Touch
      </Link>
    </section>
  );
}
```

- [ ] **Step 5: Create navigation component**

Create `src/components/navigation.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navBg =
    isHome && !isScrolled
      ? "bg-transparent"
      : "bg-cream/95 backdrop-blur-md shadow-sm";

  const textColor =
    isHome && !isScrolled ? "text-white" : "text-brown-dark";

  const logoFilter =
    isHome && !isScrolled ? "brightness-0 invert" : "";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1">
          <Image
            src="/images/logo.png"
            alt="Chase Portraits Photography"
            width={200}
            height={50}
            className={`h-10 w-auto transition-all duration-300 ${logoFilter}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[2px] transition-colors duration-300 ${
                pathname === link.href
                  ? "text-orange border-b border-orange pb-1"
                  : `${textColor} hover:text-orange`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`md:hidden flex flex-col gap-1.5 ${textColor}`}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              isMobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              isMobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream ${
          isMobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[2px] ${
                pathname === link.href
                  ? "text-orange"
                  : "text-brown-dark hover:text-orange"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 6: Create footer component**

Create `src/components/footer.tsx`:

```tsx
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-orange/30">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-brown-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6 text-sm text-brown-text">
          <Link
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors"
          >
            Facebook
          </Link>
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors"
          >
            Instagram
          </Link>
          <Link
            href={`tel:${siteConfig.phone}`}
            className="hover:text-orange transition-colors"
          >
            {siteConfig.phone}
          </Link>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 7: Add Navigation and Footer to root layout**

Update `src/app/layout.tsx` — add imports and wrap children:

```tsx
import type { Metadata } from "next";
import { Alex_Brush, Lexend_Deca, Petit_Formal_Script } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const petitFormal = Petit_Formal_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-petit-formal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chase Portraits Photography | Nashville, TN",
  description:
    "Professional portrait, wedding, and event photography in Nashville, TN. Clean, crisp, vibrant imagery with genuine expressions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alexBrush.variable} ${lexendDeca.variable} ${petitFormal.variable}`}
    >
      <body className="font-[family-name:var(--font-lexend)] antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 8: Verify nav and footer render**

```bash
npm run dev
```

Expected: Page shows nav bar at top with logo + links, placeholder content in middle, footer at bottom with copyright and social links.

- [ ] **Step 9: Commit shared components**

```bash
git add src/lib/data.ts src/components/ src/app/layout.tsx
git commit -m "feat: add navigation, footer, and shared components"
```

---

### Task 4: Homepage — Hero Slideshow

**Files:**
- Create: `src/components/hero-slideshow.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create hero slideshow component**

Create `src/components/hero-slideshow.tsx`:

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Portrait photography by Chase Portraits" },
  { src: "/images/hero-2.jpg", alt: "Wedding photography in Nashville" },
  { src: "/images/hero-3.jpg", alt: "Event photography coverage" },
  { src: "/images/hero-4.jpg", alt: "Professional photography session" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background images */}
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-6">
            {/* Vertical accent bar */}
            <div className="w-0.5 h-32 bg-orange hidden sm:block" />

            <div>
              <p className="section-label text-orange-light">Nashville, TN</p>
              <h1 className="font-[family-name:var(--font-alex-brush)] text-5xl sm:text-6xl lg:text-7xl text-cream-light mt-3 leading-tight">
                Capturing
                <br />
                Your Story
              </h1>
              <p className="text-cream-light/80 mt-4 max-w-md text-base sm:text-lg">
                Nearly a decade of magazine-worthy photography
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/contact" className="btn-primary">
                  Book Now
                </Link>
                <Link href="/portfolio" className="btn-outline border-cream-light text-cream-light hover:bg-cream-light hover:text-brown-dark">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === current ? "bg-orange" : "bg-orange/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add hero to homepage**

Replace `src/app/page.tsx`:

```tsx
import HeroSlideshow from "@/components/hero-slideshow";

export default function Home() {
  return (
    <>
      <HeroSlideshow />
    </>
  );
}
```

- [ ] **Step 3: Verify hero renders**

```bash
npm run dev
```

Expected: Full-screen hero with background image slideshow, vertical orange accent bar, "Capturing Your Story" heading, two CTA buttons, slideshow dots at bottom. Images crossfade every 5 seconds.

- [ ] **Step 4: Commit hero**

```bash
git add src/components/hero-slideshow.tsx src/app/page.tsx
git commit -m "feat: add hero slideshow with auto-rotation and accent bar"
```

---

### Task 5: Homepage — Remaining Sections

**Files:**
- Create: `src/components/service-card.tsx`, `src/components/testimonial-card.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create service card component**

Create `src/components/service-card.tsx`:

```tsx
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  startingPrice: string;
  alt: string;
}

export default function ServiceCard({
  image,
  title,
  startingPrice,
  alt,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-medium text-brown-dark">{title}</h3>
        <p className="text-brown-text text-sm mt-1">Starting at {startingPrice}</p>
        <Link
          href="/services"
          className="text-orange text-xs uppercase tracking-[2px] mt-3 inline-block hover:text-orange-light transition-colors"
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create testimonial card component**

Create `src/components/testimonial-card.tsx`:

```tsx
interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      <div className="text-orange text-lg">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
      <p className="text-brown-text text-sm mt-3 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-brown-dark font-medium text-sm mt-4">&mdash; {name}</p>
    </div>
  );
}
```

- [ ] **Step 3: Build complete homepage**

Replace `src/app/page.tsx`:

```tsx
import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/hero-slideshow";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import CtaBanner from "@/components/cta-banner";
import { testimonials } from "@/lib/data";

const services = [
  {
    image: "/images/hero-1.jpg",
    title: "Portraits",
    startingPrice: "$300",
    alt: "Portrait photography in Nashville",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Weddings",
    startingPrice: "$750",
    alt: "Wedding photography coverage",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Events",
    startingPrice: "$200/hr",
    alt: "Event photography in Nashville",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* Services Preview */}
      <section className="bg-tan py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="What We Offer" title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[450px] rounded-md overflow-hidden">
              <Image
                src="/images/portrait-1.jpg"
                alt="Maurice Chase - Nashville photographer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                label="Meet the Photographer"
                title="About Chase"
                centered={false}
              />
              <p className="text-brown-text mt-6 leading-relaxed">
                Maurice &ldquo;Chase&rdquo; is a versatile portrait, event, and
                fashion photographer in Nashville, TN with nearly a decade of
                experience. His style emphasizes clean, crisp, vibrant imagery
                with relaxed, posed-candid moments and genuine expressions.
              </p>
              <Link
                href="/about"
                className="text-orange text-xs uppercase tracking-[2px] mt-6 inline-block hover:text-orange-light transition-colors"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-tan py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Client Love" title="What They Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
```

- [ ] **Step 4: Verify complete homepage**

```bash
npm run dev
```

Expected: Full homepage with hero slideshow, services cards, about preview with image, testimonials, and CTA banner. All sections use the warm/elegant color scheme.

- [ ] **Step 5: Commit homepage**

```bash
git add src/components/service-card.tsx src/components/testimonial-card.tsx src/app/page.tsx
git commit -m "feat: complete homepage with services, about, testimonials, and CTA"
```

---

### Task 6: Services Page

**Files:**
- Create: `src/components/pricing-card.tsx`, `src/app/services/page.tsx`

- [ ] **Step 1: Create pricing card component**

Create `src/components/pricing-card.tsx`:

```tsx
interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  name,
  price,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-md overflow-hidden ${
        popular
          ? "border-t-4 border-orange shadow-lg scale-[1.02]"
          : "border-t-2 border-orange/30 shadow-sm"
      }`}
    >
      <div className="p-6 text-center">
        {popular && (
          <span className="inline-block bg-orange text-white text-[10px] uppercase tracking-[1px] px-3 py-1 rounded-full mb-3">
            Popular
          </span>
        )}
        <p className="section-label">{name}</p>
        <p className="text-4xl font-semibold text-brown-dark mt-2">
          ${price.toLocaleString()}
        </p>
        <ul className="mt-6 space-y-3 text-left">
          {features.map((feature) => (
            <li
              key={feature}
              className="text-brown-text text-sm flex items-start gap-2"
            >
              <span className="text-orange mt-0.5">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create services page**

Create `src/app/services/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import SectionHeading from "@/components/section-heading";
import PricingCard from "@/components/pricing-card";
import CtaBanner from "@/components/cta-banner";
import { portraitPackages, weddingPackages, eventInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Pricing | Chase Portraits Photography",
  description:
    "Portrait, wedding, and event photography packages in Nashville, TN. Transparent pricing starting at $200/hr.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" subtitle="Packages & Pricing" />

      {/* Portrait Photography */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-orange" />
            <p className="section-label">Portrait Photography</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portraitPackages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular}
              />
            ))}
          </div>

          <p className="text-center text-brown-text text-sm mt-8">
            50% deposit required at booking. Turnaround time: 10-14 days for
            final gallery.
          </p>
        </div>
      </section>

      {/* Wedding Photography */}
      <section className="bg-tan py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-orange" />
            <p className="section-label">Wedding Photography</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {weddingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-md p-6 shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-brown-dark">
                      {pkg.name}
                    </h3>
                    <p className="text-brown-text text-sm mt-1">
                      {pkg.duration}
                    </p>
                  </div>
                  <p className="text-2xl font-semibold text-orange">
                    ${pkg.price.toLocaleString()}
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-brown-text text-sm flex items-start gap-2"
                    >
                      <span className="text-orange mt-0.5">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Photography */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-orange" />
            <p className="section-label">Event Photography</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-3xl font-semibold text-brown-dark">
                {eventInfo.rate}
              </p>
              <p className="text-brown-text mt-2">
                Minimum {eventInfo.minimumHours} hours coverage
              </p>
              <p className="text-brown-text mt-4 leading-relaxed">
                Capturing the essence of your special events with candid shots
                and posed portraits to create a comprehensive visual story.
              </p>
              <p className="text-brown-text mt-4">
                Half-day and full-day event packages available.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-brown-dark uppercase tracking-[2px] mb-4">
                Event Types
              </h3>
              <div className="flex flex-wrap gap-2">
                {eventInfo.types.map((type) => (
                  <span
                    key={type}
                    className="bg-tan px-3 py-1.5 rounded-full text-sm text-brown-text"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-medium text-brown-dark uppercase tracking-[2px] mt-8 mb-4">
                Add-Ons
              </h3>
              <ul className="space-y-2">
                {eventInfo.addOns.map((addon) => (
                  <li
                    key={addon.name}
                    className="flex justify-between text-sm text-brown-text"
                  >
                    <span>{addon.name}</span>
                    <span className="text-orange font-medium">
                      {addon.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-primary">
              Ready to Book? Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
```

- [ ] **Step 3: Verify services page**

```bash
npm run dev
```

Navigate to `/services`. Expected: Page banner, 3 portrait pricing cards with Popular badge on Deluxe, 4 wedding packages in 2x2 grid, event photography section with rate/types/add-ons, CTA at bottom.

- [ ] **Step 4: Commit services page**

```bash
git add src/components/pricing-card.tsx src/app/services/
git commit -m "feat: add services page with portrait, wedding, and event pricing"
```

---

### Task 7: Portfolio Page with Lightbox

**Files:**
- Create: `src/components/portfolio-grid.tsx`, `src/components/lightbox.tsx`, `src/app/portfolio/page.tsx`

- [ ] **Step 1: Create lightbox component**

Create `src/components/lightbox.tsx`:

```tsx
"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl z-10"
        aria-label="Close lightbox"
      >
        &times;
      </button>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 p-2"
        aria-label="Previous image"
      >
        &#8249;
      </button>

      {/* Image */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 p-2"
        aria-label="Next image"
      >
        &#8250;
      </button>

      {/* Counter */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Create portfolio grid component**

Create `src/components/portfolio-grid.tsx`:

```tsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Lightbox from "@/components/lightbox";
import { portfolioImages, type PortfolioCategory } from "@/lib/data";

const categories: { label: string; value: PortfolioCategory }[] = [
  { label: "All", value: "all" },
  { label: "Portraits", value: "portraits" },
  { label: "Weddings", value: "weddings" },
  { label: "Events", value: "events" },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? portfolioImages
        : portfolioImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      {/* Filter tabs */}
      <div className="flex justify-center gap-6 py-6 border-b border-orange/15">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`text-xs uppercase tracking-[2px] pb-2 transition-colors duration-300 ${
              activeCategory === cat.value
                ? "text-orange border-b border-orange"
                : "text-brown-text hover:text-orange"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 max-w-7xl mx-auto">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-md group cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-xs uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev + 1) % filtered.length : 0
            )
          }
        />
      )}
    </>
  );
}
```

- [ ] **Step 3: Create portfolio page**

Create `src/app/portfolio/page.tsx`:

```tsx
import type { Metadata } from "next";
import PageBanner from "@/components/page-banner";
import PortfolioGrid from "@/components/portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio | Chase Portraits Photography",
  description:
    "Browse our portfolio of portrait, wedding, and event photography in Nashville, TN.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageBanner title="Portfolio" subtitle="Our Recent Work" />
      <PortfolioGrid />
    </>
  );
}
```

- [ ] **Step 4: Verify portfolio and lightbox**

```bash
npm run dev
```

Navigate to `/portfolio`. Expected: Page banner, filter tabs (All/Portraits/Weddings/Events), image grid with hover effects, clicking an image opens lightbox with navigation arrows, keyboard nav works (arrow keys, Escape).

- [ ] **Step 5: Commit portfolio page**

```bash
git add src/components/lightbox.tsx src/components/portfolio-grid.tsx src/app/portfolio/
git commit -m "feat: add portfolio page with filterable grid and lightbox"
```

---

### Task 8: About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create about page**

Create `src/app/about/page.tsx`:

```tsx
import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/page-banner";
import CtaBanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About Chase | Chase Portraits Photography",
  description:
    "Meet Maurice 'Chase' — a versatile portrait, event, and fashion photographer in Nashville, TN with nearly a decade of experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Chase" subtitle="The Photographer" />

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[500px] rounded-md overflow-hidden">
              <Image
                src="/images/portrait-1.jpg"
                alt="Maurice Chase — Nashville photographer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-alex-brush)] text-3xl text-brown-dark">
                Meet Maurice &ldquo;Chase&rdquo;
              </h2>
              <p className="text-brown-text mt-6 leading-relaxed">
                Maurice &ldquo;Chase&rdquo; is a versatile portrait, event, and
                fashion photographer in Nashville, TN with nearly a decade of
                experience. His style emphasizes clean, crisp, vibrant imagery
                with relaxed, posed-candid moments and genuine expressions.
              </p>
              <p className="text-brown-text mt-4 leading-relaxed">
                Work has been published in various magazines, and his passion for
                capturing authentic moments shines through in every session.
                Whether it&apos;s a portrait, wedding, or event, Chase brings a
                relaxed energy that helps clients feel comfortable and confident
                in front of the camera.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mt-8">
                <div>
                  <p className="text-3xl font-semibold text-orange">10+</p>
                  <p className="text-xs uppercase tracking-[2px] text-brown-text mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-orange">500+</p>
                  <p className="text-xs uppercase tracking-[2px] text-brown-text mt-1">
                    Sessions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="bg-tan py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-[family-name:var(--font-alex-brush)] text-2xl text-brown-dark italic">
            &ldquo;The thing that&apos;s fascinating about portraiture is that
            nobody is alike.&rdquo;
          </p>
          <p className="section-label mt-4">&mdash; Imogen Cunningham</p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
```

- [ ] **Step 2: Verify about page**

```bash
npm run dev
```

Navigate to `/about`. Expected: Page banner, split layout with photo and bio, stats counters (10+ Years, 500+ Sessions), Imogen Cunningham quote block, CTA banner.

- [ ] **Step 3: Commit about page**

```bash
git add src/app/about/
git commit -m "feat: add about page with bio, stats, and quote"
```

---

### Task 9: Contact Page — Form, FAQ, Server Action

**Files:**
- Create: `src/components/contact-form.tsx`, `src/components/faq-accordion.tsx`, `src/lib/actions.ts`, `src/app/contact/page.tsx`

- [ ] **Step 1: Create contact form server action**

Create `src/lib/actions.ts`:

```ts
"use server";

export type FormState = {
  success: boolean;
  message: string;
} | null;

export async function submitInquiry(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const date = formData.get("date") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Chase Portraits <onboarding@resend.dev>",
        to: "chaseportraits@gmail.com",
        subject: `New Inquiry from ${name} — ${service || "General"}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          `Service: ${service || "Not specified"}`,
          `Preferred Date: ${date || "Not specified"}`,
          `\nMessage:\n${message}`,
        ].join("\n"),
      });
    } else {
      // Log to console in development when no API key is set
      console.log("Contact form submission:", {
        name,
        email,
        phone,
        service,
        date,
        message,
      });
    }

    return {
      success: true,
      message: "Thank you! Your inquiry has been sent. We'll be in touch soon.",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    };
  }
}
```

- [ ] **Step 2: Create contact form component**

Create `src/components/contact-form.tsx`:

```tsx
"use client";

import { useActionState } from "react";
import { submitInquiry, type FormState } from "@/lib/actions";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitInquiry,
    null
  );

  return (
    <form action={formAction} className="space-y-5">
      {state && (
        <div
          className={`p-4 rounded-md text-sm ${
            state.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm text-brown-text mb-1">
          Name <span className="text-orange">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-brown-text mb-1">
          Email <span className="text-orange">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-brown-text mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
          placeholder="(555) 555-5555"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm text-brown-text mb-1">
          Service Type
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
        >
          <option value="">Select a service</option>
          <option value="Portrait Session">Portrait Session</option>
          <option value="Wedding">Wedding</option>
          <option value="Event">Event</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm text-brown-text mb-1">
          Preferred Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-brown-text mb-1">
          Message <span className="text-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-white border border-orange/20 rounded-md px-4 py-3 text-brown-dark text-sm focus:outline-none focus:border-orange transition-colors resize-none"
          placeholder="Tell us about your vision..."
        />
      </div>

      <button type="submit" disabled={isPending} className="btn-primary w-full">
        {isPending ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
```

- [ ] **Step 3: Create FAQ accordion component**

Create `src/components/faq-accordion.tsx`:

```tsx
"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div key={i} className="bg-white rounded-md overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center px-5 py-4 text-left"
          >
            <span className="text-sm text-brown-dark font-medium">
              {item.question}
            </span>
            <span
              className={`text-orange text-xl transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-40 pb-4" : "max-h-0"
            }`}
          >
            <p className="px-5 text-sm text-brown-text leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create contact page**

Create `src/app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import ContactForm from "@/components/contact-form";
import FaqAccordion from "@/components/faq-accordion";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Chase Portraits Photography",
  description:
    "Book your photography session with Chase Portraits in Nashville, TN. Get in touch for portraits, weddings, and events.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Get in Touch" subtitle="Let's Create Together" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="bg-tan rounded-md p-8">
              <div className="space-y-8">
                <div>
                  <p className="section-label">Phone</p>
                  <Link
                    href={`tel:${siteConfig.phone}`}
                    className="text-brown-dark text-lg mt-2 block hover:text-orange transition-colors"
                  >
                    {siteConfig.phone}
                  </Link>
                </div>

                <div>
                  <p className="section-label">Email</p>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="text-brown-dark text-lg mt-2 block hover:text-orange transition-colors"
                  >
                    {siteConfig.email}
                  </Link>
                </div>

                <div>
                  <p className="section-label">Location</p>
                  <p className="text-brown-dark text-lg mt-2">
                    {siteConfig.location}
                  </p>
                </div>

                <div>
                  <p className="section-label">Hours</p>
                  <div className="mt-2 space-y-1">
                    {siteConfig.hours.map((h) => (
                      <p key={h.days} className="text-brown-dark text-sm">
                        <span className="font-medium">{h.days}:</span>{" "}
                        {h.time}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors text-sm"
                  >
                    f
                  </Link>
                  <Link
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors text-sm"
                  >
                    ig
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-tan py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label text-center mb-8">
            Frequently Asked Questions
          </p>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Verify contact page**

```bash
npm run dev
```

Navigate to `/contact`. Expected: Page banner, inquiry form with all fields and validation, contact info sidebar with phone/email/location/hours/social icons, FAQ accordion with expandable items. Form submission should log to console (no Resend API key in dev).

- [ ] **Step 6: Commit contact page**

```bash
git add src/lib/actions.ts src/components/contact-form.tsx src/components/faq-accordion.tsx src/app/contact/
git commit -m "feat: add contact page with inquiry form, FAQ accordion, and server action"
```

---

### Task 10: SEO — Metadata, Schema, Sitemap

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `next.config.ts`

- [ ] **Step 1: Add structured data (JSON-LD) to root layout**

Add a `<script>` tag with LocalBusiness schema to `src/app/layout.tsx`. Add this inside the `<body>` tag, before `<Navigation />`:

```tsx
{/* Add at the top of <body>, before <Navigation /> */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Chase Portraits Photography",
      image: "https://chaseportraits.com/images/logo.png",
      telephone: "615-933-1169",
      email: "chaseportraits@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "LaVergne",
        addressRegion: "TN",
        postalCode: "37086",
        addressCountry: "US",
      },
      url: "https://chaseportraits.com",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "12:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://facebook.com/chaseportraits",
        "https://instagram.com/chase_portraits",
      ],
    }),
  }}
/>
```

- [ ] **Step 2: Enhance root metadata with Open Graph**

Update the `metadata` export in `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: {
    default: "Chase Portraits Photography | Nashville, TN",
    template: "%s | Chase Portraits Photography",
  },
  description:
    "Professional portrait, wedding, and event photography in Nashville, TN. Clean, crisp, vibrant imagery with genuine expressions. Book your session today.",
  keywords: [
    "Nashville photographer",
    "portrait photography Nashville",
    "wedding photographer Nashville TN",
    "event photographer LaVergne TN",
    "Chase Portraits",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chaseportraits.com",
    siteName: "Chase Portraits Photography",
    title: "Chase Portraits Photography | Nashville, TN",
    description:
      "Professional portrait, wedding, and event photography in Nashville, TN.",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1920,
        height: 1080,
        alt: "Chase Portraits Photography",
      },
    ],
  },
  metadataBase: new URL("https://chaseportraits.com"),
};
```

- [ ] **Step 3: Add sitemap generation**

Create `src/app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chaseportraits.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
```

- [ ] **Step 4: Add robots.txt**

Create `src/app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://chaseportraits.com/sitemap.xml",
  };
}
```

- [ ] **Step 5: Verify build succeeds**

```bash
npm run build
```

Expected: Build succeeds with no errors. All pages are statically generated.

- [ ] **Step 6: Commit SEO additions**

```bash
git add src/app/layout.tsx src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: add SEO metadata, structured data, sitemap, and robots.txt"
```

---

### Task 11: Final Polish — Responsive + Build Verification

**Files:**
- Modify: `src/app/globals.css` (if needed for responsive fixes)
- Review all components for mobile responsiveness

- [ ] **Step 1: Verify all pages render correctly**

```bash
npm run dev
```

Manually check all pages at desktop, tablet (768px), and mobile (375px) widths:
- `/` — Hero slideshow, services, about, testimonials, CTA, footer
- `/services` — Pricing cards stack to single column on mobile
- `/portfolio` — Grid adjusts to 2 columns on tablet, 1 on mobile; lightbox works
- `/about` — Bio section stacks vertically on mobile
- `/contact` — Form and info sidebar stack on mobile; FAQ accordion works

- [ ] **Step 2: Run production build**

```bash
npm run build && npm run start
```

Expected: Build completes without errors. All pages accessible on localhost:3000.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete Chase Portraits Photography website"
```

- [ ] **Step 4: Verify ready for Vercel deployment**

The project is ready to deploy. To deploy:

```bash
npm i -g vercel
vercel
```

For the contact form to send emails in production, add the `RESEND_API_KEY` environment variable in Vercel:

```bash
vercel env add RESEND_API_KEY
```
