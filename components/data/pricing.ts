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
  price: number;
  period: string;
  highlight: boolean;
  badge: string | null;
  description: string;
  benefits: PricingBenefit[];
  cta: string;
  note?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "boxe-anglaise-full",
    name: "Boxe Anglaise Full",
    price: 450,
    period: "par an",
    highlight: false,
    badge: null,
    description: "Accès complet aux cours de boxe anglaise avec accès libre à la salle.",
    benefits: [
      { text: "Cours de boxe anglaise (Mardi & Jeudi)", included: true },
      { text: "Accès lundi en dehors des cours", included: true },
      { text: "Accès libre à la salle", included: true },
      { text: "1 Tee-shirt offert", included: true },
      { text: "Cours Muay-Thaï inclus", included: false },
    ],
    cta: "S'inscrire",
    note: "* Prix réduit pour les étudiants et les élèves",
  },
  {
    id: "muay-thai-full",
    name: "Muay-Thaï Full",
    price: 350,
    period: "par an",
    highlight: false, // highlight: true — temporarily disabled
    badge: null, // badge: "Recommandé" — temporarily disabled
    description: "Accès complet aux cours de muay-thaï trois fois par semaine.",
    benefits: [
      { text: "Cours de muay-thaï (Lundi, Mercredi, Vendredi)", included: true },
      { text: "Accès libre à la salle", included: true },
      { text: "1 Tee-shirt offert", included: true },
      { text: "Cours Boxe Anglaise inclus", included: false },
    ],
    cta: "S'inscrire",
  },
  {
    id: "muay-thai",
    name: "Muay-Thaï",
    price: 280,
    period: "par an",
    highlight: false,
    badge: null,
    description: "Cours de muay-thaï deux fois par semaine.",
    benefits: [
      { text: "Cours de muay-thaï (Mercredi & Vendredi)", included: true },
      { text: "Accès libre à la salle", included: false },
      { text: "Tee-shirt offert", included: false },
      { text: "Cours Boxe Anglaise inclus", included: false },
    ],
    cta: "S'inscrire",
  },
  {
    id: "muay-thai-feminin",
    name: "Muay-Thaï Féminin",
    price: 250,
    period: "par an",
    highlight: false,
    badge: null,
    description: "Cours de muay-thaï féminin deux fois par semaine.",
    benefits: [
      { text: "Cours Muay-Thaï Féminin (Mercredi & Vendredi)", included: true },
      { text: "Accès libre à la salle", included: false },
      { text: "Tee-shirt offert", included: false },
      { text: "Cours supplémentaires inclus", included: false },
    ],
    cta: "S'inscrire",
  },
];

export interface SimpleOption {
  label: string;
  price: number | null;
  unit: string;
}

export const simpleOptions: SimpleOption[] = [
  { label: "Cours à l'unité", price: 15, unit: "par cours" },
  { label: "Abonnement au mois", price: 60, unit: "par mois" },
  { label: "Cours particulier", price: null, unit: "nous contacter" },
];
