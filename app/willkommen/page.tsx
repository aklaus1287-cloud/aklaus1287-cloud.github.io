import type { Metadata } from "next";
import LegacyRedirect from "../components/LegacyRedirect";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function WillkommenRedirect() {
  return <LegacyRedirect destination="/" label="Startseite" />;
}
