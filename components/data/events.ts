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
  link: string;
}

export const events: GymEvent[] = [
  {
    id: "ev-1",
    title: "Upcycling Crop Shirt — HUVIVA x JMT Paris",
    date: "2025-11-13",
    time: "",
    location: "",
    imageUrl: "/images/events/post-1.png",
    description:
      "Upcycling crop shirt from HUVIVA, available at @jmt_paris. A limited boxing-fashion collab.",
    type: "open-gym",
    spotsLeft: null,
    link: "https://www.instagram.com/p/DRAGNxRjFGm/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "ev-2",
    title: "Overhandz at El Cafe Gym — Mexico City",
    date: "2021-02-01",
    time: "",
    location: "El Cafe, CDLX, Mexico",
    imageUrl: "/images/events/post-2.png",
    description:
      "Overhandz visits El Cafe gym in Mexico City — one of the best boxing gyms around. International connections.",
    type: "open-gym",
    spotsLeft: null,
    link: "https://www.instagram.com/p/CoIGHQKLl4Z/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "ev-3",
    title: "Battle MBC x Overhandz",
    date: "2022-07-17",
    time: "",
    location: "Ivry-sur-Seine, France",
    imageUrl: "/images/events/post-3.png",
    description:
      "Photos from the Battle Montmartre Breaking Club x Overhandz. Full photo album available on the Montmartre Breaking Club Facebook page.",
    type: "competition",
    spotsLeft: null,
    link: "https://www.instagram.com/p/CgH4qJCrAmN/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "ev-4",
    title: "1V1 Break & 7 To Smoke All Style — Overhandz x Montmartre Breaking Club",
    date: "2022-07-09",
    time: "17:00",
    location: "15 Rue Molière, Paris",
    imageUrl: "/images/events/post-4.png",
    description:
      "Pre-selection 13H30. Entry 5€ + 1 consommation, free for participants. Battle categories: Break Open Qualif (Money Price) and 7ToSmoke All Style Open Qualif (Money Price). DJ Locky.",
    type: "competition",
    spotsLeft: null,
    link: "https://www.instagram.com/p/CewM_EkLKMy/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
];
