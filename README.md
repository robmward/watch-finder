# Bezel First

A men's watch finder that asks what you like, not who made it.

Most watch guides start with a brand or a budget. This one starts with the
bezel. You answer eleven questions about shape, dial, markers and bracelet —
each one illustrated with a real photograph — and the brand question doesn't
arrive until question ten, where the default answer is "don't care at all."
Price is last, and the result shows your match flanked by one rung cheaper
and one rung dearer.

## Running it

It's a static site with no build step. Open `index.html`, or serve the folder:

```sh
python3 -m http.server 8000
```

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Page, styles and the quiz engine |
| `data.js` | The eleven questions, the watch catalogue, and photo credits |
| `images/` | Every photograph, named by slot |
| `CREDITS.md` | Full attribution table |

## Adding a watch

Add an entry to `WATCHES` in `data.js` and drop a photo at
`images/watch-<slug>.jpg`. If the photo is missing the card still renders —
it shows a hatched placeholder printing the filename it wants, so nothing
breaks while you source one.

```js
{s:"lorier-neptune", n:"Neptune", b:"Lorier", p:499,
 sz:"m", sh:"round", bz:"dive", dc:"black", ly:"plain", ix:"dots",
 st:["oyster"], mv:"auto", vb:["one"], bt:"indie",
 sp:["39 mm","200 m","Miyota 90S5 auto"],
 w:"One sentence on why someone would want it."}
```

Field keys: `sz` size, `sh` case shape, `bz` bezel, `dc` dial colour,
`ly` layout, `ix` markers, `st` straps, `mv` movement, `vb` purpose,
`bt` brand tier, `sp` spec lines, `w` the write-up.

Every option in a question needs at least one watch that matches it, or that
option can never win. `node validate.js` checks that, plus price-bracket
coverage, photo attribution, and the real scoring engine lifted out of
`index.html`. Run it before deploying.

## Photographs

All 86 photographs come from Wikimedia Commons under CC0, CC BY, CC BY-SA or
public domain, and each was checked by eye against the watch it claims to
show. Attribution renders at the bottom of the results page and in
`CREDITS.md`, as those licences require.

The catalogue is 38 watches rather than the ~70 originally drafted, because
openly-licensed photos simply don't exist for most enthusiast and micro-brands
(Christopher Ward, Baltic, Lorier, Nodus, Monta, Doxa, Nivada and others were
cut rather than illustrated with the wrong watch).

## Prices

Approximate US street/retail in USD, accurate to a bracket rather than a
quote. Several steel sports models list well below what they actually trade
for.

## Deployment

Live at https://watch-finder-omega.vercel.app — pushes to `main` deploy automatically.
