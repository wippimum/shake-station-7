// SHAKE STATION 7 — vector diagram library
// Palette: slate #33414a  ochre #c98b3a  coral #e8553e  cream #f7f1e3  sand #e3d5b8
const C = { ink:'#33414a', ochre:'#c98b3a', coral:'#e8553e', cream:'#faf5e9', sand:'#e6d7ba', deep:'#1f2a30', sea:'#8fb3bf', green:'#7d9471' };

// --- world map helpers (equirectangular) ---
const MW = 800, MH = 400;
const px = lon => (lon + 180) * (MW / 360);
const py = lat => (90 - lat) * (MH / 180);
const poly = (pts, fill, stroke, sw) =>
  `<polygon points="${pts.map(p => px(p[0]).toFixed(1) + ',' + py(p[1]).toFixed(1)).join(' ')}" fill="${fill}" stroke="${stroke||C.ink}" stroke-width="${sw||1.4}" stroke-linejoin="round"/>`;

const LAND = {
  namerica: [[-168,66],[-158,71],[-130,70],[-100,72],[-80,73],[-62,60],[-55,47],[-66,44],[-76,35],[-81,25],[-97,26],[-105,20],[-114,30],[-124,40],[-124,48],[-136,58],[-152,60],[-168,66]],
  samerica: [[-92,15],[-83,9],[-77,8],[-60,10],[-50,0],[-35,-6],[-39,-16],[-48,-25],[-58,-38],[-63,-42],[-70,-53],[-75,-52],[-73,-40],[-71,-20],[-80,-5],[-78,2],[-84,10],[-92,15]],
  africa: [[-17,15],[-16,22],[-10,30],[0,36],[10,37],[20,32],[32,31],[35,25],[43,12],[51,11],[42,-2],[40,-15],[35,-25],[25,-34],[18,-34],[12,-18],[9,-1],[8,4],[-5,5],[-13,9],[-17,15]],
  eurasia: [[-10,36],[0,44],[-5,49],[-2,58],[10,58],[5,62],[20,70],[40,72],[70,75],[100,78],[135,73],[160,70],[178,66],[178,60],[160,57],[142,50],[130,42],[122,30],[110,20],[105,9],[100,13],[95,16],[89,22],[80,9],[72,20],[62,25],[50,30],[36,37],[28,40],[16,38],[12,45],[3,43],[-10,36]],
  australia: [[113,-22],[114,-34],[129,-32],[138,-35],[146,-39],[151,-37],[153,-28],[145,-15],[135,-12],[130,-11],[125,-14],[113,-22]],
  antarctica: [[-180,-70],[-150,-75],[-100,-73],[-60,-64],[-20,-70],[20,-70],[60,-67],[110,-66],[150,-70],[180,-72],[180,-88],[-180,-88]],
  greenland: [[-55,60],[-45,60],[-20,70],[-22,82],[-45,84],[-58,82],[-58,70],[-55,60]]
};

const worldLand = (fill) => Object.values(LAND).map(p => poly(p, fill || C.sand)).join('');

const grid = () => {
  let g = '';
  for (let lon = -180; lon <= 180; lon += 30) g += `<line x1="${px(lon)}" y1="0" x2="${px(lon)}" y2="${MH}" stroke="${C.ink}" stroke-width="0.4" opacity="0.28"/>`;
  for (let lat = -90; lat <= 90; lat += 30) g += `<line x1="0" y1="${py(lat)}" x2="${MW}" y2="${py(lat)}" stroke="${C.ink}" stroke-width="0.4" opacity="0.28"/>`;
  g += `<line x1="0" y1="${py(0)}" x2="${MW}" y2="${py(0)}" stroke="${C.ink}" stroke-width="1" opacity="0.5" stroke-dasharray="6 4"/>`;
  for (let lon = -180; lon <= 180; lon += 60) g += `<text x="${px(lon)+3}" y="${MH-5}" font-size="10" fill="${C.ink}" opacity="0.6">${Math.abs(lon)}${lon<0?'W':lon>0?'E':''}</text>`;
  for (let lat = -60; lat <= 60; lat += 30) g += `<text x="3" y="${py(lat)-3}" font-size="10" fill="${C.ink}" opacity="0.6">${Math.abs(lat)}${lat<0?'S':lat>0?'N':''}</text>`;
  return g;
};

// plate boundary lines (approximate, teaching-grade)
const PLATE_LINES = [
  [[-30,65],[-28,45],[-25,20],[-20,0],[-14,-20],[-13,-40],[-16,-55],[-5,-58],[20,-55],[60,-50],[90,-52],[120,-58],[150,-60],[170,-62]],
  [[170,-62],[178,-30],[175,-20],[178,0],[172,10],[150,5],[140,-8],[130,-8],[125,5],[122,15],[126,28],[135,40],[145,45],[155,52],[165,55],[178,58]],
  [[-168,55],[-150,58],[-135,52],[-127,45],[-120,34],[-110,24],[-105,15],[-95,15],[-85,10],[-78,5],[-73,-10],[-72,-30],[-70,-45],[-68,-55]],
  [[-16,-55],[-70,-58],[-68,-55]],
  [[-10,36],[15,38],[30,36],[45,38],[60,32],[75,32],[90,28],[100,22],[110,15]],
  [[35,32],[38,20],[42,12],[45,-5],[38,-15],[35,-30]],
  [[-180,50],[-168,55]]
];
const plateLines = (stroke, w, dash) => PLATE_LINES.map(l =>
  `<polyline points="${l.map(p => px(p[0]).toFixed(1)+','+py(p[1]).toFixed(1)).join(' ')}" fill="none" stroke="${stroke||C.coral}" stroke-width="${w||2.6}" stroke-linecap="round" stroke-linejoin="round" ${dash?`stroke-dasharray="${dash}"`:''}/>`).join('');

const QUAKES = [
  ['Valdivia',-73,-38],['Anchorage',-148,61],['Tohoku',143,38],['Sumatra',96,3],['Kamchatka',160,52],
  ['Maule',-73,-36],['Cascadia',-125,45],['Luzon',121,16],['Tonga',-175,-20],['Michoacan',-102,18]
];

const ART = {};

const wrap = (inner, vb) => `<svg viewBox="${vb||'0 0 800 400'}" xmlns="http://www.w3.org/2000/svg" class="fig">${inner}</svg>`;

// ---------- 1. COVER ----------
ART.cover = () => wrap(`
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dfe8ea"/><stop offset="100%" stop-color="${C.cream}"/></linearGradient></defs>
  <rect width="800" height="400" fill="url(#sky)"/>
  <circle cx="640" cy="90" r="28" fill="none" stroke="${C.ochre}" stroke-width="2"/>
  <path d="M0 300 Q 120 292 240 300 T 480 302 T 800 296 L800 400 L0 400Z" fill="${C.sea}" opacity="0.5"/>
  <path d="M0 400 L0 250 L90 236 L170 258 L250 232 L330 268 L400 250 L400 400Z" fill="${C.ochre}" opacity="0.35" stroke="${C.ink}" stroke-width="1.5"/>
  <path d="M400 400 L400 250 L470 262 L560 238 L650 266 L740 244 L800 262 L800 400Z" fill="${C.ochre}" opacity="0.22" stroke="${C.ink}" stroke-width="1.5"/>
  <g transform="translate(250,180)">
    <rect x="0" y="0" width="120" height="70" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>
    <path d="M-12 0 L60 -34 L132 0 Z" fill="${C.coral}" opacity="0.75" stroke="${C.ink}" stroke-width="2.5"/>
    <rect x="18" y="22" width="30" height="26" fill="${C.sea}" stroke="${C.ink}" stroke-width="2"/>
    <rect x="72" y="22" width="30" height="48" fill="${C.ink}" opacity="0.75"/>
    <line x1="60" y1="-34" x2="60" y2="-80" stroke="${C.ink}" stroke-width="2.5"/>
    <circle cx="60" cy="-84" r="5" fill="${C.coral}"/>
    <text x="60" y="60" font-size="13" text-anchor="middle" fill="${C.ink}" font-weight="700">7</text>
  </g>
  <g transform="translate(60,340)">
    <text font-size="11" fill="${C.ink}" opacity="0.75">FAULT LINE</text>
    <path d="M0 10 L60 22 L120 6 L190 26 L260 8 L330 24" fill="none" stroke="${C.coral}" stroke-width="3" stroke-dasharray="10 6"/>
  </g>
  <g transform="translate(430,60)">
    <rect x="0" y="0" width="320" height="86" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.6" opacity="0.92"/>
    <text x="10" y="18" font-size="10" fill="${C.ink}" opacity="0.7">LIVE TRACE — STATION 7</text>
    <path d="M10 55 L300 55" stroke="${C.ink}" stroke-width="1.6"/>
    <text x="10" y="76" font-size="9" fill="${C.ink}" opacity="0.6">flat for 11 months</text>
  </g>`);

