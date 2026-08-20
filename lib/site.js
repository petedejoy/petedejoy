// Site-wide constants, replacing Gatsby's `siteMetadata` in gatsby-config.js.

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://petedejoy.com"
export const siteTitle = "Pete DeJoy | Personal Site"
export const siteDescription =
  "Writing, projects, and music. Built from scratch."

// Google Analytics is optional and off by default — the old UA tracking ID
// (UA-147983326-1) was a Universal Analytics property, and GA sunset UA in
// July 2023, so it was already dead. Set NEXT_PUBLIC_GA_ID once there's a
// live GA4 property to point at.
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID || null
