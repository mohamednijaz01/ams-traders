# AMS Traders — Fruits & Vegetables Wholesale

A wholesale produce supplier website built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Supabase**.

## Features

- **Public Website** — Homepage with hero, trust stats, client types, value props, and contact form
- **Contact Form** — Submits inquiries to a Supabase `inquiries` table
- **Admin Dashboard** — Password-protected at `/admin` to view submitted inquiries

## Getting Started

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in your values:
   ```bash
   cp .env.example .env.local
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key |
| `ADMIN_PASSWORD` | Password for the `/admin` dashboard |

## Deploying to Vercel

1. Push the repo to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add the 3 environment variables above in the Vercel dashboard
4. Deploy — Vercel auto-detects Next.js, no additional config needed

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Supabase (database)
- TypeScript
