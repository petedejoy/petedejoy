import About from "../components/About"
import { siteUrl } from "../lib/site"

export const metadata = {
  title: "Pete DeJoy",
  openGraph: {
    title: "Pete DeJoy",
    description: "Writing, projects, and music.",
    url: siteUrl,
    images: ["/images/home-meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/home-meta.png"],
  },
}

export default function HomePage() {
  return <About />
}
