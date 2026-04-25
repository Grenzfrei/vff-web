import { execSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { SPREADSHEET_ID, SHEET_MAPPINGS } from "./sync-sheets.config";

const DATA_DIR = join(__dirname, "..", "src", "lib", "data");

function fetchSheet(sheetName: string): string[][] {
  const result = execSync(
    `gws sheets +read --spreadsheet "${SPREADSHEET_ID}" --range "${sheetName}!A:Z" --format json`,
    { encoding: "utf-8" }
  );

  const parsed = JSON.parse(result);
  return (parsed.values as string[][]) ?? [];
}

function main() {
  mkdirSync(DATA_DIR, { recursive: true });

  for (const mapping of SHEET_MAPPINGS) {
    console.log(`Syncing ${mapping.sheetName} → ${mapping.outputFile}...`);

    const rows = fetchSheet(mapping.sheetName);
    if (rows.length < 2) {
      console.warn(`  ⚠ Keine Daten in ${mapping.sheetName}, überspringe.`);
      continue;
    }

    const headers = rows[0];
    const numericFields = ("numericFields" in mapping ? mapping.numericFields : []) as readonly string[];

    const data = rows.slice(1).map((row) => {
      const obj: Record<string, unknown> = {};
      for (const col of mapping.columns) {
        const colIndex = headers.indexOf(col);
        const rawValue = colIndex >= 0 ? (row[colIndex]?.trim() ?? "") : "";
        obj[col] = numericFields.includes(col) ? (parseInt(rawValue, 10) || 0) : rawValue;
      }
      return obj;
    });

    const firstCol = mapping.columns[0];
    const filtered = data.filter((item) => item[firstCol]);

    const outPath = join(DATA_DIR, mapping.outputFile);
    writeFileSync(outPath, JSON.stringify(filtered, null, 2) + "\n");
    console.log(`  ✓ ${filtered.length} Einträge geschrieben.`);
  }

  console.log("\nSync abgeschlossen!");
}

main();
