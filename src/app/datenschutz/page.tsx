import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Vegan Fantasy Fair — Informationen zum Umgang mit personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[800px] mx-auto px-4 space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-6">
            Datenschutzerkl&auml;rung
          </h1>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-3">
            1. Datenschutz auf einen Blick
          </h2>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            Allgemeine Hinweise
          </h3>
          <p className="text-text-muted leading-relaxed">
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick
            dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
            Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgef&uuml;hrten
            Datenschutzerkl&auml;rung.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            Datenerfassung auf dieser Website
          </h3>
          <p className="text-text-muted leading-relaxed mb-4">
            <strong>
              Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
              Website?
            </strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
            &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
            Datenschutzerkl&auml;rung entnehmen.
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben. Andere Daten werden automatisch oder
            nach Ihrer Einwilligung beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten
            (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des
            Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
            sobald Sie diese Website betreten.
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            <strong>Wof&uuml;r nutzen wir Ihre Daten?</strong>
            <br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
            Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          <p className="text-text-muted leading-relaxed">
            <strong>
              Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
            </strong>
            <br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
            Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
            Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
            haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die
            Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
            bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
            ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
            zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
            k&ouml;nnen Sie sich jederzeit an uns wenden.
          </p>
        </div>

        {/* TODO Daniel: Hosting-Abschnitt muss auf Cloudflare Pages aktualisiert werden (Wix-Text veraltet) */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-3">2. Hosting</h2>
          <p className="text-text-muted leading-relaxed">
            Diese Website wird bei Cloudflare, Inc. gehostet. Details zur
            Datenverarbeitung durch den Hosting-Anbieter entnehmen Sie dessen
            Datenschutzerkl&auml;rung.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-3">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            Datenschutz
          </h3>
          <p className="text-text-muted leading-relaxed">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer
            pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerkl&auml;rung. Wenn Sie diese Website benutzen, werden
            verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
            sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden
            k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung
            erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie
            nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
            geschieht. Wir weisen darauf hin, dass die Daten&uuml;bertragung im
            Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
            Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
            der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p className="text-text-muted leading-relaxed">
            Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p className="text-text-muted mt-2">Jennifer Thelen</p>
          <p className="text-text-muted">Hofweg 1</p>
          <p className="text-text-muted">66125 Saarbr&uuml;cken</p>
          <p className="text-text-muted mt-2">
            E-Mail:{" "}
            <a
              href="mailto:hallo@veganfantasyfair.de"
              className="text-primary underline"
            >
              hallo@veganfantasyfair.de
            </a>
          </p>
          <p className="text-text-muted leading-relaxed mt-4">
            Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
            Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
            und Mittel der Verarbeitung von personenbezogenen Daten
            (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;&Auml;.) entscheidet.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            Speicherdauer
          </h3>
          <p className="text-text-muted leading-relaxed">
            Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
            Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder
            eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
            gel&ouml;scht, sofern wir keine anderen rechtlich
            zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer
            personenbezogenen Daten haben; in letzterem Fall erfolgt die
            L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
          </p>
        </div>
      </div>
    </section>
  );
}
