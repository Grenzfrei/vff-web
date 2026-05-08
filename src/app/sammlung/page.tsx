export const metadata = {
  title: "Sammlung / Galerie — Vegan Fantasy Fair",
  description: "Sammlung / Galerie der Vegan Fantasy Fair (Wix-Migration 2026-05-08).",
};

export default function SammlungPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">Sammlung / Galerie</h1>
          <p className="text-sm text-text-muted">
            Inhalt migriert von{" "}
            <a href="https://www.veganfantasyfair.de/sammlung" className="underline" target="_blank" rel="noopener noreferrer">
              www.veganfantasyfair.de/sammlung
            </a>
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-text-muted mb-4 leading-relaxed">{`dieses Mal mit dabei`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Sören Vogelsang`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Freiheit, Abenteuer oder Sozialkritik? Seine Lieder sind mal witzig, mal gehen sie an Herz, aber vor allem bewegen sie uns - über 4 Millionen Videoaufrufe auf YouTube und über 12000 monatliche Hörer:innen auf Spotify`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`sprechen da wohl für sich!`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Erlebt Sören Vogelsang mit Band auf der Abenteuerbühne`}</p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-3">{`wird bald angekündigt`}</h3>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`weitere t.b.a.`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Fantasy Fotoshooting`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Kindertanzen`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Schatztruhen Gewinnspiel`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Lieven L. Litaer - Der Klingonischlehrer`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Alexandra van Gestel-Koopmans`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Lyakon`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Noel d´Oc`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Tanja Karmann`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Vegan Holistic Health`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Zeiten werden bald bekannt gegeben`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformulare für Ausstellende`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Datenschutz`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformular Team`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Cosplay- und Waffenregeln`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformular für Mitwirkende`}</h2>
          <p className="text-text-muted mb-4 leading-relaxed">{`©2026 Vegan Fantasy Fair`}</p>
        </div>
      </section>
    </>
  );
}
