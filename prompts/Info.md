----------------------------------
PROMPT
----------------------------------

# 0. Preliminary
Read CLAUDE.md and the skills from `@skills/`. Then read this file. Follow the exact guidelines described in this file. If you have any questions, ask me first instead of guessing a solution. If any guidelines from this file and `CLAUDE.md` or the skills from `@skills/` contradict each other, ask me to clarify. 

# 1. Contact Section
Read in `@components/pages/ContactPageClient.tsx` , add an interactive map showing the address in the map placeholder. Update the information in that section with the  data found in `@public/images/info/contact-info.png`
- Adapt the UI structure if necessary to acommodate the information and make it look visually clean

# 2. Pricing Section
In `@components/pages/PricigPageExtras.tsx`, `@components/data/pricing.ts` and `@components/sections/PricingSection.tsx`, update the data as follows: 
- Read an retrieve data from `@public/images/info/pricing-info.png`
- Adapt the UI structure if necessary to acommodate the information and make it look visually clean

# 3. Schedule section
In `@components/data/classes.ts`, `@components/sections/SchedulePreview.tsx` and `@components/pages/SchedulePageClient.tsx`, update the data as follows: 
- Read an retrieve data from `@public/images/info/schedule-info.png`
- Adapt the UI structure if necessary to acommodate the information and make it look visually clean

# 4. Hero-section and logo
- `@public/images/ui/logo.png:`
Use the logo and place it instead of the "overhandz" title in the header as well as in the footer.
- `@public/images/ui/hero.png:`
Crop the screenshot to isolate just the post image — no browser chrome, no Instagram sidebar, no navigation arrows, no carousel dots, no comments panel. Use these coordinates (confirmed for this setup): x_left=367, x_right=989, y_up=180, y_down=1017 which translates to the ImageMagick crop argument: 622x837+367+180
 Run: magick "input.png" -crop 622x837+367+180 +repage "output.png". use the image for the right side of the hero-section in `@components/sections/HeroSection.tsx`. 
- `@public/images/ui/about.png`: Crop the screenshot to isolate just the post image — no browser chrome, no Instagram sidebar, no navigation arrows, no carousel dots, no comments panel. Use these coordinates (confirmed for this setup): x_left=367, x_right=989, y_up=180, y_down=1017 which translates to the ImageMagick crop argument: 622x837+367+180
 Run: magick "input.png" -crop 622x837+367+180 +repage "output.png". use the image for the right side of the about-section `@components/sections/AboutSection.tsx` as well as the about section in `@pages/AboutPageClient.tsx`

# 5. Coaches
- Adapt the coaches section from `@pages/AboutPageClient.tsx`. Retrieve the information found in `@public/images/info/pricing-info.png`, find the coach names and use these to replace the mock coach names.

