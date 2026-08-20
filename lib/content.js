import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkEmoji from "remark-emoji"
import remarkHtml from "remark-html"

// Generic single-markdown-file → HTML reader, for the small standalone
// content files (about.md, music.md) that used to be queried by slug via
// Gatsby's `markdownRemark(frontmatter: {slug: {eq: "..."}})`.
async function markdownToHtml(section, filename) {
  const fullPath = path.join(process.cwd(), "content", section, filename)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { content } = matter(fileContents)
  const processed = await remark()
    .use(remarkEmoji)
    .use(remarkHtml, { sanitize: false })
    .process(content)
  return processed.toString()
}

export function getAboutHtml() {
  return markdownToHtml("about", "about.md")
}

export function getMusicHtml() {
  return markdownToHtml("music", "music.md")
}
