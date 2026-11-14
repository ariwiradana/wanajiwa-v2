# Wana Jiwa Ubud — Website V2

Frontend-only villa profile website built with Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, and FS Lightbox.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Local images

All website photos are loaded from `public/images/`:

- `hero-pool.png` — generated local hero visual
- `img1.png` — local villa image
- `img2.png` — local villa image

Replace these with Wana Jiwa's real, optimized photography when ready. Keep the same filenames or update `lib/site.ts`.

## Update contact and booking links

Edit `lib/site.ts`:

- `socialLinks.instagram`
- `socialLinks.tiktok`
- `socialLinks.facebook`
- `email`
- `phone`
- `bookingLinks`

The TikTok and Facebook URLs are placeholders and must be replaced with the official Wana Jiwa profiles. Agoda, Airbnb, and Booking.com currently point to their platform homepages; replace each with the direct Wana Jiwa listing URL.

## Gallery lightbox

The gallery uses `fslightbox-react`. Gallery sources are read from the local `public/images/` directory and configured in `lib/site.ts`.

## Notes

- No database, CMS, login, or internal booking engine.
- Booking buttons open an OTA selection modal and redirect to the selected platform.
- Responsive layouts cover mobile, tablet, laptop, and desktop widths.
- Motion respects the user's `prefers-reduced-motion` accessibility setting.
# wanajiwa-v2
