import Link from "next/link";
import ContactForm from "./components/ContactForm";
import { caseStudies, projects } from "./data/projects";

const services = [
  {
    title: "ABAP- und Fiori-Entwicklung",
    text: "Individuelle Anwendungen, Reports und Formulare für Ihre SAP-Prozesse.",
    href: "/leistungen/abap-entwicklung/",
    conversion: "service_01",
  },
  {
    title: "SAP-Schnittstellen",
    text: "SAP mit Drittsystemen verbinden, etwa über REST, SOAP, RFC oder IDoc.",
    href: "/leistungen/sap-schnittstellen/",
    conversion: "service_02",
  },
  {
    title: "S/4HANA-Umstellung",
    text: "Eigenentwicklungen prüfen, anpassen und die Einführung technisch begleiten.",
    href: "/leistungen/s4hana-beratung/",
    conversion: "service_03",
  },
  {
    title: "SAP-Berechtigungen",
    text: "Berechtigungskonzepte erstellen und Rollen sowie Benutzerverwaltung umsetzen.",
    href: "/leistungen/sap-berechtigungen/",
    conversion: "service_04",
  },
  {
    title: "Technische Projektberatung",
    text: "Projekte stabilisieren, Fehler analysieren und SAP-Lizenzzuordnungen prüfen.",
    href: "/leistungen/technische-sap-beratung/",
    conversion: "service_06",
  },
  {
    title: "SAP-Personalvermittlung",
    text: "SAP-Entwickler und Berater für Festanstellungen und Projekte finden.",
    href: "/leistungen/sap-personalvermittlung/",
    conversion: "service_07",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="SAP Beratung Andreas Klaus – Startseite">
          <span className="brand-mark" aria-hidden="true">AK</span>
          <span className="brand-copy"><strong>SAP Beratung</strong><span>Andreas Klaus</span></span>
        </a>
        <nav className="home-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <Link href="/projekte/">Projekte</Link>
          <a className="nav-cta" href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <main className="home">
        <section className="section home-about" id="start">
          <div>
            <h2 id="ueber-mich">Über mich</h2>
            <p>Ich bin Andreas Klaus, Wirtschaftsinformatiker (B.Sc.) und seit 2010 in SAP-Projekten tätig. Sie stimmen sich direkt mit mir ab, vom ersten Gespräch bis zur Übergabe.</p>
            <p>Ich übernehme auch einzelne Aufgaben wie Code-Reviews und Fehleranalysen. Die Zusammenarbeit ist remote oder nach Absprache vor Ort möglich.</p>
          </div>
          <picture>
            <source type="image/avif" srcSet="/andreas-klaus-480.avif" />
            <img src="/andreas-klaus-480.webp" alt="Andreas Klaus, SAP-Berater aus Nürnberg" width="480" height="630" loading="eager" fetchPriority="high" />
          </picture>
        </section>


        <section className="hero">
          <p className="eyebrow"><span></span>Nürnberg und deutschlandweit remote</p>
          <h1>Technische SAP-Beratung und ABAP-Entwicklung</h1>
          <p className="hero-lead">Ich unterstütze Sie bei ABAP und Fiori, SAP-Schnittstellen und der Umstellung auf S/4HANA – von der Analyse bis zur Umsetzung.</p>
          <a className="button button-primary" href="#kontakt" data-conversion="hero_primary">
            Projekt besprechen <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="section" id="leistungen">
          <h2>Leistungen</h2>
          <ul className="home-link-grid">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} data-conversion={service.conversion}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="section projects" id="projekte">
          <h2>Ausgewählte Projekte</h2>
          <ul className="home-link-grid home-case-studies">
            {caseStudies.map(({ slug, projectIndex }) => {
              const project = projects[projectIndex];
              return (
                <li key={slug}>
                  <Link href={`/projekte/${slug}/`}>
                    <h3>{project.title}</h3>
                    <p>{project.tech.slice(0, 3).join(" · ")}</p>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="project-actions">
            <Link className="text-link" href="/projekte/" data-conversion="home_all_projects">
              {`Alle ${projects.length} Projekte & Fallstudien`} <span aria-hidden="true">→</span>
            </Link>
            <a className="text-link" href="/Projektprofil-Andreas-Klaus.pdf" download data-conversion="home_project_pdf">
              Projektprofil als PDF <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="contact-copy">
            <h2>Kontakt</h2>
            <p>Beschreiben Sie kurz Ihr SAP-System, die Aufgabe und das gewünschte Ergebnis. Ich melde mich persönlich bei Ihnen.</p>
            <div className="contact-actions">
              <a href="mailto:info@sapberatungandreasklaus.de?subject=SAP-Projektanfrage" data-conversion="contact_email"><span>E-Mail</span><strong>info@sapberatungandreasklaus.de</strong><i aria-hidden="true">↗</i></a>
              <a href="tel:+4915679822236" data-conversion="contact_phone"><span>Telefon</span><strong>+49 15679 822236</strong><i aria-hidden="true">↗</i></a>
              <a href="https://www.linkedin.com/in/andreas-klaus-684b2220/" target="_blank" rel="noreferrer" data-conversion="contact_linkedin"><span>LinkedIn</span><strong>Andreas Klaus</strong><i aria-hidden="true">↗</i></a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark" aria-hidden="true">AK</span><p><strong>SAP Beratung Andreas Klaus</strong><br />Technische SAP-Beratung · Nürnberg & Remote</p></div>
        <div className="footer-links"><a href="#start">Nach oben</a><Link href="/impressum/">Impressum</Link><Link href="/datenschutz/">Datenschutz</Link></div>
        <p className="copyright">© {new Date().getFullYear()} Andreas Klaus</p>
      </footer>
    </>
  );
}
