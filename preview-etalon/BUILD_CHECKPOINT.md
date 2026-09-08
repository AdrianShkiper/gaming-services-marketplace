# Etalon rebuild checkpoint — 2026-09-09

## Source of truth
Approved visual reference: the latest 1536×1024 screenshot supplied in the project chat (Gaming Services Marketplace / Lineage 2 dark fantasy UI).

## Non-negotiable visual rules
- Reproduce the approved screenshot, not an approximate redesign.
- Preserve dark navy/black background and gold fantasy ornamentation.
- Outer page edges use separate left/right gold lace layers.
- Use mixed frame geometry: chamfered corners only on elements that are chamfered in the reference; do not apply bevels globally.
- Ornate panels use extracted decorative corner assets.
- Gold UI icons are preserved as image sprite assets; no emoji or generic icon replacements.
- Task thumbnails and driver avatars use dedicated extracted sprites.

## Preview implementation
Path: `/preview-etalon/`
Public preview: https://adrianshkiper.github.io/gaming-services-marketplace/preview-etalon/

Files are split so all extracted visuals are stored directly in the repository as embedded image assets:
- assets-a.css — logo + profile avatar
- assets-b.css — welcome portrait block
- assets-c.css — left promo art
- assets-d.css — right promo art
- assets-e.css — right side of hero art
- assets-f.css / assets-g.css — left/right page gold lace
- assets-h.css — task thumbnail sprite
- assets-i.css — avatar sprite + gold icon sprite
- assets-j.css / assets-k.css — decorative frame corners
- styles-1.css / styles-2.css / styles-3.css — geometry, frames, bevels, responsive behavior
- app.js — search, categories, sorting, price filter, review toggle, reset, modal/chat prototype

## Safety / rollback rule
The root `index.html` remains the previous stable version until the etalon preview is visually approved. Continue work in `/preview-etalon/` first.

## Next visual pass
Compare preview side-by-side with the approved screenshot at 1536×1024 and adjust only measured differences: spacing, frame thickness, hero/right-column crop, icon scale, typography and gold intensity.
