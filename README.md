# SAP Beratung Andreas Klaus

Neue, responsive Unternehmenswebsite für [sapberatungandreasklaus.de](https://www.sapberatungandreasklaus.de).

## Inhalt

- klare Positionierung und Leistungsdarstellung
- responsive Startseite für Desktop und Mobilgeräte
- Kontaktmöglichkeiten per E-Mail und Telefon
- Impressum und Datenschutzhinweise
- technische SEO- und Social-Preview-Metadaten
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

Impressum und Datenschutzhinweise basieren auf den vorhandenen Unternehmensangaben und dem aktuellen technischen Aufbau ohne eigenes Tracking. Vor dem endgültigen Wechsel der Unternehmensdomain sollten die Rechtstexte fachlich geprüft werden.
