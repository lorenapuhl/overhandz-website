// ---------------------------------------------------------------------------
// MOCK DATA — Pricing Plans
// ---------------------------------------------------------------------------
//
// FUTURE BACKEND:
// Replace with API route: /api/pricing
// Connect to Stripe Product/Price API for live pricing
// ---------------------------------------------------------------------------

export interface PricingBenefit {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;       // in euros
  period: string;      // "per session" | "for 10 classes" | "per month"
  highlight: boolean;  // true = most popular, visually elevated
  badge: string | null;
  description: string;
  benefits: PricingBenefit[];
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "drop-in",
    name: "Drop-in",
    price: 25,
    period: "per session",
    highlight: false,
    badge: null,
    description:
      "Train when you want. No commitment — just show up and work hard.",
    benefits: [
      { text: "Access to any single class", included: true },
      { text: "All class types available", included: true },
      { text: "Equipment provided", included: true },
      { text: "Locker room access", included: true },
      { text: "Priority booking", included: false },
      { text: "Unlimited monthly access", included: false },
    ],
    cta: "Book a Drop-in",
  },
  {
    id: "class-pack",
    name: "Class Pack",
    price: 180,
    period: "for 10 classes",
    highlight: true, // most popular
    badge: "Best Value",
    description:
      "Commit to your training. 10 classes at €18 each — save €70 vs drop-in.",
    benefits: [
      { text: "10 classes (any type, any day)", included: true },
      { text: "Valid for 3 months", included: true },
      { text: "Priority booking access", included: true },
      { text: "Equipment provided", included: true },
      { text: "Locker room access", included: true },
      { text: "Unlimited monthly access", included: false },
    ],
    cta: "Get the Pack",
  },
  {
    id: "membership",
    name: "Membership",
    price: 120,
    period: "per month",
    highlight: false,
    badge: null,
    description:
      "Train as much as you want. Unlimited classes for serious athletes.",
    benefits: [
      { text: "Unlimited classes every month", included: true },
      { text: "All class types included", included: true },
      { text: "Priority booking guaranteed", included: true },
      { text: "Equipment provided", included: true },
      { text: "Locker room access", included: true },
      { text: "Free guest pass / month", included: true },
    ],
    cta: "Join Now",
  },
];
