import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rückblick",
  description:
    "Rückblick auf vergangene Vegan Fantasy Fair Veranstaltungen. Bilder und Highlights von 2023 und 2024.",
};

export default function RueckblickPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Rückblick
          </h1>
          <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
            Wirf einen Blick zurück auf die vergangenen Auflagen der Vegan Fantasy Fair.
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="grid gap-6 tablet:grid-cols-2">
            <Link
              href="/rueckblick/2023"
              className="bg-surface p-8 rounded-lg shadow-card text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-3xl mb-2">2023</p>
              <p className="text-text-muted text-sm">Das war die Vegan Fantasy Fair 2023</p>
            </Link>
            <Link
              href="/rueckblick/2024"
              className="bg-surface p-8 rounded-lg shadow-card text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-3xl mb-2">2024</p>
              <p className="text-text-muted text-sm">Das war die Vegan Fantasy Fair 2024</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
