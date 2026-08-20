import Link from "next/link"
import styles from "./PostCard.module.css"

const PostCard = ({ post }) => {
  const { title, description, image, slug } = post.frontmatter

  return (
    <Link href={`/writing/${slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.info}>
          <div>
            <h2>{title}</h2>
            <h6>{description}</h6>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
