# Etalon template checkpoint — 2026-09-09

## Source of truth
Approved visual reference: the latest 1536×1024 screenshot supplied in the project chat (Gaming Services Marketplace / Lineage 2 dark fantasy UI).

## Current goal
The reference image is only a visual target. The actual deliverable is a real HTML/CSS/JS site template with independent UI elements and working controls. Full-screen screenshots must never be used as the site UI.

## Non-negotiable visual rules
- Reproduce the approved screenshot, not an approximate redesign.
- Preserve dark navy/black background and gold fantasy ornamentation.
- Outer page edges use separate left/right gold lace layers.
- Use mixed frame geometry: chamfered corners only on elements that are chamfered in the reference; do not apply bevels globally.
- Ornate panels use extracted decorative corner assets.
- Gold UI icons are preserved as image sprite assets; no emoji or generic icon replacements.
- Task thumbnails and driver avatars use dedicated extracted sprites.

## Interactive template
Path: `/preview-etalon/`
Public template: https://adrianshkiper.github.io/gaming-services-marketplace/preview-etalon/

The page is now a functional front-end template:
- top navigation buttons are real buttons;
- left sidebar controls are real buttons;
- message / notification / profile controls are real buttons;
- search works;
- category filters work;
- price filters work;
- sorting tabs work;
- reviews toggle works;
- reset works;
- pagination has active state and page selection;
- `Написать` opens a working modal;
- footer legal controls are buttons ready for future links.

## Future navigation links
All future page links are centralized in `app.js` in the `ROUTES` object. Values are currently `null` on purpose. Later we only need to replace, for example:

```js
community: '/community/',
profile: '/profile/',
orders: '/orders/'
```

No visual HTML needs to be rebuilt when routes are added.

## Visual asset packages
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
- app.js — filters, modal, pagination and centralized future routing

## Safety / rollback rule
The root `index.html` remains the previous stable version until this template is visually approved. Continue corrections in `/preview-etalon/` first.

## Next work pass
Continue visual correction by zones while keeping the UI functional:
1. Outer shell / lace / page corners
2. Header
3. Left sidebar
4. Hero
5. Toolbar
6. Master task card
7. Remaining task cards
8. Right sidebar
9. Footer / final measured geometry

Approved zones must not be changed later without a specific reason.