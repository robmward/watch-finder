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
    {v:"one",      label:"The only one",     sub:"Worn daily, with everything. Has to survive being forgotten about.", img:"vibe-one-watch.jpg"},
    {v:"dress",    label:"Cuffs and dinner", sub:"Slim enough to slide under a shirt sleeve. Quiet, flat, legible at a glance.", img:"vibe-dress.jpg"},
    {v:"tool",     label:"Hard use",         sub:"Field, water, workshop, travel. Scratches are part of the finish.", img:"vibe-tool.jpg"},
    {v:"statement",label:"A bit of theater", sub:"Gets noticed and gives you something to talk about. Character over neutrality.", img:"vibe-statement.jpg"}
  ]},

{ id:"sz", rail:"Size", weight:2,
  title:"How much wrist does it get to use?",
  kicker:"Everyone quotes case width, but lug-to-lug decides whether it actually sits right. Pick what looks correct to you — your eye is the instrument.",
  type:"image",
  options:[
    {v:"s", label:"34 – 37 mm",   sub:"Vintage proportions. Reads as a watch, not as equipment.", img:"size-34-37.jpg"},
    {v:"m", label:"37 – 39.5 mm", sub:"The classic middle, where most of the best designs of the last 70 years live.", img:"size-37-39.jpg"},
    {v:"l", label:"40 – 42 mm",   sub:"Modern default. Presence without tipping into novelty.", img:"size-40-42.jpg"},
    {v:"xl",label:"42 mm and up", sub:"Deliberately large. Big dial, long lugs, needs the wrist to carry it.", img:"size-42-plus.jpg"}
  ]},

{ id:"sh", rail:"Case", weight:2.5,
  title:"What shape is the case?",
  kicker:"The silhouette is the first thing anyone registers — before the dial, before the logo. Round is the safe default for good reason; the other three are decisions.",
  type:"image",
  options:[
    {v:"round",      label:"Round",       sub:"Lugs, a bezel, a circle. Most great watches, and it never looks wrong.", img:"case-round.jpg"},
    {v:"cushion",    label:"Cushion",     sub:"Squared body with soft corners. Wears wider than its number.", img:"case-cushion.jpg"},
    {v:"rect",       label:"Rectangular", sub:"Tank and Reverso territory. Dressy by default, and nothing else looks like it.", img:"case-rectangular.jpg"},
    {v:"integrated", label:"Integrated",  sub:"Case and bracelet are one continuous form with no gap. Seventies design.", img:"case-integrated.jpg"}
  ]},

{ id:"bz", rail:"Bezel", weight:3,
  title:"Which bezel do you keep looking at?",
  kicker:"The ring around the crystal sets the tone of the whole watch. A rotating dive bezel and a fluted gold one can sit on the same case and read as completely different objects.",
  type:"image",
  options:[
    {v:"dive",  label:"Rotating dive",  sub:"Sixty-minute scale with a lume pip at zero. Turns to time anything.", img:"bezel-dive.jpg"},
    {v:"smooth",label:"Smooth polished",sub:"A plain narrow ring. Lets the dial do the talking; dresses up and down.", img:"bezel-smooth.jpg"},
    {v:"none",  label:"Barely there",   sub:"Reduced to a hairline so the dial runs nearly edge to edge.", img:"bezel-slim.jpg"},
    {v:"fluted",label:"Fluted",         sub:"Machined radial flutes, usually gold. Unapologetically formal, catches every light.", img:"bezel-fluted.jpg"},
    {v:"gmt",   label:"24-hour GMT",    sub:"Split two-tone ring numbered to 24. Day and night in two colours.", img:"bezel-gmt.jpg"},
    {v:"tachy", label:"Tachymeter",     sub:"Fixed scale for speed over distance. The chronograph's native habitat.", img:"bezel-tachymeter.jpg"},
    {v:"coin",  label:"Coin-edge / notched", sub:"Knurled and grippy, with pilot and compressor lineage.", img:"bezel-coin-edge.jpg"}
  ]},

{ id:"dc", rail:"Dial", weight:2,
  title:"What colour is the dial?",
  kicker:"Worth being honest rather than aspirational. Black and silver are easy forever; green and salmon are a mood you have to still be in two years from now.",
  type:"image",
  options:[
    {v:"black",label:"Black",           sub:"Maximum contrast, maximum legibility, zero risk. The reference answer.", img:"dial-black.jpg"},
    {v:"white",label:"White or silver", sub:"Crisp and faintly instrumental. Reads dressier than black on the same case.", img:"dial-white.jpg"},
    {v:"blue", label:"Blue",            sub:"The modern crowd-pleaser. Navy behaves like black; brighter blues are a real choice.", img:"dial-blue.jpg"},
    {v:"green",label:"Green",           sub:"From near-black forest to full emerald. Unusual enough to register as taste.", img:"dial-green.jpg"},
    {v:"warm", label:"Champagne or brown", sub:"Vintage warmth. Pairs with gold and brown leather, looks older than it is.", img:"dial-warm.jpg"}
  ]},

