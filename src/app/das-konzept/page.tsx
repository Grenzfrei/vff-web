import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Das Konzept",
  description:
    "Das Konzept der Vegan Fantasy Fair: Ein veganes Festival mit Messe-/Convention-Charakter, das soziale und ökologische Themen mit Entertainment aus dem Fantasy-Bereich verbindet.",
};

export default function DasKonzeptPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Das Konzept
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Die Vegan Fantasy Fair ist ein Festival mit Messe-/Convention-Charakter, das
            soziale und ökologische Themen mit Entertainment und Freizeitbeschäftigung aus
            dem Fantasy-Bereich verbindet.
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Vegan &amp; Fair</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Die auf der Vegan Fantasy Fair angebotenen Speisen, Getränke und
              Verkaufswaren sind vegan. Das Warenangebot umfasst weiterhin nachhaltige,
              faire sowie regionale Produkte und Messeneuheiten.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              In Programm und Präsentationen kannst du dich zudem über diese und weitere
              soziale und ökologische Themen informieren, bekannte Menschen aus der
              Community treffen und dich mit anderen austauschen.
            </p>
          </div>

          <div className="bg-surface p-6 rounded-lg shadow-card">
            <h2 className="text-xl font-bold text-primary mb-4">Fair Box</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Allen Personen, die die Vegan Fantasy Fair besuchen möchten, soll
              barrierefreier Zugang ermöglicht werden. Das ist unser Ziel, welches wir mit
              der Fair Box erreichen möchten. Alle Fair Box Einnahmen werden zum Ausbau
              der Barrierefreiheit verwendet.
            </p>
            <h3 className="font-semibold text-text mb-2">
              Wie du unterstützen kannst:
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-primary font-bold shrink-0">1.</span>
                <div>
                  <p className="font-medium text-text">Das Soli-Ticket</p>
                  <p className="text-text-muted text-sm">
                    Mit dem Kauf eines Soli-Tickets förderst du Solidarität und
                    ermöglichst so Personen den Eintritt zur Vegan Fantasy Fair, die sich
                    gerade kein Ticket kaufen können. Als Dankeschön erhältst du Lose für
                    die Schatztruhen-Verlosung. Du möchtest selbst ein Soli-Ticket?
                    Schreibe uns an crowd@veganfantasyfair.de
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold shrink-0">2.</span>
                <div>
                  <p className="font-medium text-text">Schatztruhen-Verlosung</p>
                  <p className="text-text-muted text-sm">
                    Du kannst vor Ort Lose für die Schatztruhen-Verlosung erwerben. Die
                    Schatztruhen werden vor und während der Fair mit tollen Produkten
                    unserer Sponsor:innen und Aussteller:innen befüllt und abends verlost.
                    Der Erlös aus dem Losverkauf fließt zu 100 % in unsere Fair Box.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Warum der Themen-Mix?
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Die Themen rund um ökologische und soziale Gerechtigkeit liegen uns nicht
              nur persönlich sehr am Herzen, sie sind auch unerlässlich für das Gestalten
              einer gerechteren Gesellschaft und den Erhalt unserer Lebensgrundlage.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              Auf der Vegan Fantasy Fair können sich die Besucher*innen über diese Themen
              informieren, austauschen, neue Produkte kennenlernen und gleichzeitig einen
              tollen Festivaltag mit Musik, Spielen und fantastischem Ambiente erleben.
            </p>
            <p className="text-text-muted leading-relaxed">
              Wer schon einmal einen Mittelaltermarkt oder Festivals besucht hat, wird
              zudem vielleicht bemerkt haben, wie schwierig es ist, ein veganes Angebot zu
              finden. Wir möchten zeigen, dass es heutzutage für all diese Produkte tolle
              Alternativen gibt — also vegan UND ein Nerd sein und den Hobbys nachgehen,
              schließt sich nicht mehr aus!
            </p>
          </div>

          <div className="bg-surface p-6 rounded-lg shadow-card">
            <h2 className="text-xl font-bold text-primary mb-3">
              &bdquo;Green Event&ldquo;
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Die Vegan Fantasy Fair ist ein &bdquo;Green Event&ldquo;. Das bedeutet für
              uns, dass wir ökologische, soziale, ökonomische und kulturelle
              Nachhaltigkeit berücksichtigen, so gut wie möglich umsetzen und sichtbar in
              den Vordergrund stellen. Wir möchten uns darin mit jedem Mal verbessern und
              dieses Konzept stetig ausbauen.
            </p>
            <p className="text-text-muted text-sm">
              Du hast Vorschläge? Schreibe gerne eine Email an{" "}
              <a
                href="mailto:info@veganfantasyfair.de"
                className="text-secondary underline"
              >
                info@veganfantasyfair.de
              </a>
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Jetzt fehlst nur noch du!
            </h2>
            <p className="text-text-muted mb-2">
              Elfe, Magier, Abenteurer, Fabelwesen oder einfach du selbst.
            </p>
            <p className="text-text-muted mb-6">Sei, wer du sein möchtest.</p>
            <Link
              href="/mitmachen"
              className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors"
            >
              Jetzt mitmachen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
