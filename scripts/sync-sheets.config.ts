export const SPREADSHEET_ID = "1OE9YkKrvOapJCvaHfdzBHw2twbi8L2Mi8Z2cTPcVEJo";

export const SHEET_MAPPINGS = [
  {
    sheetName: "Events",
    outputFile: "events.json",
    columns: ["slug", "name", "tagline", "date", "location", "ticketUrl", "status"],
  },
  {
    sheetName: "Team",
    outputFile: "team.json",
    columns: ["name", "role", "bio", "photo", "order"],
    numericFields: ["order"],
  },
  {
    sheetName: "FAQ",
    outputFile: "faq.json",
    columns: ["question", "answer", "category", "order"],
    numericFields: ["order"],
  },
  {
    sheetName: "Sponsoren",
    outputFile: "sponsors.json",
    columns: ["name", "logo", "url", "tier", "order"],
    numericFields: ["order"],
  },
] as const;
