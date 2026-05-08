import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aussteller",
  description:
    "Werde Aussteller:in auf der Vegan Fantasy Fair 2026. Standkategorien, Preise und Bewerbungsprozess f\u00FCr vegane Marken, Foodtrucks und Kunsthandwerk.",
};

export default function AusstellerPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Werde Teil der Vegan Fantasy Fair
          </h1>
          <p className="text-lg text-text-muted mb-6">
            4. &amp; 5. Juli 2026 &middot; Schlosspark Geislautern, Völklingen
          </p>
          <a
            href="mailto:info@veganfantasyfair.de"
            className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors"
          >
            Jetzt bewerben
          </a>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Warum auf der VFF ausstellen?
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2">
            {[
              {
                title: "Große Reichweite",
                desc: "Erreich eine engagierte Community aus Vegan-Enthusiast:innen und neugierigen Besucher:innen.",
              },
              {
                title: "Professionelle Plattform",
                desc: "Präsentier deine Produkte und Dienstleistungen auf einer wachsenden Community-Veranstaltung mit engagiertem Publikum.",
              },
              {
                title: "Community-Netzwerk",
                desc: "Vernetz dich mit gleichgesinnten Ausstellenden und knüpf langfristige Geschäftsbeziehungen.",
              },
              {
                title: "Medienaufmerksamkeit",
                desc: "Der VFF erhält Berichterstattung in lokalen Medien und Social-Media-Kanälen.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-surface p-6 rounded-lg shadow-card"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            Stand-Kategorien
          </h2>
          <div className="grid gap-4 tablet:grid-cols-2 max-w-2xl mx-auto">
            {[
              {
                icon: "\uD83C\uDF31",
                title: "Veganes Food",
                desc: "Restaurants, Caterer, Food Trucks, Bäckereien, Süßwaren, Getränke",
              },
              {
                icon: "\uD83D\uDEE0\uFE0F",
                title: "Handwerk",
                desc: "Handgemachte Produkte, nachhaltiges Kunsthandwerk, DIY-Workshops",
              },
              {
                icon: "\uD83C\uDFA8",
                title: "Kunst & Design",
                desc: "Künstler:innen, Designer:innen, Illustrator:innen, Schmuck, Mode, Fotografie",
              },
              {
                icon: "\uD83C\uDFAD",
                title: "Cosplay & Kultur",
                desc: "Cosplay-Community, Performance, kulturelle Workshops, Entertainment",
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="bg-white p-5 rounded-lg border border-gray-100"
              >
                <p className="text-2xl mb-2">{cat.icon}</p>
                <h3 className="font-semibold text-text mb-1">{cat.title}</h3>
                <p className="text-text-muted text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Bewerbungsprozess
          </h2>
          <div className="space-y-6 max-w-2xl">
            {[
              {
                step: "1",
                title: "Informationen sammeln",
                desc: "Lies alle Details über die verfügbaren Stand-Größen und Preise. Bei Fragen kontaktier unser Team.",
              },
              {
                step: "2",
                title: "Online-Formular ausfüllen",
                desc: "Füll unser Bewerbungsformular aus. Sag uns, welche Kategorie am besten zu dir passt und stell dein Business vor.",
              },
              {
                step: "3",
                title: "Bestätigung erhalten",
                desc: "Nach der Prüfung deiner Bewerbung erhältst du eine Bestätigungs-E-Mail mit allen weiteren Details und Zahlungsinformationen.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            Stand-Größen &amp; Preise
          </h2>
          <div className="overflow-x-auto max-w-2xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-text font-semibold text-sm">
                    Größe
                  </th>
                  <th className="py-3 px-4 text-text font-semibold text-sm">
                    Abmessungen
                  </th>
                  <th className="py-3 px-4 text-text font-semibold text-sm">
                    Preis
                  </th>
                  <th className="py-3 px-4 text-text font-semibold text-sm hidden tablet:table-cell">
                    Beschreibung
                  </th>
                </tr>
              </thead>
              <tbody className="text-text-muted text-sm">
                {[
                  {
                    size: "Klein",
                    dim: "Details folgen",
                    price: "Details folgen",
                    desc: "Perfekt für kleine Anbieter und Start-ups",
                  },
                  {
                    size: "Mittel",
                    dim: "Details folgen",
                    price: "Details folgen",
                    desc: "Standard für die meisten Anbieter",
                  },
                  {
                    size: "Groß",
                    dim: "Details folgen",
                    price: "Details folgen",
                    desc: "Ideal für etablierte Businesses mit großem Sortiment",
                  },
                ].map((row) => (
                  <tr key={row.size} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-text">
                      {row.size}
                    </td>
                    <td className="py-3 px-4">{row.dim}</td>
                    <td className="py-3 px-4">{row.price}</td>
                    <td className="py-3 px-4 hidden tablet:table-cell">
                      {row.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-text-muted text-sm mt-6">
            Alle Größen beinhalten: Tischplatz, Stromanschluss, Wasser/Abwasser
            (wo relevant).
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Bewerbungsfristen
          </h2>
          <div className="bg-surface p-6 rounded-lg shadow-card space-y-3 text-sm">
            {[
              { label: "Bewerbungsstart", value: "Wird bekannt gegeben" },
              { label: "Bewerbungsdeadline", value: "Wird bekannt gegeben" },
              {
                label: "Benachrichtigung Annahme/Absage",
                value: "Wird bekannt gegeben",
              },
              { label: "Bezahlung fällig bis", value: "Wird bekannt gegeben" },
              { label: "Event", value: "4. & 5. Juli 2026" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between py-1 border-b border-gray-100 last:border-0"
              >
                <span className="text-text-muted">{row.label}</span>
                <span className="text-text font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Häufige Fragen von Aussteller:innen
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Kann ich mein eigenes Equipment mitbringen?",
                a: "Ja, bring deine Ausstattung gerne mit. Bitte teil uns im Formular mit, wenn du spezielle Anforderungen hast.",
              },
              {
                q: "Gibt es eine Mindestverkaufsgebühr?",
                a: "Nein, du zahlst nur die Stand-Gebühr gemäß deiner gewählten Größe. Alle Verkäufe gehen zu 100 % an dich.",
              },
              {
                q: "Sind Rabatte für mehrere Tage verfügbar?",
                a: "Ja! Bei Buchung für beide Tage gewähren wir einen Rabatt auf die Stand-Gebühr. Details bei Bewerbung.",
              },
              {
                q: "Wie ist das Aufbau-Timing?",
                a: "Details zu Aufbau- und Abbau-Zeiten erhältst du mit der Bestätigungs-E-Mail.",
              },
              {
                q: "Kann ich mein Stand-Team mitbringen?",
                a: "Ja, du darfst Helfende pro Stand mitbringen. Du benötigst ein kostenloses Team-Badge. Details bei Bewerbung.",
              },
              {
                q: "Was ist mit Parkplätzen?",
                a: "Für Ausstellende reservieren wir kostenlose Parkplätze in der Nähe des Veranstaltungsgeländes.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-white p-4 rounded-lg border border-gray-100 group"
              >
                <summary className="font-semibold text-text cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary text-lg group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-text-muted text-sm mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Kontakt &amp; Support
          </h2>
          <p className="text-text-muted mb-6">
            Bei Fragen rund um deine Bewerbung helfen wir gerne weiter!
          </p>
          <a
            href="mailto:info@veganfantasyfair.de"
            className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors"
          >
            E-Mail an info@veganfantasyfair.de
          </a>
        </div>
      </section>
    </>
  );
}
