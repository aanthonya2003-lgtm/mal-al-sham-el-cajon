import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { playfair, dmSans, amiri } from "@/lib/fonts";
import { site } from "@/lib/site";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Syrian Restaurant in El Cajon, CA`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Syrian restaurant El Cajon",
    "Halal restaurant El Cajon",
    "Mediterranean food El Cajon",
    "shawarma El Cajon",
    "best Arab restaurant San Diego",
    "Mansaf San Diego",
    "Ghouzi El Cajon",
    "Mal Al Sham",
    "Damascus cuisine California",
  ],
  authors: [{ name: "Mal Al Sham" }],
  creator: "Mal Al Sham",
  publisher: "Mal Al Sham",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.fullName,
    locale: "en_US",
    url: site.url,
    title: `${site.fullName} | Syrian Restaurant in El Cajon, CA`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0d0a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: site.fullName,
  alternateName: "مطعم مال الشام",
  image: [
    "https://malalsham.com/wp-content/uploads/2024/09/mal-logo@4x-scaled.webp",
    "https://malalsham.com/wp-content/uploads/2024/09/IMG_2061-1536x1152-1-768x576.jpg",
  ],
  "@id": site.url,
  url: site.url,
  telephone: site.contact.phoneRaw,
  email: site.contact.email,
  priceRange: "$$",
  servesCuisine: [
    "Syrian",
    "Mediterranean",
    "Lebanese",
    "Middle Eastern",
    "Halal",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.lat,
    longitude: site.address.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...site.hours.days],
    opens: site.hours.open,
    closes: site.hours.close,
  },
  hasMenu: `${site.url}/menu`,
  acceptsReservations: false,
  paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay",
  currenciesAccepted: "USD",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.reviewStats.averageRating,
    reviewCount: 3131,
  },
  founder: { "@type": "Person", name: site.founder },
  foundingDate: "2018",
  sameAs: [
    site.socials.instagram,
    site.socials.facebook,
    site.socials.yelp,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${amiri.variable}`}
    >
      <body className="bg-[hsl(25_15%_6%)] text-[hsl(38_15%_93%)] font-[var(--font-ui)]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Script
          id="ld-restaurant"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Nav />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
