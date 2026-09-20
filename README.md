# Quality Coat — Professional Painting & Restoration

Static business website for Quality Coat (Cape Coral and Fort Myers, Florida).
Phone: 239-222-1439.

## Pages

- `index.html` — hero with logo, tagline, tap to call, services overview, trust line, service area, CTA
- `services/index.html` — detail per service (Cabinet Refinishing, Furniture Restoration, Home Transformation, Fine Finishes)
- `contact/index.html` — quote request form (name, phone, email, service needed, project details)

No gallery page (client asked to skip for now).

## Quote form

`assets/js/main.js` posts via FormSubmit AJAX to:

`quotes@qualitycoat.example.com`  ← PLACEHOLDER, fake address on purpose

Swap in the real inbox address at the marked `QUOTE_FORM_ENDPOINT` line before
launch. FormSubmit needs one real submission to activate the address, same as
the GEMS quiz flow.

## Design

Black background, gold headings (Cinzel), red accents, Jost body text.
Mobile first; reviewed at 390px width.

## Publish

Repo: `Arcee11/qualitycoat` (public), GitHub Pages from main branch root.
Preview: https://arcee11.github.io/qualitycoat/
