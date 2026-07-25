"use client";

import { useEffect } from "react";

export default function ConversionEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-conversion]") : null;
      if (!target) return;
      const action = target.dataset.conversion || "unknown";
      const detail = { action, path: window.location.pathname };
      window.dispatchEvent(new CustomEvent("site:conversion", { detail }));
      window.gtag?.("event", "site_conversion", detail);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
