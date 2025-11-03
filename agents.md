OGX LANDING PROJECT GUIDE
=========================

OVERVIEW
- Next.js 14 App Router with TypeScript and ESLint.
- Spanish-first landing page for Omar Guerrero with a dedicated contact stats page.
- Content and UI stay lean: data arrays inline, no CMS, no CSS-in-JS, single custom CSS file.
- Mobile-first approach with enhanced desktop polish (dark finance aesthetic with neon accent).

CURRENT FILE TREE (KEY ITEMS)
- app/layout.tsx — global wrapper, metadata, and CSS import.
- app/page.tsx — main landing page with data arrays (PICKS, IDEAS, RESOURCES, FAQ).
- app/contact/page.tsx — reach metrics, collaboration formats, contact options.
- components/Header.tsx — reusable header component with brand, social icons, and configurable navigation.
- components/Hero.tsx — reusable hero component with CTA, proof, highlights, avatar.
- app/globals.css — entire design system (grid background, layout, typography, breakpoints).
- lib/site.ts — shared constants (contact email, reach stats).
- public/icons/*.svg — custom monochrome SVG set aligned with neon palette.
- public/og-profile.JPEG — profile portrait used in hero/contact layouts.

CONTENT MODEL
- PICKS, IDEAS, RESOURCES, FAQ arrays defined in app/page.tsx keep copy editable in one file.
- HERO content object (title, proof text, highlights, CTAs, avatar) passed to Hero component.
- CORE_REACH & REACH_DETAILS in lib/site.ts feed hero highlights and contact reach cards.
- CONTACT_OPTIONS and SERVICES arrays drive the contact page call-to-action blocks.

NAVIGATION + INTERACTION
- Sticky header component (Header.tsx) with "Omar Guerrero" wordmark plus inline circular social icons (Instagram, TikTok, X) using react-icons/fa6.
  * Configurable navigation links via navLinks prop for page-specific navigation.
  * Mobile nav slides in from the right; links use underline animations instead of pills.
- Mobile menu collapses to a compact overlay; desktop nav spaces links with animated underlines.
- Hero search filters resources client-side; highlights scroll horizontally on small screens.

SECTIONS (app/page.tsx)
1. Hero - social-proof CTA, portrait, weekly playbook button, highlight metrics, textured background image.
2. Recomendados al instante — quick resource cards.
3. Ideas y avances — upcoming projects list with chips.
4. Recursos — searchable resources with tags.
5. Preguntas frecuentes — details elements for common questions.
6. Contacto directo — email CTA and link to metrics page.

CONTACT PAGE (app/contact/page.tsx)
- Hero with portrait, quick CTA back to email or home.
- Reach stats grid (newsletter, impressions, growth, satisfaction).
- Collaboration formats (newsletter, video, consultoria 1:1).
- Contact options (email, booking link, media kit request).

STYLING NOTES (app/globals.css)
- Deep charcoal background with subtle grid overlay (body::before).
- Accent colors: neon cyan (#9dfefd, #5de6ff) with supporting amber/red hero bulbs.
- Breakpoints at 640px, 768px, 900px adjust spacing, hero layout, and nav behavior.
- Hero panel overlays gradients atop `/hero-bg.jpg` for depth.
- Cards use glass morphic gradients and box shadows tuned for dark UI.
- Typography: Inter/Sans stack, uppercase eyebrow, underline animations for nav links.

MAINTENANCE CHECKLIST
- Update content by editing arrays in app/page.tsx or data in lib/site.ts.
- To add icons, drop SVGs in public/icons and reference paths, or use react-icons library.
- Keep new CSS additions modular (extend globals.css, avoid inline styles).
- Header component (Header.tsx) is reusable across pages with configurable navLinks prop.
- When editing navigation, update Header.tsx or pass custom navLinks prop to Header component.
- Run `npm dev` locally to validate responsive breakpoints after changes.
