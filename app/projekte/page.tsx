import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, projects } from "../data/projects";

export const metadata: Metadata = {
  title: "SAP-Projekte & Fallstudien | Andreas Klaus",
  description: "18 SAP-Projekte seit 2010: ABAP, Fiori, S/4HANA, Schnittstellen, Berechtigungen, mobile Logistik und technische Projektleitung.",
  alternates: { canonical: "/projekte/" },
};

export default function ProjectsPage() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/#start" aria-label="SAP Beratung Andreas Klaus – Startseite">
          <span className="brand-mark" aria-hidden="true">AK</span>
          <span className="brand-copy"><strong>SAP Beratung</strong><span>Andreas Klaus</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation">
          <Link href="/#leistungen">Leistungen</Link>
          <Link href="/leistungen/sap-personalvermittlung/">Personalvermittlung</Link>
          <Link className="nav-cta" href="/#kontakt">Kontakt</Link>
        </nav>
        <Link className="service-mobile-home" href="/">Startseite</Link>
      </header>

      <main className="projects-page">
        <section className="project-page-hero">
          <p className="eyebrow"><span></span>Projektprofil</p>
          <h1>18 SAP-Projekte.<br /><em>Erfahrung seit 2010.</em></h1>
          <p>Von ABAP-Entwicklung und Schnittstellen über S/4HANA und Berechtigungen bis zur technischen Projektleitung. Die Liste basiert auf dem aktuellen Lebenslauf.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/Projektprofil-Andreas-Klaus.pdf" download data-conversion="project_profile_download">
              Projektprofil als PDF <span aria-hidden="true">↓</span>
            </a>
            <Link className="text-link" href="/#kontakt" data-conversion="projects_contact">Projekt anfragen <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section case-overview">
          <div className="section-intro">
            <div><p className="eyebrow"><span></span>Ausgewählte Fallstudien</p><h2>Drei Projekte.<br /><em>Konkret eingeordnet.</em></h2></div>
            <p>Aufgabe, technischer Beitrag, Vorgehen und Ergebnis – ohne erfundene Kennzahlen, sondern entlang der tatsächlichen Projektarbeit.</p>
          </div>
          <div className="case-card-grid">
            {caseStudies.map((study) => {
              const project = projects[study.projectIndex];
              return (
                <article className="case-card" key={study.slug}>
                  <span>{project.period}</span>
                  <h3>{project.title}</h3>
                  <p>{project.company}</p>
                  <ul>{project.tech.map((item) => <li key={item}>{item}</li>)}</ul>
                  <Link href={`/projekte/${study.slug}/`} data-conversion={`case_${study.slug}`}>
                    Fallstudie lesen <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section all-projects">
          <div className="section-intro">
            <div><p className="eyebrow"><span></span>Vollständige Projektliste</p><h2>Technische Breite.<br /><em>Langjährige Kontinuität.</em></h2></div>
            <p>Alle 18 Stationen mit Rolle, Aufgaben und eingesetzten Technologien.</p>
          </div>
          <div className="project-list project-list-full">
            {projects.map((project) => (
              <article className="project-card" key={`${project.period}-${project.title}`}>
                <div className="project-meta"><span>{project.period}</span><span>{project.role}</span></div>
                <h3>{project.title}</h3>
                <p className="project-company">{project.company}</p>
                <p>{project.text}</p>
                {project.result && <p className="project-result"><strong>Ergebnis:</strong> {project.result}</p>}
                <ul>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="service-cta">
          <p className="eyebrow eyebrow-light"><span></span>Direkter Austausch</p>
          <h2>Welche Erfahrung passt zu Ihrem SAP-Thema?</h2>
          <p>Schildern Sie kurz Systemkontext, Aufgabe und gewünschtes Ergebnis. Andreas Klaus meldet sich persönlich.</p>
          <Link className="button button-light" href="/#kontakt" data-conversion="projects_footer_contact">Unverbindlich anfragen <span aria-hidden="true">↗</span></Link>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark" aria-hidden="true">AK</span><p><strong>SAP Beratung Andreas Klaus</strong><br />Technische SAP-Beratung · Nürnberg & Remote</p></div>
        <div className="footer-links"><Link href="/">Startseite</Link><Link href="/impressum/">Impressum</Link><Link href="/datenschutz/">Datenschutz</Link></div>
        <p className="copyright">© {new Date().getFullYear()} Andreas Klaus</p>
      </footer>
    </>
  );
}
