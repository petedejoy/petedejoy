import styles from "./Music.module.css"
import { getMusicHtml } from "../lib/content"

const Music = async () => {
  const body = await getMusicHtml()

  return (
    <section id="Music">
      <div>
        <h1 className="intro">Some of my tunes.</h1>
        <p className={styles.subtitle}>
          I&apos;m a bedroom guitarist and aspiring vintage guitar collector. In my free time,
          I make Instagram videos.
        </p>
      </div>
      <img src="/images/guitars.jpg" className={styles.guitars} alt="Guitars" />
      <hr />
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
    </section>
  )
}

export default Music
