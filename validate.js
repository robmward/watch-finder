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
const field = { vb:'vb', sz:'sz', sh:'sh', bz:'bz', dc:'dc', ly:'ly', ix:'ix', st:'st', mv:'mv', bt:'bt' };
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
console.log(`  ok    ${imgs.length} images, ${Object.keys(credits).length} credit entries`);

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

/* 5. every watch can win something: it is top-ranked for its own attributes */
console.log('\n5. Every watch is winnable');
const unwinnable = [];
for (const w of WATCHES) {
  ctx.__api.setAnswers({ vb:w.vb[0], sz:w.sz, sh:w.sh, bz:w.bz, dc:w.dc, ly:w.ly, ix:w.ix,
                  st:w.st[0], mv:(w.mv==='auto'||w.mv==='hand')?'mech':(w.mv==='digital'?'digital':'lowmaint'),
                  bt:w.bt, price:'A' });
  const top = ctx.rank(WATCHES)[0];
  if (!top || top.w.s !== w.s) unwinnable.push(`${w.s} loses to ${top ? top.w.s : 'nothing'}`);
}
if (unwinnable.length) unwinnable.forEach(m => warn(m));
else console.log(`  ok    all ${WATCHES.length} win on their own profile`);

console.log(`\n${fails} failures, ${warns} warnings`);
process.exit(fails ? 1 : 0);
