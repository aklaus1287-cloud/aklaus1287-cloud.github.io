"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const topic = String(form.get("entry.248579673") || "Allgemeine SAP-Anfrage");
    const honeypot = String(form.get("website") || "").trim();

    if (honeypot) {
      window.location.assign("/danke/");
      return;
    }

    window.dispatchEvent(
      new CustomEvent("site:conversion", { detail: { action: "contact_form", topic } }),
    );
    setSubmitting(true);

    let submitted = false;
    const submitForm = () => {
      if (submitted) return;
      submitted = true;
      setSubmitted(true);
      formElement.submit();
    };

    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        lead_source: "website_contact_form",
        topic,
        event_callback: submitForm,
        event_timeout: 900,
      });
      window.setTimeout(submitForm, 1000);
    } else {
      submitForm();
    }
  }

  return (
    <>
    <form
      className="contact-form"
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfVsVbb_Jfld1XVFe43jhpuW_ZUPhfLZRpVqi0gGgpfSBTX7Q/formResponse"
      method="post"
      target="contact-response-frame"
      onSubmit={handleSubmit}
    >
      <div className="form-honeypot" aria-hidden="true">
        <label>
          <span>Website</span>
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Name *</span>
          <input name="entry.1527301573" autoComplete="name" required />
        </label>
        <label>
          <span>Unternehmen</span>
          <input name="entry.1982177526" autoComplete="organization" />
        </label>
      </div>
      <label>
        <span>E-Mail *</span>
        <input name="entry.909632839" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>SAP-Thema</span>
        <select name="entry.248579673" defaultValue="ABAP & Fiori">
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
        <textarea name="entry.1068684333" rows={5} minLength={10} maxLength={5000} required />
      </label>
      <label className="privacy-check">
        <input type="checkbox" required />
        <span>Ich habe die <a href="/datenschutz/" target="_blank">Datenschutzhinweise</a> zur Bearbeitung meiner Anfrage gelesen. *</span>
      </label>
      <button className="button button-form" type="submit" disabled={submitting}>
        {submitting ? "Anfrage wird gesendet …" : "Anfrage sicher senden"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-privacy">
        Ihre Angaben werden ausschließlich zur Bearbeitung der Anfrage per E-Mail an Andreas Klaus übermittelt.
      </p>
      {submitting && <p className="form-status" role="status">Einen Moment – die Anfrage wird übertragen.</p>}
    </form>
    <iframe
      className="form-response-frame"
      name="contact-response-frame"
      title="Übermittlung der Kontaktanfrage"
      onLoad={() => {
        if (submitted) window.location.assign("/danke/");
      }}
    />
    </>
  );
}
