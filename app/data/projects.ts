export type Project = {
  period: string;
  title: string;
  company: string;
  role: string;
  text: string;
  result?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    period: "seit 06/2025",
    title: "Schnittstelle für Wertpapierdaten",
    company: "Thüringer Aufbaubank · Bank- und Finanzwesen",
    role: "Softwareentwicklung",
    text: "Konzeption der Schnittstellenarchitektur, ABAP/OO-Entwicklung, Berechtigungs- und Netzwerkdesign, RFC-Anbindung sowie Test und Fehleranalyse.",
    result: "Abgestimmte Schnittstellenarchitektur, technische Anbindung und durchgängiges Testdesign.",
    tech: ["SAP ECC", "REST", "RFC", "WM Datenservice"],
  },
  {
    period: "06/2024 – 03/2025",
    title: "Proof of Concept SAP Ariba",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Systemarchitektur, ABAP/OO, Fiori Apps, Berechtigungen, RFC/SOAP/REST-Schnittstellen und Adobe Forms im Ariba-Umfeld.",
    result: "Technischer Proof of Concept als belastbare Grundlage für die weitere Architekturentscheidung.",
    tech: ["SAP Ariba", "S/4HANA", "Fiori", "Integration Suite"],
  },
  {
    period: "07/2023 – 05/2024",
    title: "Einführung SAP S/4HANA",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "ABAP/OO-Entwicklung, Code Conversion, Berechtigungen, Fiori Apps, Train-the-Trainer, Testkonzeption und Stabilisierung.",
    result: "Konvertierte Eigenentwicklungen, abgesicherte Fiori- und Berechtigungsthemen sowie Wissenstransfer.",
    tech: ["SAP ERP ECC", "S/4HANA", "Fiori"],
  },
  {
    period: "03/2023 – 09/2023",
    title: "SAP-Berechtigungen",
    company: "Berliner Verkehrsbetriebe · ÖPNV",
    role: "Berechtigungsentwicklung",
    text: "Konzeption und Entwicklung von Berechtigungen, Benutzeradministration, Trainings, ABAP/OO sowie Test und Fehlerbehebung.",
    result: "Umgesetzte Berechtigungen, nachvollziehbare Tests und befähigte Administration.",
    tech: ["SAP ERP ECC", "PTNova", "ABAP OO"],
  },
  {
    period: "01/2023 – 03/2023",
    title: "SAP-Lizenzoptimierung",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Administration",
    text: "Einführung von SNOW, Optimierung der Lizenzzuordnungen, Vertragsanalyse und Szenarien für Digital Access sowie S/4-Conversion.",
    result: "Transparente Lizenzzuordnung und strukturierte Entscheidungsgrundlagen für Optimierungsszenarien.",
    tech: ["SNOW", "S/4HANA", "SAP ERP ECC"],
  },
  {
    period: "08/2022 – 02/2023",
    title: "Voruntersuchung S/4HANA-Migration",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "Business Case On-Premise vs. RISE, ATC Code Check, Maintenance Planner und S/4HANA Readiness Check.",
    tech: ["S/4HANA", "ATC", "FI", "MM / WM / PM"],
  },
  {
    period: "06/2021 – 12/2021",
    title: "Mobile Lagerlogistik in der Instandhaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "iPad-Anbindung, mobile Oberflächen und Geschäftslogik für Lagerbewegungen und Inventur mit Mobisys und ABAP.",
    tech: ["Mobisys MSD/MSB", "WM", "MM", "iOS"],
  },
  {
    period: "06/2020 – 05/2021",
    title: "Icertis-Vertragsmanagement",
    company: "DATEV eG · Informationstechnologie",
    role: "Technische Teilprojektleitung",
    text: "IDoc-to-REST-Integration, ORDERS- und CREMAS-Erweiterungen, LDAP-Anbindung und technische Security-Analyse.",
    tech: ["SAP ERP ECC", "IDoc", "REST", "LDAP"],
  },
  {
    period: "01/2019 – 04/2020",
    title: "Mobile Logistik im Zentrallager",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "Anbindung von iPhones an SAP sowie Entwicklung mobiler Oberflächen und Geschäftslogik in Mobisys und ABAP.",
    tech: ["SAP ERP ECC", "Mobisys", "WM", "iOS"],
  },
  {
    period: "06/2018 – 12/2018",
    title: "ERP- und SRM-EHP-Upgrade",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "Upgrade, ABAP-Fehlerbereinigung, SPAU/SPAM-Nacharbeiten, Testkoordination und Transportmanagement.",
    tech: ["SAP ERP 6.0", "SRM 7.0", "SPAU / SPAM", "ABAP OO"],
  },
  {
    period: "01/2017 – 11/2017",
    title: "EAI mit Lobster Data",
    company: "DATEV eG · Informationstechnologie",
    role: "Projektleitung & Entwicklung",
    text: "RFC- und IDoc-Anbindung, BAPI-Anpassungen, Migration von Seeburger-Profilen und IT-Security-Analyse.",
    tech: ["Lobster Data", "RFC", "IDoc", "ABAP OO"],
  },
  {
    period: "04/2016 – 12/2016",
    title: "Mobile Prozesse Instandhaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Mobile Prozesse für Entstörung, Wartung, Schichtbuch und Ersatzteilentnahme inklusive PM-Customizing.",
    tech: ["SAP PM", "MM", "Mobisys", "ABAP OO"],
  },
  {
    period: "07/2015 – 03/2016",
    title: "SAP Treasury Management",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "ABAP-Reports, BAPI/BAdI-Programmierung, automatische Sachkontenfindung, Flatfile-Schnittstellen und TRM-Customizing.",
    tech: ["SAP TRM", "FI", "BAPI / BAdI", "ABAP OO"],
  },
  {
    period: "11/2014 – 06/2015",
    title: "Mobile Lagerhaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Handscanner-Anbindung, Mobisys-Oberflächen, ABAP-Geschäftslogik, WM-Customizing und Jobsteuerung.",
    tech: ["SAP WM", "MM", "Mobisys", "ABAP OO"],
  },
  {
    period: "01/2013 – 10/2013",
    title: "Eigenentwicklung Reisekostenabrechnung",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Datenmodell, Rechnungseingang per Flatfile, Abrechnungsverbuchung in ABAP OO und Stammdatenmigration mit LSMW.",
    tech: ["SAP FI", "LSMW", "Flatfile", "ABAP OO"],
  },
  {
    period: "01/2012 – 11/2012",
    title: "SAP R/3 EHP-Upgrade",
    company: "DATEV eG · Informationstechnologie",
    role: "Softwareentwicklung",
    text: "Upgrade, Fehlerbereinigung im Kundennamensraum, SPAU/SPAM-Nacharbeiten und Transportmanagement.",
    tech: ["SAP ERP", "FI / MM / WM / PM", "SPAU / SPAM", "ABAP OO"],
  },
  {
    period: "04/2011 – 09/2011",
    title: "Upgrade Kreditorenbuchhaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Technisches SAP Consulting",
    text: "Upgrade von AFI DirectInvoiceControl, Rechnungsprüfungslogik, SAPscript und Genehmigungsworkflow.",
    tech: ["SAP FI-AP", "AFI DIC", "SAPscript", "Workflow"],
  },
  {
    period: "10/2010 – 03/2011",
    title: "Zentrale Benutzerverwaltung",
    company: "DATEV eG · Informationstechnologie",
    role: "Technisches SAP Consulting",
    text: "Konzeption und Customizing der CUA, ABAP-Reports, Systemanbindung und Training der Benutzeradministration.",
    tech: ["SAP ERP", "SAP SRM", "Solution Manager", "CUA"],
  },
];

