import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imagesRoot = path.resolve("public/images");

async function getRasterFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getRasterFiles(entryPath)));
    } else if (/\.(?:jpe?g|png)$/i.test(entry.name) && entry.name !== "og-image.jpg") {
      files.push(entryPath);
    }
  }

  return files;
}

const rasterFiles = await getRasterFiles(imagesRoot);

await Promise.all(
  rasterFiles.map(async (rasterPath) => {
    const avifPath = rasterPath.replace(/\.(?:jpe?g|png)$/i, ".avif");

    await sharp(rasterPath).avif({ quality: 60, effort: 4 }).toFile(avifPath);
    console.log(`${path.relative(process.cwd(), rasterPath)} -> ${path.relative(process.cwd(), avifPath)}`);
  }),
);

console.log(
  `Converted ${rasterFiles.length} raster image${rasterFiles.length === 1 ? "" : "s"} to AVIF.`,
);
