"use client"
// "use client" needed: uses Framer Motion for scroll animations.

import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "@/components/ui/SectionWrapper"
import Button from "@/components/ui/Button"

// ---------------------------------------------------------------------------
// AboutSection — gym story in a split layout (text left, image right)
//
// Appears on the landing page as a short preview.
// The /about page has the full version with coaches and philosophy.
// ---------------------------------------------------------------------------

export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:py-36 md:px-12 bg-canvas">
      <SectionWrapper>

        {/* SPLIT LAYOUT — text left, image right */}
        {/* Reverses order on mobile: image first, then text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT — text content */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-dim text-sm font-medium tracking-widest uppercase mb-3">
              Our story
            </p>
            <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight mb-6">
              Born in Ivry.
              <br />
              Built for fighters.
            </h2>
            <p className="text-dim text-base leading-relaxed mb-4">
              Overhandz started as a single room, a few bags, and a coach who
              believed that real boxing isn't reserved for elite athletes.
            </p>
            <p className="text-dim text-base leading-relaxed mb-4">
              Today, over 1,600 members have trained with us — from absolute
              beginners to competitive fighters representing Paris on the
              regional circuit.
            </p>
            <p className="text-dim text-base leading-relaxed mb-8">
              We're based in Ivry-sur-Seine, just minutes from central Paris.
              Walk in as a beginner. Leave as a fighter.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/about" variant="primary">
                Meet the team
              </Button>
              <Button href="/contact" variant="secondary">
                Find us
              </Button>
            </div>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="https://placehold.co/800x800/121212/FFFFFF"
              alt="Coach Karim training a student at Overhandz Boxing Club in Ivry-sur-Seine, Paris"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
