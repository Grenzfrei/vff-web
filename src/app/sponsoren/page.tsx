import sponsorsData from "@/lib/data/sponsors.json";

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
          <div className="grid gap-6 tablet:grid-cols-3">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface p-6 rounded-lg shadow-card text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold">{sponsor.name}</p>
                <p className="text-sm text-text-muted mt-1">{sponsor.tier}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
