# VFF Design Specification

> **Quelle:** NAS `N:\02-Ci\Veganfantasyfair\` + Vault `brand/next-heroes/vff.md`  
> **Stand:** 2026-04-05  
> **Migration:** Wix → WordPress (zukünftiger Stack noch offen)

---

## 1. Design Tokens

### 1.1 Farben — CI/Logo

Aus dem offiziellen Color Schema (`N:\02-Ci\Veganfantasyfair\Color schema VFF.png`):

| Token | Hex | RGB | Verwendung |
|-------|-----|-----|------------|
| `color-primary` | `#A03020` | 160, 48, 32 | „Fantasy" Schrift, Primary CTAs |
| `color-accent-orange` | `#D08040` | 208, 128, 64 | Stern-Strahlen, Highlights |
| `color-accent-gold` | `#D0A050` | 208, 160, 80 | Hintergrund-Verlauf, Dekor |
| `color-secondary` | `#506020` | 80, 96, 32 | „Vegan"/„Fair" Schrift, Links |
| `color-secondary-light` | `#607030` | 96, 112, 48 | Blätter, Ornamente |
| `color-white` | `#FFFFFF` | 255, 255, 255 | Hintergrund, Invertierte Texte |

### 1.2 Farben — Website (Wix-Referenz)

Aktuell auf veganfantasyfair.de (Wix) verwendete Farben — Ausgangspunkt für WordPress-Migration:

| Token | Hex | Verwendung |
|-------|-----|------------|
| `color-web-red` | `#FF2800` | Primary, CTA-Buttons, Text-Akzente |
| `color-web-pink` | `#FC8CC7` | Hauptakzent (häufigste Seitenfarbe) |
| `color-web-yellow` | `#FECF3B` | Sekundär-Akzent |
| `color-web-brown-dark` | `#8F4335` | Dunkel-Akzent |
| `color-web-green` | `#79D797` | Tertiär |
| `color-web-brown-text` | `#33302F` | Body Text |
| `color-web-white` | `#FFFFFF` | Hintergrund |

> **Hinweis Design-Entscheidung:** Die Wix-Website verwendet abweichende Farben vom Logo-CI. Für die WordPress-Neuentwicklung ist zu klären, ob die CI-Farben (`#A03020`, `#506020`) als Basis dienen oder die bewährten Website-Farben. → **Entscheidung durch Hiro/Board required.**

### 1.3 Farbsemantik (empfohlen für WordPress)

```css
--color-primary:     #A03020;  /* Terracotta-Rot, Haupt-CTA */
--color-secondary:   #506020;  /* Dunkelgrün, Akzent */
--color-accent:      #D08040;  /* Orange/Gold, Highlights */
--color-gold:        #D0A050;  /* Gold, Hintergründe */
--color-text:        #33302F;  /* Body Text (von Wix übernommen) */
--color-background:  #FFFFFF;  /* Hintergrund */
```

---

## 2. Typografie

