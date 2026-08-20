import { MDXRemote } from "next-mdx-remote/rsc"
import remarkEmoji from "remark-emoji"
import { notFound } from "next/navigation"
import styles from "./PostTemplate.module.css"
import { getAllPostSlugs, getPostBySlug, formatPostDate } from "../../../lib/posts"
import { siteUrl } from "../../../lib/site"
import MongoRevenue from "../../../components/charts/MongoRevenue"
import MongoRevenueStars from "../../../components/charts/MongoRevenueStars"

// The mongodb post is the only one that embeds interactive charts. MDX
// compiled via next-mdx-remote can't use its own `import` statements, so the
// components it references are supplied here instead (see content/posts/mongodb).
const mdxComponents = {
  MongoChart: MongoRevenue,
  MongoChart2: MongoRevenueStars,
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const { title, description, image } = post.frontmatter
  return {
    title,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/writing/${slug}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      images: [image],
    },
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }
  if (!post) notFound()

  const { title, date, author, image, description } = post.frontmatter

  return (
    <section className={styles.template}>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>
          {author} | {formatPostDate(date)}
        </span>
      </div>
      <img src={image} className={styles.image} alt={title} style={{ width: "100%" }} />
      <div className={styles.content}>
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkEmoji] } }}
        />
      </div>
    </section>
  )
}
