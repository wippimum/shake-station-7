/* Shake Station 7 — build.
 *
 *   node build.mjs
 *
 * The course text used to live twice: once as data in the app, once as
 * hand-written prose in the reader. It now lives once, in src/, and both
 * pages are generated from it. Edit src/, run this, commit the output.
 *
 * Both outputs stay single self-contained files with no external requests,
 * because the whole point is that they open from a memory stick on a plane.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';

const read = p => readFileSync(new URL(p, import.meta.url), 'utf8');
const src = {
  art: read('./src/art.js'),
  pages: read('./src/pages.js'),
  chapters: read('./src/chapters.js'),
  app: read('./src/app.html'),
  reader: read('./src/reader.html')
};

/* ---------- 1. the app ---------- */
const indexHtml = src.app
  .replace('{{ART}}', () => src.art.replace(/\n$/, ''))
  .replace('{{PAGES}}', () => src.pages.replace(/\n$/, ''))
  .replace('{{CHAPTERS}}', () => src.chapters.replace(/\n$/, ''));

writeFileSync(new URL('./index.html', import.meta.url), indexHtml);

/* ---------- 2. evaluate the content so the reader can be built from it ---------- */
const ctx = createContext({});
runInContext(src.art + '\n' + src.pages + '\n' + src.chapters, ctx);
// top-level const/let in a vm script are NOT properties of the context object,
// so everything has to come back through this one expression
const { PAGES_A, PAGES_B, PAGES_C, PAGES_D, CH_META, ART, ART_CH } = runInContext(
  '({ PAGES_A, PAGES_B, PAGES_C, PAGES_D, CH_META, ART, ART_CH })', ctx);
const PAGES = [...PAGES_A, ...PAGES_B, ...PAGES_C, ...PAGES_D];

/* ---------- 3. helpers shared with the app's own renderer ---------- */
const PAGE_BY_N = {};
PAGES.forEach(p => { if (p.title && !p.cover) PAGE_BY_N[p.n] = p; });
const depage = s => String(s).replace(/\b(on |in |from )?page (\d+)\b/gi, (m, prep, n) => {
  const p = PAGE_BY_N[+n];
  if (!p) return m;
  const lead = prep ? (/^on /i.test(prep) ? 'in ' : prep) : '';
  return `${lead}“${p.title}”`;
});
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// the content uses <b> as its only inline markup, so let that one through
const rich = s => depage(String(s))
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>');
const paras = s => rich(s).split('\n\n')
  .map(x => `<p>${x.replace(/\n/g, '<br>')}</p>`).join('');
const KEY = 'ABCD';

/* an answer the reader can open, rather than a button that marks it */
const reveal = (label, body, cls = 'rev') =>
  `<details class="${cls}"><summary>${esc(label)}</summary><div class="revb">${body}</div></details>`;

const options = q =>
  `<ol class="opts">${q.options.map(o => `<li>${rich(o)}</li>`).join('')}</ol>`;

const answerText = q => {
  const letter = KEY[q.answer];
  const why = q.why || q.reveal || '';
  return `<b>${letter} — ${rich(q.options[q.answer])}</b>${why ? '<br>' + rich(why) : ''}`;
};

const questionCard = (cls, title, sub, text, q, openLabel) =>
  `<div class="card ${cls}"><div class="ct">${esc(title)}${sub ? ` <span class="sub">${esc(sub)}</span>` : ''}</div>
   <div class="q">${rich(text)}</div>${options(q)}${reveal(openLabel, answerText(q))}</div>`;

