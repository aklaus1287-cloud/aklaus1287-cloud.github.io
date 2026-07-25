import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vielen Dank | SAP Beratung Andreas Klaus",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-card">
        <span className="brand-mark" aria-hidden="true">AK</span>
        <p className="eyebrow"><span></span>Anfrage übermittelt</p>
        <h1>Vielen Dank für Ihre Nachricht.</h1>
        <p>Andreas Klaus meldet sich persönlich und zeitnah mit einer ersten Einordnung bei Ihnen.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">Zur Startseite <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/projekte/">Projekte ansehen <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </main>
  );
}
