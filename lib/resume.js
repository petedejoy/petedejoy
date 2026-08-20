import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkEmoji from "remark-emoji"
import remarkHtml from "remark-html"

const resumeDirectory = path.join(process.cwd(), "content", "resume")

async function markdownFileToHtml(filename) {
  const fullPath = path.join(resumeDirectory, filename)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { content } = matter(fileContents)
  const processed = await remark()
    .use(remarkEmoji)
    .use(remarkHtml, { sanitize: false })
    .process(content)
  return processed.toString()
}

// Replaces Resume.js's old array-index hack into an alphabetically-sorted
// GraphQL query (`edges[4]`, `edges[2]`, `edges[3]`) — read each file by
// its actual name instead.
export async function getResumeContent() {
  const [work, education, affiliations] = await Promise.all([
    markdownFileToHtml("work.md"),
    markdownFileToHtml("education.md"),
    markdownFileToHtml("affiliations.md"),
  ])
  return { work, education, affiliations }
}

export function getSkills() {
  const fullPath = path.join(resumeDirectory, "skills.json")
  const { resume } = JSON.parse(fs.readFileSync(fullPath, "utf8"))
  const { languages, frameworks, skills } = resume
  return { languages, frameworks, skills }
}
