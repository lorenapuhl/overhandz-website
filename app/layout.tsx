// Root layout — wraps every page in the application.
//
// This is a Server Component (no "use client") so it can:
//   1. Export a `metadata` object (Next.js reads this at build time for <head> tags)
//   2. Import fonts from next/font/google (server-only feature)
//   3. Inject the JSON-LD structured data script for local SEO

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ---------------------------------------------------------------------------
// FONT — Inter loaded from Google Fonts via next/font
//
// next/font downloads the font at build time, hosts it locally, and injects
// a CSS variable (--font-inter) that globals.css picks up via @theme inline.
// This avoids the privacy / performance issues of loading fonts from Google at runtime.
// ---------------------------------------------------------------------------
const inter = Inter({
  subsets: ["latin"],
  // This CSS variable name MUST match the one referenced in globals.css @theme inline
  variable: "--font-inter",
});

// ---------------------------------------------------------------------------
// METADATA — injected into <head> on every page (can be overridden per page)
//
// SEO target keywords: "boxing gym paris", "boxing ivry sur seine", "muay thai paris"
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Boxing Gym Paris — Overhandz Boxing Club",
  description:
    "Overhandz Boxing Club — boxing and Muay Thai classes in Ivry-sur-Seine, Paris. Book online in seconds. All levels welcome.",
  openGraph: {
    title: "Boxing Gym Paris — Overhandz Boxing Club",
    description:
      "Boxing and Muay Thai in Ivry-sur-Seine, Paris. Book your class online.",
    url: "https://overhandz.com",
    type: "website",
  },
};

// ---------------------------------------------------------------------------
// ROOT LAYOUT
// ---------------------------------------------------------------------------
export default function RootLayout({
  // `children` is every page rendered inside this layout.
  // In React, when you wrap components, the inner content is passed as `children`.
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" // French — gym is based in France (Ivry-sur-Seine)
      // The `inter.variable` adds the CSS variable (--font-inter) to the <html> element
      // so globals.css can reference it in the @theme block
      className={inter.variable}
    >
      <body className="bg-canvas text-white antialiased min-h-screen flex flex-col">

        {/* JSON-LD STRUCTURED DATA — tells Google this is a gym/sports location */}
        {/* Only included once, in the root layout, per SEO spec */}
        {/* dangerouslySetInnerHTML is safe here because the content is hardcoded JSON,
            not user input — there is no XSS risk */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Overhandz Boxing Club",
              description:
                "Boxing gym offering boxing and Muay Thai classes in Ivry-sur-Seine, Paris.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ivry-sur-Seine",
                addressRegion: "Île-de-France",
                addressCountry: "FR",
              },
              url: "https://overhandz.com",
              telephone: "+33-1-00-00-00-00",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "22:00",
                },
              ],
            }),
          }}
        />

        {/* NAVBAR — sticky top navigation, present on all pages */}
        <Navbar />

        {/* PAGE CONTENT — flex-1 makes it fill remaining height between navbar and footer */}
        <div className="flex-1">
          {children}
        </div>

        {/* FOOTER — present on all pages */}
        <Footer />
      </body>
    </html>
  );
}
