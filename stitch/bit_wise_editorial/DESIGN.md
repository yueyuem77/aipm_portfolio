# Design System Strategy: The Technical Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Terminal Curator"**

This design system rejects the "soft and friendly" corporate AI aesthetic in favor of a high-contrast, technical authority. It bridges the gap between a 90s indie RPG character sheet and a luxury avant-garde tech magazine. The experience should feel like a high-end command center—precise, data-dense, and unapologetically digital.

To break the "template" look, we utilize **intentional asymmetry**. Align headers to the far left while pushing metadata to the far right. Use overlapping elements—such as a dithered image partially obscured by a technical stat block—to create a sense of depth and curated chaos.

---

## 2. Colors & Visual Texture
The palette is rooted in a deep, void-like atmosphere, punctuated by high-visibility "phosphor" accents. The overall color mode is **light**, ensuring high contrast and digital clarity.

### Color Roles
- **Primary (`#C8F135`):** "Acid Green." Reserved for critical actions, level-up indicators, and active terminal cursors.
- **Secondary (`#E8A838`):** "Amber." Used for warning states, specialized skill categories, and "Legendary" tier metadata.
- **Tertiary (`#4FC3F7`):** "Electric Blue." Used for technical data visualizations and hyperlinks.
- **Neutral/Background (`#0F0E0C`):** The "Near-Black" canvas.

### The "No-Line" Rule
Prohibit standard 1px solid borders for sectioning. Boundaries are defined by:
1. **Background Shifts:** Moving from `surface` to `surface-container-low`.
2. **Pixel Corner Marks:** Instead of a border, place 4px squares (`primary`) at the four corners of a container to "frame" the content.
3. **Dithered Transitions:** Use a CSS-based dither pattern (checkered 1px alpha dots) to transition between sections.

### Signature Textures
- **Scanline Overlays:** A fixed-position SVG overlay of 2px horizontal lines at 3% opacity must be applied to all Hero sections to simulate a CRT monitor.
- **Dithered Gradients:** Never use smooth CSS gradients. Use stepped gradients or noise textures to transition from `primary` to `transparent`.

---

## 3. Typography
The typographic system is a four-way dialogue between high-fashion editorial and raw terminal output.

- **Display (`DM Serif Display`):** The "Authoritative Voice." Used for large page titles and opinionated headers. It provides the "Editorial" feel against the technical backdrop.
- **Headline/Labels (`Space Grotesk`):** The "Modern Engine." Used for section headers and primary navigation. Its geometric quirks lean into the "Indie Game" vibe.
- **Body (`IBM Plex Sans`):** The "Technical Standard." Used for long-form case studies. It ensures high readability for complex PM documentation.
- **Metadata (`JetBrains Mono`):** The "Character Sheet." Used for all stats, tags, timestamps, and "Level" badges. This font should always be set in uppercase for labels.

---

## 4. Elevation & Depth
In this system, "elevation" is not about shadows—it’s about **Tonal Layering** and **Stacking**.

- **The Layering Principle:** Depth is achieved by stacking `surface-container` tiers. A "Character Stat" card (`surface-container-highest`) sits atop a "Project Module" (`surface-container-low`), which sits on the `background`. 
- **Ambient Glows:** Instead of drop shadows, use a very low-opacity "outer glow" using the `primary` color (Acid Green) with a 20px blur at 5% opacity to simulate the glow of a phosphor screen.
- **The "Ghost Border":** If a container requires a boundary, use the `outline-variant` at 15% opacity. It must be a hard line—no soft edges.
- **Glassmorphism:** For floating HUD elements (like a sticky "Level" bar), use `surface-container-low` at 80% opacity with a `backdrop-filter: blur(8px)`.

---

## 5. Components

### The Character Sheet (Portfolio Cards)
Instead of standard cards, use "Stat Blocks."
- **Layout:** Vertical split. Left 30% is a dithered profile/project image; Right 70% is technical data.
- **Stat Bars:** Use the `primary-container` for the bar background and `primary` for the "fill." The fill should be segmented into blocks (e.g., a 10-segment bar).

### Buttons (Action Commands)
- **Primary:** `primary` background, `on-primary` (black) text. Sharp corners (0px). No gradients. Hover state: `secondary` (Amber).
- **Secondary:** Transparent background, 1px `primary` Ghost Border, 4px square pixel marks in corners.
- **Ghost/Tertiary:** `JetBrains Mono` text with a `_` prefix (e.g., `_VIEW_PROJECT`).

### Character Badges (Tags)
- Small, rectangular blocks using `surface-container-highest`.
- Text in `JetBrains Mono` size `label-sm`.
- Include a "level" prefix (e.g., `LVL. 99 STRATEGY`).

### Input Fields
- Underline-only style using `outline`. 
- Active state: The underline turns `primary` (Acid Green) and triggers a blinking `_` cursor.

### Lists
- **Forbid Dividers:** Use vertical spacing and a `primary` color bullet point (a 4px square).
- **Hover State:** Entire list item background shifts to `surface-container-low`.

---

## 6. Do’s and Don'ts

### Do
- Use **4px square corner marks** to frame important data.
- Use **Asymmetric Grids**: If the body text is 600px wide, offset it to the left and place "Technical Stats" in the right gutter.
- Use **Dithering**: Apply a dithered pattern to image hovers.
- Use **Technical Verbiage**: Instead of "My Projects," use `[LOG_FILES]`. Instead of "Skills," use `[ATTR_STATS]`.

### Don't
- **No Rounded Corners:** Corners are sharp and angular, with a `roundedness` of 0.
- **No Soft Shadows:** If it doesn't look like a CRT monitor or a printed magazine, don't use it.
- **No Generic Icons:** Use Unicode characters (`>`,`_`,`::`,`[ ]`) or pixel-perfect 16x16 icons.
- **No Centered Layouts:** Hero sections should feel like a magazine spread—offset, layered, and bold.