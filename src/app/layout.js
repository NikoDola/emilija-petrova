import "./globals.css";

export const metadata = {
  title: {
    default: "Emilija Petrova — Graphic & Visual Designer",
    template: "%s | Emilija Petrova",
  },
  description:
    "Portfolio of Emilija Petrova, a graphic and visual designer specializing in branding, identity, marketing, print, and digital design.",
  icons: {
    icon: "/images/personal/logo.svg",
    shortcut: "/images/personal/logo.svg",
    apple: "/images/personal/logo.svg",
  },
};

export const viewport = {
  themeColor: "#090a13",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
