---
inclusion: always
---

# Design Guidelines — Dark Mode Developer Portfolio

These are the visual and structural conventions for Charvin's portfolio site.
Follow this consistently across all components so the site feels cohesive and
"professional developer," not a generic template.

## Overall Vibe

- Dark mode only (no light mode toggle needed unless requested later).
- Clean, confident, technical — think "senior engineer's personal site," not
  flashy/agency-style. Minimal animation, generous whitespace, strong typography.
- Content-first: recruiters/hiring managers should find skills, projects, and
  contact info within seconds.

## Color Palette

- Background base: near-black slate, e.g. `#0a0a0f` / Tailwind `slate-950` / `neutral-950`.
- Surface/card background: slightly lighter, e.g. `slate-900` with subtle border
  (`slate-800`) — avoid pure flat black cards, use faint elevation via border or
  soft shadow.
- Primary accent: one vibrant accent color used sparingly for links, buttons, highlights.
  Recommended: an electric teal/cyan (`#22d3ee` / `cyan-400`) or emerald (`#34d399`)
  to nod to a "terminal/dev" feel without being cliché neon-green-on-black.
- Text: primary text `slate-100`/`neutral-100`, secondary/muted text `slate-400`.
- Use accent color consistently for: hover states, active nav link, primary CTA
  buttons, icons tied to key actions (resume download, contact).

## Typography

- Sans-serif for body/UI: Inter, or system font stack — clean and readable.
- Monospace font (e.g. `JetBrains Mono`, `Fira Code`, or system mono) for: code
  snippets, skill tags, small technical labels (e.g. "JQL", version numbers) —
  gives a subtle "developer" signal without overusing it.
- Hero name/title: large, bold, tight line-height.
- Section headings: uppercase or small-caps optional, accent-colored numbering
  or `//` prefix (e.g. `// 02 Projects`) is a nice touch if it doesn't feel gimmicky.

## Layout & Structure

Single-page scrolling layout (standard for portfolios, easy to scan) with sticky
top nav. Sections in order:

1. **Hero** — Responsive two-column layout with name, title, one-line value prop,
   primary CTAs (View Projects, Download Resume, Contact), social icons (GitHub,
   LinkedIn, Email), and Charvin's portrait from `/images/prof.png`. Use a restrained
   4:5 rounded-rectangle frame with a subtle cyan border/glow and right-biased image
   focal point; stack cleanly on mobile.
2. **About** — Short bio, education (SPCBA + Stanford Code in Place), current role.
3. **Skills** — Grouped by category (Languages / Frameworks / Cloud & Platforms),
   rendered as tags/badges, monospace font for tag text.
4. **Projects** — Card grid. Each card: title, description, tech tags, links
   (live/repo) if available. Include CV Screener + Jira achievement case studies.
5. **Experience / Achievements** — Timeline or stat-card style for Jira Developer
   role and the 22 JSM / 50+ Jira Software project metrics (big numbers stand out
   well here, e.g. large accent-colored "50+" with label under it).
6. **Certificates** — Grid/gallery of certificate cards (Atlassian, AWS, Python),
   pulling from `public/certificates/`.
7. **Contact / Footer** — Email, LinkedIn, GitHub, resume download link, copyright.

## Components & Interaction

- Buttons: solid accent background for primary CTA, outlined/ghost style for
  secondary actions. Rounded corners (`rounded-lg` or `rounded-md`), not fully
  pill-shaped — keeps it looking technical rather than "marketing site."
- Cards: subtle border + slight hover lift/glow (transform + shadow transition),
  keep transitions short (150–250ms), avoid bouncy easing.
- Nav: sticky, blurred/translucent background on scroll (`backdrop-blur`), active
  section highlight.
- Icons: use `lucide-react` for interface actions and section markers; use
  `react-icons` brand marks for technologies. Technology badges should retain the
  portfolio's restrained dark styling while using recognizable brand colors on
  the icon only, with a generic accessible fallback when no official mark exists.
- Responsive: mobile-first. Stack sections vertically, collapse nav into a
  simple menu, ensure skill tags and project cards wrap cleanly.

## Accessibility

- Maintain sufficient contrast between text and dark backgrounds (WCAG AA at minimum
  for body text against background).
- All interactive elements need visible focus states (don't remove outlines without
  replacing them with a clear alternative).
- Images/certificate scans need descriptive `alt` text.
- Note: full WCAG compliance requires manual testing with assistive technology;
  these guidelines aim for a strong baseline, not a certified audit.

## Tech Implementation Notes

- Next.js (App Router) + TypeScript + Tailwind CSS.
- Keep content data (skills, projects, certificates) in typed data files
  (e.g. `src/data/*.ts`) separate from presentational components, so updating
  content later doesn't require touching JSX/markup.
- Use `next/font` for font loading (Inter + a mono font) rather than manual
  `<link>` tags.
