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
    description: "Markt mit Handwerkern und Tavernen-Flair – Kostueme erwünscht.",
    icon: "🏰",
  },
  {
    name: "Live-Musik",
    description: "Bands und Solokuenslter:innen auf der Festivalbuehne.",
    icon: "🎵",
  },
  {
    name: "Artist Alley",
    description: "Kreative Staende mit Kunst, Illustrationen und Handwerk.",
    icon: "🎨",
  },
  {
    name: "LARP-Spielfelder",
    description: "Fantasy-Rollenspiel zum Mitmachen fuer alle Altersgruppen.",
    icon: "⚔️",
  },
  {
    name: "Veganer Streetfood",
    description: "Pflanzliche Kueche von Foodtrucks und lokalen Anbietern.",
    icon: "🥗",
  },
] as const;

export const NAV_ITEMS = [
  { label: "Events", href: "/events" },
  { label: "Aussteller", href: "/aussteller" },
  { label: "Sponsoren", href: "/sponsoren" },
  { label: "FAQ", href: "/faq" },
  { label: "Team", href: "/team" },
  { label: "Anfahrt", href: "/anfahrt" },
] as const;
