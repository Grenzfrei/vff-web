import type { Metadata } from "next";
import Link from "next/link";
import { EVENT, VENUE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aussteller — Vegan Fantasy Fair",
  description:
    `Werde Aussteller:in auf der Vegan Fantasy Fair ${EVENT.year} im ${VENUE.name}.`,
  alternates: { canonical: "/aussteller" },
};

export default function AusstellerPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Aussteller:innen
          </h1>
          <p className="text-lg text-text-muted">
            {EVENT.dateDisplay} &middot; {VENUE.name}, {VENUE.city}
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-text-muted mb-6 leading-relaxed">
            Wenn du auf der Vegan Fantasy Fair ausstellen möchtest, findest du
            alle Informationen zu Standarten, Preisen und Anmeldung auf unserer
            Standoptionen-Seite.
          </p>

          <Link
            href="/standoptionen"
            className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors mb-8"
          >
            Standoptionen &amp; Preise
          </Link>

          <div className="bg-surface p-5 rounded-lg mt-6">
            <p className="text-text-muted">
              Bei Fragen zur Anmeldung schreibe gerne eine Mail an{" "}
              <a
                href="mailto:hallo@veganfantasyfair.de"
                className="text-primary underline"
              >
                hallo@veganfantasyfair.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
