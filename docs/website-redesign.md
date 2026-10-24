# Potatisspel website redesign

The attached [layout reference](layout-reference.jpg) is supplied by the user and used only as a layout reference: broad illustrated opening, quiet introduction, generous game showcase and two-column about section. It is not a website asset; its artwork, services and social sections are not reused.

## Content and assets

- Preserve all existing HTML routes, the #towercellar anchor, CNAME and legal content unchanged.
- English studio and game copy is grounded in the previous homepage, existing legal notice and the game repository. Status remains **In development**, Android. No release date, purchase/download link, social profile or team size is invented.
- Four local SVG illustrations are copied without visual modification from potatozepp/Towercellar at b1bcad8d867c60cdd51921578cfba9dd7903e576: title_meadow.svg, play_tower.svg, birch.svg and cellar/room.svg. Together they total about 64 KB. They have explicit dimensions; below-fold images are lazy-loaded. No external fonts, scripts or trackers.
- **Missing material:** no genuine gameplay screenshot or studio photograph is available in the existing website or game source tree. The site explicitly captions the game image as artwork, not a screenshot. Replace or supplement it with a real capture when available. The about image is an existing game illustration, not a purported studio photo.
- Future games can be added as additional semantic game-feature articles inside #games; no grid, slider or JavaScript is required.

## Review

Browser review at desktop width 1348 and mobile frame widths 390 and 320 (375/305 CSS-pixel content widths after scrollbars): image loads succeeded; no horizontal overflow or text/figure bounds outside the page. Visually reviewed desktop hero/about and mobile hero/game section. Browser tests do not establish physical-device performance.

Local HTML links and image paths resolve; SVG XML parses. Legal documents and CNAME match main byte for byte. Sampled text contrast ratios: ink/paper 10.60:1; muted/sage 4.99:1; button text/forest 7.65:1; muted/game background 5.41:1. Visible navigation links and buttons have at least 48px heights, keyboard focus indicators and a skip link. Reduced-motion preferences disable smooth scrolling.

The existing GitHub Pages setup is retained. Merge the website PR to publish through the repository's normal process; no new hosting project or domain is created.
