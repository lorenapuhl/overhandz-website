"use client"
// "use client" needed: manages booking modal state (useState).
//
// Why a separate wrapper component instead of putting state directly in app/page.tsx?
//
// In Next.js App Router, page.tsx is a Server Component by default.
// Server Components can export `metadata` (for SEO), but they CANNOT use hooks
// like useState. So we split the logic:
//
//   app/page.tsx → Server Component → exports metadata, renders HomePageWrapper
//   HomePageWrapper → Client Component → manages modal state, renders all sections

import { useState } from "react"
import HeroSection from "@/components/sections/HeroSection"
import SocialProofStrip from "@/components/sections/SocialProofStrip"
import InstagramFeed from "@/components/sections/InstagramFeed"
import SchedulePreview from "@/components/sections/SchedulePreview"
import PricingSection from "@/components/sections/PricingSection"
import EventsSection from "@/components/sections/EventsSection"
import PromotionsSection from "@/components/sections/PromotionsSection"
import NewsSection from "@/components/sections/NewsSection"
import AboutSection from "@/components/sections/AboutSection"
import FinalCTA from "@/components/sections/FinalCTA"
import BookingModal from "@/components/BookingModal"
import type { ScheduleClass } from "@/components/data/classes"

// ---------------------------------------------------------------------------
// HomePageWrapper — orchestrates the home page sections and booking modal
// ---------------------------------------------------------------------------

export default function HomePageWrapper() {
  // modalOpen tracks whether the booking modal is visible.
  // false = hidden (default), true = visible
  const [modalOpen, setModalOpen] = useState(false);

  // selectedClass stores the class the user clicked "Book" on.
  // null = no class selected yet (modal is empty/closed)
  const [selectedClass, setSelectedClass] = useState<ScheduleClass | null>(null);

  // Called by SchedulePreview when user clicks "Book" on a class row.
  // Stores the class and opens the modal.
  const handleBook = (cls: ScheduleClass) => {
    setSelectedClass(cls);
    setModalOpen(true);
  };

  // Called by BookingModal when user closes or completes the flow.
  const handleClose = () => {
    setModalOpen(false);
    // We keep selectedClass in state so the modal's exit animation
    // can still show the class name while fading out
  };

  return (
    // main element wraps all page sections (Navbar and Footer are in layout.tsx)
    <main>
      {/* 1. Hero — above the fold, primary CTA */}
      <HeroSection />

      {/* 2. Social Proof Strip — key stats (1600+ trained, etc.) */}
      <SocialProofStrip />

      {/* 3. Instagram Feed — shows content, builds community trust */}
      <InstagramFeed />

      {/* 4. Schedule Preview — onBook triggers the booking modal */}
      <SchedulePreview onBook={handleBook} />

      {/* 5. Pricing — 3 tier cards */}
      <PricingSection />

      {/* 6. Events — upcoming fight nights, seminars, open gyms */}
      <EventsSection />

      {/* 7. Promotions — first class free, beginner program */}
      <PromotionsSection />

      {/* 8. News — fight results, updates, announcements */}
      <NewsSection />

      {/* 9. About — gym story, split layout */}
      <AboutSection />

      {/* 10. Final CTA — last conversion push before footer */}
      <FinalCTA />

      {/* BOOKING MODAL — rendered at the page root so it sits above all content */}
      {/* Only mounted once here; modal is hidden/shown via isOpen prop */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleClose}
        selectedClass={selectedClass}
      />

      {/* STICKY MOBILE CTA — fixed at the bottom on small screens */}
      {/* hidden on desktop (md:hidden) — desktop users see CTAs inline */}
      <div className="fixed bottom-0 left-0 right-0 z-20 md:hidden p-4 bg-canvas/95 backdrop-blur border-t border-edge">
        <a
          href="/schedule"
          className="block w-full bg-white text-black text-center font-medium text-sm py-3 rounded-md"
        >
          Book a Class
        </a>
      </div>
    </main>
  );
}
