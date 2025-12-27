import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://exhastudio.com"

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/works`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ]

  const categories = ["editorial", "personal", "commercial", "video"]
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/works/${category}`,
    lastModified: new Date(),
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages]
}
