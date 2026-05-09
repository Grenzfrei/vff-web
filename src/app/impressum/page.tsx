import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Vegan Fantasy Fair — Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[800px] mx-auto px-4 space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-6">Impressum</h1>
          <p className="text-text font-semibold">
            Eventmanagement &amp; Veranstaltungsplanung
          </p>
          <p className="text-text-muted">Jennifer Thelen</p>
          <p className="text-text-muted">Hofweg 1</p>
          <p className="text-text-muted">66125 Saarbr&uuml;cken</p>
          <p className="text-text-muted mt-4">
            Kontakt:{" "}
            <a
              href="mailto:hallo@veganfantasyfair.de"
              className="text-primary underline"
            >
              hallo@veganfantasyfair.de
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-3">
            Haftungsausschluss (Disclaimer)
          </h2>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            Haftung f&uuml;r Inhalte
          </h3>
          <p className="text-text-muted leading-relaxed">
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect;&nbsp;7 Abs.1
            TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach &sect;&sect;&nbsp;8 bis 10 TMG sind
            wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte
            oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach
            Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen. Verpflichtungen zur Entfernung oder
            Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung
            ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            Haftung f&uuml;r Links
          </h3>
          <p className="text-text-muted leading-relaxed">
            Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
            &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
            &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            Urheberrecht
          </h3>
          <p className="text-text-muted leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
            Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
            die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
            Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </section>
  );
}
