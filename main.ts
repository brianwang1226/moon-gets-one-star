import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "★☆☆☆☆ Same face 4.5 billion years, never turns around, dragged my sandcastle away and blamed the wind. 'Not my tide.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
console.log(review);
console.log(`chars: ${[...review].length}`);
