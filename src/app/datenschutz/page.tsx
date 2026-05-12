import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[800px] mx-auto px-4 prose prose-sm text-text">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Datenschutzerklärung
        </h1>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">
          1. Datenschutz auf einen Blick
        </h2>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
          Allgemeine Hinweise
        </h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
          Datenerfassung auf dieser Website
        </h3>
        <p className="font-semibold mt-4 mb-1">
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung
          entnehmen.
        </p>
        <p className="font-semibold mt-4 mb-1">
          Wie erfassen wir Ihre Daten?
        </p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben. Andere Daten werden automatisch oder
          nach Ihrer Einwilligung beim Besuch der Website durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
          Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
          betreten.
        </p>
        <p className="font-semibold mt-4 mb-1">
          Wofür nutzen wir Ihre Daten?
        </p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <p className="font-semibold mt-4 mb-1">
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </p>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie
          zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
          uns wenden.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">
          2. Hosting
        </h2>
        <p>
          Diese Website wird bei Cloudflare, Inc. gehostet. Details zur
          Datenverarbeitung durch Cloudflare entnehmen Sie der
          Datenschutzerklärung von Cloudflare:{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cloudflare.com/privacypolicy
          </a>
          .
        </p>
        <p className="text-text-muted italic text-sm mt-2">
          [Abschnitt wird nach Domain-Cutover rechtlich geprüft und
          vervollständigt.]
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">
          3. Allgemeine Hinweise und Pflichtinformationen
        </h2>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
          Datenschutz
        </h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wenn Sie diese Website benutzen, werden
          verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
          sind Daten, mit denen Sie persönlich identifiziert werden können. Die
          vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
          und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck
          das geschieht. Wir weisen darauf hin, dass die Datenübertragung im
          Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
          dem Zugriff durch Dritte ist nicht möglich.
        </p>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
          Hinweis zur verantwortlichen Stelle
        </h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          Jennifer Thelen
          <br />
          Hofweg 1<br />
          66125 Saarbrücken
        </p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:hallo@veganfantasyfair.de"
            className="text-primary underline"
          >
            hallo@veganfantasyfair.de
          </a>
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
          E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
        </p>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
          Speicherdauer
        </h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben; in einem solchen Fall erfolgt die
          Löschung nach Fortfall dieser Gründe.
        </p>
      </div>
    </section>
  );
}
