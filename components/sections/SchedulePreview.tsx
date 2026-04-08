"use client"
// "use client" needed: uses useState (day filter) and Framer Motion.

import { useState } from "react"
import { motion } from "framer-motion"
import SectionWrapper from "@/components/ui/SectionWrapper"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import { classes, weekDays } from "@/components/data/classes"
import type { ScheduleClass, DayOfWeek } from "@/components/data/classes"

// ---------------------------------------------------------------------------
// SchedulePreview — class schedule table on the landing page
//
// Shows the week's classes in a scannable row format.
// Each row has a "Book" button that triggers the booking modal.
//
// Props:
//   onBook — callback to open BookingModal with the selected class
//
// // FUTURE BACKEND:
// // Replace classes mock data with /api/classes
// // Add real-time spot count updates (WebSocket or polling every 30s)
// // Show "Fully booked" when spotsLeft === 0
// ---------------------------------------------------------------------------

interface SchedulePreviewProps {
  // Function called when user clicks "Book" — parent (HomePageWrapper)
  // opens the modal with the selected class data
  onBook: (cls: ScheduleClass) => void;
}

export default function SchedulePreview({ onBook }: SchedulePreviewProps) {
  // selectedDay controls which day's classes are shown
  // Defaults to the first day that has classes (Monday)
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>("Monday");

  // Filter the full schedule to only show the selected day
  const filtered = classes.filter((cls) => cls.day === selectedDay);

  return (
    <section className="py-20 px-6 md:py-36 md:px-12 bg-surface">
      <SectionWrapper>

        {/* SECTION HEADER */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-dim text-sm font-medium tracking-widest uppercase mb-2">
              This week
            </p>
            <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight">
              Schedule
            </h2>
          </div>
          {/* Link to full schedule page */}
          <Button href="/schedule" variant="secondary" className="self-start md:self-auto">
            Full schedule →
          </Button>
        </motion.div>

        {/* DAY FILTER — horizontal scrollable pill buttons */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          // overflow-x-auto = horizontal scroll on mobile if pills don't fit
          // pb-2 = extra bottom padding so the scrollbar doesn't overlap pills
          className="flex gap-2 overflow-x-auto pb-2 mb-6"
        >
          {weekDays.map((day) => (
            // Use <button> (not <div>) for clickable filter pills — CLAUDE.md rule
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              // No raw CSS transition-colors — active/inactive is a state switch,
              // not an animation. The visual change is instant (state-driven, not animated).
              className={`
                shrink-0 px-4 py-2 rounded-full text-sm font-medium
                ${
                  selectedDay === day
                    ? "bg-white text-black"     // active state
                    : "bg-edge text-dim"        // inactive state
                }
              `}
            >
              {/* Show abbreviated day names on mobile to save space */}
              <span className="md:hidden">{day.slice(0, 3)}</span>
              <span className="hidden md:inline">{day}</span>
            </button>
          ))}
        </motion.div>

        {/* CLASS ROWS TABLE */}
        <div className="divide-y divide-edge">
          {filtered.length === 0 ? (
            <p className="text-dim text-sm py-8 text-center">
              No classes scheduled on {selectedDay}.
            </p>
          ) : (
            filtered.map((cls, index) => (
              <motion.div
                key={cls.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
                // Schedule row layout: flex justify-between per frontend.md spec
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-3"
              >
                {/* LEFT — time + class info */}
                <div className="flex items-start sm:items-center gap-4">
                  {/* TIME — monospace for alignment */}
                  <span className="text-white font-medium text-sm w-12 shrink-0 font-mono">
                    {cls.time}
                  </span>

                  <div>
                    {/* CLASS NAME */}
                    <p className="text-white font-medium text-sm">{cls.name}</p>
                    {/* COACH NAME */}
                    <p className="text-dim text-xs mt-0.5">
                      {cls.coach} · {cls.durationMinutes}min
                    </p>
                  </div>
                </div>

                {/* RIGHT — spots badge + book button */}
                <div className="flex items-center gap-3 sm:ml-auto">
                  {/* Urgency badge — urgent variant when only ≤ 3 spots left */}
                  <Badge variant={cls.spotsLeft <= 3 ? "urgent" : "default"}>
                    {cls.spotsLeft <= 3
                      ? `Only ${cls.spotsLeft} left`
                      : `${cls.spotsLeft} spots`}
                  </Badge>

                  {/* BOOK BUTTON — triggers the booking modal */}
                  <button
                    onClick={() => onBook(cls)}
                    className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-md hover:opacity-90 transition-none"
                  >
                    Book
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </SectionWrapper>
    </section>
  );
}
