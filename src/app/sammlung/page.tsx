import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programm-Sammlung — Vegan Fantasy Fair",
  description:
    "Programm-Übersicht der Vegan Fantasy Fair 2026: Shows, Spielrunden, Workshops, Lesungen und Musik.",
};

export default function SammlungPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Programm-Sammlung
          </h1>
          <p className="text-lg text-text-muted">dieses Mal mit dabei</p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="bg-surface p-6 rounded-lg mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Sören Vogelsang
            </h2>
            <p className="text-text-muted leading-relaxed">
              Freiheit, Abenteuer oder Sozialkritik? Seine Lieder sind mal
              witzig, mal gehen sie an Herz, aber vor allem bewegen sie uns
              &mdash; über 4 Millionen Videoaufrufe auf YouTube und über 12000
              monatliche Hörer:innen auf Spotify sprechen da wohl für sich!
            </p>
            <p className="text-text-muted mt-2 leading-relaxed">
              Erlebt Sören Vogelsang mit Band auf der Abenteuerbühne
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Show</h2>
          <p className="text-text-muted mb-6">wird bald angekündigt</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Spielrunden
          </h2>
          <p className="text-text-muted mb-6">weitere t.b.a.</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Workshops / Mitmachaktionen
          </h2>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-6">
            <li>Fantasy Fotoshooting</li>
            <li>Kindertanzen</li>
            <li>Schatztruhen Gewinnspiel</li>
            <li>weitere t.b.a.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Lesungen / Vorträge
          </h2>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-6">
            <li>Lieven L. Litaer &mdash; Der Klingonischlehrer</li>
            <li>Alexandra van Gestel-Koopmans</li>
            <li>Lyakon</li>
            <li>Noel d&rsquo;Oc</li>
            <li>Tanja Karmann</li>
            <li>Vegan Holistic Health</li>
            <li>weitere t.b.a.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Musik</h2>
          <p className="text-text-muted mb-6">weitere t.b.a.</p>

          <div className="bg-surface p-5 rounded-lg mt-10">
            <p className="text-text-muted text-sm">
              Zeiten werden bald bekannt gegeben
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
