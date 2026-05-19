import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produktinfo — Vegan Fantasy Fair",
  description:
    "Hinweise zu Produkten und Drucksachen auf der Vegan Fantasy Fair.",
  alternates: { canonical: "/produktinfo" },
};

export default function ProduktinfoPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Produktinfo
          </h1>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-text-muted mb-4 leading-relaxed">
            An manchen Ständen werden Produktinformationen ausliegen, die darauf
            hinweisen, dass nicht zu 100 % ausgeschlossen werden kann, dass
            tierische Bestandteile im Produkt enthalten sind. Oft wissen das
            aber, wenn überhaupt, nur die herstellenden Unternehmen oder es
            mangelt schlicht an Alternativen.
          </p>
          <p className="text-text-muted mb-6 leading-relaxed">
            Wir möchten auf der Vegan Fantasy Fair auf diese
            &ldquo;unsichtbaren&rdquo; Bestandteile aufmerksam machen und so die
            Entwicklung und Herstellung von Alternativen anregen.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Produkt-Hinweis
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Oft sind noch Bestandteile tierischen Ursprungs als Zusatzstoffe in
            Lacken, Beschichtungen, Leimen, Klebstoffen, Farbstoffen oder
            Kunststoffen enthalten.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Drucksachen-Hinweis
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            Wir machen eine generelle Ausnahme was das Anbieten von Drucksachen
            betrifft, dazu gehören Bücher, Magazine, Comics, Spielmaterial,
            Produkt- und Infomaterial, wie z.B. Prospekte, Flyer,
            Bedienungsanleitungen oder bedruckte Verpackungen.
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Die meisten Drucksachen sind nicht vegan, da Klebstoffe, Farben und
            Papierbeschichtungen Bestandteile tierischen Ursprungs enthalten
            können (z.B. Knochenleim, Gelatine, Schellack, Karmin oder
            Bienenwachs).
          </p>
          <p className="text-text-muted mb-4 leading-relaxed">
            Wir möchten, dass wichtige Informationen weitergegeben werden können
            und das Lesen und Spielen fördern. Alternative Drucksachen sind
            leider noch zu selten um dies ohne Ausnahmeregelung umsetzen zu
            können.
          </p>
        </div>
      </section>
    </>
  );
}
