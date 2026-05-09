import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mitmachen",
  description:
    "Werde Aussteller:in auf der Vegan Fantasy Fair 2026. Food, Fashion, Handwerk, Services — bewirb dich jetzt für deinen Stand am 4. & 5. Juli in Völklingen.",
};

const BENEFITS = [
  {
    icon: "🎯",
    title: "1000+ Besucher:innen an 2 Tagen",
    text: "Die VFF bringt am 4.–5. Juli eine fokussierte Community zusammen, die aktiv nach neuen Produkten und Services sucht. Deine Zielgruppe — direkt an deinem Stand.",
  },
  {
    icon: "🤝",
    title: "Netzwerk-Effekt",
    text: "Vernetze dich mit anderen veganen Brands, Food-Trucks und Dienstleistern. Viele Aussteller:innen berichten von wertvollen Kooperationen und Wiederkehr-Besucher:innen.",
  },
  {
    icon: "📢",
    title: "Marketing-Support durch die VFF",
    text: "Social-Media-Promotion, Feature in Festival-Newsletter, Eintrag in Website & Programm-Verzeichnis, Unterstützung bei Presse & lokalen Medien.",
  },
  {
    icon: "🌱",
    title: "Teil einer Mission, die wächst",
    text: "Die VFF steht für veganes Netzwerk und Community-Building. Mit deinem Stand förderst du ein bedeutsames Event im Saarland — und profitierst von derselben Sichtbarkeit.",
  },
];

const CATEGORIES = [
  {
    title: "Food & Getränke",
    items: [
      "Vegane Lebensmittel zum Mitnehmen (Baked Goods, Saucen, Snacks)",
      "Vegane Getränke (Smoothies, Kaffee, Saft, Bier & Wein)",
      "Food-Trucks & Catering (mit veganen Gerichten)",
      "Lebensmittelhandwerk (Käse, Fermente etc.)",
    ],
  },
  {
    title: "Fashion & Lifestyle",
    items: [
      "Vegane Mode & Accessoires",
      "Kosmetik & Naturprodukte",
      "Nachhaltige Alltags-Items (Taschen, Schmuck etc.)",
      "Vegan-zertifizierte Brands",
    ],
  },
  {
    title: "Service & Dienstleistungen",
    items: [
      "Ernährungsberatung & veganes Coaching",
      "Nachhaltige Services (Reparatur, Beratung etc.)",
      "Workshops & Bildungsangebote",
      "Verbände & Organisationen der veganen Community",
    ],
  },
  {
    title: "Handwerk & Kreatives",
    items: [
      "Handgefertigte vegane Produkte",
      "Kunsthandwerk & Künstler:innen",
      "Upcycling & nachhaltige Kreativität",
      "Print & Design",
    ],
  },
];

const FAQ = [
  {
    q: "Wie viele Personen dürfen an meinem Stand mitarbeiten?",
    a: "Pro 2×3 m Stand: bis zu 3 Personen. Größere Teams nach Absprache.",
  },
  {
    q: "Brauche ich eine besondere Genehmigung für Food?",
    a: "Ja. Food-Aussteller:innen müssen Hygienebestätigungen einreichen. Wir helfen beim Prozess.",
  },
  {
    q: "Gibt es Rückgaberecht für die Stand-Gebühr?",
    a: "Die Anzahlung ist bei Absage bis 30. Mai 2026 kostenfrei rückgängig zu machen. Danach beträgt die Stornogebühr 10% der Gesamtgebühr. Für weitere Details siehe AGB.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Formular ausfüllen",
    text: "Kontaktdaten, Unternehmen, Kurzbeschreibung deines Angebots, gewünschte Stand-Größe und spezielle Anforderungen (Strom, Parkplatz etc.).",
  },
  {
    step: "2",
    title: "Bestätigung & Anzahlung",
    text: "Innerhalb 5 Werktagen prüfen wir, ob dein Angebot zur VFF passt. Per E-Mail erhältst du Bestätigung und Rechnung. Mit Zahlungseingang ist dein Stand gebucht.",
  },
  {
    step: "3",
    title: "Vorbereitung & Event",
    text: "Du bekommst ein Info-Paket zu Auf- & Abbau, Parken, Strom und Sicherheits-Briefing. 2 Wochen vorher promoten wir deinen Stand in unseren Kanälen.",
  },
];

