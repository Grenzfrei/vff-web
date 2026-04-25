import { COMPANY } from "@/lib/constants";

export default function ImpressumPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">Impressum</h1>
        <p className="text-text-muted">{COMPANY.name}</p>
        <p className="text-text-muted">{COMPANY.address}</p>
        <p className="text-text-muted mt-4">E-Mail: {COMPANY.email}</p>
      </div>
    </section>
  );
}
