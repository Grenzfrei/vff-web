import faqData from "@/lib/data/faq.json";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
  order: number;
}

const faqs = (faqData as FaqItem[]).sort((a, b) => a.order - b.order);

export default function FaqPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">FAQ</h1>

        {faqs.length === 0 ? (
          <p className="text-text-muted">Aktuell keine FAQ-Einträge vorhanden.</p>
        ) : (
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-primary/10 pb-4">
                <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
                <p className="text-text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
