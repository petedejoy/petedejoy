import PostList from "../../components/PostList"
import { getAllPosts } from "../../lib/posts"
import { siteUrl } from "../../lib/site"

export const metadata = {
  title: "Writing | Pete DeJoy",
  openGraph: {
    title: "Pete DeJoy | Writing",
    description:
      "Musings on technology, business, music, mental health, and everything in-between.",
    url: `${siteUrl}/writing`,
    images: ["/images/writing-meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/writing-meta.png"],
  },
}

export default function WritingPage() {
  const posts = getAllPosts()
  return <PostList posts={posts} />
}
