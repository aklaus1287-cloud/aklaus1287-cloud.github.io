# SAP Beratung Andreas Klaus

Neue, responsive Unternehmenswebsite für [sapberatungandreasklaus.de](https://www.sapberatungandreasklaus.de).

## Inhalt

- klare Positionierung und Leistungsdarstellung
- responsive Startseite für Desktop und Mobilgeräte
- datensparsames Anfrageformular sowie Kontakt per E-Mail, Telefon und LinkedIn
- fünf eigenständige Leistungsseiten für relevante SAP-Suchanfragen
- fokussierte Referenzauswahl plus vollständige Projektliste aus dem Lebenslauf
- Impressum und Datenschutzhinweise
- Sitemap, robots.txt, strukturierte Daten, Alt-URL-Weiterleitungen und Social Preview
- responsive Portraitbilder in AVIF und WebP
- automatisches Deployment über GitHub Pages

## Lokale Entwicklung

Voraussetzung: Node.js 22 oder neuer.

```bash
npm ci
npm run dev
```

Die Website ist anschließend unter `http://localhost:3000` erreichbar.

## Qualitätssicherung

```bash
npm run build
npm run lint
node --test tests/rendered-html.test.mjs
```

## Veröffentlichung

Jeder Push auf `main` erstellt die statische Website und veröffentlicht sie automatisch über GitHub Pages. Der Workflow liegt unter `.github/workflows/deploy-pages.yml`.

## Rechtlicher Hinweis

Impressum und Datenschutzhinweise basieren auf den vorhandenen Unternehmensangaben und dem aktuellen technischen Aufbau ohne eigenes Tracking. Rechtstexte sollten bei Änderungen an Unternehmen, Website oder eingesetzten Diensten fachlich geprüft werden.
