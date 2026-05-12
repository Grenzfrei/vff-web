import type { Metadata } from "next";
import { EVENT_AREAS, EVENT } from "@/lib/constants";
import EventAreaCard from "@/components/EventAreaCard";
import { EventStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Die Fair",
  description:
    "Die Vegan Fantasy Fair ist ein veganes Festival mit Messe-/Convention-Charakter. 5 Areas / 10000 qm.",
};

export default function DieFairPage() {
  return (
    <>
      <EventStructuredData />
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl desktop:text-6xl font-bold text-primary mb-4">
            {EVENT.name}
          </h1>
          <p className="text-lg font-medium text-primary">
            4. &amp; 5. Juli 2026 &middot; Schlosspark Geislautern, Völklingen
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary mb-6">
            Die Vegan Fantasy Fair
          </h2>
          <p className="text-text-muted leading-relaxed text-lg mb-6">
            Die Vegan Fantasy Fair ist ein veganes Festival mit
            Messe-/Convention-Charakter. Die Veranstaltung findet auf 5 Areas
            mit insgesamt 10000 qm statt, mit einem Waren- und Programmangebot
            zu den Themen:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-text-muted mb-10 text-lg">
            <li>
              <strong className="text-text">
                Ökologische und soziale Gerechtigkeit
              </strong>{" "}
              (Veganismus, Nachhaltigkeit, Umweltschutz, Gleichheit und mehr)
            </li>
            <li>
              <strong className="text-text">Fantasy und Spiele</strong> (Spiele,
              Rollenspiel, Literatur, Kunst, Musik und mehr)
            </li>
          </ol>
        </div>
      </section>

      <section className="pb-section-mobile desktop:pb-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Die fünf Event-Areas
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {EVENT_AREAS.map((area) => (
              <EventAreaCard key={area.name} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-4">Marktplatz</h2>
          <p className="text-text-muted mb-3 leading-relaxed">
            Das lebhafte Zentrum der Vegan Fantasy Fair &mdash; hier findest du
            alles was Herz und Magen erfreut!
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-8">
            <li>
              <strong className="text-text">Marktstände</strong> &mdash; vegane
              Food/Non-Food Produkte, nachhaltige, regionale, faire Produkte,
              Kleidung, Kosmetik, Accessoires, Spiele, Literatur, Musik u.v.m.
            </li>
            <li>
              <strong className="text-text">Streetfood</strong> &mdash;
              Abwechslungsreiches Angebot an veganem Streetfood
            </li>
            <li>
              <strong className="text-text">Taverne</strong> &mdash;
              Freiluft-Taverne &ldquo;The Flickering Fairy&rdquo;
            </li>
            <li>
              <strong className="text-text">Tavern Stage</strong> &mdash;
              Fantastische Musik und viel Platz zum Tanzen
            </li>
            <li>
              <strong className="text-text">Spiele</strong> &mdash; Tische für
              freies Spielen und Austesten von Brett-, Karten-, und
              Rollenspielen, geplante Spielrunden und Aktionen
            </li>
            <li>
              <strong className="text-text">Schatztruhen</strong> &mdash; werden
              während der Fair mit Waren der Ausstellenden und Sponsor:innen
              gefüllt und abends verlost
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Funkelgasse</h2>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-8">
            <li>
              <strong className="text-text">Kunst &amp; Kreatives</strong>{" "}
              &mdash; Stände von Künstler:innen, Autor*innen, kreative Arbeiten
              und Handgefertigtes
            </li>
            <li>
              <strong className="text-text">Lesepavillon</strong> &mdash;
              Lesungen von anwesenden Autor*innen
            </li>
            <li>
              <strong className="text-text">Community-Treff</strong> &mdash; Der
              Treffpunkt für Cosplay, LARP, Roleplay, Fantasyfotografie und
              mehr!
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Burghof</h2>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-8">
            <li>
              <strong className="text-text">Castle Stage</strong> &mdash; Show-
              und Theatervorführungen
            </li>
            <li>
              <strong className="text-text">Aktives Outdoor</strong> &mdash;
              Spiele, kreative Bewegung und Aktivitäten
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Gemeinschaftshaus
          </h2>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-8">
            <li>
              <strong className="text-text">Indoor Stage</strong> &mdash;
              Vorträge, Actual Plays / Live-Spielrunden und mehr
            </li>
            <li>
              <strong className="text-text">Workshops</strong> &mdash; Spannende
              Workshops zum Mitmachen
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Zwergenwinkel
          </h2>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-8">
            <li>Spielplatz und Aktionen für Kinder</li>
          </ul>
        </div>
      </section>
    </>
  );
}
