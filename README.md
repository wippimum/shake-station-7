# Shake Station 7

An earthquake-science course for kids, in two forms. Both are single self-contained
HTML files — no build step, no dependencies, no network calls.

**Live:** https://wippimum.github.io/shake-station-7/

| | |
|---|---|
| [Interactive course](https://wippimum.github.io/shake-station-7/) | `index.html` — 32 screens: lessons, five badge challenges, the Box Seismograph build, and the epicentre-plotting exercise |
| [Reader](https://wippimum.github.io/shake-station-7/reader.html) | `reader.html` — the same 20-topic arc as one read-through page, with collapsible answer reveals. Prints cleanly. |

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

- No analytics, no external fonts, no CDN. The only `http` string in either file is the
  SVG namespace declaration.
- Progress is not saved between sessions — closing the tab restarts the course.
- `.nojekyll` is present so GitHub Pages serves the files as-is.