// ---------- 2. EARTH LAYERS ----------
ART.layers = () => wrap(`
  <g transform="translate(240,200)">
    <circle r="170" fill="${C.ochre}" opacity="0.30" stroke="${C.ink}" stroke-width="2"/>
    <circle r="118" fill="${C.ochre}" opacity="0.55" stroke="${C.ink}" stroke-width="1.6"/>
    <circle r="62" fill="${C.coral}" opacity="0.55" stroke="${C.ink}" stroke-width="1.6"/>
    <circle r="30" fill="${C.coral}" stroke="${C.ink}" stroke-width="1.6"/>
    <circle r="176" fill="none" stroke="${C.ink}" stroke-width="5"/>
    <path d="M0 -176 A176 176 0 0 1 0 176" fill="none" stroke="${C.ink}" stroke-width="0"/>
  </g>
  <g stroke="${C.ink}" stroke-width="1.1" fill="none">
    <line x1="240" y1="24" x2="560" y2="24"/><line x1="240" y1="90" x2="560" y2="90"/>
    <line x1="278" y1="150" x2="560" y2="150"/><line x1="252" y1="200" x2="560" y2="200"/>
  </g>
  <g font-size="15" fill="${C.ink}">
    <text x="566" y="28" font-weight="700">CRUST</text>
    <text x="566" y="44" font-size="11" opacity="0.75">5 to 70 km. Thinner than an eggshell.</text>
    <text x="566" y="94" font-weight="700">MANTLE</text>
    <text x="566" y="110" font-size="11" opacity="0.75">2900 km. Solid rock that creeps.</text>
    <text x="566" y="154" font-weight="700">OUTER CORE</text>
    <text x="566" y="170" font-size="11" opacity="0.75">2200 km. Genuinely liquid metal.</text>
    <text x="566" y="204" font-weight="700">INNER CORE</text>
    <text x="566" y="220" font-size="11" opacity="0.75">1200 km. Solid iron. About 5000 C.</text>
  </g>
  <g transform="translate(566,268)">
    <rect x="0" y="0" width="224" height="96" fill="none" stroke="${C.ink}" stroke-width="1.2" stroke-dasharray="4 3"/>
    <text x="10" y="20" font-size="11" fill="${C.ink}" font-weight="700">DEEPEST HOLE EVER DUG</text>
    <line x1="12" y1="34" x2="12" y2="84" stroke="${C.ink}" stroke-width="1"/>
    <line x1="12" y1="34" x2="18" y2="34" stroke="${C.coral}" stroke-width="4"/>
    <text x="26" y="40" font-size="10" fill="${C.coral}">12 km  (us)</text>
    <line x1="12" y1="60" x2="60" y2="60" stroke="${C.ink}" stroke-width="4"/>
    <text x="68" y="64" font-size="10" fill="${C.ink}">35 km (base of crust)</text>
    <text x="12" y="82" font-size="9" fill="${C.ink}" opacity="0.7">We have never been through it.</text>
  </g>`);

// ---------- 3. CONVECTION ----------
ART.convection = () => wrap(`
  <rect x="60" y="60" width="680" height="270" fill="${C.ochre}" opacity="0.18" stroke="${C.ink}" stroke-width="2"/>
  <rect x="60" y="60" width="680" height="26" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>
  <text x="70" y="78" font-size="12" fill="${C.ink}" font-weight="700">CRUST</text>
  <rect x="60" y="330" width="680" height="26" fill="${C.coral}" opacity="0.8" stroke="${C.ink}" stroke-width="2"/>
  <text x="70" y="348" font-size="12" fill="${C.cream}" font-weight="700">HEAT FROM THE CORE</text>
  <g fill="none" stroke-width="3.5" stroke-linecap="round">
    <path d="M200 320 L200 110" stroke="${C.coral}"/>
    <path d="M200 110 L330 110" stroke="${C.coral}" opacity="0.6"/>
    <path d="M330 110 L330 320" stroke="${C.sea}"/>
    <path d="M330 320 L200 320" stroke="${C.sea}" opacity="0.6"/>
    <path d="M470 320 L470 110" stroke="${C.coral}"/>
    <path d="M470 110 L600 110" stroke="${C.coral}" opacity="0.6"/>
    <path d="M600 110 L600 320" stroke="${C.sea}"/>
    <path d="M600 320 L470 320" stroke="${C.sea}" opacity="0.6"/>
  </g>
  <g fill="${C.coral}">
    <polygon points="200,96 194,116 206,116"/><polygon points="470,96 464,116 476,116"/>
  </g>
  <g fill="${C.sea}">
    <polygon points="330,334 324,314 336,314"/><polygon points="600,334 594,314 606,314"/>
  </g>
  <text x="150" y="200" font-size="12" fill="${C.coral}" font-weight="700" transform="rotate(-90 150 200)">HOT ROCK RISES</text>
  <text x="380" y="200" font-size="12" fill="${C.sea}" font-weight="700" transform="rotate(-90 380 200)">COOL ROCK SINKS</text>
  <text x="265" y="240" font-size="13" fill="${C.ink}" text-anchor="middle" font-weight="700">CONVECTION</text>
  <text x="265" y="258" font-size="13" fill="${C.ink}" text-anchor="middle" font-weight="700">CELL</text>
  <g transform="translate(620,150)" opacity="0.8">
    <text font-size="10" fill="${C.ink}">Speed of this rock:</text>
    <text y="15" font-size="10" fill="${C.ink}" font-weight="700">a few cm per year</text>
    <text y="30" font-size="10" fill="${C.ink}">(fingernail speed)</text>
  </g>`);

// ---------- 4. PLATE MAP ----------
ART.plates = () => wrap(`
  <rect width="800" height="400" fill="${C.sea}" opacity="0.22"/>
  ${worldLand(C.sand)}
  ${plateLines(C.coral, 3)}
  <g font-size="10" fill="${C.ink}" font-weight="700">
    <text x="120" y="120">NORTH AMERICAN</text><text x="160" y="290">SOUTH AMERICAN</text>
    <text x="400" y="250">AFRICAN</text><text x="520" y="100">EURASIAN</text>
    <text x="640" y="285">AUSTRALIAN</text><text x="60" y="215">PACIFIC</text>
    <text x="700" y="200">PACIFIC</text><text x="590" y="215">INDIAN</text>
    <text x="360" y="380">ANTARCTIC</text><text x="285" y="195">NAZCA</text>
  </g>
  <rect x="600" y="12" width="188" height="42" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.2"/>
  <line x1="610" y1="30" x2="640" y2="30" stroke="${C.coral}" stroke-width="3"/>
  <text x="646" y="34" font-size="10" fill="${C.ink}">plate boundary</text>
  <text x="610" y="48" font-size="9" fill="${C.ink}" opacity="0.7">trace these in red</text>`);

// ---------- 5. PANGAEA ----------
ART.pangaea = () => wrap(`
  <text x="20" y="24" font-size="12" font-weight="700" fill="${C.ink}">250 MILLION YEARS AGO</text>
  <text x="430" y="24" font-size="12" font-weight="700" fill="${C.ink}">TODAY</text>
  <line x1="400" y1="34" x2="400" y2="380" stroke="${C.ink}" stroke-width="1" stroke-dasharray="4 4"/>
  <g transform="translate(40,60) scale(0.9)">
    <path d="M120 20 L180 10 L230 40 L250 90 L235 130 L250 170 L230 220 L190 265 L150 275 L120 250 L100 200 L60 180 L40 130 L55 80 L90 40 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>
    <path d="M120 20 L180 10 L230 40 L250 90 L200 100 L150 80 L110 60 Z" fill="${C.ochre}" opacity="0.35" stroke="${C.ink}" stroke-width="1"/>
    <text x="150" y="55" font-size="10" fill="${C.ink}">N.AM</text>
    <text x="205" y="130" font-size="10" fill="${C.ink}">EUR</text>
    <text x="120" y="150" font-size="10" fill="${C.ink}">AFR</text>
    <text x="75" y="145" font-size="10" fill="${C.ink}">S.AM</text>
    <text x="185" y="200" font-size="10" fill="${C.ink}">IND</text>
    <text x="140" y="245" font-size="10" fill="${C.ink}">ANT</text>
    <text x="200" y="250" font-size="10" fill="${C.ink}">AUS</text>
    <g stroke="${C.coral}" stroke-width="2" fill="none">
      <ellipse cx="105" cy="150" rx="34" ry="16" transform="rotate(-20 105 150)"/>
      <ellipse cx="140" cy="215" rx="42" ry="15" transform="rotate(8 140 215)"/>
    </g>
    <text x="96" y="120" font-size="9" fill="${C.coral}" font-weight="700">Mesosaurus</text>
    <text x="118" y="242" font-size="9" fill="${C.coral}" font-weight="700">Glossopteris</text>
    <text x="150" y="300" font-size="13" fill="${C.ink}" font-weight="700" text-anchor="middle">PANGAEA</text>
  </g>
  <g transform="translate(420,55) scale(0.44)">
    <rect width="800" height="400" fill="${C.sea}" opacity="0.18"/>
    ${worldLand(C.sand)}
    <g stroke="${C.coral}" stroke-width="5" fill="none">
      <ellipse cx="${px(-45)}" cy="${py(-15)}" rx="55" ry="34"/>
      <ellipse cx="${px(15)}" cy="${py(-20)}" rx="55" ry="34"/>
    </g>
  </g>
  <text x="430" y="290" font-size="11" fill="${C.ink}">The same fossil reptile, on two continents,</text>
  <text x="430" y="306" font-size="11" fill="${C.ink}">separated by an entire ocean it could not swim.</text>
  <text x="430" y="330" font-size="11" fill="${C.coral}" font-weight="700">Alfred Wegener, 1912. Rejected until the 1960s.</text>`);

