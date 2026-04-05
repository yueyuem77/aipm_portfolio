Stitch Prompt — Luna's Portfolio Site

Build a personal portfolio website inspired by seungmee-lee.com's design language, adapted for Luna's AI PM brand. Replicate the following design system and layout exactly:

Design System

Typography
Font: System monospace or Space Mono / IBM Plex Mono
All text in ALL CAPS with tight letter-spacing (letter-spacing: 0.08em)
Body text: ~14–16px, color #111 on white
Links with dashed underlines, no hover color change — just cursor pointer
External links append ↗ inline

Layout

White background (#fff), near-zero padding on left (padding-left: 32px)
Full-viewport canvas with no scroll on the outer shell — content scrolls within each pane.

Two persistent navigation bars overlay the page:

Menu Bar A — Bottom-Left Main Menu
Fixed to the bottom-left corner of the viewport.
Horizontal row of uppercase text links: ABOUT · TIMELINE · CONTACT · PRD
Each link navigates the left content pane to the corresponding section (smooth scroll or view swap, no full-page reload).
Active item is underlined with the accent purple (#7B61FF).
Font: same monospace, ~12px, letter-spacing 0.12em.
Background: transparent (floats over the white canvas).
z-index above all content.

Menu Bar B — Lower-Right Projects Toggle
Fixed to the lower-right corner of the viewport, vertically stacked.
Acts as a toggle sidebar for project case studies.
Each item is a numbered row: [index] [PROJECT NAME], separated by thin 1px #eee horizontal rules.
Active/selected item shows → prefix and purple (#7B61FF) text; inactive items are muted (#999).
Clicking an item swaps the left pane content to that project's detail view — no page reload.
The sidebar list is always visible and does not collapse.
Font: same monospace, ~12px, muted gray for inactive, purple for active.
Background: transparent or very faint white (#fff with slight opacity).
z-index above all content.

Both menu bars are always visible regardless of which section is displayed.
The left content pane (~65% width) sits between/behind the two menus.
No traditional top nav bar or header — the two corner menus are the only navigation.

Color palette
Background: #ffffff
Text: #111111
Accent: #7B61FF (purple, used for active nav item + visitor dot)
Muted: #999999 (for numbered nav items not active)



📐 Layout Sections

1. Hero (Home / About view — left pane)

First line: HELLO, VISITOR #[RANDOM_HEX] ● — generate a random 6-char hex ID on load, purple filled circle

Paragraph 1: I'M LUNA, AN AI PRODUCT MANAGER EXPERIMENTING WITH PROMPTS AND PIPELINES.
Paragraph 2: I'M CURRENTLY TARGETING AI PM ROLES IN SHENZHEN, BEIJING & SHANGHAI.
Paragraph 3: FIND ME ON LINKEDIN↗ AND GITHUB↗, OR BOOK A CHAT↗ WITH ME.

Faint link below: MORE ABOUT ME: a paragraph about myself, we work ethics, we multi nation working experience, etc.

2. Right Sidebar — Projects Toggle (Menu Bar B, detail)

This is the lower-right fixed projects toggle described in Layout → Menu Bar B.
It lists all case-study projects Luna wants to showcase. Each row:

[index]  [PROJECT NAME]

Separated by thin 1px #eee horizontal rules. The currently viewed project has a → prefix and purple (#7B61FF) text; all others are muted gray (#999).
When no project is selected (e.g. on the About or Timeline view), no item is highlighted.

Items:

0  SKILL SET
1  SCHOOLAI
2  GRADMATE INTERN
3  CFPB (CONSUMER FINANCIAL PROTECTION BUREAU)
4  ADEL GROUP INTERN
5  SF TECHNOLOGY INTERN
6  UCI RESEARCH

Clicking any item replaces the left pane with that project's detail view (see Section 3).


3. Project Detail View (when nav item clicked — replaces left pane)


Top-left: small caps label [CATEGORY]

Top-right: short description paragraph, ~3 lines, muted gray

Center: large mock browser window (rounded dark header with red/yellow/green dots), showing project screenshot or placeholder

Bottom bar updates to: [PROJECT NAME] / [YEAR] left · [one-line tagline] right

4. Timeline Section (★ featured)



Dual-rail layout: Left rail = Projects, Right rail = Career/Education



Filter bar at top: pill buttons ALL · PROJECTS · CAREER · EDUCATION



Each entry: hover highlights row, click expands detail card inline



Projects rail entries:




2025 — Job Application Pipeline · tag: AI · Automation



2024 — Coffee Shop AI Agent · tag: ML · Streamlit



Career rail entries:





2024 — AI PM Intern @ GradeMate (HK)



2023 — Data Analyst @ ADEL Group (HK)



2023 — Product Intern @ SF Technology (SZ)



2022 — Graduate Researcher @ UC Irvine

5. About Section





Origin story: 2–3 short uppercase paragraphs



Skill clusters as inline pill tags, grouped:





AI/LLM: PROMPT ENGINEERING · FINE-TUNING · RAG · A/B TESTING



TECHNICAL: PYTHON · SQL · STREAMLIT · CLAUDE API



PM: PRD WRITING · ROADMAPPING · USER RESEARCH



ACADEMIC: NLP · BEHAVIORAL DATA · QUANTITATIVE METHODS



"What drives her" — one italic sentence, slightly larger

6. PRD Subpage

Activated when PRD is clicked in Menu Bar A.
Replaces the entire left content pane with a self-contained two-panel layout:

Left Panel — PRD Document Menu (~25% width)
Vertical list of PRD document titles, stacked top-to-bottom.
Each item is an uppercase text link: the PRD title (e.g. COFFEE SHOP AI AGENT PRD, JOB PIPELINE PRD).
Active/selected document has → prefix and purple (#7B61FF) text; others are muted gray (#999).
Thin 1px #eee horizontal rules separate items.
Font: same monospace, ~12px.
This panel scrolls independently if the list is long.
Top of the panel has a small label: PRD DOCUMENTS in muted gray, acting as a section header.

Right Panel — PRD Content (~75% width)
Displays the full content of the selected PRD document.
Content is rendered as structured uppercase text following the site's typographic rules.
Typical PRD structure:
  — TITLE (large, ~20px, bold weight)
  — META block: DATE · STATUS (DRAFT / IN REVIEW / FINAL) · AUTHOR: LUNA
  — OVERVIEW: 2–3 sentence summary
  — PROBLEM STATEMENT
  — GOALS & SUCCESS METRICS (bulleted list)
  — USER STORIES / USE CASES
  — REQUIREMENTS (functional + non-functional, numbered)
  — TECHNICAL APPROACH (brief, high-level)
  — TIMELINE / MILESTONES
  — OPEN QUESTIONS
Each section heading is separated by generous whitespace (~32px margin-top).
Section headings use the accent purple (#7B61FF) color.
Body text remains #111, same monospace font.
This panel scrolls independently.

When the PRD subpage first loads, the first document in the left menu is auto-selected.
Both Menu Bar A (bottom-left) and Menu Bar B (lower-right projects toggle) remain visible and functional on top of the PRD subpage.

7. Contact Section





Links: EMAIL↗ · LINKEDIN↗ · GITHUB↗



WeChat QR placeholder box: dashed border, SCAN TO WECHAT label



Freeform note: OPEN TO FULL-TIME AI PM ROLES IN CHINA. SAY HI.



EN / 中文 toggle in top-right corner — switches all text to Chinese
🚫 Do NOT include





Any hero image or photo of Luna



Heavy animations or particle effects



Dark mode



Mobile hamburger nav (keep desktop-first)