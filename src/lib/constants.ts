export const EVENT = {
  name: "Vegan Fantasy Fair",
  tagline: "Die vegane Messe mit Fantasy-Flair",
  url: "https://veganfantasyfair.de",
  timezone: "Europe/Berlin",
} as const;

export const COMPANY = {
  name: "Next Heroes Events GbR",
  address: "Saarbrücken, Deutschland",
  email: "info@veganfantasyfair.de",
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/veganfantasyfair/",
  facebook: "https://www.facebook.com/veganfantasyfair/",
} as const;

export const EVENT_AREAS = [
  {
    name: "Mittelalter-Area",
    description: "Markt mit Handwerkern und Tavernen-Flair – Kostüme erwünscht.",
    icon: "castle",
  },
  {
    name: "Live-Musik",
    description: "Bands und Solokünstler:innen auf der Festivalbühne.",
    icon: "lyre",
  },
  {
    name: "Artist Alley",
    description: "Kreative Stände mit Kunst, Illustrationen und Handwerk.",
    icon: "scroll",
  },
  {
    name: "LARP-Spielfelder",
    description: "Fantasy-Rollenspiel zum Mitmachen für alle Altersgruppen.",
    icon: "crossed-swords",
  },
  {
    name: "Veganer Streetfood",
    description: "Pflanzliche Küche von Foodtrucks und lokalen Anbietern.",
    icon: "cooking-pot",
  },
] as const;

export const NAV_ITEMS = [
  { label: "Die Fair", href: "/die-fair" },
  { label: "Programm", href: "/programm" },
  { label: "Mitmachen", href: "/mitmachen" },
  { label: "Aussteller", href: "/aussteller" },
  { label: "Anfahrt", href: "/anfahrt" },
  { label: "FAQ", href: "/faq" },
] as const;
