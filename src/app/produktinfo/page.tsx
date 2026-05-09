import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produktinfo",
  description:
    "Hinweise zu Produkten auf der Vegan Fantasy Fair: vegane Produktstandards, unsichtbare tierische Bestandteile und Ausnahmeregelung für Drucksachen.",
};

export default function ProduktinfoPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Produktinfo
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            An manchen Ständen werden Produktinformationen ausliegen, die darauf
            hinweisen, dass nicht zu 100 % ausgeschlossen werden kann, dass tierische
            Bestandteile im Produkt enthalten sind. Oft wissen das aber, wenn überhaupt,
            nur die herstellenden Unternehmen oder es mangelt schlicht an Alternativen.
          </p>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Wir möchten auf der Vegan Fantasy Fair auf diese &bdquo;unsichtbaren&ldquo;
            Bestandteile aufmerksam machen und so die Entwicklung und Herstellung von
            Alternativen anregen.
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4 space-y-8">
          <div className="bg-surface p-6 rounded-lg shadow-card">
            <h2 className="text-xl font-bold text-primary mb-3">
              Produkt-Hinweis
            </h2>
            <p className="text-text-muted leading-relaxed">
              Oft sind noch Bestandteile tierischen Ursprungs als Zusatzstoffe in Lacken,
              Beschichtungen, Leimen, Klebstoffen, Farbstoffen oder Kunststoffen
              enthalten.
            </p>
          </div>

          <div className="bg-surface p-6 rounded-lg shadow-card">
            <h2 className="text-xl font-bold text-primary mb-3">
              Drucksachen-Hinweis
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Wir machen eine generelle Ausnahme, was das Anbieten von Drucksachen
              betrifft. Dazu gehören Bücher, Magazine, Comics, Spielmaterial, Produkt-
              und Infomaterial, wie z. B. Prospekte, Flyer, Bedienungsanleitungen oder
              bedruckte Verpackungen.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              Die meisten Drucksachen sind nicht vegan, da Klebstoffe, Farben und
              Papierbeschichtungen Bestandteile tierischen Ursprungs enthalten können
              (z. B. Knochenleim, Gelatine, Schellack, Karmin oder Bienenwachs).
            </p>
            <p className="text-text-muted leading-relaxed">
              Wir möchten, dass wichtige Informationen weitergegeben werden können und das
              Lesen und Spielen fördern. Alternative Drucksachen sind leider noch zu
              selten, um dies ohne Ausnahmeregelung umsetzen zu können.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
