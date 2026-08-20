import Projects from "../../components/Projects"
import { getAllProjects } from "../../lib/projects"
import { siteUrl } from "../../lib/site"

export const metadata = {
  title: "Projects | Pete DeJoy",
  openGraph: {
    title: "Pete DeJoy | Projects",
    description: "Personal and professional projects that I've worked on. Mostly podcasting and programming.",
    url: `${siteUrl}/projects`,
    images: ["/images/projects-meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/projects-meta.png"],
  },
}

export default function ProjectsPage() {
  const projects = getAllProjects()
  return <Projects projects={projects} />
}
