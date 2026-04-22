import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kremanska.rs"),
  title: {
    default: "Kremanska voda - Prirodna visokoalkalna voda sa Tare | pH 9.2+",
    template: "%s | Kremanska voda",
  },
  description:
    "Kremanska voda - premium prirodna visokoalkalna voda (pH 9.2+) sa izvora na Nacionalnom parku Tara. Bogata magnezijumom, nizak natrijum, bez hemijske obrade. Naručite online.",
  keywords: [
    "kremanska voda",
    "alkalna voda",
    "pH 9.2",
    "prirodna voda",
    "Tara",
    "Kremna",
    "magnezijum",
    "zdrava voda",
    "visokoalkalna voda",
    "mineralna voda",
    "izvorska voda",
    "nacionalni park tara",
    "premium voda",
    "online prodaja vode",
  ],
  authors: [{ name: "MVP Group d.o.o." }],
  creator: "MVP Group d.o.o.",
  publisher: "MVP Group d.o.o.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://kremanska.rs",
    siteName: "Kremanska voda",
    title: "Kremanska voda - Prirodna visokoalkalna voda sa Tare",
    description:
      "Premium prirodna visokoalkalna voda (pH 9.2+) sa izvora na Nacionalnom parku Tara. Bogata magnezijumom, bez hemijske obrade.",
    images: [
      {
        url: "/proizvodi/Kremanska%201.5L%20front.jpg",
        width: 1200,
        height: 630,
        alt: "Kremanska voda - Prirodna alkalna voda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kremanska voda - Prirodna visokoalkalna voda",
    description:
      "Premium prirodna visokoalkalna voda (pH 9.2+) sa izvora na Nacionalnom parku Tara.",
    images: ["/proizvodi/Kremanska%201.5L%20front.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#b3212d",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kremanska.rs/#organization",
      name: "MVP Group d.o.o. - Kremanska voda",
      url: "https://kremanska.rs",
      logo: {
        "@type": "ImageObject",
        url: "https://kremanska.rs/proizvodi/Kremanska%201.5L%20front.jpg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+381-63-494-238",
        contactType: "customer service",
        areaServed: "RS",
        availableLanguage: ["Serbian"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kremna bb",
        addressLocality: "Kremna",
        postalCode: "31242",
        addressCountry: "RS",
      },
      sameAs: [
        "https://www.facebook.com/KremanskaVoda/",
        "https://www.instagram.com/kremanskavoda/",
      ],
    },
    {
      "@type": "Product",
      "@id": "https://kremanska.rs/#product",
      name: "Kremanska voda",
      description:
        "Prirodna visokoalkalna voda sa pH 9.2+ sa izvora na Nacionalnom parku Tara. Bogata magnezijumom, nizak natrijum.",
      brand: {
        "@type": "Brand",
        name: "Kremanska",
      },
      offers: {
        "@type": "AggregateOffer",
        availability: "https://schema.org/InStock",
        priceCurrency: "RSD",
        url: "https://kremanska.rs/online-prodaja/",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://kremanska.rs/#website",
      url: "https://kremanska.rs",
      name: "Kremanska voda",
      description: "Prirodna visokoalkalna voda sa Nacionalnog parka Tara",
      publisher: {
        "@id": "https://kremanska.rs/#organization",
      },
      inLanguage: "sr",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${inter.variable} ${outfit.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-main">
          Preskoči na glavni sadržaj
        </a>
        {children}
      </body>
    </html>
  );
}
