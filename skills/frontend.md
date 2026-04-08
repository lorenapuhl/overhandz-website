# FRONTEND SYSTEM — OVERHANDZ

--------------------------------
BRAND IDENTITY
--------------------------------

Style:
- Raw boxing gym
- Minimal
- Dark
- Authentic (NOT polished startup)

--------------------------------
COLORS
--------------------------------

Background: #0B0B0B  
Surface: #111111  
Border: #1F1F1F  

Primary text: #FFFFFF  
Secondary text: #A1A1A1  

Accent: #FFFFFF  

Hover: #E5E5E5  

--------------------------------
TYPOGRAPHY
--------------------------------

Font:
- Inter (or similar grotesk)

Scale:

H1: text-5xl md:text-7xl font-bold  
H2: text-3xl md:text-5xl font-semibold  
H3: text-xl md:text-2xl  
Body: text-sm md:text-base  

Tracking:
- Slightly tight for headings

--------------------------------
SPACING SYSTEM
--------------------------------

Sections:
- py-20 md:py-32

Container:
- max-w-7xl mx-auto px-6

Grid gaps:
- gap-6 md:gap-10

--------------------------------
COMPONENTS
--------------------------------

BUTTON

Primary:
- bg-white text-black
- px-6 py-3
- rounded-md
- hover:opacity-90

Secondary:
- border border-white
- text-white

--------------------------------

CARD

- bg-[#111]
- border border-[#1F1F1F]
- rounded-xl
- p-4

--------------------------------

BADGE

- small text
- bg-white/10
- px-2 py-1
- rounded

--------------------------------

INSTAGRAM GRID

- aspect-square
- overflow-hidden
- hover zoom

--------------------------------

SCHEDULE ROW

- flex justify-between
- border-b border-[#1F1F1F]
- py-4

--------------------------------

MODAL

- fixed center
- dark overlay
- smooth scale in

--------------------------------

NAVBAR

- sticky top-0
- backdrop blur
- subtle border bottom

--------------------------------

MOBILE UX
--------------------------------

- Sticky bottom CTA
- Large tap targets
- Simplified layout

--------------------------------

--------------------------------
RULES
--------------------------------

- If real images are not provided, always use:
  https://placehold.co/800x600/121212/FFFFFF
  Adjust dimensions to match context. Never leave a broken image path.
  
--------------------------------
VERIFICATION CHECKLIST
--------------------------------

Run this after building every component in components/sections/

Review the file you just wrote. Answer YES or NO for every item.
If any answer is NO: stop, fix it, then re-run this checklist from the top.

- [ ] "use client" is the FIRST line of the file — no blank lines, no comments above it
- [ ] `import { motion } from "framer-motion"` is present
- [ ] The component is a default export: `export default function [Name]()`
- [ ] The root element is a `<section>`, not a `<div>`
- [ ] No hardcoded hex values anywhere in the file (search for #)
- [ ] No hardcoded rgb() or hsl() values
- [ ] No more than ONE accent color in this section
      (accent = text-blue-axis, text-uv-axis, or text-magenta-axis)
- [ ] Section has desktop padding: py-36 px-12
- [ ] Section has mobile padding override: py-20 px-6
      (written as: `py-20 px-6 md:py-36 md:px-12` or equivalent)
- [ ] Content is wrapped in: max-w-6xl mx-auto
- [ ] Zero raw <img> tags — every image uses next/image
- [ ] No Unsplash URLs or other demo image URLs
- [ ] Every placeholder uses: https://placehold.co/[W]x[H]/121212/FFFFFF
- [ ] Every next/image has width, height, and a descriptive alt prop
      (alt="image" or alt="" is a failure unless purely decorative)
- [ ] No <a href="..."> for internal links — uses next/link instead
- [ ] No <a> tags styled to look like buttons
- [ ] Every clickable element that isn't a link uses <button>
- [ ] All animations use Framer Motion — zero raw CSS transitions on interactive elements
- [ ] All scroll animations use whileInView with viewport={{ once: true }}
- [ ] No decorative flourishes (borders, dividers, icons) added without a clear purpose

  
  

