"use client"
// "use client" needed: uses useState for mobile menu toggle.

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Button from "@/components/ui/Button"

// ---------------------------------------------------------------------------
// Navbar — sticky top navigation bar
//
// Features:
//   - Sticky at top of page (stays visible while scrolling)
//   - Backdrop blur for depth effect
//   - Collapses to hamburger menu on mobile
//   - "Book a Class" CTA navigates to the /schedule page
// ---------------------------------------------------------------------------

// Nav links definition — easy to extend without modifying JSX
const NAV_LINKS = [
  { href: "/schedule", label: "Schedule" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  // useState stores the mobile menu open/closed state.
  // false = closed (default), true = open
  // setMobileOpen is the function to update this state.
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // sticky top-0 = sticks to the top of the viewport when scrolling
    // z-30 = sits above page content but below modals (z-40/z-50)
    // backdrop-blur-md = frosted glass effect on the navbar background
    // border-b border-edge = very subtle bottom border separator
    <header className="sticky top-0 z-30 bg-canvas/90 backdrop-blur-md border-b border-edge">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO — links to home page */}
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
        >
          OVERHANDZ
        </Link>

        {/* DESKTOP NAV — hidden on mobile (hidden md:flex) */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Map over the links array to render each nav item */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dim hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA — hidden on mobile */}
        <div className="hidden md:block">
          <Button href="/schedule" variant="primary">
            Book a Class
          </Button>
        </div>

        {/* MOBILE HAMBURGER BUTTON — visible only on mobile (md:hidden) */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {/* Animate between hamburger and X icon */}
          <motion.div
            animate={{ rotate: mobileOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileOpen ? (
              // X icon when menu is open
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </motion.div>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN — rendered only when mobileOpen is true */}
      {/* AnimatePresence enables the exit animation when menu closes */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden md:hidden border-t border-edge bg-canvas"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  // Close mobile menu when a link is clicked
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-base py-2 border-b border-edge last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile CTA */}
              <div className="pt-2">
                <Button
                  href="/schedule"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Class
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
