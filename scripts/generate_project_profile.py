from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Projektprofil-Andreas-Klaus.pdf"
PUBLIC = ROOT / "public" / "Projektprofil-Andreas-Klaus.pdf"

NAVY = colors.HexColor("#062E3A")
BLUE = colors.HexColor("#087F9A")
AQUA = colors.HexColor("#20BFD0")
PALE = colors.HexColor("#E8FAFC")
TEXT = colors.HexColor("#183F49")
MUTED = colors.HexColor("#5C747A")
LINE = colors.HexColor("#B8E3E8")
WHITE = colors.white

pdfmetrics.registerFont(TTFont("Arial", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", r"C:\Windows\Fonts\arialbd.ttf"))

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="ProfileTitle", fontName="Arial-Bold", fontSize=30, leading=31, textColor=NAVY, spaceAfter=7 * mm))
styles.add(ParagraphStyle(name="ProfileH1", fontName="Arial-Bold", fontSize=21, leading=23, textColor=NAVY, spaceAfter=4 * mm))
styles.add(ParagraphStyle(name="ProfileH2", fontName="Arial-Bold", fontSize=13, leading=15, textColor=BLUE, spaceBefore=3 * mm, spaceAfter=2 * mm))
styles.add(ParagraphStyle(name="ProfileBody", fontName="Arial", fontSize=9.2, leading=13.2, textColor=TEXT, spaceAfter=2.5 * mm))
styles.add(ParagraphStyle(name="ProfileSmall", fontName="Arial", fontSize=7.8, leading=10.5, textColor=MUTED))
styles.add(ParagraphStyle(name="ProfileLabel", fontName="Arial-Bold", fontSize=7.2, leading=9, textColor=BLUE, uppercase=True, spaceAfter=1.5 * mm))
styles.add(ParagraphStyle(name="ProfileCardTitle", fontName="Arial-Bold", fontSize=12, leading=14, textColor=NAVY, spaceAfter=2 * mm))
styles.add(ParagraphStyle(name="ProfileCardBody", fontName="Arial", fontSize=8.2, leading=11.2, textColor=TEXT, spaceAfter=2 * mm))
styles.add(ParagraphStyle(name="TimelineTitle", fontName="Arial-Bold", fontSize=9.3, leading=11.2, textColor=NAVY))
styles.add(ParagraphStyle(name="TimelineMeta", fontName="Arial-Bold", fontSize=7.3, leading=9, textColor=BLUE))
styles.add(ParagraphStyle(name="TimelineBody", fontName="Arial", fontSize=7.5, leading=10, textColor=TEXT))
styles.add(ParagraphStyle(name="FactTitle", fontName="Arial-Bold", fontSize=12, leading=14, textColor=WHITE))
styles.add(ParagraphStyle(name="FactSmall", fontName="Arial", fontSize=7.8, leading=10.5, textColor=colors.HexColor("#BCEBF0")))

projects = [
    ("seit 06/2025", "Schnittstelle für Wertpapierdaten", "Thüringer Aufbaubank", "SAP ECC · REST · RFC · ABAP OO"),
    ("06/2024 - 03/2025", "Proof of Concept SAP Ariba", "DATEV eG", "SAP Ariba · S/4HANA · Fiori · Integration Suite"),
    ("07/2023 - 05/2024", "Einführung SAP S/4HANA", "DATEV eG", "ABAP OO · Code Conversion · Fiori · Berechtigungen"),
    ("03/2023 - 09/2023", "SAP-Berechtigungen", "Berliner Verkehrsbetriebe", "SAP ERP ECC · PTNova · ABAP OO"),
    ("01/2023 - 03/2023", "SAP-Lizenzoptimierung", "DATEV eG", "SNOW · Digital Access · S/4HANA"),
    ("08/2022 - 02/2023", "Voruntersuchung S/4HANA-Migration", "DATEV eG", "S/4HANA · ATC · Readiness Check"),
    ("06/2021 - 12/2021", "Mobile Lagerlogistik in der Instandhaltung", "DATEV eG", "Mobisys · WM · MM · iOS"),
    ("06/2020 - 05/2021", "Icertis-Vertragsmanagement", "DATEV eG", "IDoc · REST · LDAP · ABAP OO"),
    ("01/2019 - 04/2020", "Mobile Logistik im Zentrallager", "DATEV eG", "Mobisys · WM · iOS · ABAP OO"),
    ("06/2018 - 12/2018", "ERP- und SRM-EHP-Upgrade", "DATEV eG", "SAP ERP · SRM · SPAU/SPAM"),
    ("01/2017 - 11/2017", "EAI mit Lobster Data", "DATEV eG", "Lobster Data · RFC · IDoc · ABAP OO"),
    ("04/2016 - 12/2016", "Mobile Prozesse Instandhaltung", "DATEV eG", "SAP PM · MM · Mobisys · ABAP OO"),
    ("07/2015 - 03/2016", "SAP Treasury Management", "DATEV eG", "SAP TRM · FI · BAPI/BAdI"),
    ("11/2014 - 06/2015", "Mobile Lagerhaltung", "DATEV eG", "SAP WM · MM · Mobisys"),
    ("01/2013 - 10/2013", "Eigenentwicklung Reisekostenabrechnung", "DATEV eG", "SAP FI · LSMW · Flatfile · ABAP OO"),
    ("01/2012 - 11/2012", "SAP R/3 EHP-Upgrade", "DATEV eG", "SAP ERP · SPAU/SPAM · ABAP OO"),
    ("04/2011 - 09/2011", "Upgrade Kreditorenbuchhaltung", "DATEV eG", "SAP FI-AP · AFI DIC · Workflow"),
    ("10/2010 - 03/2011", "Zentrale Benutzerverwaltung", "DATEV eG", "SAP ERP · SRM · Solution Manager · CUA"),
]


