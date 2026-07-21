import Link from "next/link";
import ContactForm from "./components/ContactForm";

const services = [
  {
    number: "01",
    title: "ABAP & Fiori Entwicklung",
    text: "Individuelle SAP-Lösungen von der technischen Konzeption bis zur produktionsreifen Umsetzung – nachvollziehbar, wartbar und nah am Geschäftsprozess.",
    tags: ["ABAP", "ABAP OO", "Fiori", "Adobe Forms"],
    href: "/leistungen/abap-entwicklung/",
  },
  {
    number: "02",
    title: "Integration & Schnittstellen",
    text: "Robuste Verbindungen zwischen SAP und Drittsystemen – inklusive Architektur, Berechtigungen, Netzwerkkommunikation, Tests und Fehleranalyse.",
    tags: ["REST", "SOAP", "RFC", "IDoc"],
    href: "/leistungen/sap-schnittstellen/",
  },
  {
    number: "03",
    title: "S/4HANA Transformation",
    text: "Technische Begleitung von Voruntersuchung, Readiness Check und Code Conversion bis zur Einführung und Stabilisierung der neuen Systemlandschaft.",
    tags: ["S/4HANA", "ATC", "Code Conversion", "SAP Activate"],
    href: "/leistungen/s4hana-beratung/",
  },
  {
    number: "04",
    title: "Berechtigungen & Compliance",
    text: "Berechtigungskonzepte, Benutzeradministration und technische Umsetzung für sichere, prüfbare und im Alltag praktikable SAP-Prozesse.",
    tags: ["Berechtigungen", "XAMS", "CUA", "Compliance"],
    href: "/leistungen/sap-berechtigungen/",
  },
  {
    number: "05",
    title: "Lizenzen & Optimierung",
    text: "Transparente Analyse von SAP-Lizenzzuordnungen, Vertrags- und Nutzungsszenarien sowie fundierte Entscheidungsgrundlagen für die Optimierung.",
    tags: ["SNOW", "Digital Access", "Vermessung", "Optimierung"],
    href: "/leistungen/technische-sap-beratung/",
  },
  {
    number: "06",
    title: "Projektleitung & Stabilisierung",
    text: "Erfahrene technische Projektsteuerung, strukturierte Testkonzeption und fokussierte Unterstützung in kritischen Projekt- und Betriebsphasen.",
    tags: ["Projektleitung", "Testing", "Fehleranalyse", "Training"],
    href: "/leistungen/technische-sap-beratung/",
  },
  {
    number: "07",
    title: "SAP Personalvermittlung",
    text: "Fachlich fundierte Vermittlung passender SAP-Consultants und SAP-Entwickler – vom klaren Anforderungsprofil bis zur strukturierten Vorstellung geeigneter Fachkräfte.",
    tags: ["SAP Recruiting", "Fachprofile", "Direktvermittlung", "Projektbesetzung"],
    href: "/leistungen/sap-personalvermittlung/",
  },
];

const expertise = [
  {
    title: "Entwicklung",
    text: "Vom klassischen Report bis zur modernen Fiori-Anwendung.",
    items: ["ABAP & ABAP OO", "Report- und Dialogprogrammierung", "Fiori", "Web Dynpro", "SAPscript, Smart Forms & Adobe Forms", "Workflows"],
  },
  {
    title: "Integration",
    text: "Schnittstellen, die auch im produktiven Betrieb belastbar bleiben.",
    items: ["REST & SOAP Webservices", "RFC & BAPI", "ALE & IDoc", "SFTP / FTPS / Flatfile", "Lobster Data", "SAP Integration Suite"],
  },
  {
    title: "Plattformen & Module",
    text: "Breiter SAP-Kontext für technisch tragfähige Entscheidungen.",
    items: ["SAP S/4HANA", "SAP ERP / ECC", "SAP Ariba", "SAP BTP", "MM & WM", "PM, FI & TRM"],
  },
  {
    title: "Security & Methoden",
    text: "Governance und Zusammenarbeit als Teil der technischen Lösung.",
    items: ["Benutzer & Berechtigungen", "Zentrale Benutzerverwaltung", "Lizenzoptimierung", "Scrum", "ITIL", "SAP Activate & Jira"],
  },
];

