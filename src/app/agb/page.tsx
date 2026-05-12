import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Vegan Fantasy Fair",
  description: "Häufig gestellte Fragen zur Vegan Fantasy Fair.",
};

export default function AgbPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[800px] mx-auto px-4 text-center">
        <h1 className="text-3xl desktop:text-5xl font-bold text-primary mb-6">
          FAQ
        </h1>
        <p className="text-text-muted mb-6">
          Diese Seite ist umgezogen.
        </p>
        <Link
          href="/faq"
          className="inline-block px-6 py-3 bg-cta text-white rounded font-semibold hover:bg-cta-hover transition-colors"
        >
          Zu den FAQ
        </Link>
      </div>
    </section>
  );
}
