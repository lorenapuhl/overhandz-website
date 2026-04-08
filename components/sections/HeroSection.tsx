"use client"
// "use client" needed: uses Framer Motion which requires the browser environment.

import { motion } from "framer-motion"
import Image from "next/image"
import Button from "@/components/ui/Button"
import SectionWrapper from "@/components/ui/SectionWrapper"

// ---------------------------------------------------------------------------
// HeroSection — above-the-fold hero
//
// Layout: split — text on the left, boxing image on the right.
// Full viewport height to make an immediate strong impression.
// Content:
//   - H1: "Train. Fight. Belong."
//   - Subheadline
//   - Two CTAs: Book a Class (primary), View Schedule (secondary)
//
// // FUTURE BACKEND:
// // Personalize headline/CTA based on returning vs new user
// // (e.g. "Welcome back, Lucas — your next class is Thursday at 19:00")
// ---------------------------------------------------------------------------

// Framer Motion animation variants:
// "hidden" = starting state (invisible, slightly lower)
// "visible" = target state (fully visible, natural position)
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    // min-h-screen = section fills at least the full viewport height
    // bg-canvas = darkest background (#0B0B0B from theme tokens)
    // py-20 px-6 md:py-36 md:px-12 = standard section padding (mobile first)
    <section className="min-h-screen bg-canvas py-20 px-6 md:py-36 md:px-12 flex items-center">
      <SectionWrapper className="w-full">

        {/* SPLIT LAYOUT — text left, image right */}
        {/* On mobile: stacked (grid-cols-1). On desktop: side by side (md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT — copy + CTAs */}
          {/* motion.div with staggerChildren staggers child animations one by one */}
          <motion.div
            // initial = starting state before the element is visible
            initial="hidden"
            // animate = immediately animate on page load (hero doesn't use scroll trigger)
            animate="visible"
            variants={{
              visible: {
                // staggerChildren delays each child animation by 0.12s
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {/* EYEBROW — small label above the main headline */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-dim text-sm font-medium tracking-widest uppercase mb-4"
            >
              Ivry-sur-Seine · Paris
            </motion.p>

            {/* H1 — exactly ONE h1 per page (SEO rule) */}
            {/* text-5xl md:text-7xl = responsive large headline */}
            {/* tracking-tight = slightly tight letter spacing per brand spec */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-white font-bold text-5xl md:text-7xl leading-tight tracking-tight mb-6"
            >
              Train.
              <br />
              Fight.
              <br />
              Belong.
            </motion.h1>

            {/* SUBHEADLINE */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-dim text-base md:text-lg leading-relaxed max-w-md mb-8"
            >
              Parisian boxing club. Real fighters, real training. Book your class
              in seconds — no DMs, no hassle.
            </motion.p>

            {/* CTA BUTTONS — side by side on desktop, stacked on mobile */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* Primary CTA — book a class navigates to the schedule page */}
              <Button href="/schedule" variant="primary">
                Book a Class
              </Button>
              {/* Secondary CTA — outline style */}
              <Button href="/schedule" variant="secondary">
                View Schedule
              </Button>
            </motion.div>

            {/* SOCIAL PROOF MICRO — trust signal below CTAs */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6 text-dim text-xs"
            >
              1,600+ fighters trained · Ivry-sur-Seine, Paris
            </motion.p>
          </motion.div>

          {/* RIGHT — hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            // relative = required for next/image with fill prop to position correctly
            // aspect-[4/5] = portrait crop ratio for the hero image
            // overflow-hidden = clips the image at the rounded corners
            className="relative aspect-[4/5] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden"
          >
            {/* next/image with fill prop fills the parent container */}
            {/* object-cover = crops the image to fill without distortion */}
            <Image
              src="/images/ui/hero-cropped.png"
              alt="Boxers sparring during training session at Overhandz Boxing Club in Paris"
              fill
              // sizes tells the browser how large the image is at each breakpoint
              // This improves performance by loading the right image size
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              // priority = load this image immediately (above the fold)
              priority
            />

            {/* GRADIENT OVERLAY — subtle fade at the bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent" />
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
