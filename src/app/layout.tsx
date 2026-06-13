import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "The Price of Everything — Hemit Patel — CIE3M e-Scrapbook",
  description:
    "An e-scrapbook of tariffs, markets, and money in Canada — tracked like a grocery shelf, February to June 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