type Project = {
  period: string;
  title: string;
  company: string;
  role: string;
  text: string;
  result?: string;
  tech: string[];
};

const projects: Project[] = [
  {
    period: "seit 06/2025",
    title: "Schnittstelle für Wertpapierdaten",
    company: "Thüringer Aufbaubank · Bank- und Finanzwesen",
    role: "Softwareentwicklung",
    text: "Konzeption der Schnittstellenarchitektur, ABAP/OO-Entwicklung, Berechtigungs- und Netzwerkdesign, RFC-Anbindung sowie Test und Fehleranalyse.",
    result: "Konkreter Beitrag: abgestimmte Schnittstellenarchitektur, technische Anbindung und durchgängiges Testdesign.",
    tech: ["SAP ECC", "REST", "RFC", "WM Datenservice"],
  },
  {
    period: "06/2024 – 03/2025",
    title: "Proof of Concept SAP Ariba",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Systemarchitektur, ABAP/OO, Fiori Apps, Berechtigungen, RFC/SOAP/REST-Schnittstellen und Adobe Forms im Ariba-Umfeld.",
    result: "Konkreter Beitrag: technischer Proof of Concept als belastbare Grundlage für die weitere Architekturentscheidung.",
    tech: ["SAP Ariba", "S/4HANA", "Fiori", "Integration Suite"],
  },
  {
    period: "07/2023 – 05/2024",
    title: "Einführung SAP S/4HANA",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "ABAP/OO-Entwicklung, Code Conversion, Berechtigungen, Fiori Apps, Train-the-Trainer, Testkonzeption und Stabilisierung.",
    result: "Konkreter Beitrag: konvertierte Eigenentwicklungen, abgesicherte Fiori- und Berechtigungsthemen sowie Wissenstransfer.",
    tech: ["SAP ERP ECC", "S/4HANA", "Fiori"],
  },
  {
    period: "03/2023 – 09/2023",
    title: "SAP-Berechtigungen",
    company: "Berliner Verkehrsbetriebe · ÖPNV",
    role: "Berechtigungsentwicklung",
    text: "Konzeption und Entwicklung von Berechtigungen, Benutzeradministration, Trainings, ABAP/OO sowie Test und Fehlerbehebung.",
    result: "Konkreter Beitrag: umgesetzte Berechtigungen, nachvollziehbare Tests und befähigte Administration.",
    tech: ["SAP ERP ECC", "PTNova", "ABAP OO"],
  },
  {
    period: "01/2023 – 03/2023",
    title: "SAP-Lizenzoptimierung",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Administration",
    text: "Einführung von SNOW, Optimierung der Lizenzzuordnungen, Vertragsanalyse und Szenarien für Digital Access sowie S/4-Conversion.",
    result: "Konkreter Beitrag: transparente Lizenzzuordnung und strukturierte Entscheidungsgrundlagen für Optimierungsszenarien.",
    tech: ["SNOW", "S/4HANA", "SAP ERP ECC"],
  },
  {
    period: "08/2022 – 02/2023",
    title: "Voruntersuchung S/4HANA-Migration",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "Business Case On-Premise vs. RISE, ATC Code Check, Maintenance Planner und S/4HANA Readiness Check.",
    tech: ["S/4HANA", "ATC", "FI", "MM / WM / PM"],
  },
  {
    period: "06/2021 – 12/2021",
    title: "Mobile Lagerlogistik in der Instandhaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "iPad-Anbindung, mobile Oberflächen und Geschäftslogik für Lagerbewegungen und Inventur mit Mobisys und ABAP.",
    tech: ["Mobisys MSD/MSB", "WM", "MM", "iOS"],
  },
  {
    period: "06/2020 – 05/2021",
    title: "Icertis-Vertragsmanagement",
    company: "DATEV eG · Informationstechnologie",
    role: "Technische Teilprojektleitung",
    text: "IDoc-to-REST-Integration, ORDERS- und CREMAS-Erweiterungen, LDAP-Anbindung und technische Security-Analyse.",
    tech: ["SAP ERP ECC", "IDoc", "REST", "LDAP"],
  },
  {
    period: "01/2019 – 04/2020",
    title: "Mobile Logistik im Zentrallager",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "Anbindung von iPhones an SAP sowie Entwicklung mobiler Oberflächen und Geschäftslogik in Mobisys und ABAP.",
    tech: ["SAP ERP ECC", "Mobisys", "WM", "iOS"],
  },
  {
    period: "06/2018 – 12/2018",
    title: "ERP- und SRM-EHP-Upgrade",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "Upgrade, ABAP-Fehlerbereinigung, SPAU/SPAM-Nacharbeiten, Testkoordination und Transportmanagement.",
    tech: ["SAP ERP 6.0", "SRM 7.0", "SPAU / SPAM", "ABAP OO"],
  },
  {
    period: "01/2017 – 11/2017",
    title: "EAI mit Lobster Data",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "RFC- und IDoc-Anbindung, BAPI-Anpassungen, Migration von Seeburger-Profilen und IT-Security-Analyse.",
    tech: ["Lobster Data", "RFC", "IDoc", "ABAP OO"],
  },
  {
    period: "04/2016 – 12/2016",
    title: "Mobile Prozesse Instandhaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Mobile Prozesse für Entstörung, Wartung, Schichtbuch und Ersatzteilentnahme inklusive PM-Customizing.",
    tech: ["SAP PM", "MM", "Mobisys", "ABAP OO"],
  },
  {
    period: "07/2015 – 03/2016",
    title: "SAP Treasury Management",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "ABAP-Reports, BAPI/BAdI-Programmierung, automatische Sachkontenfindung, Flatfile-Schnittstellen und TRM-Customizing.",
    tech: ["SAP TRM", "FI", "BAPI / BAdI", "ABAP OO"],
  },
  {
    period: "11/2014 – 06/2015",
    title: "Mobile Lagerhaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Handscanner-Anbindung, Mobisys-Oberflächen, ABAP-Geschäftslogik, WM-Customizing und Jobsteuerung.",
    tech: ["SAP WM", "MM", "Mobisys", "ABAP OO"],
  },
  {
    period: "01/2013 – 10/2013",
    title: "Eigenentwicklung Reisekostenabrechnung",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Datenmodell, Rechnungseingang per Flatfile, Abrechnungsverbuchung in ABAP OO und Stammdatenmigration mit LSMW.",
    tech: ["SAP FI", "LSMW", "Flatfile", "ABAP OO"],
  },
  {
    period: "01/2012 – 11/2012",
    title: "SAP R/3 EHP-Upgrade",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Upgrade, Fehlerbereinigung im Kundennamensraum, SPAU/SPAM-Nacharbeiten und Transportmanagement.",
    tech: ["SAP ERP", "FI / MM / WM / PM", "SPAU / SPAM", "ABAP OO"],
  },
  {
    period: "04/2011 – 09/2011",
    title: "Upgrade Kreditorenbuchhaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Technisches SAP Consulting",
    text: "Upgrade von AFI DirectInvoiceControl, Rechnungsprüfungslogik, SAPscript und Genehmigungsworkflow.",
    tech: ["SAP FI-AP", "AFI DIC", "SAPscript", "Workflow"],
  },
  {
    period: "10/2010 – 03/2011",
    title: "Zentrale Benutzerverwaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Technisches SAP Consulting",
    text: "Konzeption und Customizing der CUA, ABAP-Reports, Systemanbindung und Training der Benutzeradministration.",
    tech: ["SAP ERP", "SAP SRM", "Solution Manager", "CUA"],
  },
];

