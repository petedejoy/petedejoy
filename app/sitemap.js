import { getAllPostSlugs } from "../lib/posts"
import { siteUrl } from "../lib/site"

// Only the homepage and the two posts we want indexed are listed here.
// There's no /writing index page to browse — this file is the only thing
// that tells search engines the posts exist.
export default function sitemap() {
  const staticRoutes = [""].map((route) => ({
    url: `${siteUrl}${route}`,
  }))

  const postRoutes = getAllPostSlugs().map((slug) => ({
    url: `${siteUrl}/writing/${slug}`,
  }))

  return [...staticRoutes, ...postRoutes]
}
