# Logos

Card-based wisdom curation. A Vite + React + Tailwind SPA with optional Supabase backing and offline bookmarks.

## Run locally

```bash
cd logos
npm install
npm run dev
```

It works right away on the five bundled seed cards. No backend is needed.

## Connect Supabase (optional, free tier)

1. Create a project at supabase.com.
2. In **SQL Editor**, run `supabase/schema.sql`. It creates the `insights` table, a read-only public policy, and the seed rows.
3. `cp .env.example .env.local` and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (Project Settings → API).
4. Restart `npm run dev`.

The seed cards render immediately. A successful fetch then replaces them. If the fetch fails (offline, bad keys), the seed cards stay up.

## Deploy (free)

Any static host works: Vercel, Netlify, Cloudflare Pages.

- Root directory: `logos`
- Build command: `npm run build`
- Output directory: `dist`
- Env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

## Structure

```
src/
  App.jsx                  filter state + feed
  components/
    Header.jsx             sticky wordmark, bookmark toggle, category pills
    InsightCard.jsx        card anatomy
    EmptyState.jsx         empty / no-bookmarks view
    Icons.jsx              inline SVG icons
  hooks/
    useInsights.js         Supabase fetch (useEffect) with seed fallback
    useBookmarks.js        localStorage-backed bookmark set
  lib/
    supabase.js            client (null when not configured)
    categories.js          category list + accent color mapping
  data/seedInsights.js     out-of-the-box records
supabase/schema.sql        table, RLS policy, seed rows
```

Bookmarks are stored per device under the `logos:bookmarks` localStorage key.
