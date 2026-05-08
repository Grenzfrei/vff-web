export const metadata = {
  title: "Standoptionen — Vegan Fantasy Fair",
  description: "Standoptionen der Vegan Fantasy Fair (Wix-Migration 2026-05-08).",
};

export default function StandoptionenPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">Standoptionen</h1>
          <p className="text-sm text-text-muted">
            Inhalt migriert von{" "}
            <a href="https://www.veganfantasyfair.de/standoptionen" className="underline" target="_blank" rel="noopener noreferrer">
              www.veganfantasyfair.de/standoptionen
            </a>
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-text-muted mb-4 leading-relaxed">{`gewerblich / privat / gemeinnützig`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Standplatz für den Verkauf von Waren und verpackten Lebensmitteln oder zur Präsentation.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Dir steht eine freie Fläche zur Verfügung für deinen individuellen Standaufbau.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`40 € je Meter (gewerblich)`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`20 € je Meter (privat / gemeinnützig)`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Der Preis gilt bis zu einer Tiefe von 3 Metern. So hast du ausreichend Platz für deine Standgestaltung z.B. mit einem Pavillon ohne einen teuren Quadratmeterpreis zahlen zu müssen.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Ist deine Standfläche tiefer als 3 Meter, werden 40€ je weiterem Quadratmeter berechnet.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`3 x 3 Meter = 3 x 40€ = 120€`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`6 x 4 Meter = 6 x 3 Meter + 6 x 1 Meter`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`= 6 x 40€ + 6 x 40€`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Du bekommst einen Standplatz im Zelt an vorbereiteten Tischen inklusive einem Stuhl.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Du kannst zwischen einem halben und bis zu 4 Tischen auswählen.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`150 € je Tisch 220 x 50 cm`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`100 € je Tisch 220 x 50 cm`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`(privat / gemeinnützig)`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Standplatz für den Verkauf von Lebensmitteln zum direkten Verzehr vor Ort`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`200 € bis 3 x 3 Meter`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`250 € bis 6 x 3 Meter`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`300 € bis 9 x 3 Meter`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Für größere Standplätze`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`fragt gerne via Mail an.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`80 € 1/2 Tisch 110 x 50 cm`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`60 € 1/2 Tisch 110 x 50 cm`}</p>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformulare für Ausstellende`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Datenschutz`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformular Team`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Cosplay- und Waffenregeln`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformular für Mitwirkende`}</h2>
          <p className="text-text-muted mb-4 leading-relaxed">{`©2026 Vegan Fantasy Fair`}</p>
        </div>
      </section>
    </>
  );
}
