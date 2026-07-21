import Link from "next/link";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Analyse & Konzeption",
    text: "Komplexe Ausgangslagen strukturiert bewerten, Anforderungen verständlich machen und tragfähige Lösungswege entwickeln.",
    tags: ["Prozessanalyse", "Lösungsdesign", "Technische Konzepte"],
  },
  {
    number: "02",
    title: "Entwicklung & Integration",
    text: "SAP-Lösungen und Schnittstellen sauber umsetzen – wartbar, nachvollziehbar und passend zur bestehenden Systemlandschaft.",
    tags: ["SAP-Entwicklung", "Schnittstellen", "Dokumentation"],
  },
  {
    number: "03",
    title: "Stabilisierung & Unterstützung",
    text: "Kritische Themen fokussiert bearbeiten, Ursachen eingrenzen und Projekte mit eigenständiger Umsetzungskraft verstärken.",
    tags: ["Fehleranalyse", "Optimierung", "Projektunterstützung"],
  },
];

const situations = [
  "Ein geschäftskritischer SAP-Prozess ist instabil oder schwer wartbar.",
  "Eine Erweiterung oder Schnittstelle braucht ein belastbares technisches Konzept.",
  "Fachbereich und IT benötigen eine gemeinsame, verständliche Lösung.",
  "Ein Projekt braucht kurzfristig erfahrene und eigenständig arbeitende Unterstützung.",
];

