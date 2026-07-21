import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  assert.match(html, /Zentrale Benutzerverwaltung/);
  assert.match(html, /18 Projekte/);
  assert.match(html, /info@sapberatungandreasklaus\.de/);
  assert.match(html, /andreas-klaus-800\.webp/);
  assert.match(html, /andreas-klaus-480\.avif/);
  assert.match(html, /Andreas Klaus, SAP-Berater aus Nürnberg/);
  assert.match(html, /Anfrage als E-Mail vorbereiten/);
  assert.match(html, /Weitere 13 SAP-Projekte anzeigen/);
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
});
