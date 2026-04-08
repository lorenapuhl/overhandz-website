// ---------------------------------------------------------------------------
// MOCK DATA — Events
// ---------------------------------------------------------------------------
//
// FUTURE BACKEND:
// Replace with API route: /api/events
// Connect to calendar/event management DB
// Send automatic reminders to registered members
// ---------------------------------------------------------------------------

export type EventType = "fight-night" | "seminar" | "open-gym" | "competition";

export interface GymEvent {
  id: string;
  title: string;
  date: string;         // ISO date string "YYYY-MM-DD"
  time: string;         // "HH:MM"
  location: string;
  imageUrl: string;
  description: string;
  type: EventType;
  spotsLeft: number | null; // null = unlimited / no registration
}

export const events: GymEvent[] = [
  {
    id: "ev-1",
    title: "Fight Night — Overhandz vs Ivry",
    date: "2026-05-10",
    time: "19:00",
    location: "Salle des fêtes d'Ivry-sur-Seine, Paris",
    imageUrl: "https://placehold.co/800x500/121212/FFFFFF",
    description:
      "Our biggest fight night of the year. 12 bouts between our fighters and Ivry Boxing Club. Come support the team.",
    type: "fight-night",
    spotsLeft: 48,
  },
  {
    id: "ev-2",
    title: "Muay Thai Seminar — with Champion Samir Aïd",
    date: "2026-04-26",
    time: "10:00",
    location: "Overhandz Boxing Club, Ivry-sur-Seine",
    imageUrl: "https://placehold.co/800x500/141414/FFFFFF",
    description:
      "A 3-hour deep-dive into Muay Thai clinch work and teep techniques. Open to intermediate and advanced students.",
    type: "seminar",
    spotsLeft: 12,
  },
  {
    id: "ev-3",
    title: "Open Gym Weekend",
    date: "2026-04-19",
    time: "09:00",
    location: "Overhandz Boxing Club, Ivry-sur-Seine",
    imageUrl: "https://placehold.co/800x500/161616/FFFFFF",
    description:
      "Bring a friend for free. Open gym sessions all weekend long — bags, pads, and light sparring available.",
    type: "open-gym",
    spotsLeft: null,
  },
  {
    id: "ev-4",
    title: "Regional Amateur Boxing Championship",
    date: "2026-06-07",
    time: "14:00",
    location: "Stade de Bercy, Paris",
    imageUrl: "https://placehold.co/800x500/0f0f0f/FFFFFF",
    description:
      "Several of our members will be competing. Come out and support Overhandz fighters on the regional stage.",
    type: "competition",
    spotsLeft: null,
  },
];
