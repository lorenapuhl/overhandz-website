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
    q: "Comment s'inscrire ?",
    a: "Venez directement à la salle ou contactez-nous pour choisir votre formule. Aucun engagement à long terme requis.",
  },
  {
    q: "Puis-je essayer avant de m'abonner ?",
    a: "Oui. Venez à un cours à l'unité (15€) pour voir si la discipline vous convient avant de prendre un abonnement annuel.",
  },
  {
    q: "Y a-t-il une réduction étudiant ?",
    a: "Oui. L'abonnement Boxe Anglaise Full est proposé à un tarif réduit pour les étudiants et les élèves. Renseignez-vous à l'accueil.",
  },
  {
    q: "Qu'est-ce que l'abonnement Full inclut en plus ?",
    a: "Les formules Full (Boxe Anglaise Full et Muay-Thaï Full) incluent un accès libre à la salle en dehors des cours et un tee-shirt offert.",
  },
  {
    q: "Le matériel est-il fourni ?",
    a: "Des gants et bandes peuvent être empruntés à la salle. Nous recommandons d'acquérir votre propre équipement après quelques séances.",
  },
  {
    q: "Comment fonctionnent les cours particuliers ?",
    a: "Les cours particuliers sont disponibles sur rendez-vous avec nos coachs. Contactez-nous pour les disponibilités et les tarifs.",
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
              Abonnements · Ivry-sur-Seine
            </p>
            {/* h1 — exactly one per page */}
            <h1 className="text-white font-bold text-5xl md:text-7xl tracking-tight">
              Tarifs
            </h1>
            <p className="text-dim text-base mt-4 max-w-lg">
              Des abonnements adaptés à votre discipline et votre rythme.
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
              Questions fréquentes
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
