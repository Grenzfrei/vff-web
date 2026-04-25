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

export const NAV_ITEMS = [
  { label: "Events", href: "/events" },
  { label: "Aussteller", href: "/aussteller" },
  { label: "Sponsoren", href: "/sponsoren" },
  { label: "FAQ", href: "/faq" },
  { label: "Team", href: "/team" },
  { label: "Anfahrt", href: "/anfahrt" },
] as const;
