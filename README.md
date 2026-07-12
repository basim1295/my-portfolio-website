# Basim Shabir — Portfolio Website

A single-page, scrollable personal portfolio built on the **Basim Shabir Design System** (motorsport-editorial: near-black canvas, uppercase display type, tricolor signature stripe).

---

## ⚠️ Important: how to view the site

**Do NOT double-click `index.html`.** Chrome blocks the site from loading when opened directly from disk (the `file://` protocol) because it can't fetch the `app.jsx` script for security reasons. You'll see a **black screen** if you try.

You **must** run a local web server. Two easy ways:

### Option A — Python (already installed on your machine)

Open PowerShell in the project folder and run:

```powershell
cd "C:\Users\Basim\Desktop\Job Search 2026\my-portfolio-website\src"
python -m http.server 5173
```

Then open **http://localhost:5173** in Chrome.

Press `Ctrl+C` in the terminal to stop the server.

### Option B — Node (if you prefer)

```powershell
cd "C:\Users\Basim\Desktop\Job Search 2026\my-portfolio-website\src"
npx serve -l 5173
```

Same URL: http://localhost:5173.

---

## Folder structure

```
my-portfolio-website/
├── README.md              ← you are here
└── src/                   ← everything the browser serves lives here
    ├── index.html         ← page shell (entry point)
    ├── app.jsx            ← all React sections & routing logic
    ├── data.js            ← ALL editable content (edit this to update the site)
    ├── styles.css         ← imports every token file
    ├── _ds_bundle.js      ← compiled design-system components (do not edit)
    ├── tokens/            ← design tokens: colors, type, spacing, etc.
    │   ├── colors.css
    │   ├── typography.css
    │   ├── spacing.css
    │   ├── radius.css
    │   ├── motion.css
    │   ├── base.css
    │   └── fonts.css
    └── assets/            ← images, PDFs, SVGs
        ├── portrait.jpg
        ├── Basim_Shabir_resume.pdf
        ├── logo.svg
        └── stripe.svg
```

---

## What each file does

### `src/index.html`
The HTML entry point. Loads React, Babel (in-browser JSX compiler), the design-system bundle, the content file, and the app. **You almost never need to touch this.**

### `src/app.jsx`
The React app. Contains one React component per section:

- `Hero` — split intro (name + tagline + résumé/LinkedIn buttons + portrait)
- `Education` — 2-column grid
- `Projects` — 2×2 project grid (custom `ProjectCard` local to this file)
- `WorkExperience` — role timeline
- `Leadership` — role blocks with photo albums (custom `Album` component with lightbox)
- `Certifications` — cert grid + technical toolkit chips
- `App` — the shell: `TopNav` + anchor-scroll spy + all sections + `CtaBand` + `Footer`

Edit this file when you want to **change layout or add new sections**. If you just want to change **text or images**, edit `data.js` instead.

### `src/data.js` ⭐ (this is the file you'll edit most)
**100% of the text on the site lives here.** The React app reads everything from `window.PortfolioData`.

Structure:
- `profile` — name, tagline, location, résumé URL, LinkedIn URL, email, portrait path, intro paragraph
- `education` — array of `{ degree, org, location, period, detail }`
- `projects` — array of `{ id, name, specs, image, description, link }`  (paste any URL into `link` to make the card clickable)
- `workExperience` — array of orgs, each with roles and bullets
- `leadership` — array of `{ role, org, period, summary, bullets, album }` — `album` is an array of image URLs/paths
- `certifications` — array of `{ name, org, date }`
- `skills` — array of strings (the toolkit chips)
- `nav` — top-bar labels (`items[]`) and the Contact button label
- `copy` — every heading, eyebrow, and button label on the page:
  - `copy.hero` — hero eyebrow prefix + button labels
  - `copy.sections.<section>` — `{ eyebrow, title }` for each of the 5 sections
  - `copy.projectCard.linkLabel` — "Explore this project →"
  - `copy.techToolkitLabel` — the little label above the skills chips
  - `copy.cta` — pre-footer CTA band (headline, subhead, action label, image)
  - `copy.footer` — footer column titles, "Currently" bullet points, fineprint

**To swap an image**, replace the URL/path here. See "Adding your own images" below.

**To rename a section headline** (e.g. change "Where I've built." to "Career."), edit `copy.sections.workExperience.title` — no need to touch `app.jsx`.

### `src/styles.css`
Single-line file that `@import`s every token file. **Don't add rules here directly** — put design tokens in `tokens/` and inline styles inside components.

### `src/_ds_bundle.js`
The compiled design-system components (`TopNav`, `Button`, `MStripe`, `Footer`, `CtaBand`, `CarouselArrow`, etc.). Pulled from your Claude Design project. **Do not edit** — if you need to update the design system, re-sync it from Claude Design.

### `src/tokens/`
CSS custom properties (variables) split by concern:

| File | Purpose |
|---|---|
| `colors.css` | `--canvas`, `--on-dark`, `--body`, tricolor stripe, all surface tones |
| `typography.css` | Font families, sizes, weights, letter-spacing |
| `spacing.css` | 4px base spacing scale, `--content-max`, gutters |
| `radius.css` | Corner radii (almost always `0`) |
| `motion.css` | Easing curves and durations |
| `base.css` | Global reset — body/html defaults, link hover, `::selection` |
| `fonts.css` | Inter font-face loads (Google Fonts CDN) |

