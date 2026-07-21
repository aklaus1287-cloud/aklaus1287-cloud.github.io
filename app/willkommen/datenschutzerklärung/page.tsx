import type { Metadata } from "next";
import LegacyRedirect from "../../components/LegacyRedirect";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz/" },
};

export default function DatenschutzRedirect() {
  return <LegacyRedirect destination="/datenschutz/" label="Datenschutz" />;
}
