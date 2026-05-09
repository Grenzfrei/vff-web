import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rückblick 2023",
  description:
    "Das war die Vegan Fantasy Fair 2023 — Bilder, Playlist und Pressestimmen der ersten Auflage.",
};

export default function Rueckblick2023Page() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Das war die Vegan Fantasy Fair 2023
          </h1>
          <p className="text-lg text-text-muted">1. Auflage</p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          {/* TODO Daniel: Bildergalerie aus NAS N:\01-Medien\Fotos\VFF\ einbinden */}
          <div className="bg-surface p-8 rounded-lg shadow-card text-center mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">
              Bildergalerie
            </h2>
            <p className="text-text-muted">
              Fotos der VFF 2023 folgen in K&uuml;rze.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">
            Pressestimmen
          </h2>
          {/* TODO Daniel: Echte URLs zu den Presseartikeln ergänzen */}
          <ul className="space-y-3">
            {["SOL.DE", "Wochenspiegel", "Spontis", "Saarbrücker Zeitung"].map(
              (outlet) => (
                <li
                  key={outlet}
                  className="bg-surface p-4 rounded-lg flex items-center gap-3"
                >
                  <span className="text-secondary" aria-hidden="true">
                    &#10003;
                  </span>
                  <span className="text-text">{outlet}</span>
                </li>
              ),
            )}
          </ul>

          <div className="mt-8 text-center">
            <Link
              href="/rueckblick"
              className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-3xl font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Zur&uuml;ck zur &Uuml;bersicht
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
