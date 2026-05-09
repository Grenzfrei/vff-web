import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aussteller",
  description:
    "Werde Aussteller:in auf der Vegan Fantasy Fair 2026. Standkategorien, Preise und Bewerbungsprozess für vegane Marken, Foodtrucks und Kunsthandwerk.",
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
                icon: "🌱",
                title: "Veganes Food",
                desc: "Restaurants, Caterer, Food Trucks, Bäckereien, Süßwaren, Getränke",
              },
              {
                icon: "🛠️",
                title: "Handwerk",
                desc: "Handgemachte Produkte, nachhaltiges Kunsthandwerk, DIY-Workshops",
              },
              {
                icon: "🎨",
                title: "Kunst & Design",
                desc: "Künstler:innen, Designer:innen, Illustrator:innen, Schmuck, Mode, Fotografie",
              },
              {
                icon: "🎭",
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
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Stand-Gr&ouml;&szlig;en &amp; Preise
          </h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Freifl&auml;che, Zelt-Standplatz oder Gastrostand &mdash; alle
            Optionen mit Preisen findest du auf unserer Preisseite.
          </p>
          <Link
            href="/standoptionen"
            className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-3xl font-semibold hover:bg-primary hover:text-white hover:scale-105 shadow-card hover:shadow-card-hover transition-all"
          >
            Standoptionen &amp; Preise ansehen
          </Link>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-6">
            H&auml;ufige Fragen von Aussteller:innen
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

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
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
