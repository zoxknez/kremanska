import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kremanska voda - prirodna visokoalkalna voda | pH 9.2+",
  description:
    "Izvorište Kremanske vode u neposrednoj blizini Nacionalnog parka Tara. Potpuno čista, nezagađena prirodna visokoalkalna voda sa pH 9.2+, bogata magnezijumom.",
  keywords: "kremanska voda, alkalna voda, pH 9.2, prirodna voda, Tara, Kremna, magnezijum, zdrava voda",
  openGraph: {
    title: "Kremanska voda - prirodna visokoalkalna voda",
    description:
      "Izvorište Kremanske vode u neposrednoj blizini Nacionalnog parka Tara što garantuje potpuno čistu i nezagađenu prirodu.",
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
