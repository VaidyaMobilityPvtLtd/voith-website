#!/usr/bin/env node
/**
 * Replace em dashes (—) in site copy with commas for a more natural tone.
 * Skips en dashes in ranges (1960–2025) and hyphenated compounds.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = [
  path.join(ROOT, "src/data"),
  path.join(ROOT, "src/content"),
  path.join(ROOT, "src/components"),
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|mdx)$/.test(name)) out.push(full);
  }
  return out;
}

function normalize(text) {
  return text
    .replace(/ — /g, ", ")
    .replace(/—/g, ", ");
}

let changed = 0;
for (const file of DIRS.flatMap((d) => walk(d))) {
  const before = fs.readFileSync(file, "utf8");
  if (!before.includes("—")) continue;
  const after = normalize(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log("updated:", path.relative(ROOT, file));
  }
}
console.log(`Done. ${changed} file(s) updated.`);
