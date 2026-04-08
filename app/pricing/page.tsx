// Pricing / Memberships page — route: /pricing
//
// Server Component — exports metadata, renders PricingSection + FAQ.

import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import PricingPageExtras from "@/components/pages/PricingPageExtras";

export const metadata: Metadata = {
  title: "Memberships — Overhandz Boxing Club",
  description:
    "Boxing memberships and class packs in Paris. Drop-in, class packs, or unlimited monthly membership. Simple, transparent pricing.",
  openGraph: {
    title: "Memberships — Overhandz Boxing Club",
    description:
      "Simple pricing for boxing classes in Ivry-sur-Seine, Paris. No contracts.",
    url: "https://overhandz.com/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main>
      {/* PAGE HEADER — full-width hero for the pricing page */}
      <PricingPageExtras />
      {/* Pricing cards — reused from landing page */}
      <PricingSection />
    </main>
  );
}
