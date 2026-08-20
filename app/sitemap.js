import { getAllPostSlugs } from "../lib/posts"
import { getAllProjectSlugs } from "../lib/projects"
import { siteUrl } from "../lib/site"

export default function sitemap() {
  const staticRoutes = ["", "/about", "/projects", "/writing", "/music"].map((route) => ({
    url: `${siteUrl}${route}`,
  }))

  const postRoutes = getAllPostSlugs().map((slug) => ({
    url: `${siteUrl}/writing/${slug}`,
  }))

  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
  }))

  return [...staticRoutes, ...postRoutes, ...projectRoutes]
}
