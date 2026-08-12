# Shake Station 7

An earthquake-science course for kids, in two forms. Both ship as single
self-contained HTML files — no dependencies, no network calls, openable from a
memory stick on a plane.

**Live:** https://wippimum.github.io/shake-station-7/

| | |
|---|---|
| [Interactive course](https://wippimum.github.io/shake-station-7/) | `index.html` — six chapters, each with its own colour, cover and banner. 18 lessons, six chapter reviews, six badge challenges, the Box Seismograph build and the epicentre-plotting exercise. |
| [Reader](https://wippimum.github.io/shake-station-7/reader.html) | `reader.html` — the same course as one long page, every answer behind a tap-to-open bar. Prints cleanly. |

## ⚠️ Edit `src/`, not the HTML

`index.html` and `reader.html` are **generated**. Editing them directly works
until the next build, which overwrites your change.

```
src/pages.js       ← the course text: every lesson, question, answer and task
src/chapters.js    ← chapter colours, tags and promises
src/art.js         ← the SVG diagram library, shared by both outputs
src/app.html       ← app shell: styles + interactive runtime, with {{…}} slots
src/reader.html    ← reader shell: styles + masthead, with {{…}} slots
build.mjs          ← assembles index.html and reader.html
```

```sh
node build.mjs      # regenerates index.html and reader.html
```

The course text used to live twice — once as data in the app, once as
hand-written prose in the reader — so a wording fix had to be made in both, and
the illustrations were duplicated too. It now lives once in `src/` and both
pages are generated from it. The reader is rendered from the same page objects
the app uses, so a change to a question appears in both.

## How a chapter runs

Each chapter opens with a cover — its number, its promise, its banner and the
badge on offer — then teaches its lessons, and only then asks its questions.

```
CHAPTER COVER  →  LESSON …  →  THE QUESTIONS  →  BADGE CHALLENGE
                    │              │                  │
        predict-first gate    every trap and      all right, or
        on each lesson        check from the      no digit
                              chapter, together
```

The predict-first gate stays at the top of each lesson: the lesson body is
veiled until a guess is made, because the point is to commit before reading.
Everything asked *about* a lesson waits for the chapter review.

| # | Chapter | Lessons | Questions | Badge |
|---|---------|---------|-----------|-------|
| 1 | What Is Down There | 3 | 3 | Junior Geologist |
| 2 | The Pieces Move | 4 | 5 | Plate Tracker |
| 3 | How A Quake Is Born | 4 | 6 | Wave Reader |
| 4 | Measuring The Monster | 3 | 4 | Station Analyst |
| 5 | What The Shaking Does | 2 | 3 | Hazard Officer |
| 6 | Fighting Back | 2 | 2 | Station Chief |

Six badges, six digits, one locked case at the end.

## The arc

A planet with skin → rock that flows → the cracked shell → Wegener, the man nobody
believed → three ways plates meet → what the crashes build → stick, bend, SNAP →
three kinds of wave → reading the squiggle → magnitude vs. damage → locating a quake
with three circles → why nobody can predict tomorrow → tsunami → liquefaction →
buildings that dance → the thirty seconds that matter.

## Running it

Open either file directly in a browser — `file://` works fine, since nothing is fetched.
To serve locally:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000/

## Notes

- No analytics, no external fonts, no CDN. Nothing is fetched from anywhere.
- Progress is saved to `localStorage` under `shake-station-7/v2` and the course
  resumes where it was left. Bump that key if the step order ever changes again,
  otherwise an old save restores onto the wrong step.
- Installs as an offline app (`manifest.webmanifest` + `sw.js`). Bump `CACHE` in
  `sw.js` whenever the course content changes, or tablets keep serving the old copy.
- The prose was written when this ran as twenty numbered pages, so it says things
  like "you met this on page 4". `depage()` swaps those for the lesson's real name
  rather than editing eighteen strings by hand — in the app at render time, in the
  reader at build time. Both share the same implementation shape.
- `index.html` and `reader.html` are build output and are committed so GitHub Pages
  can serve them. Run `node build.mjs` after any change to `src/`.
- `.nojekyll` is present so GitHub Pages serves the files as-is.
