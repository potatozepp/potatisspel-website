# Website layout with temporary imagery

Reapply the spacious studio layout after the prior redesign was reverted. Do not use any current Towercellar artwork: the game is undergoing a visual redesign.

- Hero and about section: temporary, locally hosted forest photograph. Explicitly labeled as a mood placeholder, not a game image or studio photo.
- Game feature: intentionally typographic placeholder, labeled “New artwork coming soon” and “Visual redesign in progress”. No fake screenshot or promised final art direction.
- Replace these placeholders with approved new illustrations and a real gameplay capture later. No game repository asset is included or referenced.
- Preserve legal pages, domain configuration and #towercellar. No invented store links, team claims or release dates.
- Layout reference: [user-supplied reference](layout-reference.jpg).

## Photograph source and license

Marita Kavelashvili / Unsplash, image ID ugnrXk1129g. Free Unsplash License: https://unsplash.com/license . Credit is included in the site footer.
Source copy: https://carbonzeromanagement.com/media/filer_public/ad/69/ad693608-899f-48c6-97fa-10d7775cb332/marita-kavelashvili-ugnrxk1129g-unsplash.jpg
Independent credit confirmation: https://enb.iisd.org/media/marita-kavelashvili-ugnrxk1129g-unsplash
Converted to a local 1600 × 1063 WebP, approximately 166 KB. No third-party image request is made by visitors. This is a temporary photographic stand-in, not the final hand-drawn identity.

## PC navigation correction

The top-left brand is now only Potatisspel; the unsolicited p. badge is removed. A small critical CSS rule hides the keyboard skip link outside keyboard focus without reserving layout space. The homepage stylesheet URL is versioned to avoid stale styles after deployment. The reported giant skip-link area was not reproducible on the live site inspected before this change; its exact cause is unconfirmed.

Navigation now switches between individual Home, Games, About and Contact views instead of stacking every section into a long page. A small local script preserves native hash URLs and browser history, marks the current navigation item and moves keyboard focus to the selected heading. The skip link moves focus to main without changing the current view. Existing #towercellar links select Games. Without JavaScript all content remains available in document order.

Browser verification: all four views fit without horizontal or vertical overflow at 1366×768 and 1920×1080 frame sizes. At 390×844, Games/About remain vertically scrollable with no horizontal overflow or text clipping; Contact fits. No body overflow suppression is used, so short screens, increased text size and future content can grow naturally. The skip link is fixed, clipped and 1×1px before keyboard focus, and activation focuses main while keeping the selected view. Legal files and domain configuration are unchanged. JavaScript syntax and local links checked.

## English and German localization

English keeps the existing root URLs; complete German equivalents live under /de/. All four document pairs have reciprocal EN/DE links, hreflang metadata and correct document language. Navigation, page titles/descriptions, visible copy, alt text and accessibility labels are translated. English legal wording stays intact except for a new language-preference disclosure; the German pages translate those same disclosures. Identity, contact details, policy dates, external references and game names are preserved.

The language switch retains the section hash and query parameters. A manual choice is saved in localStorage; only the neutral / entry restores a saved choice. Explicit /index.html, /de/ and document URLs take precedence, so shared locale URLs and switching with blocked storage remain reliable. Without JavaScript, static translations and language links still work. No translation service, cookies or external requests are added. The website privacy pages explain the saved local preference.

To add or update a translation, maintain the matching static pages and reciprocal language links together. Preserve section IDs and document structure; update language.js and switch labels if adding another supported language. Keep localized legal disclosures aligned with the English source when functionality changes.

Validation: six Node regression tests cover remembered selection, section/query preservation, direct-URL precedence, disabled storage and invalid stored preferences. All eight HTML pages passed local-link, lang, switch-link, duplicate-ID and heading/section parity checks. Browser review covered section-preserving EN→DE switching, saved German selection on return and DE→EN switching on the privacy document. All four EN and DE views fit 1366×768 without scrolling. German 320px mobile views have no horizontal overflow; longer content can scroll vertically.
