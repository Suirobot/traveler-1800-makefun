// One Sentence for a Traveler from 1800 — entrypoint.
// Writes one sentence (at most 200 characters) explaining the modern
// internet to a traveler from 1800, to /output/entry.txt.
// Competition: u-po-pu-what-would-a-traveler-from-1800-say-7f5e6b9b
// (make.fun, account @bangjacky). Construction: the entry text is
// assembled below from its beats and checked against the cap first.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The entry, beat by beat. Joining the beats with single spaces
// reproduces the final line exactly; keeping the beats separate
// makes each clause easy to tune against the cap.
const PARTS = [
  "Picture a hall holding every book and letter ever written,",
  "lit by captured lightning, where any soul may read all of it -",
  "and most choose to quarrel about dinner.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 200;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
