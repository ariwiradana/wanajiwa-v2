import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wana Jiwa Ubud | Private Pool Villa in Bali",
  description: site.description,
  metadataBase: new URL("https://www.wanajiwa.com"),
  openGraph: { title: "Wana Jiwa Ubud", description: site.description, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
