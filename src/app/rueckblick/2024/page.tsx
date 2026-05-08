export const metadata = {
  title: "Rueckblick 2024 — Vegan Fantasy Fair",
  description: "Rueckblick 2024 der Vegan Fantasy Fair (Wix-Migration 2026-05-08).",
};

export default function Rueckblick2024Page() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">Rueckblick 2024</h1>
          <p className="text-sm text-text-muted">
            Inhalt migriert von{" "}
            <a href="https://www.veganfantasyfair.de/rückblick2024" className="underline" target="_blank" rel="noopener noreferrer">
              www.veganfantasyfair.de/rückblick2024
            </a>
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
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
