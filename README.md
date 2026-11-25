# Wana Jiwa redesign prototype

Next.js App Router + Tailwind CSS v4 scaffold. Dummy photography is used for the initial layout.

## Start
1. Install Node.js (18.18+ recommended)
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:3000

## Notes
- Homepage sections and FAQ are based on the current Wana Jiwa website.
- Replace temporary image URLs in `app/page.tsx` with actual villa images.
- Contact actions use the WhatsApp number and email surfaced on the current site.
- This is a visual prototype; form submission, booking integration, map embed and real review source integration are not implemented yet.
\n## Important link placeholders\nOTA links and official social URLs are intentionally placeholders until the verified URLs are provided. Replace the `bookingChannels` and `socialLinks` arrays in `app/page.tsx`.\n\n## SEO included in prototype
- Page metadata: title, description, keywords, canonical URL, Open Graph, Twitter metadata
- `app/sitemap.ts` sitemap route
- `app/robots.ts` robots route
- JSON-LD `LodgingBusiness` structured data scaffold
- Semantic section structure and descriptive copy
- Placeholder OG image: add a real `/public/og-image.jpg` before launch
- Validate structured data and sitemap in Google Search Console after deploying
\n# wanajiwa-v2