/* ---------- 4. one reader section per lesson ---------- */
function section(p, ch) {
  const out = [];
  out.push(`<section class="page" id="p${p.n}">`);
  out.push(`<header class="ph"><div><div class="u">CHAPTER ${ch ? ch.no : '·'}</div><div class="un">${esc(ch ? ch.name : p.unitTitle || '')}</div></div><h2>${rich(p.title)}</h2><div class="n">${p.n}</div></header>`);
  if (p.hook) out.push(`<div class="hook">${rich(p.hook)}</div>`);

  if (p.predict) {
    out.push(questionCard('coral', 'PREDICT FIRST', 'guess out loud before you open anything below',
      p.predict.text, p.predict, 'I have guessed. Show me the answer.'));
  }
  if (p.core) {
    let body = paras(p.core);
    if (p.terms) body += `<div class="terms">${p.terms.map(t => `<span class="term"><b>${rich(t[0])}</b> ${rich(t[1])}</span>`).join('')}</div>`;
    out.push(reveal('OPEN THE EXPLANATION', body, 'rev core-rev'));
  }
  if (p.okonkwo) out.push(`<div class="okon"><div class="oh">DR. OKONKWO</div>${paras(p.okonkwo)}</div>`);
  if (ART[p.art]) out.push(`<figure>${ART[p.art]()}${p.artCaption ? `<figcaption>${rich(p.artCaption)}</figcaption>` : ''}</figure>`);

  if (p.myths) {
    out.push(`<div class="mythrow">${p.myths.map(m =>
      `<div class="mythcard"><b>${rich(m.myth)}</b>${rich(m.truth)}</div>`).join('')}</div>`);
  }
  if (p.warning) {
    out.push(`<div class="warnbox"><div class="ct">${esc(p.warning.title)}</div><ol>${p.warning.items.map(i => `<li>${rich(i)}</li>`).join('')}</ol><div class="rule">${rich(p.warning.rule)}</div></div>`);
  }
  if (p.trap) {
    out.push(questionCard('', 'CATCH THE ERROR', '', p.trap.text.replace(/^MISCONCEPTION TRAP\.\s*/, ''),
      p.trap, 'Tap to check your answer'));
  }
  if (p.build) {
    out.push(`<div class="card"><div class="ct">${esc(p.build.title)}</div>
      <div><b>YOU NEED:</b> ${rich(p.build.materials)}</div>
      <ol class="num">${p.build.steps.map(s => `<li>${rich(s)}</li>`).join('')}</ol>
      ${reveal('What should happen, and what it means', `<b>PREDICT FIRST</b> ${rich(p.build.predict)}<br><br><b>THEN CHECK</b> ${rich(p.build.result)}<br><br>${rich(p.build.wrong)}`)}</div>`);
  }
  if (p.activity) out.push(`<div class="card"><div class="ct">${esc(p.activity.title)}</div><div>${rich(p.activity.body)}</div></div>`);
  if (p.drill) out.push(`<div class="card coral"><div class="ct">${esc(p.drill.title)}</div><div>${rich(p.drill.body)}</div></div>`);

  if (p.doors) {
    out.push('<div class="doors">');
    [['L', 'LITTLE SEISMOLOGIST', 'ages 6 to 7', 'little'],
     ['F', 'FIELD SEISMOLOGIST', 'ages 8 to 9', 'field'],
     ['C', 'STATION CHIEF', 'ages 10 to 11', 'chief']].forEach(([k, label, ages, key]) => {
      const d = p.doors[key];
      if (!d) return;
      out.push(`<div class="door ${k}"><div class="dh">${esc(label)} · ${esc(ages)}</div><div>${rich(d.print)}</div>`);
      if (d.q) out.push(`<div class="q sm">${rich(d.q.text)}</div>${options(d.q)}${reveal('Tap to check your answer', answerText(d.q))}`);
      out.push('</div>');
    });
    out.push('</div>');
  }
  if (p.cooperate) out.push(`<div class="team"><span class="lab">TEAM TASK · ALL FOUR OF YOU</span>${rich(p.cooperate)}</div>`);
  if (p.check) {
    out.push(questionCard('dash', 'MEMORY CHECK', 'looking back, no peeking',
      p.check.q, p.check, 'Tap to check your answer'));
  }
  out.push('<div class="foot"><a href="#top">back to the top</a></div>');
  out.push('</section>');
  return out.join('\n');
}

/* ---------- 5. chapters, badges, and the whole reader body ---------- */
const CHAPTERS = [];
PAGES.forEach(p => {
  if (!p.unit || !CH_META[p.unit] || p.cover || p.capstone) return;
  let ch = CHAPTERS.find(c => c.u === p.unit);
  if (!ch) { ch = { u: p.unit, name: p.unitTitle, ...CH_META[p.unit], pages: [] }; CHAPTERS.push(ch); }
  ch.pages.push(p);
});
CHAPTERS.forEach((c, i) => { c.no = i + 1; });

function badgeSection(ch) {
  const p = ch.pages.find(x => x.badge);
  if (!p) return '';
  const b = p.badge;
  const qs = b.questions.map((q, i) =>
    `<div class="bq"><div class="bn">QUESTION ${i + 1} OF ${b.questions.length}</div>
     <div class="q">${rich(q.text)}</div>${options(q)}${reveal('Tap to check your answer', answerText(q))}</div>`).join('\n');
  return `<section class="page badgepage" id="badge${ch.no}" style="--accent:${ch.colour}">
    <header class="ph"><div><div class="u">CHAPTER ${ch.no}</div><div class="un">${esc(ch.name)}</div></div><h2>Badge Challenge</h2><div class="n">${b.digit}</div></header>
    <div class="hook">${rich(b.title)}. Every answer has to be right before the digit is released.</div>
    ${qs}
    ${reveal('The digit this badge releases', `<b style="font-size:30px;letter-spacing:.2em">${b.digit}</b>`)}
    <div class="foot"><a href="#top">back to the top</a></div>
  </section>`;
}

function chapterOpener(ch) {
  return `<section class="chopen" id="ch${ch.no}" style="--accent:${ch.colour}">
    <div class="chno">${ch.no}</div>
    <div class="chtag">${esc(ch.tag)}</div>
    <h2>${esc(ch.name)}</h2>
    <div class="chpromise">${rich(ch.promise)}</div>
    <figure class="chfig">${ART_CH[ch.u] ? ART_CH[ch.u](ch.colour) : ''}</figure>
    <ol class="chlist">${ch.pages.map(p => `<li><a href="#p${p.n}">${rich(p.title)}</a></li>`).join('')}</ol>
  </section>`;
}

