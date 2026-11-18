# Jhon Hervy Yu — Portfolio

Print-catalog / acid-zine portfolio built with Vite, React 19 and TypeScript. All copy, works and credentials live in a typed local JSON CMS — no component edits needed to publish new work.

```bash
npm install     # once
npm run dev     # http://localhost:5173
npm run build   # type-checks the CMS, then builds /dist
npm run preview # serve the production build
```

## The CMS (`src/data/`)

| File | Owns |
| --- | --- |
| `site.json` | Name, nav, hero spread, ticker strings, contact block, socials, surprise dialog, colophon |
| `catalog.json` | Disciplines (name, hex accent, three specialties) each holding a `works[]` array — every work prints inline on the page |
| `profile.json` | Manifesto, "Currently exploring" readout, capability blocks |
| `stack.json` | Experience, education, tech-spec tags and "The Vouch Squad" references |

Every file is assigned to an interface in `src/types/cms.ts`, so `npm run build` fails with the exact field path if the JSON drifts. `src/data/index.ts` is the only place components import content from.

## Adding a work

```jsonc
{
  "title": "New Piece",
  "medium": "Short film",              // printed next to the title
  "year": "2026",                      // optional
  "description": "One paragraph.",
  "mediaUrl": "src/images/still.jpg",  // see media rules below
  "liveUrl": "https://example.com"     // optional outbound link
}
```

`mediaUrl` is classified automatically: image extensions print inline, Google Drive `/preview`, Facebook plugin, YouTube embed and Vimeo player URLs mount a click-to-load player, and anything else becomes a plain link.

## Adding a discipline

```jsonc
{
  "slug": "type",
  "title": "Type Design",
  "accent": "#E53828",                 // any hex token
  "specialties": ["Display faces", "Lettering", "Specimens"],
  "works": []
}
```

Bands render in array order with a live work count, and the section header tallies them automatically. Every work card is a single link straight to its source — there is no category step between the visitor and the work.

## Design notes

- Hairlines (`1.5–2px`) carry the structure; hard shadows are reserved for stickers, buttons and the sketchbook frame.
- `--font-display` (Archivo Black) is single-weight — never set `font-weight` above 400 on it or the browser will synthesise bold.
- Accent colours and the paper/ink pairing are declared once in `src/styles/tokens.css`.

## Deploy

`npm run build` emits a static `dist/` — deploy to Vercel, Cloudflare Pages or GitHub Pages (the included workflow builds and publishes `dist` on every push to `main`).
