import Link from "next/link";

export const metadata = {
  title: "Impressum | SAP Beratung Andreas Klaus",
  description: "Anbieterkennzeichnung der SAP Beratung Andreas Klaus.",
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <p className="eyebrow"><span></span>Rechtliches</p>
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        SAP Beratung Andreas Klaus<br />
        Inhaber: Andreas Klaus<br />
        Buttendorfer Str. 49<br />
        90431 Nürnberg<br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+4915236936743">+49152 36936743</a><br />
        E-Mail: <a href="mailto:info@sapberatungandreasklaus.de">info@sapberatungandreasklaus.de</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE360998160</p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2>Haftung für Links</h2>
      <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>

      <Link className="back-link" href="/">← Zurück zur Startseite</Link>
    </main>
  );
}
