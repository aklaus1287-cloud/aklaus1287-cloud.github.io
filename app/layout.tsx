import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sapberatungandreasklaus.de"),
  title: "SAP-Beratung in Nürnberg | Andreas Klaus",
  description: "Persönliche SAP-Beratung für Analyse, Umsetzung und stabile Lösungen. Erfahren, pragmatisch und direkt – in Nürnberg und remote.",
  keywords: ["SAP Beratung", "SAP Berater Nürnberg", "SAP Entwicklung", "SAP Projektunterstützung", "Andreas Klaus"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "SAP Beratung Andreas Klaus",
    title: "SAP-Beratung, die im Tagesgeschäft funktioniert.",
    description: "Persönliche, pragmatische SAP-Beratung – von der Analyse bis zur verlässlichen Umsetzung.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SAP Beratung Andreas Klaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Beratung Andreas Klaus",
    description: "SAP-Beratung, die im Tagesgeschäft funktioniert.",
    images: ["/og.png"],
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SAP Beratung Andreas Klaus",
  url: "https://www.sapberatungandreasklaus.de",
  email: "info@sapberatungandreasklaus.de",
  telephone: "+49 152 35804909",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Buttendorfer Str. 49",
    postalCode: "90431",
    addressLocality: "Nürnberg",
    addressCountry: "DE",
  },
  areaServed: ["Deutschland", "Remote"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-DE">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        {children}
      </body>
    </html>
  );
}