const steps = [
  { number: "01", title: "Verstehen", text: "Ziel, Systemkontext, Abhängigkeiten und den tatsächlichen Engpass sauber einordnen." },
  { number: "02", title: "Entscheiden", text: "Lösungsweg, Abgrenzung, Risiken und messbares Ergebnis transparent festlegen." },
  { number: "03", title: "Umsetzen", text: "Eigenständig entwickeln, eng abstimmen, testen und nachvollziehbar dokumentieren." },
  { number: "04", title: "Stabilisieren", text: "Wissen übergeben, Fehlerquellen absichern und die Lösung sicher in den Betrieb bringen." },
];

const faqs = [
  {
    question: "Für welche SAP-Themen ist Andreas Klaus der richtige Ansprechpartner?",
    answer: "Besonders für technische SAP-Aufgaben rund um ABAP/OO, Fiori, Schnittstellen, S/4HANA-Transformation, Berechtigungen, Lizenzoptimierung und mobile Logistikprozesse.",
  },
  {
    question: "Ist eine Zusammenarbeit remote möglich?",
    answer: "Ja. Projekte können remote sowie nach Absprache vor Ort begleitet werden. Der Schwerpunkt liegt auf einer klaren, direkten Zusammenarbeit mit kurzen Abstimmungswegen.",
  },
  {
    question: "Sind auch klar abgegrenzte Einzelaufgaben möglich?",
    answer: "Ja. Neben längeren Projekten sind technische Analysen, Proofs of Concept, Schnittstellen, Reviews, Fehleranalysen und gezielte Entwicklungsaufgaben möglich.",
  },
];

