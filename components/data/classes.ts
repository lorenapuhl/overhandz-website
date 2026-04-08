// ---------------------------------------------------------------------------
// MOCK DATA — Schedule Classes
// ---------------------------------------------------------------------------
//
// FUTURE BACKEND:
// Replace with API route: /api/classes
// Connect to booking system DB (e.g. Supabase, Prisma)
// Add real-time availability updates via WebSockets or polling
// ---------------------------------------------------------------------------

export type ClassType = "Boxing" | "Muay Thai" | "Sparring" | "Beginners";

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
    time: "07:00",
    name: "Morning Boxing",
    type: "Boxing",
    coach: "Coach Karim",
    spotsLeft: 3,
    totalSpots: 12,
    durationMinutes: 60,
    description:
      "Start your week strong. Bag work, combinations, and conditioning.",
  },
  {
    id: "mon-2",
    day: "Monday",
    time: "12:00",
    name: "Lunchtime Technique",
    type: "Boxing",
    coach: "Coach Yasmine",
    spotsLeft: 8,
    totalSpots: 12,
    durationMinutes: 60,
    description:
      "Technical boxing class focused on footwork, head movement, and combos.",
  },
  {
    id: "mon-3",
    day: "Monday",
    time: "19:00",
    name: "Muay Thai",
    type: "Muay Thai",
    coach: "Coach Samir",
    spotsLeft: 5,
    totalSpots: 14,
    durationMinutes: 90,
    description:
      "Full Muay Thai session — punches, kicks, knees, elbows, and clinch work.",
  },

  // --- TUESDAY ---
  {
    id: "tue-1",
    day: "Tuesday",
    time: "10:00",
    name: "Beginners Boxing",
    type: "Beginners",
    coach: "Coach Yasmine",
    spotsLeft: 10,
    totalSpots: 14,
    durationMinutes: 60,
    description:
      "No experience needed. Learn the basics in a welcoming environment.",
  },
  {
    id: "tue-2",
    day: "Tuesday",
    time: "19:30",
    name: "Evening Sparring",
    type: "Sparring",
    coach: "Coach Karim",
    spotsLeft: 2,
    totalSpots: 10,
    durationMinutes: 90,
    description:
      "Controlled sparring rounds for intermediate and advanced members.",
  },

  // --- WEDNESDAY ---
  {
    id: "wed-1",
    day: "Wednesday",
    time: "07:00",
    name: "Morning Boxing",
    type: "Boxing",
    coach: "Coach Karim",
    spotsLeft: 6,
    totalSpots: 12,
    durationMinutes: 60,
    description:
      "Mid-week early session. High energy bag work and partner drills.",
  },
  {
    id: "wed-2",
    day: "Wednesday",
    time: "18:00",
    name: "Muay Thai",
    type: "Muay Thai",
    coach: "Coach Samir",
    spotsLeft: 7,
    totalSpots: 14,
    durationMinutes: 90,
    description: "All levels Muay Thai. Great conditioning and technique work.",
  },

  // --- THURSDAY ---
  {
    id: "thu-1",
    day: "Thursday",
    time: "12:00",
    name: "Lunchtime Boxing",
    type: "Boxing",
    coach: "Coach Yasmine",
    spotsLeft: 9,
    totalSpots: 12,
    durationMinutes: 60,
    description: "Quick and effective midday session to break up your day.",
  },
  {
    id: "thu-2",
    day: "Thursday",
    time: "19:30",
    name: "Fight Team Training",
    type: "Sparring",
    coach: "Coach Karim",
    spotsLeft: 1,
    totalSpots: 8,
    durationMinutes: 120,
    description:
      "Competitive fighters only. Intense sparring and fight preparation.",
  },

  // --- FRIDAY ---
  {
    id: "fri-1",
    day: "Friday",
    time: "07:00",
    name: "Morning Boxing",
    type: "Boxing",
    coach: "Coach Samir",
    spotsLeft: 4,
    totalSpots: 12,
    durationMinutes: 60,
    description: "End your week strong. High-intensity boxing session.",
  },
  {
    id: "fri-2",
    day: "Friday",
    time: "18:00",
    name: "Beginners Boxing",
    type: "Beginners",
    coach: "Coach Yasmine",
    spotsLeft: 12,
    totalSpots: 14,
    durationMinutes: 60,
    description:
      "Perfect for those just starting out. Friendly, focused, and fun.",
  },

  // --- SATURDAY ---
  {
    id: "sat-1",
    day: "Saturday",
    time: "09:00",
    name: "Saturday Sparring",
    type: "Sparring",
    coach: "Coach Karim",
    spotsLeft: 3,
    totalSpots: 12,
    durationMinutes: 120,
    description:
      "Weekend sparring session. All levels welcome in a safe, structured format.",
  },
  {
    id: "sat-2",
    day: "Saturday",
    time: "11:00",
    name: "Muay Thai",
    type: "Muay Thai",
    coach: "Coach Samir",
    spotsLeft: 6,
    totalSpots: 14,
    durationMinutes: 90,
    description: "Saturday Muay Thai. Extended session with pad work focus.",
  },

  // --- SUNDAY ---
  {
    id: "sun-1",
    day: "Sunday",
    time: "10:00",
    name: "Open Mat",
    type: "Sparring",
    coach: "Coach Karim",
    spotsLeft: 8,
    totalSpots: 12,
    durationMinutes: 90,
    description:
      "Free training and light sparring. Come at your own pace.",
  },
];

// Convenience: all unique class types for filter UI
export const classTypes: ClassType[] = [
  "Boxing",
  "Muay Thai",
  "Sparring",
  "Beginners",
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
