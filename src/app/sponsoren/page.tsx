import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import sponsorsData from "@/lib/data/sponsors.json";

export const metadata: Metadata = {
  title: "Sponsoren",
  description:
    "Unsere Sponsoren und Partner der Vegan Fantasy Fair 2026 — von Verlagen über Spielehersteller bis zu lokalen Initiativen.",
  alternates: { canonical: "/sponsoren" },
};

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  tier: string;
  order: number;
}

const sponsors = (sponsorsData as Sponsor[]).sort((a, b) => a.order - b.order);

export default function SponsorenPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">Sponsoren</h1>

        {sponsors.length === 0 ? (
          <p className="text-text-muted">Aktuell keine Sponsoren eingetragen.</p>
        ) : (
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-white p-6 rounded-lg shadow-card flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow min-h-[160px]"
              >
                <img
                  src={sponsor.logo}
                  alt={`Logo ${sponsor.name}`}
                  loading="lazy"
                  className="max-h-20 max-w-[160px] object-contain"
                />
                <p className="text-sm font-medium text-text">{sponsor.name}</p>
              </a>
            ))}
          </div>
        )}

        <p className="text-center text-text-muted text-sm mt-10">
          Ihr m&ouml;chtet Sponsor oder Partner der Vegan Fantasy Fair werden?{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-secondary underline">
            {COMPANY.email}
          </a>
        </p>
      </div>
    </section>
  );
}
