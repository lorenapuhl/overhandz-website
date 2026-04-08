
--------------------------------
SEO STRATEGY
--------------------------------

Target keywords:

PRIMARY:
- boxing gym paris
- boxing ivry sur seine
- muay thai paris

SECONDARY:
- book boxing class online
- boxing membership paris

--------------------------------
METADATA (ALL PAGES)
--------------------------------

Never use react-helmet-async or any <head> manipulation component.
Next.js handles all metadata through the Metadata API.

Every page.tsx exports a metadata object or a generateMetadata function.
Next.js reads this at build time and injects the correct <head> tags automatically.

Add this export to every app/**/page.tsx:


```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Name — Overhandz Boxing Club",
  description: "Under 160 characters. Describes what this page offers.",
  openGraph: {
    title: "Page Name — Overhandz Boxing Club",
    description: "Same as above or slightly adapted for social sharing.",
    url: "https://yourdomain.com/page-path",
    type: "website",
  },
}
```

---

## TITLE STRUCTURE

Home:
Boxing Gym Paris — Overhandz Boxing Club

Schedule:
Class Schedule — Overhandz Boxing Club

Pricing:
Memberships — Overhandz Boxing Club

---

## HEADING RULES

* EXACTLY ONE <h1>
* Sections use <h2>
* No skipping levels

---

## IMAGE ALT TEXT

Good:
"Boxers sparring during training session in Paris gym"

Describe what is actually in the image as if the reader cannot see it.

---

## LOCAL SEO

Always include:

* Paris
* Ivry-sur-Seine

---

## JSON-LD (ONCE IN LAYOUT)

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Overhandz Boxing Club",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ivry-sur-Seine",
        "addressCountry": "FR"
      }
    })
  }}
/>
```

---

## ROBOTS

User-agent: *
Allow: /

---

## SITEMAP

Include all pages

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://yourdomain.com/</loc></url>
  <url><loc>https://yourdomain.com/pricing</loc></url>
  <url><loc>https://yourdomain.com/schedule</loc></url>
  <url><loc>https://yourdomain.com/about</loc></url>
  <url><loc>https://yourdomain.com/contact</loc></url>
</urlset>
```

---------------------------------------
## Pre-launch SEO checklist
----------------------------------------

Run these checks before deploying:

- [ ] Every page.tsx has a metadata export with title and description
- [ ] No title exceeds 60 characters
- [ ] No description exceeds 160 characters
- [ ] Exactly one <h1> per page
- [ ] No heading levels are skipped
- [ ] Every next/image has descriptive alt text
- [ ] public/robots.txt exists
- [ ] public/sitemap.xml exists with all page URLs
- [ ] JSON-LD block exists once in app/layout.tsx
- [ ] All og:url values match actual deployed page URLs


