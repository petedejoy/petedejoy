import PostCard from "./PostCard"
import styles from "./PostList.module.css"

const PostList = ({ posts }) => {
  return (
    <section id="Writing">
      <h1 className="intro">Musings on harebrained ideas.</h1>
      <div className={styles.center}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default PostList
