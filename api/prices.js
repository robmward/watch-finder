/* ==================================================================
   Current asking prices from eBay's Browse API.

   IMPORTANT, and surfaced in the UI: these are ACTIVE LISTINGS — what
   sellers are asking right now — not sold prices. eBay retired public
   access to sold data (findCompletedItems closed Feb 2025, Marketplace
   Insights is shut to new developers), so genuine sold comps are only
   available from paid third parties. We say "asking" everywhere rather
   than imply these are transaction prices.

   The key lives here, server-side, because the page is public.

   Setup:
     vercel env add EBAY_CLIENT_ID
     vercel env add EBAY_CLIENT_SECRET
   from a free account at developer.ebay.com (production keyset).
   ================================================================== */

const EBAY_OAUTH  = "https://api.ebay.com/identity/v1/oauth2/token";
const EBAY_SEARCH = "https://api.ebay.com/buy/browse/v1/item_summary/search";
const SCOPE       = "https://api.ebay.com/oauth/api_scope";

let tokenCache = { value: null, expires: 0 };

async function getToken(id, secret) {
  if (tokenCache.value && Date.now() < tokenCache.expires) return tokenCache.value;
  const basic = Buffer.from(`${id}:${secret}`).toString("base64");
  const res = await fetch(EBAY_OAUTH, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    body: `grant_type=client_credentials&scope=${encodeURIComponent(SCOPE)}`,
  });
  if (!res.ok) throw new Error(`eBay auth failed: ${res.status}`);
  const json = await res.json();
  tokenCache = {
    value: json.access_token,
    // refresh a minute early rather than racing the expiry
    expires: Date.now() + (json.expires_in - 60) * 1000,
  };
  return tokenCache.value;
}

function summarise(items) {
  const prices = items
    .map(i => Number(i?.price?.value))
    .filter(n => Number.isFinite(n) && n > 0)
    .sort((a, b) => a - b);
  if (!prices.length) return null;

  // Trim the tails. Watch listings are full of box-only lots, broken
  // parts and fantasy pricing; an untrimmed median is badly skewed.
  const cut = Math.floor(prices.length * 0.1);
  const core = prices.length >= 10 ? prices.slice(cut, prices.length - cut) : prices;
  const at = q => core[Math.min(core.length - 1, Math.floor(core.length * q))];

  return {
    count: prices.length,
    used:  core.length,
    low:   core[0],
    q1:    at(0.25),
    median:at(0.5),
    q3:    at(0.75),
    high:  core[core.length - 1],
  };
}

export default async function handler(req, res) {
  const id     = process.env.EBAY_CLIENT_ID;
  const secret = process.env.EBAY_CLIENT_SECRET;
  const q      = (req.query.q || "").toString().slice(0, 120).trim();

  if (!q) return res.status(400).json({ error: "missing q" });
  if (!id || !secret) {
    // Not an error — the page renders a "not connected" state for this.
    return res.status(200).json({ connected: false,
      note: "eBay credentials are not configured for this deployment." });
  }

  try {
    const token = await getToken(id, secret);
    const url = `${EBAY_SEARCH}?q=${encodeURIComponent(q)}` +
                `&category_ids=31387` +              // Wristwatches
                `&filter=buyingOptions:{FIXED_PRICE},priceCurrency:USD` +
                `&limit=100&sort=price`;
    const r = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        "Content-Type": "application/json",
      },
    });
    if (!r.ok) throw new Error(`browse ${r.status}`);
    const data = await r.json();
    const stats = summarise(data.itemSummaries || []);

    // Asking prices move slowly; an hour of CDN cache keeps us well inside
    // eBay's daily call ceiling even if the page gets busy.
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json({
      connected: true, query: q, basis: "active listings (asking prices)",
      fetched: new Date().toISOString(), stats,
    });
  } catch (err) {
    return res.status(200).json({ connected: true, error: String(err.message || err) });
  }
}
