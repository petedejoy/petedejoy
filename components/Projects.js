import Link from "next/link"
import styles from "./Projects.module.css"

const Projects = ({ projects }) => {
  return (
    <div id="Projects">
      <h1 className="intro">Some of my work.</h1>
      {projects.map((project) => {
        const { title, slug, image } = project.frontmatter
        return (
          <div className={styles.container} key={slug}>
            <Link href={`/projects/${slug}`}>
              <img src={image} alt={title} style={{ width: "100%" }} />
              <div className={styles.overlay}>
                <h2 className={styles.text}>{title}</h2>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
