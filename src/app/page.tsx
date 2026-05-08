import Link from "next/link";
import { EVENT, EVENT_AREAS } from "@/lib/constants";
import EventAreaCard from "@/components/EventAreaCard";
import { EventStructuredData } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <EventStructuredData />
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl desktop:text-6xl font-bold text-primary mb-4">
            Vegan Fantasy Fair 2026
          </h1>
          <p className="text-xl text-text-muted mb-8">
            4. & 5. Juli 2026 &middot; Schlosspark Geislautern, Voelklingen
          </p>
          <div className="flex flex-col tablet:flex-row justify-center gap-4">
            <Link
              href="/mitmachen"
              className="px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors"
            >
              Als Aussteller:in bewerben
            </Link>
            <Link
              href="/programm"
              className="px-6 py-3 border-2 border-primary text-primary rounded font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Zum Programm
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Was euch erwartet
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {EVENT_AREAS.map((area) => (
              <EventAreaCard key={area.name} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Key Facts
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3 max-w-3xl mx-auto">
            {[
              { icon: "📅", label: "4. & 5. Juli 2026", desc: "Zwei volle Festival-Tage" },
              { icon: "📍", label: "Schlosspark Geislautern", desc: "Voelklingen, Saarland" },
              { icon: "🌱", label: "100% vegan", desc: "Essen, Mode, Kunst, Lifestyle" },
              { icon: "🧙", label: "Fantasy & Cosplay", desc: "Fuer alle, die mehr wollen als nur einen Markt" },
              { icon: "🎵", label: "Live-Musik", desc: "Bands und Solokuenstler:innen" },
              { icon: "🛒", label: "Aussteller", desc: "Vegane Marken, Handwerk, Food" },
            ].map((fact) => (
              <div key={fact.label} className="bg-surface-white p-5 rounded-lg shadow-card text-center">
                <div className="text-3xl mb-2" aria-hidden="true">{fact.icon}</div>
                <p className="font-semibold text-primary">{fact.label}</p>
                <p className="text-text-muted text-sm mt-1">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary mb-4">
            Dein Stand auf der VFF 2026
          </h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
            Ihr seid Aussteller:in und moechtet dabei sein? Ob vegane Produkte,
            Foodtruck, Kunsthandwerk oder Info-Stand — wir freuen uns auf eure
            Bewerbung!
          </p>
          <Link
            href="/mitmachen"
            className="inline-block px-8 py-4 bg-cta text-white rounded font-semibold text-lg hover:bg-cta-hover transition-colors"
          >
            Jetzt als Aussteller:in bewerben
          </Link>
        </div>
      </section>

      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary text-center mb-6">
            Wo vegane Kueche auf Fantasy trifft
          </h2>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Die Vegan Fantasy Fair ist das einzigartige vegane Festival im Saarland. An
            zwei Tagen verwandelt sich der Schlosspark Geislautern in eine Welt voller
            veganer Koestlichkeiten, Fantasy-Flair, Cosplay, Live-Musik und kreativer
            Begegnungen.
          </p>
          <p className="text-center text-lg font-medium text-primary mb-6">
            10.000 qm. Fuenf Areas. Zwei Tage. Eine Community.
          </p>
          <p className="text-center">
            <Link
              href="/die-fair"
              className="px-6 py-3 border-2 border-primary text-primary rounded font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Mehr ueber die Fair
            </Link>
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl desktop:text-3xl font-bold text-primary mb-4">
            Schlosspark Geislautern, Voelklingen
          </h2>
          <p className="text-text-muted mb-6">
            Gut erreichbar mit Auto und Bahn.
          </p>
          <Link
            href="/anfahrt"
            className="inline-block px-6 py-3 border-2 border-primary text-primary rounded font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Anfahrt &amp; Parken
          </Link>
        </div>
      </section>
    </>
  );
}