Edit these to shift the whole system (e.g. change the accent stripe colour, tweak the base font size).

### `src/assets/`
Static files: photos, PDF, SVGs. Reference them from `data.js` using relative paths like `assets/portrait.jpg` (no leading slash).

---

## How the site works (data flow)

```
index.html
   ↓ loads
React + Babel + _ds_bundle.js + data.js + app.jsx
   ↓
app.jsx reads window.PortfolioData (from data.js)
   ↓
Renders <App> which composes DS components + local sections
   ↓
CSS custom properties in tokens/ style everything
```

**Navigation** is anchor-based: each section has an `id` (`#intro`, `#projects`, `#work-ex`, `#leadership`, `#certifications`). Clicking a nav link smooth-scrolls to that section. An `IntersectionObserver` highlights the active nav item as you scroll.

**No build step** — Babel compiles JSX in the browser at load time. Great for iteration; slower than a real build. Fine for a personal site.

---

## Common edits

### Change the intro copy
`data.js` → `profile.intro` and `profile.tagline`.

### Change a section headline (e.g. "Projects." → "Case studies.")
`data.js` → `copy.sections.projects.title`.

### Rename a nav item
`data.js` → `nav.items[i].label`. Keep the `href` unchanged — it points to the section anchor.

### Change the pre-footer CTA text
`data.js` → `copy.cta.headline` / `subhead` / `actionLabel`.

### Add / remove / reorder projects
`data.js` → `projects` array. The grid auto-fills.

### Make a project card clickable (link to a repo, notebook, doc, etc.)
`data.js` → the project's `link` field. Paste **any URL** — GitHub, Vercel deployment, Google Doc, Colab/Jupyter notebook, YouTube demo, PDF, arXiv, Medium article. The whole card becomes a link that opens in a new tab, and an "Explore this project →" label appears at the bottom.

Leave `link` as `""` (empty string) if there's nothing to link to yet — the card still shows image/title/description, just isn't clickable.

### Update a leadership role's bullets
`data.js` → `leadership[i].bullets` (array of strings).

### Change the résumé PDF
Replace `src/assets/Basim_Shabir_resume.pdf` with your new file (keep the same name), or update `profile.resumeUrl` in `data.js`.

### Change site colors
`src/tokens/colors.css`. The tricolor is `--stripe-blue-light`, `--stripe-blue-dark`, `--stripe-red`.

---

## Adding your own images

**1. Drop image files into `src/assets/`**, ideally organised in subfolders:

```
src/assets/
├── portrait.jpg
├── leadership/
│   ├── mdas-president-1.jpg
│   ├── mdas-president-2.jpg
│   └── mdas-vp-1.jpg
└── projects/
    ├── cancer-treatment.jpg
    └── resume-tailor.jpg
```

**2. Reference them from `data.js`** using relative paths:

```js
// Leadership album:
album: [
  "assets/leadership/mdas-president-1.jpg",
  "assets/leadership/mdas-president-2.jpg",
]

// Project card:
image: "assets/projects/cancer-treatment.jpg",
```

**3. Reload the page** (`Ctrl+Shift+R` in Chrome to bypass cache).

**Sizing tips**
- JPEG, 80% quality, ~1600px wide → keeps files ~200–500 KB
- Album images are shown at 320×240 in the scroller and full-size in the lightbox
- Project card images use a 16:10 aspect ratio
- Portrait uses 4:5

---

## Troubleshooting

**Black screen in Chrome** → You opened `index.html` from `file://`. Start a local server (see "How to view the site" above) and use `http://localhost:5173`.

**Fonts look wrong** → Inter loads from Google Fonts CDN. Check your internet, or replace `fonts.css` with locally-hosted files.

**Images not showing** → Check the path in `data.js` matches the actual file in `assets/`. Paths are case-sensitive and must not start with `/`.

**Design system components missing** → `_ds_bundle.js` didn't load. Make sure the file exists at `src/_ds_bundle.js` and the `index.html` `<script>` tag points to it.

---

## Deploying to the web

When you're ready to publish (Vercel, Netlify, GitHub Pages, etc.):

1. Deploy the `src/` folder as the site root.
2. Consider pre-compiling the JSX for production instead of relying on in-browser Babel (Vite would be a natural upgrade path).
3. Replace CDN font loads with self-hosted `.woff2` files for reliability.

---

## Changelog

- **2026-07-11** — Initial site: hero, education, 4 projects, BYJU'S work timeline, 3 leadership entries with photo albums + lightbox, certifications + tech toolkit, CTA band, footer, anchor-scroll nav.
- **2026-07-11** — Fixed horizontal overflow caused by the leadership album scroller (added `min-width: 0` on grid children).
- **2026-07-12** — Added this README.
- **2026-07-12** — Moved all remaining hard-coded text (section headlines, nav labels, CTA band, footer columns) into `data.js` under `copy` and `nav`. `data.js` is now the single source of truth for every string on the page.
- **2026-07-12** — Renamed `projects[].href` → `projects[].link` for clarity. Paste any URL (repo, notebook, doc, deployed app) into `link` and the whole card becomes clickable. Empty string = card isn't linked.
- **2026-07-12** — Added optional `logo` field to education entries. If an entry has `logo: "assets/xyz.png"`, the logo renders on the right side of that education card at 120×120 (contain-fit, slight opacity). Entries without `logo` render text-only.

*Update this section whenever you (or Claude) make a meaningful change to the site.*
