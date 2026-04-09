"use client"
// "use client" needed: uses Framer Motion for scroll animations, and useState for
// hover + mobile tap state.

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionWrapper from "@/components/ui/SectionWrapper"
import { instagramPosts } from "@/components/data/instagram"

// ---------------------------------------------------------------------------
// InstagramFeed — Instagram-style photo grid
//
// Layout:
//   - Desktop: 3 columns
//   - Mobile: 2 columns
//
// Each card:
//   - Square aspect ratio (1:1)
//   - Desktop: overlay + zoom on hover; click opens Instagram link
//   - Mobile:  1st tap shows overlay, 2nd tap on same post opens Instagram link
//
// // FUTURE BACKEND:
// // Replace instagramPosts mock data with Instagram Basic Display API
// // or a third-party embed service (e.g. Behold, Curator)
// // Auto-refresh content daily via a cron job
// ---------------------------------------------------------------------------

export default function InstagramFeed() {
  // hoveredPostId — which post the mouse is currently over (desktop)
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);
  // activePostId — which post had its overlay pinned open by a tap (mobile)
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const handlePostClick = (postId: string, link: string) => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      if (activePostId === postId) {
        // Second tap: open the link and dismiss the overlay
        window.open(link, "_blank", "noopener,noreferrer");
        setActivePostId(null);
      } else {
        // First tap: pin the overlay open
        setActivePostId(postId);
      }
    } else {
      // Desktop: click opens the link directly
      window.open(link, "_blank", "noopener,noreferrer");
    }
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
          className="mb-10"
        >
          <p className="text-dim text-sm font-medium tracking-widest uppercase mb-2">
            Follow the journey
          </p>
          {/* h2 — every section title uses h2 (only one h1 per page) */}
          <h2 className="text-white font-semibold text-3xl md:text-5xl tracking-tight">
            @overhandzclub
          </h2>
        </motion.div>

        {/* INSTAGRAM GRID */}
        {/* grid-cols-2 on mobile, grid-cols-3 on desktop — per spec */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {instagramPosts.map((post, index) => {
            // Overlay is visible when hovered (desktop) or tapped once (mobile)
            const overlayVisible =
              hoveredPostId === post.id || activePostId === post.id;

            return (
              <motion.div
                key={post.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
                // aspect-square = forces 1:1 ratio
                // overflow-hidden = clips the zoom effect to the card boundary
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => setHoveredPostId(post.id)}
                onMouseLeave={() => setHoveredPostId(null)}
                onClick={() => handlePostClick(post.id, post.link)}
              >
                {/* Inner wrapper for the image — scales on hover/tap */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: overlayVisible ? 1.1 : 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={post.imageUrl}
                    alt={`Instagram post from Overhandz Boxing Club: ${post.caption}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* OVERLAY — fades in on hover (desktop) or 1st tap (mobile) */}
                <motion.div
                  className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-3"
                  animate={{ opacity: overlayVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Like count */}
                  <div className="flex items-center gap-1.5 text-white text-sm font-semibold mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {post.likes.toLocaleString()}
                  </div>
                  {/* Caption — truncated to keep the overlay clean */}
                  <p className="text-white/80 text-xs text-center line-clamp-2 leading-snug">
                    {post.caption}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* INSTAGRAM CTA */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          className="mt-8 text-center"
        >
          {/* motion.a with whileHover handles opacity change — no raw CSS transition */}
          <motion.a
            href="https://www.instagram.com/overhandzclub/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0.55 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 0.15 }}
            className="text-dim text-sm"
          >
            View more on Instagram →
          </motion.a>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
