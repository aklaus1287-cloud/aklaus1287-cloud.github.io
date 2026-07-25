"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MEASUREMENT_ID = "G-S2VRST528R";
const CONSENT_KEY = "sap-beratung-analytics-consent";
const SCRIPT_ID = "google-analytics";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function initializeAnalytics() {
  if (document.getElementById(SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function removeAnalyticsCookies() {
  document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))
    .forEach((name) => {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.sapberatungandreasklaus.de; SameSite=Lax`;
    });
}

export default function GoogleAnalytics() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedChoice = window.localStorage.getItem(CONSENT_KEY);
      if (savedChoice === "granted" || savedChoice === "denied") {
        setChoice(savedChoice);
        if (savedChoice === "granted") initializeAnalytics();
      }
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    const previousChoice = window.localStorage.getItem(CONSENT_KEY);
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    setSettingsOpen(false);

    if (nextChoice === "granted") {
      initializeAnalytics();
      return;
    }

    if (previousChoice === "granted") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      removeAnalyticsCookies();
      window.location.reload();
    }
  }

  if (!ready) return null;

  const showBanner = choice === null || settingsOpen;

  return (
    <>
      {showBanner ? (
        <section className="consent-banner" role="region" aria-labelledby="consent-title">
          <div>
            <p className="consent-kicker">Datenschutz-Einstellungen</p>
            <h2 id="consent-title">Dürfen wir die Nutzung dieser Website messen?</h2>
            <p>
              Mit Ihrer Einwilligung hilft Google Analytics dabei, Inhalte und Nutzerführung zu verbessern.
              Ohne Zustimmung wird das Analytics-Skript nicht geladen. Mehr dazu in der{" "}
              <Link href="/datenschutz/">Datenschutzerklärung</Link>.
            </p>
          </div>
          <div className="consent-actions">
            <button className="consent-button consent-button-secondary" type="button" onClick={() => saveChoice("denied")}>
              Nur notwendige
            </button>
            <button className="consent-button consent-button-primary" type="button" onClick={() => saveChoice("granted")}>
              Analytics erlauben
            </button>
          </div>
        </section>
      ) : (
        <button className="consent-settings-trigger" type="button" onClick={() => setSettingsOpen(true)}>
          Datenschutz-Einstellungen
        </button>
      )}
    </>
  );
}
