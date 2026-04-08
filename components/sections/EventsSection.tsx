"use client"
// "use client" needed: uses Framer Motion for scroll animations.

import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "@/components/ui/SectionWrapper"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import { events } from "@/components/data/events"

// ---------------------------------------------------------------------------
// EventsSection — upcoming events in an Instagram-style card grid
//
// Each card shows: event image, type badge, title, date, spots left (if any)
//
// // FUTURE BACKEND:
// // Replace events mock data with /api/events
// // Add event registration flow with DB storage
// ---------------------------------------------------------------------------

// Maps event type to a readable label for the badge
const typeLabels: Record<string, string> = {
  "fight-night": "Fight Night",
  seminar: "Seminar",
  "open-gym": "Open Gym",
  competition: "Competition",
};

// Format ISO date to readable string: "2026-05-10" → "May 10, 2026"
function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventsSection() {
  return (
    <section className="py-20 px-6 md:py-36 md:px-12 bg-surface">
      <SectionWrapper>

        {/* SECTION HEADER */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-dim text-sm font-medium tracking-widest uppercase mb-2">
            What's on
          </p>
          <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight">
            Events
          </h2>
        </motion.div>

        {/* EVENTS GRID — 2 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              // whileHover="hovered" propagates variant to child motion elements
              whileHover="hovered"
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
              className="bg-canvas border border-edge rounded-xl overflow-hidden"
            >
              {/* EVENT IMAGE */}
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* motion.div wraps Image so Framer Motion can scale it on hover */}
                <motion.div
                  className="absolute inset-0"
                  variants={{ hovered: { scale: 1.05 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                <Image
                  src={event.imageUrl}
                  alt={`${event.title} — Overhandz Boxing Club event`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                </motion.div>
                {/* EVENT TYPE BADGE — overlaid on image */}
                <div className="absolute top-3 left-3">
                  <Badge>{typeLabels[event.type] ?? event.type}</Badge>
                </div>
              </div>

              {/* EVENT DETAILS */}
              <div className="p-5">
                <p className="text-dim text-xs mb-1">
                  {formatDate(event.date)} · {event.time}
                </p>
                <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                  {event.title}
                </h3>
                <p className="text-dim text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* BOTTOM ROW — location + spots */}
                <div className="flex items-center justify-between">
                  <p className="text-dim text-xs">{event.location}</p>
                  {/* Show spots only if registration is needed */}
                  {event.spotsLeft !== null && (
                    <Badge variant={event.spotsLeft <= 10 ? "urgent" : "default"}>
                      {event.spotsLeft} spots left
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
