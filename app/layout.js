import "./globals.css"
import GoogleAnalytics from "../components/GoogleAnalytics"
import { siteUrl, siteTitle, siteDescription, gaMeasurementId } from "../lib/site"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  verification: {
    google: "jjT2-lKf4sbcAUMVcK3pOa_0nfWTGaPpVIaS6E38ZUw",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: ["/images/home-meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/home-meta.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {gaMeasurementId && <GoogleAnalytics id={gaMeasurementId} />}
      </body>
    </html>
  )
}
