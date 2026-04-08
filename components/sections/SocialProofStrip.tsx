"use client"
// "use client" needed: uses Framer Motion for scroll-triggered animations.

import { motion } from "framer-motion"
import SectionWrapper from "@/components/ui/SectionWrapper"

// ---------------------------------------------------------------------------
// SocialProofStrip — horizontal stats bar
//
// Displays key credibility numbers in a clean horizontal row.
// On mobile, these wrap into a 2-column grid.
//
// Content (from initial-prompt.md / structure.md):
//   - 1,600+ fighters trained
//   - Weekly sparring sessions
//   - Beginner friendly
//   - Fight team
// ---------------------------------------------------------------------------

// The stats data — easy to update without modifying JSX
const stats = [
  { value: "1,600+", label: "Fighters trained" },
  { value: "Weekly", label: "Sparring sessions" },
  { value: "All levels", label: "Beginner friendly" },
  { value: "Active", label: "Fight team" },
];

export default function SocialProofStrip() {
  return (
    // border-y border-edge = top and bottom border lines — subtle section separator
    // py-20 px-6 md:py-36 md:px-12 = standard section padding
    <section className="py-20 px-6 md:py-36 md:px-12 border-y border-edge bg-canvas">
      <SectionWrapper>
        {/* STATS GRID — 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              // whileInView triggers the animation when the element scrolls into view
              // viewport={{ once: true }} = only animate the first time (not on scroll back)
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              // delay each stat slightly for a staggered entrance
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
              // md:border-r border-edge = right divider between columns on desktop
              // last:border-0 = removes the border from the last item
              className="text-center md:border-r border-edge last:border-0 md:px-8"
            >
              {/* Large stat number */}
              <p className="text-white font-bold text-3xl md:text-4xl tracking-tight">
                {stat.value}
              </p>
              {/* Label below */}
              <p className="text-dim text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
