import type { Metadata } from "next";
import { VENUE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cosplay- und Waffenregeln — Vegan Fantasy Fair",
  description: `Cosplay- und Waffenregeln der Vegan Fantasy Fair im ${VENUE.name}.`,
};

export default function CosplayUndWaffenregelnPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Cosplay- und Waffenregeln
          </h1>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Allgemein</h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Der Schlosspark bietet eine natürliche Kulisse mit vielen
            Grünflächen, Bäumen und kleinen Spots, z.B Teil eines alten
            Grubenzugs oder eine große Spielburg. Sprecht also gerne unsere
            Cosplay- und Convention Fotograf*innen vor Ort an.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Bei Größe und Form eures Kostüms sind keine Grenzen gesetzt, dafür
            bietet der Schlosspark ausreichend Platz. Bedenkt dabei aber bitte,
            dass sich die Toiletten in der Halle befinden, dorthin wird der
            Zugang mit einem großen Kostüm erschwert.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Um Verletzungen zu vermeiden, darf die Kleidung keine scharfen, oder
            lange spitze Teile enthalten.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Das Tragen von verfassungswidrigen Symbolen ist streng verboten,
            auch in abgewandelter Form, wie z.B. das &ldquo;Manji&rdquo; Symbol.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Vermeidet Diskriminierendes! Darunter fallen z.B. Shirts / Schilder
            mit sexistischen, queerfeindlichen oder gewaltverherrlichenden
            Sprüchen oder Brown-/Blackfacing.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Achtet darauf, dass eure Kostüme nicht zu freizügig sind.
            Oberkörper, Intimbereich und Gesäß müssen ausreichend bedeckt sein —
            das gilt für alle Geschlechter.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Kostüme, die Teile aus tierischen Bestandteilen enthalten, wie z.B.
            Leder, Horn, Federn, Wolle sind erlaubt. Wir freuen uns jedoch sehr
            über Kostüme, die ohne tierische Materialien auskommen und zeigen,
            dass es tolle Alternativen gibt.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Eine provisorische Umkleidemöglichkeit gibt es in der Halle.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-6">
            Waffen
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Grundsätzlich ist das Führen von echten Waffen und Anscheinswaffen
            (Waffenimitate, die echten Schusswaffen täuschend ähnlich sehen) in
            der Öffentlichkeit verboten. Wir verweisen auf die deutschen
            Waffengesetze.
          </p>
          <p className="text-text font-semibold mb-4">
            Messer und Waffenimitate aus Metall sind nicht erlaubt. Am Einlass
            wird ein Waffencheck durchgeführt.
          </p>

          <h3 className="text-lg font-semibold text-text mt-6 mb-3">
            Erlaubte Ausnahmen bei Waffenimitaten:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-6">
            <li>
              Nicht schussfähige Waffenimitationen aus Gummi, Pappe,
              Schaumstoff, Weichplastik und anderen weichen
              Modelliermaterialien
            </li>
            <li>
              Waffenimitationen und Stäbe aus einer Kombination aus Holz
              und/oder Pappe/Plastik/Weichmaterial (der Holzanteil darf nicht
              überwiegen)
            </li>
            <li>
              LARP-Waffen aus Schaumstoff- oder Latexnachbildungen mit
              Stabilisationskern
            </li>
            <li>
              Funktionslose Bögen ohne echte Sehnen und Pfeil-Attrappen
            </li>
            <li>
              Gerten und Peitschen müssen so bearbeitet sein, dass durch einen
              Hieb nicht verletzt werden kann, z.B weichere Materialien
            </li>
            <li>
              Waffenimitationen dürfen unter Umständen Dekoelemente aus Metall
              enthalten
            </li>
          </ul>

          <p className="text-text-muted leading-relaxed">
            Solltet ihr euch nicht sicher sein, ob eure Waffe erlaubt ist,
            schreibt gerne eine Mail mit Bild an{" "}
            <a
              href="mailto:hallo@veganfantasyfair.de"
              className="text-primary underline"
            >
              hallo@veganfantasyfair.de
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