// ---------- 6. BOUNDARIES ----------
ART.boundaries = () => {
  const block = (x, title, word, dir) => {
    const arrows = dir === 'div'
      ? `<g stroke="${C.coral}" stroke-width="4" fill="${C.coral}"><line x1="${x+40}" y1="120" x2="${x+8}" y2="120"/><polygon points="${x+2},120 ${x+16},113 ${x+16},127"/><line x1="${x+160}" y1="120" x2="${x+192}" y2="120"/><polygon points="${x+198},120 ${x+184},113 ${x+184},127"/></g>`
      : dir === 'con'
      ? `<g stroke="${C.coral}" stroke-width="4" fill="${C.coral}"><line x1="${x+8}" y1="120" x2="${x+40}" y2="120"/><polygon points="${x+46},120 ${x+32},113 ${x+32},127"/><line x1="${x+192}" y1="120" x2="${x+160}" y2="120"/><polygon points="${x+154},120 ${x+168},113 ${x+168},127"/></g>`
      : `<g stroke="${C.coral}" stroke-width="4" fill="${C.coral}"><line x1="${x+30}" y1="112" x2="${x+80}" y2="112"/><polygon points="${x+88},112 ${x+74},105 ${x+74},119"/><line x1="${x+170}" y1="132" x2="${x+120}" y2="132"/><polygon points="${x+112},132 ${x+126},125 ${x+126},139"/></g>`;
    const shapes = dir === 'div'
      ? `<rect x="${x+4}" y="150" width="86" height="70" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>
         <rect x="${x+110}" y="150" width="86" height="70" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>
         <path d="M${x+90} 220 L${x+100} 150 L${x+110} 220 Z" fill="${C.coral}" opacity="0.8" stroke="${C.ink}" stroke-width="1.5"/>
         <text x="${x+100}" y="244" font-size="9" text-anchor="middle" fill="${C.ink}">new crust rises</text>`
      : dir === 'con'
      ? `<rect x="${x+4}" y="150" width="96" height="52" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>
         <path d="M${x+100} 150 L${x+196} 150 L${x+196} 202 L${x+150} 202 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>
         <path d="M${x+100} 202 L${x+150} 202 L${x+186} 250 L${x+140} 250 Z" fill="${C.ink}" opacity="0.35"/>
         <path d="M${x+96} 150 L${x+112} 122 L${x+128} 150 Z" fill="${C.coral}" stroke="${C.ink}" stroke-width="1.5"/>
         <text x="${x+100}" y="268" font-size="9" text-anchor="middle" fill="${C.ink}">one plate dives under</text>`
      : `<path d="M${x+4} 150 L${x+96} 150 L${x+104} 220 L${x+4} 220 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>
         <path d="M${x+104} 150 L${x+196} 150 L${x+196} 220 L${x+112} 220 Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>
         <line x1="${x+100}" y1="150" x2="${x+108}" y2="220" stroke="${C.coral}" stroke-width="3.5"/>
         <text x="${x+100}" y="244" font-size="9" text-anchor="middle" fill="${C.ink}">stick, then jerk</text>`;
    return `<g><rect x="${x}" y="46" width="200" height="240" fill="none" stroke="${C.ink}" stroke-width="1.2"/>
      <text x="${x+100}" y="70" font-size="13" text-anchor="middle" font-weight="700" fill="${C.ink}">${title}</text>
      <text x="${x+100}" y="90" font-size="11" text-anchor="middle" fill="${C.coral}" font-weight="700">${word}</text>
      ${arrows}${shapes}</g>`;
  };
  return wrap(`
  <text x="20" y="28" font-size="12" fill="${C.ink}" font-weight="700">DO THE HAND SIGN FIRST. THEN READ THE WORD.</text>
  ${block(20,'PULL APART','DIVERGENT','div')}
  ${block(290,'PUSH TOGETHER','CONVERGENT','con')}
  ${block(560,'SLIDE PAST','TRANSFORM','trans')}
  <g font-size="10" fill="${C.ink}" opacity="0.8">
    <text x="20" y="310">Iceland. The Great Rift Valley.</text>
    <text x="290" y="310">The Himalayas. The Andes. Japan.</text>
    <text x="560" y="310">The San Andreas Fault.</text>
  </g>
  <g transform="translate(20,326)">
    <rect width="760" height="56" fill="none" stroke="${C.ink}" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="10" y="20" font-size="10" font-weight="700" fill="${C.ink}">COPY THE HAND SIGN HERE:</text>
    <text x="150" y="20" font-size="10" fill="${C.ink}" opacity="0.6">draw your hands</text>
    <text x="410" y="20" font-size="10" fill="${C.ink}" opacity="0.6">draw your hands</text>
    <text x="640" y="20" font-size="10" fill="${C.ink}" opacity="0.6">draw your hands</text>
  </g>`);
};

// ---------- 7. LANDFORMS ----------
ART.landforms = () => wrap(`
  <rect x="0" y="0" width="800" height="400" fill="none"/>
  <rect x="20" y="150" width="760" height="200" fill="${C.ochre}" opacity="0.18" stroke="${C.ink}" stroke-width="1.5"/>
  <path d="M20 150 L120 150 L150 118 L185 150 L300 150 L340 200 L400 150 L470 150 L520 96 L570 150 L700 150 L740 132 L780 150" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.2"/>
  <path d="M20 150 L120 150 L120 350 L20 350 Z" fill="${C.sea}" opacity="0.35"/>
  <path d="M300 150 L340 200 L400 150" fill="${C.sea}" opacity="0.5" stroke="${C.ink}" stroke-width="2"/>
  <path d="M185 150 L245 150 L300 150 L280 250 L215 250 Z" fill="none"/>
  <g stroke="${C.ink}" stroke-width="1.6" fill="none" stroke-dasharray="6 4">
    <path d="M300 152 L360 300"/>
  </g>
  <path d="M150 118 L150 96 M150 96 L143 108 M150 96 L157 108" stroke="${C.coral}" stroke-width="2" fill="none"/>
  <polygon points="520,96 500,150 540,150" fill="${C.coral}" opacity="0.85" stroke="${C.ink}" stroke-width="1.5"/>
  <path d="M520 96 L512 74 M520 96 L528 72 M520 96 L520 66" stroke="${C.coral}" stroke-width="2"/>
  <g font-size="11" fill="${C.ink}" font-weight="700">
    <text x="26" y="176">OCEAN</text>
    <text x="316" y="222" fill="${C.coral}">TRENCH</text>
    <text x="470" y="88">VOLCANO</text>
    <text x="128" y="112">MOUNTAINS</text>
    <text x="690" y="126">RIFT VALLEY</text>
    <text x="330" y="316" fill="${C.ink}" opacity="0.7">subducting plate</text>
  </g>
  <g font-size="9" fill="${C.ink}" opacity="0.75">
    <text x="26" y="192">seafloor sags where the plate dives</text>
    <text x="450" y="104">water from the slab melts the rock above</text>
    <text x="118" y="128">two continents, nothing sinks, rock goes up</text>
  </g>
  <g transform="translate(20,362)">
    <text font-size="10" fill="${C.ink}" font-weight="700">MATCH: mountain / volcano / trench / rift valley  →  divergent, convergent, transform</text>
  </g>`);

// ---------- 8. BLANK GRID MAP ----------
ART.worldgrid = () => wrap(`
  <rect width="800" height="400" fill="${C.cream}"/>
  ${worldLand('#ffffff')}
  ${grid()}
  <rect x="0" y="0" width="800" height="400" fill="none" stroke="${C.ink}" stroke-width="2"/>
  <text x="8" y="16" font-size="10" fill="${C.ink}" opacity="0.7">PLOT ALL TEN. JOIN THEM. LOOK AT THE SHAPE.</text>`);

ART.worldgrid_solved = () => wrap(`
  <rect width="800" height="400" fill="${C.cream}"/>
  ${worldLand('#ffffff')}
  ${grid()}
  ${QUAKES.map(q => `<circle cx="${px(q[1]).toFixed(1)}" cy="${py(q[2]).toFixed(1)}" r="6" fill="${C.coral}" stroke="${C.ink}" stroke-width="1.2"/>`).join('')}
  <rect x="0" y="0" width="800" height="400" fill="none" stroke="${C.ink}" stroke-width="2"/>`);

