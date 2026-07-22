---
version: alpha
name: Helios-design-analysis
description: A polished residential energy website system built around warm off-white surfaces, deep charcoal ink, solar-field photography, rounded glass navigation, and a restrained yellow incentive accent. The visual language is quiet, premium, and service-oriented: large Switzer medium headlines, soft translucent overlays, pill buttons, full-bleed photographic bands, and calm editorial spacing. Helios should feel like a modern home-energy installer that is credible, approachable, and operationally mature.

colors:
  primary: "#f7f5f0"
  ink: "#161514"
  ink-on-dark: "#f7f5f0"
  ink-soft: "rgba(22, 21, 20, 0.64)"
  ink-faint: "rgba(22, 21, 20, 0.48)"
  ink-on-dark-soft: "rgba(247, 245, 240, 0.64)"
  ink-on-dark-faint: "rgba(247, 245, 240, 0.48)"
  ink-hairline: "rgba(22, 21, 20, 0.12)"
  ink-on-dark-hairline: "rgba(247, 245, 240, 0.08)"
  surface-1: "#f7f5f0"
  surface-2: "#ffffff"
  surface-3: "#e1dcd2"
  surface-dark: "#161514"
  surface-dark-raised: "#1f1d1b"
  overlay-1: "rgba(22, 21, 20, 0)"
  overlay-2: "rgba(22, 21, 20, 0.32)"
  overlay-3: "rgba(22, 21, 20, 0.64)"
  overlay-glass: "rgba(255, 255, 255, 0.12)"
  overlay-glass-light: "rgba(225, 220, 210, 0.64)"
  accent-1: "#f2da4a"
  accent-2: "#d9b800"
  button-primary-fill: "#f7f5f0"
  button-primary-ink: "#161514"
  button-secondary-fill: "rgba(255, 255, 255, 0.12)"
  button-secondary-on-light-fill: "rgba(225, 220, 210, 0.64)"
  success: "#2f8f5b"
  warning: "#d9b800"

typography:
  heading-h1:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 60px
    fontWeight: 500
    lineHeight: 60px
    letterSpacing: -2px
  heading-h2:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 52px
    letterSpacing: -1.25px
  heading-h3:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 44px
    letterSpacing: -1px
  heading-h4:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -0.5px
  heading-h5:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.5px
  heading-h6:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.25px
  text-large:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0
  text-medium:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  text-medium-strong:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0
  text-small:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  text-small-strong:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0
  label-small:
    fontFamily: "Geist Mono, SFMono-Regular, Consolas, monospace"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 12px
    letterSpacing: 1.25px
  button-medium:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0
  nav-link:
    fontFamily: "Switzer, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0

rounded:
  none: 0px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 40px
  full: 1080px

spacing:
  none: 0px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section-sm: 80px
  section-md: 120px
  section-lg: 160px
  section-xl: 200px

components:
  promo-bar:
    backgroundColor: "{colors.accent-1}"
    textColor: "{colors.ink}"
    typography: "{typography.label-small}"
    height: 32px
    padding: 8px
  glass-nav:
    backgroundColor: "{colors.overlay-glass}"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.xl}"
    height: 48px
    padding: 4px
    blur: 20px
  glass-nav-on-light:
    backgroundColor: "{colors.overlay-glass-light}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.xl}"
    height: 48px
    padding: 4px
    blur: 20px
  button-primary:
    backgroundColor: "{colors.button-primary-fill}"
    textColor: "{colors.button-primary-ink}"
    typography: "{typography.button-medium}"
    rounded: "{rounded.lg}"
    padding: 12px 20px
    height: 48px
  button-secondary-dark:
    backgroundColor: "{colors.button-secondary-fill}"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.button-medium}"
    rounded: "{rounded.lg}"
    padding: 12px 20px
    height: 48px
    blur: 8px
  button-secondary-light:
    backgroundColor: "{colors.button-secondary-on-light-fill}"
    textColor: "{colors.ink}"
    typography: "{typography.button-medium}"
    rounded: "{rounded.lg}"
    padding: 12px 20px
    height: 48px
    blur: 8px
  hero-photo:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.heading-h1}"
    padding: 32px
    minHeight: 1120px
  latest-project-card:
    backgroundColor: "{colors.overlay-glass}"
    textColor: "{colors.ink-on-dark}"
    rounded: "{rounded.md}"
    padding: 16px
    blur: 20px
  intro-panel:
    backgroundColor: "linear-gradient({colors.surface-1}, {colors.surface-3})"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl} {rounded.xl} 0 0"
    padding: 160px 32px 80px
  video-pill:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-on-dark}"
    rounded: "{rounded.full}"
    width: 1144px
    height: 640px
  image-service-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.heading-h5}"
    rounded: "{rounded.md}"
    padding: 32px
  dark-feature-section:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-on-dark}"
    padding: 160px 0 120px
  process-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-h5}"
    rounded: "{rounded.md}"
    padding: 32px
  faq-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.heading-h6}"
    borderColor: "{colors.ink-hairline}"
    padding: 28px 0
  contact-strip:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 32px
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.text-small}"
    rounded: "{rounded.xl} {rounded.xl} 0 0"
    padding: 40px 32px 36px
