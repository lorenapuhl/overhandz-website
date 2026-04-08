"use client"
// "use client" needed: uses useState for modal state, Framer Motion for scroll and hover animations.

import { useState } from "react"
import { motion } from "framer-motion"
import SectionWrapper from "@/components/ui/SectionWrapper"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import SubscriptionModal from "@/components/SubscriptionModal"
import { pricingPlans, simpleOptions } from "@/components/data/pricing"
import type { PricingPlan } from "@/components/data/pricing"

// ---------------------------------------------------------------------------
// PricingSection — 4 subscription plan cards + simple options row
//
// The highlighted card (Muay-Thaï Full) is visually elevated.
//
// Used on both the landing page and the /pricing page.
//
// // FUTURE BACKEND:
// // Replace pricingPlans mock data with Stripe Product/Price API
// // Add checkout → integrate Stripe Checkout or Stripe Payment Links
// ---------------------------------------------------------------------------

export default function PricingSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleSignUp = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <section className="py-20 px-6 md:py-36 md:px-12 bg-canvas">
      <SectionWrapper>

        {/* SECTION HEADER */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-dim text-sm font-medium tracking-widest uppercase mb-2">
            Abonnements
          </p>
          <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight">
            Choisissez votre discipline
          </h2>
          <p className="text-dim text-base mt-4 max-w-md mx-auto">
            Abonnements annuels sans engagement caché. Commencez quand vous voulez.
          </p>
        </motion.div>

        {/* PRICING CARDS — 2 columns on md, 4 on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              className={`
                bg-surface rounded-xl p-6 flex flex-col
                ${plan.highlight
                  ? "border border-white/40 ring-1 ring-white/10"
                  : "border border-edge"
                }
              `}
            >
              {/* CARD TOP — plan name + optional badge */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-white font-semibold text-lg">{plan.name}</p>
                  <p className="text-dim text-sm mt-1">{plan.description}</p>
                </div>
                {plan.badge && (
                  <Badge className="shrink-0 ml-2">{plan.badge}</Badge>
                )}
              </div>

              {/* PRICE */}
              <div className="mb-6">
                <span className="text-white font-bold text-4xl">€{plan.price}</span>
                <span className="text-dim text-sm ml-2">{plan.period}</span>
              </div>

              {/* BENEFITS LIST */}
              <ul className="space-y-3 mb-6 flex-1">
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit.text}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span
                      className={`mt-0.5 shrink-0 ${
                        benefit.included ? "text-white" : "text-edge"
                      }`}
                    >
                      {benefit.included ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                    <span className={benefit.included ? "text-dim" : "text-edge"}>
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* NOTE (e.g. student discount) */}
              {plan.note && (
                <p className="text-dim text-xs mb-4">{plan.note}</p>
              )}

              {/* CTA BUTTON */}
              <Button
                variant={plan.highlight ? "primary" : "secondary"}
                className="w-full"
                onClick={() => handleSignUp(plan)}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* SIMPLE OPTIONS ROW */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          className="mt-8 border border-edge rounded-xl divide-y divide-edge"
        >
          {simpleOptions.map((opt) => (
            <div
              key={opt.label}
              className="flex items-center justify-between px-6 py-4"
            >
              <p className="text-white font-medium text-sm">{opt.label}</p>
              <div className="text-right">
                {opt.price !== null ? (
                  <>
                    <span className="text-white font-semibold">€{opt.price}</span>
                    <span className="text-dim text-xs ml-1">{opt.unit}</span>
                  </>
                ) : (
                  <span className="text-dim text-sm">{opt.unit}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

      </SectionWrapper>

      <SubscriptionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
}
