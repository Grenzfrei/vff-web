# Cloudflare Pages Deployment — veganfantasyfair.de

VFF Website static deployment to Cloudflare Pages with Google Sheets content sync.

## Overview

- **Repository:** https://github.com/Grenzfrei/vff-web
- **Build:** `npm run sync && npm run build` → `out/`
- **Platform:** Cloudflare Pages
- **Domain:** veganfantasyfair.de (post-July 2026 go-live)
- **Content Source:** Google Sheets (`1OE9YkKrvOapJCvaHfdzBHw2twbi8L2Mi8Z2cTPcVEJo`)

## Prerequisites

### GitHub
- Repository pushed to Grenzfrei/vff-web main branch ✓
- GitHub Actions workflows configured ✓

### Google Sheets Auth
For Cloudflare Pages build-time sync, use a Google Cloud Service Account JSON:

1. **Create Service Account** (if not done):
   ```bash
   # Via Google Cloud Console → Service Accounts → Create Service Account
   # Name: vff-sheets-sync
   # Grant: Editor (or minimal: Sheets read-only + Drive read)
   # Create JSON key
   ```

2. **Add to CF Pages Env Vars** (next section)

### Cloudflare Account
- Organization/account ready
- Pages enabled
- Domain managed or external DNS configured

## Cloudflare Pages Setup (Manual — Dashboard)

### 1. Create Pages Project

1. Cloudflare Dashboard → **Pages** → **Create application**
2. **Connect to Git** → GitHub
3. Select **Grenzfrei/vff-web** repository
4. Click **Begin Setup**

### 2. Build Configuration

Fill in build settings:

| Field | Value |
|-------|-------|
| **Framework preset** | None (Custom) |
| **Build command** | `npm run sync && npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `/` |
| **Node.js version** | 20 (set in Env Vars) |

### 3. Environment Variables

**Production:**

```
NODE_VERSION = 20
GOOGLE_APPLICATION_CREDENTIALS = {service-account-json-here}
```

**Preview (Optional):**
```
NODE_VERSION = 20
GOOGLE_APPLICATION_CREDENTIALS = {same-or-test-credentials}
```

**How to add:**
- Pages → **Project** → **Settings** → **Environment Variables**
- Add Production env, paste full JSON for `GOOGLE_APPLICATION_CREDENTIALS`

### 4. First Deploy

1. Click **Save and Deploy**
2. CF Pages builds and deploys to `vff-web.pages.dev`
3. Check **Build log** for sync/build errors
4. Test homepage at `https://vff-web.pages.dev/`

### 5. Connect Custom Domain

1. Pages → **Project** → **Custom domains** → **Add custom domain**
2. Enter **veganfantasyfair.de**
3. If domain in Cloudflare DNS → automatic CNAME
4. If external DNS → manually add CNAME to `vff-web.pages.dev`
5. SSL auto-provisions in ~5 min

### 6. Automatic Deployments

- **Production:** Every push to `main` → auto-deploy
- **Preview:** Every PR → preview deploy at `pr-XX.vff-web.pages.dev`

## Local Development

### Install & Sync

```bash
npm install
npm run sync          # Google Sheets → src/lib/data/*.json
npm run dev           # localhost:3000
npm run build         # Test build locally
```

### Build Script Details

- `sync-sheets.ts` reads from Spreadsheet ID (in `.config.ts`)
- Fetches each tab, writes JSON to `src/lib/data/`
- Outputs JSON sync logs (shows what was fetched)
- `npm run build` then runs `next build` (Next.js static export)
- Output goes to `out/` (served by CF Pages)

### Testing Sync Locally

```bash
# Requires gws CLI auth (Google Cloud credentials)
npm run sync

# Check output:
ls -la src/lib/data/   # Should have *.json files
cat src/lib/data/events.json | head -50  # Verify content
```

## Troubleshooting

### Build Fails: "Cannot find module 'gws'"
- `npm install` may not include gws CLI
- **Solution:** `npm install @google-cloud/identity-credentials` or use local `gws` CLI auth

### Sync Returns Empty Files
- Check Spreadsheet ID in `scripts/sync-sheets.config.ts`
- Verify sheet tabs exist (Events, Team, FAQ, etc.)
- Check Google Cloud credentials have read access

### "NODE_VERSION not found"
- Ensure env var is set in CF Pages settings (exact name: `NODE_VERSION = 20`)
- Redeploy after adding env var

### Domain Not Resolving
- If external DNS: verify CNAME is set to `vff-web.pages.dev`
- CF DNS: wait 5 min for propagation
- Test: `nslookup veganfantasyfair.de`

## Monitoring

### Build Logs
- Pages → **Project** → **Deployments** → click build → **View build log**
- Sync errors show here (e.g., "Sheet 'Events' not found")
- Build errors from Next.js shown in log

### Uptime & Performance
- Pages → **Project** → **Analytics** (if enabled)
- Check deploy times, error rates

### Content Updates
- To update site: edit Google Sheet tab → wait for next push to `main`
- **Manual re-deploy:** Pages → **Deployments** → click most recent → **Retry**

## Post-Go-Live (July 2026+)

Once approved for production:

1. **Domain DNS Switch:**
   - Update veganfantasyfair.de DNS to point to CF Pages
   - Remove VPS hosting (if running there)

2. **Monitoring:**
   - Set up CF Page Rules for caching, redirects if needed
   - Monitor build/deploy logs weekly

3. **Updates:**
   - Push code changes to `main` → auto-deploy
   - Update content in Google Sheet → manual re-deploy or setup webhook

## References

- **Vault:** `vault/tech/deploy-static-cloudflare-pages.md`
- **GitHub:** https://github.com/Grenzfrei/vff-web
- **Google Sheets:** [VFF Content Spreadsheet](https://docs.google.com/spreadsheets/d/1OE9YkKrvOapJCvaHfdzBHw2twbi8L2Mi8Z2cTPcVEJo)
- **Design Spec:** `docs/DESIGN-SPEC.md`
