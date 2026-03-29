import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kremanska Voda - Prirodna Visokoalkalna Voda | pH 9.2+",
  description:
    "Izvoriste Kremanske vode u neposrednoj blizini Nacionalnog parka Tara. Potpuno cista, nezagadjena prirodna visokoalkalna voda sa pH 9.2+, bogata magnezijumom.",
  keywords: "kremanska voda, alkalna voda, pH 9.2, prirodna voda, Tara, Kremna, magnezijum, zdrava voda",
  openGraph: {
    title: "Kremanska Voda - Prirodna Visokoalkalna Voda",
    description:
      "Izvoriste Kremanske vode u neposrednoj blizini Nacionalnog parka Tara sto garantuje potpuno cistu i nezagadjenu prirodu.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
