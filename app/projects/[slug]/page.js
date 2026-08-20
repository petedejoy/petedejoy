import { MDXRemote } from "next-mdx-remote/rsc"
import remarkEmoji from "remark-emoji"
import { notFound } from "next/navigation"
import styles from "./ProjectTemplate.module.css"
import { getAllProjectSlugs, getProjectBySlug } from "../../../lib/projects"
import { siteUrl } from "../../../lib/site"

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  const { title, description, image } = project.frontmatter
  return {
    title,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/projects/${slug}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      images: [image],
    },
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { title, image, link, tools } = project.frontmatter

  return (
    <section className={styles.template}>
      <div className={styles.info}>
        <h1>{title}</h1>
        <div className={styles.projectMeta}>
          {tools ? (
            <ul>
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          ) : null}
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <button className={styles.link}>SEE IT IN ACTION </button>
            </a>
          ) : null}
        </div>
      </div>
      <img src={image} className={styles.image} alt={title} style={{ width: "100%" }} />
      <div className={styles.content}>
        <MDXRemote source={project.content} options={{ mdxOptions: { remarkPlugins: [remarkEmoji] } }} />
      </div>
    </section>
  )
}
