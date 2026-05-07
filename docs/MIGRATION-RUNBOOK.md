# VFF WordPress Migration Runbook

> **Stand:** 2026-04-20  
> **Autor:** Hiro (CEO)  
> **Ziel:** Web Developer kann sofort loslegen, sobald All-Inkl-Zugang da ist (NEXA-192/197)  
> **Referenzen:** DESIGN-SPEC.md · CONTENT-INVENTORY.md · URL-MAP.md

---

## 0. Voraussetzungen (Board → Web Developer)

| Was | Wer | Status |
|-----|-----|--------|
| All-Inkl KAS-Login oder WP-URL + Admin-Credentials | Daniel (Board) | **VORHANDEN** (NEXA-197, P:\_secure\all-inkl-kas-login.txt, User: retrosaar.de, erhalten 2026-04-28) |
| Ziel-Domain: `veganfantasyfair.de` (Wix → All-Inkl) | Board | offen (DNS nach Go-Live) |
| NAS-Zugriff für Logo-Upload: `N:\02-Ci\Veganfantasyfair\Logo\` | Daniel | bereit |

---

## 1. WordPress-Installation (All-Inkl KAS)

```
KAS: https://kas.all-inkl.com
→ Webhosting → Domains → veganfantasyfair.de
→ "WordPress installieren" (1-Click-Installer)
   Verzeichnis: / (Hauptverzeichnis der Domain)
   Admin-User:  admin_vff
   E-Mail:      daniel.igel@gmail.com (oder VFF-Postfach)
```

**Nach Installation: WP-Admin öffnen, Einstellungen → Allgemein:**
- Site-Titel: `Vegan Fantasy Fair`
- Tagline: `4. & 5. Juli 2026 · Schlosspark Geislautern, Völklingen`
- Zeitzone: `Europe/Berlin`
- URL: `https://veganfantasyfair.de` (sobald SSL aktiv)

---

## 2. Pflicht-Plugins installieren

Plugins → Neu hinzufügen → Suchen + Installieren:

| Plugin | Zweck | Priorität |
|--------|-------|-----------|
| **GeneratePress** | Schlankes Base-Theme (kein Page-Builder nötig) | critical |
| **Yoast SEO** | Meta-Tags, Sitemap, Redirects | critical |
| **Redirection** | 301-Redirects aus URL-MAP.md | critical |
| **WPForms Lite** | Kontakt-/Anmeldeformulare | critical |
| **Classic Editor** (optional) | Einfachere Content-Eingabe | medium |
| **WP Super Cache** | Performance | medium |
| **UpdraftPlus** | Backup | high |

> Kein Elementor — zu schwer für diesen Stack. GeneratePress + Custom CSS reicht.

---

## 3. Theme-Konfiguration (GeneratePress)

### 3.1 Google Fonts einbinden

**Appearance → Customize → Typography:**

| Element | Font | Weight |
|---------|------|--------|
| Headings | Cinzel | 400, 700 |
| Body | Barlow | 400 (Regular) |
| Accent | Dancing Script | 400 |

Google Fonts Import-URL (in `Additional CSS` oder `functions.php`):
```
https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Barlow:wght@300;400;500&family=Dancing+Script:wght@400&display=swap
```

### 3.2 CSS-Variablen (Appearance → Customize → Additional CSS)

```css
:root {
  /* Farben — Wix-Website-Referenz (bewährt) */
  --color-primary:    #FF2800;
  --color-accent:     #FC8CC7;
  --color-yellow:     #FECF3B;
  --color-dark:       #8F4335;
  --color-green:      #79D797;
  --color-text:       #33302F;
  --color-bg:         #FFFFFF;

  /* Fonts */
  --font-display: 'Cinzel', serif;
  --font-body:    'Barlow', sans-serif;
  --font-accent:  'Dancing Script', cursive;

  /* Layout */
  --max-width: 1200px;
  --spacing-lg: 60px;
  --spacing-md: 32px;
  --spacing-sm: 16px;
}

/* CTA-Button Stil */
.wp-block-button .wp-block-button__link,
.btn-primary {
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 4px;
  font-family: var(--font-body);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Hero-Bereich */
.entry-header, .page-hero {
  background-color: var(--color-accent);
  color: var(--color-text);
  padding: var(--spacing-lg) 0;
}

h1, h2, h3 {
  font-family: var(--font-display);
  color: var(--color-primary);
}
```

