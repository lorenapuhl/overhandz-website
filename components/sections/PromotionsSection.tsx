"use client"
// "use client" needed: uses Framer Motion for scroll animations.

import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "@/components/ui/SectionWrapper"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import { promotions } from "@/components/data/promotions"

// ---------------------------------------------------------------------------
// PromotionsSection — promotional offers (First class free, Beginner program)
//
// The highlighted promotion gets a larger card for visual emphasis.
//
// // FUTURE BACKEND:
// // Replace promotions mock data with /api/promotions
// // Track promo code usage in DB
// // Auto-expire promotions past their end date
// ---------------------------------------------------------------------------

export default function PromotionsSection() {
  return (
    <section className="py-20 px-6 md:py-36 md:px-12 bg-canvas">
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
            Start today
          </p>
          <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight">
            Offers
          </h2>
        </motion.div>

        {/* PROMOTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              // whileHover="hovered" propagates the variant name down to child motion elements
              // so the inner image can respond with scale — no raw CSS transition needed
              whileHover="hovered"
              // Highlighted card spans 2 columns on desktop
              className={`
                bg-surface border rounded-xl overflow-hidden flex flex-col
                ${promo.highlight ? "border-white/30 md:col-span-2" : "border-edge"}
              `}
            >
              {/* PROMO IMAGE */}
              <div className={`relative overflow-hidden ${promo.highlight ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                <motion.div
                  className="absolute inset-0"
                  variants={{ hovered: { scale: 1.05 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                <Image
                  src={promo.imageUrl}
                  alt={`${promo.title} promotion at Overhandz Boxing Club`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 33vw"
                  className="object-cover"
                />
                </motion.div>
                {/* Badge overlaid on image */}
                <div className="absolute top-3 left-3">
                  <Badge>{promo.badge}</Badge>
                </div>
              </div>

              {/* PROMO DETAILS */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-xl mb-2">{promo.title}</h3>
                <p className="text-dim text-sm leading-relaxed mb-4 flex-1">
                  {promo.description}
                </p>

                {/* Expiry label if applicable */}
                {promo.expiresLabel && (
                  <p className="text-dim text-xs mb-3">{promo.expiresLabel}</p>
                )}

                <Button
                  href="https://overhandz.bigcartel.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVVP3mw4tDYQARO-KihA8nWJUgqxVdb4hnfPNmihBKmSPPO5ra4_t1TdfpWg_aem_dcZpPULbT49BFVH5v3zdnA"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={promo.highlight ? "primary" : "secondary"}
                  className="self-start"
                >
                  {promo.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
