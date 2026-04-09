"use client"
// "use client" needed: uses useState for multi-step form flow,
// and Framer Motion for step transition animations.

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Modal from "@/components/ui/Modal"
import Button from "@/components/ui/Button"
import type { ScheduleClass } from "@/components/data/classes"

// ---------------------------------------------------------------------------
// BookingModal — 4-step booking flow (frontend-only, no real payment)
//
// Steps:
//   1. Confirm class selection
//   2. Enter personal details (name, email, phone)
//   3. Fake payment screen (card form)
//   4. Success confirmation
//
// Props:
//   isOpen        — controls visibility
//   onClose       — called when user closes the modal
//   selectedClass — the class the user wants to book (can be null)
//
// FUTURE BACKEND:
// Step 3 → integrate Stripe Checkout or Stripe Elements
// On success → store booking in DB, send confirmation email via Resend
// ---------------------------------------------------------------------------

// TypeScript interface for the form data collected across steps 2 and 3
interface FormData {
  name: string;
  email: string;
  phone: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

// Each step gets a slide animation direction
// (animating left/right gives a wizard-flow feel)
const slideVariants = {
  // Start: slightly to the right and invisible
  enter: { opacity: 0, x: 30 },
  // Active: fully visible, centered
  center: { opacity: 1, x: 0 },
  // Exit: slightly to the left and invisible
  exit: { opacity: 0, x: -30 },
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClass: ScheduleClass | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedClass,
}: BookingModalProps) {
  // step: which screen of the wizard we are on (1, 2, 3, or 4)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // formData holds all fields collected in steps 2 and 3
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  // isProcessing simulates a server call on the payment step
  const [isProcessing, setIsProcessing] = useState(false);

  // Helper: update a single field in formData without losing other fields.
  // The spread operator (...prev) keeps all existing values and only
  // overwrites the field we are changing.
  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Called when user closes or finishes — reset everything for next use
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

  // Simulates a payment processing delay (like a real Stripe call)
  const handlePayment = () => {
    setIsProcessing(true);
    // setTimeout runs a function after a delay (1.5 seconds here)
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4); // move to success screen
    }, 1500);
  };

  // Shared input style — reused for all form fields
  const inputClass =
    "w-full bg-canvas border border-edge rounded-md px-4 py-3 text-white text-sm placeholder:text-dim focus:outline-none focus:border-white/40 transition-colors";

  // Progress indicator dots at the top of the modal
  const steps = [1, 2, 3, 4];

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={step < 4 ? "Book a Class" : undefined}
    >
      <div className="px-6 py-6">

        {/* PROGRESS DOTS — shown on steps 1-3 only */}
        {step < 4 && (
          <div className="flex items-center gap-2 mb-6">
            {steps.slice(0, 3).map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  s <= step ? "bg-white" : "bg-edge"
                }`}
              />
            ))}
          </div>
        )}

        {/* STEP CONTENT — AnimatePresence + motion.div for slide transitions */}
        {/* mode="wait" ensures the exit animation finishes before the new step enters */}
        <AnimatePresence mode="wait">

          {/* ────────────────────────────────────────────────────────────
              STEP 1 — Confirm class selection
              ──────────────────────────────────────────────────────────── */}
          {step === 1 && selectedClass && (
            <motion.div
              key="step1"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="text-dim text-sm mb-4">You are booking:</p>

              {/* Class summary card */}
              <div className="bg-canvas border border-edge rounded-lg p-4 mb-6 space-y-2">
                <p className="text-white font-semibold text-lg">{selectedClass.name}</p>
                <p className="text-dim text-sm">{selectedClass.day} at {selectedClass.time}</p>
                <p className="text-dim text-sm">Coach: {selectedClass.coach}</p>
                <p className="text-dim text-sm">{selectedClass.durationMinutes} minutes · {selectedClass.type}</p>
                {/* Urgency signal */}
                <p className="text-lift text-xs font-medium">
                  {selectedClass.spotsLeft} spot{selectedClass.spotsLeft === 1 ? "" : "s"} left
                </p>
              </div>

              <Button variant="primary" className="w-full" onClick={() => setStep(2)}>
                Continue
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
              <p className="text-white font-medium mb-2">Your details</p>

              {/* Name field */}
              <div>
                <label className="block text-dim text-xs mb-1">Full name</label>
                <input
                  type="text"
                  placeholder="Marianne Polare"
                  className={inputClass}
                  value={formData.name}
                  // onChange fires every time the user types — updates formData
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-dim text-xs mb-1">Email</label>
                <input
                  type="email"
                  placeholder="marianne@example.com"
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>

              {/* Phone field */}
              <div>
                <label className="block text-dim text-xs mb-1">Phone (optional)</label>
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
                  Back
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => setStep(3)}
                  // Disable "Continue" if name or email is empty
                  disabled={!formData.name || !formData.email}
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}

          {/* ────────────────────────────────────────────────────────────
              STEP 3 — Fake payment screen
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
              <p className="text-white font-medium mb-2">Payment</p>

              {/* Price summary */}
              <div className="bg-canvas border border-edge rounded-lg p-3 flex justify-between items-center">
                <span className="text-dim text-sm">{selectedClass?.name}</span>
                <span className="text-white font-semibold">€25</span>
              </div>

              {/* Card number */}
              <div>
                <label className="block text-dim text-xs mb-1">Card number</label>
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className={inputClass}
                  maxLength={19}
                  value={formData.cardNumber}
                  onChange={(e) => updateField("cardNumber", e.target.value)}
                />
              </div>

              {/* Expiry + CVC — side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-dim text-xs mb-1">Expiry</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
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
                This is a demo. No real payment is processed.
              </p>

              <div className="flex gap-3 pt-2">
                <Button variant="secondary" className="flex-1" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {/* Show loading text while simulating processing */}
                  {isProcessing ? "Processing..." : "Pay €25"}
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
              {/* Animated checkmark circle */}
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
                You're booked in.
              </h3>
              <p className="text-dim text-sm mb-1">
                {selectedClass?.name} · {selectedClass?.day} at {selectedClass?.time}
              </p>
              <p className="text-dim text-sm mb-6">
                A confirmation has been sent to {formData.email}
              </p>

              <Button variant="primary" onClick={handleClose} className="w-full">
                Done
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
}
