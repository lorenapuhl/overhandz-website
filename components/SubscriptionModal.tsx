"use client"
// "use client" needed: uses useState for multi-step form flow,
// and Framer Motion for step transition animations.

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Modal from "@/components/ui/Modal"
import Button from "@/components/ui/Button"
import type { PricingPlan } from "@/components/data/pricing"

// ---------------------------------------------------------------------------
// SubscriptionModal — 4-step subscription sign-up flow (frontend-only)
//
// Steps:
//   1. Confirm subscription selection
//   2. Enter personal details (name, email, phone)
//   3. Fake payment screen (card form)
//   4. Success confirmation
//
// Props:
//   isOpen        — controls visibility
//   onClose       — called when user closes the modal
//   selectedPlan  — the subscription plan being signed up for (can be null)
//
// FUTURE BACKEND:
// Step 3 → integrate Stripe Checkout or Stripe Elements
// On success → store subscription in DB, send confirmation email via Resend
// ---------------------------------------------------------------------------

interface FormData {
  name: string;
  email: string;
  phone: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

const slideVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
}

export default function SubscriptionModal({
  isOpen,
  onClose,
  selectedPlan,
}: SubscriptionModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
    });
    setIsProcessing(false);
    onClose();
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4);
    }, 1500);
  };

  const inputClass =
    "w-full bg-canvas border border-edge rounded-md px-4 py-3 text-white text-sm placeholder:text-dim focus:outline-none focus:border-white/40 transition-colors";

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={step < 4 ? "S'inscrire" : undefined}
    >
      <div className="px-6 py-6">

        {/* PROGRESS DOTS — shown on steps 1-3 only */}
        {step < 4 && (
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  s <= step ? "bg-white" : "bg-edge"
                }`}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">

          {/* ────────────────────────────────────────────────────────────
              STEP 1 — Confirm subscription selection
              ──────────────────────────────────────────────────────────── */}
          {step === 1 && selectedPlan && (
            <motion.div
              key="step1"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="text-dim text-sm mb-4">You are booking:</p>

              {/* Subscription summary card */}
              <div className="bg-canvas border border-edge rounded-lg p-4 mb-6 space-y-2">
                <p className="text-white font-semibold text-lg">{selectedPlan.name}</p>
                <p className="text-dim text-sm">{selectedPlan.description}</p>
                <p className="text-white font-bold text-2xl mt-2">
                  €{selectedPlan.price}
                  <span className="text-dim text-sm font-normal ml-2">{selectedPlan.period}</span>
                </p>
              </div>

              <Button variant="primary" className="w-full" onClick={() => setStep(2)}>
                Continuer
              </Button>
            </motion.div>
          )}

          {/* ────────────────────────────────────────────────────────────
              STEP 2 — Personal details
              ──────────────────────────────────────────────────────────── */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-white font-medium mb-2">Vos coordonnées</p>

              <div>
                <label className="block text-dim text-xs mb-1">Nom complet</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className={inputClass}
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-dim text-xs mb-1">Email</label>
                <input
                  type="email"
                  placeholder="jean@example.com"
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-dim text-xs mb-1">Téléphone (facultatif)</label>
                <input
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="secondary" className="flex-1" onClick={() => setStep(1)}>
                  Retour
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => setStep(3)}
                  disabled={!formData.name || !formData.email}
                >
                  Continuer
                </Button>
              </div>
            </motion.div>
          )}

          {/* ────────────────────────────────────────────────────────────
              STEP 3 — Payment
              FUTURE BACKEND: Replace with Stripe Elements component
              ──────────────────────────────────────────────────────────── */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-white font-medium mb-2">Paiement de l&apos;abonnement</p>

              {/* Subscription price summary */}
              <div className="bg-canvas border border-edge rounded-lg p-3 flex justify-between items-center">
                <span className="text-dim text-sm">{selectedPlan?.name}</span>
                <span className="text-white font-semibold">€{selectedPlan?.price} / an</span>
              </div>

              {/* Card number */}
              <div>
                <label className="block text-dim text-xs mb-1">Numéro de carte</label>
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className={inputClass}
                  maxLength={19}
                  value={formData.cardNumber}
                  onChange={(e) => updateField("cardNumber", e.target.value)}
                />
              </div>

              {/* Expiry + CVC */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-dim text-xs mb-1">Expiration</label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className={inputClass}
                    maxLength={5}
                    value={formData.cardExpiry}
                    onChange={(e) => updateField("cardExpiry", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-dim text-xs mb-1">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className={inputClass}
                    maxLength={3}
                    value={formData.cardCvc}
                    onChange={(e) => updateField("cardCvc", e.target.value)}
                  />
                </div>
              </div>

              <p className="text-dim text-xs">
                Ceci est une démonstration. Aucun paiement réel n&apos;est effectué.
              </p>

              <div className="flex gap-3 pt-2">
                <Button variant="secondary" className="flex-1" onClick={() => setStep(2)}>
                  Retour
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Traitement..." : `S'inscrire · €${selectedPlan?.price}`}
                </Button>
              </div>
            </motion.div>
          )}

          {/* ────────────────────────────────────────────────────────────
              STEP 4 — Success screen
              ──────────────────────────────────────────────────────────── */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center py-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>

              <h3 className="text-white text-xl font-semibold mb-2">
                Inscription confirmée.
              </h3>
              <p className="text-dim text-sm mb-1">
                {selectedPlan?.name} · {selectedPlan?.price}€ / an
              </p>
              <p className="text-dim text-sm mb-6">
                Un email de confirmation a été envoyé à {formData.email}
              </p>

              <Button variant="primary" onClick={handleClose} className="w-full">
                Terminé
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
}
