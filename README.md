# Tailwind Starter (stable, polling-based)

**Why stable?** Tailwind's own watcher can trip over `fsevents` on some macOS/Node versions.
This starter uses **nodemon -L (legacy polling)** to watch `public/` and `src/` and rebuild CSS,
so it works reliably on any Node you have installed.

## Quick Start

```bash
npm install
npm run build   # generates public/assets/tailwind.css once
npm run dev     # opens browser, rebuilds CSS on every save
```

- Edit files in `public/` (HTML/JS). The page auto-reloads.
- Do not edit `public/assets/tailwind.css` — it's generated.

## Structure

```
src/input.css            # Tailwind entry
public/
  index.html
  assets/tailwind.css    # generated
```

## External image assets

To comply with the no-binary-assets policy, portfolio thumbnails that previously lived in
`public/assets/images/` are now delivered from [placehold.co](https://placehold.co). The
`index.html` source and the static copies generated in `public/` and `docs/` reference those
hosted URLs directly, so no additional download step is required when running
`npm run build` or `npm run deploy:gh`.
