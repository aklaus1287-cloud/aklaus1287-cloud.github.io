import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports the complete consulting website", async () => {
  const html = await readFile(new URL("out/index.html", root), "utf8");

  assert.match(html, /<html[^>]+lang="de-DE"/i);
  assert.match(html, /Technische SAP-Beratung mit/);
  assert.match(html, /ABAP &amp; Fiori Entwicklung/);
  assert.match(html, /SAP-Thema besprechen/);
  assert.match(html, /Projektliste aus dem Lebenslauf/);
  assert.match(html, /Schnittstelle für Wertpapierdaten/);
  assert.match(html, /18 Projekte/);
  assert.match(html, /info@sapberatungandreasklaus\.de/);
  assert.match(html, /\+49152 36936743/);
  assert.match(html, /tel:\+4915236936743/);
  assert.doesNotMatch(html, /35804909|3580 4909/);
  assert.match(html, /andreas-klaus-800\.webp/);
  assert.match(html, /andreas-klaus-480\.avif/);
  assert.match(html, /Andreas Klaus, SAP-Berater aus Nürnberg/);
  assert.match(html, /Anfrage sicher senden/);
  assert.match(html, /SAP Personalvermittlung/);
  assert.match(html, /Alle 18 Projekte &amp; Fallstudien/);
  assert.match(html, /SAP-Fachkraft finden/);
  assert.match(html, /Projektprofil-Andreas-Klaus\.pdf/);
  assert.doesNotMatch(html, /Weitere 13 SAP-Projekte anzeigen/);
  assert.doesNotMatch(html, /SAP-Technik für Mittelstand und öffentliche Unternehmen|Freelance|freiberuf/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("exports SEO routes, legal pages, service pages and social preview", async () => {
  await Promise.all([
    access(new URL("out/impressum/index.html", root)),
    access(new URL("out/datenschutz/index.html", root)),
    access(new URL("out/robots.txt", root)),
    access(new URL("out/sitemap.xml", root)),
    access(new URL("out/icon.png", root)),
    access(new URL("out/favicon.ico", root)),
    access(new URL("out/og.png", root)),
    access(new URL("out/leistungen/abap-entwicklung/index.html", root)),
    access(new URL("out/leistungen/sap-schnittstellen/index.html", root)),
    access(new URL("out/leistungen/s4hana-beratung/index.html", root)),
    access(new URL("out/leistungen/sap-berechtigungen/index.html", root)),
    access(new URL("out/leistungen/technische-sap-beratung/index.html", root)),
    access(new URL("out/leistungen/sap-personalvermittlung/index.html", root)),
    access(new URL("out/projekte/index.html", root)),
    access(new URL("out/projekte/wertpapierdaten-schnittstelle/index.html", root)),
    access(new URL("out/projekte/sap-ariba-proof-of-concept/index.html", root)),
    access(new URL("out/projekte/s4hana-einfuehrung/index.html", root)),
    access(new URL("out/danke/index.html", root)),
    access(new URL("out/Projektprofil-Andreas-Klaus.pdf", root)),
    access(new URL("out/willkommen/impressum/index.html", root)),
  ]);
});

test("publishes indexable service copy and legacy canonical redirects", async () => {
  const serviceHtml = await readFile(new URL("out/leistungen/sap-schnittstellen/index.html", root), "utf8");
  const redirectHtml = await readFile(new URL("out/willkommen/impressum/index.html", root), "utf8");
  const sitemap = await readFile(new URL("out/sitemap.xml", root), "utf8");

  assert.match(serviceHtml, /SAP-Schnittstellen und Integration/);
  assert.match(serviceHtml, /application\/ld\+json/);
  assert.match(redirectHtml, /url=\/impressum\//);
  assert.match(redirectHtml, /noindex/);
  assert.match(sitemap, /leistungen\/s4hana-beratung/);
  assert.match(sitemap, /projekte\/wertpapierdaten-schnittstelle/);
});

test("ships consent-first Google Analytics and updated privacy information", async () => {
  const homeHtml = await readFile(new URL("out/index.html", root), "utf8");
  const privacyHtml = await readFile(new URL("out/datenschutz/index.html", root), "utf8");
  const chunkDirectory = new URL("out/_next/static/chunks/", root);
  const chunkNames = (await readdir(chunkDirectory)).filter((name) => name.endsWith(".js"));
  const staticChunks = (await Promise.all(chunkNames.map((name) => readFile(new URL(name, chunkDirectory), "utf8")))).join("\n");

  assert.doesNotMatch(homeHtml, /<script[^>]+googletagmanager\.com\/gtag/i);
  assert.match(privacyHtml, /Google Analytics 4/);
  assert.match(privacyHtml, /Ohne Ihre Zustimmung wird das Google-Analytics-Skript nicht geladen/);
  assert.match(privacyHtml, /Datenschutz-Einstellungen/);
  assert.match(privacyHtml, /Google-Formular/);
  assert.match(staticChunks, /docs\.google\.com\/forms\/u\/0\/d\/e\/1FAIpQLSfVsVbb_Jfld1XVFe43jhpuW_ZUPhfLZRpVqi0gGgpfSBTX7Q\/formResponse/);
  assert.match(staticChunks, /G-S2VRST528R/);
  assert.match(staticChunks, /googletagmanager\.com\/gtag\/js/);
  assert.match(staticChunks, /generate_lead/);
  assert.doesNotMatch(staticChunks, /mailto:info@sapberatungandreasklaus\.de\?subject/);
});

test("anonymizes former customers across the website and project profile source", async () => {
  const files = [
    "out/index.html",
    "out/projekte/index.html",
    "out/projekte/wertpapierdaten-schnittstelle/index.html",
    "out/projekte/sap-ariba-proof-of-concept/index.html",
    "out/projekte/s4hana-einfuehrung/index.html",
    "scripts/generate_project_profile.py",
  ];
  const publishedContent = (
    await Promise.all(files.map((file) => readFile(new URL(file, root), "utf8")))
  ).join("\n");

  assert.doesNotMatch(publishedContent, /(?:eG|GmbH|AG)\s*(?:·|-)\s*Informationstechnologie/i);
  assert.match(publishedContent, /Bank- und Finanzwesen/);
  assert.match(publishedContent, /Informationstechnologie/);
  assert.match(publishedContent, /(?:Ö|Ã–)ffentlicher Nahverkehr/);
});

test("publishes the full project archive and factual case studies", async () => {
  const projectsHtml = await readFile(new URL("out/projekte/index.html", root), "utf8");
  const caseHtml = await readFile(new URL("out/projekte/wertpapierdaten-schnittstelle/index.html", root), "utf8");

  assert.match(projectsHtml, /Zentrale Benutzerverwaltung/);
  assert.match(projectsHtml, /Ausgewählte Fallstudien/);
  assert.match(projectsHtml, /Projektprofil als PDF/);
  assert.match(caseHtml, /Ausgangslage/);
  assert.match(caseHtml, /Technischer Beitrag/);
  assert.match(caseHtml, /durchgängiges Testdesign/);
});
