import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { isPaymentLocked } from "@/lib/payment-lock";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  if (isPaymentLocked) {
    return {
      metadataBase: new URL("https://fiziphonez.co.uk"),
      title: "Website access restricted",
      description: "This website is temporarily unavailable.",
      robots: { index: false, follow: false },
    };
  }

  return {
    metadataBase: new URL("https://fiziphonez.co.uk"),
    title: {
      default: "Fizi Phonez | Premium Phone Repairs & Sales | Long Eaton",
      template: "%s | Fizi Phonez",
    },
    description:
      "Fast, trusted iPhone and Samsung repairs, refurbished phones, and accessories in Long Eaton. Same-day repairs, 200+ five-star reviews, warranty-backed service.",
    keywords: [
      "phone repair Long Eaton",
      "iPhone repair Nottingham",
      "Samsung repair",
      "screen replacement",
      "Fizi Phonez",
      "refurbished phones",
    ],
    openGraph: {
      title: "Fizi Phonez — Premium Phone Repairs in Long Eaton",
      description:
        "Same-day repairs, certified technicians, and refurbished devices. Book your repair today.",
      locale: "en_GB",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#07090f",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobilePhoneStore",
  name: "Fizi Phonez",
  "@id": "https://fiziphonez.co.uk",
  url: "https://fiziphonez.co.uk",
  telephone: "+441158374930",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "51 High Street, Long Eaton",
    addressLocality: "Long Eaton",
    addressRegion: "Nottinghamshire",
    postalCode: "NG10 1HZ",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  areaServed: { "@type": "City", name: "Long Eaton" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="dark">
      <body
        className={`${outfit.variable} ${dmSans.variable} min-h-screen bg-surface font-sans`}
      >
        {!isPaymentLocked ? (
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
        ) : null}
        {!isPaymentLocked ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessJsonLd),
            }}
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
