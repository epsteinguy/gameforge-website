import "./globals.css";

export const metadata = {
  title: "GameForge - Ship a Game, Earn Gold, Get Epic Loot",
  description:
    "Ship a game! Earn Gold! Get epic loot!",
  keywords: ["Hack Club", "YSWS", "game development", "teen coders", "GameForge"],
  authors: [{ name: "Hack Club" }],
  openGraph: {
    title: "GameForge - Ship a Game, Earn Gold, Get Epic Loot",
    description:
      "Build a game, earn Gold, and spend it in the shop for epic prizes. A Hack Club YSWS",
    url: "https://gameforge.hackclub.com",
    siteName: "GameForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameForge - Ship a Game, Earn Gold, Get Epic Loot",
    description:
      "Build a game, earn Gold, and spend it in the shop for epic prizes. A Hack Club YSWS",
    site: "@hackclub",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
