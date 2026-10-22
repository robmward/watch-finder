#!/usr/bin/env node
/* ==================================================================
   Photo sourcer — the throughput limit on catalogue growth.

   Searches Wikimedia Commons for a watch and prints candidate files
   with the licence and author already resolved, so a credits.json
   entry can be written without a second lookup.

   It does NOT decide anything. A candidate is only usable once a human
   (or a model with eyes on the image) has confirmed the photo shows the
   watch it claims to show — the catalogue's whole credibility rests on
   that check, and no amount of filename matching substitutes for it.

   Usage:
     node tools/source-photo.js search "Seiko Prospex SPB143"
     node tools/source-photo.js fetch <file-url> <slug>
   ================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const UA = "bezel-first-catalogue/1.0 (https://github.com/; robmward@gmail.com)";
const ROOT = path.join(__dirname, "..");

function api(params){
  const url = "https://commons.wikimedia.org/w/api.php?" +
    new URLSearchParams({ format:"json", ...params }).toString();
  const out = execFileSync("curl", ["-s","--max-time","25","-A",UA,url], { maxBuffer: 1 << 26 });
  return JSON.parse(out.toString());
}

/* Licences we can actually use. Anything else is reported but flagged,
   because an unusable licence discovered after the download is wasted work. */
const OK = /^(CC0|CC BY|CC BY-SA|Public domain|PD|FAL)/i;

function search(q){
  const res = api({
    action:"query", generator:"search", gsrnamespace:"6",
    gsrsearch:`${q} watch`, gsrlimit:"12",
    prop:"imageinfo", iiprop:"url|size|extmetadata"
  });
  const pages = res.query && res.query.pages ? Object.values(res.query.pages) : [];
  if(!pages.length){ console.log("no results"); return; }

  const rows = pages.map(p => {
    const ii = (p.imageinfo || [])[0] || {};
    const m  = ii.extmetadata || {};
    const val = k => m[k] && String(m[k].value).replace(/<[^>]*>/g,"").trim();
    return {
      title: p.title.replace(/^File:/,""),
      url: (ii.url||"").split("?")[0],
      w: ii.width, h: ii.height,
      license: val("LicenseShortName") || "unknown",
      author: val("Artist") || "unknown",
      page: ii.descriptionurl || ""
    };
  /* Namespace 6 holds PDFs and DjVu scans as well as photographs, and a
     scanned newspaper that happens to mention the brand ranks perfectly well
     on text search. Filter on the extension, not on the score. */
  }).filter(r => r.url && r.w >= 500 && /\.(jpe?g|png|webp|gif|tiff?)$/i.test(r.url));

  rows.sort((a,b) => (OK.test(b.license) - OK.test(a.license)) || (b.w - a.w));
  for(const r of rows){
    console.log(`${OK.test(r.license) ? "USABLE" : "  SKIP"}  ${r.w}x${r.h}  ${r.license}  —  ${r.author}`);
    console.log(`        ${r.title}`);
    console.log(`        ${r.url}`);
  }
}

/* Downloads at the catalogue's own width and converts to webp. Existing
   photos sit around 700px wide, so match that rather than shipping a
   4000px press render nobody asked to download. */
function fetch_(url, slug){
  const tmp = path.join(ROOT, "tools", ".tmp-src");
  execFileSync("curl", ["-sL","--max-time","60","-A",UA,"-o",tmp,url]);
  const out = path.join(ROOT, "images", `watch-${slug}.webp`);
  execFileSync("magick", [tmp, "-resize", "700x700>", "-quality", "82", out]);
  fs.unlinkSync(tmp);
  const { size } = fs.statSync(out);
  console.log(`wrote images/watch-${slug}.webp  (${Math.round(size/1024)} kB)`);
  console.log("NOW: open the image and confirm it is the watch it claims to be,");
  console.log("     then add its credits.json entry before running validate.js.");
}

const [cmd, ...rest] = process.argv.slice(2);
if(cmd === "search") search(rest.join(" "));
else if(cmd === "fetch") fetch_(rest[0], rest[1]);
else { console.log("usage: source-photo.js search <query> | fetch <url> <slug>"); process.exit(1); }
