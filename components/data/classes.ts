// ---------------------------------------------------------------------------
// MOCK DATA — Schedule Classes
// ---------------------------------------------------------------------------
//
// FUTURE BACKEND:
// Replace with API route: /api/classes
// Connect to booking system DB (e.g. Supabase, Prisma)
// Add real-time availability updates via WebSockets or polling
// ---------------------------------------------------------------------------

export type ClassType = "Boxe Anglaise" | "Muay-Thaï" | "Muay-Thaï Féminin";

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface ScheduleClass {
  id: string;
  day: DayOfWeek;
  time: string;        // "HH:MM" 24h format
  name: string;
  type: ClassType;
  coach: string;
  spotsLeft: number;
  totalSpots: number;
  durationMinutes: number;
  description: string;
}

export const classes: ScheduleClass[] = [
  // --- MONDAY ---
  {
    id: "mon-1",
    day: "Monday",
    time: "19:00",
    name: "Muay-Thaï",
    type: "Muay-Thaï",
    coach: "Coach Fabrice",
    spotsLeft: 8,
    totalSpots: 15,
    durationMinutes: 60,
    description:
      "Cours de muay-thaï tous niveaux. Techniques de frappe, travail aux pads et conditionnement.",
  },

  // --- TUESDAY ---
  {
    id: "tue-1",
    day: "Tuesday",
    time: "19:00",
    name: "Boxe Anglaise",
    type: "Boxe Anglaise",
    coach: "Coach Rudy",
    spotsLeft: 6,
    totalSpots: 15,
    durationMinutes: 60,
    description:
      "Cours de boxe anglaise. Technique, combinaisons et travail au sac.",
  },

  // --- WEDNESDAY ---
  {
    id: "wed-1",
    day: "Wednesday",
    time: "18:45",
    name: "Muay-Thaï Féminin",
    type: "Muay-Thaï Féminin",
    coach: "Coach Morad",
    spotsLeft: 8,
    totalSpots: 12,
    durationMinutes: 60,
    description:
      "Cours de muay-thaï dédié aux femmes. Ambiance bienveillante, technique solide.",
  },
  {
    id: "wed-2",
    day: "Wednesday",
    time: "20:00",
    name: "Muay-Thaï",
    type: "Muay-Thaï",
    coach: "Coach Morad",
    spotsLeft: 7,
    totalSpots: 15,
    durationMinutes: 60,
    description:
      "Cours de muay-thaï tous niveaux. Pads, technique et sparring léger.",
  },

  // --- THURSDAY ---
  {
    id: "thu-1",
    day: "Thursday",
    time: "19:00",
    name: "Boxe Anglaise",
    type: "Boxe Anglaise",
    coach: "Coach Rudy",
    spotsLeft: 5,
    totalSpots: 15,
    durationMinutes: 60,
    description:
      "Cours de boxe anglaise. Techniques avancées, jeu de jambes et sparring encadré.",
  },

  // --- FRIDAY ---
  {
    id: "fri-1",
    day: "Friday",
    time: "18:45",
    name: "Muay-Thaï Féminin",
    type: "Muay-Thaï Féminin",
    coach: "Coach Morad",
    spotsLeft: 9,
    totalSpots: 12,
    durationMinutes: 60,
    description:
      "Cours de muay-thaï féminin. Conditionnement et technique.",
  },
  {
    id: "fri-2",
    day: "Friday",
    time: "20:00",
    name: "Muay-Thaï",
    type: "Muay-Thaï",
    coach: "Coach Morad",
    spotsLeft: 8,
    totalSpots: 15,
    durationMinutes: 60,
    description:
      "Cours de muay-thaï. Fin de semaine active avec travail intensif aux pads.",
  },
];

// Convenience: all unique class types for filter UI
export const classTypes: ClassType[] = [
  "Boxe Anglaise",
  "Muay-Thaï",
  "Muay-Thaï Féminin",
];

// Convenience: all days in order
export const weekDays: DayOfWeek[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
