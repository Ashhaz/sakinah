# Sakinah — A quiet place for difficult days

Sakinah is a static-first Next.js website for exploring emotional, psychological and physical wellbeing topics through carefully referenced Qur'anic verses, hadith, contextual notes and practical next steps.

## What's included

- Next.js App Router with static export (`out/`)
- TypeScript content models and reusable problem pages
- 16 individual problem pages with emotional/physical categories
- Client-side search and filters
- Qur'an & Hadith source library with source links and context notes
- One carefully referenced Prophetic du'a starter page
- Curated reminders page
- Responsive navigation and layouts
- Motion-based reveal animations with reduced-motion support
- React Three Fiber ambient particles and a subtle crescent/orbit scene, dynamically loaded
- Accessibility basics: semantic landmarks, skip link, labels, focus states and reduced-motion handling
- No login, database, analytics or server-side personal data collection

## Requirements

- Node.js 20.9 or newer (recommended: current Node.js LTS)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. On Windows, you can also double-click `start-dev.bat` to install dependencies (if needed) and launch the development server.

## Type-check and build

```bash
npm run typecheck
npm run build
```

Because `output: "export"` is enabled, Next.js writes the static site to `out/`. Upload the contents of `out/` to a static host such as Netlify, Cloudflare Pages, Vercel static hosting, or an ordinary web server. No database or backend is required.

## Project structure

```text
sakinah-next/
├── public/
│   ├── icon.svg
│   ├── mountains.svg
│   └── og-cover.svg
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── duas/page.tsx
│   │   ├── problems/page.tsx
│   │   ├── problems/[slug]/page.tsx
│   │   ├── quran-hadith/page.tsx
│   │   ├── reminders/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── content/
│   │   ├── problems.ts
│   │   ├── references.ts
│   │   └── reminders.ts
│   └── lib/site.ts
├── CONTENT_REVIEW.md
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Add a new problem

1. Open `src/content/problems.ts`.
2. Add a problem object using a unique URL-safe `slug`.
3. Add only reference IDs that exist in `src/content/references.ts`.
4. Add the slug to related topics only when those topics exist.
5. Add a support note when it is appropriate. Mental-health pages should not omit the professional-support guidance.
6. Run `npm run typecheck` and `npm run build`.

The dynamic route uses `generateStaticParams()`, so every problem entry becomes a separate static route at build time.

## Add a Qur'an or hadith reference

1. Verify the original source, exact Arabic, translation and context.
2. For Qur'an, include the surah and ayah and name the English translation.
3. For hadith, include the collection and number, narrator when known, and grading where relevant. Numbering may vary by edition.
4. Add the source URL and a context note.
5. Add an `applicationNote` explaining the limits of the reflection on Sakinah.
6. Have a qualified reviewer check religious interpretation before public release.

## Design and performance notes

- The 3D canvas is dynamically imported and decorative (`aria-hidden`).
- The hero has CSS fallback styling if WebGL is unavailable.
- `prefers-reduced-motion` disables the 3D scene and reduces CSS animation.
- There are no external images required. Google Fonts are loaded as a progressive enhancement; system fallbacks remain available.
- `next/image` optimization is not needed for this image-light static starter.

## Important content and care disclaimer

Sakinah is an educational and spiritual reflection project. It is not a fatwa service, diagnosis, treatment plan or crisis service. The initial source list was checked against the linked Qur'an and hadith pages while preparing this starter, but all content and interpretation should receive qualified human review before public release. Never use a verse or hadith to shame someone, invalidate distress, discourage treatment or claim that a mental-health condition is simply weak iman.
