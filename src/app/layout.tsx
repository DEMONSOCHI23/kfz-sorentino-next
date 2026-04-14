import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KFZ Sorentino | Werkstatt Frankfurt",
  description: "KFZ Sorentino: Leistungen, Öffnungszeiten, Standort, 1‑Klick Anrufen/Route.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
