import eventsData from "@/lib/data/events.json";

interface Event {
  slug: string;
  name: string;
  tagline: string;
  date: string;
  location: string;
  ticketUrl: string;
  status: string;
}

const events = eventsData as Event[];

export default function EventsPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">Events</h1>

        {events.length === 0 ? (
          <p className="text-text-muted">Aktuell keine Events eingetragen.</p>
        ) : (
          <div className="grid gap-6 tablet:grid-cols-2">
            {events.map((event) => (
              <div key={event.slug} className="bg-surface p-6 rounded-lg shadow-card">
                <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                <p className="text-text-muted mb-1">{event.tagline}</p>
                <p className="text-sm text-text-muted">
                  {event.date} &middot; {event.location}
                </p>
                {event.ticketUrl && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-cta text-white rounded hover:bg-cta-hover transition-colors"
                  >
                    Tickets
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
