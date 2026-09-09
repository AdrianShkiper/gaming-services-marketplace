# Etalon template checkpoint — 2026-09-09

## Source of truth
Current visual target: the latest 1536×1024 dark-fantasy marketplace screenshot generated in this project chat and explicitly approved by the user as the visual direction for the real site template.

The actual deliverable is **not a screenshot**. It is a real HTML/CSS/JS template with independent UI elements and working controls.

## Non-negotiable visual rules
- Reproduce the approved 1536×1024 visual as closely as possible in live HTML/CSS.
- Preserve dark navy/black background, gold fantasy ornamentation and side decorative towers/lace.
- Outer page edges use separate left/right decorative layers.
- Chamfered corners appear only on elements that are chamfered in the visual.
- Ornate panels and normal panels use different frame treatments.
- Gold UI icons remain independent UI assets; no emoji replacements.
- Task thumbnails and driver avatars stay independent sprites.
- Do not use a full-page screenshot as the site UI.

## Interactive template
Path: `/preview-etalon/`
Public template: https://adrianshkiper.github.io/gaming-services-marketplace/preview-etalon/

Working controls already present:
- top navigation;
- left sidebar;
- messages / notifications / profile;
- search;
- categories;
- min/max price;
- sorting tabs;
- reviews toggle;
- reset;
- pagination state;
- `Написать` modal;
- footer legal controls.

## Future navigation links
All future page links remain centralized in `app.js` in the `ROUTES` object. Route values are intentionally `null` until real pages are added.

## Visual correction pass v2
New live override files:
- `visual-v2.css` — measured 1536×1024 geometry and styling pass;
- `visual-v2-fixes.css` — control reset, notification badge and hover/focus polish.

Main corrections in v2:
- content inset moved inward to match the approved composition;
- header height and proportions changed;
- outer top/bottom gold lines and center diamonds added;
- side decorative layers widened and given gothic tower silhouettes under the existing gold lace;
- left / center / right columns resized;
- welcome, side menu and promo proportions corrected;
- hero and toolbar resized;
- task cards reduced to the approved compact height and smaller chamfers;
- right categories / filters / promo resized;
- footer geometry corrected;
- all existing buttons remain independent working HTML controls.

## Existing visual packages
- assets-a.css — logo + profile avatar
- assets-b.css — welcome portrait block
- assets-c.css — left promo art
- assets-d.css — right promo art
- assets-e.css — right side of hero art
- assets-f.css / assets-g.css — left/right gold lace
- assets-h.css — task thumbnail sprite
- assets-i.css — avatar sprite + gold icon sprite
- assets-j.css / assets-k.css — decorative frame corners
- styles-1.css / styles-2.css / styles-3.css — base geometry / frames / responsive behavior
- app.js — filters, modal, pagination and centralized future routing

## Safety / rollback rule
The root `index.html` is still the previous stable site. All visual work continues in `/preview-etalon/` until the user approves it for promotion to the root.

## Next work pass
After user review of v2, correct measured differences in this order:
1. Header assets and gold icons
2. Left sidebar assets
3. Hero artwork quality
4. Master task card
5. Right sidebar assets
6. Final 1536×1024 pixel pass

Approved zones must not be changed later without a specific reason.