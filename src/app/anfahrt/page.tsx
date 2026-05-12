import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfahrt — Vegan Fantasy Fair",
  description:
    "Anfahrt zur Vegan Fantasy Fair im Schlosspark Geislautern, 66333 Völklingen.",
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
            Schlosspark Geislautern, 66333 Völklingen-Geislautern (Saarland)
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Anfahrt mit dem Auto
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Die Vegan Fantasy Fair findet im Schlosspark Geislautern statt, in
            66333 Völklingen-Geislautern (Saarland).
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            <strong className="text-text">Fürs Navi:</strong> Ludweilerstraße
            218
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Der Einlass befindet sich genau zwischen Ludweilerstraße 218 und
            218A.
          </p>
          <div className="bg-surface p-5 rounded-lg mb-6">
            <p className="text-text-muted text-sm leading-relaxed">
              <strong className="text-text">Parken:</strong> Es gibt leider
              keine Parkplätze, die dem Gelände zugeteilt sind und keine
              öffentlichen Parkplätze in der Nähe. Bitte achte darauf, nicht im
              Parkverbot oder vor Garagen und Geschäften zu parken. Die
              Parkplätze direkt vor dem Gelände sind für Menschen mit Behinderung
              freizuhalten und können zum kurzen Halten genutzt werden um
              Personen aussteigen zu lassen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Anfahrt mit den Öffis
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Nehmt vom Bahnhof Völklingen einfach den Bus{" "}
            <strong className="text-text">Linie 184</strong> und ihr seid in 6
            Minuten am Schlosspark. Die beste Haltestelle ist{" "}
            <strong className="text-text">
              &ldquo;Hammergraben&rdquo;
            </strong>
            , sie kommt direkt nach der Haltestelle
            &ldquo;Masselgarten&rdquo;.
          </p>

          <div className="mt-10">
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
          </div>
        </div>
      </section>
    </>
  );
}
