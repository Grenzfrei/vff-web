# Content Guideline — VFF (veganfantasyfair.de)

## Deutsche Umlaute & sz

**Regel:** Ausschliesslich echte UTF-8-Umlaute (`ä`, `ö`, `ü`, `ß`) verwenden.
**Niemals** ASCII-Ersatzschreibweisen (`ae`, `oe`, `ue`, `ss`).

| Falsch | Richtig |
|--------|---------|
| Voelklingen | Völklingen |
| Saarbruecken | Saarbrücken |
| Koestlichkeiten | Köstlichkeiten |
| fuehl | fühl |
| Kueche | Küche |
| Kostueme | Kostüme |
| Kuenstler:innen | Künstler:innen |
| Fuenf | Fünf |
| Atmosphaere | Atmosphäre |
| Gelaende | Gelände |
| ueber | über |
| Groesse | Größe |
| Geschaeftsbeziehungen | Geschäftsbeziehungen |
| Haeufige | Häufige |
| moechtet | möchtet |
| erhaeltst | erhältst |
| Standplaetze | Standplätze |
| Naehe | Nähe |

### Ausnahmen

- **URLs/Slugs** bleiben ASCII (`/anfahrt` nicht `/anfährt` — korrekt)
- **Eigennamen/englische Begriffe** bleiben unveraendert (`Quest`, `Workshop`, `Foodtruck`)
- **Typ-/Variablen-Identifier** in Code bleiben ASCII (`fooFuenf` ist ok)

## Ort: Völklingen (immer mit Umlaut)

Der Veranstaltungsort heisst korrekt **Völklingen** — nie "Voelklingen".

## JSON-LD / Structured Data

Auch in Schema.org-Daten (`addressLocality`, `description`, `name`) echte Umlaute verwenden.

## Tonalitaet

Siehe `vault/brand/next-heroes/dachmarke.md` und `vault/brand/next-heroes/vff.md`.

Kernregeln fuer die VFF:
- Du-Form, inklusiv, community-fokussiert
- Gender-Doppelpunkt ("Künstler:innen", "Besucher:innen")
- Emotionale, lebendige Sprache (magisch, Abenteuer, Fantasie)
- Verboten: "Mekka", "Place to be", "einzigartig", "Highlight des Jahres"
- **KEINE KI-generierten Texte**

## Linter / CI

Ein ESLint-Check oder Pre-Commit-Hook, der unerlaubte ae/oe/ue in Text-Inhalten flagged, ist empfohlen.

Falls ESLint keine Custom-Rule dafuer existiert: `grep -rn '[Aa]e\|[Oo]e\|[Uu]e\|ss' src/` vor jedem Commit als Pre-commit-Hook.
