# Content to fill in ✍️

Everything below is a placeholder in the site right now. Work through the checklist and the site
is ready to publish. Search each file for the text in `code` to find the exact spot.

---

## 1. Business basics (appear on every page)

- [ ] **Business name** — currently **Bloom &amp; Buttercream**. Keep it, or search `Bloom &amp; Buttercream` to change everywhere.
- [ ] **Tagline** — currently *"Where sweetness blooms"* (Home hero). Change in `index.html` if you like.
- [ ] **Email** — replace `hello@bloomandbuttercream.com` everywhere (footer on every page, `contact.html`, and the form's `mailto:` fallback).
- [ ] **Phone** — replace `[Add phone number]` and the `tel:+10000000000` link in `contact.html`.
- [ ] **Service area / city** — replace `[Your City &amp; surrounding area]` (footers + `contact.html`).
- [ ] **Studio hours** — replace `[Confirm your hours]` in `contact.html`.
- [ ] **Social links** — replace the `href="#"` on the Instagram / Facebook / Pinterest icons (footers + `contact.html`). Remove any network you don't use.

---

## 2. The sisters' story — `about.html`

- [ ] **Sister names** — replace `[Sister One]` and `[Sister Two]`.
- [ ] **Your story** — replace the two paragraphs marked with `[Add your story here.]`: who you are, how you started, and why you brought cakes and flowers together.
- [ ] **Portrait photo** — replace `images/ph-portrait.svg` with a real photo of the two of you (see photo list below).

---

## 3. Testimonials — `index.html`

- [ ] Replace the placeholder quote and `A very happy bride · Placeholder testimonial` with a real client review and name/occasion. (Add more by copying the `.quote` block if you'd like a rotation later.)

---

## 4. Prices — review every one

All prices are **placeholders from the sample catalogue**. Confirm or change each before publishing:

- [ ] **Cakes &amp; Sweets** (`cakes.html`): Make a Wish, Happily Ever After, The Sweetest Table, Little Darlings, Ooh La La, Sweet Talk, Tiny Treasures, Season's Sweetest.
- [ ] **Cake flavours** (`cakes.html`): edit the flavour pills to your real menu.
- [ ] **Floral Design** (`flowers.html`): The Blushing Bride, Her Best Girls, Centre of Attention, The Grand Entrance, Hello Gorgeous, Forget-Me-Not, Season's Darling, Bloom Club, The Corner Office.
- [ ] **Signature** (`weddings.html`): The Perfect Match, The Dream Day, Sweets &amp; Stems, Let's Dream.

---

## 5. Photos to take / provide

Each is marked in the HTML with a `<!-- REPLACE: photo of ... -->` comment. See
`images/README-images.md` for sizes.

**Home (`index.html`)**
- [ ] Hero — a celebration cake beside a fresh arrangement, soft morning light (wide/landscape)
- [ ] Signature — a matching cake &amp; floral arrangement styled together
- [ ] Cakes tile · Florals tile · 4 gallery-preview images

**About (`about.html`)**
- [ ] Portrait of the two sisters together
- [ ] Hands finishing a cake / trimming flowers in the studio

**Cakes (`cakes.html`)** — one photo per item
- [ ] Celebration cake · wedding cake · dessert table · cupcakes · macarons · sugar cookies · petit fours · seasonal treats · a cake-with-matching-flowers shot

**Floral (`flowers.html`)** — one photo per item
- [ ] Bridal bouquet · bridesmaid bouquets · centerpiece · installation/arch · gift bouquet · sympathy arrangement · seasonal arrangement · subscription bouquet · corporate florals

**Weddings (`weddings.html`)**
- [ ] Hero (wedding cake + bridal florals) · the 4 signature package photos · a styled tablescape · 3 event-work photos

**Gallery (`gallery.html`)**
- [ ] 12 of your best photos. Update each tile's `src`, `alt`, `data-full`, `data-caption`, and the `data-cat` (`cakes` / `flowers` / `signature`) so the filters work.

**Social share image**
- [ ] Replace `images/ph-hero.svg` in every page's `og:image` meta tag with a **1200×630** photo.

---

## 6. Connect the form

- [ ] Create a Formspree form and paste your endpoint over `YOUR_FORM_ID` in `contact.html`.
      Full steps are in the **README.md**.

---

## 7. Optional polish

- [ ] Add a real logo image if you have one (or keep the built-in SVG mark).
- [ ] Add a Google Map embed or address block to `contact.html` if you have a storefront.
- [ ] Add more testimonials, an FAQ, or a blog later — the styles are ready to reuse.

---

Once the boxes above are checked, you're ready to deploy. 🌸
