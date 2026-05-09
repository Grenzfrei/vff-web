import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sammlung / Galerie",
  description:
    "Vorschau auf das Programm der Vegan Fantasy Fair 2026: Künstler:innen, Acts, Lesungen und Mitmach-Aktionen.",
};

export default function SammlungPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Sammlung / Galerie
          </h1>
          <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
            Dieses Mal mit dabei — ein erster Blick auf das Programm 2026.
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4 space-y-8">
          <div className="bg-surface p-6 rounded-lg shadow-card">
            <h2 className="text-xl font-bold text-primary mb-3">Sören Vogelsang</h2>
            <p className="text-text-muted leading-relaxed">
              Freiheit, Abenteuer oder Sozialkritik? Seine Lieder sind mal witzig, mal
              gehen sie ans Herz, aber vor allem bewegen sie uns — über 4 Millionen
              Videoaufrufe auf YouTube und über 12.000 monatliche Hörer:innen auf Spotify
              sprechen da wohl für sich! Erlebt Sören Vogelsang mit Band auf der
              Abenteuerbühne.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Weitere Programmpunkte</h2>
            <div className="grid gap-4 tablet:grid-cols-2">
              {[
                { name: "Fantasy Fotoshooting", icon: "📸" },
                { name: "Kindertanzen", icon: "👶" },
                { name: "Schatztruhen Gewinnspiel", icon: "🎁" },
                { name: "Lieven L. Litaer — Der Klingonischlehrer", icon: "🖖" },
                { name: "Alexandra van Gestel-Koopmans", icon: "🎭" },
                { name: "Lyakon", icon: "🎵" },
                { name: "Noel d'Oc", icon: "🎶" },
                { name: "Tanja Karmann", icon: "📖" },
                { name: "Vegan Holistic Health", icon: "🌿" },
              ].map((item) => (
                <div key={item.name} className="bg-surface p-4 rounded-lg shadow-card">
                  <p className="text-2xl mb-1">{item.icon}</p>
                  <h3 className="font-semibold text-text">{item.name}</h3>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm text-center mt-4">
              Zeiten werden bald bekannt gegeben. Weitere Ankündigungen folgen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