def footer(canvas, doc):
    canvas.saveState()
    width, _ = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, width, 13 * mm, stroke=0, fill=1)
    canvas.setFillColor(WHITE)
    canvas.setFont("Arial", 7.5)
    canvas.drawString(18 * mm, 5.2 * mm, "SAP Beratung Andreas Klaus · www.sapberatungandreasklaus.de")
    canvas.drawRightString(width - 18 * mm, 5.2 * mm, f"Seite {doc.page}")
    canvas.restoreState()


def bullet_list(items):
    return [Paragraph(f"• {item}", styles["ProfileBody"]) for item in items]


def case_card(label, title, body, result):
    content = [
        Paragraph(label.upper(), styles["ProfileLabel"]),
        Paragraph(title, styles["ProfileCardTitle"]),
        Paragraph(body, styles["ProfileCardBody"]),
        Paragraph(f"<b>Ergebnis:</b> {result}", styles["ProfileCardBody"]),
    ]
    table = Table([[content]], colWidths=[166 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 6 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5 * mm),
    ]))
    return table


def timeline_entry(period, title, company, tech):
    text = [
        Paragraph(period, styles["TimelineMeta"]),
        Paragraph(title, styles["TimelineTitle"]),
        Paragraph(company, styles["TimelineBody"]),
        Paragraph(tech, styles["ProfileSmall"]),
    ]
    table = Table([[text]], colWidths=[78 * mm])
    table.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
    ]))
    return table


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=20 * mm,
        title="Projektprofil Andreas Klaus",
        author="SAP Beratung Andreas Klaus",
    )
    story = []

    story.append(Paragraph("PROJEKTPROFIL · 2026", styles["ProfileLabel"]))
    story.append(Paragraph("Andreas Klaus", styles["ProfileTitle"]))
    intro = [
        Paragraph("<b>Technische SAP-Beratung, Entwicklung und Personalvermittlung</b>", styles["ProfileH2"]),
        Paragraph("SAP-Lösungen vom technischen Konzept bis zum stabilen Betrieb - mit Projekterfahrung seit 2010 in Entwicklung, Integration, Transformation, Berechtigungen und technischer Projektleitung.", styles["ProfileBody"]),
        Spacer(1, 3 * mm),
        Paragraph("<b>Schwerpunkte</b>", styles["ProfileH2"]),
        *bullet_list([
            "ABAP und ABAP OO, Fiori, Formulare und Workflows",
            "REST, SOAP, RFC, BAPI, ALE/IDoc und Flatfile",
            "S/4HANA, Code Conversion und Readiness Checks",
            "Berechtigungen, Benutzeradministration und Lizenzoptimierung",
            "Technische Projektleitung, Tests, Stabilisierung und Training",
            "Fachlich fundierte SAP Personalvermittlung",
        ]),
    ]
    portrait = Image(str(ROOT / "public" / "andreas-klaus-480.webp"), width=48 * mm, height=63 * mm)
    profile = Table([[portrait, intro]], colWidths=[55 * mm, 111 * mm])
    profile.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (0, 0), (0, 0), PALE),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 7 * mm),
        ("RIGHTPADDING", (1, 0), (1, 0), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(profile)
    story.append(Spacer(1, 10 * mm))

    facts = [
        [Paragraph("15+ Jahre", styles["FactTitle"]), Paragraph("18 Projekte", styles["FactTitle"]), Paragraph("Nürnberg · Remote", styles["FactTitle"])],
        [Paragraph("SAP-Berufserfahrung", styles["FactSmall"]), Paragraph("im aktuellen Lebenslauf", styles["FactSmall"]), Paragraph("deutschlandweiter Einsatz", styles["FactSmall"])],
    ]
    fact_table = Table(facts, colWidths=[55.3 * mm] * 3)
    fact_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, -1), WHITE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6 * mm),
        ("TOPPADDING", (0, 0), (-1, 0), 5 * mm),
        ("BOTTOMPADDING", (0, 1), (-1, -1), 5 * mm),
        ("LINEAFTER", (0, 0), (1, -1), 0.5, colors.HexColor("#39717D")),
    ]))
    story.append(fact_table)
    story.append(Spacer(1, 9 * mm))
    story.append(Paragraph("Direkter Kontakt", styles["ProfileH2"]))
    story.append(Paragraph("info@sapberatungandreasklaus.de · +49 152 36936743 · linkedin.com/in/andreas-klaus-684b2220", styles["ProfileBody"]))
    story.append(PageBreak())

    story.append(Paragraph("AUSGEWÄHLTE FALLSTUDIEN", styles["ProfileLabel"]))
    story.append(Paragraph("Projektbeiträge konkret eingeordnet", styles["ProfileH1"]))
    story.append(Paragraph("Drei Beispiele aus dem aktuellen Projektprofil. Die Darstellung bleibt bewusst faktenbasiert und verzichtet auf nicht belegte Kennzahlen.", styles["ProfileBody"]))
    story.append(Spacer(1, 5 * mm))
    story.append(case_card(
        "Seit 06/2025 · Thüringer Aufbaubank",
        "Schnittstelle für Wertpapierdaten",
        "Schnittstellenarchitektur, ABAP-OO-Entwicklung, Berechtigungs- und Netzwerkdesign, RFC-Anbindung, Tests und Fehleranalyse.",
        "Abgestimmte Architektur, technische Anbindung und durchgängiges Testdesign.",
    ))
    story.append(Spacer(1, 6 * mm))
    story.append(case_card(
        "06/2024 - 03/2025 · DATEV eG",
        "Proof of Concept SAP Ariba",
        "Systemarchitektur, ABAP OO, Fiori Apps, Berechtigungen, RFC/SOAP/REST-Schnittstellen und Adobe Forms.",
        "Technischer Proof of Concept als Grundlage für die weitere Architekturentscheidung.",
    ))
    story.append(Spacer(1, 6 * mm))
    story.append(case_card(
        "07/2023 - 05/2024 · DATEV eG",
        "Einführung SAP S/4HANA",
        "ABAP-OO-Entwicklung, Code Conversion, Berechtigungen, Fiori Apps, Train-the-Trainer, Testkonzeption und Stabilisierung.",
        "Konvertierte Eigenentwicklungen, abgesicherte Fiori- und Berechtigungsthemen sowie Wissenstransfer.",
    ))
    story.append(PageBreak())

    story.append(Paragraph("PROJEKTCHRONIK", styles["ProfileLabel"]))
    story.append(Paragraph("18 SAP-Projekte seit 2010", styles["ProfileH1"]))
    story.append(Paragraph("Rollen in Softwareentwicklung, technischem SAP Consulting, Berechtigungsentwicklung, Administration sowie technischer Projekt- und Teilprojektleitung.", styles["ProfileBody"]))
    story.append(Spacer(1, 4 * mm))
    rows = []
    for index in range(0, len(projects), 2):
        left = timeline_entry(*projects[index])
        right = timeline_entry(*projects[index + 1]) if index + 1 < len(projects) else ""
        rows.append([left, right])
    timeline = Table(rows, colWidths=[81 * mm, 81 * mm], hAlign=TA_LEFT)
    timeline.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
    ]))
    story.append(timeline)

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    PUBLIC.write_bytes(OUTPUT.read_bytes())
    print(OUTPUT)
    print(PUBLIC)


if __name__ == "__main__":
    build()
