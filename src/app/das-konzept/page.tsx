import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Das Konzept — Vegan Fantasy Fair",
  description:
    "Die Vegan Fantasy Fair ist ein Festival mit Messe-/Convention-Charakter, das soziale und ökologische Themen mit Entertainment und Freizeitbeschäftigung aus dem Fantasy-Bereich verbindet.",
  alternates: { canonical: "/das-konzept" },
};

export default function DasKonzeptPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Das Konzept
          </h1>
          <p className="text-lg text-text-muted max-w-[700px] mx-auto">
            Die Vegan Fantasy Fair ist ein Festival mit
            Messe-/Convention-Charakter, das soziale und ökologische Themen mit
            Entertainment und Freizeitbeschäftigung aus dem Fantasy-Bereich
            verbindet.
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Vegan &amp; Fair
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Die auf der Vegan Fantasy Fair angebotenen Speisen, Getränke und
            Verkaufswaren sind vegan. Das Warenangebot umfasst weiterhin
            nachhaltige, faire sowie regionale Produkte und Messeneuheiten.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            In Programm und Präsentationen kannst du dich zudem über diese und
            weitere soziale und ökologische Themen informieren, bekannte
            Menschen aus der Community treffen und dich mit anderen austauschen.
          </p>

          <h3 className="text-lg font-semibold text-text mt-8 mb-3">
            Fair Box
          </h3>
          <p className="text-text-muted mb-4 leading-relaxed">
            Allen Personen, die die Vegan Fantasy Fair besuchen möchten, soll
            barrierefreier Zugang ermöglicht werden. Das ist unser Ziel, welches
            wir mit der Fair Box erreichen möchten. Alle Fair Box Einnahmen
            werden zum Ausbau der Barrierefreiheit verwendet.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Ihr möchtet dieses Konzept unterstützen? Dazu gibt es zwei
            Möglichkeiten:
          </p>

          <div className="bg-surface p-6 rounded-lg mb-4">
            <h4 className="font-semibold text-text mb-2">
              1. Das Soli-Ticket
            </h4>
            <p className="text-text-muted text-sm leading-relaxed">
              Mit dem Kauf eines Soli-Tickets förderst du Solidarität und
              ermöglichst so Personen den Eintritt zur Vegan Fantasy Fair, die
              sich gerade kein Ticket kaufen können. Als Dankeschön für diese
              großartige Unterstützung erhältst du Lose für die
              Schatztruhen-Verlosung.
            </p>
            <p className="text-text-muted text-sm leading-relaxed mt-2">
              Du wärst gerne dabei, kannst dir aber momentan das Ticket nicht
              leisten? Schreibe uns einfach eine E-Mail an{" "}
              <a
                href="mailto:crowd@veganfantasyfair.de"
                className="text-primary underline"
              >
                crowd@veganfantasyfair.de
              </a>{" "}
              und du bekommst ein Ticket aus unserer Fair Box geschenkt.
            </p>
          </div>

          <div className="bg-surface p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-text mb-2">
              2. Die Schatztruhen-Verlosung
            </h4>
            <p className="text-text-muted text-sm leading-relaxed">
              Du kannst vor Ort Lose für die Schatztruhen-Verlosung erwerben.
              Die Schatztruhen werden vor und während der Vegan Fantasy Fair mit
              tollen Produkten unserer Sponsor:innen und Aussteller:innen
              befüllt und abends verlost. Der Erlös aus dem Losverkauf fließt zu
              100% in unsere Fair Box.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-text mt-8 mb-3">
            Fantasy
          </h3>
          <p className="text-text-muted mb-4 leading-relaxed">
            Amulette, Würfel, Schwerter und alles was man sonst noch für ein
            Abenteuer braucht findest du hier. Das Warenangebot reicht von
            Kleidung, Accessoires, LARP- und Cosplay-Bedarf über Kunst und
            Kreatives bis hin zu Spielen und Neuheiten. Es gibt entsprechendes
            Programm, bekannte Mitwirkende, fantastische Musik, Ausstellungen,
            Aktionen und Spielrunden.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Warum der Themen-Mix?
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Die Themen rund um ökologische und soziale Gerechtigkeit liegen uns
            nicht nur persönlich sehr am Herzen, sie sind auch unerlässlich für
            das Gestalten einer gerechteren Gesellschaft und den Erhalt unserer
            Lebensgrundlage.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Auf der Vegan Fantasy Fair können sich die Besucher*innen über diese
            Themen informieren, austauschen, neue Produkte kennenlernen und
            gleichzeitig einen tollen Festivaltag mit Musik, Spielen und
            fantastischem Ambiente erleben.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Wer schon einmal einen Mittelaltermarkt oder Festivals im
            Allgemeinen besucht hat, wird zudem vielleicht bemerkt haben, wie
            schwierig es ist, ein veganes Angebot zu finden. Sei es an den
            Essensständen, oder die Halskette, die es nur mit einem Lederband
            gibt oder der leckere Met, auf den man dann vielleicht verzichtet.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Wir möchten zeigen, dass es heutzutage für all diese Produkte tolle
            Alternativen gibt — also vegan UND ein Nerd sein und den Hobbys
            nachgehen, schließt sich nicht mehr aus!
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            &ldquo;Green Event&rdquo;
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Die Vegan Fantasy Fair ist ein &ldquo;Green Event&rdquo;. Das
            bedeutet für uns, dass wir ökologische, soziale, ökonomische und
            kulturelle Nachhaltigkeit berücksichtigen, so gut wie möglich
            umsetzen und sichtbar in den Vordergrund stellen. Wir möchten uns
            darin mit jedem Mal verbessern und dieses Konzept stetig ausbauen.
          </p>
          <p className="text-text-muted mb-6 leading-relaxed">
            Du hast Vorschläge? Schreibe gerne eine E-Mail an{" "}
            <a
              href="mailto:hallo@veganfantasyfair.de"
              className="text-primary underline"
            >
              hallo@veganfantasyfair.de
            </a>
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Du</h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Jetzt fehlst nur noch du! Elfe, Magier, Abenteurer, Fabelwesen oder
            einfach du selbst. Sei wer du sein möchtest.
          </p>
          <p className="text-text-muted mb-6 leading-relaxed">
            Du möchtest mit einem Stand vor Ort sein, beim Programm mitwirken
            oder deinen Verein, deine Organisation, dein Unternehmen
            präsentieren? Oder du hast Interesse an einem Sponsoring?
          </p>
          <Link
            href="/mitmachen"
            className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors"
          >
            Mitwirken
          </Link>
        </div>
      </section>
    </>
  );
}
