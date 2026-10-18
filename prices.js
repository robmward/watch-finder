/* ==================================================================
   Asking-price chart.

   Draws what sellers are currently ASKING on eBay against the list price
   we quote. Deliberately never says "sells for" — eBay closed public
   access to sold data, so we do not have transaction prices and will not
   imply that we do.
   ================================================================== */

(function(){
"use strict";
const PRICE_API = "/api/prices";
const priceCache = new Map();

function money(n){ return "$" + Math.round(n).toLocaleString("en-US"); }

async function fetchPrices(w){
  const q = `${w.b} ${w.n}`;
  if(priceCache.has(q)) return priceCache.get(q);
  const p = fetch(`${PRICE_API}?q=${encodeURIComponent(q)}`)
    .then(r => r.ok ? r.json() : {error:"unavailable"})
    .catch(() => ({error:"unavailable"}));
  priceCache.set(q, p);
  return p;
}

function chart(stats, listPrice){
  const lo = Math.min(stats.low, listPrice);
  const hi = Math.max(stats.high, listPrice);
  const span = Math.max(1, hi - lo);
  const x = v => ((v - lo) / span) * 100;

  const boxL = x(stats.q1), boxR = x(stats.q3);
  const med  = x(stats.median);
  const list = x(listPrice);
  const delta = stats.median - listPrice;
  const pct = listPrice ? Math.round((delta / listPrice) * 100) : 0;

  return `
    <div class="pchart">
      <div class="pchart-track">
        <div class="pchart-whisker" style="left:${x(stats.low)}%;right:${100 - x(stats.high)}%"></div>
        <div class="pchart-box" style="left:${boxL}%;right:${100 - boxR}%"></div>
        <div class="pchart-median" style="left:${med}%"></div>
        <div class="pchart-list" style="left:${list}%"></div>
      </div>
      <div class="pchart-scale">
        <span>${money(stats.low)}</span><span>${money(stats.high)}</span>
      </div>
      <ul class="pchart-key">
        <li><i class="k-median"></i>Median asking <b>${money(stats.median)}</b></li>
        <li><i class="k-box"></i>Middle half ${money(stats.q1)} – ${money(stats.q3)}</li>
        <li><i class="k-list"></i>Our listed figure ${money(listPrice)}</li>
      </ul>
      <p class="pchart-read">${
        Math.abs(pct) < 8
          ? `Asking prices sit roughly where we list it.`
          : delta > 0
            ? `Sellers are asking about <b>${pct}% above</b> our listed figure — this one trades over list.`
            : `Sellers are asking about <b>${Math.abs(pct)}% below</b> our listed figure, which is normal for anything bought new at retail.`
      }</p>
      <p class="pchart-note">${stats.count} current listings, trimmed to ${stats.used} after removing the top and bottom tenth (box-only lots and parts skew the raw numbers). <b>These are asking prices on active listings, not sold prices.</b></p>
    </div>`;
}

async function renderPrices(w, mount){
  if(!mount) return;
  mount.innerHTML = `
    <div class="ladder-head">
      <h2>What it's going for</h2>
      <p>Live asking prices on eBay — not sold prices</p>
    </div>
    <div class="buy"><p class="pchart-loading">Checking current listings…</p></div>`;

  const data = await fetchPrices(w);
  const box = mount.querySelector(".buy");

  if(data && data.connected === false){
    box.innerHTML = `<p class="pchart-note">Live pricing isn't switched on for this deployment yet.
      Our listed figure of <b>${money(w.p)}</b> is an approximate street price.</p>`;
    return;
  }
  if(!data || data.error || !data.stats){
    box.innerHTML = `<p class="pchart-note">Couldn't reach the price feed just now.
      Our listed figure of <b>${money(w.p)}</b> is an approximate street price.</p>`;
    return;
  }
  box.innerHTML = chart(data.stats, w.p);
}

window.renderPrices = renderPrices;
})();
