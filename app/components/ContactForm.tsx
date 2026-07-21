"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const email = String(form.get("email") || "").trim();
    const topic = String(form.get("topic") || "Allgemeine SAP-Anfrage");
    const message = String(form.get("message") || "").trim();
    const subject = `SAP-Projektanfrage: ${topic}`;
    const body = [
      `Name: ${name}`,
      company ? `Unternehmen: ${company}` : "",
      `E-Mail: ${email}`,
      `Thema: ${topic}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.dispatchEvent(
      new CustomEvent("site:conversion", { detail: { action: "contact_form", topic } }),
    );
    setPrepared(true);
    window.location.href = `mailto:info@sapberatungandreasklaus.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>Name *</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Unternehmen</span>
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <label>
        <span>E-Mail *</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>SAP-Thema</span>
        <select name="topic" defaultValue="ABAP & Fiori">
          <option>ABAP & Fiori</option>
          <option>Schnittstellen & Integration</option>
          <option>S/4HANA</option>
          <option>Berechtigungen</option>
          <option>Technische SAP-Beratung</option>
          <option>SAP Personalvermittlung</option>
          <option>Andere Anfrage</option>
        </select>
      </label>
      <label>
        <span>Worum geht es? *</span>
        <textarea name="message" rows={5} required />
      </label>
      <button className="button button-form" type="submit">
        Anfrage als E-Mail vorbereiten <span aria-hidden="true">↗</span>
      </button>
      <p className="form-privacy">
        Das Formular öffnet Ihr E-Mail-Programm. Eingaben werden auf dieser Website weder gespeichert noch übertragen.
      </p>
      {prepared && <p className="form-status" role="status">Die Anfrage wurde für Ihr E-Mail-Programm vorbereitet.</p>}
    </form>
  );
}
