# Frontend Generation Prompt — Luna's Personal Site

## Context

Build a personal portfolio website for **Luna**, an AI Product Manager targeting roles at Chinese AI companies (Shenzhen, Beijing, Shanghai). The site must impress technical recruiters on Boss直聘 and equivalent platforms within **10 seconds of landing**. Luna's differentiator is the rare combination of: full-stack development ability, prompt engineering depth, quantitative methods training (grad level), and cognitive science background. The site should feel **warm, personal, and story-forward** — not a résumé, not a generic portfolio template.

---

## Site Architecture

Five sections, single-page scroll with anchor navigation:

```
Hero → About → Timeline → Projects → Contact
```

### 1. Hero

- One-line bio that leads with identity, not title
  - Example: *"I think about how people think, then build AI that works with that."*
- Role tags as soft pills: `AI PM` · `Full-stack` · `Prompt Engineer` · `Cog Sci + Quant`
- Two CTAs: **View my work** (scrolls to Timeline) and **Download résumé** (PDF link)
- Subtle animated background — warm grain texture or slow-drifting mesh, NOT gradients on white

### 2. About

- Three short paragraphs: origin story, skill clusters, what drives her
- Skill clusters displayed as grouped tags (not a bullet list):
  - AI/LLM: prompt engineering, fine-tuning, A/B testing, RAG
  - Technical: Python, Streamlit, SQL, agentic workflows, Claude Code
  - PM: product spec, user research, roadmap, cross-functional
  - Academic: quantitative methods, cognitive science, experimental design
- Tone: first-person, warm, specific — not résumé-speak

### 3. Timeline (PRIMARY FEATURE — build this with care)

#### Layout: Dual-rail vertical timeline

- Central vertical line divides the layout
- **Left side: Projects** only
- **Right side: Career & Education** only
- Items alternate position relative to the center line — projects on left, career/edu on right
- A dot sits on the center line at each item's year marker
- Year labels float on the center line between items

#### Interaction — two-stage:

**Stage 1 — Hover:**
- Card lifts slightly (subtle shadow or border highlight)
- A short preview blurb (2–3 lines) fades in below the card title
- Dot on the center line pulses or scales up

**Stage 2 — Click:**
- Opens a slide-in detail drawer from the right (or expands inline below the card)
- Drawer contains: full description, tech stack tags, impact metrics, a "Read case study" link
- Drawer is dismissible via ✕ or clicking outside

