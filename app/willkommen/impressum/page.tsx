import type { Metadata } from "next";
import LegacyRedirect from "../../components/LegacyRedirect";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum/" },
};

export default function ImpressumRedirect() {
  return <LegacyRedirect destination="/impressum/" label="Impressum" />;
}
