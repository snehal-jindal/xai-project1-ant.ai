# How it works

[Back to the README](../README.md)

## Design choices

The website is one page: make a challenge → try it with AI → compare the answer → inspect results → read the CAPTCHA motivation and sources. It does not ask visitors to fill in research forms or upload model replies. This keeps exploration approachable and avoids silently collecting visitor experiments.

The dark interface, lime accents and collapsible evidence keep the page focused. Images are not inverted by the theme: changing the page color should not change the generated test image. Animation is opt-in and can be paused.

## Code map

- `src/generator.js`: canvas rendering, random inputs, GIF/PDF exports, current answer in memory.
- `src/main.js`: method selection, generation, playback, downloads, suggested prompt, answer reveal.
- `dist/index.html`: page content and evidence narrative.
- `dist/lab.css`: responsive layout and theme.
- `dist/lab.js`: bundled JavaScript, rebuilt from `src/` with esbuild.

HTML and CSS are edited directly in `dist/`; the build updates only `dist/lab.js`. The checked-in built version can be served without installing npm dependencies. Do not open it with `file://`: use HTTP/HTTPS so font loading works.

## Four mechanisms

**Stripes:** a 1000×240 letter mask chooses between vertical stripes inside letters and horizontal stripes outside them. Spacing is adjustable from 4–16 pixels. The letters are carried by orientation rather than a plain black fill.

**Colored dots:** a 1032×126 mask selects between olive/green foreground and orange background palettes. Dot geometry is similar in both regions. Colors carry the signal; accessibility and ordinary vision models can both limit its usefulness.

**Motion:** a 640×160 letter mask selects between two random black/white textures. They shift in opposite vertical directions, two pixels per frame. The 48-frame GIF uses 40 ms per frame. The word is a motion cue, not clean text in a single frame. This is an independent implementation inspired by the cited research, not the Ghost Font generator.

**Connections:** five workshop names and unique five-digit codes are connected through four adjacent-lane swap stages. The answer is the final name/code permutation. White bridges help distinguish lines at crossings. This is a synthetic tracing puzzle, not encryption.

## Files, data and dependencies

Static challenges export PNG and raster-only PDF. Motion exports a still PNG plus an animated GIF. The PDF has an image rather than an embedded plain-text answer. File conversion or OCR may still read it.

Random characters use browser `crypto.getRandomValues`; the current answer and blob download URLs are held in memory. Refreshing discards the challenge. This is not secure answer storage: anyone inspecting the client can access it. Old blob URLs are revoked after a new challenge is successfully generated.

No external dataset, model/API, Python inference server, GPU, or account is required. Required npm packages are pinned in `package-lock.json`: gifenc (GIF), jsPDF (PDF), esbuild (bundle). The font and licenses are included. Network access is needed initially for the page/assets, and for npm installation if rebuilding; generated user content is not sent to an application backend.

## Why not call this an adversarial attack optimizer?

There is no gradient-based model optimization in the current public app. It creates perceptual pattern challenges. Some earlier project directions explored stronger/model-specific approaches, but this repository focuses on a small, understandable artifact and honest evidence. The contribution is the interface, synthesis, iterative investigation and evaluation framing.

## Reproducibility boundaries

Browser/font rasterization and cryptographic randomness can vary. The current UI does not expose seeds. Save the actual generated files to compare the same challenge across models. The original trial screenshots are preserved; their underlying input files and full chat histories are not all available. Software tests and model-effectiveness tests must be reported separately.
