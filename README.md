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