{ id:"ly", rail:"Layout", weight:2,
  title:"How busy should the dial be?",
  kicker:"Everything you add is a small tax on legibility and a small gain in interest. A no-date dial is the purest layout in watchmaking and also the least useful.",
  type:"image",
  options:[
    {v:"plain",  label:"Three hands, nothing else", sub:"No date, no window, perfect symmetry. The purist's answer.", img:"layout-three-hand.jpg"},
    {v:"date",   label:"Date window",               sub:"One aperture, usually at three. Mildly ruins the symmetry; you'll use it daily.", img:"layout-date.jpg"},
    {v:"chrono", label:"Chronograph",               sub:"Subdials and pushers on the case flank. Busy, mechanical, handsome.", img:"layout-chronograph.jpg"},
    {v:"gmt",    label:"Second time zone",          sub:"A fourth hand on a 24-hour track. The one complication travellers actually use.", img:"layout-gmt.jpg"},
    {v:"digital",label:"Digital display",           sub:"LCD, no hands. Alarms, timers, indestructible. A different kind of honest.", img:"layout-digital.jpg"}
  ]},

{ id:"ix", rail:"Markers", weight:2,
  title:"How are the hours marked?",
  kicker:"Markers and hands are the typography of a watch — the detail you stare at for years without naming it. This is where dress and tool really part ways.",
  type:"image",
  options:[
    {v:"baton", label:"Applied batons",       sub:"Faceted steel sticks catching light at the edges. Clean and hard to dislike.", img:"markers-baton.jpg"},
    {v:"dots",  label:"Dive plots",           sub:"Round lume blocks, bars at the quarters, a triangle at twelve.", img:"markers-dive-plots.jpg"},
    {v:"arabic",label:"Arabic numerals",      sub:"Printed or applied numbers all the way round. Open, legible, slightly bookish.", img:"markers-arabic.jpg"},
    {v:"field", label:"Full field numbering", sub:"Every hour plus an inner 13–24 track. Maximum information, military lineage.", img:"markers-field.jpg"},
    {v:"roman", label:"Roman numerals",       sub:"Formal and unmistakably classical. The dressiest thing you can print on a dial.", img:"markers-roman.jpg"}
  ]},

