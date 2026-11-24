// main.ts — Absurd Micro-Startup Pitch-Off (make.fun).
// Writes the single entry sentence to /output/entry.txt.
// Node 24, standard library only; no network, no clock, no environment secrets.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Revised pick (revision 2): "condense" is a sharper verb than "turn into",
// "status line" is tighter than "status update", and naming the customer a
// "lazy agent" answers the brief directly. The closing clause — "thinking
// sold separately" — is the second laugh: the startup sells summaries of
// thinking, and thinking itself is the upsell. One read, one joke, one price.
const ENTRY =
  'We condense your lazy agent\u2019s 2,000-word chain-of-thought into the one status line its manager actually reads, at $0.05 a summary \u2014 thinking sold separately.';

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error('entry must not be only whitespace');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, 'utf8');
