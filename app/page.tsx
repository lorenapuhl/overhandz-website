// Home page — Landing page at route: /
//
// This is a Server Component (no "use client") so it can export `metadata`.
// All the interactive logic (booking modal state) lives in HomePageWrapper.

import type { Metadata } from "next";
import HomePageWrapper from "@/components/HomePageWrapper";

// ---------------------------------------------------------------------------
// PAGE METADATA — overrides the root layout metadata for this specific page
// SEO keywords: "boxing gym paris", "boxing ivry sur seine", "muay thai paris"
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Boxing Gym Paris — Overhandz Boxing Club",
  description:
    "Book your boxing or Muay Thai class at Overhandz in Ivry-sur-Seine, Paris. Online booking, real training, all levels welcome.",
  openGraph: {
    title: "Boxing Gym Paris — Overhandz Boxing Club",
    description:
      "Book your boxing or Muay Thai class at Overhandz in Ivry-sur-Seine, Paris.",
    url: "https://overhandz.com",
    type: "website",
  },
};

// The page component renders HomePageWrapper which contains all the sections.
// The h1 is inside HeroSection — exactly one h1 per page (SEO rule).
export default function HomePage() {
  return <HomePageWrapper />;
}