const featuredProjects = projects.slice(0, 5);
const earlierProjects = projects.slice(5);

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <header className="site-header">
        <a className="brand" href="#start" aria-label="SAP Beratung Andreas Klaus – Startseite">
          <span className="brand-mark" aria-hidden="true">AK</span>
          <span className="brand-copy"><strong>SAP Beratung</strong><span>Andreas Klaus</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#kompetenzen">Kompetenzen</a>
          <a href="#projekte">Projekte</a>
          <a href="#ueber-mich">Über mich</a>
          <a className="nav-cta" href="#kontakt">Kontakt</a>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Navigation öffnen"><span></span><span></span></summary>
          <nav aria-label="Mobile Navigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#kompetenzen">Kompetenzen</a>
            <a href="#projekte">Projekte</a>
            <a href="#ueber-mich">Über mich</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="start">
          <div className="hero-grid">
            <aside className="hero-profile" aria-label="Andreas Klaus und direkte Kontaktmöglichkeiten">
              <div className="hero-portrait">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/andreas-klaus-480.avif 480w, /andreas-klaus-800.avif 800w, /andreas-klaus-1095.avif 1095w"
                    sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 980px) 620px, 440px"
                  />
                  <source
                    type="image/webp"
                    srcSet="/andreas-klaus-480.webp 480w, /andreas-klaus-800.webp 800w, /andreas-klaus-1095.webp 1095w"
                    sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 980px) 620px, 440px"
                  />
                  <img src="/andreas-klaus-800.webp" alt="Andreas Klaus, SAP-Berater aus Nürnberg" width="800" height="1050" fetchPriority="high" />
                </picture>
                <div className="hero-portrait-caption"><span>Direkter Ansprechpartner</span><strong>Andreas Klaus</strong><small>B.Sc. Wirtschaftsinformatik</small></div>
              </div>
              <div className="hero-contact" aria-label="Kontaktdaten">
                <a href="mailto:info@sapberatungandreasklaus.de" data-conversion="hero_email"><span>E-Mail</span><strong>info@sapberatungandreasklaus.de</strong><i aria-hidden="true">↗</i></a>
                <a href="tel:+4915235804909" data-conversion="hero_phone"><span>Telefon</span><strong>+49 152 35804909</strong><i aria-hidden="true">↗</i></a>
                <a href="https://www.linkedin.com/in/andreas-klaus-684b2220/" target="_blank" rel="noreferrer" data-conversion="hero_linkedin"><span>LinkedIn</span><strong>Profil ansehen</strong><i aria-hidden="true">↗</i></a>
              </div>
            </aside>

            <div className="hero-copy">
              <h1>SAP-Lösungen, die vom Konzept bis zum <em>stabilen Betrieb</em> funktionieren.</h1>
              <p className="hero-lead">
                Direkte technische Unterstützung für ABAP, Fiori, S/4HANA, Schnittstellen und Berechtigungen – persönlich umgesetzt von Andreas Klaus mit SAP-Projekterfahrung seit 2010.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#kontakt" data-conversion="hero_primary">
                  SAP-Thema besprechen <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#projekte">Projekterfahrung <span aria-hidden="true">↓</span></a>
              </div>
              <div className="trust-row" aria-label="Erfahrung und Profil">
                <div><strong>15+ Jahre</strong><span>SAP-Berufserfahrung</span></div>
                <div><strong>18 Projekte</strong><span>im aktuellen Lebenslauf</span></div>
                <div><strong>Direkter Kontakt</strong><span>Konzeption und Umsetzung aus einer Hand</span></div>
              </div>
            </div>

          </div>
        </section>

        <section className="proof-strip" aria-label="SAP-Schwerpunkte">
          <span>SAP S/4HANA</span><span>ABAP / ABAP OO</span><span>SAP Fiori</span><span>REST · SOAP · RFC · IDoc</span><span>Berechtigungen</span><span>SAP Personalvermittlung</span>
        </section>

        <section className="section services" id="leistungen">
          <div className="section-intro">
            <div><p className="eyebrow"><span></span>Leistungen</p><h2>Technische Tiefe trifft <em>pragmatische Umsetzung.</em></h2></div>
            <p>Unterstützung dort, wo SAP-Projekte konkrete Ergebnisse brauchen: in der Architektur, Entwicklung, Integration, Absicherung und Übergabe.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="card-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul aria-label={`Schwerpunkte ${service.title}`}>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <Link className="service-link" href={service.href}>Leistung im Detail <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section expertise" id="kompetenzen">
          <div className="expertise-head">
            <p className="eyebrow eyebrow-light"><span></span>Kompetenzen aus dem Profil</p>
            <h2>Breit im SAP-Kontext.<br/><em>Tief in der Technik.</em></h2>
            <p>Die Kombination aus Entwicklung, Schnittstellenwissen, Prozessverständnis und Projekterfahrung verkürzt Abstimmungen und macht Lösungen belastbarer.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map((group, index) => (
              <article key={group.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projekte">
          <div className="section-intro project-intro">
            <div><p className="eyebrow"><span></span>Projektliste aus dem Lebenslauf</p><h2>Erfahrung, die sich an <em>konkreten Projekten</em> zeigt.</h2></div>
            <p>Zunächst sehen Sie fünf besonders relevante Projekte. Die vollständige Liste mit 18 Stationen aus dem Lebenslauf bleibt direkt darunter zugänglich.</p>
          </div>
          <div className="project-list featured-projects">
            {featuredProjects.map((project, index) => (
              <article className="project-card" key={`${project.period}-${project.title}`}>
                <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-main">
                  <div className="project-meta"><span>{project.period}</span><span>{project.role}</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-company">{project.company}</p>
                  <p>{project.text}</p>
                  {project.result && <p className="project-result">{project.result}</p>}
                  <ul aria-label={`Technologien ${project.title}`}>{project.tech.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <details className="project-archive">
            <summary><span>Vollständiger Lebenslauf</span>Weitere 13 SAP-Projekte anzeigen <i aria-hidden="true">+</i></summary>
            <div className="project-list">
              {earlierProjects.map((project, index) => (
                <article className="project-card" key={`${project.period}-${project.title}`}>
                  <div className="project-index">{String(index + 6).padStart(2, "0")}</div>
                  <div className="project-main">
                    <div className="project-meta"><span>{project.period}</span><span>{project.role}</span></div>
                    <h3>{project.title}</h3>
                    <p className="project-company">{project.company}</p>
                    <p>{project.text}</p>
                    <ul aria-label={`Technologien ${project.title}`}>{project.tech.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </details>
        </section>

        <section className="section process" id="arbeitsweise">
          <div className="process-copy">
            <p className="eyebrow"><span></span>Zusammenarbeit</p>
            <h2>Klarer Prozess.<br/><em>Kurze Wege.</em></h2>
            <p>Sie sprechen vom ersten Termin bis zur Übergabe direkt mit demjenigen, der die technische Arbeit verantwortet.</p>
            <a className="text-link" href="#kontakt">Erstgespräch vereinbaren <span aria-hidden="true">↘</span></a>
          </div>
          <ol className="process-grid">
            {steps.map((step) => (
              <li className="process-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="section about" id="ueber-mich">
          <div className="about-copy">
            <p className="eyebrow"><span></span>Über Andreas Klaus</p>
            <h2>Ein Ansprechpartner für <em>Konzeption und Umsetzung.</em></h2>
            <p className="about-lead">Seit 2010 entwickle und begleite ich SAP-Lösungen im Unternehmensumfeld – von der technischen Konzeption bis zur stabilen Übergabe.</p>
            <p>Mein Studium der Wirtschaftsinformatik und die langjährige Arbeit im SAP Competence Center verbinden betriebswirtschaftliches Verständnis mit technischer Tiefe. Ich übernehme Verantwortung, strukturiere komplexe Situationen und bringe Themen eigenständig voran.</p>
            <div className="bio-facts">
              <div><span>Studium</span><strong>B.Sc. Wirtschaftsinformatik</strong></div>
              <div><span>Standort</span><strong>Nürnberg · deutschlandweit remote</strong></div>
              <div><span>Sprachen</span><strong>Deutsch · Englisch</strong></div>
              <div><span>Arbeitsweise</span><strong>Direkt · strukturiert · lösungsorientiert</strong></div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="faq-head"><p className="eyebrow"><span></span>Häufige Fragen</p><h2>Vor dem ersten <em>Gespräch.</em></h2></div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i aria-hidden="true">+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light"><span></span>Kontakt</p>
            <h2>Welches SAP-Thema soll <em>vorankommen?</em></h2>
            <p>Beschreiben Sie kurz System, Aufgabe und gewünschtes Ergebnis. Ich melde mich persönlich und zeitnah mit einer ersten Einordnung.</p>
            <div className="contact-actions">
              <a href="mailto:info@sapberatungandreasklaus.de?subject=SAP-Projektanfrage" data-conversion="contact_email"><span>E-Mail schreiben</span><strong>info@sapberatungandreasklaus.de</strong><i aria-hidden="true">↗</i></a>
              <a href="tel:+4915235804909" data-conversion="contact_phone"><span>Direkt anrufen</span><strong>+49 152 35804909</strong><i aria-hidden="true">↗</i></a>
              <a href="https://www.linkedin.com/in/andreas-klaus-684b2220/" target="_blank" rel="noreferrer" data-conversion="contact_linkedin"><span>Auf LinkedIn vernetzen</span><strong>Andreas Klaus</strong><i aria-hidden="true">↗</i></a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark" aria-hidden="true">AK</span><p><strong>SAP Beratung Andreas Klaus</strong><br/>Technische SAP-Beratung · Nürnberg & Remote</p></div>
        <div className="footer-links"><a href="#start">Nach oben</a><Link href="/impressum/">Impressum</Link><Link href="/datenschutz/">Datenschutz</Link></div>
        <p className="copyright">© {new Date().getFullYear()} Andreas Klaus</p>
      </footer>
    </>
  );
}
