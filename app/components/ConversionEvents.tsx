"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function ConversionEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-conversion]") : null;
      if (!target) return;
      const action = target.dataset.conversion || "unknown";
      const detail = { action, path: window.location.pathname };
      window.dispatchEvent(new CustomEvent("site:conversion", { detail }));
      if (window.dataLayer) window.dataLayer.push({ event: "site_conversion", ...detail });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
