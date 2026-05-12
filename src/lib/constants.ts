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
    name: "Marktplatz",
    description:
      "Das lebhafte Zentrum der Fair — Marktstände, Streetfood, Taverne und Spiele.",
    icon: "cooking-pot",
  },
  {
    name: "Funkelgasse",
    description:
      "Kunst & Kreatives, Lesepavillon und Community-Treff für Cosplay, LARP und mehr.",
    icon: "scroll",
  },
  {
    name: "Burghof",
    description:
      "Castle Stage mit Show- und Theatervorführungen, Spiele und Aktives Outdoor.",
    icon: "castle",
  },
  {
    name: "Gemeinschaftshaus",
    description:
      "Indoor Stage mit Vorträgen, Actual Plays und Workshops zum Mitmachen.",
    icon: "candle",
  },
  {
    name: "Zwergenwinkel",
    description: "Spielplatz und Aktionen für Kinder.",
    icon: "dragon",
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
