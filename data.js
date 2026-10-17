/* ==================================================================
   Bezel First — question + watch data
   Every watch below has a verified photograph in ./images/.
   Prices are approximate US street/retail in USD.
   ================================================================== */

const STEPS = [

{ id:"vb", rail:"Purpose", weight:3,
  title:"What job is this watch actually taking?",
  kicker:"Not the fantasy job — the one it does on a Tuesday. Everything downstream is filtered through this answer, so it's the only question worth overthinking.",
  type:"image",
  options:[
    {v:"one",      label:"The only one",     sub:"Worn daily, with everything. Has to survive being forgotten about.", imgs:["vibe-one-watch-0.jpg","vibe-one-watch-1.jpg","vibe-one-watch-2.jpg"]},
    {v:"dress",    label:"Cuffs and dinner", sub:"Slim enough to slide under a shirt sleeve. Quiet, flat, legible at a glance.", imgs:["vibe-dress-0.jpg","vibe-dress-1.jpg","vibe-dress-2.jpg"]},
    {v:"tool",     label:"Hard use",         sub:"Field, water, workshop, travel. Scratches are part of the finish.", imgs:["vibe-tool-0.jpg","vibe-tool-1.jpg","vibe-tool-2.jpg"]},
    {v:"statement",label:"A bit of theater", sub:"Gets noticed and gives you something to talk about. Character over neutrality.", imgs:["vibe-statement-0.jpg","vibe-statement-1.jpg","vibe-statement-2.jpg"]}
  ]},

{ id:"sz", rail:"Size", weight:2,
  title:"How much wrist does it get to use?",
  kicker:"Everyone quotes case width, but lug-to-lug decides whether it actually sits right. Pick what looks correct to you — your eye is the instrument.",
  type:"image",
  options:[
    {v:"s", label:"34 – 37 mm",   sub:"Vintage proportions. Reads as a watch, not as equipment.", imgs:["size-34-37-0.jpg","size-34-37-1.jpg","size-34-37-2.jpg"]},
    {v:"m", label:"37 – 39.5 mm", sub:"The classic middle, where most of the best designs of the last 70 years live.", imgs:["size-37-39-0.jpg","size-37-39-1.jpg","size-37-39-2.jpg"]},
    {v:"l", label:"40 – 42 mm",   sub:"Modern default. Presence without tipping into novelty.", imgs:["size-40-42-0.jpg","size-40-42-1.jpg","size-40-42-2.jpg"]},
    {v:"xl",label:"42 mm and up", sub:"Deliberately large. Big dial, long lugs, needs the wrist to carry it.", imgs:["size-42-plus-0.jpg","size-42-plus-1.jpg","size-42-plus-2.jpg"]}
  ]},

{ id:"sh", rail:"Case", weight:2.5,
  title:"What shape is the case?",
  kicker:"The silhouette is the first thing anyone registers — before the dial, before the logo. Round is the safe default for good reason; the other three are decisions.",
  type:"image",
  options:[
    {v:"round",      label:"Round",       sub:"Lugs, a bezel, a circle. Most great watches, and it never looks wrong.", imgs:["case-round-0.jpg","case-round-1.jpg","case-round-2.jpg"]},
    {v:"cushion",    label:"Cushion",     sub:"Squared body with soft corners. Wears wider than its number.", imgs:["case-cushion-0.jpg","case-cushion-1.jpg"]},
    {v:"rect",       label:"Rectangular", sub:"Tank and Reverso territory. Dressy by default, and nothing else looks like it.", imgs:["case-rectangular-0.jpg","case-rectangular-1.jpg","case-rectangular-2.jpg"]},
    {v:"integrated", label:"Integrated",  sub:"Case and bracelet are one continuous form with no gap. Seventies design.", imgs:["case-integrated-0.jpg","case-integrated-1.jpg","case-integrated-2.jpg"]}
  ]},

{ id:"bz", rail:"Bezel", weight:3,
  title:"Which bezel do you keep looking at?",
  kicker:"The ring around the crystal sets the tone of the whole watch. A rotating dive bezel and a fluted gold one can sit on the same case and read as completely different objects.",
  type:"image",
  options:[
    {v:"dive",  label:"Rotating dive",  sub:"Sixty-minute scale with a lume pip at zero. Turns to time anything.", imgs:["bezel-dive-0.jpg","bezel-dive-1.jpg","bezel-dive-2.jpg"]},
    {v:"smooth",label:"Smooth polished",sub:"A plain narrow ring. Lets the dial do the talking; dresses up and down.", imgs:["bezel-smooth-0.jpg","bezel-smooth-1.jpg","bezel-smooth-2.jpg"]},
    {v:"none",  label:"Barely there",   sub:"Reduced to a hairline so the dial runs nearly edge to edge.", imgs:["bezel-slim-0.jpg","bezel-slim-1.jpg","bezel-slim-2.jpg"]},
    {v:"fluted",label:"Fluted",         sub:"Machined radial flutes, usually gold. Unapologetically formal, catches every light.", imgs:["bezel-fluted-0.jpg"]},
    {v:"gmt",   label:"24-hour GMT",    sub:"Split two-tone ring numbered to 24. Day and night in two colours.", imgs:["bezel-gmt-0.jpg","bezel-gmt-1.jpg","bezel-gmt-2.jpg"]},
    {v:"tachy", label:"Tachymeter",     sub:"Fixed scale for speed over distance. The chronograph's native habitat.", imgs:["bezel-tachymeter-0.jpg","bezel-tachymeter-1.jpg"]},
    {v:"coin",  label:"Coin-edge / notched", sub:"Knurled and grippy, with pilot and compressor lineage.", imgs:["bezel-coin-edge-0.jpg","bezel-coin-edge-1.jpg","bezel-coin-edge-2.jpg"]}
  ]},

{ id:"dc", rail:"Dial", weight:2,
  title:"What colour is the dial?",
  kicker:"Worth being honest rather than aspirational. Black and silver are easy forever; green and salmon are a mood you have to still be in two years from now.",
  type:"image",
  options:[
    {v:"black",label:"Black",           sub:"Maximum contrast, maximum legibility, zero risk. The reference answer.", imgs:["dial-black-0.jpg","dial-black-1.jpg","dial-black-2.jpg"]},
    {v:"white",label:"White or silver", sub:"Crisp and faintly instrumental. Reads dressier than black on the same case.", imgs:["dial-white-0.jpg","dial-white-1.jpg","dial-white-2.jpg"]},
    {v:"blue", label:"Blue",            sub:"The modern crowd-pleaser. Navy behaves like black; brighter blues are a real choice.", imgs:["dial-blue-0.jpg","dial-blue-1.jpg","dial-blue-2.jpg"]},
    {v:"green",label:"Green",           sub:"From near-black forest to full emerald. Unusual enough to register as taste.", imgs:["dial-green-0.jpg","dial-green-1.jpg"]},
    {v:"warm", label:"Champagne or brown", sub:"Vintage warmth. Pairs with gold and brown leather, looks older than it is.", imgs:["dial-warm-0.jpg","dial-warm-1.jpg"]}
  ]},

{ id:"ly", rail:"Layout", weight:2,
  title:"How busy should the dial be?",
  kicker:"Everything you add is a small tax on legibility and a small gain in interest. A no-date dial is the purest layout in watchmaking and also the least useful.",
  type:"image",
  options:[
    {v:"plain",  label:"Three hands, nothing else", sub:"No date, no window, perfect symmetry. The purist's answer.", imgs:["layout-three-hand-0.jpg","layout-three-hand-1.jpg","layout-three-hand-2.jpg"]},
    {v:"date",   label:"Date window",               sub:"One aperture, usually at three. Mildly ruins the symmetry; you'll use it daily.", imgs:["layout-date-0.jpg","layout-date-1.jpg","layout-date-2.jpg"]},
    {v:"chrono", label:"Chronograph",               sub:"Subdials and pushers on the case flank. Busy, mechanical, handsome.", imgs:["layout-chronograph-0.jpg","layout-chronograph-1.jpg","layout-chronograph-2.jpg"]},
    {v:"gmt",    label:"Second time zone",          sub:"A fourth hand on a 24-hour track. The one complication travellers actually use.", imgs:["layout-gmt-0.jpg","layout-gmt-1.jpg"]},
    {v:"digital",label:"Digital display",           sub:"LCD, no hands. Alarms, timers, indestructible. A different kind of honest.", imgs:["layout-digital-0.jpg","layout-digital-1.jpg"]}
  ]},

{ id:"ix", rail:"Markers", weight:2,
  title:"How are the hours marked?",
  kicker:"Markers and hands are the typography of a watch — the detail you stare at for years without naming it. This is where dress and tool really part ways.",
  type:"image",
  options:[
    {v:"baton", label:"Applied batons",       sub:"Faceted steel sticks catching light at the edges. Clean and hard to dislike.", imgs:["markers-baton-0.jpg","markers-baton-1.jpg","markers-baton-2.jpg"]},
    {v:"dots",  label:"Dive plots",           sub:"Round lume blocks, bars at the quarters, a triangle at twelve.", imgs:["markers-dive-plots-0.jpg","markers-dive-plots-1.jpg","markers-dive-plots-2.jpg"]},
    {v:"arabic",label:"Arabic numerals",      sub:"Printed or applied numbers all the way round. Open, legible, slightly bookish.", imgs:["markers-arabic-0.jpg","markers-arabic-1.jpg","markers-arabic-2.jpg"]},
    {v:"field", label:"Full field numbering", sub:"Every hour plus an inner 13–24 track. Maximum information, military lineage.", imgs:["markers-field-0.jpg","markers-field-1.jpg","markers-field-2.jpg"]},
    {v:"roman", label:"Roman numerals",       sub:"Formal and unmistakably classical. The dressiest thing you can print on a dial.", imgs:["markers-roman-0.jpg","markers-roman-1.jpg"]}
  ]},

{ id:"st", rail:"Bracelet", weight:2,
  title:"What's it on?",
  kicker:"Changeable later, but it dictates how the watch feels more than anything except size — and a bracelet can be a quarter of what you paid.",
  type:"image",
  options:[
    {v:"oyster",    label:"Three-link steel", sub:"Brushed, flat and sturdy. The everyday default; suits almost everything.", imgs:["strap-oyster-0.jpg","strap-oyster-1.jpg"]},
    {v:"jubilee",   label:"Five-link steel",  sub:"Narrower polished centre links. Dressier, more fluid, slightly jewelry-ish.", imgs:["strap-jubilee-0.jpg","strap-jubilee-1.jpg"]},
    {v:"integrated",label:"Integrated taper", sub:"Flows out of the case with no lug gap. Looks expensive; you can't swap it.", imgs:["strap-integrated-0.jpg","strap-integrated-1.jpg","strap-integrated-2.jpg"]},
    {v:"leather",   label:"Leather",          sub:"Warm, light, quiet. Dresses anything up and wears out every couple of years.", imgs:["strap-leather-0.jpg","strap-leather-1.jpg"]},
    {v:"nato",      label:"Fabric or NATO",   sub:"One pass-through strap, cheap to swap, nothing to scratch. Pure utility.", imgs:["strap-nato-0.jpg","strap-nato-1.jpg"]},
    {v:"mesh",      label:"Milanese mesh",    sub:"Fine woven steel. Smooth on the wrist and infinitely adjustable.", imgs:["strap-mesh-0.jpg","strap-mesh-1.jpg"]},
    {v:"rubber",    label:"Rubber",           sub:"Pool, shower, sweat, ocean. Modern rubber is genuinely nice, not a compromise.", imgs:["strap-rubber-0.jpg","strap-rubber-1.jpg"]}
  ]},

{ id:"mv", rail:"Movement", weight:3,
  title:"What should be driving it?",
  kicker:"A good quartz keeps better time than almost any mechanical watch and costs a battery every few years. Mechanical is worse at telling time, and that is not the point.",
  type:"chip",
  options:[
    {v:"any",     label:"No strong feelings", sub:"Judge it on the watch, not the engine. Widest field by far."},
    {v:"mech",    label:"Mechanical only",    sub:"Automatic or hand-wound. A spring and gears, no battery, serviceable forever. Loses a few seconds a day and that's the deal."},
    {v:"lowmaint",label:"As little fuss as possible", sub:"Quartz or solar. Put it on, it's right, and it's right next year too."},
    {v:"digital", label:"Digital, obviously", sub:"A module and an LCD. Alarms, timers, a decade on one cell."}
  ]},

{ id:"bt", rail:"Brands", weight:1,
  title:"Do you care whose name is on it?",
  kicker:"You'll notice this page never asked until now. The right answer is usually “not really” — but if a logo matters to you, in either direction, it's fair to say so out loud.",
  type:"chip",
  options:[
    {v:"any",  label:"Don't care at all",      sub:"Rank purely on the watch. Recommended, and the whole idea here."},
    {v:"house",label:"Lean recognisable",      sub:"An established name with real service support and resale. Fewer surprises."},
    {v:"indie",label:"Lean under-the-radar",   sub:"Smaller and enthusiast brands. More watch per dollar, and nobody else at the table has one."},
    {v:"value",label:"Lean mass-market value", sub:"The big Japanese and budget houses. Reliable, cheap to replace, zero anxiety about wearing it."}
  ]},

{ id:"price", rail:"Budget", weight:0, last:true,
  title:"Now, and only now — what are you spending?",
  kicker:"Everything above already narrowed the field on taste alone. Your budget just decides which rung of that same ladder you step onto, and you'll see the rung below and above it too.",
  type:"chip",
  options:[
    {v:"A", label:"Under $250",      sub:"Honest, cheap, genuinely good. Nothing here is a toy."},
    {v:"B", label:"$250 – $750",     sub:"The sweet spot. Real automatics, real finishing, replaceable if you lose it."},
    {v:"C", label:"$750 – $2,000",   sub:"Better movements, sapphire, bracelets that don't rattle."},
    {v:"D", label:"$2,000 – $6,000", sub:"Swiss and Grand Seiko proper. Diminishing returns begin politely here."},
    {v:"E", label:"$6,000 and up",   sub:"The names you already know. You're buying the last five percent."}
  ]}
];