export type CaseStudy = {
  slug: string;
  projectIndex: number;
  challenge: string;
  contribution: string[];
  approach: string[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "wertpapierdaten-schnittstelle",
    projectIndex: 0,
    challenge: "Wertpapierdaten sollten zuverlässig aus einer externen Quelle in die bestehende SAP-ECC-Landschaft integriert werden. Architektur, Berechtigungen, Netzwerkkommunikation und Testbarkeit mussten zusammen gedacht werden.",
    contribution: [
      "Konzeption der Schnittstellenarchitektur",
      "ABAP-OO-Entwicklung und RFC-Anbindung",
      "Berechtigungs- und Netzwerkdesign",
      "Testkonzeption, Fehleranalyse und Abstimmung",
    ],
    approach: [
      "Systemgrenzen und Datenflüsse transparent abgrenzen",
      "Technische Anbindung und Berechtigungen gemeinsam konzipieren",
      "Fehlerfälle und Tests von Beginn an berücksichtigen",
    ],
    result: "Eine abgestimmte Schnittstellenarchitektur, die technische Anbindung und ein durchgängiges Testdesign bilden die belastbare Grundlage für den produktiven Datenfluss.",
  },
  {
    slug: "sap-ariba-proof-of-concept",
    projectIndex: 1,
    challenge: "Für das Ariba-Umfeld musste geklärt werden, wie Fiori, Berechtigungen, Formulare und mehrere Schnittstellentechnologien in einer tragfähigen Zielarchitektur zusammenspielen.",
    contribution: [
      "Systemarchitektur und technisches Lösungsdesign",
      "ABAP-OO-Entwicklung und Fiori Apps",
      "RFC-, SOAP- und REST-Integration",
      "Berechtigungen und Adobe Forms",
    ],
    approach: [
      "Kritische Integrationspfade im Proof of Concept validieren",
      "Oberfläche, Berechtigungen und Backend gemeinsam betrachten",
      "Ergebnisse für die Architekturentscheidung nachvollziehbar dokumentieren",
    ],
    result: "Der technische Proof of Concept lieferte eine belastbare Grundlage für die weitere Architekturentscheidung.",
  },
  {
    slug: "s4hana-einfuehrung",
    projectIndex: 2,
    challenge: "Bei der S/4HANA-Einführung mussten Eigenentwicklungen konvertiert, Fiori- und Berechtigungsthemen abgesichert und die neue Lösung stabil in die Organisation übergeben werden.",
    contribution: [
      "ABAP-OO-Entwicklung und Code Conversion",
      "Fiori Apps und Berechtigungen",
      "Testkonzeption und Stabilisierung",
      "Train-the-Trainer und Wissenstransfer",
    ],
    approach: [
      "Technische Anpassungen systematisch priorisieren",
      "Funktion, Berechtigung und Test als Einheit behandeln",
      "Wissen frühzeitig an Multiplikatoren übergeben",
    ],
    result: "Konvertierte Eigenentwicklungen, abgesicherte Fiori- und Berechtigungsthemen sowie strukturierter Wissenstransfer unterstützten die Einführung und Stabilisierung.",
  },
];

export function getCaseStudy(slug: string) {
  const study = caseStudies.find((item) => item.slug === slug);
  return study ? { ...study, project: projects[study.projectIndex] } : undefined;
}