// ---------- 9. ELASTIC REBOUND ----------
ART.rebound = () => {
  const panel = (x, year, fence, cap) => `
    <g><rect x="${x}" y="60" width="240" height="230" fill="${C.sand}" opacity="0.5" stroke="${C.ink}" stroke-width="1.5"/>
      <line x1="${x}" y1="175" x2="${x+240}" y2="175" stroke="${C.coral}" stroke-width="3" stroke-dasharray="8 5"/>
      <text x="${x+8}" y="82" font-size="12" font-weight="700" fill="${C.ink}">${year}</text>
      ${fence}
      <text x="${x+120}" y="308" font-size="10" text-anchor="middle" fill="${C.ink}">${cap}</text>
    </g>`;
  const posts = (pts) => pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="${C.ink}"/>`).join('');
  const f1 = `<line x1="140" y1="90" x2="140" y2="270" stroke="${C.ink}" stroke-width="2.5"/>${posts([[140,100],[140,140],[140,175],[140,210],[140,255]])}`;
  const f2 = `<path d="M330 90 L330 140 Q332 172 352 175 Q372 178 374 210 L374 270" fill="none" stroke="${C.ink}" stroke-width="2.5"/>${posts([[330,100],[331,140],[352,175],[373,210],[374,255]])}`;
  const f3 = `<line x1="560" y1="90" x2="560" y2="173" stroke="${C.ink}" stroke-width="2.5"/><line x1="608" y1="177" x2="608" y2="270" stroke="${C.ink}" stroke-width="2.5"/>
    <line x1="560" y1="173" x2="608" y2="177" stroke="${C.coral}" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="586" y="166" font-size="9" fill="${C.coral}" text-anchor="middle">4.5 m offset</text>`;
  return wrap(`
  <text x="20" y="34" font-size="12" font-weight="700" fill="${C.ink}">A FENCE BUILT STRAIGHT ACROSS A FAULT</text>
  ${panel(20,'1900', f1, 'Built dead straight. Fault is quiet.')}
  ${panel(280,'2000', f2, 'Plates crept. Rock bent. Energy stored.')}
  ${panel(540,'2001', f3, 'SNAP. Both halves straight, no longer joined.')}
  <text x="20" y="340" font-size="11" fill="${C.coral}" font-weight="700">The bending took 100 years and made no sound. The snap took 12 seconds and was the earthquake.</text>
  <text x="20" y="360" font-size="10" fill="${C.ink}" opacity="0.75">Elastic rebound. The rock does not stay bent, it springs back, and the springing back is what shakes the ground.</text>`);
};

// ---------- 10. EPICENTRE ----------
ART.epicentre = () => wrap(`
  <rect x="40" y="40" width="720" height="60" fill="#dfe8ea"/>
  <rect x="40" y="100" width="720" height="250" fill="${C.ochre}" opacity="0.2" stroke="${C.ink}" stroke-width="2"/>
  <line x1="40" y1="100" x2="760" y2="100" stroke="${C.ink}" stroke-width="3"/>
  <g transform="translate(380,72)">
    <rect x="-16" y="-14" width="32" height="28" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.6"/>
    <path d="M-20 -14 L0 -30 L20 -14Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.6"/>
  </g>
  <g transform="translate(440,72)"><rect x="-12" y="-20" width="24" height="34" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.6"/></g>
  <line x1="180" y1="100" x2="620" y2="330" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="9 5"/>
  <text x="600" y="350" font-size="11" fill="${C.ink}" font-weight="700">FAULT PLANE</text>
  <g transform="translate(400,240)">
    <polygon points="0,-16 4.7,-4.9 16,-4.9 6.6,2 10.5,13 0,6.5 -10.5,13 -6.6,2 -16,-4.9 -4.7,-4.9" fill="${C.coral}" stroke="${C.ink}" stroke-width="1.2"/>
  </g>
  <g stroke="${C.coral}" stroke-width="1.6" fill="none" opacity="0.7">
    <circle cx="400" cy="240" r="42"/><circle cx="400" cy="240" r="72"/><circle cx="400" cy="240" r="102"/><circle cx="400" cy="240" r="132"/>
  </g>
  <line x1="400" y1="240" x2="400" y2="100" stroke="${C.ink}" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="400" cy="100" r="7" fill="${C.coral}" stroke="${C.ink}" stroke-width="2"/>
  <g font-size="12" fill="${C.ink}" font-weight="700">
    <text x="414" y="94">EPICENTRE</text>
    <text x="422" y="246">HYPOCENTRE</text>
  </g>
  <g font-size="10" fill="${C.ink}" opacity="0.8">
    <text x="414" y="110">a point on the surface. nothing broke here.</text>
    <text x="422" y="262">also called the focus. this is where rock broke.</text>
  </g>
  <g stroke="${C.ink}" stroke-width="1"><line x1="360" y1="100" x2="360" y2="240"/></g>
  <text x="300" y="180" font-size="11" fill="${C.ink}" font-weight="700">DEPTH</text>
  <text x="290" y="196" font-size="10" fill="${C.ink}" opacity="0.8">12 km here</text>
  <text x="50" y="380" font-size="10" fill="${C.ink}" opacity="0.8">Shallow quake: energy arrives concentrated.  Deep quake: same energy spread through hundreds of km of rock, so it arrives weaker.</text>`);

// ---------- 11. WAVES ----------
ART.waves = () => {
  const row = (y, label, sub, draw, speed) => `
    <g><text x="20" y="${y-24}" font-size="12" font-weight="700" fill="${C.ink}">${label}</text>
      <text x="20" y="${y-10}" font-size="10" fill="${C.ink}" opacity="0.75">${sub}</text>
      ${draw}
      <text x="700" y="${y+4}" font-size="11" fill="${C.coral}" font-weight="700">${speed}</text></g>`;
  let pcomp = '';
  for (let i = 0; i < 26; i++) {
    const base = 200 + i * 17;
    const squeeze = Math.sin(i * 0.7) * 5;
    pcomp += `<line x1="${base + squeeze}" y1="72" x2="${base + squeeze}" y2="112" stroke="${C.ink}" stroke-width="2" opacity="0.85"/>`;
  }
  let srope = 'M200 210';
  for (let i = 0; i <= 26; i++) srope += ` L${200 + i * 17} ${210 + Math.sin(i * 0.55) * 26}`;
  let surf = 'M200 320';
  for (let i = 0; i <= 26; i++) surf += ` L${200 + i * 17} ${320 + Math.sin(i * 0.34) * 20}`;
  return wrap(`
  ${row(92,'P WAVE  (Primary)','squeezes and stretches, like a pushed slinky', pcomp + `<line x1="200" y1="130" x2="642" y2="130" stroke="${C.coral}" stroke-width="1" stroke-dasharray="3 3"/>`, 'about 6 km/s')}
  ${row(212,'S WAVE  (Secondary)','shakes sideways, like a flicked rope. dies in liquid.', `<path d="${srope}" fill="none" stroke="${C.ink}" stroke-width="2.6"/>`, 'about 3.5 km/s')}
  ${row(322,'SURFACE WAVES','roll along the top only. these are the destroyers.', `<path d="${surf}" fill="none" stroke="${C.coral}" stroke-width="3.4"/><path d="${surf}" fill="none" stroke="${C.ink}" stroke-width="1" opacity="0.4" transform="translate(0,10)"/>`, 'slowest')}
  <g transform="translate(20,140)"><text font-size="10" fill="${C.ink}" opacity="0.7">arrives 1st</text></g>
  <g transform="translate(20,254)"><text font-size="10" fill="${C.ink}" opacity="0.7">arrives 2nd</text></g>
  <g transform="translate(20,362)"><text font-size="10" fill="${C.ink}" opacity="0.7">arrives last</text></g>
  <text x="200" y="378" font-size="10" fill="${C.ink}" opacity="0.8">Bang. Then jolt. Then a slow roll. If you felt all three in that order, you now know exactly what happened.</text>`);
};

// ---------- 12. SEISMOGRAM ----------
ART.seismogram = () => {
  let path = 'M40 200';
  for (let x = 40; x < 260; x += 4) path += ` L${x} ${200 + (Math.sin(x) * 1.2)}`;
  for (let x = 260; x < 340; x += 3) path += ` L${x} ${200 + Math.sin(x * 1.5) * 16}`;
  for (let x = 340; x < 430; x += 3) path += ` L${x} ${200 + Math.sin(x * 1.2) * 9}`;
  for (let x = 430; x < 560; x += 3) path += ` L${x} ${200 + Math.sin(x * 0.9) * 48}`;
  for (let x = 560; x < 700; x += 4) path += ` L${x} ${200 + Math.sin(x * 0.5) * 62 * Math.exp(-(x - 560) / 90)}`;
  for (let x = 700; x <= 780; x += 5) path += ` L${x} ${200 + Math.sin(x) * 1.4}`;
  return wrap(`
  <rect x="20" y="90" width="770" height="220" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.5"/>
  <line x1="20" y1="200" x2="790" y2="200" stroke="${C.ink}" stroke-width="0.6" opacity="0.4"/>
  <path d="${path}" fill="none" stroke="${C.ink}" stroke-width="1.6"/>
  <line x1="262" y1="100" x2="262" y2="300" stroke="${C.sea}" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="432" y1="100" x2="432" y2="300" stroke="${C.coral}" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="266" y="116" font-size="12" font-weight="700" fill="${C.sea}">P ARRIVES</text>
  <text x="436" y="116" font-size="12" font-weight="700" fill="${C.coral}">S ARRIVES</text>
  <g><line x1="262" y1="330" x2="432" y2="330" stroke="${C.ink}" stroke-width="2"/>
     <line x1="262" y1="324" x2="262" y2="336" stroke="${C.ink}" stroke-width="2"/>
     <line x1="432" y1="324" x2="432" y2="336" stroke="${C.ink}" stroke-width="2"/>
     <text x="347" y="350" font-size="12" text-anchor="middle" font-weight="700" fill="${C.ink}">THE GAP  =  DISTANCE</text></g>
  <text x="560" y="130" font-size="11" fill="${C.ink}" font-weight="700">SURFACE WAVES</text>
  <text x="560" y="146" font-size="9" fill="${C.ink}" opacity="0.7">biggest, slowest, most damage</text>
  <text x="60" y="130" font-size="10" fill="${C.ink}" opacity="0.7">flat = quiet</text>
  <g transform="translate(20,362)">
    <line x1="0" y1="0" x2="70" y2="0" stroke="${C.ink}" stroke-width="2"/>
    <line x1="0" y1="-5" x2="0" y2="5" stroke="${C.ink}" stroke-width="2"/>
    <line x1="70" y1="-5" x2="70" y2="5" stroke="${C.ink}" stroke-width="2"/>
    <text x="80" y="4" font-size="11" fill="${C.ink}">= 10 seconds     Measure the gap. Multiply by 8. That is roughly the distance in km.</text>
  </g>
  <text x="20" y="80" font-size="11" font-weight="700" fill="${C.ink}">STATION 7 — ONE REAL EVENT</text>`);
};

// ---------- 13. MAGNITUDE ----------
ART.magnitude = () => {
  const steps = [
    [2,'Machines only. You feel nothing.', 26],
    [4,'Hanging lamps swing. Windows rattle.', 44],
    [5,'Furniture moves. Weak walls crack.', 62],
    [6,'Serious damage over tens of km.', 92],
    [7,'Severe. Damage over hundreds of km.', 140],
    [8,'Devastating. Felt across a continent.', 210],
    [9,'Rare. Changes coastlines. Alters the day length.', 280]
  ];
  let g = '';
  steps.forEach((s, i) => {
    const x = 70 + i * 100;
    const h = s[2];
    g += `<rect x="${x}" y="${330 - h}" width="66" height="${h}" fill="${i < 2 ? C.green : i < 4 ? C.ochre : C.coral}" opacity="${0.5 + i * 0.07}" stroke="${C.ink}" stroke-width="1.4"/>`;
    g += `<text x="${x + 33}" y="${348}" font-size="16" font-weight="700" text-anchor="middle" fill="${C.ink}">${s[0]}</text>`;
    g += `<text x="${x + 33}" y="${330 - h - 8}" font-size="8" text-anchor="middle" fill="${C.ink}" opacity="0.8">x32</text>`;
  });
  return wrap(`
  <text x="20" y="30" font-size="12" font-weight="700" fill="${C.ink}">MAGNITUDE: THE ENERGY STAIRCASE. EACH STEP IS ABOUT 32 TIMES THE ONE BEFORE.</text>
  <line x1="60" y1="330" x2="780" y2="330" stroke="${C.ink}" stroke-width="2"/>
  ${g}
  <g font-size="9" fill="${C.ink}" opacity="0.85">
    ${steps.map((s,i)=>`<text x="${70+i*100+33}" y="${364}" font-size="7.5" text-anchor="middle">${s[1].slice(0,26)}</text>`).join('')}
  </g>
  <g transform="translate(500,44)">
    <rect width="284" height="76" fill="none" stroke="${C.ink}" stroke-width="1.2" stroke-dasharray="4 3"/>
    <text x="10" y="20" font-size="11" font-weight="700" fill="${C.coral}">MAGNITUDE vs INTENSITY</text>
    <text x="10" y="38" font-size="9.5" fill="${C.ink}">MAGNITUDE: one number. The whole quake.</text>
    <text x="10" y="54" font-size="9.5" fill="${C.ink}">INTENSITY: different on every street.</text>
    <text x="10" y="70" font-size="9.5" fill="${C.ink}" opacity="0.75">Depth, distance and ground type decide intensity.</text>
  </g>`);
};

// ---------- 14. TRIANGULATION ----------
// MAP SCALE: exactly 1 svg unit = 1 km. Radii below are the correct answers.
const TRI = {
  epi: { x: 360, y: 180 },
  stations: [
    { x: 299.9, y: 158.1, n: 'ALPHA',   gap: 8,  r: 64  },
    { x: 475.9, y: 148.9, n: 'BRAVO',   gap: 15, r: 120 },
    { x: 352.3, y: 267.7, n: 'CHARLIE', gap: 11, r: 88  }
  ]
};
const triBase = (showAnswer) => {
  let g = '';
  TRI.stations.forEach(s => {
    if (showAnswer) g += `<circle cx="${s.x}" cy="${s.y}" r="${s.r}" fill="none" stroke="${C.coral}" stroke-width="2" opacity="0.85"/>`;
    g += `<polygon points="${s.x},${s.y - 10} ${s.x + 9},${s.y + 7} ${s.x - 9},${s.y + 7}" fill="${C.ink}"/>`;
    g += `<circle cx="${s.x}" cy="${s.y}" r="2" fill="${C.cream}"/>`;
    g += `<text x="${s.x + 13}" y="${s.y - 3}" font-size="11" font-weight="700" fill="${C.ink}">${s.n}</text>`;
    g += `<text x="${s.x + 13}" y="${s.y + 10}" font-size="9" fill="${C.ink}" opacity="0.8">P to S gap: ${s.gap} s</text>`;
    if (showAnswer) g += `<text x="${s.x + 13}" y="${s.y + 22}" font-size="9" fill="${C.coral}">= ${s.r} km</text>`;
  });
  const x = showAnswer ? `<g transform="translate(${TRI.epi.x},${TRI.epi.y})">
      <line x1="-13" y1="-13" x2="13" y2="13" stroke="${C.coral}" stroke-width="4.5"/>
      <line x1="13" y1="-13" x2="-13" y2="13" stroke="${C.coral}" stroke-width="4.5"/></g>
      <text x="${TRI.epi.x + 18}" y="${TRI.epi.y + 26}" font-size="12" font-weight="700" fill="${C.coral}">EPICENTRE</text>` : '';
  return wrap(`
  <rect x="20" y="30" width="760" height="330" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.5"/>
  <g opacity="0.16">${Array.from({length:16},(_,i)=>`<line x1="${20+i*50}" y1="30" x2="${20+i*50}" y2="360" stroke="${C.ink}" stroke-width="0.6"/>`).join('')}
  ${Array.from({length:7},(_,i)=>`<line x1="20" y1="${30+i*50}" x2="780" y2="${30+i*50}" stroke="${C.ink}" stroke-width="0.6"/>`).join('')}</g>
  ${g}${x}
  <g transform="translate(596,290)">
    <rect width="176" height="60" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.2"/>
    <text x="12" y="17" font-size="9" font-weight="700" fill="${C.ink}">MAP SCALE</text>
    <line x1="12" y1="34" x2="62" y2="34" stroke="${C.ink}" stroke-width="2.5"/>
    <line x1="12" y1="28" x2="12" y2="40" stroke="${C.ink}" stroke-width="2"/>
    <line x1="62" y1="28" x2="62" y2="40" stroke="${C.ink}" stroke-width="2"/>
    <text x="70" y="38" font-size="10" fill="${C.ink}">= 50 km</text>
    <text x="12" y="52" font-size="8.5" fill="${C.coral}" font-weight="700">one grid square = 50 km</text>
  </g>
  <text x="30" y="382" font-size="10" fill="${C.ink}" opacity="0.9">RULE OF 8: distance in km = gap in seconds x 8.   One circle: no idea. Two circles: two suspects. Three circles: one answer.</text>
  <text x="30" y="24" font-size="10" font-weight="700" fill="${C.ink}">${showAnswer ? 'SOLVED — do not show this to them before they try it' : 'DRAW YOUR THREE CIRCLES HERE'}</text>`);
};
ART.triangulation = () => triBase(false);
ART.triangulation_solved = () => triBase(true);

// ---------- 15. PREDICTION MYTHS ----------
ART.prediction = () => {
  const card = (x, title, truth, icon) => `
    <g><rect x="${x}" y="50" width="240" height="300" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.5"/>
      <rect x="${x}" y="50" width="240" height="30" fill="${C.coral}" opacity="0.85"/>
      <text x="${x+120}" y="70" font-size="11" font-weight="700" text-anchor="middle" fill="${C.cream}">MYTH</text>
      <text x="${x+120}" y="104" font-size="12" font-weight="700" text-anchor="middle" fill="${C.ink}">${title}</text>
      ${icon}
      <line x1="${x+16}" y1="216" x2="${x+224}" y2="216" stroke="${C.ink}" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="${x+16}" y="236" font-size="10" font-weight="700" fill="${C.green}">THE TRUTH</text>
      ${truth.map((t,i)=>`<text x="${x+16}" y="${254+i*15}" font-size="9.5" fill="${C.ink}">${t}</text>`).join('')}
    </g>`;
  return wrap(`
  <text x="20" y="34" font-size="12" font-weight="700" fill="${C.ink}">THREE MYTHS THAT WILL NOT DIE</text>
  ${card(20,'EARTHQUAKE WEATHER',
    ['Quakes start 10 km or more','underground. Weather does not','reach that far. They happen in','every season and every climate,','including under the sea.'],
    `<g transform="translate(${20+120},160)"><circle r="26" fill="${C.ochre}" opacity="0.6" stroke="${C.ink}" stroke-width="1.5"/><path d="M-40 30 Q0 14 40 30" fill="none" stroke="${C.ink}" stroke-width="2"/><line x1="-34" y1="-34" x2="34" y2="34" stroke="${C.coral}" stroke-width="4"/></g>`)}
  ${card(280,'ANIMALS PREDICT IT',
    ['Animals feel the fast P wave a','second or two before we do.','That is detection, not prediction.','No controlled study has ever shown','days of warning.'],
    `<g transform="translate(${280+120},160)"><ellipse rx="30" ry="20" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.5"/><circle cx="-10" cy="-6" r="3" fill="${C.ink}"/><path d="M22 -14 L34 -30 L30 -10" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.5"/><line x1="-34" y1="-34" x2="34" y2="34" stroke="${C.coral}" stroke-width="4"/></g>`)}
  ${card(540,'CALIFORNIA FALLS IN',
    ['The San Andreas slides sideways.','Los Angeles moves north about','5 cm a year. In 15 million years','it will be beside San Francisco.','Nothing sinks. Nothing falls off.'],
    `<g transform="translate(${540+120},160)"><path d="M-40 -20 L0 -26 L6 30 L-40 34Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.5"/><path d="M10 -34 L44 -30 L40 26 L14 22Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.5"/><line x1="4" y1="-34" x2="10" y2="34" stroke="${C.coral}" stroke-width="3"/><path d="M18 -46 L18 -60 M14 -56 L18 -62 L22 -56" stroke="${C.ink}" stroke-width="2" fill="none"/></g>`)}
  <text x="20" y="374" font-size="10" fill="${C.ink}" opacity="0.85">What science CAN do: forecast the probability of a large quake in a region over the next 30 years. That is real, useful, and it sets building codes.</text>`);
};

// ---------- 16. TSUNAMI ----------
ART.tsunami = () => {
  let deep = 'M40 120';
  for (let x = 40; x <= 400; x += 6) deep += ` L${x} ${120 - Math.sin((x - 40) / 58) * 7}`;
  let shall = 'M400 120';
  for (let x = 400; x <= 700; x += 4) {
    const amp = 7 + Math.pow((x - 400) / 300, 2) * 78;
    shall += ` L${x} ${120 - Math.sin((x - 400) / (58 - (x - 400) / 8)) * amp}`;
  }
  return wrap(`
  <rect x="40" y="120" width="720" height="180" fill="${C.sea}" opacity="0.35"/>
  <path d="M40 300 L400 300 L560 268 L700 200 L760 176 L760 340 L40 340Z" fill="${C.ochre}" opacity="0.45" stroke="${C.ink}" stroke-width="1.6"/>
  <path d="${deep}" fill="none" stroke="${C.ink}" stroke-width="2.4"/>
  <path d="${shall}" fill="none" stroke="${C.coral}" stroke-width="3"/>
  <line x1="40" y1="120" x2="760" y2="120" stroke="${C.ink}" stroke-width="0.8" opacity="0.5" stroke-dasharray="4 4"/>
  <g transform="translate(160,250)">
    <line x1="0" y1="0" x2="0" y2="-118" stroke="${C.coral}" stroke-width="2.5"/>
    <polygon points="0,-126 -6,-112 6,-112" fill="${C.coral}"/>
    <line x1="-70" y1="14" x2="70" y2="14" stroke="${C.ink}" stroke-width="3"/>
    <polygon points="-70,20 -46,44 -94,44" fill="none" stroke="${C.ink}" stroke-width="2"/>
    <text x="0" y="60" font-size="10" text-anchor="middle" fill="${C.ink}" font-weight="700">SEAFLOOR JUMPS UP</text>
    <text x="0" y="74" font-size="9" text-anchor="middle" fill="${C.ink}" opacity="0.8">the whole water column lifts</text>
  </g>
  <g font-size="11" font-weight="700" fill="${C.ink}">
    <text x="60" y="90">DEEP OCEAN</text><text x="470" y="60">SHALLOW WATER</text>
  </g>
  <g font-size="9" fill="${C.ink}" opacity="0.85">
    <text x="60" y="106">half a metre tall, 200 km long, 800 km/h.</text>
    <text x="60" y="352">A ship sails over it and feels nothing.</text>
    <text x="470" y="76">front slows, back catches up, length becomes height.</text>
    <text x="470" y="352">It does not curl and break. It keeps coming.</text>
  </g>
  <g transform="translate(640,236)">
    <rect x="-6" y="-24" width="26" height="30" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.4"/>
    <path d="M-10 -24 L7 -40 L24 -24Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.4"/>
  </g>`);
};

// ---------- 17. LIQUEFACTION ----------
ART.liquefaction = () => {
  const bldg = (x, y, tilt, label) => `<g transform="translate(${x},${y}) rotate(${tilt})">
      <rect x="-24" y="-68" width="48" height="68" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>
      ${[0,1,2].map(r=>[0,1].map(c=>`<rect x="${-16+c*20}" y="${-58+r*21}" width="12" height="13" fill="${C.sea}" opacity="0.6" stroke="${C.ink}" stroke-width="0.8"/>`).join('')).join('')}
    </g><text x="${x}" y="${y+22}" font-size="10" text-anchor="middle" fill="${C.ink}" font-weight="700">${label}</text>`;
  let dots = '';
  for (let i = 0; i < 240; i++) {
    const x = 412 + Math.random() * 366, y = 274 + Math.random() * 92;
    dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1 + Math.random() * 1.6).toFixed(1)}" fill="${C.ink}" opacity="0.32"/>`;
  }
  return wrap(`
  <text x="20" y="26" font-size="12" font-weight="700" fill="${C.ink}">SAME EARTHQUAKE. SAME STREET. DIFFERENT GROUND.</text>
  <text x="20" y="44" font-size="10" fill="${C.ink}" opacity="0.85">Shaking makes wet sand grains lose contact. Water gets between them. For about a minute the ground stops being a solid.</text>
  <g transform="translate(430,56)">
    <rect width="352" height="112" fill="none" stroke="${C.ink}" stroke-width="1.2" stroke-dasharray="4 3"/>
    <text x="10" y="18" font-size="10" font-weight="700" fill="${C.ink}">TRY IT: cup of wet sand, a coin on top, tap steadily.</text>
    <rect x="18" y="42" width="52" height="34" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.4"/>
    <circle cx="44" cy="40" r="6" fill="${C.ochre}" stroke="${C.ink}" stroke-width="1.2"/>
    <text x="14" y="90" font-size="9" fill="${C.ink}">before</text>
    <rect x="150" y="42" width="52" height="34" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.4"/>
    <circle cx="176" cy="66" r="6" fill="${C.ochre}" stroke="${C.ink}" stroke-width="1.2"/>
    <text x="146" y="90" font-size="9" fill="${C.ink}">after: gone</text>
    <text x="226" y="46" font-size="9" fill="${C.coral}" font-weight="700">Now try a light</text>
    <text x="226" y="58" font-size="9" fill="${C.coral}" font-weight="700">plastic cap.</text>
    <text x="226" y="70" font-size="9" fill="${C.coral}">It rises instead.</text>
    <text x="226" y="86" font-size="9" fill="${C.ink}">That is why pipes come</text>
    <text x="226" y="98" font-size="9" fill="${C.ink}">up through roads.</text>
  </g>
  <rect x="20" y="266" width="370" height="104" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.8"/>
  <g opacity="0.5">${Array.from({length:9},(_,i)=>`<path d="M${30+i*42} 278 q 20 14 40 0" fill="none" stroke="${C.ink}" stroke-width="1"/>`).join('')}</g>
  <text x="205" y="388" font-size="11" text-anchor="middle" font-weight="700" fill="${C.ink}">SOLID ROCK</text>
  <rect x="410" y="266" width="370" height="104" fill="${C.sea}" opacity="0.28" stroke="${C.ink}" stroke-width="1.8"/>
  ${dots}
  <text x="595" y="388" font-size="11" text-anchor="middle" font-weight="700" fill="${C.coral}">LOOSE WET SAND</text>
  ${bldg(110,266,0,'stands')}
  ${bldg(280,266,0,'stands')}
  ${bldg(495,278,14,'tilts and sinks')}
  ${bldg(700,280,-19,'tilts and sinks')}
  <g transform="translate(600,330)">
    <ellipse rx="26" ry="10" fill="none" stroke="${C.coral}" stroke-width="2.4"/>
    <line x1="0" y1="-10" x2="0" y2="-36" stroke="${C.coral}" stroke-width="2.4"/>
    <polygon points="0,-44 -6,-30 6,-30" fill="${C.coral}"/>
    <text x="-24" y="-52" font-size="9" fill="${C.coral}" font-weight="700">empty tank floats UP</text>
  </g>`);
};

