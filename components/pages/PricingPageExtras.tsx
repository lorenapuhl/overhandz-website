"use client"
// "use client" needed: uses Framer Motion for entrance animations.

import { motion } from "framer-motion"
import SectionWrapper from "@/components/ui/SectionWrapper"

// ---------------------------------------------------------------------------
// PricingPageExtras — header and FAQ for the /pricing page
//
// Provides the page h1 (required — exactly one h1 per page) and
// a FAQ section to reduce friction / increase conversion.
// ---------------------------------------------------------------------------

const faqs = [
  {
    q: "Do I need to sign a contract?",
    a: "No. All options — drop-in, class packs, and monthly memberships — are contract-free. Cancel or change at any time.",
  },
  {
    q: "Can I try before I commit?",
    a: "Yes. Your first class is completely free. No card required. Show up, train, then decide.",
  },
  {
    q: "How long do class packs last?",
    a: "Class packs are valid for 3 months from the date of purchase. Use them at your own pace.",
  },
  {
    q: "What's included with the membership?",
    a: "Unlimited classes every month across all class types — Boxing, Muay Thai, Sparring, and Beginners. Plus priority booking and one guest pass per month.",
  },
  {
    q: "Do you provide equipment?",
    a: "Gloves and hand wraps can be borrowed at the gym. We recommend getting your own after a few sessions.",
  },
];

export default function PricingPageExtras() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="py-20 px-6 md:py-36 md:px-12 bg-surface border-b border-edge">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-dim text-sm font-medium tracking-widest uppercase mb-2">
              Boxing membership paris
            </p>
            {/* h1 — exactly one per page */}
            <h1 className="text-white font-bold text-5xl md:text-7xl tracking-tight">
              Pricing
            </h1>
            <p className="text-dim text-base mt-4 max-w-lg">
              No contracts, no hidden fees. Pick the plan that fits your schedule.
            </p>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 md:py-36 md:px-12 bg-canvas">
        <SectionWrapper>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-10"
          >
            <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight">
              Frequently asked
            </h2>
          </motion.div>

          <div className="divide-y divide-edge">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
                className="py-6"
              >
                <p className="text-white font-medium mb-2">{faq.q}</p>
                <p className="text-dim text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
