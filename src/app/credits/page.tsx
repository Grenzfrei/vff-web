import Link from "next/link";

export default function CreditsPage() {
  return (
    <>
      <section className="py-12 desktop:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="font-display text-4xl desktop:text-5xl font-bold text-primary mb-8 text-center">
            Credits
          </h1>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-surface p-6 rounded-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Game Icons
              </h2>
              <p className="text-text-muted mb-3">
                Decorative icons used throughout the site are from{" "}
                <a
                  href="https://game-icons.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-light underline"
                >
                  Game Icons
                </a>
                .
              </p>
              <p className="text-text-muted text-sm mb-2">
                <strong>License:</strong> CC BY 3.0
              </p>
              <p className="text-text-muted text-sm">
                <strong>Attribution:</strong> Icons by Game Icons
                (https://game-icons.net)
              </p>
              <p className="text-text-muted text-sm mt-2">
                <strong>License Text:</strong> You are free to copy, modify,
                and distribute these works, even for commercial purposes, all
                without asking permission as long as you provide attribution.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Typography
              </h2>
              <p className="text-text-muted mb-3">
                Display and accent fonts are provided by Google Fonts under the
                OFL (Open Font License).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-muted text-sm">
                <li>
                  <strong>Cinzel</strong> (Display) —{" "}
                  <a
                    href="https://fonts.google.com/specimen/Cinzel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-light underline"
                  >
                    Google Fonts
                  </a>
                </li>
                <li>
                  <strong>Dancing Script</strong> (Accent) —{" "}
                  <a
                    href="https://fonts.google.com/specimen/Dancing+Script"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-light underline"
                  >
                    Google Fonts
                  </a>
                </li>
                <li>
                  <strong>Barlow</strong> (Body) —{" "}
                  <a
                    href="https://fonts.google.com/specimen/Barlow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-light underline"
                  >
                    Google Fonts
                  </a>
                </li>
              </ul>
              <p className="text-text-muted text-sm mt-4">
                <strong>License:</strong> OFL (Open Font License)
              </p>
            </div>

            <div className="bg-surface p-6 rounded-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Patterns & Backgrounds
              </h2>
              <p className="text-text-muted mb-3">
                Decorative background patterns are sourced from{" "}
                <a
                  href="https://www.heropatterns.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-light underline"
                >
                  Hero Patterns
                </a>
                .
              </p>
              <p className="text-text-muted text-sm">
                <strong>License:</strong> CC BY 4.0
              </p>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-3xl font-semibold hover:bg-opacity-90 transition-all shadow-card"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
