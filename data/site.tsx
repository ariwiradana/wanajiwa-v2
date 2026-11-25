import type { ReactNode } from "react";
import Image from "next/image";
import {
  Bath,
  BedDouble,
  Car,
  ShieldCheck,
  Trees,
  Tv,
  Utensils,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";
export function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export const photos = {
  hero: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
  bedroom:
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
  living:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  garden:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  kitchen:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  detail:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
};
export const amenities = [
  { icon: Waves, title: "Private Pool", desc: "Exclusive swimming pool." },
  { icon: Trees, title: "Terrace", desc: "Outdoor space to relax." },
  {
    icon: Trees,
    title: "Ricefield View",
    desc: "Peaceful views over the rice fields.",
  },
  { icon: BedDouble, title: "2 Bedrooms", desc: "Two comfortable bedrooms." },
  { icon: BedDouble, title: "Wardrobe", desc: "Storage in the bedrooms." },
  { icon: Bath, title: "Bathtub", desc: "Bathtub in the private bathroom." },
  {
    icon: Bath,
    title: "Shower & Hot Water",
    desc: "Hot water for comfortable showers.",
  },
  {
    icon: Bath,
    title: "Soap & Shampoo",
    desc: "Bathroom essentials provided.",
  },
  { icon: Tv, title: "Flat-screen TV", desc: "TV entertainment." },
  { icon: Wifi, title: "Free WiFi", desc: "Complimentary Wi-Fi." },
  {
    icon: Utensils,
    title: "Fully Equipped Kitchen",
    desc: "Kitchen facilities for your stay.",
  },
  { icon: Utensils, title: "Dining Area", desc: "Space to enjoy your meals." },
  {
    icon: ShieldCheck,
    title: "CCTV in Public Areas",
    desc: "Security monitoring in public areas.",
  },
  {
    icon: ShieldCheck,
    title: "Private Entrance",
    desc: "A private entrance to the villa.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    desc: "Air-conditioned indoor spaces.",
  },
  {
    icon: Car,
    title: "Private Parking",
    desc: "Parking available on the property.",
  },
];
export const bookingChannels = [
  {
    label: "Agoda",
    href: "https://www.agoda.com/wana-jiwa-ubud-villa-with-rice-field-view/hotel/bali-id.html",
  },
  { label: "Airbnb", href: "https://www.airbnb.com/rooms/1537721539057943901" },
  {
    label: "Booking.com",
    href: "https://www.booking.com/hotel/id/wana-jiwa-ubud.html",
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=6287882832469&text&type=phone_number&app_absent=0",
  },
];
export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/wanajiwa.ubud/" },
  { label: "Facebook", href: "https://www.facebook.com/wanajiwa.ubud/" },
  { label: "TikTok", href: "https://www.tiktok.com/@wanajiwa.ubud" },
];
export const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=6287882832469&text&type=phone_number&app_absent=0";
export const emailUrl = "mailto:wanajiwa.id@gmail.com";
export const reviews = [
  {
    name: "Ankur",
    text: "It was great staying at the villa. Beautiful and peaceful, the staff is very helpful and Ari has been responsive since the day we booked.",
  },
  {
    name: "Farah",
    text: "Beautiful place in a beautiful area, very clean, hospitality 10/10. Amazing people, definitely will come back.",
  },
  {
    name: "Babette",
    text: "Very peaceful and quiet! It was lovely and the host was very kind. Thanks a lot.",
  },
];
export const faqs = [
  [
    "What is Wana Jiwa Villa in Ubud?",
    "Wana Jiwa is a private villa surrounded by rice fields and tropical greenery, offering a peaceful escape with a private swimming pool.",
  ],
  [
    "Does the villa have a private swimming pool?",
    "Yes. The pool is exclusively for villa guests and is surrounded by lush greenery and ricefield views.",
  ],
  [
    "What facilities are available?",
    "The villa offers two air-conditioned bedrooms with en-suite bathrooms, a fully equipped kitchen, Wi-Fi and a private terrace.",
  ],
  [
    "Is Wana Jiwa a fully private villa?",
    "Yes, guests have exclusive access to the villa and its private swimming pool.",
  ],
  [
    "Where is Wana Jiwa located?",
    "Wana Jiwa is located in a quiet area around Payangan, Ubud, approximately 15–20 minutes from Ubud town center.",
  ],
  [
    "Is it suitable for long-term stays or remote work?",
    "With comfortable bedrooms, Wi-Fi, a kitchen and a calm natural environment, the villa can be suitable for extended stays and remote work.",
  ],
  [
    "How can I book a stay?",
    "Contact us directly via WhatsApp or email to enquire about dates and rates.",
  ],
];
