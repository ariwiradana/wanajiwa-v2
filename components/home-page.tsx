import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  BedDouble,
  Users,
  Waves,
  Flower2,
  Wifi,
  Snowflake,
  CookingPot,
  Tv,
  Bath,
  CarFront,
  ShieldCheck,
  DoorOpen,
  Trees,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Phone,
  Music2,
  Wheat,
  Utensils,
  Droplets,
  ShowerHead,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { BookingLinks } from "@/components/booking-links";
import { Gallery } from "@/components/gallery";
import { FAQ } from "@/components/faq";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import {
  HeroImageMotion,
  HeroTextMotion,
  HeroCardMotion,
} from "@/components/hero-motion";
import { amenities, site } from "@/lib/site";

const iconMap: Record<string, React.ElementType> = {
  wifi: Wifi,
  snowflake: Snowflake,
  "cooking-pot": CookingPot,
  waves: Waves,
  tv: Tv,
  bath: Bath,
  shower: ShowerHead,
  droplets: Droplets,
  "car-front": CarFront,
  "shield-check": ShieldCheck,
  "door-open": DoorOpen,
  trees: Trees,
  flower: Flower2,
  wheat: Wheat,
  bed: BedDouble,
  wardrobe: BedDouble,
  utensils: Utensils,
};
const reviews = [
  {
    quote:
      "It was great staying at the villa. It is beautiful and peaceful, and the team was very helpful.",
    name: "Ankur",
    place: "Guest review",
  },
  {
    quote:
      "Beautiful place in a beautiful area. Very clean, hospitality 10/10. Definitely will come back.",
    name: "Farah",
    place: "Guest review",
  },
  {
    quote:
      "Very peaceful and quiet. It was lovely, and the hospitality made our stay special.",
    name: "Babette",
    place: "Guest review",
  },
];
export function HomePage() {
  return (
    <main>
      <section
        id="home"
        className="relative h-[100svh] min-h-[100svh] overflow-hidden bg-[#263a2c] text-white md:h-auto md:min-h-[780px]"
      >
        <HeroImageMotion>
          <Image
            src="/images/hero-pool.webp"
            alt="Private pool surrounded by tropical greenery"
            fill
            priority
            className="object-cover"
          />
        </HeroImageMotion>
        <div className="absolute inset-0 bg-gradient-to-r from-[#15251d]/75 via-[#15251d]/35 to-transparent" />
        <SiteHeader />
        <div className="relative mx-auto flex h-full min-h-[100svh] max-w-[1440px] items-center px-6 pb-44 pt-28 md:h-auto md:min-h-[780px] md:px-16 md:pb-16 md:pt-32">
          <HeroTextMotion className="max-w-[660px]">
            <span className="mb-6 inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.2em] backdrop-blur">
              Private Pool Villa in Ubud
            </span>
            <h1 className="font-display text-5xl leading-[1.08] tracking-[-.035em] md:text-7xl">
              A Tranquil Escape
              <br />
              in the Heart of Ubud
            </h1>
            <p className="mt-6 max-w-[440px] text-sm leading-7 text-white/85 md:text-base">
              A private two-bedroom villa surrounded by rice fields and tropical
              greenery, offering a peaceful stay in Ubud.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookingLinks label="Book Your Stay" />
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border border-white/65 px-6 py-3.5 text-xs font-semibold transition hover:bg-white hover:text-[#183b2a]"
              >
                View Gallery <ArrowRight size={14} />
              </a>
            </div>
          </HeroTextMotion>
        </div>
        <HeroCardMotion className="absolute inset-x-5 bottom-5 mx-auto max-w-[1180px] rounded-2xl border border-white/50 bg-[#faf8f2]/95 p-4 text-[#1d2921] shadow-xl backdrop-blur md:bottom-8 md:flex md:items-center md:justify-between md:rounded-full md:px-8">
          <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-2 text-xs">
              <BedDouble size={20} /> 2 Bedrooms
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Users size={20} /> Up to 4 Guests
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Waves size={20} /> Private Pool
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Flower2 size={20} /> Ricefield View
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <BookingLinks label="Book Your Stay" compact />
          </div>
        </HeroCardMotion>
      </section>

      <section id="villa" className="scroll-mt-24 px-5 py-24 md:px-10 xl:px-16">
        <Reveal className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.05fr_1fr_0.8fr]">
          <div className="relative aspect-[1.21] overflow-hidden rounded-[28px]">
            <Image
              src="/images/about-villa.webp"
              alt="Tropical villa with garden"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div>
            <span className="rounded-full bg-[#ece5d8] px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#53634e]">
              About Wana Jiwa
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              More Than Just
              <br />a Villa
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#697168]">
              Wana Jiwa Ubud is a private villa in the peaceful Payangan area,
              offering a perfect blend of modern comfort and the natural beauty
              of Bali. Enjoy your own private space, tropical surroundings, and
              the calming views of the rice fields.
            </p>
            <a
              href="#amenities"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#183b2a] px-6 py-3 text-xs font-semibold text-white"
            >
              Discover the Villa <ArrowRight size={14} />
            </a>
          </div>
          <div className="space-y-6 border-l border-[#ded9ce] pl-7">
            <Feature
              icon={<DoorOpen />}
              title="Private & Peaceful"
              text="A tranquil setting in Ubud"
            />
            <Feature
              icon={<Flower2 />}
              title="Modern Comfort"
              text="Thoughtfully designed for relaxation"
            />
            <Feature
              icon={<Trees />}
              title="Surrounded by Nature"
              text="Rice fields, greenery, and fresh air"
            />
          </div>
        </Reveal>
      </section>

      <section
        id="amenities"
        className="scroll-mt-24 bg-[#eeece3] px-5 py-20 md:px-10 xl:px-16"
      >
        <Reveal className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.8fr_1.4fr] lg:items-center">
          <div>
            <span className="rounded-full bg-[#e2ddcf] px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#53634e]">
              Our Amenities
            </span>
            <h2 className="mt-5 max-w-[440px] font-display text-4xl leading-tight md:text-5xl">
              Everything You Need for a Comfortable Stay
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#697168]">
              Thoughtful essentials and private spaces to make your stay feel
              effortless.
            </p>
          </div>
          <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {amenities.map((item) => {
              const Icon = iconMap[item.icon] ?? Flower2;
              return (
                <RevealItem key={item.name}>
                  <div className="flex min-h-[116px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#e0dbd0] bg-[#f8f6f0] p-4 text-center">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#183b2a]"
                    />
                    <span className="text-xs leading-5 text-[#39483d]">
                      {item.name}
                    </span>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Reveal>
      </section>

      <Gallery />

      <section className="px-5 pb-24 md:px-10 xl:px-16">
        <Reveal className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[.8fr_1.6fr] lg:items-center">
          <div>
            <span className="rounded-full bg-[#ece5d8] px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#53634e]">
              Guest Reviews
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              What Our Guests Say
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#697168]">
              Real stories from guests who have stayed at Wana Jiwa Ubud.
            </p>
          </div>
          <RevealGroup className="grid gap-4 relative">
            <div className="absolute h-12 w-full bottom-0 z-20 bg-[#f7f4ed]"></div>
            {/* {reviews.map((review) => (
              <RevealItem key={review.name}>
                <article className="rounded-2xl border border-[#e7e2d8] bg-[#faf8f2] p-6">
                  <span className="font-display text-4xl leading-none text-[#315541]">
                    “
                  </span>
                  <p className="mt-2 min-h-[112px] text-sm leading-6 text-[#424a42]">
                    {review.quote}
                  </p>
                  <div className="mt-5 border-t border-[#e7e2d8] pt-4">
                    <p className="text-xs font-semibold">{review.name}</p>
                    <p className="mt-1 text-[10px] text-[#85887f]">
                      {review.place}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))} */}
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-246681d2-59d7-4dc1-929f-779b2101f367"
              data-elfsight-app-lazy
            ></div>
          </RevealGroup>
        </Reveal>
      </section>

      <section
        id="location"
        className="scroll-mt-24 bg-[#eae6dc] px-5 py-20 md:px-10 xl:px-16"
      >
        <Reveal className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="rounded-full bg-[#ded8c9] px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#53634e]">
              Find Your Way
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              A Peaceful Side of Ubud
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#697168]">
              Located in the serene Payangan area, Wana Jiwa offers a relaxing
              escape surrounded by Bali’s natural landscape, while Ubud’s cafés,
              restaurants, and attractions remain within reach.
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#183b2a] px-6 py-3.5 text-xs font-semibold text-white"
            >
              {" "}
              <MapPin size={15} /> View on Google Maps{" "}
              <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="relative aspect-[1.3] overflow-hidden rounded-[26px] bg-[#d9ddcf]">
            <Image
              src="/images/map.webp"
              alt="Lush green landscape in Bali"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20 md:px-10 xl:px-16">
        <Reveal className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div>
            <span className="rounded-full bg-[#ece5d8] px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#53634e]">
              Good to Know
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#697168]">
              A few helpful details before your stay.
            </p>
          </div>
          <FAQ />
        </Reveal>
      </section>

      <section
        id="booking"
        className="relative overflow-hidden bg-[#183b2a] px-5 py-20 text-center text-white md:px-10"
      >
        <Reveal className="relative mx-auto max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-white/65">
            Your Ubud escape awaits
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
            Slow Down. Stay a Little Closer to Nature.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75">
            Make Wana Jiwa your peaceful home in Ubud. Choose your preferred
            booking platform and start planning your stay.
          </p>
          <div className="mt-8 flex justify-center">
            <BookingLinks className="!bg-[#f7f4ed] !text-[#183b2a] shadow-lg shadow-black/10 hover:!bg-white hover:shadow-xl" />
          </div>
        </Reveal>
      </section>

      <footer className="bg-[#112a1e] px-5 py-14 text-white md:px-10 xl:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-2xl tracking-[.16em]">
              WANA JIWA
            </div>
            <div className="mt-2 text-[9px] tracking-[.5em]">UBUD</div>
            <p className="mt-5 max-w-[230px] text-xs leading-6 text-white/65">
              A private pool villa in Ubud, Bali. A peaceful escape surrounded
              by nature and rice fields.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={site.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <Instagram size={16} />
              </a>
              <a
                href={site.socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="social-link"
              >
                <Music2 size={16} />
              </a>
              <a
                href={site.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="social-link"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://wa.me/${site.phone.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-link"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-xs text-white/65">
              <a href="#home">Home</a>
              <a href="#villa">The Villa</a>
              <a href="#amenities">Amenities</a>
              <a href="#gallery">Gallery</a>
              <a href="#location">Location</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold">Get in Touch</h3>
            <div className="mt-5 space-y-4 text-xs text-white/65">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3"
              >
                <Mail size={15} />
                {site.email}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3"
              >
                <MapPin size={15} />
                {site.address}
              </a>
              <a
                href={`https://wa.me/${site.phone.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <Phone size={15} />
                WhatsApp: {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold">Book Your Stay</h3>
            <p className="mt-5 text-xs leading-6 text-white/65">
              Find us on your favorite booking platform.
            </p>
            <div className="mt-4">
              <BookingLinks compact />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1280px] flex-col justify-between gap-3 border-t border-white/15 pt-6 text-[10px] text-white/50 md:flex-row">
          <span>
            © {new Date().getFullYear()} Wana Jiwa Ubud. All rights reserved.
          </span>
          <span>Made for slow moments in Bali.</span>
        </div>
      </footer>
    </main>
  );
}
function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eee8dc] text-[#183b2a]">
        {icon}
      </div>
      <div>
        <h3 className="text-xs font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-[#747a70]">{text}</p>
      </div>
    </div>
  );
}
