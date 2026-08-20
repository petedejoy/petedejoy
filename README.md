# petedejoy

Pete DeJoy's personal site — writing, projects, and things that inspire him. Built in [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).

## Development

```bash
npm install
npm run dev
```

## Content

Everything is local content — no CMS:

- `content/posts/` — MDX blog posts
- `content/projects/` — MDX project write-ups
- `content/resume/` — work/education/affiliations markdown + `skills.json`
- `content/about/`, `content/music/` — the about and music pages

Images live in `public/`, mirroring the same structure.

## Deploying

This is a zero-config Next.js app — connect the repo in the [Vercel dashboard](https://vercel.com/new) and it'll build with no extra setup. See `.env.example` for optional environment variables.