// ---------- 18. BUILDINGS ----------
ART.buildings = () => {
  const floors = (x, y, n, w, brace) => {
    let s = '';
    for (let i = 0; i < n; i++) {
      const fy = y - (i + 1) * 30;
      s += `<rect x="${x}" y="${fy}" width="${w}" height="30" fill="none" stroke="${C.ink}" stroke-width="2"/>`;
      if (brace) s += `<line x1="${x}" y1="${fy + 30}" x2="${x + w}" y2="${fy}" stroke="${C.coral}" stroke-width="2.2"/>`;
    }
    return s;
  };
  return wrap(`
  <text x="20" y="28" font-size="12" font-weight="700" fill="${C.ink}">THREE ENGINEERING DEFENCES</text>
  <g><text x="30" y="56" font-size="11" font-weight="700" fill="${C.coral}">1. BASE ISOLATION</text>
    ${floors(40,290,6,110,false)}
    <rect x="30" y="290" width="130" height="14" fill="${C.ink}" opacity="0.25"/>
    ${[0,1,2,3].map(i=>`<g transform="translate(${48+i*30},304)"><rect x="-11" y="0" width="22" height="24" fill="${C.coral}" opacity="0.7" stroke="${C.ink}" stroke-width="1.4"/>
      ${[0,1,2].map(j=>`<line x1="-11" y1="${6+j*6}" x2="11" y2="${6+j*6}" stroke="${C.ink}" stroke-width="0.9"/>`).join('')}</g>`).join('')}
    <rect x="20" y="328" width="160" height="20" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.6"/>
    <g stroke="${C.ink}" stroke-width="2" fill="${C.ink}"><line x1="30" y1="360" x2="70" y2="360"/><polygon points="76,360 62,354 62,366"/><text x="86" y="364" font-size="9" stroke="none">ground moves</text></g>
    <text x="30" y="380" font-size="9" fill="${C.coral}">building mostly does not</text></g>
  <g><text x="300" y="56" font-size="11" font-weight="700" fill="${C.coral}">2. TUNED MASS DAMPER</text>
    ${floors(310,290,8,110,false)}
    <rect x="300" y="328" width="130" height="20" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.6"/>
    <line x1="365" y1="66" x2="365" y2="96" stroke="${C.ink}" stroke-width="1.6"/>
    <circle cx="365" cy="110" r="17" fill="${C.ink}" opacity="0.75" stroke="${C.ink}" stroke-width="1.5"/>
    <path d="M338 110 q 27 26 54 0" fill="none" stroke="${C.coral}" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="392" y="106" font-size="9" fill="${C.ink}">heavy ball</text>
    <text x="392" y="118" font-size="9" fill="${C.ink}">swings the</text>
    <text x="392" y="130" font-size="9" fill="${C.ink}">opposite way</text>
    <text x="300" y="376" font-size="9" fill="${C.coral}">it cancels the sway</text></g>
  <g><text x="570" y="56" font-size="11" font-weight="700" fill="${C.coral}">3. CROSS BRACING</text>
    ${floors(580,290,6,110,true)}
    <rect x="570" y="328" width="130" height="20" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.6"/>
    <g transform="translate(716,150)">
      <rect x="0" y="0" width="46" height="46" fill="none" stroke="${C.ink}" stroke-width="2"/>
      <text x="23" y="62" font-size="9" text-anchor="middle" fill="${C.ink}">folds</text>
      <path d="M0 90 L46 90 L58 130 L12 130Z" fill="none" stroke="${C.ink}" stroke-width="2" stroke-dasharray="3 3"/>
      <rect x="0" y="150" width="46" height="46" fill="none" stroke="${C.ink}" stroke-width="2"/>
      <line x1="0" y1="196" x2="46" y2="150" stroke="${C.coral}" stroke-width="2.4"/>
      <text x="23" y="212" font-size="9" text-anchor="middle" fill="${C.coral}">holds</text>
    </g>
    <text x="570" y="376" font-size="9" fill="${C.coral}">a triangle cannot change shape</text></g>`);
};

