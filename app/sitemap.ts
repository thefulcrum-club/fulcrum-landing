import type { MetadataRoute } from "next";

const SITE_URL = "https://thefulcrum.club";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/audit", priority: 0.9, changeFrequency: "monthly" },
    { path: "/retainer", priority: 0.8, changeFrequency: "monthly" },
    { path: "/residency", priority: 0.7, changeFrequency: "monthly" },
    { path: "/manifesto", priority: 0.6, changeFrequency: "yearly" },
    { path: "/work", priority: 0.5, changeFrequency: "monthly" },
    { path: "/trust", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
