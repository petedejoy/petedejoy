import classnames from "classnames"
import styles from "./Resume.module.css"
import { getResumeContent } from "../lib/resume"

const Resume = async () => {
  const { work, education, affiliations } = await getResumeContent()

  return (
    <section id="Resume">
      <div className="intro">A bit more about me.</div>
      <div className={classnames("row", styles.work)}>
        <div className="three columns header-col">
          <h1 className={styles.title}>
            <span className={styles.underline}>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className={styles.markdownStyling} dangerouslySetInnerHTML={{ __html: work }} />
        </div>
      </div>

      <div className={classnames("row", styles.education)}>
        <div className="three columns header-col">
          <h1 className={styles.title}>
            <span className={styles.underline}>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div
                className={styles.markdownStyling}
                dangerouslySetInnerHTML={{ __html: education }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("row", styles.affiliations)}>
        <div className="three columns header-col">
          <h1 className={styles.title}>
            <span className={styles.underline}>Affiliations</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div
            className={styles.markdownStyling}
            dangerouslySetInnerHTML={{ __html: affiliations }}
          />
        </div>
      </div>
    </section>
  )
}

export default Resume