#### Filter bar (above timeline):
- Three toggle buttons: `All` · `Career` · `Projects`
- Inactive items fade to 30% opacity (don't remove from DOM — preserve layout)

#### Timeline data (use this exactly):

**Projects (LEFT side):**

| Year | Title | Org/Stack | Preview blurb | Detail |
|------|-------|-----------|---------------|--------|
| 2025 | Job Application Pipeline | Claude Code · Boss直聘 · agentic workflow | Automated personalized outreach at scale using LLM-generated greetings. | Built a profile.yaml-driven pipeline that filters roles by city and job type, then uses prompt engineering to write customized opener messages per recruiter. Differentiator: prompt engineering baked into the application layer, not bolted on. |
| 2024–25 | Coffee Shop AI Agent | Prophet · XGBoost · Streamlit | Demand forecasting + inventory system built from 5 years of barista domain knowledge. | 3-model ensemble (Prophet for seasonality, XGBoost for promo events, fallback linear). Streamlit UI designed for non-technical coffee shop owners. Open source on GitHub. Domain knowledge as moat. |

**Career & Education (RIGHT side):**

| Year | Title | Org | Type | Preview blurb | Detail |
|------|-------|-----|------|---------------|--------|
| 2024 | AI PM Intern | GradeMate · Hong Kong | Career | Owned prompt engineering pipeline for AI essay feedback. | End-to-end ownership of LLM prompt design for student writing feedback. Ran 4-variant A/B test on model outputs — shipped the winning variant, improved user satisfaction by 23%. |
| 2023 | Data Analyst Intern | ADEL Group · Hong Kong | Career | Built BI dashboards tracking cross-market investment performance. | Applied quant methods training to real capital allocation data. Designed dashboards for senior decision-makers. First time good data storytelling changed a room. |
| 2023 | Product Intern | SF Technology · Shenzhen | Career | Cross-market product exposure in logistics AI at China speed. | Bridged technical and business teams in a fast-moving logistics context. Deepened understanding of how product decisions differ between US and Chinese tech environments. |
| 2022–23 | Graduate Research | UC Irvine | Education | Cognitive science + quantitative methods — how people think, measured rigorously. | Research at the intersection of cognitive psychology and statistical modeling. Foundation for every product decision: understanding users at the mechanism level, not just the behavior level. |

### 4. Projects

- Card grid (2 columns desktop, 1 column mobile)
- Each card: project name, one-line description, tech stack pills, GitHub link, live demo link (if any)
- Featured card (Coffee Agent) is slightly larger or has a warm accent border
- Cards link to the same detail content as the timeline drawer

### 5. Contact

- Minimal: Email · LinkedIn · GitHub · WeChat (微信) QR code placeholder
- Optional: short "currently open to" note, e.g. *"Open to AI PM roles in Shenzhen, Beijing, Shanghai"*
- Language toggle: **EN / 中文** — switches all copy to Chinese (at minimum: section headings and contact labels)

---

## Visual Style

### Aesthetic direction: Warm editorial minimalism

This is the one thing someone should remember: **it feels like a person made it, not a template.**

- **NOT**: purple gradients, dark glass morphism, neon, loud animations
- **YES**: cream/off-white backgrounds, terracotta/rust accent color, quiet warmth

### Typography

- Display / headings: a distinctive serif — `Lora`, `Playfair Display`, or `DM Serif Display` (Google Fonts). Italics for emphasis.
- Body: a clean humanist sans — `DM Sans`, `Outfit`, or `Nunito`. NOT Inter, NOT Roboto.
- Monospace for tech stack tags: `JetBrains Mono` or `Fira Code`
- Hierarchy: Display (hero) → Serif headings → Sans body → Mono tags

### Color palette

```
--bg-primary:     #FAF7F2   /* warm off-white, main background */
--bg-secondary:   #F2EDE4   /* slightly deeper cream, card backgrounds */
--accent:         #C4603A   /* terracotta / rust — buttons, dots, highlights */
--accent-light:   #F0D5C8   /* pale terracotta — hover states, tag backgrounds */
--text-primary:   #2C2420   /* near-black warm brown */
--text-secondary: #7A6E68   /* muted warm gray */
--text-tertiary:  #B0A89E   /* hints, dates, labels */
--career-dot:     #C4603A   /* terracotta for career dots */
--project-dot:    #3A7C6A   /* muted teal for project dots */
--edu-dot:        #5A4AB0   /* muted purple for education dots */
--border:         rgba(44, 36, 32, 0.10)
--timeline-line:  rgba(44, 36, 32, 0.15)
```

### Motion

- Page load: staggered fade-up for hero elements (60ms delay between each)
- Scroll reveal: timeline items fade in as they enter viewport (IntersectionObserver)
- Hover: `transform: translateY(-2px)` + subtle border color shift (150ms ease)
- Drawer open: slide in from right, 200ms cubic-bezier(0.4, 0, 0.2, 1)
- NO bounce, NO spring, NO parallax — calm and intentional

### Layout

- Max content width: 900px centered
- Timeline center line: exactly at 50% of content width
- Left rail (projects): right-aligned cards, right edge touches ~48% mark
- Right rail (career): left-aligned cards, left edge starts at ~52% mark
- Mobile (< 640px): collapse to single-column vertical rail (all items left-aligned, dot on left edge)
- Spacing unit: 8px base, use multiples of 8

---

## Technical Requirements

- **Output**: Single HTML file with embedded CSS and JS (no build step required)
- **Fonts**: Load via Google Fonts CDN
- **No frameworks required** — vanilla HTML/CSS/JS preferred for portability
- **Dark mode**: optional but appreciated — if included, use `prefers-color-scheme: dark` with a warm dark palette (deep brown background, not pure black)
- **Performance**: No heavy libraries. Animate with CSS only where possible.
- **Accessibility**: Semantic HTML (`<section>`, `<nav>`, `<article>`), keyboard-navigable timeline cards, focus rings visible
- **i18n**: EN/中文 toggle should swap `data-en` and `data-zh` attributes on text nodes via JS

---

## Standout Features to Implement

1. **Dual-rail timeline** — the centerpiece. Projects left, career right, dots on the spine, hover preview + click drawer. Filter toggles fade inactive items.
2. **Language toggle (EN / 中文)** — at minimum covers navigation labels, section headings, contact info, and role tags
3. **Subtle grain texture** on the hero background (CSS `url("data:image/svg+xml,...")` noise overlay, low opacity)
4. **GitHub activity strip** — a thin horizontal bar below the hero showing recent commit activity (static placeholder SVG is fine if no API access)
5. **Micro-copy with personality** — footer: *"Built by an AI PM who codes. Powered by curiosity and too much coffee."*

---

## What NOT to do

- No purple gradients on white
- No "Hi, I'm [Name]! I'm passionate about..." hero copy
- No generic card grid as the hero section
- No Inter or Roboto as the primary font
- No skill percentage bars ("Python: 85%") — these are meaningless
- No timeline that collapses projects and career into the same side
- No dark glass morphism or neon glow effects
- No excessive use of emoji in UI elements

---

## Reference Structure (from site architecture diagram)

The full site structure was designed with these principles:
- **5 pages/sections**: Hero · About · Timeline ★ · Projects · Contact
- **Timeline is the differentiator**: dual-rail with career right / projects left, hover preview card, click-to-detail, filter toggle (All / Career / Projects)
- **Standout extras**: EN/中文 toggle, AI chat widget (optional, Claude-powered), live GitHub feed, quant credibility highlights in About, case study pages per project written as mini PRDs
- **Visual direction**: warm palette (cream / terracotta), serif display font, soft animations, mobile-first

---

*This prompt was synthesized from: (1) a site architecture mind map, (2) a structured five-section site diagram with features and visual style direction, and (3) an interactive dual-rail timeline prototype (Option A — vertical rail with hover preview) built and tested for this specific use case.*
