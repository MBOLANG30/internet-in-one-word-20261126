// The Internet in One Word — entry: "enshittified"
// Writes the single winning word to the output directory's entry.txt.
// The grader mounts the output folder and reads /output/entry.txt;
// MAKEFUN_OUTPUT_DIR overrides the location for local testing.
// The file holds exactly the 12-letter word, no trailing newline,
// so the gate sees 12 characters of non-blank UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "enshittified";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
