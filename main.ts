// One Sentence for a Traveler from 1800 — entrypoint.
// Writes one sentence (at most 200 characters) explaining the modern
// internet to a traveler from 1800, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Picture a hall holding every book and letter ever written, lit by captured lightning, where any soul may read all of it - and most choose to quarrel about dinner.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
