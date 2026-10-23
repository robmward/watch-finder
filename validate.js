/* ==================================================================
   Catalogue invariants + engine smoke test.   Run:  node validate.js

   Checks the rule the whole quiz rests on — every option must have at
   least one watch behind it, or it can never win — plus the attribution
   coverage the photo licences require. The scoring functions are lifted
   straight out of index.html rather than reimplemented, so this tests
   the engine that actually ships.
   ================================================================== */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = process.env.WF_ROOT || __dirname;
const ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8'), ctx);

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const start = html.indexOf('function score(w){');
const end   = html.indexOf('/* ---------- results ---------- */');
if (start < 0 || end < 0) { console.error('could not lift engine out of index.html'); process.exit(1); }
const sizeOrder = /const SIZE_ORDER\s*=\s*(\[[^\]]*\])/.exec(html);
vm.runInContext(`const SIZE_ORDER = ${sizeOrder ? sizeOrder[1] : '["s","m","l","xl"]'}; let answers = {};\n` +
                html.slice(start, end), ctx);

// top-level `const` lives in the context's lexical scope, not on the sandbox object
vm.runInContext('globalThis.__api = { STEPS, WATCHES, BRACKETS, rank, setAnswers: o => { answers = o; } };', ctx);
const { STEPS, WATCHES, BRACKETS } = ctx.__api;
ctx.rank = ctx.__api.rank;
let fails = 0, warns = 0;
const fail = m => { console.log('  FAIL  ' + m); fails++; };
const warn = m => { console.log('  warn  ' + m); warns++; };

/* 1. every option is reachable: at least one watch carries that value */
console.log(`\n1. Option coverage (${WATCHES.length} watches, ${STEPS.length} steps)`);
const field = { vb:'vb', sz:'sz', sh:'sh', bz:'bz', dc:'dc', ly:'ly', ix:'ix', st:'st', ma:'ma', mv:'mv', bt:'bt' };
for (const step of STEPS) {
  if (step.id === 'price') continue;
  for (const opt of step.options) {
    if (opt.v === 'any') continue;
    let n;
    if (step.id === 'mv') {
      n = WATCHES.filter(w =>
        opt.v === 'mech'     ? (w.mv === 'auto' || w.mv === 'hand') :
        opt.v === 'lowmaint' ? (w.mv === 'quartz' || w.mv === 'solar' || w.mv === 'digital') :
        opt.v === 'digital'  ? w.mv === 'digital' : false).length;
    } else {
      const f = field[step.id];
      n = WATCHES.filter(w => Array.isArray(w[f]) ? w[f].includes(opt.v) : w[f] === opt.v).length;
    }
    if (n === 0) fail(`${step.id}="${opt.v}" (${opt.label}) matches no watch`);
    else if (n === 1) warn(`${step.id}="${opt.v}" (${opt.label}) matches only 1 watch`);
  }
}

/* 2. every price bracket has stock */
console.log('\n2. Price brackets');
for (const [k, b] of Object.entries(BRACKETS)) {
  const n = WATCHES.filter(w => w.p >= b.min && w.p <= b.max).length;
  if (n === 0) fail(`bracket ${k} (${b.label}) is empty`);
  else console.log(`  ok    ${k} ${b.label}: ${n}`);
}

/* 3. data hygiene */
console.log('\n3. Data hygiene');
const slugs = new Set();
for (const w of WATCHES) {
  if (slugs.has(w.s)) fail(`duplicate slug ${w.s}`);
  slugs.add(w.s);
  if (!fs.existsSync(path.join(root, 'images', `watch-${w.s}.webp`))) fail(`${w.s}: no image`);
  if (!Array.isArray(w.sp) || w.sp.length !== 3) warn(`${w.s}: ${w.sp ? w.sp.length : 0} spec chips`);
  if (!w.w || w.w.length < 80) warn(`${w.s}: thin writeup`);
  if (!['s','m','l','xl'].includes(w.sz)) fail(`${w.s}: bad size ${w.sz}`);
  if (!['auto','hand','quartz','solar','digital'].includes(w.mv)) fail(`${w.s}: bad movement ${w.mv}`);
  for (const step of STEPS) {
    if (step.id === 'price' || step.id === 'mv') continue;
    const vals = step.options.map(o => o.v);
    const v = w[field[step.id]];
    for (const x of (Array.isArray(v) ? v : [v])) {
      if (!vals.includes(x)) fail(`${w.s}: ${step.id}="${x}" is not an option`);
    }
  }
}

/* 3b. attribution: a licence condition, not a nicety */
console.log('\n3b. Photo attribution');
const credits = JSON.parse(fs.readFileSync(path.join(root, 'credits.json'), 'utf8'));
const imgs = fs.readdirSync(path.join(root, 'images'));
for (const f of imgs) if (/\.(webp|jpe?g|png)$/i.test(f) && !credits[f]) fail(`${f}: no credit`);
for (const k of Object.keys(credits)) if (!imgs.includes(k)) warn(`credit for missing image ${k}`);

