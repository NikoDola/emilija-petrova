import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: [
    {
      path: "./fonts/DMSans-Variable.ttf",
      weight: "100 1000",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-Italic-Variable.ttf",
      weight: "100 1000",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: {
    default: "Emilija Petrova — Graphic & Visual Designer",
    template: "%s | Emilija Petrova",
  },
  description:
    "Portfolio of Emilija Petrova, a graphic and visual designer specializing in branding, identity, marketing, print and digital design.",
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
