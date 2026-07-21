import type { MetadataRoute } from "next";
import { servicePages } from "./data/service-pages";

const baseUrl = "https://www.sapberatungandreasklaus.de";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-21");
  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages.map((service) => ({
      url: `${baseUrl}/leistungen/${service.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/impressum/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