/* A credit is one of two shapes and must be complete in whichever it claims:
   an open licence owes an author and a licence name, a manufacturer press
   image owes the brand it came from. Half an attribution is worse than none —
   it reads as a licence we cannot actually point to. */
let press = 0;
for (const [f, c] of Object.entries(credits)) {
  if (!c.page)  fail(`${f}: credit has no source page`);
  if (!c.title) fail(`${f}: credit has no title`);
  if (c.source === "press") {
    press++;
    if (!c.brand) fail(`${f}: press credit has no brand`);
    if (c.license) fail(`${f}: press credit also claims licence "${c.license}" — pick one`);
  } else {
    if (!c.author)  fail(`${f}: open-licence credit has no author`);
    if (!c.license) fail(`${f}: open-licence credit has no licence`);
  }
}
console.log(`  ok    ${imgs.length} images, ${Object.keys(credits).length} credit entries ` +
            `(${Object.keys(credits).length - press} open-licence, ${press} press)`);

/* 3c. facet clusters.
   Watches sharing one exact facet vector are indistinguishable on everything
   the quiz asks, so the results page shows the whole tie as a price ladder
   and lets the user's budget break it. A cluster is therefore a feature, not
   dead stock — two watches 4x apart on price with identical specs is exactly
   what someone shopping wants to see side by side.

   It stops being useful at size. A dozen near-identical watches is a wall,
   not a choice, and usually means the catalogue has gained rows where it
   needed a new facet dimension. So this warns early and fails late. */
console.log('\n3c. Facet clusters');
const CLUSTER_MAX = 12;
const vector = w => [w.vb.slice().sort().join('+'), w.sz, w.sh, w.bz, w.dc, w.ly, w.ix,
                     w.st.slice().sort().join('+'), w.ma, w.mv, w.bt].join('|');
const clusters = new Map();
for (const w of WATCHES) {
  const k = vector(w);
  if (!clusters.has(k)) clusters.set(k, []);
  clusters.get(k).push(w);
}
const collided = [...clusters.values()].filter(c => c.length > 1)
  .sort((a, b) => b.length - a.length);
for (const c of collided) {
  const members = c.slice().sort((a, b) => a.p - b.p);
  const line = members.map(w => `${w.s} $${w.p}`).join(', ');
  if (c.length > CLUSTER_MAX) fail(`cluster of ${c.length} shares one facet vector — too many to present as a ladder, needs a new dimension: ${line}`);
  else if (c.length > 6) warn(`${c.length} share a facet vector — a long ladder: ${line}`);
  else console.log(`  ladder of ${c.length}: ${line}`);
}
const laddered = collided.reduce((n, c) => n + c.length, 0);
console.log(`  ok    ${clusters.size} distinct vectors across ${WATCHES.length} watches` +
            `, largest cluster ${collided.length ? collided[0].length : 1}` +
            `, ${laddered} shown as price ladders`);

/* 4. engine: random complete answer sets always produce a ranked result */
console.log('\n4. Engine smoke test');
const pick = a => a[Math.floor(Math.random() * a.length)];
let empty = 0, crash = 0;
for (let i = 0; i < 4000; i++) {
  const a = {};
  for (const s of STEPS) a[s.id] = pick(s.options).v;
  ctx.__api.setAnswers(a);
  try {
    const r = ctx.rank(WATCHES);
    if (!r.length) { empty++; if (empty < 4) console.log('        empty result for ' + JSON.stringify(a)); }
  } catch (e) { crash++; if (crash < 3) console.log('        threw: ' + e.message); }
}
if (crash) fail(`${crash}/4000 answer sets threw`);
if (empty) fail(`${empty}/4000 answer sets returned no watch at all`);
if (!crash && !empty) console.log('  ok    4000 random answer sets all rank at least one watch');

/* 5. every watch can win something: asked its own profile, it is among the
   top-scoring answers. Being tied rather than strictly first is a pass — the
   results page shows the whole tie as a price ladder, so a tied watch is
   presented, not buried. */
console.log('\n5. Every watch is winnable');
const unwinnable = [];
for (const w of WATCHES) {
  ctx.__api.setAnswers({ vb:w.vb[0], sz:w.sz, sh:w.sh, bz:w.bz, dc:w.dc, ly:w.ly, ix:w.ix,
                  st:w.st[0], ma:w.ma,
                  mv:(w.mv==='auto'||w.mv==='hand')?'mech':(w.mv==='digital'?'digital':'lowmaint'),
                  bt:w.bt, price:'A' });
  const ranked = ctx.rank(WATCHES);
  const top = ranked[0];
  const tiedAtTop = top ? ranked.filter(r => r.pts === top.pts) : [];
  if (!tiedAtTop.some(r => r.w.s === w.s)) {
    unwinnable.push(`${w.s} loses to ${top ? top.w.s : 'nothing'}`);
  }
}
if (unwinnable.length) unwinnable.forEach(m => warn(m));
else console.log(`  ok    all ${WATCHES.length} win on their own profile`);

console.log(`\n${fails} failures, ${warns} warnings`);
process.exit(fails ? 1 : 0);
