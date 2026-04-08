// Schedule & Booking page — route: /schedule
//
// Server Component shell — exports metadata.
// Interactive schedule + booking modal handled in SchedulePageClient.

import type { Metadata } from "next";
import SchedulePageClient from "@/components/pages/SchedulePageClient";

export const metadata: Metadata = {
  title: "Class Schedule — Overhandz Boxing Club",
  description:
    "Book a boxing or Muay Thai class in Ivry-sur-Seine, Paris. View the weekly schedule and secure your spot online in seconds.",
  openGraph: {
    title: "Class Schedule — Overhandz Boxing Club",
    description:
      "View and book boxing classes at Overhandz in Paris. Real-time availability.",
    url: "https://overhandz.com/schedule",
    type: "website",
  },
};

export default function SchedulePage() {
  return <SchedulePageClient />;
}
