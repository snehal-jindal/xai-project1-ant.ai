# Maintaining this project

[Back to the README](../README.md)

## Edit, check, preview

1. Edit the generators/interactions in `src/`; edit the page and styles in `dist/index.html` and `dist/lab.css`.
2. Run `npm ci`, `npm run build`, and `npm test`.
3. Run `npm run preview`, open http://localhost:8000, and test all four methods, downloads, playback/pause, and answer reveal.
4. Check phone-width layout and collapsed/expanded screenshots. Keep actual trial evidence separate from software smoke tests.

## Website publishing

The source/docs live on **main**. GitHub Pages serves the **gh-pages** branch, at its root. The contents of `dist/` on main are the content of the gh-pages root (including `.nojekyll`). Publishing a source-code change on main alone does not update the website: rebuild, then publish the matching `dist/` content to gh-pages. GitHub’s Pages workflow handles deployment.

Keep URLs relative so the app works under `/xai-project1-ant.ai/`, not only at a domain root. Do not add site-host credentials, `.env` files, local runs, `node_modules`, or retired model weights to the repo. No secret is needed by the visitor app.

## Document new evidence

If adding a screenshot, use fictional content and remove private information. Record the actual intended answer, exact prompt and assistance, model/settings (mark self-reported if not independently verified), and whether it had full media access. Include correct results as well as errors. Do not mix screenshots from different conditions into a headline success rate. Preserve any published evidence file’s provenance and hash.

## Licensing

The owner has not assigned an unrestricted license to all original project material. `NOTICE.md` explains this; third-party software and font licenses are preserved. Choose a license explicitly before advertising this as freely reusable open-source software.
