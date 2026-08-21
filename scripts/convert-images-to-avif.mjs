import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imagesRoot = path.resolve("public/images");

async function getJpgFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getJpgFiles(entryPath)));
    } else if (/\.jpe?g$/i.test(entry.name)) {
      files.push(entryPath);
    }
  }

  return files;
}

const jpgFiles = await getJpgFiles(imagesRoot);

await Promise.all(
  jpgFiles.map(async (jpgPath) => {
    const avifPath = jpgPath.replace(/\.jpe?g$/i, ".avif");

    await sharp(jpgPath).avif({ quality: 60, effort: 4 }).toFile(avifPath);
    console.log(`${path.relative(process.cwd(), jpgPath)} -> ${path.relative(process.cwd(), avifPath)}`);
  }),
);

console.log(`Converted ${jpgFiles.length} JPG image${jpgFiles.length === 1 ? "" : "s"} to AVIF.`);
