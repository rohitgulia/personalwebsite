# Rohit Singh Gulia · Personal website

Animated single-page resume site, live at https://rohitgulia.github.io/personalwebsite/

Built with React 18 and Vite. No UI or animation libraries: the particle network is a canvas,
and the rest (letter reveals, text scramble, scroll reveals, counters, timeline, marquees,
spotlight cards) is plain CSS and small hooks in `src/hooks.js`. Motion is switched off for
visitors who ask their OS for reduced motion.

## Editing content

All text lives in `src/data/resume.js`: profile, impact stats, experience, skills and education.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run deploy   # build and publish dist/ to the gh-pages branch (GitHub Pages)
```

The site is served from the `/personalwebsite/` path, set as `base` in `vite.config.js`.
