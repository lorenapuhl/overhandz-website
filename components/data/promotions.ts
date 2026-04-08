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
    title: "Overhandz Boxing Club T-Shirt",
    description:
      "Représente la salle avec le t-shirt officiel Overhandz Boxing Club. Disponible sur notre site et à la salle. Venez découvrir nos disciplines : Boxe anglaise, Muay Thai, sparring et plus à Ivry-sur-Seine.",
    badge: "Merch",
    imageUrl: "/images/promotions/post-1.png",
    cta: "Shop Now",
    highlight: false,
    expiresLabel: null,
  },
  {
    id: "promo-2",
    title: "Overhandz Giveaway",
    description:
      "Follow us @overhandzclub, mention a friend in the comments, and share this post to double your chances of winning an Overhandz t-shirt. Winners announced next Friday by @OVERHANDZCLUB.",
    badge: "Giveaway",
    imageUrl: "/images/promotions/post-2.png",
    cta: "Enter Giveaway",
    highlight: true,
    expiresLabel: "Winners announced next Friday",
  },
  {
    id: "promo-3",
    title: "New Tiger Coat Jacket",
    description:
      "Introducing the new Overhandz Tiger Coat Jacket. Designed by @boutiqueprez. Available online and at the gym. Training sessions run Monday to Friday at 7pm — come try a free session.",
    badge: "New",
    imageUrl: "/images/promotions/post-3.png",
    cta: "Shop Now",
    highlight: false,
    expiresLabel: null,
  },
];
