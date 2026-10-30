# Build notes

- This is the complete source project, not just a visual mockup.
- The problem detail page is data-driven. Add entries to `src/content/problems.ts` to generate a new page at build time.
- The religious reference register lives in `src/content/references.ts` and includes context/application boundaries.
- The first release is intentionally backend-free and stores no visitor journal or mental-health data.
- Replace `https://sakinah.example` in `src/lib/site.ts` with the real domain before launch; update metadata and sitemap generation accordingly.
- Ask a qualified scholar/reviewer to check religious interpretation before publishing the site publicly.
