import type { Metadata } from "next";
import ConversionEvents from "./components/ConversionEvents";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sapberatungandreasklaus.de"),
  title: "Technische SAP-Beratung & ABAP-Entwicklung | Andreas Klaus",
  description: "SAP-Beratung für ABAP/OO, Fiori, S/4HANA, Schnittstellen, Berechtigungen und Lizenzoptimierung. Über 15 Jahre Projekterfahrung – in Nürnberg und remote.",
  keywords: ["SAP Beratung", "SAP Berater Nürnberg", "ABAP Entwickler", "SAP S/4HANA", "SAP Fiori", "SAP Schnittstellen", "SAP Berechtigungen", "Andreas Klaus"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "SAP Beratung Andreas Klaus",
    title: "Technische SAP-Beratung mit Verantwortung für das Ergebnis.",
    description: "ABAP/OO, Fiori, S/4HANA, Integration und Berechtigungen – über 15 Jahre SAP-Projekterfahrung.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SAP Beratung Andreas Klaus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Beratung Andreas Klaus",
    description: "Technische SAP-Beratung für Entwicklung, Integration und Transformation.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
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
  founder: {
    "@type": "Person",
    name: "Andreas Klaus",
    jobTitle: "SAP Consultant und SAP-Entwickler",
    alumniOf: "Duale Hochschule Baden-Württemberg Stuttgart",
    sameAs: "https://www.linkedin.com/in/andreas-klaus-684b2220/",
  },
  knowsAbout: [
    "SAP ABAP",
    "ABAP Objects",
    "SAP Fiori",
    "SAP S/4HANA",
    "SAP Ariba",
    "SAP-Schnittstellen",
    "SAP-Berechtigungen",
    "SAP-Lizenzoptimierung",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-DE">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <ConversionEvents />
        {children}
      </body>
    </html>
  );
}
