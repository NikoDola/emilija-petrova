import localFont from "next/font/local";
import "./globals.css";
import { metadataBase, openGraphImage } from "./site-metadata";

const dmSans = localFont({
  src: [
    {
      path: "./fonts/DMSans-Variable-Latin-Cyrillic.woff2",
      weight: "100 1000",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  metadataBase,
  title: {
    default: "Emilija Petrova — Graphic & Visual Designer",
    template: "%s | Emilija Petrova",
  },
  description:
    "Portfolio of Emilija Petrova, a graphic and visual designer specializing in branding, identity, marketing, print and digital design.",
  openGraph: {
    title: "Emilija Petrova — Graphic & Visual Designer",
    description:
      "Portfolio of Emilija Petrova, a graphic and visual designer specializing in branding, identity, marketing, print and digital design.",
    type: "website",
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emilija Petrova — Graphic & Visual Designer",
    description:
      "Portfolio of Emilija Petrova, a graphic and visual designer specializing in branding, identity, marketing, print and digital design.",
    images: [openGraphImage],
  },
};

export const viewport = {
  themeColor: "#080811",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
