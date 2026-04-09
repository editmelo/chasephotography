# Chase Portraits Photography Website — Design Spec

## Overview

Modernized photography portfolio and services website for Chase Portraits Photography (Maurice "Chase"), a portrait, event, and wedding photographer based in Nashville/LaVergne, TN. Replaces the existing site at chaseportraits.com with a custom-designed Next.js application deployed on Vercel.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Deployment:** Vercel
- **Styling:** Tailwind CSS
- **Fonts:** Alex Brush (script headings), Petite Formal Script (accent text), Lexend Deca (body)
- **Images:** Next.js Image component with optimization, pulled from current site
- **Form handling:** Next.js Server Action + Resend API for sending inquiry emails to chaseportraits@gmail.com
- **Gallery:** Lightbox overlay with navigation

## Design Direction: Warm & Elegant

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#faf6f1` | Primary background |
| `tan` | `#f5ede4` | Alternating section background |
| `brown-dark` | `#3d2b1f` | Primary text, dark sections |
| `brown-mid` | `#5a3a28` | Dark gradient secondary |
| `brown-text` | `#7a6555` | Secondary/body text |
| `brown-muted` | `#8a7262` | Muted text |
| `tan-muted` | `#c4a882` | Placeholder/subtle text |
| `orange` | `#c77b3f` | Brand accent, CTAs, links, highlights |
| `orange-light` | `#d4956b` | Hover states, subtle accent |
| `cream-light` | `#f5ede4` | Text on dark backgrounds |
| `white` | `#ffffff` | Cards, form inputs |

### Typography