// ---------- 19. DROP COVER HOLD ----------
ART.dropcover = () => {
  const panel = (x, y, title, body, draw) => `
    <g><rect x="${x}" y="${y}" width="370" height="160" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.5"/>
      <rect x="${x}" y="${y}" width="370" height="26" fill="${C.ink}"/>
      <text x="${x+10}" y="${y+18}" font-size="11" font-weight="700" fill="${C.cream}">${title}</text>
      ${draw}
      ${body.map((b,i)=>`<text x="${x+150}" y="${y+56+i*17}" font-size="10" fill="${C.ink}">${b}</text>`).join('')}
    </g>`;
  const person = (cx, cy, s) => `<g transform="translate(${cx},${cy}) scale(${s})">
      <circle cx="0" cy="-26" r="11" fill="${C.ochre}" stroke="${C.ink}" stroke-width="1.6"/>
      <path d="M-16 0 Q0 -18 16 0 L16 12 L-16 12Z" fill="${C.coral}" opacity="0.75" stroke="${C.ink}" stroke-width="1.6"/>
      <path d="M-16 -4 Q-24 -22 -8 -30" fill="none" stroke="${C.ink}" stroke-width="2.4"/>
      <path d="M16 -4 Q24 -22 8 -30" fill="none" stroke="${C.ink}" stroke-width="2.4"/></g>`;
  return wrap(`
  ${panel(20,20,'INDOORS — DROP, COVER, HOLD ON',
    ['1. DROP to hands and knees.','2. COVER under a sturdy table.','3. HOLD ON to the leg. It will slide.','Stay until the shaking fully stops.'],
    `<g><rect x="46" y="96" width="96" height="7" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.8"/>
      <line x1="52" y1="103" x2="52" y2="140" stroke="${C.ink}" stroke-width="2.4"/>
      <line x1="136" y1="103" x2="136" y2="140" stroke="${C.ink}" stroke-width="2.4"/>
      ${person(94,128,0.72)}
      <line x1="30" y1="140" x2="160" y2="140" stroke="${C.ink}" stroke-width="2"/></g>`)}
  ${panel(410,20,'IN BED — STAY THERE',
    ['Do not get up and walk in the dark.','There is broken glass on the floor.','Stay in bed, turn face down,','and cover your head with a pillow.'],
    `<g><rect x="440" y="112" width="110" height="24" fill="${C.sand}" stroke="${C.ink}" stroke-width="1.8"/>
      <rect x="434" y="98" width="30" height="18" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.6"/>
      <circle cx="470" cy="106" r="9" fill="${C.ochre}" stroke="${C.ink}" stroke-width="1.5"/>
      <rect x="452" y="94" width="34" height="12" rx="5" fill="${C.coral}" opacity="0.8" stroke="${C.ink}" stroke-width="1.4"/></g>`)}
  ${panel(20,200,'OUTDOORS — GET INTO THE OPEN',
    ['Move away from buildings, walls,','trees, streetlights and power lines.','The most dangerous place is right','beside a building. Drop and cover.'],
    `<g>${person(90,300,0.72)}
      <rect x="30" y="248" width="26" height="66" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.6"/>
      <line x1="20" y1="316" x2="160" y2="316" stroke="${C.ink}" stroke-width="2"/>
      <path d="M62 250 l8 -10 M70 246 l6 -12" stroke="${C.coral}" stroke-width="2"/>
      <text x="106" y="252" font-size="8" fill="${C.coral}">falling debris</text></g>`)}
  ${panel(410,200,'IN A CAR — PULL OVER AND STAY IN',
    ['Stop somewhere open. Not on or under','a bridge, and not beside a wall.','Stay inside with your seatbelt on.','Wait until the shaking stops.'],
    `<g><path d="M436 300 l12 -22 h56 l14 22 z" fill="${C.coral}" opacity="0.7" stroke="${C.ink}" stroke-width="1.6"/>
      <rect x="430" y="300" width="94" height="16" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.6"/>
      <circle cx="452" cy="318" r="7" fill="${C.ink}"/><circle cx="504" cy="318" r="7" fill="${C.ink}"/>
      <line x1="416" y1="326" x2="546" y2="326" stroke="${C.ink}" stroke-width="2"/></g>`)}
  <text x="20" y="382" font-size="10" fill="${C.coral}" font-weight="700">THE DOORWAY IS OUT OF DATE. It came from old mud-brick houses. A modern doorway is no stronger than the wall and shields you from nothing.</text>`);
};

