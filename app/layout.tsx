import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://wanajiwa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Wana Jiwa Ubud | Private Villa with Ricefield Views in Bali", template: "%s | Wana Jiwa Ubud" },
  description: "Escape to Wana Jiwa, a private 2-bedroom villa in Payangan, Ubud, Bali. Enjoy a private pool, ricefield views, tropical surroundings and thoughtful comforts.",
  keywords: ["Wana Jiwa Ubud", "villa Ubud", "private villa Ubud", "villa with private pool Ubud", "Payangan villa", "ricefield view villa Bali", "2 bedroom villa Ubud", "Bali private villa"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_ID", url: siteUrl, siteName: "Wana Jiwa Ubud", title: "Wana Jiwa Ubud | Private Villa with Ricefield Views in Bali", description: "A private 2-bedroom villa with pool and ricefield views in Ubud, Bali.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Wana Jiwa Ubud private villa" }] },
  twitter: { card: "summary_large_image", title: "Wana Jiwa Ubud | Private Villa in Bali", description: "A private 2-bedroom villa with pool and ricefield views in Ubud, Bali.", images: ["/og-image.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
