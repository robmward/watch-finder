/* ==================================================================
   Where to buy — turns a result into somewhere you can actually go.

   This is a static site with no backend, so there is no API key here and
   no store database to go stale. Every link below is a LIVE SEARCH built
   at click time, using two URL patterns that are stable and verified:
   Google/Apple Maps search, and a plain search query. We never claim a
   specific shop stocks a specific watch — we can't know that.
   ================================================================== */

/* How a given watch is actually sold. Defaults to brand tier; the slugs
   listed here are exceptions where the tier would mislead. */
const RETAIL_OVERRIDE = {
  "seiko-snk809":    "discontinued", // long out of production; grey/used only
  "vostok-amphibia": "specialist",   // no US retail presence; importers + used
  "casio-f91w":      "everywhere",
  "casio-gshock-5600":"everywhere",
  "timex-q":         "everywhere",
  "orient-kamasu":   "online",
  "fifty-fathoms":   "boutique",
  "ap-royal-oak":    "boutique",
  "rolex-submariner":"waitlist",
  "rolex-gmt":       "waitlist",
  "rolex-datejust":  "waitlist",
  "rolex-explorer":  "waitlist"
};

function retailRoute(w){
  if(RETAIL_OVERRIDE[w.s]) return RETAIL_OVERRIDE[w.s];
  if(w.bt === "indie") return "direct";
  if(w.bt === "value") return "everywhere";
  return "ad";
}

/* One honest sentence about how this particular watch reaches a buyer. */
const ROUTE_NOTE = {
  ad:          b => `${b} sells through authorised dealers — usually an independent jeweller rather than a boutique. Call ahead; stock varies enormously between shops.`,
  boutique:    b => `${b} is sold through a small number of boutiques and top-tier dealers. Outside a major city you will probably be travelling or buying remotely.`,
  waitlist:    b => `Steel sport models from ${b} are routinely unavailable at retail. Authorised dealers keep waitlists; the grey market has them now at a premium over list.`,
  direct:      b => `${b} sells mostly direct from the manufacturer, with few or no dealers. Ordering online is the normal route, not a fallback.`,
  online:      b => `${b} is sold largely online. A local shop is unlikely to stock it, so compare authorised online sellers.`,
  everywhere:  b => `${b} is sold nearly everywhere — department stores, big-box retail, pharmacies, and every online retailer. Do not overpay.`,
  specialist:  b => `No real retail presence outside its home market. Specialist importers and the used market are the practical options.`,
  discontinued:b => `Out of production. New old stock turns up occasionally, but the used market is where these actually trade.`
};

/* Should we bother showing a "near you" map search? */
const HAS_LOCAL = {ad:true, boutique:true, waitlist:true, everywhere:true,
                   direct:false, online:false, specialist:false, discontinued:false};

const gmaps  = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
const amaps  = q => "https://maps.apple.com/?q=" + encodeURIComponent(q);
const search = q => "https://www.google.com/search?q=" + encodeURIComponent(q);

function buyLinks(w, zip){
  const route = retailRoute(w);
  const full  = `${w.b} ${w.n}`;
  const groups = [];

  if(HAS_LOCAL[route] && zip){
    const near = route === "everywhere"
      ? `${w.b} watches ${zip}`
      : `${w.b} authorized watch dealer ${zip}`;
    groups.push({
      title: "Near " + zip,
      note:  route === "everywhere"
        ? "Shops near you likely to carry the brand."
        : "Dealers near you listed as carrying the brand. Ring before driving out.",
      links: [
        {label:"Open in Google Maps", href:gmaps(near)},
        {label:"Open in Apple Maps",  href:amaps(near)},
        {label:"Independent watch shops", href:gmaps(`watch shop ${zip}`)}
      ]
    });
  }

  if(route !== "discontinued"){
    groups.push({
      title: "Buy new",
      note:  route === "direct"
        ? "Straight from the manufacturer — normally the only new source."
        : "Authorised sellers only. If a price looks too good, the warranty usually isn't.",
      links: [
        {label:`${w.b} official site`,  href:search(`${w.b} official site ${w.n}`)},
        {label:"Authorised online sellers", href:search(`"${full}" buy authorized dealer`)}
      ]
    });
  }

  groups.push({
    title: "Pre-owned",
    note:  "Where most of these actually change hands, often well below list. Check condition, box and papers.",
    links: [
      {label:"Chrono24",            href:search(`${full} site:chrono24.com`)},
      {label:"eBay",                href:search(`${full} site:ebay.com`)},
      {label:"What it really sells for", href:search(`${full} market price watchcharts`)}
    ]
  });

  return {route, groups};
}

function renderBuy(w, mount){
  const saved = (() => { try{ return localStorage.getItem("bf_zip") || ""; }catch(e){ return ""; } })();

  mount.innerHTML = `
    <div class="ladder-head">
      <h2>Where to buy it</h2>
      <p>Live searches — nothing here is a paid placement</p>
    </div>
    <div class="buy">
      <p class="buy-route">${ROUTE_NOTE[retailRoute(w)](w.b)}</p>
      <form class="buy-zip" id="zipForm" novalidate>
        <label for="zipInput">US ZIP code</label>
        <input id="zipInput" name="zip" inputmode="numeric" autocomplete="postal-code"
               maxlength="5" placeholder="55416" value="${saved}" aria-describedby="zipErr" />
        <button type="submit" class="btn btn-primary">Find nearby</button>
        <span class="buy-err" id="zipErr" role="status"></span>
      </form>
      <div id="buyOut"></div>
    </div>`;

  const form = mount.querySelector("#zipForm");
  const input = mount.querySelector("#zipInput");
  const err  = mount.querySelector("#zipErr");
  const out  = mount.querySelector("#buyOut");

  function draw(zip){
    const {groups} = buyLinks(w, zip);
    out.innerHTML = groups.map(g => `
      <div class="buy-group">
        <h3>${g.title}</h3>
        <p>${g.note}</p>
        <div class="buy-links">
          ${g.links.map(l => `<a class="btn" target="_blank" rel="noopener noreferrer" href="${l.href}">${l.label} ↗</a>`).join("")}
        </div>
      </div>`).join("");
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const zip = input.value.trim();
    if(!/^\d{5}$/.test(zip)){
      err.textContent = "That needs to be five digits.";
      input.focus();
      return;
    }
    err.textContent = "";
    try{ localStorage.setItem("bf_zip", zip); }catch(e){}
    draw(zip);
  });

  // Show the non-local groups immediately; a ZIP only adds the "near you" block.
  draw(/^\d{5}$/.test(saved) ? saved : null);
}
