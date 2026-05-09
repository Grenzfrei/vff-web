import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programm",
  description:
    "Das Programm der Vegan Fantasy Fair 2026 mit Tavern Stage, Indoor Stage, Castle Stage und Eventgelände. Musik Acts, Speakers, Shows und Spielrunden.",
};

export default function ProgrammPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Programm
          </h1>
          <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
            Musik | Spielrunden | Vorträge | Panels | Show | Streetfood | Messeneuheiten
            | Marktplatz | Abenteuer | Taverne | Rollenspiel | LARP | Cosplay | Lesungen
            und mehr
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Bühnen &amp; Areas 2026
          </h2>
          <div className="grid gap-4 tablet:grid-cols-2">
            {[
              { name: "Tavern Stage", desc: "Fantastische Musik und viel Platz zum Tanzen" },
              { name: "Indoor Stage", desc: "Vorträge, Panels und Workshops in der Halle" },
              { name: "Castle Stage", desc: "Bühnenprogramm am Burghof" },
              { name: "Eventgelände", desc: "LARP-Spielfelder, Mitmach-Aktionen und mehr" },
            ].map((stage) => (
              <div key={stage.name} className="bg-surface p-5 rounded-lg shadow-card">
                <h3 className="font-semibold text-primary">{stage.name}</h3>
                <p className="text-text-muted text-sm mt-1">{stage.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface p-6 rounded-lg shadow-card mt-8 text-center">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Programm wird bald angekündigt
            </h3>
            <p className="text-text-muted leading-relaxed">
              Hier folgen demnächst die Ankündigungen für das Programm 2026. Merkt euch
              den <strong className="text-primary">4. & 5. Juli 2026</strong> vor!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
