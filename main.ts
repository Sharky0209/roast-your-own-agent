// Roast Your Own Agent — the program writes one roast line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My agent turned one sentence into a patrol, a registry, and three handoffs — and still hasn't written the sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
console.log(roast);