const steps = [
  {
    number: "01",
    title: "Klären",
    text: "Wir ordnen Ziel, Systemkontext und den eigentlichen Engpass in einem ersten Gespräch ein.",
  },
  {
    number: "02",
    title: "Planen",
    text: "Vorgehen, Abgrenzung, Risiken und gewünschtes Ergebnis werden transparent festgelegt.",
  },
  {
    number: "03",
    title: "Umsetzen",
    text: "Die Lösung wird pragmatisch realisiert, nachvollziehbar dokumentiert und sauber übergeben.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="SAP Beratung Andreas Klaus – Startseite">
          <span className="brand-mark" aria-hidden="true">AK</span>
          <span className="brand-copy">
            <strong>SAP Beratung</strong>
            <span>Andreas Klaus</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#arbeitsweise">Arbeitsweise</a>
          <a href="#ueber-mich">Über mich</a>
          <a className="nav-cta" href="#kontakt">Erstgespräch</a>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Navigation öffnen"><span></span><span></span></summary>
          <nav aria-label="Mobile Navigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#arbeitsweise">Arbeitsweise</a>
            <a href="#ueber-mich">Über mich</a>
            <a href="#kontakt">Erstgespräch</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="start">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span></span>SAP Beratung · Nürnberg & Remote</p>
              <h1>SAP-Beratung, die im <em>Tagesgeschäft</em> funktioniert.</h1>
              <p className="hero-lead">
                Ich unterstütze Unternehmen bei der Analyse, Umsetzung und Stabilisierung anspruchsvoller SAP-Lösungen – persönlich, pragmatisch und mit über 15 Jahren Berufserfahrung.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="mailto:info@sapberatungandreasklaus.de?subject=Anfrage%20für%20ein%20SAP-Erstgespräch">
                  Erstgespräch anfragen <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#leistungen">Leistungen ansehen <span aria-hidden="true">↓</span></a>
              </div>
              <div className="trust-row" aria-label="Erfahrung und Arbeitsweise">
                <div><strong>15+</strong><span>Jahre Erfahrung</span></div>
                <div><strong>Direkt</strong><span>Persönlicher Ansprechpartner</span></div>
                <div><strong>Pragmatisch</strong><span>Von Analyse bis Umsetzung</span></div>
              </div>
            </div>

            <div className="system-visual" aria-label="Darstellung eines strukturierten SAP-Lösungsprozesses">
              <div className="visual-orbit orbit-one"></div>
              <div className="visual-orbit orbit-two"></div>
              <div className="visual-label visual-label-top">Klarer Systemkontext</div>
              <div className="visual-core">
                <span className="core-kicker">SAP</span>
                <strong>Analyse<br/>→ Lösung</strong>
                <span className="core-status"><i></i> Strukturiert umsetzen</span>
              </div>
              <div className="visual-node node-one"><span>01</span> Prozesse</div>
              <div className="visual-node node-two"><span>02</span> Systeme</div>
              <div className="visual-node node-three"><span>03</span> Menschen</div>
              <div className="visual-caption"><span>AK</span> Technische Klarheit.<br/>Verlässliche Umsetzung.</div>
            </div>
          </div>
        </section>

        <section className="section services" id="leistungen">
          <div className="section-heading">
            <p className="eyebrow"><span></span>Leistungen</p>
            <h2>Vom komplexen Thema zur <em>tragfähigen Lösung.</em></h2>
            <p>Keine Standardpakete, sondern fokussierte Unterstützung entlang Ihrer konkreten SAP-Aufgabe.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="card-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul aria-label={`Schwerpunkte ${service.title}`}>
                  {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section situations">
          <div className="situations-copy">
            <p className="eyebrow eyebrow-light"><span></span>Typische Projektsituationen</p>
            <h2>Wenn aus Komplexität wieder <em>Handlungsfähigkeit</em> werden soll.</h2>
            <p>Gute SAP-Beratung beginnt nicht mit einer Technologie, sondern mit einem klaren Verständnis für das Problem und sein Umfeld.</p>
          </div>
          <ol className="situation-list">
            {situations.map((situation, index) => (
              <li key={situation}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{situation}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section process" id="arbeitsweise">
          <div className="section-heading compact">
            <p className="eyebrow"><span></span>Arbeitsweise</p>
            <h2>Klar in der Abstimmung.<br/><em>Verlässlich in der Umsetzung.</em></h2>
          </div>
          <div className="process-grid">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="ueber-mich">
          <div className="about-signature">
            <div className="portrait-frame">
              <Image
                className="portrait-image"
                src="/andreas-klaus.png"
                alt="Andreas Klaus, SAP-Berater aus Nürnberg"
                fill
                sizes="(max-width: 950px) 360px, 420px"
              />
              <span className="portrait-accent">Andreas Klaus</span>
            </div>
            <p>Persönlich verantwortlich.<br/>Technisch auf Augenhöhe.</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span></span>Über mich</p>
            <h2>Erfahrung zeigt sich darin, <em>Komplexität verständlich</em> zu machen.</h2>
            <p className="about-lead">Ich bin Andreas Klaus, SAP-Berater aus Nürnberg. Seit über 15 Jahren arbeite ich an der Schnittstelle von fachlichen Anforderungen, technischen Systemen und verlässlicher Umsetzung.</p>
            <p>Meine Arbeitsweise ist direkt und lösungsorientiert: genau zuhören, Zusammenhänge sauber strukturieren und das Vereinbarte eigenständig voranbringen. Dabei bleiben Entscheidungen, Risiken und Ergebnisse für alle Beteiligten nachvollziehbar.</p>
            <div className="about-principles">
              <span>Struktur vor Aktionismus</span>
              <span>Verständlichkeit vor Buzzwords</span>
              <span>Verantwortung statt Übergaben</span>
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light"><span></span>Kontakt</p>
            <h2>Lassen Sie uns Ihr SAP-Thema <em>strukturiert angehen.</em></h2>
            <p>In einem kurzen Erstgespräch klären wir Ausgangslage, Ziel und ob ich der passende Ansprechpartner bin.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-primary" href="mailto:info@sapberatungandreasklaus.de?subject=Anfrage%20für%20ein%20SAP-Erstgespräch">
              <span>E-Mail schreiben</span>
              <strong>info@sapberatungandreasklaus.de</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a className="contact-secondary" href="tel:+4915235804909">
              <span>Direkt anrufen</span>
              <strong>+49 152 35804909</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">AK</span>
          <p><strong>SAP Beratung Andreas Klaus</strong><br/>Nürnberg · Deutschland</p>
        </div>
        <div className="footer-links">
          <Link href="/impressum/">Impressum</Link>
          <Link href="/datenschutz/">Datenschutz</Link>
          <a href="https://www.linkedin.com/in/andreas-klaus-684b2220/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Andreas Klaus</p>
      </footer>
    </>
  );
}