{ id:"st", rail:"Bracelet", weight:2,
  title:"What's it on?",
  kicker:"Changeable later, but it dictates how the watch feels more than anything except size — and a bracelet can be a quarter of what you paid.",
  type:"image",
  options:[
    {v:"oyster",    label:"Three-link steel", sub:"Brushed, flat and sturdy. The everyday default; suits almost everything.", img:"strap-oyster.jpg"},
    {v:"jubilee",   label:"Five-link steel",  sub:"Narrower polished centre links. Dressier, more fluid, slightly jewelry-ish.", img:"strap-jubilee.jpg"},
    {v:"integrated",label:"Integrated taper", sub:"Flows out of the case with no lug gap. Looks expensive; you can't swap it.", img:"strap-integrated.jpg"},
    {v:"leather",   label:"Leather",          sub:"Warm, light, quiet. Dresses anything up and wears out every couple of years.", img:"strap-leather.jpg"},
    {v:"nato",      label:"Fabric or NATO",   sub:"One pass-through strap, cheap to swap, nothing to scratch. Pure utility.", img:"strap-nato.jpg"},
    {v:"mesh",      label:"Milanese mesh",    sub:"Fine woven steel. Smooth on the wrist and infinitely adjustable.", img:"strap-mesh.jpg"},
    {v:"rubber",    label:"Rubber",           sub:"Pool, shower, sweat, ocean. Modern rubber is genuinely nice, not a compromise.", img:"strap-rubber.jpg"}
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
  E:{min:6000, max:15000, label:"$6,000 – $15,000"}
};

/* s=slug n=model b=brand p=price · sz size sh shape bz bezel dc dial
   ly layout ix markers st straps mv movement vb vibes bt brand tier    */
const WATCHES = [

/* ---------- under $250 ---------- */
{s:"casio-f91w",n:"F-91W",b:"Casio",p:25,sz:"s",sh:"rect",bz:"none",dc:"black",ly:"digital",ix:"baton",st:["rubber"],mv:"digital",vb:["statement","tool"],bt:"value",
 sp:["38 × 35 mm","Water resistant","Digital · 7-year cell"],w:"A plastic rectangle that costs less than lunch and has been worn by teenagers, soldiers and heads of state alike. An alarm, a stopwatch, a seven-year battery, and absolutely nothing to worry about."},
{s:"casio-gshock-5600",n:"G-Shock DW-5600E",b:"Casio",p:70,sz:"m",sh:"cushion",bz:"none",dc:"black",ly:"digital",ix:"baton",st:["rubber"],mv:"digital",vb:["tool"],bt:"value",
 sp:["42.8 mm","200 m","Digital module"],w:"The square. Forty years essentially unchanged because there was nothing to fix — a ten-year battery, a stopwatch, and a resin case that shrugs off things which would end a steel watch."},
{s:"vostok-amphibia",n:"Amphibia",b:"Vostok",p:120,sz:"l",sh:"cushion",bz:"dive",dc:"blue",ly:"plain",ix:"dots",st:["mesh","nato","oyster"],mv:"auto",vb:["tool","statement"],bt:"value",
 sp:["40 mm cushion","200 m","Vostok auto"],w:"Soviet dive-watch engineering still in production, with a crystal designed to deform under pressure and seal tighter the deeper you go. Crude, charming, fully mechanical, and about the price of a nice dinner."},
{s:"seiko-snk809",n:"5 Sports SNK809",b:"Seiko",p:130,sz:"s",sh:"round",bz:"none",dc:"black",ly:"date",ix:"field",st:["nato"],mv:"auto",vb:["tool"],bt:"value",
 sp:["37 mm","Day-date","Seiko 7S26 auto"],w:"The watch that has started more collections than any other. A 37 mm field dial on a canvas strap, fully mechanical, with the rotor visible through the back, for about what a bar tab costs."},
{s:"timex-q",n:"Q Timex Reissue",b:"Timex",p:189,sz:"m",sh:"round",bz:"gmt",dc:"black",ly:"date",ix:"baton",st:["jubilee"],mv:"quartz",vb:["statement"],bt:"value",
 sp:["38 mm","Rotating bezel","Quartz"],w:"A faithful 1979 reissue with a rotating red-and-blue bezel and a five-link bracelet. Nobody will mistake it for anything expensive, and that is precisely the charm."},

/* ---------- $250 – $750 ---------- */
{s:"orient-kamasu",n:"Kamasu",b:"Orient",p:300,sz:"l",sh:"round",bz:"dive",dc:"black",ly:"date",ix:"dots",st:["oyster"],mv:"auto",vb:["tool","one"],bt:"value",
 sp:["41.8 mm","200 m","Sapphire · F6922 auto"],w:"Sapphire crystal, 200 metres, a hacking automatic movement and a proper bracelet at three hundred dollars. On paper it should cost twice this."},
{s:"citizen-promaster",n:"Promaster Diver",b:"Citizen",p:325,sz:"xl",sh:"round",bz:"dive",dc:"black",ly:"date",ix:"dots",st:["nato","rubber"],mv:"solar",vb:["tool"],bt:"house",
 sp:["44 mm","200 m ISO","Eco-Drive solar"],w:"ISO-rated, solar-powered, and it never needs a battery or a wind. The closest thing to a watch you buy once, ignore completely, and still trust in thirty years."},
{s:"mondaine-railways",n:"Official Swiss Railways",b:"Mondaine",p:350,sz:"l",sh:"round",bz:"none",dc:"white",ly:"plain",ix:"baton",st:["leather"],mv:"quartz",vb:["dress","statement"],bt:"house",
 sp:["40 mm","Hilfiker dial","Quartz"],w:"Hans Hilfiker's 1944 station clock shrunk onto a wrist, red seconds paddle and all. One of the very few dials that is genuinely a piece of graphic-design history."},
{s:"tissot-prx-quartz",n:"PRX Quartz",b:"Tissot",p:375,sz:"l",sh:"integrated",bz:"smooth",dc:"white",ly:"date",ix:"baton",st:["integrated"],mv:"quartz",vb:["one","dress"],bt:"house",
 sp:["40 mm","Waffle dial","Swiss quartz"],w:"The seventies integrated-bracelet look for under four hundred dollars, in a case barely 7 mm thick. The quartz version is the value play of the entire genre."},
{s:"bulova-lunar-pilot",n:"Lunar Pilot",b:"Bulova",p:495,sz:"xl",sh:"round",bz:"tachy",dc:"black",ly:"chrono",ix:"baton",st:["leather","oyster"],mv:"quartz",vb:["statement","tool"],bt:"house",
 sp:["43.5 mm","262 kHz quartz","Chronograph"],w:"A reissue of the chronograph Dave Scott actually wore on the lunar surface, running a high-frequency quartz movement accurate to a fraction of a second. Enormous, and completely justified."},
{s:"hamilton-khaki-mech",n:"Khaki Field Mechanical",b:"Hamilton",p:550,sz:"m",sh:"round",bz:"none",dc:"black",ly:"plain",ix:"field",st:["nato"],mv:"hand",vb:["tool"],bt:"house",
 sp:["38 mm","Hand-wound H-50","80 h reserve"],w:"A direct descendant of the US military field watch, hand-wound with an eighty-hour reserve. Thirty-eight millimetres, no date, no nonsense — arguably the best 500-dollar watch made."},
{s:"tissot-prx-auto",n:"PRX Powermatic 80",b:"Tissot",p:725,sz:"l",sh:"integrated",bz:"smooth",dc:"black",ly:"date",ix:"baton",st:["integrated"],mv:"auto",vb:["one","dress"],bt:"house",
 sp:["40 mm","Powermatic 80","80 h reserve"],w:"The watch that restarted the integrated-bracelet craze. An eighty-hour Swiss automatic and a bracelet that genuinely feels machined, for the price of a decent coat."},
{s:"hamilton-khaki-auto",n:"Khaki Field Auto",b:"Hamilton",p:745,sz:"m",sh:"round",bz:"coin",dc:"black",ly:"date",ix:"field",st:["nato","leather"],mv:"auto",vb:["tool","one"],bt:"house",
 sp:["38 mm","100 m","H-10 auto · 80 h"],w:"The hand-wound Khaki's automatic sibling, with a date and the same eighty-hour movement. If you want one mechanical watch to beat up and never think about, this is the shortlist."},

/* ---------- $750 – $2,000 ---------- */
{s:"seiko-alpinist",n:"Prospex Alpinist",b:"Seiko",p:875,sz:"m",sh:"round",bz:"coin",dc:"green",ly:"date",ix:"arabic",st:["oyster","leather"],mv:"auto",vb:["one"],bt:"house",
 sp:["39.5 mm","200 m","6R35 · inner compass"],w:"Deep green dial, gold cathedral hands, and an inner rotating compass bezel on a second crown. A mountaineering watch that reads as dressy, which is a combination almost nobody else attempts."},
{s:"stowa-flieger",n:"Flieger Classic",b:"Stowa",p:1000,sz:"l",sh:"round",bz:"none",dc:"black",ly:"plain",ix:"arabic",st:["leather"],mv:"auto",vb:["tool","statement"],bt:"indie",
 sp:["40 mm","Type-A dial","Sellita auto"],w:"The German pilot dial in its purest form: huge white numerals, a triangle at twelve, and nothing else at all. Stowa were making these in the 1940s, which is more than most reissues can claim."},
{s:"junghans-max-bill",n:"Max Bill Automatic",b:"Junghans",p:1190,sz:"m",sh:"round",bz:"none",dc:"white",ly:"date",ix:"baton",st:["leather"],mv:"auto",vb:["dress","statement"],bt:"house",
 sp:["38 mm","Domed plexiglass","J800.1 auto"],w:"Bauhaus on the wrist, designed by Max Bill in the 1950s and essentially unchanged since. The heavily domed plexiglass distorts the dial at the edges, and that is entirely the point."},
{s:"sinn-556",n:"556 I",b:"Sinn",p:1560,sz:"m",sh:"round",bz:"smooth",dc:"black",ly:"date",ix:"baton",st:["oyster","leather"],mv:"auto",vb:["one","tool"],bt:"indie",
 sp:["38.5 mm","200 m","Sellita auto"],w:"German instrument-watch logic applied to a plain black three-hander: anti-magnetic, 200 metres, and visually almost anonymous. The quiet one-watch answer."},

/* ---------- $2,000 – $6,000 ---------- */
{s:"oris-aquis",n:"Aquis",b:"Oris",p:2200,sz:"l",sh:"round",bz:"dive",dc:"black",ly:"date",ix:"dots",st:["rubber","oyster"],mv:"auto",vb:["tool","one"],bt:"house",
 sp:["41.5 mm","300 m","Ceramic bezel"],w:"A proper modern Swiss diver with a ceramic bezel, built to a standard that makes the price look almost conservative. Oris's quiet workhorse."},
{s:"nomos-tangente",n:"Tangente 38",b:"Nomos",p:2420,sz:"m",sh:"round",bz:"none",dc:"white",ly:"plain",ix:"arabic",st:["leather"],mv:"hand",vb:["dress","statement"],bt:"indie",
 sp:["37.5 mm","6.2 mm thin","In-house Alpha"],w:"The defining modern Bauhaus watch: a white dial, a long slim seconds subdial at six, and typography so good it gets taught. Six millimetres thin and almost weightless."},
{s:"longines-legend-diver",n:"Legend Diver",b:"Longines",p:3100,sz:"m",sh:"round",bz:"coin",dc:"green",ly:"plain",ix:"arabic",st:["leather","mesh"],mv:"auto",vb:["statement","one"],bt:"house",
 sp:["39 mm","300 m","Inner rotating bezel"],w:"A 1960s super-compressor reissue with no external bezel at all — just an internal timing ring turned by a second crown. Distinctive without being loud."},
{s:"cartier-tank-must",n:"Tank Must",b:"Cartier",p:3150,sz:"s",sh:"rect",bz:"none",dc:"warm",ly:"plain",ix:"roman",st:["leather"],mv:"quartz",vb:["dress","statement"],bt:"house",
 sp:["25.5 × 34 mm","Roman dial","Quartz"],w:"The most recognisable rectangular watch in the world, in its most affordable form. Worn by everyone from Warhol to Diana, and it still looks like a drawing of a watch rather than a machine."},
{s:"longines-zulu",n:"Spirit Zulu Time",b:"Longines",p:3250,sz:"m",sh:"round",bz:"gmt",dc:"blue",ly:"gmt",ix:"baton",st:["oyster","leather"],mv:"auto",vb:["one"],bt:"house",
 sp:["39 mm","100 m","True GMT · COSC"],w:"A true-GMT movement — the local hour hand jumps independently — with a ceramic 24-hour bezel, at roughly a third of what the obvious alternative costs. The traveller's value play."},
{s:"tag-carrera",n:"Carrera Automatic",b:"TAG Heuer",p:4250,sz:"m",sh:"round",bz:"smooth",dc:"black",ly:"date",ix:"baton",st:["leather","oyster"],mv:"auto",vb:["one","dress"],bt:"house",
 sp:["39 mm","100 m","Automatic"],w:"Jack Heuer's 1963 racing design in a clean three-hand case. More wearable, and considerably less shouty, than the chronographs that share its name."},
{s:"tudor-bb58",n:"Black Bay 58",b:"Tudor",p:4275,sz:"m",sh:"round",bz:"dive",dc:"blue",ly:"plain",ix:"dots",st:["oyster","nato"],mv:"auto",vb:["one","tool"],bt:"house",
 sp:["39 mm","200 m","COSC MT5402 · 70 h"],w:"Thirty-nine millimetres, no date, chronometer-certified in-house movement. The watch most often recommended to someone who wants one good watch and then wants to stop reading about watches."},

/* ---------- $6,000 and up ---------- */
{s:"omega-aqua-terra",n:"Seamaster Aqua Terra",b:"Omega",p:6200,sz:"m",sh:"round",bz:"smooth",dc:"blue",ly:"date",ix:"baton",st:["oyster","leather"],mv:"auto",vb:["one","dress"],bt:"house",
 sp:["38 mm","150 m","Co-Axial Master Chronometer"],w:"A teak-patterned dial, a 15,000-gauss antimagnetic movement and METAS certification, in a case that works with a suit or a swim. The quiet, sensible, extremely good answer."},
{s:"gs-sbga011",n:"SBGA011 Spring Drive",b:"Grand Seiko",p:6400,sz:"l",sh:"round",bz:"smooth",dc:"warm",ly:"date",ix:"baton",st:["oyster"],mv:"auto",vb:["dress","statement"],bt:"house",
 sp:["40.2 mm","Spring Drive","Zaratsu-polished case"],w:"Spring Drive is neither quartz nor quite mechanical: a mainspring drives it, but an electronic brake regulates it, so the seconds hand glides instead of ticking. The case facets are polished by hand until they look liquid."},
{s:"omega-speedmaster",n:"Speedmaster Professional",b:"Omega",p:7000,sz:"xl",sh:"round",bz:"tachy",dc:"black",ly:"chrono",ix:"baton",st:["oyster","leather"],mv:"hand",vb:["statement","one"],bt:"house",
 sp:["42 mm","Hand-wound 3861","Hesalite or sapphire"],w:"Flight-qualified by NASA for all manned missions and worn on the moon, still hand-wound, still essentially the 1960s design. The most historically loaded watch you can buy new."},
{s:"rolex-explorer",n:"Explorer",b:"Rolex",p:7900,sz:"s",sh:"round",bz:"smooth",dc:"black",ly:"plain",ix:"arabic",st:["oyster"],mv:"auto",vb:["one","dress"],bt:"house",
 sp:["36 mm","100 m","3230 · 70 h"],w:"Black dial, 3-6-9 numerals, no date, no bezel action. The least showy Rolex and, to a certain kind of person, the only one worth owning."},
{s:"jlc-reverso",n:"Reverso Classic",b:"Jaeger-LeCoultre",p:8100,sz:"m",sh:"rect",bz:"none",dc:"white",ly:"plain",ix:"arabic",st:["leather"],mv:"hand",vb:["dress","statement"],bt:"house",
 sp:["45.6 × 27.4 mm","Case flips in its cradle","Hand-wound"],w:"Designed in 1931 so polo players could flip the dial inward and protect it. The case still swivels, the art-deco gadroons are still there, and nothing else on a wrist does this."},
{s:"cartier-santos",n:"Santos",b:"Cartier",p:8200,sz:"m",sh:"integrated",bz:"smooth",dc:"white",ly:"date",ix:"roman",st:["integrated"],mv:"auto",vb:["statement","dress"],bt:"house",
 sp:["35.1 × 41.9 mm","Exposed bezel screws","Automatic"],w:"The first purpose-built pilot's watch, from 1904, now a squared integrated-bracelet design with exposed screws around the bezel. Dressy and sporty at once, which almost nothing manages."},
{s:"rolex-datejust",n:"Datejust",b:"Rolex",p:8600,sz:"s",sh:"round",bz:"fluted",dc:"warm",ly:"date",ix:"baton",st:["jubilee","oyster"],mv:"auto",vb:["dress","one"],bt:"house",
 sp:["36 mm","Fluted bezel","Cyclops date"],w:"Eighty years of being the default good watch. A fluted bezel, a jubilee bracelet and a cyclops over the date — formal, instantly readable by anyone, and available in endless dial variants."},
{s:"panerai-luminor",n:"Luminor Marina",b:"Panerai",p:8600,sz:"xl",sh:"cushion",bz:"none",dc:"black",ly:"plain",ix:"arabic",st:["leather"],mv:"auto",vb:["statement"],bt:"house",
 sp:["44 mm cushion","300 m","Crown-protecting lever"],w:"A 44 mm cushion case with a crown-locking lever and a sandwich dial that glows like a torch. Descended from Italian naval frogman equipment, and it has never once pretended to be subtle."},
{s:"breitling-navitimer",n:"Navitimer",b:"Breitling",p:9500,sz:"l",sh:"round",bz:"coin",dc:"black",ly:"chrono",ix:"baton",st:["oyster","leather"],mv:"auto",vb:["statement"],bt:"house",
 sp:["41 mm","Circular slide rule","Chronograph"],w:"A working circular slide rule wrapped around a three-register chronograph, designed in 1952 so pilots could compute fuel burn mid-flight. Spectacularly busy, and completely earned."},
{s:"rolex-submariner",n:"Submariner",b:"Rolex",p:10900,sz:"l",sh:"round",bz:"dive",dc:"black",ly:"date",ix:"dots",st:["oyster"],mv:"auto",vb:["one","tool"],bt:"house",
 sp:["41 mm","300 m","Ceramic bezel"],w:"The archetype every other dive watch is measured against, and the reason this page has a dive-bezel option at all. Over-specified, over-exposed, and still very hard to argue with."},
{s:"rolex-gmt",n:"GMT-Master II",b:"Rolex",p:11200,sz:"l",sh:"round",bz:"gmt",dc:"black",ly:"gmt",ix:"dots",st:["jubilee","oyster"],mv:"auto",vb:["one","statement"],bt:"house",
 sp:["40 mm","100 m","Two-colour ceramic bezel"],w:"Built in 1955 for Pan Am crews crossing time zones, and the origin of the two-tone bezel entirely. The red-and-blue version is probably the most desired steel watch on earth."},
{s:"fifty-fathoms",n:"Fifty Fathoms",b:"Blancpain",p:14500,sz:"m",sh:"round",bz:"dive",dc:"black",ly:"plain",ix:"baton",st:["nato","rubber"],mv:"auto",vb:["statement","tool"],bt:"house",
 sp:["38 – 42 mm","300 m","Automatic"],w:"The 1953 watch that actually invented the modern dive watch, a year before the Submariner — a locking rotating bezel, a moisture indicator, and a military pedigree. The connoisseur's version of this answer."},
{s:"ap-royal-oak",n:"Royal Oak",b:"Audemars Piguet",p:28000,sz:"l",sh:"integrated",bz:"coin",dc:"blue",ly:"date",ix:"baton",st:["integrated"],mv:"auto",vb:["statement"],bt:"house",
 sp:["41 mm","Octagonal bezel","Tapisserie dial"],w:"Gérald Genta's 1972 design that made steel cost more than gold: an octagonal bezel with eight exposed hexagonal screws over a waffle-pressed dial. The ceiling of this entire exercise."}
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
  "title": "Rolex-Submariner.jpg",
  "author": "FrankWilliams",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex-Submariner.jpg"
 },
 {
  "title": "Rolex Datejust 16013.jpg",
  "author": "anna2005",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex_Datejust_16013.jpg"
 },
 {
  "title": "Rolex GMT Master II - 16710 (without background).jpg",
  "author": "File:Rolex GMT Master II - 16710 in it sitting on top of the box.jpg: Peter WILSON\nderivative work: Pittigrilli",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex_GMT_Master_II_-_16710_(without_background).jpg"
 },
 {
  "title": "Junghans Max Bill Uhr.jpg",
  "author": "Uhrenfabrik Junghans",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Junghans_Max_Bill_Uhr.jpg"
 },
 {
  "title": "Omega Seamaster Aqua Terra realizzato per commemorare le olimpiadi di Tokyo 2020.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Omega_Seamaster_Aqua_Terra_realizzato_per_commemorare_le_olimpiadi_di_Tokyo_2020.jpg"
 },
 {
  "title": "Classic Speedy (24067321725).jpg",
  "author": "Daniel Zimmermann from Bayern, Deutschland (Germany)",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Classic_Speedy_(24067321725).jpg"
 },
 {
  "title": "PANERAI (29802698304).jpg",
  "author": "Daniel Zimmermann from Bayern, Deutschland (Germany)",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:PANERAI_(29802698304).jpg"
 },
 {
  "title": "Audemars Piguet Royal Oak ref. 15202.jpg",
  "author": "OpaleHorse",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Audemars_Piguet_Royal_Oak_ref._15202.jpg"
 },
 {
  "title": "Jaeger-LeCoultre Reverso, anni 2000.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Jaeger-LeCoultre_Reverso,_anni_2000.jpg"
 },
 {
  "title": "152-rolex-explorer-ref-14270-circa-2001-mostra-store-aix-montres-vintage.jpg",
  "author": "Thierry Mostra-store",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:152-rolex-explorer-ref-14270-circa-2001-mostra-store-aix-montres-vintage.jpg"
 },
 {
  "title": "SINN (30468374062).jpg",
  "author": "Daniel Zimmermann from Bayern, Deutschland (Germany)",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:SINN_(30468374062).jpg"
 },
 {
  "title": "Tudor Pelagos for Carolina Watch Club on Wrist.jpg",
  "author": "OpaleHorse",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tudor_Pelagos_for_Carolina_Watch_Club_on_Wrist.jpg"
 },
 {
  "title": "Seiko Prospex Alpinist01bs.jpg",
  "author": "663highland",
  "license": "CC BY 2.5",
  "page": "https://commons.wikimedia.org/wiki/File:Seiko_Prospex_Alpinist01bs.jpg"
 },
 {
  "title": "Grand Seiko SBGA011.jpg",
  "author": "Faustine seiko",
  "license": "CC BY-SA 3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Grand_Seiko_SBGA011.jpg"
 },
 {
  "title": "Nomos Glashütte Tangente neomatik 41 Update.jpg",
  "author": "Berlinerblau",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Nomos_Glash%C3%BCtte_Tangente_neomatik_41_Update.jpg"
 },
 {
  "title": "Bulova Lunar Pilot.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Bulova_Lunar_Pilot.jpg"
 },
 {
  "title": "TAG Heuer Carrera Calibre 5, anni 2010.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:TAG_Heuer_Carrera_Calibre_5,_anni_2010.jpg"
 },
 {
  "title": "CASIO G-Shock GW-M5610U.jpg",
  "author": "Md. Rifat Hasan Jihan",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:CASIO_G-Shock_GW-M5610U.jpg"
 },
 {
  "title": "Longines Spirit Zulu Time.jpg",
  "author": "Clyde94",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Longines_Spirit_Zulu_Time.jpg"
 },
 {
  "title": "Laco Faro B-Muster, designed after Beobachtungsuhr Fliegeruhr Pilotenuhr of WWII (cropped to casing).jpg",
  "author": "Chrononautix",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Laco_Faro_B-Muster,_designed_after_Beobachtungsuhr_Fliegeruhr_Pilotenuhr_of_WWII_(cropped_to_casing).jpg"
 },
 {
  "title": "Seiko SNK809.jpg",
  "author": "Soulreaper",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Seiko_SNK809.jpg"
 },
 {
  "title": "Cartier Santos 1988.jpg",
  "author": "Noop1958",
  "license": "CC BY-SA 3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Cartier_Santos_1988.jpg"
 },
 {
  "title": "Cartier Tank Americaine automatico in acciaio.jpg",
  "author": "EMore98",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Cartier_Tank_Americaine_automatico_in_acciaio.jpg"
 },
 {
  "title": "Rolex GMT Master II 116710BLNR Batman.jpg",
  "author": "gabihil",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Rolex_GMT_Master_II_116710BLNR_Batman.jpg"
 },
 {
  "title": "Citizen Promaster Eco-Drive AP0440-14F Diver's 200 m (edited, cropped to casing).jpg",
  "author": "File:Citizen Promaster Eco-Drive AP0440-14F Diver's 200 m on a 4-ring NATO style strap.JPG: Francis Flinch\nderivative work: Pittigrilli",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Citizen_Promaster_Eco-Drive_AP0440-14F_Diver%27s_200_m_(edited,_cropped_to_casing).jpg"
 },
 {
  "title": "Cartier Tank Must XL automatico.jpg",
  "author": "EMore98",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Cartier_Tank_Must_XL_automatico.jpg"
 },
 {
  "title": "Vostok Amphibia 090916.jpg",
  "author": "Spritrig",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Vostok_Amphibia_090916.jpg"
 },
 {
  "title": "Hamilton Khaki Field.jpg",
  "author": "EMore98",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Hamilton_Khaki_Field.jpg"
 },
 {
  "title": "Oris Aquis Depth Gauge.jpeg",
  "author": "Rechteinhaber: Oris\n\nFotograf: Olaf Köster",
  "license": "CC BY-SA 3.0 de",
  "page": "https://commons.wikimedia.org/wiki/File:Oris_Aquis_Depth_Gauge.jpeg"
 },
 {
  "title": "Tudor Pelagos for Carolina Watch Club Limited Edition.jpg",
  "author": "OpaleHorse",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tudor_Pelagos_for_Carolina_Watch_Club_Limited_Edition.jpg"
 },
 {
  "title": "Breitling Navitimer 806 E last version.jpg",
  "author": "PAPPL",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Breitling_Navitimer_806_E_last_version.jpg"
 },
 {
  "title": "Casio F-91W watch (2023) (front closeup - time) (minor retouch).jpg",
  "author": "Multicherry",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Casio_F-91W_watch_(2023)_(front_closeup_-_time)_(minor_retouch).jpg"
 },
 {
  "title": "Blancpain.jpg",
  "author": "Johnson Watch",
  "license": "Public domain",
  "page": "https://commons.wikimedia.org/wiki/File:Blancpain.jpg"
 },
 {
  "title": "Wikipedia-DE-Longines-Legend-Diver-Bronze-1024.jpg",
  "author": "Minzoblate",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Wikipedia-DE-Longines-Legend-Diver-Bronze-1024.jpg"
 },
 {
  "title": "Mondaine Classic A669.30008.16SBO watch.jpg",
  "author": "DimiTalen",
  "license": "CC0",
  "page": "https://commons.wikimedia.org/wiki/File:Mondaine_Classic_A669.30008.16SBO_watch.jpg"
 },
 {
  "title": "ORIENT New Mako Automatic 200M Diver's CEM75001B. (5921299415).jpg",
  "author": "MIKI Yoshihito from Sapporo City,Hokkaido., JAPAN",
  "license": "CC BY 2.0",
  "page": "https://commons.wikimedia.org/wiki/File:ORIENT_New_Mako_Automatic_200M_Diver%27s_CEM75001B._(5921299415).jpg"
 },
 {
  "title": "Timex Q Reissue ref. TW2V32100.jpg",
  "author": "EMore98",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Timex_Q_Reissue_ref._TW2V32100.jpg"
 },
 {
  "title": "Tissot PRX 35mm.jpg",
  "author": "Soulreaper",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tissot_PRX_35mm.jpg"
 },
 {
  "title": "Tissot PRX collection one 23 January 2025 Philippines7.jpg",
  "author": "Unknown",
  "license": "CC BY-SA 4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tissot_PRX_collection_one_23_January_2025_Philippines7.jpg"
 }
];
