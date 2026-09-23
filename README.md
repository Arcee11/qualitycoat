# Quality Coat — Professional Painting & Restoration

Static business website for Quality Coat (Cape Coral, Fort Myers, Naples, and
Punta Gorda, Florida). Phone: 239-222-1439.

## Pages

- `index.html` — hero with logo, headline, tap to call, four service sections
  (Painting & Finishing, Cabinet & Furniture Refinishing, Specialty Coatings,
  Remodeling & Home Improvements), Our Work, Why Quality Coat, service area,
  and a Contact/Estimate CTA band
- `services/index.html` — all 13 services, each with a short description
- `contact/index.html` — "Request an Estimate" form (name, phone, email,
  service needed, project details)

## Quote form

`assets/js/main.js` posts via FormSubmit AJAX to:

`https://formsubmit.co/ajax/qualitycoat27@gmail.com`

FormSubmit needs one real submission to activate the address, same as the
GEMS quiz flow. Form field names and the endpoint must not change.

## Design

Clean white background, black lettering, red (`#c8102e`) accents and buttons
with white lettering. Headings in Cormorant Garamond Italic with Bodoni Moda
Italic as the CSS fallback; body text in Jost. Mobile first; buttons stack
full width at 390px.

The original Quality Coat logo files (`assets/img/logo-card.jpg` and
`assets/img/emblem.png`) are used exactly as supplied and are not altered.

Note: the old `/light/` preview variant and `assets/css/light.css` were
removed on 2026-09-23 because the main site is now the light design. The
old black and gold theme is gone.

## Publish

Repo: `Arcee11/qualitycoat` (public), GitHub Pages from main branch root.
Preview: https://arcee11.github.io/qualitycoat/
