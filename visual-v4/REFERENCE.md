# Visual V4 — immutable reference

Source image: user-approved 1536×1024 reference screenshot supplied in project chat on 2026-09-09.
SHA-256: `114c8c1ac66502e293d524c6d9616a1ba73f000a8d64817db275c7ba334efae9`
Canvas: `1536 × 1024`.

## Rule
This image is the sole visual source of truth for Visual V4. No redesign, stylistic reinterpretation, alternate icon set, alternate frame geometry, or substitute fantasy art is allowed unless the user explicitly approves it.

## Implementation method
- The full screenshot must NOT be used as the page background/UI.
- Static artwork is cropped from the reference into dedicated assets.
- Gold icons are cropped from the reference and used as independent assets/sprites.
- Repeating ornate frames are reconstructed from exact edge/corner slices (9-slice / border-image where practical).
- Interactive zones are real HTML controls (`button`, `input`, `select`, etc.).
- Where exact visual fidelity is more important than editable label text, a cropped control face may be used as the visual background of a real HTML button with `aria-label`/routing on the button.
- The 1536×1024 desktop composition is preserved exactly; smaller screens scale the composition rather than reflowing it during the visual-match phase.

## Planned asset groups
1. outer-shell: left/right lace, four page corners, top/bottom gold lines, center diamonds
2. header: logo, task/community/rating/partner/help icons, mail, bell, profile avatar
3. left: welcome card, side-menu icon sprite, promo-left
4. center: hero, toolbar chrome, task thumbnails, driver avatars, task-card bevel samples
5. right: category/filter icons, panel frame slices, promo-right
6. footer: bottom ornament and divider samples

## Build rule
New work goes under `/visual-v4/`. Old `/preview-etalon/` remains untouched as rollback/reference history.
