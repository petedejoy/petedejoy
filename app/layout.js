import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
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
        <Header />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
        {gaMeasurementId && <GoogleAnalytics id={gaMeasurementId} />}
      </body>
    </html>
  )
}
