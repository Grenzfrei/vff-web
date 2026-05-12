import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mitwirken — Vegan Fantasy Fair",
  description:
    "Mitwirken oder Ausstellen mit einem Standplatz, im Programm oder im Team auf der Vegan Fantasy Fair.",
};

export default function MitmachenPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Mitwirken
          </h1>
          <p className="text-lg text-text-muted max-w-[700px] mx-auto">
            Ob privat, gewerblich oder gemeinnützig, wir finden das Richtige für
            deinen Auftritt auf der Vegan Fantasy Fair
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-text-muted mb-8 leading-relaxed">
            Um vor Ort mitzuwirken bieten wir dir folgende Möglichkeiten an:
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">Standplatz</h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Wenn du auf der Vegan Fantasy Fair ausstellen möchtest hast du
            verschiedene Standarten zur Buchung zur Verfügung:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
            <li>
              <strong className="text-text">Gastrostand</strong> für den Verkauf
              von Speisen für die Verkostung vor Ort
            </li>
            <li>
              <strong className="text-text">Verkaufsstand</strong> für den
              Verkauf von Waren (Food/Non Food)
            </li>
            <li>
              <strong className="text-text">Präsentationsstand</strong> zur
              Präsentation deines Hobbys, deiner Gruppe/Community, deines
              Vereins, deines Unternehmens etc.
            </li>
          </ul>
          <Link
            href="/standoptionen"
            className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors mb-8"
          >
            Standoptionen, Preise &amp; Anmeldung
          </Link>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Programm
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Zum Programm beitragen kannst du durch
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-6">
            <li>Musik- oder Showauftritt</li>
            <li>Vortrag / Vorführung / Lesung</li>
            <li>Spielrunde / Workshop / Mitmachaktion</li>
            <li>Content Creation (Video, Fotografie, Stream)</li>
            <li>Walking Act / Fangruppe / Lager</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Sponsoring
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Du kannst deinen Auftritt zusätzlich mit einem Sponsoring verbinden,
            um weitere Vorteile zu erhalten.
          </p>
          <p className="text-text-muted mb-6 leading-relaxed">
            Du kannst nicht vor Ort sein, möchtest aber dennoch gerne
            unterstützen? Wir freuen uns sehr über ein Produktsponsoring für
            unsere Schatztruhen-Verlosung. Bei Interesse schreibe eine Mail an{" "}
            <a
              href="mailto:hallo@veganfantasyfair.de"
              className="text-primary underline"
            >
              hallo@veganfantasyfair.de
            </a>{" "}
            für weitere Infos.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Team</h2>
          <p className="text-text-muted mb-6 leading-relaxed">
            Das Fundament der Vegan Fantasy Fair ist ein starkes Team vor Ort. Du
            hast Lust Teil davon zu sein?
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Sichtbar machen
          </h2>
          <p className="text-text-muted mb-6 leading-relaxed">
            Einfach aber effektiv: Trage die Vegan Fantasy Fair ein Stück weiter
            indem du uns auf unseren Social Media Kanälen folgst, Beiträge
            teilst, Bewertungen schreibst oder das Event auf deiner Seite /
            deinem Blog / deinem Channel erwähnst.
          </p>

          <div className="bg-surface p-5 rounded-lg mt-10">
            <p className="text-text-muted">
              Bei Fragen oder Ideen schreibe gerne eine Mail an{" "}
              <a
                href="mailto:hallo@veganfantasyfair.de"
                className="text-primary underline"
              >
                hallo@veganfantasyfair.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
