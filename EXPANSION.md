# Catalogue expansion plan

How the catalogue goes from 38 watches to full coverage, and the agent
pipeline that gets it there.

## What "every watch" actually means

Literally every watch is tens of thousands of references — Rolex alone has
thousands, and a reference-level catalogue is a database, not a finder. The
useful target is **every watch a buyer would plausibly consider**, which is a
real and finite set:

These were estimates until the census; `brands.json` now replaces them with
counted scope. 122 brands, 380 model lines worth cataloguing.

| Tier | Target | What it adds |
| --- | --- | --- |
| 0 — now | 38 | — |
| 1a | 172 | Deepens every brand already in the catalogue, and brings back the seven indies the README records as cut for lack of photos. |
| 1b | 225 | The mainstream brands still missing outright — IWC, Zenith, Rado, Certina, Mido, Victorinox, Frederique Constant and the rest. |
| 2 | 370 | Micro-brands, the fashion tier, skeletons, the full quartz/solar world. |
| 3 | 380 | Vintage and the long tail. Ten brands, and genuinely optional. |

Tier 1b is the one that makes the quiz feel complete. Tier 2 is what makes it
feel exhaustive.

The original plan said 150 / 400 / 600. The census says 172 / 225 / 380 — the
early phases are bigger than guessed and the long tail is much smaller, because
"every watch a buyer would consider" runs out sooner than it feels like it
should. 380 is the real ceiling at this definition.

Two findings from the census worth acting on:

- **108 of 122 brands will need press images; only 4 are well covered on
  Wikimedia.** This is the strongest evidence for the photo decision — a
  CC-only catalogue really was capped near its current size, and not by
  effort.
- **Ten brands are flagged `hard`** — Vostok, Halios, San Martin, Benrus,
  Eterna, Revue Thommen, Lip, Garrick, Schofield, Pinion. Expect to fight for
  an image or drop them. They are the honest risk list, and all but Vostok sit
  in Phase 2 or 3, so none of them block Phase 1.

The census `have` column totals exactly 38, which is a useful cross-check: it
was built against the catalogue rather than from memory.

## The three blockers, and what unblocks them

### Blocker 1: photos

`validate.js:71` hard-fails a watch with no `images/watch-<slug>.webp`, and
`validate.js:90` hard-fails an image with no `credits.json` entry. All 86
current photos are openly-licensed Wikimedia. Open photos do not exist for
most micro-brands and essentially no fashion brands, which is why ~30 watches
were already cut.

**Decided: manufacturer press-kit images.** (Generated SVG line-art was the
alternative and was not taken.)

This keeps every catalogue entry photographic, which is what the rest of the
site's credibility rests on. Two consequences to design around:

- **The Photo Sourcer stays on the critical path.** A watch cannot land
  without a real image, so photo sourcing — not scouting or classification —
  is the throughput limit on the whole pipeline. It therefore runs *early*,
  before copywriting, so we never classify and write up a watch we can't
  illustrate.
- **Attribution has two shapes now.** Press images owe no licence but do owe
  the brand they came from. `credits.json` accepts either an open-licence
  entry (`author` + `license`) or a press entry (`source:"press"` + `brand`),
  and `validate.js` fails a half-complete one in either shape. The results
  page labels press images as press images; the summary line counts both
  kinds rather than claiming every photo is openly licensed, which is the
  same care `prices.js` already takes about never saying "sells for".

Press images are licensed for editorial use, and this site carries buy links.
That is a known grey area, accepted deliberately rather than by accident.

### Blocker 2: facet collisions

`rank()` sorts by points then `x.w.p - y.w.p` — cheapest wins a tie. Ten
facets at current granularity means large clusters of watches share one exact
vector (black-dial round dive auto on oyster, etc.), and only the cheapest
member of a cluster is ever reachable. More rows on the current taxonomy
produce more dead stock, not more coverage.

**Unblock: add dimensions before adding rows.**

A facet only separates watches if the quiz *asks* about it — `score()` reads
answered facets only, so an unasked field contributes nothing to ranking. Each
new dimension therefore costs a question, and the site's whole pitch is that
it's a short quiz. So one new question, not three:

| New facet | Values | Why |
| --- | --- | --- |
| `ma` case material | steel, titanium, bronze, gold, two-tone, resin | The biggest absent buyer axis, and it splits nearly every cluster. Ships as text chips, so it needs no option photography. |

