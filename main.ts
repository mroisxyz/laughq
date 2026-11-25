import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// thinking_revised 3: hello, then the batch of orders settles into a quiet slot.
// The act is one quiet listener with no opinion of its own.

const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry =
  "I told my mirror my plans. It's the only one that never interrupts.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), entry, 'utf8');
console.log(`entry.txt ${Buffer.byteLength(entry, 'utf8')} bytes`);