### 3.3 Logo hochladen

**Appearance → Customize → Site Identity:**
- Logo: `N:\02-Ci\Veganfantasyfair\Logo\VFF_Logo_freigestellt.png` (transparent)
- Favicon: `VFF_Logo_klein.png` → als 32×32 zuschneiden

---

## 4. Seiten erstellen

**Seiten → Neu hinzufügen** für jede Seite. Permalinks = Slug aus Tabelle.

### Seitenübersicht (aus CONTENT-INVENTORY.md)

| Titel | Slug | Prio | Inhalt-Quelle |
|-------|------|------|---------------|
| Homepage | `/` | critical | Hero + CTAs |
| Die Fair | `die-fair` | critical | Event-Infos 2026 |
| Programm | `programm` | critical | Bühnen + Speaker |
| Mitmachen | `mitmachen` | critical | Aussteller-Formular |
| Anfahrt | `anfahrt` | high | Ort + Karte |
| Das Konzept | `konzept` | high | Über das Event |
| Rückblick | `rueckblick` | medium | Galerie-Seite |
| Rückblick 2023 | `rueckblick/2023` | low | Archiv |
| Cosplay-Regeln | `cosplay-und-waffenregeln` | medium | Regelwerk |
| AGB | `agb` | medium | Allg. Geschäftsbedingungen |
| Impressum | `impressum` | required | Pflichtseite |
| Datenschutz | `datenschutz` | required | DSGVO (neu) |
| Aussteller | `aussteller` | critical | neu, Anmeldung |
| Sponsoren | `sponsoren` | high | neu, Pakete |

**Wichtig für jede Seite:**
1. Seite erstellen → Slug setzen → Veröffentlichen
2. Yoast-SEO: Meta-Title + Meta-Description ausfüllen (aus CONTENT-INVENTORY.md)
3. `Mitmachen`-Seite: WPForms Lite-Formular einbetten (Aussteller-Anmeldung)

### Statische Startseite setzen

**Einstellungen → Lesen:**
- `Statische Seite` auswählen
- Startseite: `Homepage`

---

## 5. Navigation

**Appearance → Menus → Neues Menü: "Hauptnavigation"**

Reihenfolge:
1. Die Fair
2. Programm
3. Aussteller *(kritisch für Conversion!)*
4. Anfahrt
5. Mitmachen

Footer-Menü:
1. Impressum
2. Datenschutz
3. AGB

---

## 6. 301-Redirects konfigurieren

**Redirection-Plugin → Weiterleitungen → Neu:**

| Quell-URL | Ziel-URL | Code |
|-----------|----------|------|
| `/das-konzept` | `/konzept/` | 301 |
| `/mitwirken` | `/mitmachen/` | 301 |
| `/r%C3%BCckblick2023` | `/rueckblick/2023/` | 301 |
| `/rückblick2023` | `/rueckblick/2023/` | 301 |

> Alle weiteren Seiten werden direkt per Slug beibehalten — kein Redirect nötig.

---

## 7. SEO-Grundkonfiguration (Yoast)

**SEO → Allgemein → Features:**
- XML-Sitemap: ✓ aktiviert
- Breadcrumbs: ✓ aktiviert

**SEO → Search Appearance → Content Types:**
- Seiten: Index + Snippet aktiviert
- Autoren-Archiv: `noodp` / deaktiviert (keine Blog-Posts geplant)

