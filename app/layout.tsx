import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menù Atelier | Il Tuo Menù, Progettato come un'Esperienza",
  description:
    "Progettiamo menù digitali che valorizzano il tuo locale e migliorano l'esperienza dei clienti. Consulenza gratuita, design professionale, QR Code personalizzati.",
  keywords:
    "menù digitale, QR code, design menù, ristorante, consulenza branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
