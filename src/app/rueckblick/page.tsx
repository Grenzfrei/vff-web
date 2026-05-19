import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rückblick — Vegan Fantasy Fair",
  description:
    "Rückblick auf die bisherigen Auflagen der Vegan Fantasy Fair.",
  alternates: { canonical: "/rueckblick" },
};

export default function RueckblickPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Rückblick
          </h1>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="grid gap-6 tablet:grid-cols-2">
            <Link
              href="/rueckblick/2024"
              className="bg-surface p-8 rounded-lg shadow-card hover:shadow-lg transition-shadow text-center"
            >
              <h2 className="text-2xl font-bold text-primary mb-2">
                Vegan Fantasy Fair 2024
              </h2>
              <p className="text-text-muted">2. Auflage</p>
            </Link>
            <Link
              href="/rueckblick/2023"
              className="bg-surface p-8 rounded-lg shadow-card hover:shadow-lg transition-shadow text-center"
            >
              <h2 className="text-2xl font-bold text-primary mb-2">
                Vegan Fantasy Fair 2023
              </h2>
              <p className="text-text-muted">1. Auflage</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
