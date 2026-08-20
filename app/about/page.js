import Resume from "../../components/Resume"
import Skills from "../../components/Skills"
import { siteUrl } from "../../lib/site"

export const metadata = {
  title: "Pete DeJoy | About",
  openGraph: {
    title: "Pete DeJoy | About",
    description: "A bit about me, including work history, education, and skillset.",
    url: `${siteUrl}/about`,
    images: ["/images/about-meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/about-meta.png"],
  },
}

export default function AboutPage() {
  return (
    <>
      <Resume />
      <Skills />
    </>
  )
}
