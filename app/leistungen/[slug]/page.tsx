import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServicePage, servicePages } from "../../data/service-pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Andreas Klaus`,
    description: service.description,
    alternates: { canonical: `/leistungen/${service.slug}/` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/leistungen/${service.slug}/`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: "SAP Beratung Andreas Klaus",
      url: "https://www.sapberatungandreasklaus.de",
    },
    areaServed: ["Deutschland", "Remote"],
    url: `https://www.sapberatungandreasklaus.de/leistungen/${service.slug}/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <Link className="brand" href="/#start" aria-label="SAP Beratung Andreas Klaus – Startseite">
          <span className="brand-mark" aria-hidden="true">AK</span>
          <span className="brand-copy"><strong>SAP Beratung</strong><span>Andreas Klaus</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation">
          <Link href="/#leistungen">Alle Leistungen</Link>
          <Link href="/#projekte">Projekte</Link>
          <Link className="nav-cta" href="/#kontakt">Kontakt</Link>
        </nav>
        <Link className="service-mobile-home" href="/">Startseite</Link>
      </header>

      <main className="service-page">
        <section className="service-hero">
          <div>
            <p className="eyebrow"><span></span>{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#kontakt" data-conversion={`service_${service.slug}`}>
                Projekt besprechen <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/#projekte">Projekte ansehen <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <aside className="service-benefits" aria-label="Vorteile">
            <span>Ihr Nutzen</span>
            <ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          </aside>
        </section>

        <section className="service-detail-grid">
          <div>
            <p className="eyebrow"><span></span>Leistungsumfang</p>
            <h2>Konkrete Unterstützung für Ihr SAP-Thema.</h2>
          </div>
          <ul className="deliverable-list">
            {service.deliverables.map((deliverable, index) => (
              <li key={deliverable}><span>{String(index + 1).padStart(2, "0")}</span>{deliverable}</li>
            ))}
          </ul>
        </section>

        <section className="service-projects">
          <div className="section-intro">
            <div><p className="eyebrow eyebrow-light"><span></span>{service.examplesEyebrow ?? "Passende Projekterfahrung"}</p><h2>{service.examplesTitle ?? "Erprobt in konkreten SAP-Projekten."}</h2></div>
            <p>{service.technologies.join(" · ")}</p>
          </div>
          <div className="service-project-grid">
            {service.projectExamples.map((project) => (
              <article key={project.title}><h3>{project.title}</h3><p>{project.text}</p></article>
            ))}
          </div>
        </section>

        <section className="service-cta">
          <p className="eyebrow eyebrow-light"><span></span>Direkter Austausch</p>
          <h2>Passt die Leistung zu Ihrer Aufgabe?</h2>
          <p>Beschreiben Sie kurz den Systemkontext und das gewünschte Ergebnis. Andreas Klaus meldet sich persönlich bei Ihnen.</p>
          <Link className="button button-light" href="/#kontakt" data-conversion={`service_footer_${service.slug}`}>SAP-Thema anfragen <span aria-hidden="true">↗</span></Link>
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
