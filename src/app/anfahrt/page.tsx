import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfahrt",
  description:
    "So kommst du zur Vegan Fantasy Fair: Schlosspark Geislautern, Ludweilerstraße 218, 66333 Völklingen. Anfahrt mit Auto, Bus & Bahn, Fahrrad — inkl. Parkinfo.",
};

export default function AnfahrtPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Anfahrt
          </h1>
          <p className="text-lg text-text-muted">
            4. & 5. Juli 2026 &middot; Schlosspark Geislautern, Völklingen
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid tablet:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Veranstaltungsort
              </h2>
              <div className="bg-surface p-6 rounded-lg">
                <p className="font-semibold text-lg">Schlosspark Geislautern</p>
                <p className="text-text-muted">Ludweilerstraße 218</p>
                <p className="text-text-muted">66333 Völklingen-Geislautern</p>
                <p className="text-text-muted">Saarland, Deutschland</p>
              </div>
              <p className="text-text-muted text-sm mt-2">
                Der Einlass befindet sich zwischen Ludweilerstraße 218 und 218A.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">
                Mit dem Auto
              </h2>
              <ul className="space-y-3 text-text-muted">
                <li>
                  <strong className="text-text">Navigation:</strong> &bdquo;Schlosspark
                  Geislautern, Völklingen&ldquo; oder &bdquo;Ludweilerstraße 218,
                  66333 Völklingen&ldquo;
                </li>
                <li>
                  <strong className="text-text">Aus Richtung Saarbrücken:</strong>{" "}
                  über die B51 Richtung Völklingen, Abfahrt Geislautern
                </li>
                <li>
                  <strong className="text-text">Aus Richtung Saarlouis/Trier:</strong>{" "}
                  über die A620, Abfahrt Völklingen
                </li>
                <li>
                  <strong className="text-text">Parken:</strong> Es gibt leider keine
                  Parkplätze, die dem Gelände zugeteilt sind, und keine öffentlichen
                  Parkplätze in der Nähe. Bitte achtet darauf, nicht im Parkverbot oder
                  vor Garagen und Geschäften zu parken. Die Parkplätze direkt vor dem
                  Gelände sind für Menschen mit Behinderung freizuhalten und können zum
                  kurzen Halten genutzt werden, um Personen aussteigen zu lassen.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">
                Mit Bus &amp; Bahn
              </h2>
              <ul className="space-y-3 text-text-muted">
                <li>
                  <strong className="text-text">Bahnhof Völklingen:</strong>{" "}
                  Regionalzüge und S-Bahn aus Saarbrücken, Saarlouis, Trier
                </li>
                <li>
                  <strong className="text-text">Bus:</strong> Vom Bahnhof Völklingen
                  einfach den Bus <strong>Linie 184</strong> nehmen — in 6 Minuten seid
                  ihr am Schlosspark. Die beste Haltestelle ist{" "}
                  <strong>&bdquo;Hammergraben&ldquo;</strong>, sie kommt direkt nach der
                  Haltestelle &bdquo;Masselgarten&ldquo;.
                </li>
                <li>
                  Fahrplanauskunft:{" "}
                  <a
                    href="https://www.bahn.de"
                    className="text-secondary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bahn.de
                  </a>{" "}
                  &middot;{" "}
                  <a
                    href="https://www.saarvv.de"
                    className="text-secondary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    saarvv.de
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">
                Fahrrad
              </h2>
              <p className="text-text-muted">
                Vom Bahnhof Völklingen oder aus Saarbrücken ist der Schlosspark
                Geislautern per Fahrrad erreichbar. Fahrradständer sind am Gelände
                vorhanden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Karte</h2>
              <div className="bg-surface rounded-lg overflow-hidden aspect-[4/3]">
                <iframe
                  title="Schlosspark Geislautern auf Google Maps"
                  src="https://www.google.com/maps?q=Schlosspark+Geislautern,+66333+V%C3%B6lklingen&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-surface p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Hinweis für Aussteller:innen
                </h3>
                <p className="text-text-muted text-sm">
                  Details zur Anlieferung und Aufbau-Zeiten erhalten angemeldete
                  Aussteller:innen separat per E-Mail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
