import Link from "next/link";

type LegacyRedirectProps = {
  destination: string;
  label: string;
};

export default function LegacyRedirect({ destination, label }: LegacyRedirectProps) {
  const script = `window.location.replace(${JSON.stringify(destination)});`;
  return (
    <main className="legal-page legacy-redirect">
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p className="eyebrow"><span></span>Weiterleitung</p>
      <h1>Diese Seite ist umgezogen.</h1>
      <p>Sie werden automatisch zu „{label}“ weitergeleitet.</p>
      <Link className="button button-primary" href={destination}>Jetzt weitergehen</Link>
    </main>
  );
}
