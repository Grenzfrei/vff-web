import type { Metadata } from "next";
import Link from "next/link";
import { EVENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Programm — Vegan Fantasy Fair",
  description:
    "Musik, Spielrunden, Vorträge, Show, Streetfood, Marktplatz, Abenteuer, Taverne, Rollenspiel, LARP, Cosplay, Lesungen und mehr.",
  alternates: { canonical: "/programm" },
};

export default function ProgrammPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Programm
          </h1>
          <p className="text-lg text-text-muted">
            Hier folgen demnächst die Ankündigungen für das Programm 2026
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Bühnen</h2>
          <div className="grid gap-4 tablet:grid-cols-2 mb-10">
            {[
              { name: "Tavern Stage", desc: "Fantastische Musik und viel Platz zum Tanzen" },
              { name: "Indoor Stage", desc: "Vorträge, Actual Plays und Live-Spielrunden" },
              { name: "Castle Stage", desc: "Show- und Theatervorführungen" },
              { name: "Eventgelände", desc: "Spiele, Aktionen und Mitmachprogramm" },
            ].map((stage) => (
              <div key={stage.name} className="bg-surface p-5 rounded-lg">
                <h3 className="font-semibold text-text mb-1">{stage.name}</h3>
                <p className="text-text-muted text-sm">{stage.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">Kategorien</h2>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-10">
            <li>Music Acts</li>
            <li>Speakers</li>
            <li>Show Acts</li>
            <li>Lesungen / Vorträge</li>
            <li>Workshops / Mitmachaktionen</li>
            <li>Spielrunden</li>
          </ul>

          <p className="text-text-muted mb-6 leading-relaxed">
            Bis dahin: Merkt euch den{" "}
            <strong className="text-text">{EVENT.dateDisplay}</strong> vor!
          </p>

          <Link
            href="/sammlung"
            className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors"
          >
            Zur Programm-Sammlung
          </Link>
        </div>
      </section>
    </>
  );
}
