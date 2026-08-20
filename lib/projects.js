import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content", "projects")

export function getAllProjects() {
  const slugs = fs.readdirSync(projectsDirectory).filter((entry) =>
    fs.statSync(path.join(projectsDirectory, entry)).isDirectory()
  )

  const projects = slugs.map((dir) => {
    const files = fs.readdirSync(path.join(projectsDirectory, dir))
    const mdxFile = files.find((file) => file.endsWith(".mdx"))
    const fullPath = path.join(projectsDirectory, dir, mdxFile)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    return { dir, frontmatter: data }
  })

  return projects
    .filter((project) => project.frontmatter.type === "project")
    .sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0))
}

export function getProjectBySlug(slug) {
  const dirs = fs.readdirSync(projectsDirectory)
  for (const dir of dirs) {
    const files = fs.readdirSync(path.join(projectsDirectory, dir))
    const mdxFile = files.find((file) => file.endsWith(".mdx"))
    if (!mdxFile) continue
    const fullPath = path.join(projectsDirectory, dir, mdxFile)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)
    if (data.slug === slug) {
      return { slug, frontmatter: data, content }
    }
  }
  return null
}

export function getAllProjectSlugs() {
  return getAllProjects().map((project) => project.frontmatter.slug)
}
