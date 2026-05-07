# VFF Content Inventory

> **Stand:** 2026-04-20 (CEO-Audit, Live Wix-Site)  
> **Quelle:** https://www.veganfantasyfair.de (Wix, revision 980)  
> **Migration:** Wix → WordPress (Event: 4.-5. Juli 2026)

---

## Seiten-Inventar

| Wix-URL | Titel | Wörter | Bilder | Formular | Status | WP-Prio |
|---------|-------|--------|--------|----------|--------|---------|
| `/` | Homepage | 348 | 35 | Ja | **keep + update** | critical |
| `/das-konzept` | Das Konzept | 635 | 24 | Ja | **keep + rewrite** | high |
| `/die-fair` | Die Fair | 377 | 41 | Ja | **keep + update** | critical |
| `/programm` | Programm | 83 | 20 | Ja | **keep + expand** | critical |
| `/mitwirken` | Mitmachen / Anmelden | 284 | 21 | Ja | **keep + rewrite** | critical |
| `/anfahrt` | Anfahrt | 183 | 16 | Ja | **keep + update** | high |
| `/cosplay-und-waffenregeln` | Cosplay- & Waffenregeln | 382 | 16 | Ja | **keep** | medium |
| `/agb` | AGB | 282 | 15 | Ja | **keep** | medium |
| `/impressum` | Impressum | 3795 | 15 | Ja | **keep** (rechtlich pflicht) | required |
| `/rueckblick` | Rückblick | 64 | 19 | Ja | **keep** (Bildergalerie) | medium |
| `/rückblick2023` | Rückblick 2023 | 5011 | 24 | Nein | **archive** | low |
| `/produktinfo` | Produktinfo | 220 | 20 | Ja | **review** (Wix-spezifisch?) | low |

---

## Inhaltliche Hinweise

### Critical Pages (sofort migrieren)

**Homepage (`/`)**
- Hero-Bereich mit Event-Datum 2026 aktualisieren
- CTAs zu Aussteller-Anmeldung + Programm
- 35 Bilder: Galerie, Logos, Hero-Bild

**Die Fair (`/die-fair`)**
- Hauptseite über das Event-Konzept
- 41 Bilder: event atmospherics, gallery
- Muss 2026 Infos enthalten (Datum, Ort, Konzept)

**Programm (`/programm`)**
- Aktuell nur 83 Wörter — sehr dünn
- Für 2026 stark erweitern (Bühnen, Programmpunkte, Speaker)
- 2 Programm-Anmeldungen im Quest-Log (288 neue Kontakte)

**Mitmachen/Anmelden (`/mitwirken`)**
- Kritischste Seite für Conversion
- Aussteller-Registrierung: nur 4/1090 Kontakte angemeldet
- CTA-Text überarbeiten, Registrierungsformular einbauen

### High Priority

**Anfahrt (`/anfahrt`)**
- Datum/Ort 2026 aktualisieren
- Google Maps Embed prüfen (WP Plugin notwendig)

**Das Konzept (`/das-konzept`)**
- Longest content page (635 Wörter)
- Ggf. auf 2 Seiten aufteilen oder als About-Seite

### Low Priority / Archive

**Rückblick 2023 (`/rückblick2023`)**
- 5011 Wörter, 24 Bilder — Archivseite
- Als `/rueckblick/2023` migrieren (URL normalisieren: ü → ue)
- Nicht kritisch für Launch

**Produktinfo (`/produktinfo`)**
- Möglicherweise Wix-internen Zweck (Ticketing?)
- Vor Migration Inhalt prüfen — evtl. nicht nötig

---

## Neue Seiten für WordPress (nicht auf Wix vorhanden)

| Neue WP-URL | Inhalt | Prio |
|-------------|--------|------|
| `/aussteller/` | Aussteller-Anmeldung + Info | critical |
| `/sponsoren/` | Sponsor-Pakete (Platin/Gold/Silber/Bronze) | high |
| `/datenschutz/` | DSGVO Datenschutzerklärung | required |

---

## Asset-Inventar (Schätzung)

- **Bilder gesamt:** ~250 unique Bilder auf der Wix-Site
- **Logos:** In NAS `N:\02-Ci\Veganfantasyfair\Logo\`
- **CI-Assets:** In NAS `N:\02-Ci\Veganfantasyfair\`
- **Font-Lizenzen:** tanseekmodernw20-light, peaches-and-cream → Prüfung ausstehend (DESIGN-SPEC.md)
