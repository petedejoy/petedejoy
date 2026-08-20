/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  async redirects() {
    // Legacy short-slug URLs from the old Netlify `_redirects` file.
    // (on-anxiety, prs-silver-sky, and conformist redirects were removed
    // along with those posts.)
    return [
      { source: "/mongodb", destination: "/writing/mongodb", permanent: true },
      {
        source: "/software-engineer",
        destination: "/writing/software-engineer",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
