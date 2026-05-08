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
                <p className="text-text-muted">66333 Völklingen</p>
                <p className="text-text-muted">Saarland, Deutschland</p>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">
                Mit dem Auto
              </h2>
              <ul className="space-y-3 text-text-muted">
                <li>
                  <strong className="text-text">Navigation:</strong> &bdquo;Schlosspark
                  Geislautern, Völklingen&ldquo;
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
                  <strong className="text-text">Parken:</strong> Kostenlose Parkplätze am
                  Gelände (Details folgen)
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
                  <strong className="text-text">Bus:</strong>{" "}
                  Verbindung vom Bahnhof Völklingen zum Schlosspark
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