| Rolle | Font | Stil | Quelle |
|-------|------|------|--------|
| Display / Hero | `tanseekmodernw20-light` | Arabisch-inspirierte Serif | Wix-Font (lizenzpflichtig) |
| Body | `Barlow` | Medium, ExtraLight | Google Fonts (frei) |
| Accent / Handschrift | `peaches-and-cream` | Kursiv | Wix-Font |
| Small / UI | `din-next-w01-light` | Light | Wix-Font |
| Dekorativ (NAS) | `Pieces of Eight` | Display | NAS: `N:\02-Ci\Veganfantasyfair\Fonts\` — **nur privat, kein kommerzieller Einsatz** |

### Font-Stack (WordPress-Empfehlung)

- `tanseekmodernw20-light` → Lizenzprüfung nötig, ggf. Alternative: **Playfair Display** oder **Cormorant Garamond**
- `Barlow` → Google Fonts, kostenlos einsetzbar ✓
- `peaches-and-cream` → Lizenzprüfung nötig, ggf. Alternative: **Dancing Script**
- `din-next-w01-light` → Lizenzprüfung nötig, ggf. Alternative: **Source Sans 3**

> **TODO:** Schriftlizenzen für WordPress klären. Daniel prüft verfügbare Alternativen.

---

## 3. Logo & CI-Assets

### Verfügbare Varianten (NAS: `N:\02-Ci\Veganfantasyfair\Logo\`)

| Datei | Format | Verwendung |
|-------|--------|------------|
| `VFF_Logo.png` | PNG | Standard-Logo (auf hellem Hintergrund) |
| `VFF_Logo_freigestellt.png` | PNG (transparent) | Auf farbigen/Bild-Hintergründen |
| `VFF_Logo_klein.png` | PNG | Footer, Favicon-Basis, kleinere Einbindungen |
| `VFF_Logo_weiss_quadratisch.png` | PNG (weiß) | Dunkle Hintergründe, Header-Inversionen |

**Vektoren:** VFF-Logo.ai / .eps → Google Drive  
**Schriften-Dok:** Google Drive ID `1vUpM5bIt1cgCbgVzWnpTEHAfPy_X1fYpmWIL4INGCVA`

### Logo-Verwendungsregeln (aus CI)

- Mindestabstand: ca. 1× Logo-Höhe rundum (solange kein explizites Schutzraum-Dok vorhanden)
- Farbvarianten: Original (auf Weiß), Freigestellt (auf Farbe/Bild), Weiß (auf Dunkel)
- Keine KI-Generierung, keine Verzerrung, keine Farbverfälschung

---

## 4. Weitere CI-Assets (NAS)

| Verzeichnis | Inhalt | Status |
|-------------|--------|--------|
| `Backgrounds/` | Hintergrundgrafiken | Leer (noch nicht befüllt) |
| `Icons/` | Icon-Set | Leer (noch nicht befüllt) |
| `Socialmedia/` | Social-Media-Vorlagen | Leer (noch nicht befüllt) |
| `Signatur/` | HTML-E-Mail-Signatur (`Signatur.html` + `logo.jpg`) | Vorhanden |
| `Fonts/` | Pieces of Eight (dekorativ, freeware) | Nur privat |

---

## 5. Komponenten-Inventar

> **Stand:** Aus Wix-Website-Beobachtung (veganfantasyfair.de). Kein Export vorhanden — zu validieren wenn Wix-Exportdaten vorliegen.

### 5.1 Seitenstruktur (angenommen)

- **Header:** Logo + Navigation + ggf. Datum-Badge
- **Hero:** Fullwidth-Bild/-Grafik mit Event-Titel + CTA-Button
- **Programm-Sektion:** Raster oder Liste mit Programmpunkten
- **Aussteller-Sektion:** Logo-Raster, ggf. mit Filter
- **Info-Sektion:** Ort, Datum, Anfahrt (Text + Karte)
- **FAQ:** Accordion
- **Footer:** Logo + Navigation + Social Links + Impressum

### 5.2 Basis-Komponenten (erwartet)

| Komponente | Varianten | Anmerkung |
|------------|-----------|-----------|
| Button | Primary (Rot), Secondary (Grün) | CTA-Fokus |
| Card | Event-Card, Aussteller-Card | Mit Bild + Text |
| Navigation | Desktop-Nav, Mobile-Hamburger | |
| Hero | Text-über-Bild | Fullwidth |
| Badge / Pill | Datum, Kategorie | |
| Accordion / FAQ | Open/Close | |
| Logo-Grid | Aussteller-Logos | |

> **TODO:** Vollständiges Komponenten-Inventar nach Wix-Analyse durch Daniel. Wireframes folgen.

---

## 6. Grid & Layout

> **Keine Exportdaten aus Wix verfügbar.** Folgende Werte sind Standard-Empfehlungen für die Neuentwicklung:

### Desktop (≥ 1280px)
- Grid: 12 Spalten, 24px Gutter, max. 1200px Content-Breite
- Seitenabstand: 40px

### Tablet (768px – 1279px)
- Grid: 8 Spalten, 20px Gutter
- Seitenabstand: 24px

### Mobile (375px – 767px) — **Primary Target**
- Grid: 4 Spalten, 16px Gutter
- Seitenabstand: 16px
- Mobile-First Entwicklung

---

## 7. Asset-Katalog

### Bilder-Bibliothek

| Pfad | Inhalt |
|------|--------|
| `N:\01-Medien\Fotos\VFF\` | Event-Fotos (Rückblick) |
| `N:\02-Ci\Veganfantasyfair\Logo\` | Logo-Varianten |
| `N:\02-Ci\Veganfantasyfair\Backgrounds\` | Hintergrundgrafiken (leer) |
| `N:\02-Ci\Veganfantasyfair\Icons\` | Icons (leer) |
| `N:\02-Ci\Veganfantasyfair\Socialmedia\` | Social Templates (leer) |

### Bild-Standards (für WordPress-Entwicklung)

- Format: **WebP** (mit PNG/JPG Fallback)
- Max. Dateigröße: **200 KB** pro Bild
- Responsive: `srcset` mit 375w, 768w, 1280w, 1920w
- Alt-Texte: Pflicht für alle Content-Bilder

---

## 8. Offene Punkte & Abhängigkeiten

| # | Punkt | Verantwortlich | Status |
|---|-------|---------------|--------|
| 1 | Font-Lizenzen für WordPress klären (tanseekmodern, peaches-and-cream, din-next) | Daniel (Design) | Offen |
| 2 | Farb-Entscheidung: CI-Farben vs. Wix-Website-Farben für WordPress | Hiro (CEO) | Offen |
| 3 | Wix-Seiten exportieren / Screenshots für vollständiges Seiten-Inventar | Daniel / Board | Offen |
| 4 | Aussteller-Logos aus NAS `N:\01-Medien\Logos\Sponsoren\` sichten | Lead Designer | Offen |
| 5 | NAS-Verzeichnisse (Backgrounds/, Icons/, Socialmedia/) befüllen | Daniel (Design) | Offen |
| 6 | Wireframes für alle Seitentypen erstellen | Lead Designer | Folgt nach #3 |
| 7 | Vektordaten (AI/EPS) aus Google Drive in NAS spiegeln | Hiro / Board | Empfohlen |

---

## 9. Quellen

- Vault: `C:/Users/User/vault/brand/next-heroes/vff.md`
- NAS CI-Root: `N:\02-Ci\Veganfantasyfair\`
- NAS Asset Registry: `C:/Users/User/vault/tech/nas-asset-registry.md`
- Color Schema: `N:\02-Ci\Veganfantasyfair\Color schema VFF.png` (analysiert 2026-04-05)
