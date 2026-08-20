# Sampath Gujarathi — Portfolio

Personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **shadcn/ui**. Features project case-studies, work experience, and contact links — all rendered as a fast, statically-generated site.

## Tech Stack

| Layer           | Choice                      |
| --------------- | --------------------------- |
| Framework       | Next.js 16 (App Router)     |
| Language        | TypeScript                  |
| Styling         | Tailwind CSS v4 + shadcn/ui |
| Animations      | Framer Motion               |
| Icons           | Lucide React                |
| Package manager | Bun                         |

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata & theme
│   ├── page.tsx            # Home page — assembles all sections
│   ├── globals.css         # Tailwind base + CSS design tokens
│   └── work/
│       └── [slug]/
│           └── page.tsx    # Dynamic project case-study pages
├── components/
│   ├── sections/           # Full-page sections (Intro, Work, Experience, …)
│   ├── ui/                 # Primitive UI components (Button, HoverCard)
│   ├── workCard.tsx        # Card linking to a project case-study
│   ├── experienceCard.tsx  # Single work-experience entry
│   └── RenderBlock.tsx     # Renders JSON content blocks (heading/paragraph/image)
├── data/
│   ├── projects.json       # Project metadata + rich-text content blocks
│   └── experience.json     # Work/role history
├── public/
│   ├── profile.jpeg         # Profile photo
│   ├── logo.png            # Site logo
│   └── assets/             # Project screenshot images
└── assets/
    ├── fonts/              # Local fonts
    └── icons/              # SVG company icons
```

## Getting Started

```bash
# Install dependencies
bun install

# Run dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `bun run dev`       | Start the local development server          |
| `bun run build`     | Build the production bundle                 |
| `bun run start`     | Start the production server                 |
| `bun run lint`      | Run ESLint                                  |
| `bun run format`    | Format all `.ts`/`.tsx` files with Prettier |
| `bun run typecheck` | Type-check without emitting files           |

## Adding a New Project

1. Add an entry to [`data/projects.json`](./data/projects.json) with the required fields:
   - `key`, `title`, `image`, `readingTime`, `words`, `date`, `url`, `themeColor`, `blocks`
2. Drop the cover image in `public/assets/`.
3. The project card appears on the home page and a case-study page is generated automatically at `/work/<url>`.

## Adding a UI Component (shadcn)

```bash
npx shadcn@latest add <component>
```

Components are placed in `components/ui/`.

## Deployment

The site is designed to be deployed on **Vercel**. Push to `main` and Vercel picks it up automatically. No extra configuration needed — `generateStaticParams` pre-renders all project pages at build time.
