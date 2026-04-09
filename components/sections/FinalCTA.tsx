"use client"
// "use client" needed: uses Framer Motion for scroll animations.

import { motion } from "framer-motion"
import SectionWrapper from "@/components/ui/SectionWrapper"
import Button from "@/components/ui/Button"

// ---------------------------------------------------------------------------
// FinalCTA — full-width closing call-to-action section
//
// Appears at the bottom of every page before the footer.
// Goal: convert any user who scrolled past all content but hasn't booked yet.
// ---------------------------------------------------------------------------

export default function FinalCTA() {
  return (
    // Extra top/bottom padding for the closing section — more visual weight
    <section className="py-20 px-6 md:py-36 md:px-12 bg-surface border-t border-edge">
      <SectionWrapper>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          {/* Large closing statement */}
          <h2 className="text-white font-bold text-4xl md:text-6xl tracking-tight mb-4">
            Train with us.
          </h2>
          <p className="text-dim text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Show up and see what Overhandz is about.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
            <Button href="/schedule" variant="primary">
              Book your first class
            </Button>
            <Button href="/pricing" variant="secondary">
              See pricing
            </Button>
          </div>

          {/* Location trust signal */}
          <p className="text-dim text-sm mt-8">
            Ivry-sur-Seine · Paris · Open 5 days a week
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
