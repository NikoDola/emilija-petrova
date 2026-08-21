import { copyFile, mkdir, mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";

const [projectUrl, projectSlug] = process.argv.slice(2);

if (!projectUrl || !projectSlug) {
  console.error(
    "Usage: npm run behance:import -- <behance-project-url> <local-project-slug>",
  );
  process.exit(1);
}

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140 Safari/537.36",
};

async function fetchBuffer(url) {
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

const projectResponse = await fetch(projectUrl, { headers });

if (!projectResponse.ok) {
  throw new Error(`Could not load Behance project (${projectResponse.status}).`);
}

const html = (await projectResponse.text())
  .replaceAll("\\u002F", "/")
  .replaceAll("\\/", "/")
  .replaceAll("&amp;", "&");
const assetNames = [
  ...new Set(
    [...html.matchAll(/https:\/\/mir-s3-cdn-cf\.behance\.net\/project_modules\/(?:1400|1400_webp)\/([^"<>\s?]+)/g)].map(
      (match) => match[1],
    ),
  ),
];

if (assetNames.length === 0) {
  throw new Error("No Behance project image modules were found.");
}

const targetDirectory = path.resolve("public/images/projects", projectSlug);
const stagingDirectory = await mkdtemp(path.join(tmpdir(), "behance-project-"));
const galleryHeights = [];

try {
  for (const [index, assetName] of assetNames.entries()) {
    const imageNumber = String(index + 1).padStart(2, "0");
    const sourceUrl = `https://mir-s3-cdn-cf.behance.net/project_modules/source/${assetName}`;
    const fallbackUrl = `https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/${assetName}`;
    let sourceBuffer;

    try {
      sourceBuffer = await fetchBuffer(sourceUrl);
    } catch {
      sourceBuffer = await fetchBuffer(fallbackUrl);
    }

    const outputPath = path.join(stagingDirectory, `${imageNumber}.avif`);
    const outputInfo = await sharp(sourceBuffer)
      .rotate()
      .avif({ quality: 90, effort: 6, bitdepth: 8 })
      .toFile(outputPath);

    galleryHeights.push(outputInfo.height);
    console.log(`${imageNumber}.avif: ${outputInfo.width}x${outputInfo.height}`);

  }

  await mkdir(targetDirectory, { recursive: true });
  const currentFiles = await readdir(targetDirectory, { withFileTypes: true });
  const oldGalleryFiles = currentFiles.filter(
    (entry) => entry.isFile() && /^\d{2}(?:-mobile)?\.avif$/i.test(entry.name),
  );

  await Promise.all(
    oldGalleryFiles.map((entry) => rm(path.join(targetDirectory, entry.name))),
  );

  const stagedFiles = await readdir(stagingDirectory, { withFileTypes: true });
  await Promise.all(
    stagedFiles
      .filter((entry) => entry.isFile())
      .map((entry) =>
        copyFile(
          path.join(stagingDirectory, entry.name),
          path.join(targetDirectory, entry.name),
        ),
      ),
  );

  console.log(`Imported ${assetNames.length} images into ${targetDirectory}`);
  console.log(`galleryHeights: [${galleryHeights.join(", ")}]`);
} finally {
  await rm(stagingDirectory, { recursive: true, force: true });
}
