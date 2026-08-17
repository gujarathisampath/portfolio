import type { MetadataRoute } from "next";
import projects from "@/data/projects.json";

const BASE_URL = "https://sampath.me";

function parseDate(dateStr: string): Date {
  return new Date(dateStr.replace(/(\d+)(st|nd|rd|th)\b/i, "$1"));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/work/${project.url}`,
    lastModified: parseDate(project.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}