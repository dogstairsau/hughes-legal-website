import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const SITE = "https://hugheslegal.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Essendon Lawyers Since 1983 | Hughes Legal — Family, Property & Business Law",
  description:
    "Hughes Legal are Essendon's trusted local lawyers since 1983. Practical advice for families, property, conveyancing and business — with a reply within one business day. Call (03) 9375 4226.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    title: "Essendon's Local Lawyers, Trusted Since 1983 | Hughes Legal",
    description:
      "Practical legal advice for families, property and business — from a team that knows your community. Reply within one business day.",
    url: SITE,
    siteName: "Hughes Legal",
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Hughes Legal",
  description:
    "Essendon's trusted local lawyers since 1983 — family law, property, conveyancing, wills & estates, business and commercial law.",
  url: SITE,
  telephone: "+61393754226",
  email: "mail@hugheslegal.com.au",
  foundingDate: "1983",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 1, 333 Keilor Road",
    addressLocality: "Essendon",
    addressRegion: "VIC",
    postalCode: "3040",
    addressCountry: "AU",
  },
  areaServed: ["Essendon", "Aberfeldie", "Ascot Vale", "Moonee Ponds", "Niddrie", "Strathmore", "Keilor", "Airport West"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "17:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={lato.variable}>
      <head>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`}
          type="image/svg+xml"
        />
        <meta name="theme-color" content="#15b89a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