---

## Overview

Helios is a warm, high-trust website system for residential energy services. The interface is anchored by full-bleed solar and home photography, a soft off-white page surface, and deep charcoal text. It avoids hard enterprise chrome and avoids playful consumer-tech decoration. The tone is calm, premium, and practical.

The Figma template uses a clear split between dark photographic sections and light editorial sections. Dark sections carry white/off-white type over solar panels, homes, batteries, vehicles, and neighborhood imagery. Light sections use `surface-1` and `surface-3` gradients to make service information feel quiet and legible.

The brand signature is the combination of:
- Rounded glass navigation floating over photography.
- Large Switzer Medium display type with tight negative tracking.
- Pill-shaped buttons, never sharp rectangles.
- Muted warm neutrals rather than pure white or blue SaaS colors.
- A single yellow accent for incentives, savings, and rating emphasis.
- Full-width photographic storytelling instead of abstract illustrations.

## Colors

### Core Surfaces
- **Surface 1** (`{colors.surface-1}` - #f7f5f0): The primary page floor. Used for intro, FAQ, footer, and most light sections.
- **Surface 2** (`{colors.surface-2}` - #ffffff): Raised cards on light surfaces, especially process cards and review modules.
- **Surface 3** (`{colors.surface-3}` - #e1dcd2): The warm beige-gray transition tone used in gradients and contact strips.
- **Surface Dark** (`{colors.surface-dark}` - #161514): Deep charcoal for dark feature sections and overlays. This is not true black; it keeps the brand warm.
- **Surface Dark Raised** (`{colors.surface-dark-raised}` - #1f1d1b): Slightly lifted dark cards.

### Ink
- **Ink** (`{colors.ink}` - #161514): Main copy and display type on light surfaces.
- **Ink On Dark** (`{colors.ink-on-dark}` - #f7f5f0): Main type over hero photos and dark sections.
- **Ink Soft** (`{colors.ink-soft}`): Secondary text on light surfaces.
- **Ink Faint** (`{colors.ink-faint}`): De-emphasized heading fragments on light surfaces.
- **Ink On Dark Soft** (`{colors.ink-on-dark-soft}`): Secondary text over dark photography and dark panels.
- **Ink On Dark Faint** (`{colors.ink-on-dark-faint}`): Third-line hero emphasis and secondary heading fragments on dark.

### Accent
- **Accent 1** (`{colors.accent-1}` - #f2da4a): Incentive banner and key promotional highlight. Use sparingly.
- **Accent 2** (`{colors.accent-2}` - #d9b800): Savings values and secondary numeric highlights, such as `$108`.

### Glass & Overlays
- **Overlay 2** (`{colors.overlay-2}`): 32% charcoal overlay over hero imagery.
- **Overlay 3** (`{colors.overlay-3}`): 64% charcoal overlay for photo-card bottoms and caption gradients.
- **Overlay Glass** (`{colors.overlay-glass}`): White 12% fill used for glass nav, secondary buttons, and project widgets on dark.
- **Overlay Glass Light** (`{colors.overlay-glass-light}`): Warm translucent fill used when the sticky nav moves onto light surfaces.

## Typography

### Font Family

The system uses **Switzer** for all main display, body, navigation, and button text. **Geist Mono** is reserved for small uppercase labels such as the promo bar and "Latest project" eyebrow.

Fallback stack:
- Display/body: `Switzer, Inter, Helvetica Neue, Arial, sans-serif`
- Labels: `Geist Mono, SFMono-Regular, Consolas, monospace`

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---:|---:|---:|---:|---|
| `{typography.heading-h1}` | 60px | 500 | 60px | -2px | Desktop hero headline |
| `{typography.heading-h2}` | 48px | 500 | 52px | -1.25px | Major section headlines |
| `{typography.heading-h3}` | 40px | 500 | 44px | -1px | Story and local banner headings |
| `{typography.heading-h4}` | 32px | 500 | 36px | -0.5px | Intro paragraph heading and footer CTA variants |
| `{typography.heading-h5}` | 28px | 500 | 32px | -0.5px | Service cards and process titles |
| `{typography.heading-h6}` | 24px | 500 | 28px | -0.25px | FAQ rows and compact titles |
| `{typography.text-large}` | 20px | 400 | 28px | 0 | Hero body and CTA body |
| `{typography.text-medium}` | 16px | 400 | 24px | 0 | Default paragraphs |
| `{typography.text-medium-strong}` | 16px | 500 | 24px | 0 | Buttons and emphasized body |
| `{typography.text-small}` | 14px | 400 | 20px | 0 | Nav labels, captions, footer |
| `{typography.label-small}` | 11px | 600 | 12px | 1.25px | Promo bar, latest-project label |

### Principles

Headlines are sentence case, not all-caps. Emphasis is created by opacity and line sequencing: first line fully opaque, second line softened, third line faint. This is especially important in the hero and major headings.

Do not increase body weight to create emphasis. Use size, spacing, opacity, or card placement instead. The brand reads cleanest when body type stays regular and display type stays medium.

## Layout

### Grid & Widths

- Page width is designed around a 1440px desktop canvas.
- Global desktop padding is 32px.
- Main content width is usually 1376px (`1440 - 64`).
- Common column widths from Figma: 448px, 564px, 680px, 912px, 1028px, 1144px.
- The primary floating nav is 1028px wide on desktop.
- The video/media pill is 1144px wide by 640px tall on desktop.

### Vertical Rhythm

- Hero: 1120px minimum height on desktop.
- Intro panel: 160px top padding, 80px bottom padding.
- Medium sections: 120px vertical padding.
- Large dark feature sections: 160px top, 120px bottom.
- Mobile sections compress to 48-80px vertical padding.

### Section Pattern

The page alternates between:
1. Full-bleed dark photographic hero.
2. Rounded light intro panel.
3. Light service-card grid.
4. Dark feature carousel/track.
5. Light case-study and process content.
6. Full-bleed photographic trust banner.
7. Light story and FAQ sections.
8. Dark/photo CTA.
9. Light footer.

Do not place two heavily decorative sections in a row. The design relies on contrast between photography and quiet light editorial surfaces.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Light editorial sections, footer, text areas |
| Glass | 12% translucent fill + 8-20px blur + inner hairline | Floating nav, secondary buttons, project card |
| Photo depth | Full-bleed image with charcoal overlay | Hero, service cards, case hero, CTA |
| Raised light card | White surface on warm off-white | Process cards, rating modules |

The system should not use heavy box shadows. Depth is primarily photographic. Where interface chrome needs separation, use blur, transparency, and subtle inner hairlines.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| `{rounded.none}` | 0px | Rare; text-only structures and dividers |
| `{rounded.sm}` | 16px | Compact badges, small cards |
| `{rounded.md}` | 24px | Project widgets, service cards, process images |
| `{rounded.lg}` | 32px | Buttons, mobile media, compact panels |
| `{rounded.xl}` | 40px | Desktop nav, large panel corners, footer top corners |
| `{rounded.full}` | 1080px | Video pill and strongly rounded media containers |

The template is intentionally rounded. Avoid sharp rectangular buttons or cards unless matching a plain divider or text-only row.

## Components

### Promo Bar

**`promo-bar`** is a fixed 32px yellow strip above the navigation. It uses `Geist Mono` uppercase text at 11px with 1.25px tracking. Its job is commercial urgency, not brand decoration. Keep it short and centered.

### Floating Navigation

**`glass-nav`** floats over the hero at desktop. It is 48px tall, 1028px wide, pill-rounded, and blurred. It contains the Helios mark, primary nav links, "Energy Hub", and "Book consultation".

When the page scrolls onto light content, switch to **`glass-nav-on-light`**: warm translucent beige fill, charcoal text, same geometry.

On mobile, the nav becomes a 369px-wide glass pill with logo, consultation button, and circular menu button.

### Buttons

**`button-primary`** is an off-white pill with charcoal text. It is used for primary actions over dark imagery and dark panels.

**`button-secondary-dark`** is a translucent glass pill with off-white text. It is used for secondary actions over photography.

**`button-secondary-light`** is a warm beige translucent pill with charcoal text. It is used on light surfaces for secondary links such as Home B / Home C.

All buttons use sentence-case labels. Do not uppercase button text.

### Hero Photo

**`hero-photo`** is a full-bleed image band with a 32% charcoal overlay. The h1 is split into three lines with descending opacity:
- `Lower bills.` at full `ink-on-dark`
- `Smarter systems.` at 64%
- `More control at home.` at 48%

The supporting copy sits to the right on desktop and below the headline on mobile. The latest-project glass widget sits bottom-left on desktop and is omitted on mobile.

### Latest Project Card

**`latest-project-card`** is a glass widget over hero photography. It uses a mono uppercase eyebrow and a compact metric row. Use it for proof and savings, not as a generic card pattern.

### Intro Panel

**`intro-panel`** is the rounded light panel that overlaps the hero. It introduces the template in a centered 680px text column and then presents the large rounded video/media pill.

### Video Pill

**`video-pill`** is a 1144px by 640px rounded-full media block on desktop. It carries a centered translucent play button and bottom caption. On mobile it becomes a 1:1 rounded rectangle.

### Image Service Card

**`image-service-card`** is a photo-backed service tile. It uses a 24px radius, bottom gradient, 28px heading, and white/off-white text. Desktop grid is 3-up; mobile becomes horizontal scroll cards.

### Dark Feature Section

**`dark-feature-section`** holds the "Why more homeowners are switching now" content. The heading is centered, with the second line faded. Tabs are text pills in a glass track. The cards can overflow horizontally to preserve the Figma carousel feel.

### Case Hero

The case-study hero is a large rounded photo panel with bottom-left story text and a right-side translucent savings widget. It should feel like editorial proof, not a generic testimonial block.

### Process Cards

**`process-card`** pairs large process imagery with a white explanatory card. Desktop layout is side-by-side with a sticky step index. Mobile stacks each image over its card.

### FAQ Rows

**`faq-row`** uses plain horizontal rules, 24px question text, and no boxed accordion chrome. The first item may be open by default.

### CTA Section

The CTA is a dark/photo band with centered text:
- `We built Helios`
- `for businesses like yours`

It uses the same opacity split as other dark headings. Buttons remain pill-shaped.

### Footer

The footer is light, not dark. It uses the Helios logo, grouped links, company address, legal row, long disclaimer, and review/rating card. Footer link headings are small and muted; primary footer links use 20px medium text.

## Do's and Don'ts

### Do

- Use real energy, home, solar, battery, and neighborhood photography.
- Keep the palette warm: off-white, beige-gray, charcoal, and restrained yellow.
- Use glass blur only where content floats over photography or transitions across sections.
- Split major headlines into full-opacity and faded lines.
- Use pill buttons with 32px radius.
- Keep body copy quiet, regular weight, and highly legible.
- Let images carry the energy; use UI chrome sparingly.

### Don't

- Do not introduce blue SaaS gradients, purple accents, neon effects, or abstract blobs.
- Do not use sharp rectangular buttons.
- Do not overuse yellow; it is for incentives and numeric highlights.
- Do not make cards feel like generic dashboard cards. Service and story cards should be photo-led.
- Do not center every section. Hero and process sections need asymmetry and editorial rhythm.
- Do not add heavy shadows. Use glass, overlays, and photography for depth.
- Do not uppercase normal CTA labels; Helios speaks in sentence case.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Mobile | < 768px | Glass nav compresses to logo + consultation + menu; hero h1 drops to ~36-40px; service cards scroll horizontally; process cards stack |
| Tablet | 768-1024px | Nav remains compact; card grids can collapse to 2 columns; large media keeps strong rounded corners |
| Desktop | 1024-1440px | Full floating nav; 3-up service cards; side-by-side case/process layouts |
| Wide | > 1440px | Keep content maxed near 1376px; do not stretch text columns |

### Mobile Rules

- Maintain 16-24px page gutters.
- Keep tap targets at 40px minimum, 48px preferred.
- Convert the desktop video pill to a square or rounded rectangle; do not force a 1144:640 ratio on mobile.
- Hide the latest-project hero card on mobile unless there is enough vertical room.
- Avoid horizontal text overflow by reducing h1 size before reducing line height.

### Image Behavior

- Hero images crop responsively and may favor the right-side subject on mobile.
- Photo cards use `object-fit: cover`.
- Never letterbox key photography.
- Mobile service cards should preserve image impact by scrolling horizontally rather than shrinking into tiny columns.

## Iteration Guide

1. Start every new section by choosing its surface mode: light editorial, dark photo, or glass overlay.
2. Reuse `{colors.surface-1}`, `{colors.surface-3}`, and `{colors.surface-dark}` before adding any new surface.
3. Use Switzer Medium for display and Switzer Regular for body.
4. Use `Geist Mono` only for small uppercase labels.
5. Prefer one large image over several decorative fragments.
6. Keep all action controls pill-shaped.
7. If a section feels flat, add photographic depth before adding shadows.
8. If a section feels busy, reduce chrome and let whitespace carry the structure.

## Known Gaps

- The Figma URL without `node-id` points to the whole file; this document uses the full `Home A (Product-Focused)` frame and the `Mobile Home` frame as the primary references.
- The exact Switzer font files are not bundled in this local Astro implementation; system fallback is used unless the font is added separately.
- Dropdown menu states exist in Figma, but this document focuses on the site-wide design language and the Home A page system.
- Some CMS pages exist in the Figma file (blog, solution, case study, contact variants). They share the same tokens but are not exhaustively documented here.
- Motion timing is not extracted from Figma. Use subtle 150-220ms easing for hover and nav color transitions if needed.
- Form validation states are not fully represented in the Home A frame.
