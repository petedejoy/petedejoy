import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { format } from "date-fns"

const postsDirectory = path.join(process.cwd(), "content", "posts")

// Formats a frontmatter date (e.g. "2016-11-05") the same way the old
// Gatsby GraphQL `date(formatString: "MMMM Do, YYYY")` transform did.
export function formatPostDate(date) {
  return format(new Date(date), "MMMM do, yyyy")
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory).filter((entry) =>
    fs.statSync(path.join(postsDirectory, entry)).isDirectory()
  )

  const posts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, slug, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    return { slug, frontmatter: data }
  })

  return posts
    .filter((post) => post.frontmatter.type === "blog")
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, slug, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  return { slug, frontmatter: data, content }
}

export function getAllPostSlugs() {
  return getAllPosts().map((post) => post.slug)
}