const BRACKETS = {
  A:{min:0,    max:250,   label:"under $250"},
  B:{min:250,  max:750,   label:"$250 – $750"},
  C:{min:750,  max:2000,  label:"$750 – $2,000"},
  D:{min:2000, max:6000,  label:"$2,000 – $6,000"},
  E:{min:6000, max:Infinity, label:"$6,000 and up"}
};

/* s=slug n=model b=brand p=price · sz size sh shape bz bezel dc dial
   ly layout ix markers st straps mv movement vb vibes bt brand tier    */
const WATCHES = [

/* ---------- under $250 ---------- */
{s:"casio-f91w",n:"F-91W",b:"Casio",p:25,sz:"s",sh:"rect",bz:"none",dc:"black",ly:"digital",ix:"baton",st:["rubber"],mv:"digital",vb:["statement","tool"],bt:"value",
 sp:["38 × 35 mm","Splash resistant (unrated)","Digital · 7-year cell"],w:"A plastic rectangle that costs less than lunch and has been worn by schoolchildren and soldiers alike. An alarm, a stopwatch, a seven-year battery, and absolutely nothing to worry about losing."},
{s:"casio-gshock-5610",n:"G-Shock GW-M5610U",b:"Casio",p:150,sz:"l",sh:"cushion",bz:"none",dc:"black",ly:"digital",ix:"baton",st:["rubber"],mv:"digital",vb:["tool"],bt:"value",
 sp:["43.2 mm","200 m","Tough Solar · radio-set"],w:"The square, in its solar and radio-controlled form: it charges from daylight, sets itself from an atomic time signal, and shrugs off things that would end a steel watch. Forty years essentially unchanged because there was nothing to fix."},
{s:"vostok-amphibia",n:"Amphibia",b:"Vostok",p:120,sz:"l",sh:"round",bz:"dive",dc:"blue",ly:"plain",ix:"dots",st:["mesh","nato","oyster"],mv:"auto",vb:["tool","statement"],bt:"value",
 sp:["40 mm","200 m","Vostok automatic"],w:"Soviet dive-watch engineering still in production, with a crystal designed to deform under pressure and seal tighter the deeper you go. Crude, charming, fully mechanical, and about the price of a nice dinner."},
{s:"seiko-snk809",n:"5 SNK809",b:"Seiko",p:150,sz:"s",sh:"round",bz:"none",dc:"black",ly:"date",ix:"field",st:["nato"],mv:"auto",vb:["tool"],bt:"value",
 sp:["37 mm","Day-date","Seiko 7S26 automatic"],w:"The watch that has started more collections than any other, now discontinued and sold from remaining stock. Fully mechanical with the rotor visible through the back — though the 7S26 inside neither hacks nor hand-winds, which surprises every first-time owner."},
{s:"timex-q",n:"Q Timex Reissue",b:"Timex",p:189,sz:"m",sh:"round",bz:"gmt",dc:"blue",ly:"date",ix:"baton",st:["jubilee"],mv:"quartz",vb:["statement"],bt:"value",
 sp:["38 mm","Rotating 24-hour bezel","Quartz"],w:"A faithful 1979 reissue with a blue dial, a red-and-blue rotating bezel and a five-link bracelet. Note the bezel is decorative — there is no second time-zone hand, so this looks like a travel watch without being one."},

/* ---------- $250 – $750 ---------- */
{s:"orient-kamasu",n:"Mako",b:"Orient",p:260,sz:"l",sh:"round",bz:"dive",dc:"black",ly:"date",ix:"dots",st:["oyster"],mv:"auto",vb:["tool","one"],bt:"value",
 sp:["41.5 mm","200 m","Orient automatic"],w:"Two hundred metres, a hacking automatic and a steel bracelet for the price of a decent pair of boots. The mineral crystal is the one real compromise, and it is the reason the rest of the watch can cost this little."},
{s:"citizen-promaster",n:"Promaster Diver",b:"Citizen",p:325,sz:"xl",sh:"round",bz:"dive",dc:"black",ly:"date",ix:"dots",st:["nato","rubber"],mv:"solar",vb:["tool"],bt:"house",
 sp:["44 mm","200 m ISO","Eco-Drive solar"],w:"ISO-rated and solar-powered, so it never needs winding and almost never needs service. The cell is rechargeable rather than eternal — budget for a replacement somewhere past the fifteen-year mark."},
{s:"mondaine-railways",n:"Official Swiss Railways",b:"Mondaine",p:350,sz:"l",sh:"round",bz:"none",dc:"white",ly:"date",ix:"baton",st:["leather"],mv:"quartz",vb:["dress","statement"],bt:"house",
 sp:["40 mm","Hilfiker dial","Quartz"],w:"Hans Hilfiker's 1944 station clock shrunk onto a wrist. The red seconds paddle that everyone remembers was actually a 1953 addition, and it remains one of the few dials that is genuinely a piece of graphic-design history."},
{s:"bulova-lunar-pilot",n:"Lunar Pilot",b:"Bulova",p:495,sz:"xl",sh:"round",bz:"tachy",dc:"black",ly:"chrono",ix:"baton",st:["leather","oyster"],mv:"quartz",vb:["statement","tool"],bt:"house",
 sp:["43.5 mm","262 kHz quartz","Chronograph"],w:"Dave Scott wore a Bulova chronograph on the surface during Apollo 15 — a mechanical prototype, where this is a modern quartz reinterpretation of the design. Enormous, accurate to a fraction of a second, and completely justified."},
{s:"laco-faro",n:"Faro B-Muster",b:"Laco",p:550,sz:"l",sh:"round",bz:"none",dc:"black",ly:"plain",ix:"arabic",st:["leather"],mv:"auto",vb:["tool","statement"],bt:"indie",
 sp:["42 mm","Type-B flieger dial","Automatic"],w:"The German pilot dial in its B-Muster form: minutes round the outside, hours on a smaller inner ring, and a triangle at twelve. Laco were one of the five firms making these for the Luftwaffe in the 1940s, which is more than most reissues can claim."},
{s:"hamilton-khaki-mech",n:"Khaki Field Mechanical",b:"Hamilton",p:550,sz:"m",sh:"round",bz:"none",dc:"black",ly:"plain",ix:"field",st:["nato"],mv:"hand",vb:["tool"],bt:"house",
 sp:["38 mm","50 m","Hand-wound H-50 · 80 h"],w:"A direct descendant of the US military field watch, hand-wound with an eighty-hour reserve. Thirty-eight millimetres, no date, no nonsense — arguably the best 500-dollar watch made."},
{s:"tissot-prx-auto",n:"PRX Powermatic 80",b:"Tissot",p:725,sz:"l",sh:"integrated",bz:"smooth",dc:"black",ly:"date",ix:"baton",st:["integrated"],mv:"auto",vb:["one","dress"],bt:"house",
 sp:["40 mm","100 m","Powermatic 80 · 80 h"],w:"The watch that restarted the integrated-bracelet craze. An eighty-hour Swiss automatic behind a waffle-textured dial, with a bracelet that genuinely feels machined, for the price of a decent coat."},
{s:"hamilton-khaki-auto",n:"Khaki Field Auto",b:"Hamilton",p:745,sz:"m",sh:"round",bz:"coin",dc:"black",ly:"date",ix:"field",st:["nato","leather"],mv:"auto",vb:["tool","one"],bt:"house",
 sp:["38 mm","100 m","H-10 automatic · 80 h"],w:"The hand-wound Khaki's automatic sibling, with a date, a knurled coin-edge bezel and the same eighty-hour movement. If you want one mechanical watch to beat up and never think about, this is the shortlist."},

/* ---------- $750 – $2,000 ---------- */
{s:"seiko-alpinist",n:"Prospex Alpinist",b:"Seiko",p:875,sz:"m",sh:"round",bz:"smooth",dc:"green",ly:"date",ix:"arabic",st:["oyster","leather"],mv:"auto",vb:["one"],bt:"house",
 sp:["39.5 mm","200 m","6R35 · inner compass ring"],w:"Deep green dial, gold cathedral hands, and a compass scale on an inner ring turned by a second crown at four. A mountaineering watch that reads as dressy, which is a combination almost nobody else attempts."},
{s:"junghans-max-bill",n:"Max Bill Automatic",b:"Junghans",p:1190,sz:"m",sh:"round",bz:"none",dc:"white",ly:"plain",ix:"arabic",st:["leather"],mv:"auto",vb:["dress","statement"],bt:"house",
 sp:["38 mm","Domed plexiglass","Automatic"],w:"Bauhaus on the wrist. Max Bill designed the clocks in the mid-1950s and this wristwatch in 1961, and it has barely changed since — the heavily domed plexiglass distorts the dial at the edges, and that is entirely the point."},
{s:"sinn-556",n:"556 I",b:"Sinn",p:1560,sz:"m",sh:"round",bz:"smooth",dc:"black",ly:"date",ix:"baton",st:["oyster","leather"],mv:"auto",vb:["one","tool"],bt:"indie",
 sp:["38.5 mm","200 m","Sellita automatic"],w:"German instrument-watch logic applied to a plain black three-hander: anti-magnetic, two hundred metres, and visually almost anonymous. The quiet one-watch answer."},
{s:"tissot-prx-chrono",n:"PRX Chronograph",b:"Tissot",p:1995,sz:"l",sh:"integrated",bz:"smooth",dc:"black",ly:"chrono",ix:"baton",st:["integrated"],mv:"auto",vb:["statement","one"],bt:"house",
 sp:["42 mm","100 m","Valjoux A05 automatic"],w:"The PRX with a proper automatic chronograph inside and three registers across a dark sunburst dial. Busier and considerably more expensive than its three-hand sibling, and the only integrated-bracelet chronograph most people will seriously consider."},

/* ---------- $2,000 – $6,000 ---------- */
{s:"oris-aquis",n:"Aquis Depth Gauge",b:"Oris",p:4000,sz:"l",sh:"round",bz:"dive",dc:"black",ly:"date",ix:"dots",st:["rubber","oyster"],mv:"auto",vb:["tool","one"],bt:"house",
 sp:["45.8 mm","500 m","Depth gauge channel"],w:"A dive watch with an actual mechanical depth gauge: a channel cut around the dial edge floods with water, and you read the depth where the water meets the yellow scale. No electronics, no battery, genuinely clever."},
{s:"nomos-tangente",n:"Tangente neomatik 41 Update",b:"Nomos",p:4280,sz:"l",sh:"round",bz:"none",dc:"white",ly:"date",ix:"arabic",st:["leather"],mv:"auto",vb:["dress","statement"],bt:"indie",
 sp:["40.5 mm","In-house neomatik","Ring date"],w:"The defining modern Bauhaus watch, in its automatic form. The date is the clever part — rather than a window, two red markers travel round a ring at the dial edge and bracket today's number. Typography so good it gets taught."},
{s:"tudor-pelagos",n:"Pelagos",b:"Tudor",p:4900,sz:"xl",sh:"round",bz:"dive",dc:"blue",ly:"date",ix:"dots",st:["oyster","rubber"],mv:"auto",vb:["tool","one"],bt:"house",
 sp:["42 mm titanium","500 m","COSC MT5612"],w:"Titanium, five hundred metres, a helium escape valve and a clasp that self-adjusts as a wetsuit compresses. The serious tool watch in Tudor's range, and matte where the Black Bay is glossy."},
{s:"cartier-tank-must",n:"Tank Must XL",b:"Cartier",p:4000,sz:"m",sh:"rect",bz:"none",dc:"warm",ly:"date",ix:"roman",st:["leather"],mv:"auto",vb:["dress","statement"],bt:"house",
 sp:["31 × 41 mm","Roman dial · date at 6","Automatic"],w:"The most recognisable rectangular watch in the world, in its larger automatic form with a cream dial and a date at six. Worn by everyone from Warhol to Diana, and it still looks like a drawing of a watch rather than a machine."},
{s:"longines-legend-diver",n:"Legend Diver",b:"Longines",p:3100,sz:"m",sh:"round",bz:"none",dc:"green",ly:"plain",ix:"arabic",st:["leather","mesh"],mv:"auto",vb:["statement","one"],bt:"house",
 sp:["39 mm bronze","300 m","Inner rotating bezel"],w:"A 1960s skin-diver reissue with no external bezel at all — just an internal timing ring turned by a second crown. Often called a Super Compressor, though strictly that name belongs to a different maker's case."},
{s:"longines-zulu",n:"Spirit Zulu Time",b:"Longines",p:3250,sz:"m",sh:"round",bz:"gmt",dc:"blue",ly:"gmt",ix:"arabic",st:["oyster","leather"],mv:"auto",vb:["one"],bt:"house",
 sp:["39 mm","100 m","True GMT · COSC"],w:"A true-GMT movement — the local hour hand jumps independently — under a 24-hour ceramic bezel, at roughly a third of what the obvious alternative costs. The traveller's value play."},
{s:"tag-carrera",n:"Carrera Automatic",b:"TAG Heuer",p:3500,sz:"m",sh:"round",bz:"smooth",dc:"black",ly:"date",ix:"baton",st:["leather","oyster"],mv:"auto",vb:["one","dress"],bt:"house",
 sp:["39 mm","100 m","Calibre 5 automatic"],w:"Jack Heuer's 1963 racing design in a clean three-hand case. More wearable, and considerably less shouty, than the chronographs that share its name."},

/* ---------- $6,000 and up ---------- */
{s:"omega-aqua-terra",n:"Seamaster Aqua Terra",b:"Omega",p:6800,sz:"m",sh:"round",bz:"smooth",dc:"blue",ly:"date",ix:"baton",st:["oyster","leather"],mv:"auto",vb:["one","dress"],bt:"house",
 sp:["38 mm","150 m","Co-Axial Master Chronometer"],w:"A teak-patterned dial, a 15,000-gauss antimagnetic movement and METAS certification, in a case that works with a suit or a swim. The quiet, sensible, extremely good answer."},
{s:"gs-snowflake",n:"SBGA011 Snowflake",b:"Grand Seiko",p:6400,sz:"l",sh:"round",bz:"smooth",dc:"white",ly:"date",ix:"baton",st:["oyster"],mv:"auto",vb:["dress","statement"],bt:"house",
 sp:["41 mm titanium","100 m","Spring Drive"],w:"The Snowflake. A dial textured like wind-blown snow, a titanium case polished by hand until the facets look liquid, and a seconds hand that glides rather than ticks, because Spring Drive is a mainspring regulated electronically — neither quite mechanical nor quartz."},
{s:"omega-speedmaster",n:"Speedmaster Professional",b:"Omega",p:7000,sz:"xl",sh:"round",bz:"tachy",dc:"black",ly:"chrono",ix:"baton",st:["oyster","leather"],mv:"hand",vb:["statement","one"],bt:"house",
 sp:["42 mm","50 m","Hand-wound 3861"],w:"Flight-qualified by NASA for all manned missions and worn on the moon, still hand-wound, still essentially the 1960s design. The most historically loaded watch you can buy new."},
{s:"rolex-explorer",n:"Explorer",b:"Rolex",p:7900,sz:"s",sh:"round",bz:"smooth",dc:"black",ly:"plain",ix:"arabic",st:["oyster"],mv:"auto",vb:["one","dress"],bt:"house",
 sp:["36 mm","100 m","Automatic · 3-6-9 dial"],w:"Black dial, 3-6-9 numerals, no date, no bezel action. The least showy Rolex and, to a certain kind of person, the only one worth owning."},
{s:"jlc-reverso",n:"Reverso Classic",b:"Jaeger-LeCoultre",p:8100,sz:"m",sh:"rect",bz:"none",dc:"white",ly:"plain",ix:"arabic",st:["leather"],mv:"hand",vb:["dress","statement"],bt:"house",
 sp:["45.6 × 27.4 mm","30 m","Hand-wound · case flips"],w:"Designed in 1931 so polo players could flip the dial inward and protect it. The case still swivels in its cradle, the art-deco gadroons are still there, and nothing else on a wrist does this."},
{s:"cartier-santos",n:"Santos",b:"Cartier",p:8200,sz:"m",sh:"integrated",bz:"smooth",dc:"white",ly:"date",ix:"roman",st:["integrated"],mv:"auto",vb:["statement","dress"],bt:"house",
 sp:["35 × 42 mm","100 m","Exposed bezel screws"],w:"Cartier made a flat square watch for the aviator Alberto Santos-Dumont in 1904; this squared, screw-set, integrated-bracelet design descends from the 1978 reworking of it. Dressy and sporty at once, which almost nothing manages."},
{s:"rolex-datejust",n:"Datejust 36",b:"Rolex",p:10700,sz:"s",sh:"round",bz:"fluted",dc:"black",ly:"date",ix:"baton",st:["jubilee","oyster"],mv:"auto",vb:["dress","one"],bt:"house",
 sp:["36 mm","100 m","Fluted white-gold bezel"],w:"Eighty years of being the default good watch. The machined flutes round the bezel are white gold, which is most of why this costs what it does, and they throw light in a way a plain bezel never will."},
{s:"panerai-luminor",n:"Luminor Marina",b:"Panerai",p:8600,sz:"xl",sh:"cushion",bz:"none",dc:"black",ly:"date",ix:"arabic",st:["leather"],mv:"auto",vb:["statement"],bt:"house",
 sp:["44 mm cushion","300 m","Crown-protecting lever"],w:"A 44 mm cushion case with a crown-locking lever and a sandwich dial that glows like a torch. Descended from Italian naval frogman equipment, and it has never once pretended to be subtle."},
{s:"breitling-navitimer",n:"Navitimer 806",b:"Breitling",p:9500,sz:"l",sh:"round",bz:"coin",dc:"black",ly:"chrono",ix:"baton",st:["oyster","leather"],mv:"auto",vb:["statement"],bt:"house",
 sp:["41 mm","30 m","Circular slide rule"],w:"A working circular slide rule wrapped around a three-register chronograph, designed in 1952 so pilots could compute fuel burn mid-flight. Spectacularly busy, and completely earned."},
{s:"rolex-submariner",n:"Submariner",b:"Rolex",p:10900,sz:"l",sh:"round",bz:"dive",dc:"black",ly:"date",ix:"dots",st:["oyster"],mv:"auto",vb:["one","tool"],bt:"house",
 sp:["41 mm","300 m","Ceramic bezel"],w:"The archetype every other dive watch is measured against, and the reason this page has a dive-bezel option at all. Over-specified, over-exposed, and still very hard to argue with."},
{s:"rolex-gmt",n:"GMT-Master II",b:"Rolex",p:11200,sz:"l",sh:"round",bz:"gmt",dc:"black",ly:"gmt",ix:"dots",st:["jubilee","oyster"],mv:"auto",vb:["one","statement"],bt:"house",
 sp:["40 mm","100 m","Two-colour ceramic bezel"],w:"Built in 1955 for Pan Am crews crossing time zones, and the watch that introduced the two-colour 24-hour bezel. The blue-and-black version is among the most desired steel watches on earth."},
{s:"fifty-fathoms",n:"Fifty Fathoms",b:"Blancpain",p:15000,sz:"xl",sh:"round",bz:"dive",dc:"black",ly:"plain",ix:"baton",st:["nato","rubber"],mv:"auto",vb:["statement","tool"],bt:"house",
 sp:["42.3 mm","300 m","Moisture indicator at 6"],w:"One of the two watches that invented the modern diver in 1953 — the priority argument with the Submariner has never been settled. The little disc at six is a moisture indicator that turns red if the case ever floods."},
{s:"ap-royal-oak",n:"Royal Oak 15202",b:"Audemars Piguet",p:28000,sz:"m",sh:"integrated",bz:"coin",dc:"blue",ly:"date",ix:"baton",st:["integrated"],mv:"auto",vb:["statement"],bt:"house",
 sp:["39 mm","50 m","Octagonal bezel · tapisserie"],w:"Gérald Genta's 1972 design, in the thin 39 mm 'Jumbo' form closest to the original. An octagonal bezel with eight exposed hexagonal screws over a waffle-pressed dial — the watch that made a steel sports watch cost what a gold one did."}
];

