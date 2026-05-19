import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rückblick 2024 — Vegan Fantasy Fair",
  description: "Rückblick auf die 2. Auflage der Vegan Fantasy Fair 2024.",
  alternates: { canonical: "/rueckblick/2024" },
};

export default function Rueckblick2024Page() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Das war die Vegan Fantasy Fair 2024
          </h1>
          <p className="text-lg text-text-muted">2. Auflage</p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Pressestimmen
          </h2>
          <ul className="space-y-2 text-text-muted">
            <li>Saarbrücker Zeitung</li>
            <li>DORP-TV</li>
            <li>Wochenspiegel</li>
          </ul>
        </div>
      </section>
    </>
  );
}
