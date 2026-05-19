import type { Metadata } from "next";
import faqData from "@/lib/data/faq.json";
import Accordion from "@/components/Accordion";
import { FaqStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Häufig gestellte Fragen zur Vegan Fantasy Fair.",
  alternates: { canonical: "/faq" },
};

interface FaqItem {
  question: string;
  answer: string;
  category: string;
  order: number;
}

const rawFaqs = (faqData as FaqItem[]).sort((a, b) => a.order - b.order);
const faqs = rawFaqs.map((faq, i) => ({
  id: String(i),
  question: faq.question,
  answer: faq.answer,
}));

export default function FaqPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <FaqStructuredData questions={rawFaqs} />
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">FAQ</h1>

        {faqs.length === 0 ? (
          <p className="text-text-muted">Aktuell keine FAQ-Einträge vorhanden.</p>
        ) : (
          <Accordion items={faqs} />
        )}
      </div>
    </section>
  );
}
