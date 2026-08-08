"use client";

import Link from "next/link";
import { useEffect } from "react";

type LegacyRedirectProps = {
  destination: string;
  label: string;
};

export default function LegacyRedirect({ destination, label }: LegacyRedirectProps) {
  if (!destination.startsWith("/") || destination.startsWith("//")) {
    throw new Error("Legacy redirects must stay on this website.");
  }

  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);

  return (
    <main className="legal-page legacy-redirect">
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <p className="eyebrow"><span></span>Weiterleitung</p>
      <h1>Diese Seite ist umgezogen.</h1>
      <p>Sie werden automatisch zu „{label}“ weitergeleitet.</p>
      <Link className="button button-primary" href={destination}>Jetzt weitergehen</Link>
    </main>
  );
}
