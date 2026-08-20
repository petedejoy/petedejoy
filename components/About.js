import styles from "./About.module.css"
import { getAboutHtml } from "../lib/content"

const About = async () => {
  const body = await getAboutHtml()
  return (
    <section id="about">
      <div className={styles.freeze}>
        <h1 className={styles.intro}>Hello, I&apos;m Pete.</h1>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/home-image.jpg"
          className={styles.image}
          alt="A photo of me and my girlfriend"
        />
      </div>
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
    </section>
  )
}

export default About
