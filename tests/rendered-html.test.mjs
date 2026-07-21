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
  assert.match(html, /andreas-klaus\.png/);
  assert.match(html, /Andreas Klaus, SAP-Berater aus Nürnberg/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("exports legal pages and social preview", async () => {
  await Promise.all([
    access(new URL("out/impressum/index.html", root)),
    access(new URL("out/datenschutz/index.html", root)),
    access(new URL("out/og.png", root)),
  ]);
});