| Element | Font | Weight | Style |
|---------|------|--------|-------|
| Logo "Chase Portraits" | Alex Brush | 400 | Script, orange (#c77b3f) |
| Logo "PHOTOGRAPHY" | Lexend Deca | 300 | Uppercase, letter-spacing 3px, gray |
| Section script headings | Alex Brush | 400 | Large, dark brown |
| Accent labels | Petite Formal Script | 400 | Small, uppercase, orange, letter-spacing 3-4px |
| Body text | Lexend Deca | 300-400 | 16px base, brown-text |
| Nav links | Lexend Deca | 400 | Uppercase, letter-spacing 2px, small |
| Buttons | Lexend Deca | 500 | Uppercase, letter-spacing 1-2px |

## Site Structure (5 pages)

### 1. Home (`/`)

**Hero Section — Image Slideshow + Side Accent**
- Auto-rotating background slideshow of Chase's best work (4-6 images, 5s interval, crossfade transition)
- Dark overlay for text readability
- Left-aligned content with vertical orange accent bar (2px wide)
- Location label: "Nashville, TN" (orange, uppercase, letterspaced)
- Script heading: "Capturing Your Story" (Alex Brush, cream text)
- Subtext: "Nearly a decade of magazine-worthy photography" (Lexend Deca)
- Two CTAs: "Book Now" (filled orange) and "Portfolio" (outlined orange)
- Slideshow dots at bottom center
- Navigation overlaid on hero (transparent background, white text)

**Services Preview Section** (tan background)
- Section label: "What We Offer" (orange uppercase)
- Script heading: "Our Services" (Alex Brush)
- 3 cards with image, service name, starting price, "Learn More" link
  - Portraits — Starting at $300
  - Weddings — Starting at $750
  - Events — Starting at $200/hr

**About Preview Section** (cream background)
- Split layout: Chase photo left, bio text right
- Script heading: "About Chase"
- Brief bio paragraph
- "Read More" link to About page

**Testimonials Section** (tan background)
- Section label: "Client Love"
- Script heading: "What They Say"
- 3 review cards with star ratings, quote, reviewer name
  - Lastasha Mcbee: "Chase is a fantastic photographer. I highly recommend Chase Portraits."
  - Elizabeth Ham: "Personable and fun to work with"
  - Krystle: "Provided wonderful experience! Professional yet relaxed. Amazing shots."

**CTA Banner** (dark brown background)
- Script heading: "Let's Create Your Memories Together" (cream text)
- Subtext: "Book your session today and let's capture something beautiful"
- CTA button: "Get in Touch" (filled orange)

**Footer**
- Copyright, social links (Facebook, Instagram), phone, email
- Cream background with orange accent border-top

### 2. Services (`/services`)

**Page Banner** — Dark brown gradient, script heading "Our Services", subtitle "Packages & Pricing"

**Portrait Photography Section**
- Section divider: horizontal orange line + label
- 3 pricing cards in a row:
  - **Basic** — $300 / 1 hour / 8 retouched images / 1 outfit
  - **Deluxe** — $375 / 1.5 hours / 16 retouched images / 2 outfits (highlighted as "Popular" with orange badge and elevated shadow)
  - **Premium** — $550 / 2 hours / 25 retouched images / Unlimited outfits
- Each card: white background, orange top border (thicker on Popular), price large, features list, subtle shadow
- Note: "50% deposit required at booking. Turnaround: 10-14 days."

**Wedding Photography Section**
- 4 packages in 2x2 grid:
  - **Intimate Ceremony** — $750 / 2-3 hours / Ceremony + couple portraits
  - **Modern Wedding** — $2,000 / 5 hours
  - **Elegant Wedding** — $2,500 / 8 hours
  - **Luxury Wedding** — $3,500 / 10 hours / Complimentary 10x10 album
- Expandable details for each package

**Event Photography Section**
- Starting rate: $200/hour
- Event types: Birthdays, anniversaries, church services, graduations, ceremonies, parties, shows
- Half-day and full-day packages available
- Add-ons: Rush delivery ($75-$100), Extended hours ($150/hour)

**CTA** — "Ready to book? Contact us" linking to Contact page

### 3. Portfolio (`/portfolio`)

**Page Banner** — Dark brown gradient, script heading "Portfolio", subtitle "Our Recent Work"

**Filter Tabs** — All / Portraits / Weddings / Events (orange active state with underline)

**Image Grid**
- Responsive grid: 3 columns desktop, 2 columns tablet, 1 column mobile
- Images pulled from current site (portrait, wedding, event galleries)
- Hover effect: subtle zoom + dark overlay with category label
- Click: opens lightbox overlay

**Lightbox**
- Full-screen dark overlay
- Large centered image
- Left/right navigation arrows
- Close button (X)
- Keyboard navigation (arrow keys, Escape to close)
- Swipe support on mobile

### 4. About (`/about`)

**Page Banner** — Dark brown gradient, script heading "About Chase", subtitle "The Photographer"

**Bio Section** — Split layout
- Left: Photo of Chase
- Right: Full bio text
  - "Maurice 'Chase' is a versatile portrait, event, and fashion photographer in Nashville, TN with nearly a decade of experience. His style emphasizes clean, crisp, vibrant imagery with relaxed, posed-candid moments and genuine expressions. Work has been published in various magazines."
- Stats counters: "10+ Years" and "500+ Sessions" with orange numbers (stats are approximate — confirm with client)

**Quote Block** (tan background, centered)
- "The thing that's fascinating about portraiture is that nobody is alike." — Imogen Cunningham

**Magazine Features** (optional section — include only if client provides publication names/logos)

### 5. Contact (`/contact`)

**Page Banner** — Dark brown gradient, script heading "Get in Touch", subtitle "Let's Create Together"

**Content** — Two columns
- **Left: Inquiry Form**
  - Name (text input)
  - Email (email input)
  - Phone (tel input)
  - Service Type (select dropdown: Portrait Session, Wedding, Event, Other)
  - Preferred Date (date input)
  - Message (textarea)
  - Submit button: "Send Inquiry" (filled orange)
  - Form submits via Next.js Server Action, sends email via Resend API to chaseportraits@gmail.com
  - Success/error toast feedback to user

- **Right: Contact Info** (tan background)
  - Phone: 615-933-1169
  - Email: chaseportraits@gmail.com
  - Location: LaVergne, TN 37086
  - Hours: Mon-Fri 9am-6pm, Sat 9am-8pm, Sun 12pm-6pm
  - Social icons: Facebook, Instagram

**FAQ Accordion** — Below form, expandable Q&A items:
- What are your business hours?
- How do I book a session?
- What payment methods do you accept?
- How many photos will I receive?
- Do you provide raw files?
- What is your cancellation/refund policy?

## Global Components

### Navigation (all pages)
- Sticky on scroll with background blur/opacity transition
- Logo left (CPP Logo.png — orange script + gray "PHOTOGRAPHY")
- Nav links right: Home, Services, Portfolio, About, Contact
- Active page: orange text with underline
- Mobile: hamburger menu with slide-out drawer
- On hero (homepage): transparent background, white text
- On inner pages: cream background, dark text

### Footer (all pages)
- Cream background with orange border-top (1px)
- Left: copyright "2026 Chase Portraits Photography"
- Right: Social icons (Facebook, Instagram), phone, email
- Simple, single row

### Shared Patterns
- Section labels: orange, uppercase, letterspaced, with optional horizontal line accent
- Section headings: Alex Brush script, dark brown
- Cards: white background, subtle shadow, rounded corners (6px)
- Buttons: filled (orange bg, white text) or outlined (orange border, orange text)
- Transitions: subtle hover effects on cards, buttons, nav links
- Page banners: consistent dark brown gradient with centered script heading

## Responsive Design

| Breakpoint | Layout Changes |
|------------|---------------|
| Desktop (1024px+) | Full layouts as designed, 3-column grids |
| Tablet (768-1023px) | 2-column grids, hero text left-aligned, smaller fonts |
| Mobile (< 768px) | Single column, hamburger nav, stacked sections, full-width cards |

## Images to Pull from Current Site

- `https://lirp.cdn-website.com/fe9bd626/dms3rep/multi/opt/IMG_2816-1920w.jpg` (Portrait)
- `https://lirp.cdn-website.com/fe9bd626/dms3rep/multi/opt/IMG_9364-Edit-1920w.jpg` (Wedding)
- `https://lirp.cdn-website.com/fe9bd626/dms3rep/multi/opt/IMG_9494-1920w.jpg` (Event)
- `https://lirp.cdn-website.com/fe9bd626/dms3rep/multi/opt/IMG_3766-1920w.jpg` (Services)
- `https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_9328.jpg`
- `https://irp.cdn-website.com/fe9bd626/dms3rep/multi/IMG_8218.jpg`
- Logo: `CPP Logo.png` (provided locally)

## SEO

- Meta titles and descriptions for each page
- Open Graph tags with preview images
- Schema.org LocalBusiness and Photographer structured data
- Semantic HTML (h1/h2/h3, nav, main, footer, section)
- Alt text on all images
- Sitemap generation
