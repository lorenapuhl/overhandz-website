// ---------------------------------------------------------------------------
// MOCK DATA — Promotions
// ---------------------------------------------------------------------------
//
// FUTURE BACKEND:
// Replace with API route: /api/promotions
// Add expiry dates, usage limits, and promo code generation via DB
// ---------------------------------------------------------------------------

export interface Promotion {
  id: string;
  title: string;
  description: string;
  badge: string;         // short label shown on card (e.g. "Free", "Limited")
  imageUrl: string;
  cta: string;           // button label
  highlight: boolean;    // true = visually prominent card
  expiresLabel: string | null; // e.g. "Ends April 30" or null
}

export const promotions: Promotion[] = [
  {
    id: "promo-1",
    title: "First Class Free",
    description:
      "New to boxing? Your first session at Overhandz is completely free. No credit card, no commitment — just show up.",
    badge: "Free",
    imageUrl: "https://placehold.co/600x400/121212/FFFFFF",
    cta: "Claim Your Free Class",
    highlight: true,
    expiresLabel: null,
  },
  {
    id: "promo-2",
    title: "Beginner 3-Week Program",
    description:
      "New members get access to our structured beginner program: 3 weeks of guided classes designed to get you fight-ready basics fast.",
    badge: "New Members",
    imageUrl: "https://placehold.co/600x400/141414/FFFFFF",
    cta: "Start the Program",
    highlight: false,
    expiresLabel: "Ongoing",
  },
  {
    id: "promo-3",
    title: "Bring a Friend",
    description:
      "Refer a friend who signs up for a Class Pack or Membership and you both get a free session. Real training, real community.",
    badge: "Referral",
    imageUrl: "https://placehold.co/600x400/161616/FFFFFF",
    cta: "Share the Link",
    highlight: false,
    expiresLabel: null,
  },
];
