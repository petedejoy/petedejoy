/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Legacy short-slug URLs from the old Netlify `_redirects` file.
    return [
      { source: "/mongodb", destination: "/writing/mongodb", permanent: true },
      {
        source: "/software-engineer",
        destination: "/writing/software-engineer",
        permanent: true,
      },
      { source: "/on-anxiety", destination: "/writing/on-anxiety", permanent: true },
      {
        source: "/prs-silver-sky",
        destination: "/writing/prs-silver-sky",
        permanent: true,
      },
      { source: "/conformist", destination: "/writing/conformist", permanent: true },
    ]
  },
}

module.exports = nextConfig
