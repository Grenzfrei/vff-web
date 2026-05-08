export const metadata = {
  title: "AGB — Vegan Fantasy Fair",
  description: "AGB der Vegan Fantasy Fair (Wix-Migration 2026-05-08).",
};

export default function AgbPage() {
  return (
    <>
      <section className="bg-surface py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-4">AGB</h1>
          <p className="text-sm text-text-muted">
            Inhalt migriert von{" "}
            <a href="https://www.veganfantasyfair.de/agb" className="underline" target="_blank" rel="noopener noreferrer">
              www.veganfantasyfair.de/agb
            </a>
          </p>
        </div>
      </section>

      <section className="py-section-mobile desktop:py-section-desktop">
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-text-muted mb-4 leading-relaxed">{`Häufig gestellte Fragen`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Wie sind die Öffnungszeiten?`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Samstag 12-22 Uhr`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Sonntag 12-20Uhr`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Wird es eine Tageskasse geben?`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Ja, es wird eine Tageskasse vor Ort geben an der ihr Tickets kaufen könnt.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Darf ich meinen Hund mitnehmen?`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Hunde sind willkommen, müssen jedoch an der Leine geführt werden. An der Taverne findet ihr zudem eine kleine Hunde-Taverne.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Wie ist der Einlass für Kinder und Jugendliche geregelt?`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Kinder bis einschl. 12 Jahre erhalten freien Eintritt zum Festival und sind von einer erwachsenen Person zu begleiten. Für Kinder und Jugendliche zwischen 13 und einschl. 17 Jahre gilt der ermäßigte Ticketpreis, sowie für Schüler*innen und Student*innen ab 18 Jahren.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Wie ist der Einlass für Personen mit Schwerbehinderung geregelt?`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Personen mit Schwerbehindertenausweis, sowie eine Begleitperson erhalten freien Eintritt zur Veranstaltung.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Ich würde die Veranstaltung gerne besuchen, kann mir aber gerade kein Ticket leisten. Gibt es eine Möglichkeit?`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Wenn du dir gerade kein Ticket leisten kannst, schreibe eine Mail an crowd@veganfantasyfair.de um ein Ticket aus dem Soli Topf zu erhalten.`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Weitere Informationen zum Soli Ticket findest du unter "Das Konzept".`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Wo kann ich parken?`}</p>
          <p className="text-text-muted mb-4 leading-relaxed">{`Es gibt leider keine Parkplätze für Besuchende, die dem Gelände zugeteilt sind und keine öffentlichen Parkplätze in der Nähe. Solltest du mit dem Auto anreisen achte darauf nicht im Parkverbot oder vor Garagen und Geschäften zu parken.`}</p>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformulare für Ausstellende`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Datenschutz`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformular Team`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Cosplay- und Waffenregeln`}</h2>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{`Anmeldeformular für Mitwirkende`}</h2>
          <p className="text-text-muted mb-4 leading-relaxed">{`©2026 Vegan Fantasy Fair`}</p>
        </div>
      </section>
    </>
  );
}
