import Link from "next/link"
import styles from "./Header.module.css"

const Footer = () => (
  <div className={styles.footer}>
    <header>
      <div className={styles.center}>
        <div className={styles.list}>
          <Link href="/">
            <img src="/headericon.png" className={styles.icon} alt="Pete DeJoy" />
          </Link>
        </div>
      </div>
    </header>
  </div>
)

export default Footer
