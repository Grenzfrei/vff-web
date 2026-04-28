# veganfantasyfair.de — Vegan Fantasy Fair Website

## Commands
```bash
npm run dev       # Dev-Server (localhost:3000)
npm run build     # Production Build (Static Export nach out/)
npm run test:run  # Vitest
npm run sync      # Google Sheets → JSON Sync (via gws CLI)
npm run lint      # ESLint
```

## Status (2026-04-25)
- **Migration ON-HOLD bis post-event Juli 2026** (Board-Entscheidung). Wix-Site bleibt produktiv.
- Drafts in `docs/page-content-*.md` bei Wiederaufnahme neu evaluieren.
- Vault: `vault/projects/vff-wordpress-migration-hold.md`

## Stack
- Next.js 14 (App Router), TypeScript strict, Tailwind CSS 3.4
- Vitest + Testing Library
- Content: **Google Sheets → JSON Sync** via `gws` CLI (build-time, keine Runtime-Dependency)
- Deployment: **Cloudflare Pages** (Static Export)

## Architektur
- `src/app/` — App Router Pages (/, /events, /aussteller, /sponsoren, /faq, /team, /anfahrt, /impressum, /datenschutz)
- `src/lib/constants.ts` — Zentrale Konstanten (Event, Company, Social, Nav)
- `src/lib/data/*.json` — Statische JSON-Dateien (build-time sync aus Google Sheets)
- `src/components/` — Wiederverwendbare Komponenten (Header, Footer)
- `scripts/sync-sheets.config.ts` — Sheet-Mappings + Spreadsheet-ID
- `scripts/sync-sheets.ts` — Sync-Script (liest via gws CLI)

## Brand CI
- Design-Tokens: `docs/DESIGN-SPEC.md`
- Farben in `tailwind.config.ts` (primary=#A03020 Terracotta, secondary=#506020 Dunkelgruen, accent=#D08040 Orange)
- Font: Barlow 400/500/600/700
- Mobile-First: 375px Basis, Breakpoints tablet(768)/desktop(992)/wide(1200)

## Content-Architektur
- Content-Quelle: Google Sheets (Events, Team, FAQ, Sponsoren) — `npm run sync` via `gws` CLI
- Spreadsheet-ID: `1OE9YkKrvOapJCvaHfdzBHw2twbi8L2Mi8Z2cTPcVEJo` (Drive: EVENTS/Vegan Fantasy Fair/Content)
- Build: `npm run sync && npm run build` (Sheets sync vor Next build)
- Kein Service Account noetig — `gws` CLI nutzt bestehende Google Auth

## Regeln
- **Zeitzone IMMER `Europe/Berlin`** — nie lokale Geraete-Zeitzone
- **Event-Daten als Konstanten** in `lib/constants.ts` — nie hardcoden
- **KEINE KI-generierten Texte** — Daniel schreibt Content
- **TDD Pflicht:** Test → Fail → Implement → Green
