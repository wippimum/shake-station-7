# Shake Station 7

An earthquake-science course for kids, in two forms. Both are single self-contained
HTML files — no build step, no dependencies, no network calls.

**Live:** https://wippimum.github.io/shake-station-7/

| | |
|---|---|
| [Interactive course](https://wippimum.github.io/shake-station-7/) | `index.html` — six chapters, each with its own colour, cover and banner. 18 lessons, six chapter reviews, six badge challenges, the Box Seismograph build and the epicentre-plotting exercise. |
| [Reader](https://wippimum.github.io/shake-station-7/reader.html) | `reader.html` — the same 20-topic arc as one read-through page, with collapsible answer reveals. Prints cleanly. |

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
  at render time rather than editing eighteen strings by hand.
- `.nojekyll` is present so GitHub Pages serves the files as-is.
