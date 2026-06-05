# Portfolio — CLAUDE.md

This is Ankit Singh's personal portfolio site hosted on GitHub Pages at `ankitsingh7392.github.io`. It is a fully static site (no build step, no framework) driven by a single config file.

---

## Architecture

| File | Purpose |
|---|---|
| `config.js` | **Single source of truth for ALL content.** Edit this file only for any content change. |
| `app.js` | Reads `config.js` and renders everything to the DOM. Also handles CV PDF generation. |
| `style.css` | All styling. Uses CSS custom properties (`var(--xxx)`) for theming. |
| `index.html` | Thin HTML shell. Section structure only — no content. |

**The golden rule: never hardcode content in `index.html` or `app.js`. It all goes in `config.js`.**

---

## How to update for a new job or career change

### Starting a new role
1. Add a new entry at the top of `CONFIG.experience` in `config.js`
2. Update `CONFIG.stats` — especially "Years Building Test Systems" value and any new impact numbers
3. Update `CONFIG.bio` paragraphs to reflect the new role/positioning
4. Update `CONFIG.title` and `CONFIG.tagline` in the hero
5. Update `CONFIG.availability` if job-seeking status changes

### Changing career direction entirely
1. Update `CONFIG.title`, `CONFIG.tagline`, `CONFIG.bio`
2. Revise `CONFIG.skillGroups` — add new skill categories, remove irrelevant ones (each group has a `color` and `skills` array)
3. Update `CONFIG.stats` with new impact numbers relevant to the new field
4. Update `CONFIG.aiCard` if the "Current Focus" changes
5. Update `CONFIG.sectionTitles` if any headings no longer fit

### Adding a new certification
```js
// In CONFIG.certifications array:
{ name: "Cert Name", issuer: "Issuing Body", year: "2026", icon: "🎓", link: "https://verify-url" }
```

### Adding a new award/recognition
```js
// In CONFIG.recognition array:
{ award: "Award Name", org: "Organisation", year: "2026", icon: "🏆", note: "Optional context" }
```

---

## config.js reference

```
CONFIG.name              — Full name
CONFIG.title             — Job title shown under name
CONFIG.tagline           — One-line hero tagline
CONFIG.location          — City, Country
CONFIG.availability      — Availability pill text (split on · for badges)
CONFIG.bio[]             — Array of bio paragraphs (HTML allowed, use <strong> for key terms)
CONFIG.quote             — Blockquote shown in About section
CONFIG.stats[]           — { value, label, color } — stats strip below hero
CONFIG.aiCard            — { label, heading, body } — AI focus card
CONFIG.skillGroups[]     — { label, color, skills[] } — skill pill groups in About sidebar
CONFIG.sectionTitles     — All section headings and subtitles (edit here, not in app.js)
CONFIG.certifications[]  — { name, issuer, year, icon, link }
CONFIG.recognition[]     — { award, org, year, icon, note? }
CONFIG.experience[]      — { company, role, location, start, end, summary, highlights[] }
CONFIG.email             — Contact email
CONFIG.github            — GitHub profile URL
CONFIG.linkedin          — LinkedIn profile URL
CONFIG.calendly          — Calendly booking URL
CONFIG.pinnedRepos[]     — Repo names to show in Projects section (fetched live from GitHub API)
```

---

## Design system

### Colours
- Accent / Primary: `#7c3aed` (purple) — hero gradient, section labels, buttons
- Teal: `#0891b2` — Cloud & Infra skill group, stat tiles
- Green: `#059669` — Test Frameworks skill group, Book a Call button
- Orange: `#ea580c` — APIs & Observability skill group
- LinkedIn blue: `#0a66c2` — LinkedIn button
- Section heading blue: `#2563eb` — used inside CV template

Tinted backgrounds use `color-mix(in srgb, <color> 10%, transparent)` — no hardcoded hex for backgrounds.

### Fonts
- **Body:** `Inter` (weights 300–800)
- **Headings / Section titles:** `Plus Jakarta Sans` (weights 600–800) — applied via `font-family: 'Plus Jakarta Sans', sans-serif` on `.section-title` and `.hero h1`
- **Code blocks:** `JetBrains Mono`

### Theming
- Light mode is the **default** (`data-theme="light"` in HTML, localStorage fallback `"light"` in app.js)
- Dark mode toggled via the sun/moon button — persisted to `localStorage`
- All theme colours defined as CSS custom properties in `style.css` under `[data-theme="light"]` and `[data-theme="dark"]`

### Skill pills
- Pill shape (`border-radius: 999px`), coloured per skill group using `--tag-color` CSS variable
- Set via `tag.style.setProperty("--tag-color", group.color)` in app.js

### Stats strip
- Each tile has `--stat-color` CSS variable set from `config.js`
- Coloured top border + number colour per tile

---

## CV download

The Download CV button opens a new browser tab with a print-ready HTML page generated dynamically from `config.js`. The user saves it as PDF via the browser's print dialog.

- **No library dependency** — uses native browser print
- **Fully dynamic** — always reflects latest `config.js` content
- **Multi-page safe** — browser handles page breaks automatically
- CV template styles are **inline** inside `buildCVHTML()` in `app.js` (not in `style.css`)
- Format: centered header, blue section headings with underline, two-column skills table, justified bullet points

To change CV format/styling, edit the `<style>` block inside the `win.document.write(...)` call in `app.js`.

---

## Local development

```bash
python3 -m http.server 8787
# Open http://localhost:8787
```

Hard refresh after changes: `Cmd + Shift + R`

---

## Git standards

- Conventional commit prefixes: `feat:`, `fix:`, `refactor:`, `chore:`
- Push directly to `main` — this is a personal portfolio, no PR workflow needed
- GitHub Pages deploys automatically on push — live within ~2 minutes
- Browser cache on the live site expires in ~10 minutes; hard refresh (`Cmd + Shift + R`) bypasses it

---

## Sections and nav order

```
Hero → Stats Strip → AI Focus Card → About → Experience → Certifications → Recognition → Projects → Contact
```

Nav links: About · Experience · Certifications · Projects · Contact

To add a new section:
1. Add HTML section in `index.html` in the correct order
2. Add rendering code in `app.js`
3. Add CSS in `style.css` (follow existing `.section` / `.section-alt` pattern for alternating backgrounds)
4. Add nav link in `index.html` if it warrants top-level navigation
5. Add any config data to `config.js`

---

## Key discoveries from building this

- `color-mix(in srgb, #hex XX%, transparent)` is the cleanest way to create tinted backgrounds without maintaining separate light/dark hex values
- `clamp(min, preferred, max)` for responsive font sizes — no media queries needed for type
- Reveal animations: elements get `.reveal` class in HTML, JS adds `.visible` via `IntersectionObserver`. Safety net `setTimeout` at 800ms ensures nothing stays hidden if observer fires late
- GitHub Pages caches JS/CSS for ~10 minutes — if visitors see stale content, they need a hard refresh. No cache-busting needed for normal updates
- The print window approach for CV generation is more reliable than html2pdf.js / html2canvas — no canvas rendering issues, crisp vector text, fonts load correctly, multi-page handled natively
