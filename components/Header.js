import Link from "next/link"
import styles from "./Header.module.css"

const Header = () => (
  <header>
    <div className={styles.header}>
      <div className={styles.list}>
        <Link href="/">
          <img src="/headericon.png" className={styles.icon} alt="Pete DeJoy" />
        </Link>
      </div>
    </div>
  </header>
)

export default Header
