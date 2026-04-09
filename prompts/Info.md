----------------------------------
PROMPT
----------------------------------

# 0. Preliminary
Read `CLAUDE.md` and the skills from `@skills/`. 

Then read this file. Follow the exact guidelines described in this file. If you have any questions, ask me first instead of guessing a solution. If any guidelines from this file and `CLAUDE.md` or the skills from `@skills/` contradict each other, ask me to clarify. 

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
- `@public/images/ui/logo.png`:
Use the logo and place it instead of the "overhandz" title in the header as well as in the footer.
- `@public/images/ui/hero.png`:
Crop the screenshot to isolate just the post image — no browser chrome, no Instagram sidebar, no navigation arrows, no carousel dots, no comments panel. Use these coordinates (confirmed for this setup): x_left=367, x_right=989, y_up=180, y_down=1017 which translates to the ImageMagick crop argument: 622x837+367+180
 Run: magick "input.png" -crop 622x837+367+180 +repage "output.png". use the image for the right side of the hero-section in `@components/sections/HeroSection.tsx`. 
- `@public/images/ui/about.png`: Crop the screenshot to isolate just the post image — no browser chrome, no Instagram sidebar, no navigation arrows, no carousel dots, no comments panel. Use these coordinates (confirmed for this setup): x_left=367, x_right=989, y_up=180, y_down=1017 which translates to the ImageMagick crop argument: 622x837+367+180
 Run: magick "input.png" -crop 622x837+367+180 +repage "output.png". use the image for the right side of the about-section `@components/sections/AboutSection.tsx` as well as the about section in `@pages/AboutPageClient.tsx`.

# 5. Coaches
- Adapt the coaches section from `@pages/AboutPageClient.tsx`. Retrieve the information found in `@public/images/info/pricing-info.png`, find the coach names and use these to replace the mock coach names.
- Add the screenshots from `@public/images/coaches/` to the respective coach card in `@pages/AboutPageClient.tsx`.Crop the screenshot to isolate just the post image — no browser chrome, no Instagram sidebar, no navigation arrows, no carousel dots, no comments panel. Use these coordinates (confirmed for this setup): x_left=367, x_right=989, y_up=180, y_down=1017 which translates to the ImageMagick crop argument: 622x837+367+180
 Run: magick "input.png" -crop 622x837+367+180 +repage "output.png".

# 6. About-section

In `@pages/AboutPageClient.tsx`, replace the About section's image and text with the following image: `@public/images/ui/about-picture.png`. just comment out what will not be visible, do not delete these components. Keep the title and CTA-buttons visible.

# 7. Additional changes

0. Read `CLAUDE.md` and the skills from `@skills/`. 

1. in the Offers section (`@components/sections/PromotionsSection.tsx`), use this external link to connect the CTA buttons: https://overhandz.bigcartel.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVVP3mw4tDYQARO-KihA8nWJUgqxVdb4hnfPNmihBKmSPPO5ra4_t1TdfpWg_aem_dcZpPULbT49BFVH5v3zdnA

2. in `@components/sections/PricingSection.tsx` and `@components/pages/PrincingPageExtras.tsx`, make the following changes:
- Comment out the the highlight effect and "recommandé" text from "Muay-Thaï Full"
- Change the CTA flow for the "s'inscrire" button. Use the same CTA-flow principles as used for the "Book a Class" flow when clicking on the "book" button from schedule components. Just adapt the text from the 3 steps in the booking flow: You are booking: (add what subscription is being booked), step 2 details stay the same, step 3 payment (change the payment tag)
