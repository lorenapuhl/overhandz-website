"use client"
// "use client" needed: uses Framer Motion for animations.

import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "@/components/ui/SectionWrapper"
import Button from "@/components/ui/Button"
import FinalCTA from "@/components/sections/FinalCTA"

// ---------------------------------------------------------------------------
// AboutPageClient — full about page
//
// Sections:
//   1. Hero header (h1)
//   2. Story — expanded coach + gym narrative
//   3. Coaches — three coach cards
//   4. Philosophy — gym values
//   5. FinalCTA — shared booking push
// ---------------------------------------------------------------------------

const coaches = [
  {
    id: "rudy",
    name: "Coach Rudy",
    role: "Coach Boxe Anglaise",
    imageUrl: "/images/coaches/rudy.png",
    bio: "Spécialiste de la boxe anglaise, Rudy encadre les cours du mardi et du jeudi. Technique rigoureuse, pédagogie accessible — que vous débutiez ou que vous prépariez un combat.",
  },
  {
    id: "fabrice",
    name: "Coach Fabrice",
    role: "Coach Muay-Thaï",
    imageUrl: "/images/coaches/fabrice.png",
    bio: "Passionné de muay-thaï, Fabrice anime le cours du lundi. Son approche allie technique de frappe, travail aux pads et conditionnement physique pour tous les niveaux.",
  },
  {
    id: "morad",
    name: "Coach Morad",
    role: "Coach Muay-Thaï & Muay-Thaï Féminin",
    imageUrl: "/images/coaches/morad.png",
    bio: "Morad encadre les cours de muay-thaï et les cours féminins du mercredi et vendredi. Ambiance exigeante et bienveillante, avec une attention particulière portée à la technique et à la progression de chacun.",
  },
];

export default function AboutPageClient() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="py-20 px-6 md:py-36 md:px-12 bg-surface border-b border-edge">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-dim text-sm font-medium tracking-widest uppercase mb-2">
              Our story
            </p>
            {/* h1 — exactly one per page */}
            <h1 className="text-white font-bold text-5xl md:text-7xl tracking-tight">
              About
            </h1>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6 md:py-36 md:px-12 bg-canvas">
        <SectionWrapper>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* h2 title (commented out)
            <h2 className="text-white font-semibold text-3xl md:text-4xl tracking-tight mb-8">
              Born in Ivry.
              <br />
              Built for fighters.
            </h2>
            */}

            {/* Full-width image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/ui/about-picture.png"
                alt="Interior of Overhandz Boxing Club gym in Ivry-sur-Seine Paris showing boxing bags and ring"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* LEFT — old image (commented out, replaced by about-picture.png above)
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/ui/about-cropped.png"
                alt="Interior of Overhandz Boxing Club gym in Ivry-sur-Seine Paris showing boxing bags and ring"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            */}

            {/* RIGHT — story text (commented out, not visible with full-width image layout)
            <div className="space-y-4 text-dim text-base leading-relaxed">
              <p>
                Overhandz started in 2018 as a single training room in Ivry-sur-Seine
                with one heavy bag, a speed bag, and a coach who believed real boxing
                didn&apos;t belong to the elite.
              </p>
              <p>
                Since then, over 1,600 members have trained with us — from office
                workers looking for a challenge to fighters who have gone on to
                represent Paris at the regional and national level.
              </p>
              <p>
                We offer boxing, Muay Thai, sparring sessions, and beginner programs.
                Our approach is technical, demanding, and welcoming — you don&apos;t
                have to want to fight to train here. But if you do, we&apos;ll get you there.
              </p>
              <p>
                Based in Ivry-sur-Seine, minutes from central Paris.
              </p>
            </div>
            */}

            <div className="flex gap-3">
              <Button href="/schedule" variant="primary">
                Book a class
              </Button>
              <Button href="/contact" variant="secondary">
                Visit us
              </Button>
            </div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* COACHES SECTION */}
      <section className="py-20 px-6 md:py-36 md:px-12 bg-surface">
        <SectionWrapper>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="text-dim text-sm font-medium tracking-widest uppercase mb-2">
              The team
            </p>
            <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight">
              Coaches
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              >
                {/* Coach image */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-5">
                  <Image
                    src={coach.imageUrl}
                    alt={`${coach.name} — ${coach.role} at Overhandz Boxing Club`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-white font-semibold text-lg">{coach.name}</p>
                <p className="text-dim text-sm mb-3">{coach.role}</p>
                <p className="text-dim text-sm leading-relaxed">{coach.bio}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-20 px-6 md:py-36 md:px-12 bg-canvas">
        <SectionWrapper>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-dim text-sm font-medium tracking-widest uppercase mb-3">
              How we train
            </p>
            <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight mb-8">
              Our philosophy
            </h2>

            <div className="space-y-6 text-dim text-base leading-relaxed">
              <p>
                <span className="text-white font-medium">Technical first.</span>{" "}
                We believe foundations make fighters. Every session builds on proper
                stance, footwork, and defense before power.
              </p>
              <p>
                <span className="text-white font-medium">All levels, same gym.</span>{" "}
                Beginners and fight team members train in the same space. That&apos;s
                intentional — it accelerates learning and builds community.
              </p>
              <p>
                <span className="text-white font-medium">Discipline without ego.</span>{" "}
                We take the sport seriously. We don&apos;t take ourselves too seriously.
                The gym is demanding, not exclusive.
              </p>
            </div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* CLOSING CTA */}
      <FinalCTA />
    </main>
  );
}