// ---------- 20. CAPSTONE MAP ----------
ART.capstone = () => {
  let sanddots = '';
  for (let i = 0; i < 300; i++) {
    const t = Math.random();
    const x = 250 + t * 300 + (Math.random() - 0.5) * 90;
    const y = 120 + t * 200 + (Math.random() - 0.5) * 70;
    if (x > 150 && x < 720 && y > 60 && y < 340) sanddots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.6" fill="${C.ink}" opacity="0.3"/>`;
  }
  return wrap(`
  <rect width="800" height="400" fill="${C.cream}"/>
  <path d="M0 0 L150 0 L120 120 L150 260 L110 400 L0 400Z" fill="${C.sea}" opacity="0.4" stroke="${C.ink}" stroke-width="1.6"/>
  <text x="34" y="200" font-size="13" font-weight="700" fill="${C.ink}" opacity="0.7">SEA</text>
  <path d="M600 0 L800 0 L800 400 L620 400 L660 240 L600 120Z" fill="${C.green}" opacity="0.35" stroke="${C.ink}" stroke-width="1.6"/>
  <text x="690" y="200" font-size="12" font-weight="700" fill="${C.ink}">HARD ROCK HILLS</text>
  <text x="690" y="216" font-size="9" fill="${C.ink}" opacity="0.75">stable, steep, far from the sea</text>
  ${sanddots}
  <path d="M170 60 Q290 160 380 220 T620 380" fill="none" stroke="${C.sea}" stroke-width="16" opacity="0.55"/>
  <text x="300" y="196" font-size="10" font-weight="700" fill="${C.ink}" transform="rotate(32 300 196)">RIVER — OLD SOFT SAND</text>
  <path d="M120 380 L300 250 L470 140 L600 40" fill="none" stroke="${C.coral}" stroke-width="4" stroke-dasharray="14 7"/>
  <text x="430" y="128" font-size="11" font-weight="700" fill="${C.coral}" transform="rotate(-33 430 128)">FAULT LINE</text>
  <path d="M110 400 L150 300 L240 320 L300 400Z" fill="${C.ochre}" opacity="0.22" stroke="${C.ink}" stroke-width="1.2"/>
  <text x="150" y="366" font-size="9" fill="${C.ink}">LOW FLAT COASTAL GROUND</text>
  <g opacity="0.2">${Array.from({length:17},(_,i)=>`<line x1="${i*50}" y1="0" x2="${i*50}" y2="400" stroke="${C.ink}" stroke-width="0.5"/>`).join('')}
  ${Array.from({length:9},(_,i)=>`<line x1="0" y1="${i*50}" x2="800" y2="${i*50}" stroke="${C.ink}" stroke-width="0.5"/>`).join('')}</g>
  <rect x="0" y="0" width="800" height="400" fill="none" stroke="${C.ink}" stroke-width="2.5"/>
  <g transform="translate(596,352)">
    <rect width="196" height="42" fill="${C.cream}" stroke="${C.ink}" stroke-width="1.2"/>
    <text x="8" y="15" font-size="8.5" font-weight="700" fill="${C.ink}">PLACE: hospital, school, fire station,</text>
    <text x="8" y="27" font-size="8.5" font-weight="700" fill="${C.ink}">housing, power station, meeting point,</text>
    <text x="8" y="38" font-size="8.5" font-weight="700" fill="${C.ink}">road out.  8000 people must live here.</text>
  </g>
  <g transform="translate(20,20)"><path d="M14 0 L14 30 M14 0 L8 10 M14 0 L20 10" stroke="${C.ink}" stroke-width="2" fill="none"/><text x="10" y="44" font-size="10" font-weight="700" fill="${C.ink}">N</text></g>`);
};

/* ---------- chapter banners ----------
   One per chapter, drawn in the same flat editorial style as the lesson
   diagrams and tinted with that chapter's accent. 800x240 banner shape. */
const CHVB = '0 0 800 240';
const ART_CH = {};

