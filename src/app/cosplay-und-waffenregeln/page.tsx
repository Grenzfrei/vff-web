import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosplay- und Waffenregeln",
  description:
    "Cosplay- und Waffenregeln der Vegan Fantasy Fair 2026. Was ist erlaubt, was nicht? Infos zu Kostümen, Waffenimitationen und Waffencheck.",
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
        <div className="max-w-[800px] mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Allgemein</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Der Schlosspark bietet eine natürliche Kulisse mit vielen Grünflächen,
              Bäumen und kleinen Spots, z. B. Teil eines alten Grubenzugs oder eine große
              Spielburg. Sprecht also gerne unsere Cosplay- und Convention Fotograf*innen
              vor Ort an.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              Bei Größe und Form eures Kostüms sind keine Grenzen gesetzt, dafür bietet
              der Schlosspark ausreichend Platz. Bedenkt dabei aber bitte, dass sich die
              Toiletten in der Halle befinden — dorthin wird der Zugang mit einem großen
              Kostüm erschwert.
            </p>
            <div className="bg-surface p-5 rounded-lg space-y-3">
              <div className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5">&#10003;</span>
                <p className="text-text-muted text-sm">
                  Um Verletzungen zu vermeiden, darf die Kleidung keine scharfen oder
                  langen spitzen Teile enthalten.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5">&#10003;</span>
                <p className="text-text-muted text-sm">
                  Das Tragen von verfassungswidrigen Symbolen ist streng verboten, auch in
                  abgewandelter Form, wie z. B. das &bdquo;Manji&ldquo;-Symbol.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5">&#10003;</span>
                <p className="text-text-muted text-sm">
                  Vermeidet Diskriminierendes! Darunter fallen z. B. Shirts/Schilder mit
                  sexistischen, queerfeindlichen oder gewaltverherrlichenden Sprüchen oder
                  Brown-/Blackfacing.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5">&#10003;</span>
                <p className="text-text-muted text-sm">
                  Achtet darauf, dass eure Kostüme nicht zu freizügig sind. Oberkörper,
                  Intimbereich und Gesäß müssen ausreichend bedeckt sein — das gilt für
                  alle Geschlechter.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5">&#10003;</span>
                <p className="text-text-muted text-sm">
                  Kostüme mit tierischen Bestandteilen (Leder, Horn, Federn, Wolle) sind
                  erlaubt. Wir freuen uns jedoch sehr über Kostüme ohne tierische
                  Materialien.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5">&#10003;</span>
                <p className="text-text-muted text-sm">
                  Eine provisorische Umkleidemöglichkeit gibt es in der Halle.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Waffen</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Grundsätzlich ist das Führen von echten Waffen und Anscheinswaffen
              (Waffenimitate, die echten Schusswaffen täuschend ähnlich sehen) in der
              Öffentlichkeit verboten. Wir verweisen auf die deutschen Waffengesetze.
            </p>
            <p className="text-text-muted leading-relaxed mb-4 font-medium text-primary">
              Messer und Waffenimitate aus Metall sind nicht erlaubt. Am Einlass wird ein
              Waffencheck durchgeführt.
            </p>

            <h3 className="text-lg font-semibold text-text mb-3">
              Folgende Ausnahmen bei Waffenimitaten sind erlaubt:
            </h3>
            <div className="bg-surface p-5 rounded-lg space-y-2">
              {[
                "Nicht schussfähige Waffenimitationen aus Gummi, Pappe, Schaumstoff, Weichplastik und anderen weichen Modelliermaterialien",
                "Waffenimitationen und Stäbe aus einer Kombination aus Holz und/oder Pappe/Plastik/Weichmaterial (der Holzanteil darf nicht überwiegen)",
                "LARP-Waffen aus Schaumstoff- oder Latexnachbildungen mit Stabilisationskern",
                "Funktionslose Bögen ohne echte Sehnen und Pfeil-Attrappen",
                "Gerten und Peitschen müssen so bearbeitet sein, dass durch einen Hieb nicht verletzt werden kann (weichere Materialien)",
                "Waffenimitationen dürfen unter Umständen Dekoelemente aus Metall enthalten",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <span className="text-secondary shrink-0">&#10003;</span>
                  <p className="text-text-muted text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-4">
              Solltet ihr euch nicht sicher sein, ob eure Waffe erlaubt ist, schreibt
              gerne eine Mail mit Bild an{" "}
              <a
                href="mailto:info@veganfantasyfair.de"
                className="text-secondary underline"
              >
                info@veganfantasyfair.de
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
