import { EVENT } from "@/lib/constants";

export default function HomePage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h1 className="text-4xl desktop:text-6xl font-bold text-primary mb-4">
          {EVENT.name}
        </h1>
        <p className="text-xl text-text-muted">{EVENT.tagline}</p>
      </div>
    </section>
  );
}
