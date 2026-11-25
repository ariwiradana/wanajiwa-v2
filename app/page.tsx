import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import MiniGallerySection from "../components/sections/MiniGallerySection";
import VillaSection from "../components/sections/VillaSection";
import AmenitiesSection from "../components/sections/AmenitiesSection";
import GallerySection from "../components/sections/GallerySection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ReviewsSection from "../components/sections/ReviewsSection";
import LocationSection from "../components/sections/LocationSection";
import FAQSection from "../components/sections/FAQSection";
import BookingSection from "../components/sections/BookingSection";
import ContactSection from "../components/sections/ContactSection";
import { amenities, socialLinks } from "../data/site";
import Reveal from "../components/motion/Reveal";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://wanajiwa.com/#wanajiwa",
    name: "Wana Jiwa Ubud",
    url: "https://wanajiwa.com",
    description:
      "A private 2-bedroom villa in Payangan, Ubud, Bali, with a private swimming pool and ricefield surroundings.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Payangan, Ubud",
      addressRegion: "Bali",
      addressCountry: "ID",
    },
    amenityFeature: amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.title,
      value: true,
    })),
    sameAs: socialLinks.map((s) => s.href),
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Reveal><HeroSection /></Reveal>
      <Reveal><MiniGallerySection /></Reveal>
      <Reveal><VillaSection /></Reveal>
      <Reveal><AmenitiesSection /></Reveal>
      <Reveal><GallerySection /></Reveal>
      <Reveal><ExperienceSection /></Reveal>
      <Reveal><ReviewsSection /></Reveal>
      <Reveal><LocationSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <Reveal><BookingSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
      <Reveal><FooterSection /></Reveal>
      <a className="mobileBook" href="#ota">
        Enquire / Book your stay <span>↗</span>
      </a>
    </main>
  );
}
