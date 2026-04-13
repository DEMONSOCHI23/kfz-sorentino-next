import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDir = path.join(process.cwd(), "docs", "research", "mt-avto.ru");
const manifestPath = path.join(outputDir, "ASSET_MANIFEST.json");

const assets = [
  {
    kind: "notes",
    items: [
      "Shell DNS resolution to mt-avto.ru was unavailable in this environment.",
      "The page clone intentionally does not require downloaded binaries to run.",
      "If DNS/network is available later, replace this manifest with real asset URLs and download targets.",
    ],
  },
];

await mkdir(outputDir, { recursive: true });
await writeFile(manifestPath, `${JSON.stringify(assets, null, 2)}\n`, "utf8");

console.log(`Wrote ${manifestPath}`);
