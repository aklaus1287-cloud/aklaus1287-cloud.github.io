import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../../data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.project.title} – SAP-Fallstudie | Andreas Klaus`,
    description: `${study.project.title}: Aufgabe, technischer Beitrag, Vorgehen und Ergebnis im SAP-Projekt.`,
    alternates: { canonical: `/projekte/${slug}/` },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.project.title,
    description: study.challenge,
    author: { "@type": "Person", name: "Andreas Klaus" },
    publisher: { "@type": "Organization", name: "SAP Beratung Andreas Klaus" },
    mainEntityOfPage: `https://www.sapberatungandreasklaus.de/projekte/${slug}/`,
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
          <Link href="/projekte/">Alle Projekte</Link>
          <Link href="/#leistungen">Leistungen</Link>
          <Link className="nav-cta" href="/#kontakt">Kontakt</Link>
        </nav>
        <Link className="service-mobile-home" href="/projekte/">Projekte</Link>
      </header>

      <main className="case-study-page">
        <section className="case-study-hero">
          <p className="eyebrow"><span></span>Fallstudie · {study.project.period}</p>
          <h1>{study.project.title}</h1>
          <p className="case-study-company">{study.project.company}</p>
          <div className="case-study-tags">{study.project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        <section className="case-study-content">
          <article>
            <p className="case-section-number">01</p>
            <h2>Ausgangslage</h2>
            <p>{study.challenge}</p>
          </article>
          <article>
            <p className="case-section-number">02</p>
            <h2>Technischer Beitrag</h2>
            <ul>{study.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="case-section-number">03</p>
            <h2>Vorgehen</h2>
            <ul>{study.approach.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="case-result">
            <p className="case-section-number">04</p>
            <h2>Ergebnis</h2>
            <p>{study.result}</p>
          </article>
        </section>

        <section className="service-cta">
          <p className="eyebrow eyebrow-light"><span></span>Ähnliche Aufgabe?</p>
          <h2>Ihr SAP-Projekt konkret besprechen.</h2>
          <p>Andreas Klaus antwortet persönlich und ordnet ein, wie die passende Unterstützung aussehen kann.</p>
          <Link className="button button-light" href="/#kontakt" data-conversion={`case_contact_${slug}`}>Unverbindlich anfragen <span aria-hidden="true">↗</span></Link>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark" aria-hidden="true">AK</span><p><strong>SAP Beratung Andreas Klaus</strong><br />Technische SAP-Beratung · Nürnberg & Remote</p></div>
        <div className="footer-links"><Link href="/projekte/">Projekte</Link><Link href="/impressum/">Impressum</Link><Link href="/datenschutz/">Datenschutz</Link></div>
        <p className="copyright">© {new Date().getFullYear()} Andreas Klaus</p>
      </footer>
    </>
  );
}
