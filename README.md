# Bezel First

A men's watch finder that asks what you like, not who made it.

Most watch guides start with a brand or a budget. This one starts with the
bezel. You answer twelve questions about shape, dial, markers and bracelet —
the first eight illustrated with a real photograph — and the brand question
doesn't arrive until question eleven, where the default answer is "don't care
at all." Price is last, and the result shows your match flanked by one rung
cheaper and one rung dearer.

## Running it

It's a static site with no build step. Open `index.html`, or serve the folder:

```sh
python3 -m http.server 8000
```

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Page, styles and the quiz engine |
| `data.js` | The twelve questions, the watch catalogue, and photo credits |
| `images/` | Every photograph, named by slot |
| `CREDITS.md` | Full attribution table |

## Adding a watch

Add an entry to `WATCHES` in `data.js` and drop a photo at
`images/watch-<slug>.webp`, with a matching entry in `credits.json`. The photo
is not optional: `validate.js` fails a watch without one. (The card does
render a hatched placeholder printing the filename it wants, so the page never
breaks in the browser — but the catalogue will not pass validation.)

```js
{s:"lorier-neptune", n:"Neptune", b:"Lorier", p:499,
 sz:"m", sh:"round", bz:"dive", dc:"black", ly:"plain", ix:"dots",
 st:["oyster"], ma:"steel", mv:"auto", vb:["one"], bt:"indie",
 sp:["39 mm","200 m","Miyota 90S5 auto"],
 w:"One sentence on why someone would want it."}
```

Field keys: `sz` size, `sh` case shape, `bz` bezel, `dc` dial colour,
`ly` layout, `ix` markers, `st` straps, `ma` case material, `mv` movement,
`vb` purpose, `bt` brand tier, `sp` spec lines, `w` the write-up.

Every value must already exist as an option in `STEPS` — the validator fails
an unknown one rather than silently dropping it. Adding a *new* option is a
separate change, and it needs at least one watch to carry it in the same
commit or the option can never win.

Every option in a question needs at least one watch that matches it, or that
option can never win. `node validate.js` checks that, plus price-bracket
coverage, photo attribution, facet collisions, and the real scoring engine
lifted out of `index.html`. Run it before deploying.

The collision check is the one that governs how far the catalogue can grow:
`rank()` breaks ties on price, so watches sharing one exact facet vector form
a cluster in which only the cheapest is ever reachable. Clusters above four
fail. The fix is always a new facet dimension, never more rows.

## Photographs

All 86 photographs come from Wikimedia Commons under CC0, CC BY, CC BY-SA or
public domain, and each was checked by eye against the watch it claims to
show. Attribution renders at the bottom of the results page and in
`CREDITS.md`, as those licences require.

A credit takes one of two shapes and must be complete in whichever it claims:

```json
"watch-slug.webp": { "title": "...", "author": "...", "license": "CC BY-SA 4.0", "page": "https://commons.wikimedia.org/..." }
"watch-slug.webp": { "title": "...", "source": "press", "brand": "Oris", "page": "https://..." }
```

Manufacturer press images are permitted as of the expansion plan, which is
what lets the catalogue cover brands Commons has never photographed. They are
labelled as press images on the results page rather than being passed off as
open-licensed — the summary line counts both kinds instead of asserting that
every photo is openly licensed.

The catalogue was 38 watches rather than the ~70 originally drafted, because
openly-licensed photos don't exist for most enthusiast and micro-brands
(Christopher Ward, Baltic, Lorier, Nodus, Monta, Doxa, Nivada and others were
cut rather than illustrated with the wrong watch). Those are first in line
under `EXPANSION.md`.

## Prices

Approximate US street/retail in USD, accurate to a bracket rather than a
quote. Several steel sports models list well below what they actually trade
for.

## Deployment

Live at https://watch-finder-omega.vercel.app — pushes to `main` deploy automatically.
