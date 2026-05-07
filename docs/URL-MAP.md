# VFF URL-Map (Wix → WordPress)

> **Stand:** 2026-04-20  
> **Zweck:** Redirect-Konfiguration für Wix→WP-Migration (NEXA-23)

---

## Seiten-Redirects

| Wix-URL (alt) | WordPress-URL (neu) | HTTP | Notiz |
|---------------|---------------------|------|-------|
| `/` | `/` | 200 | Direkt, kein Redirect |
| `/das-konzept` | `/konzept/` | 301 | Slug vereinfachen |
| `/die-fair` | `/die-fair/` | 301 | Beibehalten |
| `/programm` | `/programm/` | 301 | Beibehalten |
| `/mitwirken` | `/mitmachen/` | 301 | Konsistenter Slug |
| `/anfahrt` | `/anfahrt/` | 301 | Beibehalten |
| `/cosplay-und-waffenregeln` | `/cosplay-und-waffenregeln/` | 301 | Beibehalten |
| `/agb` | `/agb/` | 301 | Beibehalten |
| `/impressum` | `/impressum/` | 301 | Beibehalten |
| `/rueckblick` | `/rueckblick/` | 301 | Beibehalten |
| `/rückblick2023` | `/rueckblick/2023/` | 301 | URL normalisieren (ü→ue) + Archiv-Struktur |
| `/r%C3%BCckblick2023` | `/rueckblick/2023/` | 301 | Encoded-Variant |
| `/produktinfo` | *(prüfen)* | 301/410 | Inhalt prüfen, ggf. 410 Gone |

---

## Neue WordPress-URLs (kein Wix-Äquivalent)

| WordPress-URL | Inhalt |
|---------------|--------|
| `/aussteller/` | Aussteller-Info + Anmeldeformular |
| `/sponsoren/` | Sponsor-Pakete |
| `/datenschutz/` | DSGVO Datenschutzerklärung |

---

## Nginx/WordPress Redirect-Konfiguration

```nginx
# Wix → WordPress Redirects für veganfantasyfair.de
# Einzufügen in nginx site config oder .htaccess

rewrite ^/das-konzept/?$           /konzept/               permanent;
rewrite ^/mitwirken/?$             /mitmachen/             permanent;
rewrite ^/r%C3%BCckblick2023/?$   /rueckblick/2023/       permanent;
rewrite ^/r[uü]ckblick2023/?$     /rueckblick/2023/       permanent;
# Restliche Seiten: WP Permalinks übernehmen (trailing slash)
```

---

## SEO-Hinweise

- Alle 301-Redirects müssen vor Go-Live in WP konfiguriert sein (Plugin: Redirection)
- Google Search Console nach Migration: Sitemap neu einreichen
- Bestehende Backlinks auf `/mitwirken` und `/das-konzept` prüfen (301 fängt das ab)
- `/rückblick2023` → URL-Encoding-Problem auf Wix → in WP als `/rueckblick/2023/` normalisieren