/* Attribution for every photograph used (Wikimedia Commons). */
const CREDITS = [
 {
  "title": "Hamilton Khaki Field Team Earth Harrison Ford (strong crop plus perspective correction).jpg",
  "author": "Russ",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Hamilton_Khaki_Field_Team_Earth_Harrison_Ford_(strong_crop_plus_perspective_correction).jpg"
 },
 {
  "title": "Breitling Navitimer 806 E last version.jpg",
  "author": "PAPPL",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Breitling_Navitimer_806_E_last_version.jpg"
 },
 {
  "title": "Audemars Piguet Royal Oak ref. 15202.jpg",
  "author": "OpaleHorse",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Audemars_Piguet_Royal_Oak_ref._15202.jpg"
 },
 {
  "title": "Rolex-Submariner.jpg",
  "author": "FrankWilliams",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex-Submariner.jpg"
 },
 {
  "title": "Tudor Pelagos for Carolina Watch Club Limited Edition.jpg",
  "author": "OpaleHorse",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tudor_Pelagos_for_Carolina_Watch_Club_Limited_Edition.jpg"
 },
 {
  "title": "ORIENT New Mako Automatic 200M Diver's CEM75001B. (5921299415).jpg",
  "author": "MIKI Yoshihito from Sapporo City,Hokkaido., JAPAN",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:ORIENT_New_Mako_Automatic_200M_Diver%27s_CEM75001B._(5921299415).jpg"
 },
 {
  "title": "Rolex Datejust 126234.jpg",
  "author": "ajay_suresh",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex_Datejust_126234.jpg"
 },
 {
  "title": "Rolex GMT Master II 116710BLNR Batman.jpg",
  "author": "gabihil",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex_GMT_Master_II_116710BLNR_Batman.jpg"
 },
 {
  "title": "Longines Spirit Zulu Time.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Longines_Spirit_Zulu_Time.jpg"
 },
 {
  "title": "Timex Q Reissue ref. TW2V32100.jpg",
  "author": "EMore98",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Timex_Q_Reissue_ref._TW2V32100.jpg"
 },
 {
  "title": "Junghans Max Bill Uhr.jpg",
  "author": "Uhrenfabrik Junghans",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Junghans_Max_Bill_Uhr.jpg"
 },
 {
  "title": "Nomos Glashütte Tangente neomatik 41 Update.jpg",
  "author": "Berlinerblau",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Nomos_Glash%C3%BCtte_Tangente_neomatik_41_Update.jpg"
 },
 {
  "title": "Hamilton Khaki Field.jpg",
  "author": "EMore98",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Hamilton_Khaki_Field.jpg"
 },
 {
  "title": "Omega Seamaster Aqua Terra realizzato per commemorare le olimpiadi di Tokyo 2020.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Omega_Seamaster_Aqua_Terra_realizzato_per_commemorare_le_olimpiadi_di_Tokyo_2020.jpg"
 },
 {
  "title": "SINN (30468374062).jpg",
  "author": "Daniel Zimmermann from Bayern, Deutschland (Germany)",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:SINN_(30468374062).jpg"
 },
 {
  "title": "152-rolex-explorer-ref-14270-circa-2001-mostra-store-aix-montres-vintage.jpg",
  "author": "Thierry Mostra-store",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:152-rolex-explorer-ref-14270-circa-2001-mostra-store-aix-montres-vintage.jpg"
 },
 {
  "title": "Classic Speedy (24067321725).jpg",
  "author": "Daniel Zimmermann from Bayern, Deutschland (Germany)",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Classic_Speedy_(24067321725).jpg"
 },
 {
  "title": "Bulova Lunar Pilot.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Bulova_Lunar_Pilot.jpg"
 },
 {
  "title": "PANERAI (29802698304).jpg",
  "author": "Daniel Zimmermann from Bayern, Deutschland (Germany)",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:PANERAI_(29802698304).jpg"
 },
 {
  "title": "CASIO G-Shock GW-M5610U.jpg",
  "author": "Md. Rifat Hasan Jihan",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:CASIO_G-Shock_GW-M5610U.jpg"
 },
 {
  "title": "Tissot PRX 35mm.jpg",
  "author": "Soulreaper",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tissot_PRX_35mm.jpg"
 },
 {
  "title": "Cartier Santos 1988.jpg",
  "author": "Noop1958",
  "license": "CC BY-SA 3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Cartier_Santos_1988.jpg"
 },
 {
  "title": "Jaeger-LeCoultre Reverso, anni 2000.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Jaeger-LeCoultre_Reverso,_anni_2000.jpg"
 },
 {
  "title": "Cartier Tank Must XL automatico.jpg",
  "author": "EMore98",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Cartier_Tank_Must_XL_automatico.jpg"
 },
 {
  "title": "Casio F-91W watch (2023) (front closeup - time) (minor retouch).jpg",
  "author": "Multicherry",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Casio_F-91W_watch_(2023)_(front_closeup_-_time)_(minor_retouch).jpg"
 },
 {
  "title": "Wikipedia-DE-Longines-Legend-Diver-Bronze-1024.jpg",
  "author": "Minzoblate",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Wikipedia-DE-Longines-Legend-Diver-Bronze-1024.jpg"
 },
 {
  "title": "Seiko Prospex Alpinist01bs.jpg",
  "author": "663highland",
  "license": "CC BY 2.5",
  "page": "https://commons.wikimedia.org/wiki/File:Seiko_Prospex_Alpinist01bs.jpg"
 },
 {
  "title": "Breitling Premier 1950th.png",
  "author": "Ｔｏｍ",
  "license": "FAL",
  "page": "https://commons.wikimedia.org/wiki/File:Breitling_Premier_1950th.png"
 },
 {
  "title": "Laco Faro B-Muster, designed after Beobachtungsuhr Fliegeruhr Pilotenuhr of WWII (cropped to casing).jpg",
  "author": "Chrononautix",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Laco_Faro_B-Muster,_designed_after_Beobachtungsuhr_Fliegeruhr_Pilotenuhr_of_WWII_(cropped_to_casing).jpg"
 },
 {
  "title": "TAG Heuer Carrera Calibre 5, anni 2010.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:TAG_Heuer_Carrera_Calibre_5,_anni_2010.jpg"
 },
 {
  "title": "Citizen Promaster Eco-Drive AP0440-14F Diver's 200 m (edited, cropped to casing).jpg",
  "author": "File:Citizen Promaster Eco-Drive AP0440-14F Diver's 200 m on a 4-ring NATO style strap.JPG: Francis Flinch\nderivative work: Pittigrilli",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Citizen_Promaster_Eco-Drive_AP0440-14F_Diver%27s_200_m_(edited,_cropped_to_casing).jpg"
 },
 {
  "title": "Seiko SNK809.jpg",
  "author": "Soulreaper",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Seiko_SNK809.jpg"
 },
 {
  "title": "Rolex-GMT-Master-II-Batgirl.jpg",
  "author": "Brattyq",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex-GMT-Master-II-Batgirl.jpg"
 },
 {
  "title": "Seiko SKX007k.jpg",
  "author": "Tyisnttheanswer",
  "license": "CC BY-SA 3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Seiko_SKX007k.jpg"
 },
 {
  "title": "Viscount Alligator blau.jpg",
  "author": "Hirsch Armbänder GmbH",
  "license": "CC BY-SA 3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Viscount_Alligator_blau.jpg"
 },
 {
  "title": "Pilot watch on a bund strap.jpg",
  "author": "AfterMinute",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Pilot_watch_on_a_bund_strap.jpg"
 },
 {
  "title": "Citizen Promaster Eco-Drive BJ8050-08E Diver's 300 m with stainless steel shark mesh bracelet.jpg",
  "author": "File:Stainless steel shark mesh bracelet.jpg: Cohiba Jack\nderivative work: Pittigrilli",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Citizen_Promaster_Eco-Drive_BJ8050-08E_Diver%27s_300_m_with_stainless_steel_shark_mesh_bracelet.jpg"
 },
 {
  "title": "Stainless steel shark mesh bracelet.jpg",
  "author": "Cohiba Jack",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Stainless_steel_shark_mesh_bracelet.jpg"
 },
 {
  "title": "Qimei watch on Zulu strap.jpg",
  "author": "Francis Flinch",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Qimei_watch_on_Zulu_strap.jpg"
 },
 {
  "title": "Citizen Promaster Eco-Drive AP0440-14F Diver's 200 m on a 4-ring NATO style strap (edited, on white).JPG",
  "author": "File:Citizen Promaster Eco-Drive AP0440-14F Diver's 200 m on a 4-ring NATO style strap.JPG: Francis Flinch\nderivative work: Pittigrilli",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Citizen_Promaster_Eco-Drive_AP0440-14F_Diver%27s_200_m_on_a_4-ring_NATO_style_strap_(edited,_on_white).JPG"
 },
 {
  "title": "Rolex Deepsea Sea-Dweller 116660 Blue Dial 'James Cameron'.jpg",
  "author": "amh1988",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex_Deepsea_Sea-Dweller_116660_Blue_Dial_%27James_Cameron%27.jpg"
 },
 {
  "title": "Rolex Deepsea Sea-Dweller 116660 Blue Dial 'James Cameron' (without background, upright).jpg",
  "author": "File:Rolex Deepsea Sea-Dweller 116660 Blue Dial 'James Cameron'.jpg: amh1988\nderivative work: Pittigrilli",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex_Deepsea_Sea-Dweller_116660_Blue_Dial_%27James_Cameron%27_(without_background,_upright).jpg"
 },
 {
  "title": "Citizen Eco-Drive Diver's 200m - Diving watch (cropped to watch casing).jpg",
  "author": "Pittigrilli",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Citizen_Eco-Drive_Diver%27s_200m_-_Diving_watch_(cropped_to_watch_casing).jpg"
 },
 {
  "title": "Dive table on the rubber bracelet of a Citizen Diving watch.jpg",
  "author": "Pittigrilli",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Dive_table_on_the_rubber_bracelet_of_a_Citizen_Diving_watch.jpg"
 },
 {
  "title": "Blancpain.jpg",
  "author": "Johnson Watch",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Blancpain.jpg"
 },
 {
  "title": "Grand Seiko SBGA011.jpg",
  "author": "Faustine seiko",
  "license": "CC BY-SA 3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Grand_Seiko_SBGA011.jpg"
 },
 {
  "title": "Mondaine Classic A669.30008.16SBO watch.jpg",
  "author": "DimiTalen",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Mondaine_Classic_A669.30008.16SBO_watch.jpg"
 },
 {
  "title": "Oris Aquis Depth Gauge.jpeg",
  "author": "Rechteinhaber: Oris\n\nFotograf: Olaf Köster",
  "license": "CC BY-SA 3.0 de",
  "page": "https://commons.wikimedia.org/wiki/File:Oris_Aquis_Depth_Gauge.jpeg"
 },
 {
  "title": "Tissot PRX collection one 23 January 2025 Philippines7.jpg",
  "author": "Unknown",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tissot_PRX_collection_one_23_January_2025_Philippines7.jpg"
 },
 {
  "title": "Vostok Amphibia 090916.jpg",
  "author": "Spritrig",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Vostok_Amphibia_090916.jpg"
 }
];
