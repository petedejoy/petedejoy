import Music from "../../components/Music"
import { siteUrl } from "../../lib/site"

export const metadata = {
  title: "Pete DeJoy | Music",
  openGraph: {
    title: "Pete DeJoy | Music",
    description:
      "I'm an aspiring vintage guitar collector and bedroom musician. In my free time, I make instagram videos.",
    url: `${siteUrl}/music`,
    images: ["/images/music-meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/music-meta.png"],
  },
}

export default function MusicPage() {
  return <Music />
}