**Nach Go-Live:**
1. Google Search Console: Domain `veganfantasyfair.de` verifizieren
2. Sitemap einreichen: `https://veganfantasyfair.de/sitemap_index.xml`

---

## 8. Aussteller-Anmeldeformular (WPForms Lite)

**WPForms → Neu → Einfaches Kontaktformular als Basis:**

Felder für `mitmachen`-Seite:
- Name (Pflicht)
- E-Mail (Pflicht)
- Unternehmensname (Pflicht)
- Art des Ausstellers: Aussteller / Food / Handwerk / Flohmarkt (Dropdown)
- Telefon (optional)
- Kurzbeschreibung Stand (Textbereich)
- Datenschutz-Zustimmung (Pflicht-Checkbox)

Formular-Benachrichtigung → E-Mail an: `daniel.igel@gmail.com`

---

## 9. Google Maps (Anfahrt-Seite)

All-Inkl: kein Server-Side-Rendering-Problem → Google Maps Embed direkt:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
  width="100%" height="400" style="border:0;"
  allowfullscreen="" loading="lazy">
</iframe>
```

> Kein WP-Plugin nötig — Embed-URL direkt vom Google Maps "Teilen → Karte einbetten".  
> Veranstaltungsort: **Schlosspark Geislautern, Völklingen** → Google Maps Embed-URL dort suchen.

---

## 10. DNS-Cutover (letzter Schritt)

Zeitplan: **Mindestens 7 Tage vor Event**, idealerweise 4 Wochen.

```
1. WP-Seite auf All-Inkl vollständig fertig + QA
2. SSL-Zertifikat auf All-Inkl aktiv (Let's Encrypt)
3. Wix: Custom Domain deaktivieren / entfernen
4. All-Inkl KAS: A-Record setzen
   veganfantasyfair.de → [All-Inkl IP]
   www.veganfantasyfair.de → [All-Inkl IP]
5. TTL: 300 für Cutover, danach 3600
6. DNS-Propagation abwarten (~1-24h)
7. Google Search Console: Adressänderung melden
```

---

## 11. Pre-Launch-Checkliste

- [ ] Alle 14 Seiten veröffentlicht (kein `Entwurf`)
- [ ] Event-Datum `4. & 5. Juli 2026` auf Homepage + Die Fair korrekt
- [ ] Logo in Header sichtbar, Favicon gesetzt
- [ ] Mitmachen-Formular: Testübermittlung → E-Mail empfangen
- [ ] Alle 4 Redirects in Redirection-Plugin aktiv
- [ ] Impressum + Datenschutz abrufbar (DSGVO-Pflicht)
- [ ] Yoast SEO: Keine kritischen Fehler in Site Health
- [ ] Google Fonts laden korrekt (keine 404)
- [ ] Mobile-Ansicht geprüft (iPhone-Größe)
- [ ] SSL aktiv (HTTPS, kein Mixed Content)
- [ ] UpdraftPlus: Backup vor DNS-Cutover

---

## Zeitplan (Schätzung)

| Schritt | Aufwand | Wer |
|---------|---------|-----|
| WP-Install + Plugins | 30 min | Web Developer |
| Theme + CSS + Fonts | 2h | Web Developer |
| 14 Seiten anlegen (Grundstruktur) | 3h | Web Developer |
| Inhalte einfügen (Texte aus Wix) | 4h | Web Developer |
| Bilder hochladen + optimieren | 2h | Web Developer |
| Formular + Redirects + SEO | 1h | Web Developer |
| QA + Mobile-Check | 1h | Web Developer |
| DNS-Cutover | 30 min | Web Developer + Board |
| **Gesamt** | **~14h** | |

> Voraussetzung: Alle-Inkl-Zugang + Logo-Dateien + Bild-Assets vorhanden.  
> Kritisch: Formular + Impressum + Datenschutz VOR DNS-Cutover final.
