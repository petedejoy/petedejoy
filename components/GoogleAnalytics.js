"use client"

import Script from "next/script"

// Optional GA4 hook — inert unless NEXT_PUBLIC_GA_ID is set (see lib/site.js).
const GoogleAnalytics = ({ id }) => (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
    <Script id="ga-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}');
      `}
    </Script>
  </>
)

export default GoogleAnalytics
