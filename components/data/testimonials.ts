// ---------------------------------------------------------------------------
// MOCK DATA — Testimonials
// ---------------------------------------------------------------------------
//
// FUTURE BACKEND:
// Replace with API route: /api/testimonials
// Connect to a review platform (Google Reviews, Trustpilot) or DB table
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  role: string;      // e.g. "Member since 2022", "Fight team"
  quote: string;
  rating: number;    // 1–5
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Lucas M.",
    role: "Member since 2022",
    quote:
      "I came in knowing nothing about boxing. Coach Yasmine made me feel welcome from day one. Two years later, I've done my first amateur fight. This gym changed my life.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Amira K.",
    role: "Fight team",
    quote:
      "The level of coaching here is serious. Karim pushes you to improve every single session. The sparring is controlled, technical, and fun. Best gym in Paris.",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Thomas B.",
    role: "Member since 2023",
    quote:
      "I travel a lot for work. Being able to book classes online without sending DMs saves me so much hassle. I always know my spot is secured when I land.",
    rating: 5,
  },
  {
    id: "t-4",
    name: "Fatima D.",
    role: "Muay Thai student",
    quote:
      "Started with Muay Thai here after years of doing nothing. The morning sessions with Samir are brutal in the best way. I've lost 8kg and feel incredible.",
    rating: 5,
  },
];
