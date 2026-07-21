export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  benefits: string[];
  deliverables: string[];
  technologies: string[];
  projectExamples: { title: string; text: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "abap-entwicklung",
    title: "SAP ABAP- und Fiori-Entwicklung",
    shortTitle: "ABAP & Fiori",
    description:
      "Wartbare SAP-Entwicklung mit ABAP, ABAP Objects und Fiori – von der technischen Konzeption bis zur stabilen Übergabe.",
    eyebrow: "Entwicklung",
    intro:
      "Ich entwickle und modernisiere individuelle SAP-Lösungen mit klarem Blick auf Geschäftsprozess, Wartbarkeit und sicheren Betrieb. Bestehender Code wird strukturiert analysiert, neue Komponenten werden nachvollziehbar aufgebaut und sauber dokumentiert.",
    benefits: [
      "Direkter Austausch mit dem Entwickler statt langer Übergabeketten",
      "Technische Lösungen, die zum Prozess und zur vorhandenen Systemlandschaft passen",
      "Nachvollziehbare Tests, Dokumentation und Wissenstransfer",
    ],
    deliverables: [
      "ABAP- und ABAP-OO-Entwicklung",
      "Reports, Dialogprogramme und Erweiterungen",
      "Fiori-Anwendungen und technische Services",
      "SAPscript, Smart Forms und Adobe Forms",
      "Code Reviews, Fehleranalyse und Modernisierung",
      "Testkonzeption und technische Dokumentation",
    ],
    technologies: ["ABAP", "ABAP OO", "Fiori", "BAdI", "BAPI", "Adobe Forms", "ATC"],
    projectExamples: [
      {
        title: "SAP Ariba Proof of Concept",
        text: "ABAP/OO, Fiori Apps, Berechtigungen, Schnittstellen und Adobe Forms als technische Grundlage für die Architekturentscheidung.",
      },
      {
        title: "S/4HANA-Einführung",
        text: "Code Conversion, Fiori Apps, Berechtigungen, Testkonzeption und Stabilisierung in einer gewachsenen SAP-Landschaft.",
      },
    ],
  },
  {
    slug: "sap-schnittstellen",
    title: "SAP-Schnittstellen und Integration",
    shortTitle: "Schnittstellen",
    description:
      "Robuste SAP-Schnittstellen mit REST, SOAP, RFC und IDoc – inklusive Architektur, Berechtigungen, Tests und Fehleranalyse.",
    eyebrow: "Integration",
    intro:
      "Schnittstellen müssen nicht nur Daten übertragen, sondern auch unter realen Betriebsbedingungen beherrschbar bleiben. Deshalb verbinde ich Entwicklung, Berechtigungen, Netzwerkkommunikation, Protokollierung und Test von Anfang an.",
    benefits: [
      "Klare Verantwortlichkeiten und nachvollziehbare Schnittstellenarchitektur",
      "Fehlerbilder werden über Systemgrenzen hinweg analysiert",
      "Betriebs- und Sicherheitsanforderungen fließen früh in die Umsetzung ein",
    ],
    deliverables: [
      "REST- und SOAP-Webservices",
      "RFC-, BAPI-, ALE- und IDoc-Anbindungen",
      "SFTP-, FTPS- und Flatfile-Integration",
      "Berechtigungs- und Netzwerkdesign",
      "Monitoring, Testkonzeption und Fehleranalyse",
      "Technische Schnittstellendokumentation",
    ],
    technologies: ["REST", "SOAP", "RFC", "BAPI", "IDoc", "SFTP", "SAP Integration Suite"],
    projectExamples: [
      {
        title: "Schnittstelle für Wertpapierdaten",
        text: "Konzeption der Architektur, ABAP/OO-Entwicklung, RFC-Anbindung sowie Berechtigungs-, Netzwerk- und Testdesign.",
      },
      {
        title: "Icertis-Vertragsmanagement",
        text: "IDoc-to-REST-Integration, Erweiterung von ORDERS und CREMAS sowie technische Security-Analyse.",
      },
    ],
  },
  {
    slug: "s4hana-beratung",
    title: "Technische SAP S/4HANA-Beratung",
    shortTitle: "S/4HANA",
    description:
      "Technische Begleitung von S/4HANA-Voruntersuchung, Readiness Check und Code Conversion bis zur Einführung und Stabilisierung.",
    eyebrow: "Transformation",
    intro:
      "Eine S/4HANA-Transformation braucht belastbare technische Entscheidungsgrundlagen und eine strukturierte Umsetzung. Ich unterstütze von der Voruntersuchung über Code- und Systemanalysen bis zur Einführung, Absicherung und Wissensübergabe.",
    benefits: [
      "Technische Risiken und Abhängigkeiten werden früh sichtbar",
      "Analysen werden in umsetzbare Arbeitspakete übersetzt",
      "Entwicklung, Berechtigungen, Fiori und Tests werden gemeinsam betrachtet",
    ],
    deliverables: [
      "S/4HANA Readiness Check und Voruntersuchung",
      "ATC-Prüfung und Code Conversion",
      "Bewertung von On-Premise- und Cloud-Szenarien",
      "Technische Migrations- und Testplanung",
      "Fiori- und Berechtigungsthemen",
      "Einführungsbegleitung und Stabilisierung",
    ],
    technologies: ["S/4HANA", "ATC", "Fiori", "SAP Activate", "Maintenance Planner", "SAP ERP"],
    projectExamples: [
      {
        title: "Einführung SAP S/4HANA",
        text: "ABAP/OO, Code Conversion, Berechtigungen, Fiori Apps, Train-the-Trainer und technische Stabilisierung.",
      },
      {
        title: "Voruntersuchung S/4HANA-Migration",
        text: "Business-Case-Unterstützung, ATC Code Check, Maintenance Planner und S/4HANA Readiness Check.",
      },
    ],
  },
  {
    slug: "sap-berechtigungen",
    title: "SAP-Berechtigungen und Compliance",
    shortTitle: "Berechtigungen",
    description:
      "Prüfbare und alltagstaugliche SAP-Berechtigungskonzepte, Benutzeradministration und technische Umsetzung.",
    eyebrow: "Security",
    intro:
      "Berechtigungen müssen Sicherheit, Prüfbarkeit und praktikable Arbeitsabläufe zusammenbringen. Ich unterstütze bei Konzeption, technischer Umsetzung, Benutzeradministration, Tests und verständlicher Übergabe an den Betrieb.",
    benefits: [
      "Sicherheitsanforderungen werden mit den realen Prozessen abgeglichen",
      "Konzeption und technische Umsetzung bleiben in einer Hand",
      "Tests und Dokumentation schaffen eine belastbare Prüfgrundlage",
    ],
    deliverables: [
      "Rollen- und Berechtigungskonzepte",
      "Benutzeradministration und zentrale Benutzerverwaltung",
      "Berechtigungsentwicklung und Fehleranalyse",
      "Testfälle und technische Dokumentation",
      "Schulungen und Wissenstransfer",
      "Unterstützung bei Compliance-Anforderungen",
    ],
    technologies: ["SAP Berechtigungen", "CUA", "XAMS", "Fiori", "ABAP OO", "Compliance"],
    projectExamples: [
      {
        title: "SAP-Berechtigungen im ÖPNV",
        text: "Konzeption und Entwicklung von Berechtigungen, Benutzeradministration, Trainings, Tests und Fehlerbehebung.",
      },
      {
        title: "Zentrale Benutzerverwaltung",
        text: "Konzeption und Customizing der CUA, Systemanbindung, ABAP-Reports und Training der Administration.",
      },
    ],
  },
  {
    slug: "technische-sap-beratung",
    title: "Technische SAP-Beratung und Projektstabilisierung",
    shortTitle: "Technische Beratung",
    description:
      "Technische SAP-Beratung für klar abgegrenzte Aufgaben, Projektleitung, Reviews, Fehleranalyse und kritische Betriebsphasen.",
    eyebrow: "Beratung",
    intro:
      "Wenn ein SAP-Thema Struktur, technische Tiefe und eigenständige Umsetzung braucht, übernehme ich klar abgegrenzte Aufgaben oder technische Verantwortung im Projekt. Ziel sind transparente Entscheidungen und Lösungen, die sicher in den Betrieb kommen.",
    benefits: [
      "Kurze Abstimmungswege mit einem direkten Ansprechpartner",
      "Pragmatische Entscheidungen auf Basis des vorhandenen Systemkontexts",
      "Verantwortung von der Analyse bis zur stabilen Übergabe",
    ],
    deliverables: [
      "Technische Analyse und Lösungskonzeption",
      "Proofs of Concept und Reviews",
      "Technische Projekt- und Teilprojektleitung",
      "Testplanung und Fehleranalyse",
      "Lizenz- und Nutzungsszenarien",
      "Stabilisierung und Wissenstransfer",
    ],
    technologies: ["SAP ERP", "S/4HANA", "Jira", "SAP Activate", "ITIL", "Scrum"],
    projectExamples: [
      {
        title: "SAP-Lizenzoptimierung",
        text: "Einführung von SNOW, Analyse der Lizenzzuordnung sowie Szenarien für Digital Access und S/4-Conversion.",
      },
      {
        title: "ERP- und SRM-Upgrade",
        text: "Projektsteuerung, ABAP-Fehlerbereinigung, Testkoordination und Transportmanagement.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
