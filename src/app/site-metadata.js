const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "http://localhost:3000";

export const siteUrl = deploymentUrl.startsWith("http")
  ? deploymentUrl
  : `https://${deploymentUrl}`;

export const metadataBase = new URL(siteUrl);

export const openGraphImage = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Emilija Petrova — Graphic & Visual Designer",
};