export default function MitmachenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Dein Stand auf der Vegan Fantasy Fair
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-6 leading-relaxed">
            Du hast vegane Lebensmittel, handwerkliche Produkte oder Services,
            die die vegane Community lieben w&uuml;rde? Dann bist du bei der
            Vegan Fantasy Fair 2026 genau richtig.
          </p>
          <p className="text-primary font-semibold mb-8">
            Pl&auml;tze sind limitiert und werden nach Eingang der Anmeldungen
            vergeben.
          </p>
          <Link
            href="/aussteller"
            className="inline-block px-8 py-4 bg-cta text-white rounded-3xl font-semibold text-lg hover:bg-cta-hover hover:scale-105 shadow-card hover:shadow-card-hover transition-all"
          >
            Jetzt als Aussteller:in bewerben
          </Link>
        </div>
      </section>

      {/* Warum ausstellen */}
      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Warum ausstellen auf der Vegan Fantasy Fair?
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-surface p-6 rounded-lg shadow-card"
              >
                <div className="text-3xl mb-3" aria-hidden="true">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {b.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Wer darf mitmachen?
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-surface-white p-6 rounded-lg shadow-card"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {cat.title}
                </h3>
                <ul className="space-y-1 text-text-muted text-sm">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="text-secondary mt-0.5"
                        aria-hidden="true"
                      >
                        &#10003;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-2xl mx-auto bg-surface-white p-6 rounded-lg border border-primary/10">
            <h3 className="font-semibold text-primary mb-2">Was NICHT passt</h3>
            <ul className="space-y-1 text-text-muted text-sm list-disc pl-5">
              <li>Nicht-vegane Produkte oder Angebote</li>
              <li>
                Artikel, die gegen die VFF-Werte versto&szlig;en (z.B.
                nicht-nachhaltige Massenware)
              </li>
              <li>
                Kommerzielle Services au&szlig;erhalb des
                veganen/nachhaltigen Kontextes
              </li>
            </ul>
            <p className="text-text-muted text-sm mt-3">
              Unsicher, ob dein Angebot passt?{" "}
              <a
                href="mailto:info@veganfantasyfair.de"
                className="text-primary underline"
              >
                Schreib uns
              </a>{" "}
              &mdash; wir pr&uuml;fen gerne im Einzelfall!
            </p>
          </div>
        </div>
      </section>

      {/* Standoptionen CTA */}
      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary mb-4">
            Was kostet ein Stand?
          </h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
            Die Stand-Geb&uuml;hren richten sich nach Gr&ouml;&szlig;e und
            Art des Angebots. Alle Details zu Freifl&auml;che, Zelt-Standplatz
            und Gastrostand findest du auf unserer Preisseite.
          </p>
          <Link
            href="/standoptionen"
            className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-3xl font-semibold hover:bg-primary hover:text-white hover:scale-105 shadow-card hover:shadow-card-hover transition-all"
          >
            Standoptionen &amp; Preise ansehen
          </Link>
        </div>
      </section>

      {/* Wie anmelden */}
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Wie anmelden? 3 einfache Schritte
          </h2>
          <div className="grid gap-6 desktop:grid-cols-3 max-w-4xl mx-auto">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            H&auml;ufige Fragen
          </h2>
          <div className="space-y-4">
            {FAQ.map((faq) => (
              <div
                key={faq.q}
                className="bg-surface p-6 rounded-lg"
              >
                <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt + CTA */}
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary mb-4">
            Fragen? Wir sind da!
          </h2>
          <p className="text-text-muted mb-6">
            Schreib uns an{" "}
            <a
              href="mailto:info@veganfantasyfair.de"
              className="text-primary underline font-semibold"
            >
              info@veganfantasyfair.de
            </a>
          </p>
          <Link
            href="/aussteller"
            className="inline-block px-8 py-4 bg-cta text-white rounded-3xl font-semibold text-lg hover:bg-cta-hover hover:scale-105 shadow-card hover:shadow-card-hover transition-all"
          >
            Jetzt als Aussteller:in bewerben
          </Link>
        </div>
      </section>
    </>
  );
}
