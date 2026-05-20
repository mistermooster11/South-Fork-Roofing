import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

// [TODO: Replace with production domain when known]
const SITE_URL = "https://southforkroofingandchimney.com";

export const metadata: Metadata = {
  title: {
    default: "South Fork Roofing and Chimney | East Hampton, NY — Roofing, Chimney & Exterior Services",
    template: "%s | South Fork Roofing and Chimney",
  },
  description:
    "South Fork Roofing and Chimney — East Hampton's trusted roofing and chimney specialists since 1985. Roof repair, replacement, chimney rebuilds, siding, skylights, gutters. Serving The Hamptons and Long Island. Call (631) 527-6834.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "South Fork Roofing and Chimney",
    title: "South Fork Roofing and Chimney | East Hampton, NY",
    description:
      "Roofing, chimney repair, siding, skylights & gutters. Serving The Hamptons and Long Island since 1985. Free estimates. Call (631) 527-6834.",
    images: [
      {
        url: "/images/og-image.jpg", // [TODO: Add 1200x630 OG image for social sharing]
        width: 1200,
        height: 630,
        alt: "South Fork Roofing and Chimney — East Hampton, NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "South Fork Roofing and Chimney | East Hampton, NY",
    description:
      "Roofing, chimney repair, siding, skylights & gutters. Serving The Hamptons & Long Island since 1985. Free estimates. (631) 527-6834.",
    images: ["/images/og-image.jpg"], // [TODO: Add 1200x630 OG image]
  },
  robots: {
    index: false, // [TODO: Set to true when moving to production domain]
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "South Fork Roofing and Chimney",
  url: SITE_URL,
  telephone: "+16315276834",
  email: "southforkroofingandchimney@gmail.com",
  foundingDate: "1985",
  address: {
    "@type": "PostalAddress",
    streetAddress: "105 Newtown Ln",
    addressLocality: "East Hampton",
    addressRegion: "NY",
    postalCode: "11937",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.9634,
    longitude: -72.1876,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    { "@type": "City", name: "East Hampton" },
    { "@type": "City", name: "Southampton" },
    { "@type": "City", name: "Bridgehampton" },
    { "@type": "City", name: "Hampton Bays" },
    { "@type": "City", name: "Amagansett" },
    { "@type": "City", name: "Montauk" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "52",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
