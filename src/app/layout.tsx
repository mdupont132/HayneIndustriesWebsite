import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hayne Industries | Security · Cleaning · Construction",
  description:
    "Trusted WOSB partner for government, commercial, and residential organizations. Security systems, commercial cleaning, post-construction cleanup, and full construction services nationwide.",
  keywords: [
    "security systems",
    "commercial cleaning",
    "post construction cleanup",
    "janitorial services",
    "government contractor",
    "WOSB",
    "8a certified",
    "HUBZone",
    "construction services",
    "facility maintenance",
    "electrostatic disinfection",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