// 1 — what is down there: a wedge cut out of the planet
ART_CH[1] = a => wrap(`
  <rect width="800" height="240" fill="${C.deep}"/>
  <g transform="translate(400,250)">
    <circle r="230" fill="${a}" opacity="0.20"/>
    <circle r="168" fill="${a}" opacity="0.30"/>
    <circle r="104" fill="${C.coral}" opacity="0.45"/>
    <circle r="46" fill="${C.coral}" opacity="0.85"/>
    <circle r="230" fill="none" stroke="${C.cream}" stroke-width="3" opacity="0.85"/>
    <circle r="168" fill="none" stroke="${C.cream}" stroke-width="1.4" opacity="0.5"/>
    <circle r="104" fill="none" stroke="${C.cream}" stroke-width="1.4" opacity="0.5"/>
  </g>
  <g stroke="${C.cream}" stroke-width="1.2" opacity="0.55" fill="none">
    <line x1="400" y1="20" x2="640" y2="20"/><line x1="400" y1="82" x2="640" y2="82"/>
    <line x1="400" y1="146" x2="640" y2="146"/>
  </g>
  <g font-size="11" fill="${C.cream}" opacity="0.8" letter-spacing="1.5">
    <text x="648" y="24">CRUST</text><text x="648" y="86">MANTLE</text><text x="648" y="150">CORE</text>
  </g>
  <g transform="translate(150,18)">
    <circle cx="0" cy="0" r="7" fill="${C.cream}"/>
    <path d="M0 8 L0 26 M0 14 L-9 22 M0 14 L9 22 M0 26 L-8 40 M0 26 L8 40"
          stroke="${C.cream}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>`, CHVB);

// 2 — the pieces move: slabs with push arrows
ART_CH[2] = a => wrap(`
  <rect width="800" height="240" fill="${C.deep}"/>
  <g stroke="${C.cream}" stroke-width="2.5" fill="${a}" opacity="0.9">
    <path d="M40 150 L250 130 L268 206 L54 214 Z" opacity="0.55"/>
    <path d="M282 128 L520 118 L534 200 L296 206 Z" opacity="0.75"/>
    <path d="M548 120 L760 138 L748 212 L540 200 Z" opacity="0.5"/>
  </g>
  <g stroke="${C.coral}" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M200 96 L262 96"/><path d="M248 86 L264 96 L248 106"/>
    <path d="M360 96 L298 96"/><path d="M312 86 L296 96 L312 106"/>
    <path d="M600 84 L600 40"/><path d="M590 54 L600 38 L610 54"/>
  </g>
  <g font-size="11" fill="${C.cream}" opacity="0.75" letter-spacing="1.6" text-anchor="middle">
    <text x="280" y="72">PUSHING</text><text x="600" y="24">RISING</text><text x="95" y="90">SLIDING</text>
  </g>
  <path d="M40 118 L150 108" stroke="${C.cream}" stroke-width="2.5" stroke-dasharray="9 6" fill="none"/>`, CHVB);

// 3 — how a quake is born: the stick bends, then snaps
ART_CH[3] = a => wrap(`
  <rect width="800" height="240" fill="${C.deep}"/>
  <g fill="none" stroke-linecap="round">
    <path d="M60 130 Q 150 130 240 130" stroke="${C.cream}" stroke-width="9" opacity="0.55"/>
    <path d="M300 130 Q 390 74 480 130" stroke="${a}" stroke-width="9"/>
    <path d="M540 130 L610 130 M640 130 L710 130" stroke="${C.coral}" stroke-width="9"/>
  </g>
  <g font-size="11" fill="${C.cream}" opacity="0.75" letter-spacing="1.6" text-anchor="middle">
    <text x="150" y="176">STUCK</text><text x="390" y="176">BENDING</text><text x="625" y="176">SNAP</text>
  </g>
  <g transform="translate(625,130)" fill="none" stroke="${C.coral}" stroke-width="2.4">
    <circle r="26" opacity="0.75"/><circle r="46" opacity="0.5"/><circle r="68" opacity="0.28"/>
  </g>
  <g stroke="${C.cream}" stroke-width="1.2" opacity="0.35">
    <line x1="270" y1="46" x2="270" y2="200"/><line x1="510" y1="46" x2="510" y2="200"/>
  </g>`, CHVB);

// 4 — measuring the monster: a dial and a trace
ART_CH[4] = a => wrap(`
  <rect width="800" height="240" fill="${C.deep}"/>
  <g transform="translate(180,180)">
    <path d="M-110 0 A110 110 0 0 1 110 0" fill="none" stroke="${C.cream}" stroke-width="3" opacity="0.85"/>
    ${[0, 1, 2, 3, 4, 5, 6].map(i => {
      const t = Math.PI - i * Math.PI / 6, x1 = Math.cos(t) * 110, y1 = -Math.sin(t) * 110,
            x2 = Math.cos(t) * 92, y2 = -Math.sin(t) * 92;
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${C.cream}" stroke-width="2" opacity="0.6"/>`;
    }).join('')}
    <line x1="0" y1="0" x2="62" y2="-72" stroke="${C.coral}" stroke-width="5" stroke-linecap="round"/>
    <circle r="8" fill="${C.coral}"/>
    <text y="34" font-size="12" fill="${C.cream}" opacity="0.75" text-anchor="middle" letter-spacing="1.6">MAGNITUDE</text>
  </g>
  <g transform="translate(360,120)">
    <line x1="0" y1="0" x2="400" y2="0" stroke="${C.cream}" stroke-width="1.4" opacity="0.4"/>
    <path d="M0 0 L52 0 L60 -14 L68 12 L76 0 L120 0 L132 -52 L146 60 L158 -30 L170 22 L182 -8 L196 0 L400 0"
          fill="none" stroke="${a}" stroke-width="3.4" stroke-linejoin="round" stroke-linecap="round"/>
    <text y="94" font-size="12" fill="${C.cream}" opacity="0.75" letter-spacing="1.6">WHAT THE MACHINE ACTUALLY WROTE</text>
  </g>`, CHVB);

// 5 — what the shaking does: water stands up, ground gives way
ART_CH[5] = a => wrap(`
  <rect width="800" height="240" fill="${C.deep}"/>
  <path d="M0 240 L0 176 Q 90 168 180 176 T 360 178 L360 240 Z" fill="${a}" opacity="0.35"/>
  <path d="M360 178 Q 430 178 470 120 Q 500 66 540 74 Q 590 84 606 178 L800 178 L800 240 L360 240 Z"
        fill="${a}" opacity="0.6" stroke="${C.cream}" stroke-width="2.5"/>
  <path d="M470 120 Q 505 96 536 108" fill="none" stroke="${C.cream}" stroke-width="2.5" opacity="0.8"/>
  <g stroke="${C.coral}" stroke-width="3" fill="none" stroke-linecap="round">
    <path d="M60 214 L96 196 L128 218 L166 198"/>
    <path d="M196 216 L228 200 L258 220"/>
  </g>
  <g font-size="11" fill="${C.cream}" opacity="0.78" letter-spacing="1.6">
    <text x="40" y="150">GROUND THAT GIVES WAY</text>
    <text x="620" y="150">WATER THAT STANDS UP</text>
  </g>`, CHVB);

// 6 — fighting back: a braced building that stays up
ART_CH[6] = a => wrap(`
  <rect width="800" height="240" fill="${C.deep}"/>
  <line x1="0" y1="206" x2="800" y2="206" stroke="${C.cream}" stroke-width="2.5" opacity="0.6"/>
  <g transform="translate(300,0)">
    <rect x="0" y="52" width="200" height="154" fill="${a}" opacity="0.55" stroke="${C.cream}" stroke-width="3"/>
    <g stroke="${C.cream}" stroke-width="2.2" opacity="0.85">
      <line x1="0" y1="52" x2="200" y2="206"/><line x1="200" y1="52" x2="0" y2="206"/>
      <line x1="0" y1="129" x2="200" y2="129"/>
    </g>
    <rect x="66" y="24" width="68" height="28" fill="${C.coral}" stroke="${C.cream}" stroke-width="2.5"/>
  </g>
  <g stroke="${C.coral}" stroke-width="3.4" fill="none" stroke-linecap="round">
    <path d="M240 130 L200 130"/><path d="M214 118 L198 130 L214 142"/>
    <path d="M560 130 L600 130"/><path d="M586 118 L602 130 L586 142"/>
  </g>
  <g transform="translate(120,150)" fill="none" stroke="${C.cream}" stroke-width="2.6" opacity="0.9">
    <path d="M0 0 L0 -34 M-14 -20 L0 -34 L14 -20"/>
    <circle cx="0" cy="16" r="9"/>
  </g>
  <text x="120" y="196" font-size="11" fill="${C.cream}" opacity="0.75" letter-spacing="1.6" text-anchor="middle">DROP. COVER. HOLD.</text>`, CHVB);

const SEISMO_TRACE = (level, w, h) => {
  if (level <= 0) return `<path d="M0 ${h/2} L${w} ${h/2}" fill="none" stroke="${C.ink}" stroke-width="1.2"/>`;
  let d = `M0 ${h/2}`;
  for (let x = 0; x <= w; x += 2) {
    const env = level <= 2 ? (x > w * 0.55 && x < w * 0.72 ? 1 : 0.06)
      : level <= 5 ? Math.max(0.08, Math.sin(x / w * Math.PI) )
      : 1;
    const a = (h / 2 - 2) * (level / 10) * env * (0.5 + 0.5 * Math.sin(x * (0.4 + level * 0.05)));
    d += ` L${x} ${(h / 2 + a * Math.sin(x * (0.9 + level * 0.12))).toFixed(2)}`;
  }
  return `<path d="${d}" fill="none" stroke="${level >= 8 ? C.coral : C.ink}" stroke-width="${level >= 8 ? 1.6 : 1.2}"/>`;
};
