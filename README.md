# Shamslux TechVault — Astro migration scaffold

**Status: migration in progress.** This is a working architecture starter, NOT a complete replacement of the original site. Existing content is retained under `migration-reference/`, and images under `public/assets/`.

## Requirements
Node.js 20.3+ or 22+, npm. Git. (Astro version should be pinned via lockfile after installation.)

## Local setup (PowerShell)
```powershell
cd .\techvault-astro
npm install
npm run dev
```
Open the local address printed by Astro, typically http://localhost:4321. Then:
```powershell
npm run check
npm run build
npm run preview
```

## Git branch workflow
From the **existing repository** root, create a feature branch **before copying** this scaffold into it:
```powershell
git status
git switch main
git pull --ff-only
git switch -c feat/astro-i18n
```
Copy the scaffold files (not the containing directory) into the repo root. Do not copy a second `.git` directory. Existing HTML files should remain until migration is validated. Inspect `git status`, then `git add -A`, `git commit -m "feat: scaffold Astro multilingual portfolio"`. Push with `git push -u origin feat/astro-i18n` when ready. **Do not merge or deploy yet.**

## Architecture
- `src/pages/[lang]/[...page].astro`: statically generated pages, localized URLs
- `src/layouts/BaseLayout.astro`: shared semantic header/footer, SEO metadata, hreflang, language switch preserving current page
- `src/i18n/locales/*.json`: interface translations for 9 languages
- `src/data/projects.ts`: initial verified GitHub project references
- `public/assets/`: copied assets from original site
- `migration-reference/`: original eight pages to migrate and check

## Important TODOs
1. Replace `https://example.com` in `astro.config.mjs` with actual public URL **before deploying**.
2. Migrate all original content; currently only homepage and five data project references are represented. About/career/web pages are placeholders.
3. Review all nine translations with speakers/reviewers. Project content is not yet translated.
4. Add actual site URL, OG image, robots.txt, sitemap, and a 404 page before launch.
5. Run responsive, keyboard, screen-reader, Lighthouse and link checks.
6. Audit licensing of copied assets and remove unused files.
7. Decide whether to move to Astro content collections for larger project catalogs.

**No analytics, tracking, server, database, or API keys are required for this static scaffold.**
