# images/

These `ph-*.svg` files are **tasteful placeholders** so the site looks finished while
you gather real photography. Each `<img>` in the HTML points to one of them and is
preceded by a `<!-- REPLACE: photo of ... -->` comment describing the shot to take.

## How to swap in real photos
1. Add your photo to this folder (e.g. `wedding-cake.jpg`). Use `.jpg`/`.webp`, ~1600px wide, optimised.
2. In the page, change the `src="images/ph-xxxx.svg"` to `src="images/wedding-cake.jpg"`.
3. Update the `alt="..."` text to describe your actual photo.
4. Remove the small `<figcaption class="ph-note">` line if present.

Keep the same aspect ratio where you can so the layout stays tidy:
- `ph-hero.svg` — wide banner (use a 16:10 landscape photo)
- `ph-cake.svg` / `ph-floral.svg` / `ph-signature.svg` — 4:3
- `ph-portrait.svg` — 5:6 portrait (the sisters)
- `ph-square.svg` / `ph-tall.svg` — gallery tiles
