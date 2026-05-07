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
            {EVENT.name}
          </h1>
          <p className="text-xl text-text-muted mb-8">{EVENT.tagline}</p>
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
    </>
  );
}
