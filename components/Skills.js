import classnames from "classnames"
import styles from "./Skills.module.css"
import { getSkills } from "../lib/resume"

const SkillList = ({ items }) =>
  items.map((item) => (
    <li key={item.name}>
      <span style={{ width: item.level }} className={styles.barExpand} />
      <em>{item.name}</em>
    </li>
  ))

const Skills = () => {
  const { languages, frameworks, skills } = getSkills()

  return (
    <section id="resume">
      <div className={classnames("row", styles.skills)}>
        <div className="intro">Some tools I like working with.</div>
        <div className={styles.bars}>
          <div className={styles.columnsWrapper}>
            <div>
              <h4 className={styles.skillTitle}>Languages</h4>
              <ul className={styles.skills}>
                <SkillList items={languages} />
              </ul>
            </div>
            <div>
              <h4 className={styles.skillTitle}>Technologies</h4>
              <ul className={styles.skills}>
                <SkillList items={frameworks} />
              </ul>
            </div>
            <div>
              <h4 className={styles.skillTitle}>Skills</h4>
              <ul className={styles.skills}>
                <SkillList items={skills} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
