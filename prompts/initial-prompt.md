You are a senior frontend engineer.

Your task is to build a complete Next.js (App Router) project by strictly following the specifications defined in the following local files:

- @claude.md (main project + structure + requirements)
- @skills/frontend.md (design system, UI components, layout rules)
- @skills/animations.md (motion system and interaction rules)

--------------------------------
INSTRUCTIONS
--------------------------------

1. FIRST: Read and fully understand all three files.
2. Treat them as the single source of truth.
3. Do NOT simplify, skip, or reinterpret — implement precisely.

--------------------------------
OUTPUT REQUIREMENTS
--------------------------------

Generate a FULL working Next.js project:

- Next.js App Router structure
- React
- Tailwind CSS configured
- Clean folder structure

Include:

/app
  /page.tsx
  /schedule/page.tsx
  /pricing/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /case-study/page.tsx

/components
  (all reusable UI components)

/data
  (mock data files as defined)

/lib (if needed)

--------------------------------
IMPLEMENTATION RULES
--------------------------------

- Follow ALL UI rules from frontend.md exactly
- Follow ALL animation rules from animations.md
- Follow ALL structure and logic from claude.md
- Follow the exact layout from structure.md

--------------------------------
COMPONENT SYSTEM
--------------------------------

Build reusable components:

- Button
- Card
- Section
- Container
- Modal (booking flow)
- Navbar
- Footer
- InstagramGrid
- ScheduleTable
- PricingCards

--------------------------------
LANDING PAGE STRUCTURE
--------------------------------

1. HERO SECTION

- Full viewport height
- Split layout (text left, image right)

Content:
- H1: "Train. Fight. Belong."
- Sub: "Parisian boxing club. Real fighters, real training."
- CTA 1: Book a Class
- CTA 2: View Schedule

UI:
- Large bold typography
- Strong contrast
- Hero image: fighters / sparring

// FUTURE BACKEND:
// Could personalize based on returning users

--------------------------------

2. SOCIAL PROOF STRIP

Horizontal scroll:

- 1,600+ fighters trained
- Weekly sparring sessions
- Beginner friendly
- Fight team

--------------------------------

3. INSTAGRAM FEED (CORE FEATURE)

Grid layout:

- Desktop: 3 columns
- Mobile: 2 columns

Each card:
- image
- hover overlay
- slight zoom

// FUTURE BACKEND:
// Replace mock data with Instagram API sync
// Auto-refresh content daily

--------------------------------

5. SCHEDULE PREVIEW

Table-like UI:

- time
- class
- coach
- spots left

Add:
- "Only X spots left"

// FUTURE BACKEND:
// Real-time availability updates

--------------------------------

6. BOOKING FLOW (MODAL)

Steps:

1. Select class
2. Enter details
3. Payment screen (fake)
4. Success screen

// FUTURE BACKEND:
// Integrate Stripe
// Store booking in DB

--------------------------------

7. PRICING

3 cards:

- Drop-in
- Class Pack (highlight)
- Membership

Include:
- benefits
- CTA buttons

--------------------------------

8. EVENTS

Grid using IG-style content

--------------------------------

9. PROMOTIONS

Cards:
- First class free
- Beginner program

--------------------------------

10. NEWS

Cards:
- updates
- fight results

--------------------------------

11. ABOUT

Split:
- text + image

--------------------------------

12. FINAL CTA

Full-width:
"Train with us"

--------------------------------

13. FOOTER

- links
- IG icon
- location



--------------------------------
DATA HANDLING
--------------------------------

Use mock data files for:

- classes
- pricing
- instagram posts
- testimonials
- events
- promotions
- news

IMPORTANT:
In every relevant place, add comments like:

// FUTURE BACKEND:
// Replace with API route (e.g. /api/classes)
// Connect to database

--------------------------------
BOOKING FLOW (IMPORTANT)
--------------------------------

Implement frontend-only booking:

- Select class
- Open modal
- Input fields
- Fake payment step
- Success confirmation

No real backend.

--------------------------------
UI QUALITY
--------------------------------

- Pixel-perfect layout
- Clean spacing
- Strong typography hierarchy
- Mobile-first responsiveness
- Sticky mobile CTA
- Subtle animations

--------------------------------
ANIMATIONS
--------------------------------

- Implement hover states
- Implement scroll reveal
- Implement modal transitions

Follow animations.md exactly.

--------------------------------
IMPORTANT MINDSET
--------------------------------

This is NOT a simple website.

It must feel like:
→ a SaaS product demo
→ a high-converting system
→ a portfolio-ready project

--------------------------------
DELIVERABLE FORMAT
--------------------------------

Output:

1. Full folder/file structure
2. All code files
3. Clear separation of components
4. Clean, readable, production-quality code

