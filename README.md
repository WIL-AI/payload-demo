# Payload CMS Demo

A Payload CMS v3 demo with MongoDB, deployed on Vercel.

## Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your environment variables:
   - `MONGODB_URI`: MongoDB Atlas connection string
   - `PAYLOAD_SECRET`: Random secret (min 32 chars)
   - `NEXT_PUBLIC_SERVER_URL`: Your domain URL

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the GitHub repo on [vercel.com](https://vercel.com/new)
3. Add the environment variables in the Vercel dashboard
4. Deploy!

## Collections

- **Users** — Authentication, admin access
- **Posts** — Blog posts with rich text editor
- **Media** — File uploads

## Admin Panel

Visit `/admin` to access the Payload admin panel.
