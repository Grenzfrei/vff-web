import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standoptionen — Vegan Fantasy Fair",
  description:
    "Standoptionen und Preise für Ausstellende auf der Vegan Fantasy Fair: Freifläche, Zeltstand und Gastrostand.",
  alternates: { canonical: "/standoptionen" },
};

export default function StandoptionenPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Optionen für deinen Stand
          </h1>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Freifläche Outdoor
          </h2>
          <p className="text-text-muted mb-2 leading-relaxed">
            <strong className="text-text">gewerblich / privat / gemeinnützig</strong>
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Standplatz für den Verkauf von Waren und verpackten Lebensmitteln
            oder zur Präsentation. Dir steht eine freie Fläche zur Verfügung für
            deinen individuellen Standaufbau.
          </p>
          <div className="bg-surface p-5 rounded-lg mb-4">
            <p className="text-text font-semibold mb-1">40 € je Meter (gewerblich)</p>
            <p className="text-text font-semibold mb-3">20 € je Meter (privat / gemeinnützig)</p>
            <p className="text-text-muted text-sm leading-relaxed">
              Der Preis gilt bis zu einer Tiefe von 3 Metern. So hast du
              ausreichend Platz für deine Standgestaltung z.B. mit einem
              Pavillon ohne einen teuren Quadratmeterpreis zahlen zu müssen. Ist
              deine Standfläche tiefer als 3 Meter, werden 40 € je weiterem
              Quadratmeter berechnet.
            </p>
          </div>
          <div className="bg-surface p-5 rounded-lg mb-6">
            <p className="text-text-muted text-sm font-semibold mb-2">Beispiele</p>
            <p className="text-text-muted text-sm">
              3 x 3 Meter = 3 x 40 € = 120 €
            </p>
            <p className="text-text-muted text-sm">
              6 x 4 Meter = 6 x 3 Meter + 6 x 1 Meter = 6 x 40 € + 6 x 40 € = 240 € + 240 € = 480 €
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Standplatz im Zelt
          </h2>
          <p className="text-text-muted mb-2 leading-relaxed">
            <strong className="text-text">gewerblich / privat / gemeinnützig</strong>
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Standplatz für den Verkauf von Waren und verpackten Lebensmitteln
            oder zur Präsentation. Du bekommst einen Standplatz im Zelt an
            vorbereiteten Tischen inklusive einem Stuhl. Du kannst zwischen einem
            halben und bis zu 4 Tischen auswählen.
          </p>
          <div className="bg-surface p-5 rounded-lg mb-6">
            <p className="text-text font-semibold mb-1">
              150 € je Tisch 220 x 50 cm (gewerblich)
            </p>
            <p className="text-text font-semibold mb-3">
              100 € je Tisch 220 x 50 cm (privat / gemeinnützig)
            </p>
            <p className="text-text font-semibold mb-1">
              80 € halber Tisch 110 x 50 cm (gewerblich)
            </p>
            <p className="text-text font-semibold">
              60 € halber Tisch 110 x 50 cm (privat / gemeinnützig)
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Gastrostand / Foodtruck
          </h2>
          <p className="text-text-muted mb-2 leading-relaxed">
            <strong className="text-text">nur gewerblich</strong>
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Standplatz für den Verkauf von Lebensmitteln zum direkten Verzehr vor
            Ort
          </p>
          <div className="bg-surface p-5 rounded-lg mb-6">
            <p className="text-text font-semibold mb-1">200 € bis 3 x 3 Meter</p>
            <p className="text-text font-semibold mb-1">250 € bis 6 x 3 Meter</p>
            <p className="text-text font-semibold mb-3">300 € bis 9 x 3 Meter</p>
            <p className="text-text-muted text-sm">
              Für größere Standplätze fragt gerne via Mail an.
            </p>
          </div>

          <div className="bg-surface p-5 rounded-lg mt-10">
            <p className="text-text-muted text-sm leading-relaxed">
              Alle Preise verstehen sich für das Wochenende und zzgl. MwSt.
              Zubuchbare Optionen wie Mobiliar, Strom oder Wasser können den
              entsprechenden Anmeldeformularen entnommen werden. Beachtet zudem
              die Teilnahmebedingungen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
