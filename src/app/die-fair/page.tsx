import { EVENT_AREAS, EVENT } from "@/lib/constants";
import EventAreaCard from "@/components/EventAreaCard";
import { EventStructuredData } from "@/lib/structured-data";

export default function DieFairPage() {
  return (
    <>
      <EventStructuredData />
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl desktop:text-6xl font-bold text-primary mb-4">
            {EVENT.name}
          </h1>
          <p className="text-xl text-text-muted mb-4">
            Wo vegane Kultur auf Fantasy-Welten trifft
          </p>
          <p className="text-lg font-medium text-primary">
            4. & 5. Juli 2026 &middot; Schlosspark Geislautern, Voelklingen
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 prose max-w-none">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary mb-6">
            Die Vegan Fantasy Fair
          </h2>
          <p className="text-text-muted leading-relaxed text-lg mb-10 max-w-3xl">
            Im Schlosspark Geislauterns entsteht jedes Jahr im Juli auf 10.000 qm eine
            eigene kleine Welt: Fuenf Areas voller Fantasy-Flair, Mittelaltermarkt-Stimmung,
            Live-Musik, veganer Streetfood, Kunsthandwerk, LARP-Spielfelder und Artist Alley.
            Zwischen Schlossmauern und alten Baeumen unter freiem Himmel. Fuer alle, die
            Fantasy lieben und zeigen, dass &bdquo;vegan&ldquo; und &bdquo;Festival&ldquo;
            zusammen richtig gut funktionieren. Familienfreundlich, tierfreundlich, inklusiv.
          </p>
        </div>
      </section>

      <section className="pb-section-mobile desktop:pb-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Die fuenf Event-Areas
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {EVENT_AREAS.map((area) => (
              <EventAreaCard key={area.name} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Key Facts
          </h2>
          <div className="grid gap-4 tablet:grid-cols-2 max-w-2xl mx-auto">
            {[
              { label: "Name", value: EVENT.name },
              { label: "Datum", value: "04. & 05. Juli 2026" },
              { label: "Location", value: "Schlosspark Geislautern, Voelklingen" },
              { label: "Flaeche", value: "10.000 qm" },
              { label: "Auflage", value: "3." },
              { label: "Areas", value: "5 Themenbereiche" },
              { label: "Veranstalter", value: "Next Heroes Events" },
              { label: "Typ", value: "Veganes Festival mit Fantasy-Flair" },
            ].map((fact) => (
              <div key={fact.label} className="flex justify-between gap-4 p-3 border-b border-primary/10">
                <span className="font-semibold text-primary">{fact.label}</span>
                <span className="text-text text-right">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-6">
            Community & Atmosphaere
          </h2>
          <div className="grid gap-4 tablet:grid-cols-2 max-w-2xl mx-auto">
            {[
              "Fantasievoll, maerchenhaft, naturnah",
              "Bunt, einladend, Community-getrieben",
              "Familien & Kinder willkommen",
              "Cosplay & Gewandung erwuenscht",
              "Hunde erlaubt",
              "100% veganes Festival",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <span className="text-secondary text-lg" aria-hidden="true">&#10003;</span>
                <span className="text-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary mb-4">
            3. Auflage 2026
          </h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
            Die Vegan Fantasy Fair kehrt 2026 zum dritten Mal zurueck — groesser und
            vielfaeltiger als je zuvor. Nach zwei erfolgreichen Auflagen im Schlosspark
            Geislautern erwarten euch wieder zwei unvergessliche Tage voller veganer
            Koestlichkeiten und Fantasy-Flair.
          </p>
        </div>
      </section>
    </>
  );
}