const toc = CHAPTERS.map(ch => `
  <a class="tocch" href="#ch${ch.no}" style="--accent:${ch.colour}">
    <span class="tn">${ch.no}</span>
    <span class="tt">${esc(ch.name)}<span class="ts">${ch.pages.length} lessons · ${esc(ch.tag.toLowerCase())}</span></span>
    <span class="tu">${ch.pages.map(p => p.n).join(' · ')}</span>
  </a>`).join('');

const body = CHAPTERS.map(ch =>
  chapterOpener(ch) + '\n' + ch.pages.map(p => section(p, ch)).join('\n') + '\n' + badgeSection(ch)
).join('\n');

const cover = PAGES[0];
const capstone = PAGES[PAGES.length - 1];
const CODE = PAGES.filter(p => p.badge).map(p => p.badge.digit).join('');

/* the last page: the locked case, the letter, and the certificate.
   The town-planning tool is interactive in the app; on paper it is the letter
   itself, which is where the task was always written down anyway. */
function capstoneSection(p) {
  const out = [`<section class="page" id="p${p.n}" style="--accent:${C_LAST}">`];
  out.push(`<header class="ph"><div><div class="u">FINAL</div><div class="un">CERTIFICATION</div></div><h2>${rich(p.title)}</h2><div class="n">${p.n}</div></header>`);
  if (p.hook) out.push(`<div class="hook">${rich(p.hook)}</div>`);
  out.push(`<div class="card coral"><div class="ct">THE LOCKED CASE</div>
    <p>Write your six earned digits here, in chapter order.</p>
    <div class="lock"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    ${reveal('All six filled in? Open the case.', '<b>The case opens.</b> If a slot is still empty, a chapter is unfinished. Go back and find it before you read on.')}</div>`);
  if (p.okonkwo) out.push(`<div class="okon"><div class="oh">DR. OKONKWO</div>${paras(p.okonkwo)}</div>`);
  if (p.core) out.push(paras(p.core));
  if (ART[p.art]) out.push(`<figure>${ART[p.art]()}${p.artCaption ? `<figcaption>${rich(p.artCaption)}</figcaption>` : ''}</figure>`);
  if (p.doors) {
    out.push('<div class="doors">');
    [['L', 'LITTLE SEISMOLOGIST', 'ages 6 to 7', 'little'],
     ['F', 'FIELD SEISMOLOGIST', 'ages 8 to 9', 'field'],
     ['C', 'STATION CHIEF', 'ages 10 to 11', 'chief']]
      .forEach(([k, label, ages, key]) => {
        const d = p.doors[key];
        if (!d) return;
        out.push(`<div class="door ${k}"><div class="dh">${label} · ${ages}</div><div>${rich(d.print)}</div>`);
        // the capstone's doors carry questions too, same as every lesson
        if (d.q) out.push(`<div class="q sm">${rich(d.q.text)}</div>${options(d.q)}${reveal('Tap to check your answer', answerText(d.q))}`);
        out.push('</div>');
      });
    out.push('</div>');
  }
  if (p.certificate) {
    out.push(`<div class="card"><div class="ct">${esc(p.certificate.title)}</div>
      <p style="font-family:Georgia,serif;font-size:19px">Awarded to ______________________</p>
      <div>${rich(p.certificate.body)}</div>
      <p style="opacity:.7">${rich(p.certificate.signature)}</p></div>`);
  }
  if (p.final) out.push(`<div class="okon"><div class="oh">THE LAST THING SHE SAYS</div>${paras(p.final)}</div>`);
  out.push('<div class="foot"><a href="#top">back to the top</a></div></section>');
  return out.join('\n');
}
const C_LAST = CHAPTERS.length ? CHAPTERS[CHAPTERS.length - 1].colour : '#e8553e';

const readerHtml = src.reader
  .replace('{{COVERFIG}}', () => `<figure>${ART.cover()}</figure>`)
  .replace('{{STORY}}', () => paras(cover.coverBody || ''))
  .replace('{{OATH}}', () => rich(cover.oath || '').replace(/\n/g, '<br>'))
  .replace('{{TOC}}', () => toc)
  .replace('{{BODY}}', () => body)
  .replace('{{CAPSTONE}}', () => capstoneSection(capstone))
  .replace('{{CODE}}', () => CODE);

writeFileSync(new URL('./reader.html', import.meta.url), readerHtml);

console.log(`index.html   ${indexHtml.length.toLocaleString()} bytes`);
console.log(`reader.html  ${readerHtml.length.toLocaleString()} bytes`);
console.log(`             ${CHAPTERS.length} chapters, ${CHAPTERS.reduce((n, c) => n + c.pages.length, 0)} lessons, code ${CODE}`);
