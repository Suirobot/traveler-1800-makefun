// One Sentence for a Traveler from 1800 — entrypoint.
// Writes one sentence (at most 200 characters) explaining the modern
// internet to a traveler from 1800, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Imagine every book, letter and song in the world copied into one great hall you may visit through a small glowing window, where all men may shout at each other for free.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
