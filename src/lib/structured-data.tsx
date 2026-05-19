import { EVENT, COMPANY, VENUE } from "@/lib/constants";

export function OrganizationStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: EVENT.url,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saarbrücken",
      addressCountry: "DE",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function EventStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: EVENT.name,
    description: EVENT.tagline,
    url: EVENT.url,
    startDate: EVENT.startDate,
    endDate: EVENT.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: VENUE.name,
      address: {
        "@type": "PostalAddress",
        postalCode: VENUE.postalCode,
        addressLocality: VENUE.city,
        addressRegion: VENUE.region,
        addressCountry: VENUE.country,
      },
    },
    organizer: {
      "@type": "Organization",
      name: COMPANY.name,
      url: EVENT.url,
      email: COMPANY.email,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqStructuredData({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
