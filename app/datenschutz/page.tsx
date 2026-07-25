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
        Telefon: <a href="tel:+4915236936743">+49152 36936743</a>
      </p>

      <h2>2. Bereitstellung der Website</h2>
      <p>Diese Website wird über GitHub Pages, einen Dienst der GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA, bereitgestellt. Beim Aufruf einer GitHub-Pages-Website wird die IP-Adresse des Besuchers von GitHub zu Sicherheitszwecken protokolliert und gespeichert. Weitere Informationen enthält die Datenschutzerklärung von GitHub.</p>
      <p>Die Verarbeitung erfolgt zur sicheren und technisch zuverlässigen Bereitstellung unseres Onlineangebots auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2>3. Google Analytics</h2>
      <p>Diese Website verwendet nach Ihrer ausdrücklichen Einwilligung Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Ohne Ihre Zustimmung wird das Google-Analytics-Skript nicht geladen und es werden durch uns keine Analytics-Cookies gesetzt.</p>
      <p>Bei erteilter Einwilligung kann Google Informationen über die Nutzung dieser Website verarbeiten. Dazu können insbesondere aufgerufene Seiten, Zeitpunkt und Dauer des Besuchs, ungefähre Region, technische Angaben zu Browser und Gerät, Referrer sowie Online-Kennungen gehören. Die IP-Adresse wird für die Übertragung technisch verarbeitet. Google Analytics speichert IP-Adressen nach eigenen Angaben nicht dauerhaft.</p>
      <p>Wir haben Google-Signale und personalisierte Werbung in der eingebundenen Konfiguration deaktiviert. Rechtsgrundlage für die Verarbeitung und das Speichern beziehungsweise Auslesen von Informationen auf Ihrem Endgerät ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.</p>
      <p>Google kann Daten auch in den USA verarbeiten. Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in den <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Datenschutzhinweisen von Google</a>.</p>
      <p>Ihre Auswahl wird lokal in Ihrem Browser gespeichert. Sie können Ihre Einwilligung jederzeit über die Schaltfläche „Datenschutz-Einstellungen“ widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.</p>

      <h2>4. Kontaktaufnahme und Anfrageformular</h2>
      <p>Wenn Sie das Anfrageformular verwenden, werden Name, Unternehmen (optional), E-Mail-Adresse, gewähltes SAP-Thema und Nachricht an ein von uns eingerichtetes Google-Formular übertragen. Die Antworten werden im geschäftlichen Google-Konto des Verantwortlichen gespeichert. Die Website selbst führt keine eigene Datenbank mit Formulareingaben.</p>
      <p>Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine Verarbeitung durch Google in den USA ist möglich. Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in den <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Datenschutzhinweisen von Google</a>.</p>
      <p>Die Angaben werden ausschließlich zur Bearbeitung und Beantwortung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen oder vertraglichen Anfragen und im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, wenn die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
      <p>Alternativ können Sie ohne Nutzung des Formulars direkt per E-Mail oder Telefon Kontakt aufnehmen.</p>

      <h2>5. Externe Links</h2>
      <p>Die Website enthält normale Links zu externen Angeboten, etwa LinkedIn. Erst wenn Sie einen solchen Link aufrufen, werden Daten an den jeweiligen Anbieter übertragen. Für die Verarbeitung auf der Zielseite ist deren Betreiber verantwortlich.</p>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.</p>

      <h2>7. Widerruf Ihrer Einwilligung</h2>
      <p>Eine erteilte Analytics-Einwilligung können Sie jederzeit mit Wirkung für die Zukunft über die dauerhaft erreichbare Schaltfläche „Datenschutz-Einstellungen“ ändern. Bei einem Widerruf werden die von dieser Website gesetzten Google-Analytics-Cookies entfernt und die Seite ohne Analytics neu geladen.</p>

      <h2>8. Aktualität</h2>
      <p>Stand dieser Datenschutzhinweise: 25. Juli 2026. Bei Änderungen der Website oder der eingesetzten Dienste werden diese Hinweise entsprechend angepasst.</p>

      <Link className="back-link" href="/">← Zurück zur Startseite</Link>
    </main>
  );
}