Dropped: `fi` dial finish (skeleton goes into `ly` instead, where it belongs —
it *is* an answer to "how busy should the dial be"), and `er` era (a real axis
that doesn't earn a question slot).

Later, as stock allows: `ma` gains `ceramic`.

Vocabulary additions to existing facets. **Each needs at least one watch in the
same commit** — `validate.js:52` fails an option that matches nothing — so
these land in Phase 1 with their seed watches, not in Phase 0:

- `ly` — **`skeleton`** (open/exhibition dial), `moon` (moonphase)
- `sh` — `tonneau`, `oval`
- `dc` — `grey`, `salmon` (`warm` currently carries one watch)
- `bt` — **`fashion`** (Fossil, Skagen, MVMT, Daniel Wellington, Armani, Michael Kors)

### Blocker 3: nowhere to show them

A run surfaces 8 watches: the match, two price rungs, five runners-up. There
is no browse view, so watch 39 through 400 are invisible to anyone who isn't
lucky with their answers.

**Unblock: a browse page** — the full catalogue as a filterable grid using the
same facets as the quiz, reachable from the results page ("see all 400") and
directly. This is a prerequisite for Tier 2, not a nice-to-have.

## Skeleton watches and Fossil

These two questions are the same question. Skeleton dials exist at every
price point, but the cheap end is almost entirely fashion and near-fashion:
Fossil Twist, Stuhrling, Invicta. The mid and high end is Tissot Powermatic
Skeleton, Hamilton Jazzmaster Viewmatic Skeleton, Oris Artelier Skeleton,
Zenith Defy, Cartier Santos Skeleton, AP Royal Oak Openworked.

So: adding `ly:"skeleton"` with stock at every bracket requires adding
`bt:"fashion"`, which means Fossil.

**Decided: both go in.** The fashion tier is consistent with the site's thesis
— it asks what you like, not who made it — and without it the cheapest
skeleton on offer would be around $400, which makes the skeleton answer a lie
for anyone on a budget.

Minimum to ship skeleton without the `warn` for a one-watch option: three
skeletons, ideally one per bracket. Both values land in Phase 1, together with
those watches.

## Dial colours

`dc` currently runs black 21, blue 7, white 7, green 2, warm 1. It is the
facet most obviously short of answers, and widening it costs no new question —
just options. But `dc` is an **image** question, so each new colour needs
option photography, and the existing ones carry several frames each precisely
because no single photo represents a colour fairly. That is the real price of
a new colour, not the data entry.

Ranked by what they'd actually buy us:

| Colour | Stock at 400 watches | Verdict |
| --- | --- | --- |
| `grey` | Very high — Rolex slate and rhodium, Grand Seiko, Tudor, Sinn, Nomos, Longines | **Add first.** The biggest genuinely missing colour, and several watches already in the catalogue are closer to grey than to the black or white they're filed under. |
| `salmon` | Moderate, and rising — a current enthusiast favourite, mostly dress watches | **Add.** Low stock but high intent: nobody lands on salmon by accident, so it's a strong signal when chosen. |
| `panda` | Moderate — Daytona, Zenith Chronomaster, Yema, Baltic Bicompax | **Consider.** Not a colour so much as a two-tone arrangement, and filing a panda under `white` loses the one thing that defines it. |
| `orange` | Low — Doxa, Seiko Monster | Defer. Real but thin. |
| `red` | Low, and mostly limited editions and fashion brands | **Defer to Phase 2.** |

On red specifically: full red dials are rare outside limited runs, and the
places they're common — Fossil, Invicta, Zodiac, Bulova Marine Star — are
exactly the fashion and near-fashion tier arriving in Phase 2. So red only
clears the three-watch bar after that tier lands. Adding it before then means
a permanent one-watch warning and an option almost nobody can win, which is
the same trap `dc:"warm"` is in today.

Note `warm` is worth revisiting at the same time: it currently bundles
champagne and brown behind a single watch. If salmon is split out, `warm`
should either gain stock or be merged.

## The agent pipeline

Numbered roles, a gate between discovery and the catalogue. No agent writes
`data.js` directly except the Integrator.

```
Agent 1  Brand Census        → brands.json          (one-off, scope)
Agent 2  Catalogue Scouts    → inbox/<cluster>.jsonl (parallel, one per brand cluster)
Agent 3  Facet Classifier    → staged/<cluster>.json
Agent 4  Photo Sourcer       → images/ + credits.json (optional upgrade path)
Agent 5  Copywriter          → the `w:` line, in the site's voice
Agent 6  Collision Auditor   → verdict + requested new facets   ← GATE
Agent 7  Integrator          → data.js, batch of ~20, validate, commit
```

**Agent 1 — Brand Census.** One-off. Produces `brands.json`: every brand worth
covering, its tier (`house`/`indie`/`value`/`fashion`), rough model-line count,
and whether open photos plausibly exist. This is the scope document everything
downstream is sized against. No watches yet.

**Agent 2 — Catalogue Scouts.** Run in parallel, one per cluster of ~20 brands
from `brands.json`. Each emits raw candidate rows to `inbox/<cluster>.jsonl`:
brand, model, reference, current retail, case diameter, movement, crystal,
water resistance, strap, production status. Sources: brand site first,
Wikipedia second, enthusiast references third. **Rule: never guess a spec —
omit the field and let the Classifier flag it.** Scouts do not assign facets
and do not judge whether a watch belongs.

**Agent 3 — Facet Classifier.** Converts raw rows into catalogue rows: all ten
existing facets plus the three new ones, `sz` from the measured diameter, and
the three `sp` spec chips. Constrained to the published vocabulary — anything
outside it fails `validate.js:81`, so an unclassifiable watch goes to
`staged/needs-vocab.json` with a proposed new value rather than being forced
into a wrong bucket.

**Agent 4 — Photo Sourcer.** Off the critical path once the SVG renderer
exists. Searches Commons for a licence-clean photo, **verifies by eye that it
is the watch it claims to be**, converts to webp, writes the `credits.json`
entry. Runs against the top of the catalogue by popularity, not against
everything.

**Agent 5 — Copywriter.** The one-sentence `w:` line. The site has a specific
dry, declarative voice; the agent gets the existing 38 write-ups as the style
reference and must not use marketing language. Minimum 80 characters or
`validate.js:73` warns.

**Agent 6 — Collision Auditor.** The gate, and the agent that makes this
plan work. For a staged batch it reports:

- facet-vector clusters and their size — any cluster over ~4 means the batch
  needs a new dimension before it lands
- which watches in the batch would be unwinnable on arrival (check #5 logic,
  run against current + staged)
- duplicate slugs, duplicate watches entered under different names
- the price-bracket histogram after the merge
- `node validate.js` on a scratch copy

Verdict is merge / merge-after-vocab-change / reject. A batch that fails does
not reach the Integrator.

**Agent 7 — Integrator.** Merges an approved batch of ~20 into `data.js`,
runs `node validate.js` for real, commits. Batches of 20 keep a bad merge
reviewable and keep the diff readable.

## Order of work

**Phase 0 — taxonomy and gates.** No new watches. Everything downstream
depends on this and nothing downstream is cheap to redo.

Done:

- `ma` case material added as question 9 of 12, as chips (no option
  photography needed); all 38 watches classified, five of them from the
  material already named in their own spec chips
- `score()` weights `ma` at 2, alongside dial colour, layout and markers
- collision check added to `validate.js` as step 3c: reports distinct facet
  vectors, cluster sizes, and how many watches are unreachable on the price
  tie-break. Fails above a cluster of four
- `credits.json` accepts open-licence *or* press entries, validated for
  completeness in whichever shape they claim; the results-page summary counts
  both kinds instead of asserting all photos are open-licensed
- hard-coded "11" step counts and the "eleven-question quiz" prose updated;
  `README.md` corrected (it claimed a missing photo was survivable — the
  validator fails it)

Worth knowing: `ma` changed nothing measurable today. The 38 watches were
already on 38 distinct facet vectors, so there were no collisions for it to
break. Its entire value is forward-looking, and the 3c counter is the thing
that will start reporting real numbers during Phase 1.

Remaining: the browse page.

**Phase 1 — mainstream to 150.** Agent 1 census, then scouts over the brands
already represented plus the obvious absences (Christopher Ward, Baltic,
Lorier, Nodus, Monta, Doxa, Nivada, Zodiac, Squale, Certina, Rado, Raymond
Weil, Frederique Constant, Ball, Marathon, Traska, Halios). These were cut for
photos; the renderer brings them back. Ships skeleton and the fashion tier.

**Phase 2 — 400.** Micro-brands, fashion, full quartz/solar/digital coverage,
the rest of the G-Shock and Seiko lines. This is where the browse page
earns itself.

**Phase 3 — long tail.** Vintage icons and discontinued references. Optional,
and worth reassessing once Phase 2 is live.

## Decisions taken

1. **Photo policy** — manufacturer press-kit images. Keeps the catalogue
   photographic and keeps the Photo Sourcer on the critical path.
2. **Fashion tier** — in. `bt:"fashion"`, arriving in Phase 1 with the
   watches that make it legal.
3. **Questions** — one new one (`ma`), not three. The quiz is twelve
   questions now.

## Still open

**The tie-break.** `rank()` sorts `y.pts - x.pts || x.w.p - y.w.p` — cheapest
wins a tie. At 38 watches that's a defensible value bias. At 400 it means the
catalogue's cheap end permanently shadows its expensive end inside every
cluster. Two ways out: rely on the new dimensions to keep clusters at one
watch each and leave the tie-break alone, or add a deliberate variety nudge.
Worth revisiting once 3c starts reporting non-zero clusters in Phase 1, when
there will be real numbers to argue from instead of a prediction.
