export default function MitmachenPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">
            Mitmachen
          </h1>
          <p className="text-lg text-text-muted mb-6">
            Werde Teil der Vegan Fantasy Fair 2026
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Als Aussteller:in bewerben
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Ihr moechtet mit eurem Stand auf der Vegan Fantasy Fair vertreten sein?
            Ob vegane Produkte, Foodtruck, Kunsthandwerk oder Info-Stand —
            wir freuen uns auf eure Bewerbung!
          </p>

          <div className="bg-surface p-8 rounded-lg shadow-card mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Standplatz-Anfrage
            </h3>
            <p className="text-text-muted mb-6">
              Fuer Standplatz-Anfragen und weitere Informationen zu Konditionen
              und Verfuegbarkeit meldet euch bitte direkt per E-Mail bei uns:
            </p>
            <a
              href="mailto:info@veganfantasyfair.de"
              className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors"
            >
              E-Mail an info@veganfantasyfair.de
            </a>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6 mt-12">
            Kategorien
          </h2>
          <div className="grid gap-4 tablet:grid-cols-2">
            {[
              { title: "Vegane Produkte", desc: "Lebensmittel, Kosmetik, Mode" },
              { title: "Food & Streetfood", desc: "Foodtrucks und Getraenkestaende" },
              { title: "Kunsthandwerk", desc: "Handgemachtes, Illustrationen, Art" },
              { title: "Info & Vereine", desc: "Non-Profit, Tierschutz, Bildung" },
              { title: "LARP & Fantasy", desc: "Gewandungen, Schmuck, Accessoires" },
              { title: "Workshops", desc: "Mitmach-Aktionen fuer Besucher:innen" },
            ].map((cat) => (
              <div key={cat.title} className="bg-surface p-4 rounded-lg">
                <h3 className="font-semibold text-primary">{cat.title}</h3>
                <p className="text-text-muted text-sm mt-1">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
