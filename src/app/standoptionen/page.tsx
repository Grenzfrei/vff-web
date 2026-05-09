import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standoptionen & Preise",
  description:
    "Standoptionen für die Vegan Fantasy Fair 2026: Freifläche, Zelt-Standplatz oder Gastrostand. Preise für gewerbliche, private und gemeinnützige Aussteller:innen.",
};

export default function StandoptionenPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Optionen für deinen Stand
          </h1>
          <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
            Ob gewerblich, privat oder gemeinnützig — wir finden das Richtige für deinen
            Auftritt auf der Vegan Fantasy Fair.
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4 space-y-12">
          {/* Option 1: Freifläche Outdoor */}
          <div className="bg-surface p-8 rounded-lg shadow-card">
            <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">
              Option 1
            </p>
            <h2 className="text-2xl font-bold text-primary mb-1">
              Freifläche Outdoor
            </h2>
            <p className="text-text-muted text-sm mb-4">
              Standplatz für den Verkauf von Waren und verpackten Lebensmitteln oder zur
              Präsentation. Dir steht eine freie Fläche zur Verfügung für deinen
              individuellen Standaufbau, z.B. mit einem Pavillon.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">Gewerblich</span>
                <span className="text-text font-semibold">40 € je Meter</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">Privat / Gemeinnützig</span>
                <span className="text-text font-semibold">20 € je Meter</span>
              </div>
            </div>
            <p className="text-text-muted text-xs mt-3">
              Der Preis gilt bis zu einer Tiefe von 3 Metern. Ist die Standfläche tiefer
              als 3 Meter, werden 40 € je weiterem Quadratmeter berechnet.
            </p>
            <p className="text-text-muted text-xs mt-1">
              Beispiel: 3 x 3 Meter = 120 € | 6 x 4 Meter = 480 €
            </p>
            <Link
              href="/aussteller"
              className="inline-block mt-4 px-5 py-2 bg-cta text-white rounded font-semibold text-sm hover:bg-cta-hover transition-colors"
            >
              Anmeldung Freifläche
            </Link>
          </div>

          {/* Option 2: Zelt-Standplatz */}
          <div className="bg-surface p-8 rounded-lg shadow-card">
            <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">
              Option 2
            </p>
            <h2 className="text-2xl font-bold text-primary mb-1">
              Standplatz im Zelt
            </h2>
            <p className="text-text-muted text-sm mb-4">
              Standplatz für den Verkauf von Waren und verpackten Lebensmitteln oder zur
              Präsentation. Du bekommst einen Standplatz im Zelt an vorbereiteten Tischen
              inklusive einem Stuhl. Du kannst zwischen einem halben und bis zu 4 Tischen
              auswählen.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">Gewerblich (je Tisch 220 x 50 cm)</span>
                <span className="text-text font-semibold">150 €</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">Privat / Gemeinnützig (je Tisch)</span>
                <span className="text-text font-semibold">100 €</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">1/2 Tisch gewerblich (110 x 50 cm)</span>
                <span className="text-text font-semibold">80 €</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">1/2 Tisch privat / gemeinnützig</span>
                <span className="text-text font-semibold">60 €</span>
              </div>
            </div>
            <Link
              href="/aussteller"
              className="inline-block mt-4 px-5 py-2 bg-cta text-white rounded font-semibold text-sm hover:bg-cta-hover transition-colors"
            >
              Anmeldung Zelt
            </Link>
          </div>

          {/* Option 3: Gastrostand / Foodtruck */}
          <div className="bg-surface p-8 rounded-lg shadow-card">
            <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">
              Option 3
            </p>
            <h2 className="text-2xl font-bold text-primary mb-1">
              Gastrostand / Foodtruck
            </h2>
            <p className="text-text-muted text-sm mb-4">
              Standplatz für den Verkauf von Lebensmitteln zum direkten Verzehr vor Ort.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">Bis 3 x 3 Meter</span>
                <span className="text-text font-semibold">200 €</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">Bis 6 x 3 Meter</span>
                <span className="text-text font-semibold">250 €</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-text-muted">Bis 9 x 3 Meter</span>
                <span className="text-text font-semibold">300 €</span>
              </div>
            </div>
            <p className="text-text-muted text-xs mt-3">
              Für größere Standplätze fragt gerne per Mail an.
            </p>
            <Link
              href="/aussteller"
              className="inline-block mt-4 px-5 py-2 bg-cta text-white rounded font-semibold text-sm hover:bg-cta-hover transition-colors"
            >
              Anmeldung Gastro
            </Link>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto px-4 mt-8">
          <div className="bg-surface-white p-6 rounded-lg border border-primary/10">
            <h3 className="font-semibold text-primary mb-2">Hinweise</h3>
            <ul className="space-y-1 text-text-muted text-sm list-disc pl-5">
              <li>Alle Preise verstehen sich für das Wochenende (Sa + So) zzgl. MwSt.</li>
              <li>Zubuchbare Optionen wie Mobiliar, Strom oder Wasser können den Anmeldeformularen entnommen werden.</li>
              <li>Beachtet zudem die Teilnahmebedingungen.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
