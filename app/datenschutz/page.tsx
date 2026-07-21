import Link from "next/link";

export const metadata = {
  title: "Datenschutz | SAP Beratung Andreas Klaus",
  description: "Datenschutzhinweise der SAP Beratung Andreas Klaus.",
};

export default function Datenschutz() {
  return (
    <main className="legal-page">
      <p className="eyebrow"><span></span>Rechtliches</p>
      <h1>Datenschutz</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        Andreas Klaus<br />
        SAP Beratung Andreas Klaus<br />
        Buttendorfer Str. 49, 90431 Nürnberg<br />
        E-Mail: <a href="mailto:info@sapberatungandreasklaus.de">info@sapberatungandreasklaus.de</a><br />
        Telefon: <a href="tel:+4915235804909">+49 152 35804909</a>
      </p>

      <h2>2. Bereitstellung der Website</h2>
      <p>Diese Website wird über GitHub Pages, einen Dienst der GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA, bereitgestellt. Beim Aufruf einer GitHub-Pages-Website wird die IP-Adresse des Besuchers von GitHub zu Sicherheitszwecken protokolliert und gespeichert. Weitere Informationen enthält die Datenschutzerklärung von GitHub.</p>
      <p>Die Verarbeitung erfolgt zur sicheren und technisch zuverlässigen Bereitstellung unseres Onlineangebots auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2>3. Keine Analyse- oder Marketing-Cookies</h2>
      <p>Diese Website verwendet keine eigenen Analyse-, Tracking- oder Marketing-Cookies. Schriftarten und Gestaltungsmittel werden lokal beziehungsweise direkt mit der Website ausgeliefert. Inhalte externer Plattformen werden nicht automatisch eingebettet.</p>

      <h2>4. Kontaktaufnahme und Anfrageformular</h2>
      <p>Das Anfrageformular überträgt oder speichert keine Eingaben auf dieser Website. Beim Absenden wird aus den eingegebenen Angaben lediglich eine E-Mail in Ihrem lokalen E-Mail-Programm vorbereitet. Erst wenn Sie diese E-Mail selbst versenden, erreichen die Angaben den Verantwortlichen.</p>
      <p>Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen oder vertraglichen Anfragen und im Übrigen Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2>5. Externe Links</h2>
      <p>Die Website enthält normale Links zu externen Angeboten, etwa LinkedIn. Erst wenn Sie einen solchen Link aufrufen, werden Daten an den jeweiligen Anbieter übertragen. Für die Verarbeitung auf der Zielseite ist deren Betreiber verantwortlich.</p>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.</p>

      <h2>7. Aktualität</h2>
      <p>Stand dieser Datenschutzhinweise: 21. Juli 2026. Bei Änderungen der Website oder der eingesetzten Dienste werden diese Hinweise entsprechend angepasst.</p>

      <Link className="back-link" href="/">← Zurück zur Startseite</Link>
    </main>
  );
}
