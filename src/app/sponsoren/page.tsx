import type { Metadata } from "next";
import sponsorsData from "@/lib/data/sponsors.json";

export const metadata: Metadata = {
  title: "Partner & Sponsoren",
  description:
    "Werde Partner der Vegan Fantasy Fair 2026. Sponsoring-Pakete von Bronze bis Platin für vegane Marken, die eine engagierte Community erreichen möchten.",
};

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  tier: string;
  order: number;
}

const sponsors = (sponsorsData as Sponsor[]).sort((a, b) => a.order - b.order);

const TIERS = [
  {
    name: "Platin-Partner",
    highlights: [
      "Logo auf Hauptbanner (Bühne + Eingang) und allen Printmaterialien",
      "Premium-Eintrag auf Startseite + Sponsoren-Seite",
      "Dedizierte Social-Media-Posts + Stories vor dem Event",
      "Feature-Artikel im VFF-Newsletter",
      "Namentliche Bühnenerwähnung durch Moderation",
      "Exklusivität pro Produktkategorie",
    ],
  },
  {
    name: "Gold-Partner",
    highlights: [
      "Logo auf Bühnenbanner und im Programm-Booklet (halbe Seite)",
      "Sponsoren-Seite mit Logo und Beschreibung",
      "Social-Media-Posts + Story-Erwähnung",
      "Erwähnung im VFF-Newsletter",
      "Stand zum Vorzugspreis",
    ],
  },
  {
    name: "Silber-Partner",
    highlights: [
      "Logo im Programm-Booklet (Viertelseite)",
      "Sponsoren-Seite mit Logo und Name",
      "Erwähnung in Event-Ankündigungs-Posts",
      "Stand zum Vorzugspreis",
    ],
  },
  {
    name: "Bronze-Partner",
    highlights: [
      "Logo in der Sponsoren-Liste auf der Website",
      "Sponsoren-Seite mit Logo und Link",
      "Mention im Dankespost nach dem Event",
    ],
  },
];

export default function SponsorenPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Werde Partner der Vegan Fantasy Fair 2026
          </h1>
          <p className="text-lg text-text-muted mb-6">
            4. &amp; 5. Juli 2026 &middot; Schlosspark Geislautern, Völklingen
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-text-muted leading-relaxed text-lg mb-6">
            Die Vegan Fantasy Fair ist das vegane Fantasy-Festival im Saarland —
            jedes Jahr im Juli, bereits zum dritten Mal im Schlosspark
            Geislautern. 10.000 qm, fünf Areas, zwei Tage voller Fantasy-Flair,
            Live-Musik, veganer Streetfood-Kultur, LARP und Kunsthandwerk.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            Als Partner der VFF 2026 erreichst du eine aktive, leidenschaftliche
            Community: Menschen, die bewusst leben, kreative Marken unterstützen
            und gezielt nach veganen Produkten und Erlebnissen suchen.
          </p>
        </div>
      </section>

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Sponsor-Pakete 2026
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="bg-surface-white p-6 rounded-lg shadow-card"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {tier.name}
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span
                        className="text-secondary mt-0.5"
                        aria-hidden="true"
                      >
                        &#10003;
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {/* TODO Daniel: Preise pro Paket ergänzen */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {sponsors.length > 0 && (
        <section className="py-section-mobile desktop:py-section-desktop">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
              Unsere Partner
            </h2>
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
                  {sponsor.tier && (
                    <p className="text-sm text-text-muted mt-1">
                      {sponsor.tier}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary mb-4">
            Jetzt Partner werden
          </h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
            Du willst deine Marke auf der Vegan Fantasy Fair 2026 präsentieren?
            Meld dich bei uns — wir schicken dir gerne unser Sponsor-Exposé mit
            allen Details.
          </p>
          <a
            href="mailto:info@veganfantasyfair.de"
            className="inline-block px-8 py-4 bg-cta text-white rounded font-semibold text-lg hover:bg-cta-hover transition-colors"
          >
            Sponsoring-Anfrage senden
          </a>
        </div>
      </section>
    </>
  );
}
