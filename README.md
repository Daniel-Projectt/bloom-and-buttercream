# Bloom &amp; Buttercream — Website

The flagship online home of **Bloom &amp; Buttercream**, a sister-owned studio that unites
two crafts under one roof: **custom cakes &amp; sweets** and **bespoke floral design**. The site
is a clean, fast, mobile-first **static website** — no frameworks, no build step — ready to
deploy on GitHub Pages.

> Warm and motherly, but polished and elegant: approachable luxury, made with love.

---

## ✨ What's inside

A seven-page site sharing one look and one stylesheet:

| Page | File | What it does |
|------|------|--------------|
| Home | `index.html` | Full-bleed hero, the dual-craft story, featured services, gallery preview, testimonial, how-it-works, CTA |
| About | `about.html` | The sisters' story, values, and promise *(story left for the owners to fill in)* |
| Cakes &amp; Sweets | `cakes.html` | The sweets offering as elegant cards, flavour list, cross-sell to flowers |
| Floral Design | `flowers.html` | The floral offering as elegant cards, cross-sell to cakes |
| Weddings &amp; Events | `weddings.html` | The premium **signature** packages, what's included, the process, event work |
| Gallery | `gallery.html` | Filterable masonry grid with a keyboard-accessible **lightbox** |
| Contact | `contact.html` | Inquiry form (Formspree + `mailto:` fallback), hours, service area, social |

---

## 📁 File structure

```
bloom-and-buttercream/
├── index.html            ← Home (site root)
├── about.html
├── cakes.html
├── flowers.html
├── weddings.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css        ← the one shared stylesheet (design system)
├── js/
│   └── main.js           ← all interactions (vanilla JS, no dependencies)
├── assets/
│   ├── logo-mark.svg     ← the bloom/rosette logo icon
│   └── favicon.svg       ← browser-tab icon
├── images/
│   ├── ph-*.svg          ← tasteful placeholder images (swap for real photos)
│   └── README-images.md  ← how to swap in photos
├── README.md             ← you are here
└── content-to-fill.md    ← every placeholder to complete, in one checklist
```

The header and footer markup are **repeated in each page** (a plain static site has no
templating). They are clearly marked with `<!-- SHARED HEADER -->` / `<!-- SHARED FOOTER -->`
comments — if you edit one, copy the change to every page so the site stays consistent.

---

## 👀 Preview locally

Because it's just HTML/CSS/JS, you can open `index.html` straight in a browser.
For links and the form to behave exactly as they will live, run a tiny local server:

```bash
# From inside the project folder:

# Option A — Python (already on most machines)
python -m http.server 8000
# then open http://localhost:8000

# Option B — Node
npx serve
```

---

## 🚀 Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `bloom-and-buttercream`).
2. Push these files to the **root** of the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bloom-and-buttercream.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment**.
   - Source: **Deploy from a branch**
   - Branch: **main** · Folder: **/ (root)** → **Save**
4. Wait a minute, then visit `https://YOUR-USERNAME.github.io/bloom-and-buttercream/`.

Because `index.html` sits at the root and all links are **relative**, it works on GitHub Pages
with no extra configuration. To use a custom domain later, add it under **Settings → Pages**.

---

## 🖼️ Swap in real photos

All images are currently elegant SVG placeholders in `images/`. Each `<img>` is preceded by a
`<!-- REPLACE: photo of ... -->` comment describing the shot to take.

To replace one:
1. Drop your photo into `images/` (use `.jpg` or `.webp`, ~1600px wide, optimised).
2. Change that image's `src="images/ph-xxxx.svg"` to your file, e.g. `src="images/wedding-cake.jpg"`.
3. Update the `alt="..."` text to describe your real photo (important for accessibility &amp; SEO).

Keep the same rough aspect ratio so the layout stays tidy. See `images/README-images.md` for a
per-placeholder guide. Also replace `images/ph-hero.svg` referenced in each page's
`og:image` meta tag with a **1200×630** social-share image.

**Tip:** keep photos optimised (e.g. [squoosh.app](https://squoosh.app)) so the site stays fast.
Images already use `loading="lazy"` so off-screen photos won't slow the first paint.

---

## 📬 Connect the inquiry form (Formspree)

GitHub Pages is static, so the form posts to **[Formspree](https://formspree.io)** (free tier).
Until you connect it, the form shows a friendly note and the `mailto:` link still works.

1. Sign up at **https://formspree.io** and create a new form.
2. Copy your form endpoint — it looks like `https://formspree.io/f/abcdwxyz`.
3. Open `contact.html` and replace **`YOUR_FORM_ID`** in the form's `action`:
   ```html
   <form class="form" action="https://formspree.io/f/abcdwxyz" method="POST" novalidate>
   ```
4. Replace the `hello@bloomandbuttercream.com` address in the `mailto:` fallback (and across the
   site) with your real email — Formspree will send submissions to the email you verify with them.
5. Submit a test message and confirm it arrives. Done!

The form already includes a hidden honeypot field (`_gotcha`) to reduce spam, a custom email
subject, and a graceful AJAX submit with a status message (with a no-JS fallback).

---

## ♿ Accessibility &amp; performance notes

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`), a skip-link, and `alt` text everywhere.
- Navy-on-cream body text clears WCAG AA contrast; visible keyboard focus states throughout.
- The lightbox is keyboard-operable (Enter to open, ← / → to navigate, Esc to close).
- `prefers-reduced-motion` is respected — all reveals and transitions are disabled for users who ask.
- Minimal, dependency-free JS; fonts loaded with `display=swap`; images lazy-loaded.

---

## 🎨 Brand quick-reference

Defined as CSS custom properties at the top of `css/styles.css`:

| Token | Hex | Use |
|-------|-----|-----|
| Cream white | `#FAF6EF` | Primary background |
| Deep navy | `#1F2D3D` | Text &amp; anchors |
| Baby blue | `#BFD7E6` | Soft accent |
| Powder blue | `#EAF2F7` | Alternating section backgrounds |
| Soft gold | `#C8A96A` | Luxe accent, dividers, hover |
| Blush | `#EAD1CE` | Tertiary warmth |

**Type:** Fraunces (display) · Nunito Sans (body) · Pinyon Script (accent), via Google Fonts.

---

Made with love. 🌸
